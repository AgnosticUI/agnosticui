import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Slider Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Slider', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('slider-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Slider', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('slider-variants-dark.png');
  });
});
