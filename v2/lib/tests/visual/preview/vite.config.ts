// v2/lib/tests/visual/preview/vite.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  server: {
    port: 4173,
    strictPort: true,
    host: '0.0.0.0',
    fs: {
      strict: false,
    },
    allowedHosts: ['host.docker.internal'],
  },

  preview: {
    port: 4173,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['host.docker.internal'],
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, '../../src'),
    },
  },
});