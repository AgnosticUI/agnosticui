import { test } from '@playwright/test';

const FORMS_COMPONENTS = [
  'ag-input',
  'ag-checkbox',
  'ag-radio',
  'ag-select',
  'ag-toggle',
  'ag-slider',
  'ag-combobox',
  'ag-rating',
];

for (const tag of FORMS_COMPONENTS) {
  test(`${tag} is rendered on forms page`, async ({ page }) => {
    await page.goto('/pages/forms.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(tag, { state: 'attached', timeout: 30000 });
  });
}
