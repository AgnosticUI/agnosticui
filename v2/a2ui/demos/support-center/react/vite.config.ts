import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: [
      'lit',
      '@lit/reactive-element',
      'lit-html',
      'lit-element',
      '@lit-labs/signals',
      'react',
      'react-dom',
      'zod',
    ],
    alias: {
      '@agnosticui/a2ui-lit': resolve(__dirname, 'node_modules/@agnosticui/a2ui-lit'),
      '@agnosticui/a2ui-react': resolve(__dirname, 'node_modules/@agnosticui/a2ui-react'),
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname, '../../../..')],
    },
  },
});
