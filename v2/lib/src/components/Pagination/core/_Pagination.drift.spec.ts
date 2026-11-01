import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Pagination Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Pagination', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('pagination-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Pagination', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('pagination-variants-dark.png');
  });
});
