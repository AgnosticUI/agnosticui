import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    noDiscovery: true,
    holdUntilCrawlEnd: false,
    include: [
      'react',
      'react/jsx-runtime',
      'react-dom',
      'react-dom/client',
      'lit',
      'lit/decorators.js',
      'lit/directives/if-defined.js',
      '@lit/react',
      '@floating-ui/dom',
      'focus-trap',
    ],
  },
});
