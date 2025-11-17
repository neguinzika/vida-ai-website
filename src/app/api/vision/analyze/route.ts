/**
 * Endpoint para análise de imagens de alimentos
 * Rate limited e com validações de segurança
 * 
 * IMPORTANTE: Sempre exibir disclaimer de que são estimativas
 */

import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { analyzeFoodImage, validateFoodImage } from '@/services/vision-ai.service';
import { checkPermission, checkUsageLimit, logFeatureUsage } from '@/services/permissions.service';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Rate limiter: 5 análises por hora por usuário
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 3600,
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
        { error: 'Limite de análises atingido. Tente novamente em 1 hora.' },
        { status: 429 }
      );
    }

    // Verificar permissão
    const permission = await checkPermission(user.id, 'food_photo_analysis');
    if (!permission.allowed) {
      return NextResponse.json(
        { error: permission.reason || 'Sem permissão para esta funcionalidade' },
        { status: 403 }
      );
    }

    // Verificar limite de uso
    const usageLimit = await checkUsageLimit(user.id, 'photo_upload', 'day');
    if (!usageLimit.withinLimit) {
      return NextResponse.json(
        {
          error: `Limite diário de ${usageLimit.limit} fotos atingido. Faça upgrade do seu plano para análises ilimitadas.`,
        },
        { status: 403 }
      );
    }

    const formData = await req.formData();
    const image = formData.get('image') as File;
    const portionAdjustment = parseFloat(formData.get('portion_adjustment') as string) || 1.0;
    const consentForTraining = formData.get('consent_for_training') === 'true';

    if (!image) {
      return NextResponse.json({ error: 'Imagem não fornecida' }, { status: 400 });
    }

    // Validar imagem
    const validation = validateFoodImage(image);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Upload para Supabase Storage
    const fileName = `${user.id}/${Date.now()}-${image.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('food-photos')
      .upload(fileName, image, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return NextResponse.json(
        { error: 'Erro ao fazer upload da imagem' },
        { status: 500 }
      );
    }

    // Gerar URL assinada (válida por 1 hora)
    const { data: urlData } = await supabase.storage
      .from('food-photos')
      .createSignedUrl(fileName, 3600);

    if (!urlData?.signedUrl) {
      return NextResponse.json(
        { error: 'Erro ao gerar URL da imagem' },
        { status: 500 }
      );
    }

    // Analisar imagem com IA
    const analysis = await analyzeFoodImage(urlData.signedUrl, portionAdjustment);

    // Salvar resultado no banco
    const { data: photoRecord, error: dbError } = await supabase
      .from('food_photos')
      .insert({
        user_id: user.id,
        image_url: fileName,
        detected_foods: analysis.detected_foods as never,
        total_calories_min: analysis.total_calories_min,
        total_calories_max: analysis.total_calories_max,
        total_calories_avg: analysis.total_calories_avg,
        confidence_score: analysis.confidence_score,
        portion_adjustment: portionAdjustment,
        consent_for_training: consentForTraining,
        date: new Date().toISOString(),
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Erro ao salvar análise' },
        { status: 500 }
      );
    }

    // Log de uso
    await logFeatureUsage(user.id, 'food_photo_analysis', {
      photo_id: photoRecord.id,
      calories: analysis.total_calories_avg,
    });

    return NextResponse.json({
      ...analysis,
      photo_id: photoRecord.id,
      disclaimer: 'Estimativa aproximada — não substitui aconselhamento médico ou nutricional. Ajuste a porção se necessário.',
    });
  } catch (error) {
    console.error('Error in vision analysis:', error);
    return NextResponse.json(
      { error: 'Erro ao analisar imagem. Tente novamente com uma foto mais clara.' },
      { status: 500 }
    );
  }
}

/**
 * GET: Recuperar galeria de fotos do usuário (paginada)
 */
export async function GET(req: NextRequest) {
  try {
    const supabase = await createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    const { data: photos, error, count } = await supabase
      .from('food_photos')
      .select('*', { count: 'exact' })
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      return NextResponse.json({ error: 'Erro ao buscar fotos' }, { status: 500 });
    }

    // Gerar URLs assinadas para as imagens
    const photosWithUrls = await Promise.all(
      (photos || []).map(async photo => {
        const { data: urlData } = await supabase.storage
          .from('food-photos')
          .createSignedUrl(photo.image_url, 3600);

        return {
          ...photo,
          signed_url: urlData?.signedUrl,
        };
      })
    );

    return NextResponse.json({
      photos: photosWithUrls,
      pagination: {
        page,
        limit,
        total: count || 0,
        pages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json({ error: 'Erro ao buscar fotos' }, { status: 500 });
  }
}
