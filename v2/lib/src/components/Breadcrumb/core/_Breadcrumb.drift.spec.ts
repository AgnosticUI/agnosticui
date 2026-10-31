import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Breadcrumb Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Breadcrumb', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('breadcrumb-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Breadcrumb', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('breadcrumb-variants-dark.png');
  });
});
