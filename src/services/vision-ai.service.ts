/**
 * Service de Visão por IA para análise de alimentos
 * Usa OpenAI Vision API para detectar alimentos e estimar calorias
 * 
 * IMPORTANTE: Sempre exibir disclaimer de que são estimativas
 */

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface DetectedFood {
  name: string;
  portion: string;
  calories_min: number;
  calories_max: number;
  calories_avg: number;
  confidence: number;
  macros?: {
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface FoodAnalysisResult {
  detected_foods: DetectedFood[];
  total_calories_min: number;
  total_calories_max: number;
  total_calories_avg: number;
  confidence_score: number;
  suggestions?: string[];
  healthier_alternatives?: Array<{
    original: string;
    alternative: string;
    calories_saved: number;
  }>;
}

/**
 * Analisa imagem de comida e retorna estimativa de calorias
 * DISCLAIMER: Resultados são estimativas e não substituem avaliação profissional
 */
export async function analyzeFoodImage(
  imageUrl: string,
  portionAdjustment: number = 1.0
): Promise<FoodAnalysisResult> {
  try {
    const prompt = `Você é um nutricionista especializado em análise visual de alimentos.

Analise esta imagem e identifique:
1. Todos os alimentos visíveis (máximo 5 principais)
2. Estimativa de porção para cada item
3. Intervalo de calorias (mínimo, máximo e média)
4. Nível de confiança da estimativa (0-1)
5. Macronutrientes aproximados (proteína, carboidratos, gordura em gramas)

IMPORTANTE: 
- Seja conservador nas estimativas
- Considere que porções podem variar
- Indique baixa confiança se a imagem não for clara

Retorne APENAS um JSON no formato:
{
  "detected_foods": [
    {
      "name": "nome do alimento",
      "portion": "descrição da porção (ex: 1 prato médio, 2 fatias)",
      "calories_min": 200,
      "calories_max": 300,
      "calories_avg": 250,
      "confidence": 0.85,
      "macros": {
        "protein": 20,
        "carbs": 30,
        "fat": 10
      }
    }
  ],
  "total_calories_min": 200,
  "total_calories_max": 300,
  "total_calories_avg": 250,
  "confidence_score": 0.85,
  "suggestions": ["dica 1", "dica 2"]
}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Você é um especialista em nutrição que analisa imagens de alimentos e fornece estimativas conservadoras de calorias. SEMPRE indique que são estimativas aproximadas.',
        },
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            {
              type: 'image_url',
              image_url: {
                url: imageUrl,
                detail: 'high',
              },
            },
          ],
        },
      ],
      response_format: { type: 'json_object' },
      max_tokens: 1000,
    });

    const result: FoodAnalysisResult = JSON.parse(
      response.choices[0].message.content || '{}'
    );

    // Aplicar ajuste de porção
    if (portionAdjustment !== 1.0) {
      result.detected_foods = result.detected_foods.map(food => ({
        ...food,
        calories_min: Math.round(food.calories_min * portionAdjustment),
        calories_max: Math.round(food.calories_max * portionAdjustment),
        calories_avg: Math.round(food.calories_avg * portionAdjustment),
      }));

      result.total_calories_min = Math.round(result.total_calories_min * portionAdjustment);
      result.total_calories_max = Math.round(result.total_calories_max * portionAdjustment);
      result.total_calories_avg = Math.round(result.total_calories_avg * portionAdjustment);
    }

    // Gerar alternativas saudáveis
    result.healthier_alternatives = await generateHealthierAlternatives(
      result.detected_foods
    );

    return result;
  } catch (error) {
    console.error('Error analyzing food image:', error);
    throw new Error('Não foi possível analisar a imagem. Tente novamente com uma foto mais clara.');
  }
}

/**
 * Gera sugestões de alternativas mais saudáveis
 */
async function generateHealthierAlternatives(
  foods: DetectedFood[]
): Promise<Array<{ original: string; alternative: string; calories_saved: number }>> {
  try {
    const foodList = foods.map(f => `${f.name} (${f.calories_avg} kcal)`).join(', ');

    const prompt = `Liste até 3 alternativas mais saudáveis para: ${foodList}

Retorne APENAS um JSON:
{
  "alternatives": [
    {
      "original": "alimento original",
      "alternative": "alternativa saudável",
      "calories_saved": diferença_em_calorias
    }
  ]
}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Você sugere alternativas saudáveis e realistas para alimentos.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
      max_tokens: 300,
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    return result.alternatives || [];
  } catch (error) {
    console.error('Error generating alternatives:', error);
    return [];
  }
}

/**
 * Calcula impacto na meta diária de calorias
 */
export function calculateDailyImpact(
  mealCalories: number,
  dailyGoal: number
): {
  percentage: number;
  remaining: number;
  status: 'under' | 'on_track' | 'over';
  message: string;
} {
  const percentage = (mealCalories / dailyGoal) * 100;
  const remaining = dailyGoal - mealCalories;

  let status: 'under' | 'on_track' | 'over';
  let message: string;

  if (percentage < 25) {
    status = 'under';
    message = `Esta refeição representa ${percentage.toFixed(0)}% da sua meta diária. Você ainda tem ${remaining.toFixed(0)} kcal disponíveis.`;
  } else if (percentage <= 35) {
    status = 'on_track';
    message = `Refeição equilibrada! Representa ${percentage.toFixed(0)}% da sua meta diária.`;
  } else {
    status = 'over';
    message = `Atenção: esta refeição representa ${percentage.toFixed(0)}% da sua meta diária. Considere refeições mais leves no restante do dia.`;
  }

  return {
    percentage,
    remaining,
    status,
    message,
  };
}

/**
 * Valida se a imagem é adequada para análise
 */
export function validateFoodImage(file: File): { valid: boolean; error?: string } {
  // Validar tipo
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Formato inválido. Use JPEG, PNG ou WebP.',
    };
  }

  // Validar tamanho (máximo 10MB)
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return {
      valid: false,
      error: 'Imagem muito grande. Máximo 10MB.',
    };
  }

  return { valid: true };
}
