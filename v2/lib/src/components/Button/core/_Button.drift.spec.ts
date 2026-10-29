import { test, expect } from '@playwright/test';

test.describe('Button hydration drift', () => {
  const componentUrl = '/?component=Button';
  const targetContainer = '.ag-preview-shell';

  test('matches the approved server baseline', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    try {
      const page = await context.newPage();
      await page.goto(componentUrl);
      const element = page.locator(targetContainer);
      await expect(element).toBeVisible();
      await expect(element).toHaveScreenshot('button-server-baseline.png');
    } finally {
      await context.close();
    }
  });

  test('matches the approved hydrated baseline', async ({ page }) => {
    await page.goto(componentUrl);
    await page.evaluate(async () => {
      await customElements.whenDefined('ag-button');
    });
    const element = page.locator(targetContainer);
    await expect(element).toBeVisible();
    await expect(element).toHaveScreenshot('button-hydrated-baseline.png');
  });
});
