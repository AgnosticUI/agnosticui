import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    dedupe: ['lit', '@lit/reactive-element', 'lit-html', 'lit-element', 'zod'],
    alias: {
      '@agnosticui/a2ui-lit': resolve(__dirname, 'node_modules/@agnosticui/a2ui-lit'),
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname, '../../../..')],
    },
  },
});
