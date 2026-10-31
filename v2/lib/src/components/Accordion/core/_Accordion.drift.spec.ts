import { test, expect } from '@playwright/test';
import { gotoComponentPreview } from '../../../../tests/visual/helpers/visual-readiness';

test.describe('Accordion Component Visual Regression', () => {
  test('should render perfectly across light theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Accordion', theme: 'light' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('accordion-variants-light.png');
  });

  test('should render perfectly across dark theme variants', async ({ page }) => {
    await gotoComponentPreview(page, { component: 'Accordion', theme: 'dark' });
    await expect(page.locator('#preview-root')).toHaveScreenshot('accordion-variants-dark.png');
  });
});
