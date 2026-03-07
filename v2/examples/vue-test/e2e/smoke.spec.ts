import { test, expect } from '@playwright/test';

// domcontentloaded fires before <script type="module"> executes in Playwright.
// Use waitForSelector to poll until the framework has mounted.
async function waitForMount(page: import('@playwright/test').Page, selector: string) {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector(selector, { state: 'attached', timeout: 30000 });
}

test('page loads without crash', async ({ page }) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', err => pageErrors.push(err.message));
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });

  await waitForMount(page, '#app > *');

  expect(pageErrors, `Uncaught JS errors:\n${pageErrors.join('\n')}`).toHaveLength(0);
  expect(consoleErrors, `Console errors:\n${consoleErrors.join('\n')}`).toHaveLength(0);
});

test('ag-button is rendered', async ({ page }) => {
  await waitForMount(page, 'ag-button');
});

test('ag-alert is rendered', async ({ page }) => {
  await waitForMount(page, 'ag-alert');
});
