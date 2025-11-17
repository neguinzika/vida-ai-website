/**
 * Endpoint para cancelar assinatura do Stripe
 * Cancela no final do período de cobrança
 */

import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/config';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    // Buscar subscription_id do usuário
    const { data: userData } = await supabase
      .from('users')
      .select('stripe_subscription_id')
      .eq('id', user.id)
      .single();

    if (!userData?.stripe_subscription_id) {
      return NextResponse.json(
        { error: 'Nenhuma assinatura ativa encontrada' },
        { status: 404 }
      );
    }

    // Cancelar assinatura no final do período
    const subscription = await stripe.subscriptions.update(
      userData.stripe_subscription_id,
      {
        cancel_at_period_end: true,
      }
    );

    // Atualizar status no Supabase
    await supabase
      .from('users')
      .update({
        subscription_status: 'canceled',
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);

    // Log de auditoria
    await supabase.from('audit_logs').insert({
      user_id: user.id,
      action: 'subscription_canceled',
      resource_type: 'subscription',
      resource_id: userData.stripe_subscription_id,
    });

    return NextResponse.json({
      success: true,
      cancel_at: new Date(subscription.cancel_at! * 1000).toISOString(),
    });
  } catch (error) {
    console.error('Error canceling subscription:', error);
    return NextResponse.json(
      { error: 'Erro ao cancelar assinatura' },
      { status: 500 }
    );
  }
}
