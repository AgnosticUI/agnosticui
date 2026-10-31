import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Image Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Image', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('image-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Image', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('image-variants-dark.png');
  });
});
