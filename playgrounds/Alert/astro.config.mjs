import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';

export default defineConfig({
	integrations: [vue(), react(), svelte()],
  server: {
    port: 3012,
  }
});
