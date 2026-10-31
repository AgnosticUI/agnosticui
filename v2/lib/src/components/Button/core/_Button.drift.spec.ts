import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Button Component Visual Regression', () => {
  
  test('should render perfectly across light theme variants', async ({ page }) => {
    // Navigate and wait for the application layer to fully paint
    await gotoComponentPreview(page, { component: 'Button', theme: 'light' });
    // Capture visual baseline snapshot for the element viewport canvas
    await expect(page.locator('#preview-root')).toHaveScreenshot('button-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    // Navigate and wait for the dark token layer to settle
    await gotoComponentPreview(page, { component: 'Button', theme: 'dark' });
    
    // Capture visual baseline snapshot matching dark token sets
    await expect(page.locator('#preview-root')).toHaveScreenshot('button-variants-dark.png');
  });
});
