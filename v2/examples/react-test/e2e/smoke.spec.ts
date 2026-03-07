import { test, expect } from '@playwright/test';

test('page loads without crash', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', err => pageErrors.push(err.message));

  await page.goto('/', { waitUntil: 'load' });
  await expect(page).not.toHaveTitle(/error/i);

  expect(pageErrors, `JS errors on page load:\n${pageErrors.join('\n')}`).toHaveLength(0);
});

test('ag-button is rendered', async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' });
  await expect(page.locator('ag-button').first()).toBeAttached();
});

test('ag-alert is rendered', async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' });
  await expect(page.locator('ag-alert').first()).toBeAttached();
});
