import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Rating Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Rating', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('rating-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Rating', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('rating-variants-dark.png');
  });
});
