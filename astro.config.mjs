import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import lit from '@astrojs/lit';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), lit()],
  vite: {
    ssr: {
      "external": "lit/decorators.js"
    }
  }
});
