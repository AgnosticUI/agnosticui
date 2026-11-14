import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    dedupe: ['lit', '@lit/reactive-element', 'lit-html', 'lit-element', 'zod'],
  },
  server: {
    fs: {
      allow: [resolve(__dirname, '../../..')],
    },
  },
});
