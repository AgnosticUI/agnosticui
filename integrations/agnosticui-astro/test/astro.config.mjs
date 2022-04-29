import { defineConfig } from 'astro/config';
import agnosticAstro from 'agnosticui-astro';

export default defineConfig({
  integrations: [agnosticAstro()]
});
