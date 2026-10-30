// v2/lib/tests/visual/preview/vite.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  server: {
    port: 4173,
    strictPort: true,
    host: '0.0.0.0',
    fs: {
      strict: true,
      allow: [
        // Allow access to the repository root directory safely
        fileURLToPath(new URL('../../../../', import.meta.url)),
      ]
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