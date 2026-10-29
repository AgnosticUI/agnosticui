# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alert/core/_Alert.drift.spec.ts >> Alert Box-Model Metric Engine >> asserts prehydrated and hydrated dimensions match perfectly side-by-side
- Location: src/components/Alert/core/_Alert.drift.spec.ts:6:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: 41
Received: 67
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "1. Prehydrated Fallback" [level=2] [ref=e4]
    - alert [ref=e7]:
      - generic [ref=e8]: Preview Content
    - paragraph [ref=e10]: "Width: 534pxHeight: 41pxPadding: 12pxBorder: 1px"
  - generic [ref=e11]:
    - heading "2. Client Hydrated" [level=2] [ref=e12]
    - alert [ref=e15]:
      - alert [ref=e17]:
        - generic [ref=e18]: Preview Content
    - paragraph [ref=e20]: "Width: 169pxHeight: 67pxPadding: 12pxBorder: 1px"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Alert Box-Model Metric Engine', () => {
  4  |   const targetUrl = '/?component=Alert&variant=success&bordered=true';
  5  | 
  6  |   test('asserts prehydrated and hydrated dimensions match perfectly side-by-side', async ({ page }) => {
  7  |     await page.goto(targetUrl);
  8  | 
  9  |     // Wait for the client element upgrade to complete on the right panel
  10 |     await page.waitForFunction(() => customElements.whenDefined('ag-alert'), null, { timeout: 10000 });
  11 | 
  12 |     // Programmatically extract box parameters from the actual rendered nodes
  13 |     const metricsData = await page.evaluate(() => {
  14 |       const ssrNode = document.querySelector('.ag-static-wrapper > *') as HTMLElement;
  15 |       const clientHost = document.querySelector('#hydrated-target') as HTMLElement;
  16 |       
  17 |       if (!ssrNode || !clientHost || !clientHost.shadowRoot) return null;
  18 |       
  19 |       // Target the real inner rendering box inside the web component's shadow DOM layer
  20 |       const clientNode = (clientHost.shadowRoot.querySelector('.ag-alert') || 
  21 |                           clientHost.shadowRoot.querySelector('.ag-alert-base') || 
  22 |                           clientHost.shadowRoot.querySelector('div')) as HTMLElement;
  23 |                           
  24 |       if (!clientNode) return null;
  25 | 
  26 |       const ssrStyle = window.getComputedStyle(ssrNode);
  27 |       const clientStyle = window.getComputedStyle(clientNode);
  28 | 
  29 |       return {
  30 |         ssr: { width: ssrNode.offsetWidth, height: ssrNode.offsetHeight, padding: ssrStyle.padding, border: ssrStyle.borderWidth },
  31 |         client: { width: clientNode.offsetWidth, height: clientNode.offsetHeight, padding: clientStyle.padding, border: clientStyle.borderWidth }
  32 |       };
  33 |     });
  34 | 
  35 |     expect(metricsData).not.toBeNull();
  36 | 
  37 |     if (metricsData) {
  38 |       const { ssr, client } = metricsData;
  39 | 
  40 |       // Output the true extracted visual box numbers straight onto the dashboard panels
  41 |       await page.evaluate(({ s, c }) => {
  42 |         document.querySelector('#stats-ssr')!.innerHTML = `<p><b>Width:</b> ${s.width}px<br><b>Height:</b> ${s.height}px<br><b>Padding:</b> ${s.padding}<br><b>Border:</b> ${s.border}</p>`;
  43 |         document.querySelector('#stats-hydrated')!.innerHTML = `<p><b>Width:</b> ${c.width}px<br><b>Height:</b> ${c.height}px<br><b>Padding:</b> ${c.padding}<br><b>Border:</b> ${c.border}</p>`;
  44 |       }, { s: ssr, c: client });
  45 | 
  46 |       // Take the snapshot first to preserve the layout document on disk for human auditing
  47 |       await expect(page.locator('.ag-split-dashboard')).toHaveScreenshot('alert-side-by-side-matrix.png');
  48 | 
  49 |       // Programmatic Guardrails: Check if inner box properties align exactly
  50 |       expect(client.padding).toEqual(ssr.padding);
  51 |       expect(client.border).toEqual(ssr.border);
> 52 |       expect(client.height).toEqual(ssr.height);
     |                             ^ Error: expect(received).toEqual(expected) // deep equality
  53 |       expect(client.width).toEqual(ssr.width);
  54 |     }
  55 |   });
  56 | });
  57 | 
```