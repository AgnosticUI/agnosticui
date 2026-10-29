import { test, expect } from '@playwright/test';

test.describe('Button Box-Model Metric Engine', () => {
  const targetUrl = '/?component=Button&variant=primary&shape=rounded';

  test('asserts prehydrated and hydrated dimensions match perfectly side-by-side', async ({ page }) => {
    await page.goto(targetUrl);

    // Wait for the client element upgrade to complete on the right panel
    await page.waitForFunction(() => customElements.whenDefined('ag-button'), null, { timeout: 10000 });

    // Programmatically extract box parameters from the actual rendered nodes
    const metricsData = await page.evaluate(() => {
      const ssrNode = document.querySelector('.ag-static-wrapper > *') as HTMLElement;
      const clientHost = document.querySelector('#hydrated-target') as HTMLElement;
      
      if (!ssrNode || !clientHost || !clientHost.shadowRoot) return null;
      
      // Target the real inner rendering box inside the web component's shadow dome
      const clientNode = (clientHost.shadowRoot.querySelector('button') || 
                          clientHost.shadowRoot.querySelector('.btn') || 
                          clientHost.shadowRoot.querySelector('div')) as HTMLElement;
                          
      if (!clientNode) return null;

      const ssrStyle = window.getComputedStyle(ssrNode);
      const clientStyle = window.getComputedStyle(clientNode);

      return {
        ssr: { width: ssrNode.offsetWidth, height: ssrNode.offsetHeight, padding: ssrStyle.padding, border: ssrStyle.borderWidth },
        client: { width: clientNode.offsetWidth, height: clientNode.offsetHeight, padding: clientStyle.padding, border: clientStyle.borderWidth }
      };
    });

    expect(metricsData).not.toBeNull();

    if (metricsData) {
      const { ssr, client } = metricsData;

      // Output the true extracted visual box numbers straight onto the dashboard panels
      await page.evaluate(({ s, c }) => {
        document.querySelector('#stats-ssr')!.innerHTML = `<p><b>Width:</b> ${s.width}px<br><b>Height:</b> ${s.height}px<br><b>Padding:</b> ${s.padding}<br><b>Border:</b> ${s.border}</p>`;
        document.querySelector('#stats-hydrated')!.innerHTML = `<p><b>Width:</b> ${c.width}px<br><b>Height:</b> ${c.height}px<br><b>Padding:</b> ${c.padding}<br><b>Border:</b> ${c.border}</p>`;
      }, { s: ssr, c: client });

      // Take the snapshot first to preserve the layout document on disk
      await expect(page.locator('.ag-split-dashboard')).toHaveScreenshot('button-side-by-side-matrix.png');

      // Programmatic Guardrails: Check if inner box properties align exactly
      expect(client.padding).toEqual(ssr.padding);
      expect(client.border).toEqual(ssr.border);
      expect(client.height).toEqual(ssr.height);
      expect(client.width).toEqual(ssr.width);
    }
  });
});
