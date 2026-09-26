import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arcana.uufy.top',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/full-reading/interest/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
