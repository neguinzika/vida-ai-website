/**
 * Webhook do Stripe para processar eventos de pagamento
 * Atualiza status de assinatura no Supabase
 * 
 * IMPORTANTE: Configurar no dashboard Stripe:
 * - URL: https://seu-dominio.com/api/webhooks/stripe
 * - Eventos: checkout.session.completed, customer.subscription.updated, 
 *   customer.subscription.deleted, invoice.payment_failed, invoice.payment_succeeded
 */

import { NextRequest, NextResponse } from 'next/server';
import { stripe, PRICE_TO_PLAN } from '@/lib/stripe/config';
import { createServerClient } from '@/lib/supabase/server';
import Stripe from 'stripe';

// Desabilitar body parser do Next.js para webhooks
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: ReadableStream) {
  const chunks = [];
  const reader = readable.getReader();
  let done, value;
  while (!done) {
    ({ value, done } = await reader.read());
    if (value) {
      chunks.push(value);
    }
  }
  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  const body = await buffer(req.body!);
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = await createServerClient();

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Buscar subscription
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );

        const priceId = subscription.items.data[0].price.id;
        const planType = PRICE_TO_PLAN[priceId] || 'free';

        // Atualizar usuário no Supabase
        await supabase
          .from('users')
          .update({
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: session.subscription as string,
            plan_type: planType as never,
            subscription_status: 'active',
            subscription_ends_at: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq('email', session.customer_email!);

        // Log de auditoria
        await supabase.from('audit_logs').insert({
          action: 'subscription_created',
          resource_type: 'subscription',
          resource_id: session.subscription as string,
          metadata: { plan_type: planType, amount: session.amount_total } as never,
        });

        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        const priceId = subscription.items.data[0].price.id;
        const planType = PRICE_TO_PLAN[priceId] || 'free';

        await supabase
          .from('users')
          .update({
            plan_type: planType as never,
            subscription_status: subscription.status as never,
            subscription_ends_at: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', subscription.id);

        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;

        await supabase
          .from('users')
          .update({
            plan_type: 'free',
            subscription_status: 'canceled',
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', subscription.id);

        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;

        await supabase
          .from('users')
          .update({
            subscription_status: 'past_due',
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_customer_id', invoice.customer as string);

        // Criar notificação para o usuário
        const { data: user } = await supabase
          .from('users')
          .select('id')
          .eq('stripe_customer_id', invoice.customer as string)
          .single();

        if (user) {
          await supabase.from('notifications').insert({
            user_id: user.id,
            type: 'payment_failed',
            title: 'Falha no pagamento',
            message: 'Houve um problema com o pagamento da sua assinatura. Por favor, atualize suas informações de pagamento.',
            action_url: '/perfil/minha-assinatura',
          });
        }

        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;

        await supabase
          .from('users')
          .update({
            subscription_status: 'active',
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_customer_id', invoice.customer as string);

        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
