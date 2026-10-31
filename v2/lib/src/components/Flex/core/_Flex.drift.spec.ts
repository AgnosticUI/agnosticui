import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Flex Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Flex', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('flex-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Flex', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('flex-variants-dark.png');
  });
});
