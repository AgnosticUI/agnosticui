import { test, expect } from '@playwright/test';

test('page loads without crash', async ({ page }) => {
  await page.goto('/');
  await expect(page).not.toHaveTitle(/error/i);
});

test('ag-button is rendered', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('ag-button').first()).toBeVisible();
});

test('ag-alert is rendered', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('ag-alert').first()).toBeVisible();
});
