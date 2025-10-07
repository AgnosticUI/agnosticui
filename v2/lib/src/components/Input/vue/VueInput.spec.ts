import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import VueInput from './VueInput.vue'

vi.stubGlobal('customElements', {
  get: (name: string) => name === 'ag-input' && {},
  define: vi.fn(),
  whenDefined: vi.fn().mockResolvedValue(undefined),
})

describe('VueInput.vue', () => {
  it('renders without errors', () => {
    const wrapper = mount(VueInput, { props: { label: 'Test Input' } })
    expect(wrapper.find('ag-input').exists()).toBe(true)
  })

  it('forwards standard attributes', () => {
    const wrapper = mount(VueInput, {
      props: { placeholder: 'Enter email', type: 'email' },
    })
    const el = wrapper.find('ag-input').element as any
    expect(el.placeholder).toBe('Enter email')
    expect(el.type).toBe('email')
  })

  it('emits update:modelValue when input event fired', async () => {
    const wrapper = mount(VueInput, { props: { modelValue: '' } })
    const el = wrapper.find('ag-input').element as any
    el.value = 'Hola'
    el.dispatchEvent(new Event('input'))
    await wrapper.vm.$nextTick()
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted![0]![0]).toBe('Hola')
  })

  // Lit doesn’t emit target.value on change natively
  it.skip('emits update:modelValue on change event (not used by web component)', async () => { })

  it('renders addon slots (template presence)', () => {
    const wrapper = mount(VueInput, {
      props: { hasLeftAddon: true, hasRightAddon: true },
      slots: {
        'addon-left': '<span data-test="left">Left</span>',
        'addon-right': '<span data-test="right">Right</span>',
      },
    })
    // Just ensure slot markup exists in render output
    expect(wrapper.html()).toContain('Left')
    expect(wrapper.html()).toContain('Right')
  })

  it('applies boolean props as properties', () => {
    const wrapper = mount(VueInput, {
      props: { disabled: true, rounded: true, capsule: true },
    })
    const el = wrapper.find('ag-input').element as any
    expect(el.disabled).toBe(true)
    expect(el.rounded).toBe(true)
    expect(el.capsule).toBe(true)
  })

  it('passes size prop as property', () => {
    const wrapper = mount(VueInput, { props: { size: 'large' } })
    const el = wrapper.find('ag-input').element as any
    expect(el.size).toBe('large')
  })

  it('forwards focus and blur', async () => {
    const wrapper = mount(VueInput)
    const el = wrapper.find('ag-input').element
    el.dispatchEvent(new Event('focus'))
    el.dispatchEvent(new Event('blur'))
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('focus')).toBeTruthy()
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('supports labelHidden and noLabel as properties', () => {
    const wrapper = mount(VueInput, { props: { labelHidden: true, noLabel: true } })
    const el = wrapper.find('ag-input').element as any
    expect(el.labelHidden).toBe(true)
    expect(el.noLabel).toBe(true)
  })
})
