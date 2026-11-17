import { defineConfig } from 'vitest/config';
import { sharedA2uiResolve } from '../../vitest.shared.mjs';

export default defineConfig({
  resolve: sharedA2uiResolve(),
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
});
