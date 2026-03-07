import { test } from '@playwright/test';

const DISPLAY_COMPONENTS = [
  'ag-avatar',
  'ag-image',
  'ag-icon',
  'ag-tag',
  'ag-mark',
  'ag-kbd',
  'ag-intl-formatter',
  'ag-timeline',
  'ag-message-bubble',
  'ag-empty-state',
  'ag-visually-hidden',
  'ag-scroll-progress',
  'ag-scroll-to-button',
];

for (const tag of DISPLAY_COMPONENTS) {
  test(`${tag} is rendered on display page`, async ({ page }) => {
    await page.goto('/pages/display.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(tag, { state: 'attached', timeout: 30000 });
  });
}
