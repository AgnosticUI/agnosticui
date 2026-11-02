import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ag-')
        }
      }
    }),
    svelte({
      compilerOptions: {
        customElement: false
      }
    })
  ],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test-setup.ts'],
    globals: true,
    exclude: [
      ...configDefaults.exclude,
      '**/*.drift.spec.ts'
    ],
  },
});
