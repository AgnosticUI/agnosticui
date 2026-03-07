import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    // CI: app is pre-built by the workflow; preview serves static files instantly.
    // Local: reuse whatever dev server is already running.
    command: 'npx vite preview --port 5173',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
