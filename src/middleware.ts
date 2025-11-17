/**
 * Middleware de autenticação e autorização
 * Protege rotas e verifica permissões de plano
 */

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from '@/types/database';

// Rotas públicas que não requerem autenticação
const PUBLIC_ROUTES = ['/', '/login', '/sobre', '/funcionalidades', '/planos', '/termos', '/privacidade'];

// Rotas que requerem planos específicos
const PLAN_PROTECTED_ROUTES: Record<string, string[]> = {
  '/dashboard/financeiro': ['financeiro', 'completo'],
  '/dashboard/saude': ['saude', 'completo'],
  '/api/finance': ['financeiro', 'completo'],
  '/api/health': ['saude', 'completo'],
  '/api/vision': ['saude', 'completo'],
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  // Verificar sessão
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const path = req.nextUrl.pathname;

  // Permitir rotas públicas
  if (PUBLIC_ROUTES.some(route => path === route || path.startsWith('/api/webhooks'))) {
    return res;
  }

  // Redirecionar para login se não autenticado
  if (!session) {
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(redirectUrl);
  }

  // Verificar permissões de plano para rotas protegidas
  for (const [route, allowedPlans] of Object.entries(PLAN_PROTECTED_ROUTES)) {
    if (path.startsWith(route)) {
      const { data: user } = await supabase
        .from('users')
        .select('plan_type, subscription_status')
        .eq('id', session.user.id)
        .single();

      if (!user) {
        return NextResponse.redirect(new URL('/login', req.url));
      }

      // Verificar se o plano do usuário está na lista de permitidos
      if (!allowedPlans.includes(user.plan_type)) {
        return NextResponse.redirect(new URL('/planos?upgrade=true', req.url));
      }

      // Verificar se a assinatura está ativa
      if (user.subscription_status !== 'active' && user.subscription_status !== 'trial') {
        return NextResponse.redirect(new URL('/perfil/minha-assinatura', req.url));
      }
    }
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
