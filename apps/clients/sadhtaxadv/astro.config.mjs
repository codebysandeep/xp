// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourdomain.com', // Update this with your actual domain
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static', // For SEO-friendly static site generation
});
