// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourdomain.com', // Update this with your actual domain
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Let shadcn handle base styles
    }),
    sitemap()
  ],
  output: 'static', // For SEO-friendly static site generation
});
