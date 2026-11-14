import { describe, it, expect, beforeEach } from 'vitest';
import { MessageProcessor } from '@a2ui/web_core/v1_0';
import { A2uiSurface, type LitComponentApi } from '@a2ui/lit';
import {
  AGNOSTICUI_CATALOG_ID,
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  createMockA2uiStream,
  type A2uiWireMessage,
} from './index.js';

async function settleTree(node: Node): Promise<void> {
  const el = node as HTMLElement & { updateComplete?: Promise<boolean> };
  if (el.updateComplete) {
    await el.updateComplete;
  }
  if (el.shadowRoot) {
    await settleTree(el.shadowRoot);
  }
  for (const child of Array.from(node.childNodes)) {
    await settleTree(child);
  }
}

describe('AgnosticUI A2UI v1.0 Catalog & Surface', () => {
  beforeEach(() => {
    registerAgnosticUICatalog();
    document.body.innerHTML = '';
  });

  it('streams createSurface, updateComponents, and updateDataModel into <a2ui-surface>', async () => {
    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);

    const fixture: A2uiWireMessage[] = [
      {
        version: '1.0',
        createSurface: {
          surfaceId: 'demo-surface',
          catalogId: AGNOSTICUI_CATALOG_ID,
        },
      },
      {
        version: '1.0',
        updateComponents: {
          surfaceId: 'demo-surface',
          components: [
            { id: 'root', component: 'AgCard', shadow: true, children: ['cta_btn'] },
            { id: 'cta_btn', component: 'AgButton', variant: 'primary', label: { '@path': '/ctaLabel' } },
          ],
        },
      },
      {
        version: '1.0',
        updateDataModel: {
          surfaceId: 'demo-surface',
          path: '/ctaLabel',
          value: 'Submit Request',
        },
      },
    ];

    for await (const msg of createMockA2uiStream(fixture)) {
      processor.processMessages([msg as never]);
    }

    const surfaceModel = processor.model.getSurface('demo-surface');
    expect(surfaceModel).toBeDefined();

    const surfaceEl = new A2uiSurface();
    document.body.appendChild(surfaceEl);
    surfaceEl.surface = surfaceModel;
    await settleTree(surfaceEl);
    await new Promise((r) => setTimeout(r, 0));
    await settleTree(surfaceEl);

    console.log('CUSTOM ELEMENT:', customElements.get('a2ui-surface'), 'ROOT NODE:', surfaceEl.rootNode);
    console.log('SURFACE HTML:', surfaceEl.innerHTML);

    expect(surfaceEl.querySelector('ag-card')).not.toBeNull();
    const agButton = surfaceEl.querySelector('ag-button');
    expect(agButton).not.toBeNull();
    expect(agButton?.textContent?.trim()).toBe('Submit Request');
  });
});
