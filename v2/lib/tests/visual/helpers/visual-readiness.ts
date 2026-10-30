import { type Page } from '@playwright/test';

declare global {
  interface Window {
    __visualReady?: boolean;
  }
}

/**
 * Navigates to a component preview and awaits the application context
 * to signal full visual readiness status.
 */
export async function gotoComponentPreview(
  page: Page,
  options: {
    component: string;
    theme?: 'light' | 'dark';
  }
): Promise<void> {
  const { component, theme = 'light' } = options;
  const params = new URLSearchParams({ component, theme });

  // Navigate to the target sandbox page layout
  await page.goto(`/?${params.toString()}`);

  // Wait safely for the application execution layer to explicitly verify asset settling
  await page.waitForFunction(
    () => window.__visualReady === true,
    null,
    { timeout: 15_000 }
  );
}
