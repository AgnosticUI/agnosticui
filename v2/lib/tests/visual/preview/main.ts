import '../../../src/styles/ag-tokens.css';
import '../../../src/styles/ag-tokens-dark.css';
import '../../../src/index.ts';

import { render } from 'lit';
import { COMPONENT_REGISTRY } from './registry';

const root = document.getElementById('preview-root');

async function mountPreview() {
  if (!root) {
    return;
  }

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

  // Pure sequential processing routes matching our verified baseline
  if (component === 'Button') {
    render(COMPONENT_REGISTRY.Button(), root);
  } else if (component === 'Alert') {
    render(COMPONENT_REGISTRY.Alert(), root);
  }

  const customElements = root.querySelectorAll('ag-button, ag-alert');
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
    window.__visualReady = true;
    window.dispatchEvent(new Event('render-complete'));
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', mountPreview);
} else {
  mountPreview();
}