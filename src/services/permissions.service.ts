/**
 * Service para gerenciar permissões de plano
 * Verifica limites e features disponíveis por plano
 */

import { createServerClient } from '@/lib/supabase/server';

export interface PlanPermission {
  feature: string;
  enabled: boolean;
  limit_value: number | null;
}

export interface PlanLimits {
  financeiro: {
    transactions_per_month: number;
    goals: number;
    exports: number;
  };
  saude: {
    photo_uploads_per_day: number;
    weight_logs_per_month: number;
    exports: number;
  };
  completo: {
    transactions_per_month: number;
    goals: number;
    photo_uploads_per_day: number;
    weight_logs_per_month: number;
    exports: number;
  };
  free: {
    transactions_per_month: number;
    goals: number;
    photo_uploads_per_day: number;
    weight_logs_per_month: number;
    exports: number;
  };
}

export const PLAN_LIMITS: PlanLimits = {
  free: {
    transactions_per_month: 10,
    goals: 1,
    photo_uploads_per_day: 2,
    weight_logs_per_month: 10,
    exports: 1,
  },
  financeiro: {
    transactions_per_month: -1, // ilimitado
    goals: -1,
    exports: -1,
  },
  saude: {
    photo_uploads_per_day: -1,
    weight_logs_per_month: -1,
    exports: -1,
  },
  completo: {
    transactions_per_month: -1,
    goals: -1,
    photo_uploads_per_day: -1,
    weight_logs_per_month: -1,
    exports: -1,
  },
};

/**
 * Verifica se o usuário tem permissão para uma feature específica
 */
export async function checkPermission(
  userId: string,
  feature: string
): Promise<{ allowed: boolean; reason?: string }> {
  const supabase = await createServerClient();

  // Buscar plano do usuário
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('plan_type, subscription_status')
    .eq('id', userId)
    .single();

  if (userError || !user) {
    return { allowed: false, reason: 'Usuário não encontrado' };
  }

  // Verificar status da assinatura
  if (user.subscription_status !== 'active' && user.subscription_status !== 'trial') {
    return { allowed: false, reason: 'Assinatura inativa' };
  }

  // Buscar permissões do plano
  const { data: permissions, error: permError } = await supabase
    .from('plan_permissions')
    .select('*')
    .eq('plan_type', user.plan_type)
    .eq('feature', feature)
    .single();

  if (permError || !permissions) {
    return { allowed: false, reason: 'Feature não disponível no seu plano' };
  }

  return { allowed: permissions.enabled };
}

/**
 * Verifica se o usuário atingiu o limite de uso de uma feature
 */
export async function checkUsageLimit(
  userId: string,
  feature: string,
  period: 'day' | 'month' = 'month'
): Promise<{ withinLimit: boolean; current: number; limit: number }> {
  const supabase = await createServerClient();

  // Buscar plano do usuário
  const { data: user } = await supabase
    .from('users')
    .select('plan_type')
    .eq('id', userId)
    .single();

  if (!user) {
    return { withinLimit: false, current: 0, limit: 0 };
  }

  const planType = user.plan_type as keyof PlanLimits;
  const limits = PLAN_LIMITS[planType];

  // Se o limite é -1, é ilimitado
  let limit = 0;
  if (feature.includes('transaction')) {
    limit = limits.transactions_per_month || 0;
  } else if (feature.includes('photo')) {
    limit = limits.photo_uploads_per_day || 0;
  } else if (feature.includes('weight')) {
    limit = limits.weight_logs_per_month || 0;
  } else if (feature.includes('export')) {
    limit = limits.exports || 0;
  }

  if (limit === -1) {
    return { withinLimit: true, current: 0, limit: -1 };
  }

  // Calcular período
  const now = new Date();
  let startDate: Date;
  if (period === 'day') {
    startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  } else {
    startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  }

  // Contar uso atual (exemplo para transações)
  let current = 0;
  if (feature.includes('transaction')) {
    const { count } = await supabase
      .from('financial_transactions')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .gte('created_at', startDate.toISOString());
    current = count || 0;
  } else if (feature.includes('photo')) {
    const { count } = await supabase
      .from('food_photos')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .gte('created_at', startDate.toISOString());
    current = count || 0;
  }

  return {
    withinLimit: current < limit,
    current,
    limit,
  };
}

/**
 * Registra uso de uma feature para auditoria
 */
export async function logFeatureUsage(
  userId: string,
  feature: string,
  metadata?: Record<string, unknown>
) {
  const supabase = await createServerClient();

  await supabase.from('audit_logs').insert({
    user_id: userId,
    action: 'feature_usage',
    resource_type: feature,
    metadata: metadata as never,
  });
}
