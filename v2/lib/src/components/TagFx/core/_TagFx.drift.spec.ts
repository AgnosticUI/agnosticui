import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('TagFx Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'TagFx', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('tagfx-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'TagFx', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('tagfx-variants-dark.png');
  });
});
