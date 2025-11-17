/**
 * Cliente Supabase para uso no lado do cliente (browser)
 * Configuração segura com variáveis de ambiente
 */

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/database';

export const createClient = () => {
  return createClientComponentClient<Database>();
};

export const supabase = createClient();
