// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://lennylin1998.github.io',
	integrations: [mdx(), sitemap(), preact()],
});
