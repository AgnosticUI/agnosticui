import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ag-'),
        }
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        actions:    resolve(__dirname, 'pages/actions.html'),
        forms:      resolve(__dirname, 'pages/forms.html'),
        feedback:   resolve(__dirname, 'pages/feedback.html'),
        navigation: resolve(__dirname, 'pages/navigation.html'),
        overlays:   resolve(__dirname, 'pages/overlays.html'),
        layout:     resolve(__dirname, 'pages/layout.html'),
        display:    resolve(__dirname, 'pages/display.html'),
      },
    },
  },
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
})
