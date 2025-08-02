// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import robots from 'astro-robots';

// https://astro.build/config
export default defineConfig({
    site: 'https://jimsug.github.io',
    integrations: [mdx(), sitemap(), robots()],
});