import { describe, it, expect, vi, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { AgDynamicRenderer, createDispatcher } from './AgDynamicRenderer';
import type { AgNode } from '@agnosticui/schema';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('AgDynamicRenderer (React)', () => {
  // ─── Rendering ──────────────────────────────────────────────────────────────

  it('renders an AgButton node', () => {
    const nodes: AgNode[] = [{ id: 'btn-1', component: 'AgButton', label: 'Click Me' }];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-button')).toBeInTheDocument();
  });

  it('renders an AgCard node', () => {
    const nodes: AgNode[] = [{ id: 'card-1', component: 'AgCard' }];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-card')).toBeInTheDocument();
  });

  it('renders an AgInput node', () => {
    const nodes: AgNode[] = [{ id: 'input-1', component: 'AgInput', label: 'Email', type: 'email' }];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-input')).toBeInTheDocument();
  });

  it('renders an AgSelect node', () => {
    const nodes: AgNode[] = [{ id: 'sel-1', component: 'AgSelect', label: 'Country' }];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-select')).toBeInTheDocument();
  });

  it('renders an AgCheckbox node', () => {
    const nodes: AgNode[] = [{ id: 'chk-1', component: 'AgCheckbox', labelText: 'I agree' }];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-checkbox')).toBeInTheDocument();
  });

  it('renders an AgToggle node', () => {
    const nodes: AgNode[] = [{ id: 'tog-1', component: 'AgToggle', label: 'Dark mode' }];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-toggle')).toBeInTheDocument();
  });

  it('renders an AgCombobox node', () => {
    const nodes: AgNode[] = [{
      id: 'cb-1',
      component: 'AgCombobox',
      label: 'Fruit',
      options: [{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }],
    }];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-combobox')).toBeInTheDocument();
  });

  it('renders an AgCombobox node in multi-select mode', () => {
    const nodes: AgNode[] = [{
      id: 'cb-2',
      component: 'AgCombobox',
      label: 'Fruits',
      options: [{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }],
      multiple: true,
      value: ['apple', 'banana'],
      closeOnSelect: false,
      maxOptionsVisible: 2,
    }];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-combobox')).toBeInTheDocument();
  });

  // ─── Nesting ────────────────────────────────────────────────────────────────

  it('renders nested nodes (button inside card)', () => {
    const nodes: AgNode[] = [
      { id: 'btn-1', component: 'AgButton', label: 'Action' },
      { id: 'card-1', component: 'AgCard', children: ['btn-1'] },
    ];
    render(<AgDynamicRenderer nodes={nodes} />);
    expect(document.querySelector('ag-card')).toBeInTheDocument();
    expect(document.querySelector('ag-button')).toBeInTheDocument();
  });

  it('only renders root nodes at the top level (child not duplicated)', () => {
    const nodes: AgNode[] = [
      { id: 'btn-1', component: 'AgButton', label: 'Action' },
      { id: 'card-1', component: 'AgCard', children: ['btn-1'] },
    ];
    render(<AgDynamicRenderer nodes={nodes} />);
    // btn-1 is a child of card-1, so there should be exactly one ag-card at top level
    // and the ag-button should be inside ag-card, not alongside it
    expect(document.querySelectorAll('ag-card').length).toBe(1);
    expect(document.querySelectorAll('ag-button').length).toBe(1);
  });

  // ─── Action dispatch (XSS boundary) ────────────────────────────────────────
  // Dispatch is tested directly via createDispatcher because ag-button/ag-input
  // invoke onClick via their own shadow-DOM click handler (set as a Lit @property),
  // not via React event delegation — making it impractical to trigger from outside
  // shadow DOM in a unit test. The dispatch logic itself is the XSS boundary.

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

  it('renders nothing for an empty nodes array', () => {
    const { container } = render(<AgDynamicRenderer nodes={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
