import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
//import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-modern-personal-website.netlify.app',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  //adapter: cloudflare()
});
