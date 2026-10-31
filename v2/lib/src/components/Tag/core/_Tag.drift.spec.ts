import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Tag Component Visual Regression', () => {
  
  test('should render perfectly across light theme variants', async ({ page }) => {
    // Navigates and waits for steps 1-6 layout painting to finalize
    await gotoComponentPreview(page, { component: 'Tag', theme: 'light' });
    
    // Capture visual baseline snapshot for the element viewport canvas
    await expect(page.locator('#preview-root')).toHaveScreenshot('tag-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    // Navigates and triggers dark token overrides
    await gotoComponentPreview(page, { component: 'Tag', theme: 'dark' });
    
    // Capture visual baseline snapshot matching dark token sets
    await expect(page.locator('#preview-root')).toHaveScreenshot('tag-variants-dark.png');
  });
});
