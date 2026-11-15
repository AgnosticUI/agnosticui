import { defineConfig } from 'vitest/config';
import { sharedA2uiResolve } from '../../vitest.shared.mjs';

export default defineConfig({
  resolve: sharedA2uiResolve(['react', 'react-dom']),
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
});
