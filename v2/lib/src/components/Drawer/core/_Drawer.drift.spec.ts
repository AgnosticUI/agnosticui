import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Drawer Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Drawer', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('drawer-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Drawer', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('drawer-variants-dark.png');
  });
});
