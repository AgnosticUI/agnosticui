import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Combobox Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Combobox', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('combobox-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Combobox', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('combobox-variants-dark.png');
  });
});
