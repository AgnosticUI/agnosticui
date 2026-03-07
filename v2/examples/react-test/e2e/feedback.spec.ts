import { test } from '@playwright/test';

const FEEDBACK_COMPONENTS = [
  'ag-alert',
  'ag-toast',
  'ag-badge',
  'ag-badge-fx',
  'ag-progress',
  'ag-progress-ring',
  'ag-spinner',
  'ag-loader',
  'ag-skeleton-loader',
];

for (const tag of FEEDBACK_COMPONENTS) {
  test(`${tag} is rendered on feedback page`, async ({ page }) => {
    await page.goto('/pages/feedback.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(tag, { state: 'attached', timeout: 30000 });
  });
}
