import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('CopyButton Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'CopyButton', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('copybutton-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'CopyButton', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('copybutton-variants-dark.png');
  });
});
