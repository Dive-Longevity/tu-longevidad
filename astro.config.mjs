import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Cambia SITE_URL en Vercel cuando haya dominio propio.
const site = process.env.SITE_URL || 'https://tu-longevidad.vercel.app';

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
  trailingSlash: 'ignore',
});
