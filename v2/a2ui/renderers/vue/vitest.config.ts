import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { sharedA2uiResolve } from '../../vitest.shared.mjs';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.startsWith('a2ui-') || tag.startsWith('ag-'),
        },
      },
    }),
  ],
  resolve: sharedA2uiResolve(['vue']),
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
});
