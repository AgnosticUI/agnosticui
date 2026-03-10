import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Tell Vue to treat ag-* tags as custom elements (Lit components)
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
});
