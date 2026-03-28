// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sathyajit-P.github.io',
  base: '/Me',
  vite: {
    plugins: [tailwindcss()],
  },
});
