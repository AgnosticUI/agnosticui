import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import agnosticAstro from 'agnosticui-astro';

export default defineConfig({
	integrations: [vue(), svelte(), agnosticAstro()]
});
