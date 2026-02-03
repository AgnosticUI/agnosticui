import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat ag-* tags as custom elements (web components)
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
})
