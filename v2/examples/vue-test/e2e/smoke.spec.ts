import { test, expect } from '@playwright/test';

test('page loads without crash', async ({ page }) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', err => pageErrors.push(err.message));
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

  await page.goto('/', { waitUntil: 'domcontentloaded' });

  // Wait for Vue to mount (Vite compiles on demand; allow up to expect.timeout)
  await expect(page.locator('#app')).not.toBeEmpty();

  expect(pageErrors, `Uncaught JS errors:\n${pageErrors.join('\n')}`).toHaveLength(0);
  expect(consoleErrors, `Console errors:\n${consoleErrors.join('\n')}`).toHaveLength(0);
});

test('ag-button is rendered', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('ag-button').first()).toBeAttached();
});

test('ag-alert is rendered', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('ag-alert').first()).toBeAttached();
});
