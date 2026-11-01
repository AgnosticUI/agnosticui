import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('SelectionCardGroup Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'SelectionCardGroup', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('selectioncardgroup-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'SelectionCardGroup', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('selectioncardgroup-variants-dark.png');
  });
});
