import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Dialog Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Dialog', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('dialog-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Dialog', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('dialog-variants-dark.png');
  });
});
