import { test } from '@playwright/test';

const ACTIONS_COMPONENTS = [
  'ag-button',
  'ag-button-fx',
  'ag-icon-button',
  'ag-icon-button-fx',
  'ag-copy-button',
  'ag-link',
];

for (const tag of ACTIONS_COMPONENTS) {
  test(`${tag} is rendered on actions page`, async ({ page }) => {
    await page.goto('/pages/actions.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(tag, { state: 'attached', timeout: 30000 });
  });
}
