// v2/lib/tests/uirig/harness/main.ts
import { render } from 'lit';
import { COMPONENT_REGISTRY } from '../../shared/component-registry';
import { parseHarnessParams } from './query-params';

declare global {
  interface Window {
    __uirigReady?: boolean;
    __uirigError?: string;
  }
}

async function waitForCustomElements(root: HTMLElement): Promise<void> {
  const tags = new Set<string>();
  root.querySelectorAll('*').forEach((el) => {
    const tag = el.tagName.toLowerCase();
    if (tag.includes('-')) {
      tags.add(tag);
    }
  });

  await Promise.all(Array.from(tags, (tag) => customElements.whenDefined(tag)));

  const updatePromises: Promise<unknown>[] = [];
  root.querySelectorAll('*').forEach((el) => {
    if (el.tagName.includes('-') && 'updateComplete' in el) {
      updatePromises.push((el as HTMLElement & { updateComplete: Promise<unknown> }).updateComplete);
    }
  });
  await Promise.all(updatePromises);
}

async function mountHarness(): Promise<void> {
  const stage = document.getElementById('uirig-stage');
  if (!stage) {
    window.__uirigError = 'Missing #uirig-stage mount container.';
    return;
  }

  const parsed = parseHarnessParams(window.location.search);

  if (parsed.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  if (parsed.error || !parsed.component) {
    stage.textContent = parsed.error ?? 'Invalid harness state.';
    window.__uirigError = parsed.error ?? 'Invalid harness state.';
    return;
  }

  const templateFactory = COMPONENT_REGISTRY[parsed.component];
  render(templateFactory(), stage);

  await waitForCustomElements(stage);
  window.__uirigReady = true;
}

void mountHarness();
