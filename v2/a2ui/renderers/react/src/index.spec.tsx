/**
 * @file index.spec.tsx
 * @description Vitest + Testing Library specs for @agnosticui/a2ui-react.
 */

import * as React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, cleanup, act } from '@testing-library/react';
import {
  AGNOSTICUI_CATALOG_ID,
  AgA2uiSurface,
  useA2uiSurface,
  type A2uiWireMessage,
  type UseA2uiSurfaceResult,
} from './index.js';

afterEach(() => {
  cleanup();
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
          text: 'React Support Escalation',
        },
        {
          id: 'email_field',
          component: 'AgInput',
          label: 'Work Email',
          type: 'email',
          required: true,
          value: { '@path': '/form/email' },
        },
        {
          id: 'submit_btn',
          component: 'AgButton',
          variant: 'primary',
          label: 'Submit Ticket',
          action: { event: { name: 'submit_ticket' } },
        },
      ],
    },
  },
  {
    version: '1.0',
    updateDataModel: {
      surfaceId: 'support_surface',
      path: '/',
      value: { form: { email: 'ops@agnosticui.com' } },
    },
  },
];

function TestHarness({
  onAction,
  autoMount = true,
  hookRef,
}: {
  onAction: (detail: Record<string, unknown>) => void;
  autoMount?: boolean;
  hookRef?: React.MutableRefObject<UseA2uiSurfaceResult | null>;
}) {
  const api = useA2uiSurface({ onAction });
  if (hookRef) {
    hookRef.current = api;
  }

  React.useEffect(() => {
    if (autoMount) {
      api.processMessages(SAMPLE_FORM_MESSAGES);
    }
  }, [autoMount, api.processMessages]);

  return <AgA2uiSurface ref={api.surfaceRef} surface={api.surface} />;
}
describe('@agnosticui/a2ui-react', () => {
  it('renders an A2UI v1.0 surface with AgnosticUI components in React', async () => {
    const onAction = vi.fn();
    const { container } = render(<TestHarness onAction={onAction} />);

    await settleTree(container);
    await new Promise((r) => setTimeout(r, 0));
    await settleTree(container);

    expect(container.querySelector('a2ui-surface')).not.toBeNull();
    expect(container.querySelector('ag-card')).not.toBeNull();
    expect(container.querySelector('ag-input')).not.toBeNull();
    expect(container.querySelector('ag-button')).not.toBeNull();
    expect(container.textContent).toContain('React Support Escalation');
  });

  it('blocks onAction when required FACE fields fail validation and fires once valid', async () => {
    const onAction = vi.fn();
    const { container } = render(<TestHarness onAction={onAction} />);

    await settleTree(container);
    await new Promise((r) => setTimeout(r, 0));
    await settleTree(container);

    const surfaceEl = container.querySelector('a2ui-surface')!;
    const inputEl = container.querySelector('ag-input') as HTMLElement & {
      reportValidity?: () => boolean;
    };
    expect(inputEl).not.toBeNull();

    inputEl.reportValidity = () => false;
    surfaceEl.dispatchEvent(
      new CustomEvent('a2uiaction', {
        detail: { name: 'submit_ticket' },
        bubbles: true,
        composed: true,
      }),
    );
    expect(onAction).not.toHaveBeenCalled();

    inputEl.reportValidity = () => true;
    surfaceEl.dispatchEvent(
      new CustomEvent('a2uiaction', {
        detail: { name: 'submit_ticket' },
        bubbles: true,
        composed: true,
      }),
    );
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('supports streamMessages, getDataModel, deleteSurface, and resetSurface lifecycle', async () => {
    const onAction = vi.fn();
    const hookRef: React.MutableRefObject<UseA2uiSurfaceResult | null> = {
      current: null,
    };
    const { container } = render(
      <TestHarness onAction={onAction} autoMount={false} hookRef={hookRef} />,
    );

    expect(hookRef.current).not.toBeNull();
    expect(hookRef.current!.surface).toBeUndefined();
    expect(hookRef.current!.getDataModel()).toEqual({});

    // 1. Stream messages asynchronously and verify surface + getDataModel()
    await act(async () => {
      await hookRef.current!.streamMessages(SAMPLE_FORM_MESSAGES, 0);
    });
    await settleTree(container);

    expect(hookRef.current!.surface).toBeDefined();
    expect(hookRef.current!.getDataModel()).toEqual({
      form: { email: 'ops@agnosticui.com' },
    });
    expect(container.textContent).toContain('React Support Escalation');

    // 2. Process wire deleteSurface message and verify cleanup
    act(() => {
      hookRef.current!.processMessages([
        {
          version: '1.0',
          deleteSurface: { surfaceId: 'support_surface' },
        } as unknown as A2uiWireMessage,
      ]);
    });
    expect(hookRef.current!.surface).toBeUndefined();
    expect(hookRef.current!.getDataModel()).toEqual({});

    // 3. Re-stream and call resetSurface() to verify full processor reset
    await act(async () => {
      await hookRef.current!.streamMessages(SAMPLE_FORM_MESSAGES, 0);
    });
    expect(hookRef.current!.surface).toBeDefined();

    act(() => {
      hookRef.current!.resetSurface();
    });
    expect(hookRef.current!.surface).toBeUndefined();
    expect(hookRef.current!.getDataModel()).toEqual({});
    console.info('[react/index.spec] Verified streamMessages, getDataModel, deleteSurface, and resetSurface.');
  });
});
