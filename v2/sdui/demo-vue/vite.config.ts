import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
  optimizeDeps: {
    noDiscovery: true,
    holdUntilCrawlEnd: false,
    include: [
      'vue',
      'lit',
      'lit/decorators.js',
      'lit/directives/if-defined.js',
      '@floating-ui/dom',
      'focus-trap',
    ],
  },
});
