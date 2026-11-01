import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Header Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Header', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('header-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Header', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('header-variants-dark.png');
  });
});
