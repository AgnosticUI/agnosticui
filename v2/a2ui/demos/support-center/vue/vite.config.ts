import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.startsWith('a2ui-') || tag.startsWith('ag-'),
        },
      },
    }),
  ],
  resolve: {
    dedupe: [
      'lit',
      '@lit/reactive-element',
      'lit-html',
      'lit-element',
      '@lit-labs/signals',
      'vue',
      'zod',
    ],
    alias: {
      '@agnosticui/a2ui-lit': resolve(__dirname, 'node_modules/@agnosticui/a2ui-lit'),
      '@agnosticui/a2ui-vue': resolve(__dirname, 'node_modules/@agnosticui/a2ui-vue'),
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname, '../../../..')],
    },
  },
});
