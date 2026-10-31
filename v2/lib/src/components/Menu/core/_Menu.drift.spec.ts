import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Menu Component Visual Regression', () => {
  
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Menu', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('menu-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Menu', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('menu-variants-dark.png');
  });
});
