/**
 * Endpoint para criar sessão de checkout do Stripe
 * Cria assinatura com trial de 15 dias
 */

import { NextRequest, NextResponse } from 'next/server';
import { stripe, STRIPE_PLANS } from '@/lib/stripe/config';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { priceId, planType } = await req.json();

    const supabase = await createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    // Buscar dados do usuário
    const { data: userData } = await supabase
      .from('users')
      .select('email, stripe_customer_id')
      .eq('id', user.id)
      .single();

    if (!userData) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Criar ou recuperar customer do Stripe
    let customerId = userData.stripe_customer_id;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: userData.email,
        metadata: {
          supabase_user_id: user.id,
        },
      });
      customerId = customer.id;

      // Atualizar Supabase com customer_id
      await supabase
        .from('users')
        .update({ stripe_customer_id: customerId })
        .eq('id', user.id);
    }

    // Criar sessão de checkout com trial de 15 dias
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      subscription_data: {
        trial_period_days: 15,
        metadata: {
          plan_type: planType,
        },
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/planos`,
      metadata: {
        user_id: user.id,
        plan_type: planType,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Erro ao criar sessão de checkout' },
      { status: 500 }
    );
  }
}
