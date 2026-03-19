import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Default environment for non-annotated test files (fixtures.spec.ts)
    environment: 'node',
    // Suppress jsdom noise from axe-core's canvas/getComputedStyle probes
    onConsoleLog(log) {
      if (
        log.includes('Not implemented: Window') ||
        log.includes('Not implemented: HTMLCanvasElement')
      ) {
        return false;
      }
    },
  },
});
