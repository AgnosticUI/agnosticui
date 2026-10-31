import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('IconButton Component Visual Regression', () => {
  
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'IconButton', theme: 'light' });
    
    // 🛑 CRITICAL: Make sure this string is 'icon-button-variants-light.png'
    await expect(page.locator('#preview-root')).toHaveScreenshot('icon-button-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'IconButton', theme: 'dark' });
    
    // 🛑 CRITICAL: Make sure this string is 'icon-button-variants-dark.png'
    await expect(page.locator('#preview-root')).toHaveScreenshot('icon-button-variants-dark.png');
  });
});
