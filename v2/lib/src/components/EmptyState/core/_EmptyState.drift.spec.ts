import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('EmptyState Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'EmptyState', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('emptystate-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'EmptyState', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('emptystate-variants-dark.png');
  });
});
