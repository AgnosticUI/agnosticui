import '../../../src/styles/ag-tokens.css';
import '../../../src/styles/ag-tokens-dark.css';
import '../../../src/index.ts';

import { html, render } from 'lit';

const root = document.getElementById('preview-root');

async function mountPreview() {
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const component = params.get('component');
  const theme = params.get('theme') || 'light';

  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.style.backgroundColor = '#1a1a1a';
  } else {
    document.body.classList.remove('dark-theme');
    document.body.style.backgroundColor = '#ffffff';
  }

  if (component === 'Button') {
    render(
      html`
        <div style="padding: 24px; display: flex; gap: 16px; flex-wrap: wrap;">
          <ag-button data-testid="btn-primary" mode="primary">Primary Action</ag-button>
          <ag-button data-testid="btn-secondary" mode="secondary">Secondary Action</ag-button>
          <ag-button data-testid="btn-disabled" ?disabled=${true}>Disabled Action</ag-button>
        </div>
      `,
      root
    );
  }

  // 1. Query the newly mounted custom elements directly from the DOM root
  const customElements = root.querySelectorAll('ag-button');
  
  // 2. Map them into native Lit update completion promises cleanly without any casting type bypasses
  const updates = Array.from(customElements).map((el) => {
    if ('updateComplete' in el && el.updateComplete instanceof Promise) {
      return el.updateComplete;
    }
    return Promise.resolve();
  });

  // 3. Await all components to complete their internal reactive compilation loops
  await Promise.all(updates);

  // 4. Await full system web font resolution and settlement
  if (document.fonts && typeof document.fonts.ready === 'object') {
    await document.fonts.ready;
  }

  // 5. Allow one layout repaint frame to clear any microtask canvas flashes
  requestAnimationFrame(() => {
    // 6. Signal visual readiness directly to the Playwright container container
    window.__visualReady = true;
    window.dispatchEvent(new Event('render-complete'));
  });
}


if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', mountPreview);
} else {
  mountPreview();
}
