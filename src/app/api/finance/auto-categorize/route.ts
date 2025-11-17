/**
 * Endpoint para categorização automática de transações
 * Rate limited para evitar abuso
 */

import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { categorizeTransaction } from '@/services/finance-ai.service';
import { checkPermission, checkUsageLimit } from '@/services/permissions.service';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Rate limiter: 10 requisições por minuto por usuário
const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60,
});

export async function POST(req: NextRequest) {
  try {
    const supabase = await createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    // Rate limiting
    try {
      await rateLimiter.consume(user.id);
    } catch {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em alguns segundos.' },
        { status: 429 }
      );
    }

    // Verificar permissão
    const permission = await checkPermission(user.id, 'auto_categorize');
    if (!permission.allowed) {
      return NextResponse.json(
        { error: permission.reason || 'Sem permissão' },
        { status: 403 }
      );
    }

    const { description, amount } = await req.json();

    if (!description || amount === undefined) {
      return NextResponse.json(
        { error: 'Descrição e valor são obrigatórios' },
        { status: 400 }
      );
    }

    // Categorizar transação
    const result = await categorizeTransaction(description, amount);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in auto-categorize:', error);
    return NextResponse.json(
      { error: 'Erro ao categorizar transação' },
      { status: 500 }
    );
  }
}
