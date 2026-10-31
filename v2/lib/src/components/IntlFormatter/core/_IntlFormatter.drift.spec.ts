import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('IntlFormatter Component Visual Regression', () => {
  
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'IntlFormatter', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('intlformatter-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'IntlFormatter', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('intlformatter-variants-dark.png');
  });
});
