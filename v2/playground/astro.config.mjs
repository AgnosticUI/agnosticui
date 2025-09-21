import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [
    react(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ag-')
        }
      }
    }),
    svelte({
      // Explicitly configure for .svelte files
      extensions: ['.svelte']
    })
  ],
  build: {
    // Enable compression
    assets: '_astro',
    // Inline small assets to reduce requests
    inlineStylesheets: 'auto',
  },
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
      },
    },
    build: {
      // Minify CSS and JS (use default esbuild minifier)
      minify: true,
      // Optimize bundle size
      rollupOptions: {
        external: ['fsevents'],
        output: {
          // Better chunk splitting
          manualChunks: {
            // Vendor chunk for large dependencies
            vendor: ['react', 'react-dom', 'vue', 'svelte'],
            // Icons chunk since it's large
            icons: ['lucide-astro']
          }
        }
      }
    },
    // Add specific Svelte 5 support and fix fsevents issue
    optimizeDeps: {
      include: ['svelte', '@astrojs/svelte'],
      exclude: ['@astrojs/svelte > svelte', 'fsevents']
    },
    define: {
      global: 'globalThis'
    },
    // Fix .node file handling for fsevents
    assetsInclude: ['**/*.node']
  },
});
