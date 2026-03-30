// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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