import { test } from '@playwright/test';

const OVERLAYS_COMPONENTS = [
  'ag-dialog',
  'ag-drawer',
  'ag-popover',
  'ag-tooltip',
  'ag-accordion',
  'ag-collapsible',
];

for (const tag of OVERLAYS_COMPONENTS) {
  test(`${tag} is rendered on overlays page`, async ({ page }) => {
    await page.goto('/pages/overlays.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(tag, { state: 'attached', timeout: 30000 });
  });
}
