import { getCollection, type CollectionEntry } from 'astro:content';

export type Articulo = CollectionEntry<'articulos'>;

export async function getArticulos() {
  const all = await getCollection('articulos', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingTime(a: Articulo) {
  if (a.data.readingMinutes) return a.data.readingMinutes;
  const words = (a.body ?? '').split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}
