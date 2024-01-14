import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://https://main--astro-site-purple-fox.netlify.app/",
  integrations: [preact()]
});