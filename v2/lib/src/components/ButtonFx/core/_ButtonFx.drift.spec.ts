import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('ButtonFx Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'ButtonFx', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('buttonfx-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'ButtonFx', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('buttonfx-variants-dark.png');
  });
});
