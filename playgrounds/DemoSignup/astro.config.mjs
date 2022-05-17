import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import agnosticAstro from 'agnosticui-astro';

export default defineConfig({
	integrations: [vue(), react(), svelte(), agnosticAstro()]
});
