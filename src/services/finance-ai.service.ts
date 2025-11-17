/**
 * Service de IA Financeira
 * Categorização automática, análise de gastos e sugestões
 */

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Categorias padrão
export const FINANCIAL_CATEGORIES = [
  'Alimentação',
  'Transporte',
  'Moradia',
  'Saúde',
  'Educação',
  'Lazer',
  'Vestuário',
  'Serviços',
  'Investimentos',
  'Outros',
] as const;

export type FinancialCategory = (typeof FINANCIAL_CATEGORIES)[number];

interface CategorizationResult {
  category: FinancialCategory;
  confidence: number;
  reasoning?: string;
}

/**
 * Categoriza automaticamente uma transação usando IA
 */
export async function categorizeTransaction(
  description: string,
  amount: number
): Promise<CategorizationResult> {
  try {
    const prompt = `Você é um assistente financeiro. Categorize a seguinte transação:
    
Descrição: ${description}
Valor: R$ ${amount.toFixed(2)}

Categorias disponíveis: ${FINANCIAL_CATEGORIES.join(', ')}

Retorne APENAS um JSON no formato:
{
  "category": "categoria escolhida",
  "confidence": 0.95,
  "reasoning": "breve explicação"
}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Você é um especialista em finanças pessoais que categoriza transações com precisão.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    return {
      category: result.category || 'Outros',
      confidence: result.confidence || 0.5,
      reasoning: result.reasoning,
    };
  } catch (error) {
    console.error('Error categorizing transaction:', error);
    // Fallback para categorização básica por palavras-chave
    return fallbackCategorization(description);
  }
}

/**
 * Fallback: categorização por palavras-chave
 */
function fallbackCategorization(description: string): CategorizationResult {
  const desc = description.toLowerCase();
  
  const keywords: Record<FinancialCategory, string[]> = {
    'Alimentação': ['mercado', 'supermercado', 'restaurante', 'lanche', 'comida', 'ifood', 'uber eats'],
    'Transporte': ['uber', '99', 'gasolina', 'combustível', 'ônibus', 'metrô', 'estacionamento'],
    'Moradia': ['aluguel', 'condomínio', 'água', 'luz', 'energia', 'internet', 'gás'],
    'Saúde': ['farmácia', 'médico', 'hospital', 'plano de saúde', 'consulta', 'remédio'],
    'Educação': ['escola', 'faculdade', 'curso', 'livro', 'material escolar'],
    'Lazer': ['cinema', 'teatro', 'show', 'viagem', 'netflix', 'spotify', 'streaming'],
    'Vestuário': ['roupa', 'calçado', 'sapato', 'loja de roupa'],
    'Serviços': ['salão', 'barbeiro', 'lavanderia', 'conserto'],
    'Investimentos': ['investimento', 'ação', 'fundo', 'poupança', 'cdb'],
    'Outros': [],
  };

  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => desc.includes(word))) {
      return {
        category: category as FinancialCategory,
        confidence: 0.7,
        reasoning: 'Categorizado por palavra-chave',
      };
    }
  }

  return {
    category: 'Outros',
    confidence: 0.5,
    reasoning: 'Não foi possível identificar categoria específica',
  };
}

/**
 * Gera resumo semanal em linguagem natural
 */
export async function generateWeeklySummary(
  transactions: Array<{ amount: number; category: string; type: string }>
): Promise<string> {
  try {
    // Calcular totais por categoria
    const categoryTotals: Record<string, number> = {};
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(t => {
      if (t.type === 'income') {
        totalIncome += t.amount;
      } else {
        totalExpense += t.amount;
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      }
    });

    const topCategories = Object.entries(categoryTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    const prompt = `Crie um resumo semanal amigável e motivador sobre as finanças:

Receitas: R$ ${totalIncome.toFixed(2)}
Despesas: R$ ${totalExpense.toFixed(2)}
Saldo: R$ ${(totalIncome - totalExpense).toFixed(2)}

Top 3 categorias de gastos:
${topCategories.map(([cat, val]) => `- ${cat}: R$ ${val.toFixed(2)}`).join('\n')}

Escreva um resumo de 2-3 parágrafos, sendo encorajador e oferecendo uma dica prática.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Você é um consultor financeiro amigável que ajuda pessoas a entenderem seus gastos.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return response.choices[0].message.content || 'Resumo não disponível';
  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Não foi possível gerar o resumo semanal no momento.';
  }
}

/**
 * Detecta gastos anormais (acima de 2 desvios padrão)
 */
export function detectAnomalousSpending(
  transactions: Array<{ amount: number; category: string }>,
  newTransaction: { amount: number; category: string }
): { isAnomalous: boolean; threshold: number; message?: string } {
  // Filtrar transações da mesma categoria
  const categoryTransactions = transactions.filter(
    t => t.category === newTransaction.category
  );

  if (categoryTransactions.length < 3) {
    return { isAnomalous: false, threshold: 0 };
  }

  // Calcular média e desvio padrão
  const amounts = categoryTransactions.map(t => t.amount);
  const mean = amounts.reduce((a, b) => a + b, 0) / amounts.length;
  const variance =
    amounts.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / amounts.length;
  const stdDev = Math.sqrt(variance);

  const threshold = mean + 2 * stdDev;
  const isAnomalous = newTransaction.amount > threshold;

  return {
    isAnomalous,
    threshold,
    message: isAnomalous
      ? `Este gasto em ${newTransaction.category} está acima do seu padrão habitual (R$ ${mean.toFixed(2)} em média).`
      : undefined,
  };
}

/**
 * Sugere meta personalizada baseada no histórico
 */
export async function suggestPersonalizedGoal(
  monthlyIncome: number,
  monthlyExpenses: number,
  existingGoals: Array<{ target_amount: number }>
): Promise<{ title: string; amount: number; months: number; reasoning: string }> {
  const monthlySavings = monthlyIncome - monthlyExpenses;
  const savingsRate = monthlySavings / monthlyIncome;

  try {
    const prompt = `Sugira uma meta financeira realista:

Renda mensal: R$ ${monthlyIncome.toFixed(2)}
Despesas mensais: R$ ${monthlyExpenses.toFixed(2)}
Economia mensal: R$ ${monthlySavings.toFixed(2)} (${(savingsRate * 100).toFixed(1)}%)
Metas existentes: ${existingGoals.length}

Retorne APENAS um JSON:
{
  "title": "nome da meta",
  "amount": valor_numerico,
  "months": prazo_em_meses,
  "reasoning": "explicação breve"
}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Você é um planejador financeiro que sugere metas realistas e motivadoras.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    return result;
  } catch (error) {
    console.error('Error suggesting goal:', error);
    // Fallback: sugerir reserva de emergência
    return {
      title: 'Reserva de Emergência',
      amount: monthlyExpenses * 6,
      months: 12,
      reasoning: 'Uma reserva de emergência equivalente a 6 meses de despesas é essencial para segurança financeira.',
    };
  }
}
