import { defineConfig } from 'astro/config';
import agnosticAstro from '@astrojs/agnostic-astro';

export default defineConfig({
  integrations: [agnosticAstro()]
});
