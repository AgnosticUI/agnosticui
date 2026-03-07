import { test } from '@playwright/test';

const LAYOUT_COMPONENTS = [
  'ag-card',
  'ag-flex-row',
  'ag-header',
  'ag-sidebar',
  'ag-sidebar-nav',
  'ag-divider',
  'ag-aspect-ratio',
  'ag-fieldset',
];

for (const tag of LAYOUT_COMPONENTS) {
  test(`${tag} is rendered on layout page`, async ({ page }) => {
    await page.goto('/pages/layout.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(tag, { state: 'attached', timeout: 30000 });
  });
}
