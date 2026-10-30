import '../../../src/styles/ag-tokens.css';
import '../../../src/styles/ag-tokens-dark.css';
import '../../../src/index.ts';

import { html, render } from 'lit';

/**
 * Pure JavaScript component layout mapping (no external types to break imports)
 */
/**
 * Inline typed registry structure that doesn't rely on external framework imports
 */
const COMPONENT_REGISTRY: Record<string, () => unknown> = {
  Button: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
      <!-- Row 1: Color Variants -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button data-testid="btn-primary" variant="primary">Primary Action</ag-button>
        <ag-button data-testid="btn-secondary" variant="secondary">Secondary Action</ag-button>
        <ag-button data-testid="btn-success" variant="success">Success Action</ag-button>
        <ag-button data-testid="btn-warning" variant="warning">Warning Action</ag-button>
        <ag-button data-testid="btn-danger" variant="danger">Danger Action</ag-button>
        <ag-button data-testid="btn-disabled" ?disabled=${true}>Disabled Action</ag-button>
      </div>

      <!-- Row 2: Size Variants -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button variant="primary" size="x-sm">Extra Small</ag-button>
        <ag-button variant="primary" size="sm">Small</ag-button>
        <ag-button variant="primary" size="md">Medium</ag-button>
        <ag-button variant="primary" size="lg">Large</ag-button>
        <ag-button variant="primary" size="xl">Extra Large</ag-button>
      </div>

      <!-- Row 3: Shape Variants -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button variant="primary" shape="rounded">Rounded Shape</ag-button>
        <ag-button variant="primary" shape="capsule">Capsule Shape</ag-button>
        <ag-button variant="primary" shape="circle">C</ag-button>
        <ag-button variant="primary" shape="square">S</ag-button>
        <ag-button variant="primary" shape="rounded-square">RS</ag-button>
      </div>

      <!-- Row 4: Bordered (Outline) Styles -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button variant="primary" ?bordered=${true}>Bordered Primary</ag-button>
        <ag-button variant="secondary" ?bordered=${true}>Bordered Secondary</ag-button>
        <ag-button variant="success" ?bordered=${true}>Bordered Success</ag-button>
        <ag-button variant="warning" ?bordered=${true}>Bordered Warning</ag-button>
        <ag-button variant="danger" ?bordered=${true}>Bordered Danger</ag-button>
      </div>
    </div>
  `
};

const root = document.getElementById('preview-root');

async function mountPreview() {
  console.log('[BROWSER DOM LOG]: mountPreview initialized');
  if (!root) {
    console.error('[BROWSER DOM LOG]: #preview-root was missing');
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const component = params.get('component');
  const theme = params.get('theme') || 'light';

  console.log(`[BROWSER DOM LOG]: Request parameter values -> component: ${component}, theme: ${theme}`);

  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.style.backgroundColor = '#1a1a1a';
  } else {
    document.body.classList.remove('dark-theme');
    document.body.style.backgroundColor = '#ffffff';
  }

  if (component === 'Button') {
    console.log('[BROWSER DOM LOG]: Rendering Button via COMPONENT_REGISTRY lookup handler...');
    render(COMPONENT_REGISTRY.Button(), root);
  }

  const customElements = root.querySelectorAll('ag-button');
  console.log(`[BROWSER DOM LOG]: Render complete. Tracking lifecycle updates for ${customElements.length} elements.`);
  
  const updates = Array.from(customElements).map((el) => {
    if ('updateComplete' in el && el.updateComplete instanceof Promise) {
      return el.updateComplete;
    }
    return Promise.resolve();
  });

  await Promise.all(updates);

  if (document.fonts && typeof document.fonts.ready === 'object') {
    await document.fonts.ready;
  }

  requestAnimationFrame(() => {
    console.log('[BROWSER DOM LOG]: Render repaint frame executed. Flagging window.__visualReady = true');
    window.__visualReady = true;
    window.dispatchEvent(new Event('render-complete'));
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', mountPreview);
} else {
  mountPreview();
}
