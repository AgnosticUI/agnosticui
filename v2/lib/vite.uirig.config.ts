// v2/lib/vite.uirig.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  server: {
    host: true,
    port: 4174,
    strictPort: true,
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
    },
    fs: {
      strict: true,
      allow: [
        fileURLToPath(new URL('../../', import.meta.url)),
      ],
    },
  },
  preview: {
    host: true,
    port: 4174,
    strictPort: true,
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: '.uirig/preview-dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        distHarness: resolve(__dirname, 'tests/uirig/harness/dist.html'),
      },
    },
  },
  resolve: {
    dedupe: ['lit'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
