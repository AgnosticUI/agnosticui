import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    noDiscovery: true,
    holdUntilCrawlEnd: false,
    include: [
      'lit',
      'lit/decorators.js',
      'lit/directives/if-defined.js',
      '@floating-ui/dom',
      'focus-trap',
    ],
  },
});
