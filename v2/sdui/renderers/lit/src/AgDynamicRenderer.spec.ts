import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { AgNode } from '@agnosticui/schema';
import type { AgDynamicRenderer } from './AgDynamicRenderer.js';

type RendererEl = InstanceType<typeof AgDynamicRenderer>;

// Dynamically import to trigger custom element registration once
let createDispatcher: typeof import('./AgDynamicRenderer.js')['createDispatcher'];

async function setup(): Promise<void> {
  const mod = await import('./AgDynamicRenderer.js');
  createDispatcher = mod.createDispatcher;
}

function createElement(): RendererEl {
  return document.createElement('ag-dynamic-renderer') as RendererEl;
}

describe('AgDynamicRenderer (Lit)', () => {
  beforeEach(async () => {
    document.body.innerHTML = '';
    await setup();
  });

  // ─── Element registration ───────────────────────────────────────────────────

  it('registers the ag-dynamic-renderer custom element', () => {
    expect(globalThis.customElements.get('ag-dynamic-renderer')).toBeDefined();
  });

  // ─── Rendering ──────────────────────────────────────────────────────────────

  it('renders an AgButton node', async () => {
    const el = createElement();
    const nodes: AgNode[] = [{ id: 'btn-1', component: 'AgButton', label: 'Click Me' }];
    el.nodes = nodes;
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-button')).not.toBeNull();
  });

  it('renders an AgCard node', async () => {
    const el = createElement();
    el.nodes = [{ id: 'card-1', component: 'AgCard' }];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-card')).not.toBeNull();
  });

  it('renders an AgInput node', async () => {
    const el = createElement();
    el.nodes = [{ id: 'input-1', component: 'AgInput', label: 'Email' }];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-input')).not.toBeNull();
  });

  it('renders an AgSelect node', async () => {
    const el = createElement();
    el.nodes = [{ id: 'sel-1', component: 'AgSelect' }];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-select')).not.toBeNull();
  });

  it('renders an AgCheckbox node', async () => {
    const el = createElement();
    el.nodes = [{ id: 'chk-1', component: 'AgCheckbox', labelText: 'I agree' }];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-checkbox')).not.toBeNull();
  });

  it('renders an AgToggle node', async () => {
    const el = createElement();
    el.nodes = [{ id: 'tog-1', component: 'AgToggle', label: 'Dark mode' }];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-toggle')).not.toBeNull();
  });

  it('renders an AgCombobox node', async () => {
    const el = createElement();
    el.nodes = [{
      id: 'cb-1',
      component: 'AgCombobox',
      label: 'Fruit',
      options: [{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }],
    }];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-combobox')).not.toBeNull();
  });

  it('renders an AgCombobox node in multi-select mode', async () => {
    const el = createElement();
    el.nodes = [{
      id: 'cb-2',
      component: 'AgCombobox',
      label: 'Fruits',
      options: [{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }],
      multiple: true,
      value: ['apple', 'banana'],
      closeOnSelect: false,
      maxOptionsVisible: 2,
    }];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-combobox')).not.toBeNull();
  });

  // ─── Nesting ────────────────────────────────────────────────────────────────

  it('renders nested nodes (button inside card)', async () => {
    const el = createElement();
    const nodes: AgNode[] = [
      { id: 'btn-1', component: 'AgButton', label: 'Action' },
      { id: 'card-1', component: 'AgCard', children: ['btn-1'] },
    ];
    el.nodes = nodes;
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-card')).not.toBeNull();
    expect(el.querySelector('ag-button')).not.toBeNull();
  });

  it('only renders root nodes at the top level', async () => {
    const el = createElement();
    const nodes: AgNode[] = [
      { id: 'btn-1', component: 'AgButton', label: 'Action' },
      { id: 'card-1', component: 'AgCard', children: ['btn-1'] },
    ];
    el.nodes = nodes;
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelectorAll('ag-card').length).toBe(1);
    expect(el.querySelectorAll('ag-button').length).toBe(1);
  });

  // ─── Action dispatch (XSS boundary) ────────────────────────────────────────
  // Dispatch is tested directly via createDispatcher. ag-button's onClick is a
  // Lit @property invoked by the shadow-DOM button's click handler — not reachable
  // from outside shadow DOM in unit tests. The dispatch logic is the XSS boundary.

  it('routes a known alias to the actions map', () => {
    const submit = vi.fn();
    const dispatch = createDispatcher({ SUBMIT_FORM: submit });
    dispatch('SUBMIT_FORM');
    expect(submit).toHaveBeenCalledOnce();
  });

  it('silently ignores unknown aliases (XSS boundary)', () => {
    const dispatch = createDispatcher({});
    expect(() => dispatch('UNKNOWN_ALIAS')).not.toThrow();
    expect(() => dispatch(undefined)).not.toThrow();
  });

  it('does not call any action when alias is undefined', () => {
    const fn = vi.fn();
    const dispatch = createDispatcher({ MY_ACTION: fn });
    dispatch(undefined);
    expect(fn).not.toHaveBeenCalled();
  });

  // ─── Empty input ────────────────────────────────────────────────────────────

  it('renders nothing for an empty nodes array', async () => {
    const el = createElement();
    el.nodes = [];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.children.length).toBe(0);
  });

  // ─── Reactivity ─────────────────────────────────────────────────────────────

  it('re-renders when nodes property changes', async () => {
    const el = createElement();
    el.nodes = [];
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.querySelector('ag-button')).toBeNull();

    el.nodes = [{ id: 'btn-1', component: 'AgButton', label: 'New' }];
    await el.updateComplete;
    expect(el.querySelector('ag-button')).not.toBeNull();
  });
});
