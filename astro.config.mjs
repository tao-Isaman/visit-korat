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
        defaultLocale: 'th',
        locales: {
          en: 'en',
          th: 'th',
          zh: 'zh-Hans',
        },
      },
    }),
  ],
  redirects: {
    '/attractions': '/th/attractions',
    '/food': '/th/food',
    '/neighborhoods': '/th/neighborhoods',
    '/festivals': '/th/festivals',
    '/getting-around': '/th/getting-around',
    '/plan-your-visit': '/th/plan-your-visit',
    '/blog': '/th/blog',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
