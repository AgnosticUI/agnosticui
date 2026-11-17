/**
 * @file index.spec.ts
 * @description Vitest + @vue/test-utils specs for @agnosticui/a2ui-vue.
 */

import { defineComponent, h, onMounted } from 'vue';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import {
  AGNOSTICUI_CATALOG_ID,
  AgA2uiSurface,
  useA2uiSurface,
  type A2uiWireMessage,
  type UseA2uiSurfaceResult,
} from './index.js';

let activeWrappers: Array<{ unmount: () => void }> = [];

afterEach(() => {
  for (const w of activeWrappers) {
    w.unmount();
  }
  activeWrappers = [];
  document.body.innerHTML = '';
});

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

const SAMPLE_FORM_MESSAGES: A2uiWireMessage[] = [
  {
    version: '1.0',
    createSurface: {
      surfaceId: 'support_surface',
      catalogId: AGNOSTICUI_CATALOG_ID,
    },
  },
  {
    version: '1.0',
    updateComponents: {
      surfaceId: 'support_surface',
      components: [
        {
          id: 'root',
          component: 'AgCard',
          children: ['title_txt', 'email_field', 'submit_btn'],
        },
        {
          id: 'title_txt',
          component: 'AgText',
          el: 'h2',
          text: 'Vue 3 Campaign Attribution',
        },
        {
          id: 'email_field',
          component: 'AgInput',
          label: 'Campaign Owner Email',
          type: 'email',
          required: true,
          value: { '@path': '/form/email' },
        },
        {
          id: 'submit_btn',
          component: 'AgButton',
          variant: 'primary',
          label: 'Launch Campaign',
          action: { event: { name: 'launch_campaign' } },
        },
      ],
    },
  },
  {
    version: '1.0',
    updateDataModel: {
      surfaceId: 'support_surface',
      path: '/',
      value: { form: { email: 'growth@agnosticui.com' } },
    },
  },
];

function createHarness(
  onAction: (detail: Record<string, unknown>) => void,
  options: { autoMount?: boolean; onReady?: (api: UseA2uiSurfaceResult) => void } = {},
) {
  const { autoMount = true, onReady } = options;
  return defineComponent({
    name: 'VueTestHarness',
    setup() {
      const api = useA2uiSurface({ onAction });
      onReady?.(api);

      onMounted(() => {
        if (autoMount) {
          api.processMessages(SAMPLE_FORM_MESSAGES);
        }
      });

      return () =>
        h(AgA2uiSurface, {
          ref: api.surfaceRef,
          surface: api.surface.value,
        });
    },
  });
}
describe('@agnosticui/a2ui-vue', () => {
  it('renders an A2UI v1.0 surface with AgnosticUI components in Vue 3', async () => {
    const onAction = vi.fn();
    const wrapper = mount(createHarness(onAction), {
      attachTo: document.body,
    });
    activeWrappers.push(wrapper);

    await settleTree(wrapper.element);
    await new Promise((r) => setTimeout(r, 0));
    await settleTree(wrapper.element);

    expect(wrapper.element.tagName.toLowerCase()).toBe('a2ui-surface');
    expect(wrapper.element.querySelector('ag-card')).not.toBeNull();
    expect(wrapper.element.querySelector('ag-input')).not.toBeNull();
    expect(wrapper.element.querySelector('ag-button')).not.toBeNull();
    expect(wrapper.element.textContent).toContain('Vue 3 Campaign Attribution');
  });

  it('blocks onAction when required FACE fields fail validation and fires once valid', async () => {
    const onAction = vi.fn();
    const wrapper = mount(createHarness(onAction), {
      attachTo: document.body,
    });
    activeWrappers.push(wrapper);

    await settleTree(wrapper.element);
    await new Promise((r) => setTimeout(r, 0));
    await settleTree(wrapper.element);

    const inputEl = wrapper.element.querySelector('ag-input') as HTMLElement & {
      reportValidity?: () => boolean;
    };
    const btnEl = wrapper.element.querySelector('ag-button') as HTMLElement;
    expect(inputEl).not.toBeNull();
    expect(btnEl).not.toBeNull();

    inputEl.reportValidity = () => false;
    btnEl.click();
    await new Promise((r) => setTimeout(r, 0));
    expect(onAction).not.toHaveBeenCalled();

    inputEl.reportValidity = () => true;
    btnEl.click();
    await new Promise((r) => setTimeout(r, 0));
    expect(onAction).toHaveBeenCalledTimes(1);
    expect(onAction).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'launch_campaign' }),
    );
  });

  it('supports streamMessages, getDataModel, deleteSurface, and resetSurface lifecycle', async () => {
    const onAction = vi.fn();
    let capturedApi: UseA2uiSurfaceResult | null = null;

    const wrapper = mount(
      createHarness(onAction, {
        autoMount: false,
        onReady: (api) => {
          capturedApi = api;
        },
      }),
      { attachTo: document.body },
    );
    activeWrappers.push(wrapper);

    expect(capturedApi).not.toBeNull();
    expect(capturedApi!.surface.value).toBeUndefined();
    expect(capturedApi!.getDataModel()).toEqual({});

    // 1. Stream messages asynchronously and verify surface + getDataModel()
    await capturedApi!.streamMessages(SAMPLE_FORM_MESSAGES, 0);
    await settleTree(wrapper.element);

    expect(capturedApi!.surface.value).toBeDefined();
    expect(capturedApi!.getDataModel()).toEqual({
      form: { email: 'growth@agnosticui.com' },
    });
    expect(wrapper.element.textContent).toContain('Vue 3 Campaign Attribution');

    // 2. Process wire deleteSurface message and verify cleanup
    capturedApi!.processMessages([
      {
        version: '1.0',
        deleteSurface: { surfaceId: 'support_surface' },
      } as unknown as A2uiWireMessage,
    ]);
    expect(capturedApi!.surface.value).toBeUndefined();
    expect(capturedApi!.getDataModel()).toEqual({});

    // 3. Re-stream and call resetSurface() to verify full composable reset
    await capturedApi!.streamMessages(SAMPLE_FORM_MESSAGES, 0);
    expect(capturedApi!.surface.value).toBeDefined();

    capturedApi!.resetSurface();
    expect(capturedApi!.surface.value).toBeUndefined();
    expect(capturedApi!.getDataModel()).toEqual({});
    console.info('[vue/index.spec] Verified streamMessages, getDataModel, deleteSurface, and resetSurface.');
  });
});
