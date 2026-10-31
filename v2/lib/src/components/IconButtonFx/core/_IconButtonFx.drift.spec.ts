import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('IconButtonFx Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'IconButtonFx', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('iconbuttonfx-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'IconButtonFx', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('iconbuttonfx-variants-dark.png');
  });
});
