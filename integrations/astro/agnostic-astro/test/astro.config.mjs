import { defineConfig } from 'astro/config';
import agnosticAstro from 'astro-agnosticui';;

export default defineConfig({
  integrations: [agnosticAstro()]
});
