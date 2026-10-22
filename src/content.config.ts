import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    // Remate del titular (segunda frase del par afirmación + remate)
    remate: z.string().optional(),
    description: z.string(),
    serie: z.enum(['sueno', 'alimentacion', 'movimiento', 'habitos', 'analisis']),
    formato: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Redacción Tú Longevidad'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingMinutes: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    fuentes: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),
  }),
});

export const collections = { articulos };
