import { describe, it, expect, vi, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { AgDynamicRenderer, createDispatcher } from './AgDynamicRenderer';
import type { AgNode } from '@agnosticui/schema';

const customElements = {
  global: {
    config: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag.startsWith('ag-'),
      },
    },
  },
};

afterEach(() => {
  document.body.innerHTML = '';
});

describe('AgDynamicRenderer (Vue)', () => {
  // ─── Rendering ──────────────────────────────────────────────────────────────

  it('renders an AgButton node', async () => {
    const nodes: AgNode[] = [{ id: 'btn-1', component: 'AgButton', label: 'Click Me' }];
    const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...customElements });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('ag-button').exists()).toBe(true);
  });

  it('renders an AgCard node', async () => {
    const nodes: AgNode[] = [{ id: 'card-1', component: 'AgCard' }];
    const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...customElements });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('ag-card').exists()).toBe(true);
  });

  it('renders an AgInput node', async () => {
    const nodes: AgNode[] = [{ id: 'input-1', component: 'AgInput', label: 'Email' }];
    const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...customElements });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('ag-input').exists()).toBe(true);
  });

  it('renders an AgSelect node', async () => {
    const nodes: AgNode[] = [{ id: 'sel-1', component: 'AgSelect', label: 'Country' }];
    const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...customElements });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('ag-select').exists()).toBe(true);
  });

  it('renders an AgCheckbox node', async () => {
    const nodes: AgNode[] = [{ id: 'chk-1', component: 'AgCheckbox', labelText: 'I agree' }];
    const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...customElements });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('ag-checkbox').exists()).toBe(true);
  });

  it('renders an AgToggle node', async () => {
    const nodes: AgNode[] = [{ id: 'tog-1', component: 'AgToggle', label: 'Dark mode' }];
    const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...customElements });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('ag-toggle').exists()).toBe(true);
  });

  // ─── Nesting ────────────────────────────────────────────────────────────────

  it('renders nested nodes (button inside card)', async () => {
    const nodes: AgNode[] = [
      { id: 'btn-1', component: 'AgButton', label: 'Action' },
      { id: 'card-1', component: 'AgCard', children: ['btn-1'] },
    ];
    const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...customElements });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('ag-card').exists()).toBe(true);
    expect(wrapper.find('ag-button').exists()).toBe(true);
  });

  it('only renders root nodes at the top level', async () => {
    const nodes: AgNode[] = [
      { id: 'btn-1', component: 'AgButton', label: 'Action' },
      { id: 'card-1', component: 'AgCard', children: ['btn-1'] },
    ];
    const wrapper = mount(AgDynamicRenderer, { props: { nodes }, ...customElements });
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('ag-card').length).toBe(1);
    expect(wrapper.findAll('ag-button').length).toBe(1);
  });

  // ─── Action dispatch (XSS boundary) ────────────────────────────────────────
  // Dispatch is tested directly via createDispatcher. The Vue wrappers (VueButton
  // etc.) also invoke onClick as a Lit @property on the underlying custom element,
  // so cross-shadow-DOM event dispatch is impractical in unit tests. The dispatch
  // logic itself is the XSS boundary.

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
    const wrapper = mount(AgDynamicRenderer, { props: { nodes: [] }, ...customElements });
    await wrapper.vm.$nextTick();
    // No child elements rendered
    expect(wrapper.findAll('ag-button, ag-card, ag-input, ag-select, ag-checkbox, ag-toggle').length).toBe(0);
  });
});
