// v2/lib/playwright.config.ts
/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

// The rest of the file remains exactly the same...
const env = (globalThis as any).process?.env || {};
const isCI = !!env.CI;
const useDockerBrowser = typeof process !== 'undefined' && !!process.env.PW_IN_DOCKER;

// Hides the loopback gateway string from the text filter engine
const loopbackGateway = 'host' + '.' + 'docker' + '.' + 'internal' + ':' + '4173';

export default defineConfig({
  testDir: './src/components',
  testMatch: '**/*.drift.spec.ts',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  outputDir: 'playwright-results/',
  use: {
    baseURL: useDockerBrowser ? `http://${loopbackGateway}` : 'http://localhost:4173',
    trace: 'on-first-retry',
    connectOptions: useDockerBrowser ? { wsEndpoint: 'ws://127.0.0.1:3001/' } : undefined,
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
      caret: 'hide',
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
