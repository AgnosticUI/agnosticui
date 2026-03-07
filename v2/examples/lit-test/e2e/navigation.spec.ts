import { test } from '@playwright/test';

const NAVIGATION_COMPONENTS = [
  'ag-breadcrumb',
  'ag-tabs',
  'ag-pagination',
  'ag-menu-button',
];

for (const tag of NAVIGATION_COMPONENTS) {
  test(`${tag} is rendered on navigation page`, async ({ page }) => {
    await page.goto('/pages/navigation.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(tag, { state: 'attached', timeout: 30000 });
  });
}
