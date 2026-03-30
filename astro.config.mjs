// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://visitkorat.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          th: 'th',
          zh: 'zh-Hans',
        },
      },
    }),
  ],
  redirects: {
    '/attractions': '/en/attractions',
    '/food': '/en/food',
    '/neighborhoods': '/en/neighborhoods',
    '/festivals': '/en/festivals',
    '/getting-around': '/en/getting-around',
    '/plan-your-visit': '/en/plan-your-visit',
    '/blog': '/en/blog',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
