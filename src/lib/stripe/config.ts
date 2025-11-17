/**
 * Cliente Stripe configurado com chave secreta
 * Uso exclusivo no servidor (API routes)
 */

import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY não configurada');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

/**
 * IDs dos produtos Stripe (configurar no dashboard Stripe)
 */
export const STRIPE_PLANS = {
  FREE: 'free',
  FINANCEIRO: process.env.NEXT_PUBLIC_STRIPE_PRICE_FINANCEIRO || '',
  SAUDE: process.env.NEXT_PUBLIC_STRIPE_PRICE_SAUDE || '',
  COMPLETO: process.env.NEXT_PUBLIC_STRIPE_PRICE_COMPLETO || '',
} as const;

/**
 * Mapeamento de Price IDs para tipos de plano
 */
export const PRICE_TO_PLAN: Record<string, string> = {
  [STRIPE_PLANS.FINANCEIRO]: 'financeiro',
  [STRIPE_PLANS.SAUDE]: 'saude',
  [STRIPE_PLANS.COMPLETO]: 'completo',
};
