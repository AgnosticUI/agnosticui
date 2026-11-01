import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Fieldset Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Fieldset', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('fieldset-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Fieldset', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('fieldset-variants-dark.png');
  });
});
