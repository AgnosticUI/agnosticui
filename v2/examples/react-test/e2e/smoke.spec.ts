import { test, expect } from '@playwright/test';

test('page loads without crash', async ({ page }) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', err => pageErrors.push(err.message));
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

  const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
  expect(response?.status(), `Server responded with ${response?.status()}`).toBe(200);

  // Wait for React to mount something into #root
  await expect(page.locator('#root')).not.toBeEmpty();

  expect(pageErrors, `Uncaught JS errors:\n${pageErrors.join('\n')}`).toHaveLength(0);
  expect(consoleErrors, `Console errors:\n${consoleErrors.join('\n')}`).toHaveLength(0);
});

test('ag-button is rendered', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).not.toBeEmpty();
  await expect(page.locator('ag-button').first()).toBeAttached();
});

test('ag-alert is rendered', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#root')).not.toBeEmpty();
  await expect(page.locator('ag-alert').first()).toBeAttached();
});
