// v2/sdui/demo-support-center/vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Globally establishes jsdom environment mapping across all suite specs automatically
    environment: 'jsdom',
    // Ensures tests match files cleanly inside our isolated src directory structure
    include: ['src/**/*.test.ts'],
  },
});
