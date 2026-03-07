import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
})
