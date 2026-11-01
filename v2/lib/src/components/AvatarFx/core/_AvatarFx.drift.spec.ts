import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('AvatarFx Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'AvatarFx', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('avatarfx-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'AvatarFx', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('avatarfx-variants-dark.png');
  });
});
