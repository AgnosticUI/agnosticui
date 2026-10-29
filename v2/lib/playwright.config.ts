import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/components',
  testMatch: '**/*.drift.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  expect: {
    timeout: 8000, // Give assertions 8 seconds to try and match stable frames
    toHaveScreenshot: {
      threshold: 0.2,       // Blurs microscopic anti-aliasing color changes
      animations: 'disabled', // Freezes CSS animations immediately
      caret: 'hide',         // Eliminates flashing text cursor flakiness
      scale: 'css',          // Standardizes retina vs non-retina runners
    },
  },
  use: {
    baseURL: 'http://localhost:3000',
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chrome',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        launchOptions: {
          args: ['--font-render-hinting=none', '--disable-font-subpixel-positioning']
        }
      },
    },
  ],
});
