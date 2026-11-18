import { defineConfig } from 'vitest/config';
import { sharedA2uiResolve } from '../../../vitest.shared.mjs';

export default defineConfig({
  // Reuse the monorepo's single-instance Lit/Zod/A2UI module resolution
  resolve: sharedA2uiResolve(),
  test: {
    // @agnosticui/a2ui-lit registers custom elements extending HTMLElement
    environment: 'jsdom',
    include: ['**/*.spec.ts'],
  },
});
