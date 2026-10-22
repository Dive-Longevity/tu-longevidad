import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getArticulos } from '../lib/articles';
import { SITE } from '../lib/site';

export async function GET(context: APIContext) {
  const articulos = await getArticulos();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items: articulos.map((a) => ({
      title: a.data.remate ? `${a.data.title} ${a.data.remate}` : a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      link: `/articulos/${a.id}/`,
    })),
    customData: '<language>es-es</language>',
  });
}
