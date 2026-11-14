import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    dedupe: ['lit', '@lit/reactive-element', 'lit-html', 'lit-element', 'zod'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
});
