import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('BadgeFx Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'BadgeFx', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('badgefx-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'BadgeFx', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('badgefx-variants-dark.png');
  });
});
