import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Select Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Select', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('select-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Select', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('select-variants-dark.png');
  });
});
