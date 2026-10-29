import { test, expect } from '@playwright/test';

test.describe('Alert hydration drift', () => {
  // Test a complex layout state using our dynamic prop engine matrix
  const componentUrl = '/?component=Alert&variant=success&bordered=true';
  const targetContainer = '.ag-preview-shell';

  test('matches the approved server baseline', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    try {
      const page = await context.newPage();
      await page.goto(componentUrl);
      const element = page.locator(targetContainer);
      await expect(element).toBeVisible();
      await expect(element).toHaveScreenshot('alert-server-baseline.png');
    } finally {
      await context.close();
    }
  });

  test('matches the approved hydrated baseline', async ({ page }) => {
    await page.goto(componentUrl);
    await page.evaluate(async () => {
      await customElements.whenDefined('ag-alert');
    });
    const element = page.locator(targetContainer);
    await expect(element).toBeVisible();
    await expect(element).toHaveScreenshot('alert-hydrated-baseline.png');
  });
});
