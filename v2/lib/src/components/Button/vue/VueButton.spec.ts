import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VueButton from './VueButton.vue';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('VueButton Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      const wrapper = mount(VueButton, {
        slots: {
          default: 'Test Button'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      // Wait for any async operations to complete
      await wrapper.vm.$nextTick();

      // Check that wrapper exists and contains expected structure
      expect(wrapper.exists()).toBe(true);

      // Check for the custom element in the DOM rather than as a Vue component
      const agButton = wrapper.find('ag-button');
      expect(agButton.exists()).toBe(true);
    });

    it('should render children content', async () => {
      const wrapper = mount(VueButton, {
        slots: {
          default: 'Click Me'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      // Check that slot content is rendered
      expect(wrapper.text()).toContain('Click Me');
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass type prop to web component', async () => {
      const wrapper = mount(VueButton, {
        props: {
          type: 'submit'
        },
        slots: {
          default: 'Submit Button'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const agButton = wrapper.find('ag-button');
      expect(agButton.exists()).toBe(true);

      // Check the property on the DOM element rather than attribute
      const agButtonElement = agButton.element as HTMLElement & { type: string };
      expect(agButtonElement.type).toBe('submit');
    });

    it('should pass disabled prop to web component', async () => {
      const wrapper = mount(VueButton, {
        props: {
          disabled: true
        },
        slots: {
          default: 'Disabled Button'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const agButton = wrapper.find('ag-button');
      expect(agButton.exists()).toBe(true);

      // Check the property on the DOM element rather than attribute
      const agButtonElement = agButton.element as HTMLElement & { disabled: boolean };
      expect(agButtonElement.disabled).toBe(true);
    });

    it('should pass loading prop to web component', async () => {
      const wrapper = mount(VueButton, {
        props: {
          loading: true
        },
        slots: {
          default: 'Loading Button'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const agButton = wrapper.find('ag-button');
      expect(agButton.exists()).toBe(true);

      // Check the property on the DOM element rather than attribute
      const agButtonElement = agButton.element as HTMLElement & { loading: boolean };
      expect(agButtonElement.loading).toBe(true);
    });

    it('should pass toggle and pressed props to web component', async () => {
      const wrapper = mount(VueButton, {
        props: {
          toggle: true,
          pressed: true
        },
        slots: {
          default: 'Toggle Button'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const agButton = wrapper.find('ag-button');
      expect(agButton.exists()).toBe(true);

      // Check the properties on the DOM element rather than attributes
      const agButtonElement = agButton.element as HTMLElement & { toggle: boolean; pressed: boolean };
      expect(agButtonElement.toggle).toBe(true);
      expect(agButtonElement.pressed).toBe(true);
    });

    it('should pass ARIA attributes to web component', async () => {
      const wrapper = mount(VueButton, {
        props: {
          ariaLabel: 'Custom button label',
          ariaDescribedby: 'help-text'
        },
        slots: {
          default: 'Accessible Button'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const agButton = wrapper.find('ag-button');
      expect(agButton.exists()).toBe(true);

      // Check the JavaScript properties on the DOM element
      const agButtonElement = agButton.element as any;
      expect(agButtonElement.ariaLabel).toBe('Custom button label');
      expect(agButtonElement.ariaDescribedby).toBe('help-text');
    });
  });

  describe('Event Handling', () => {
    it('should handle click events', async () => {
      const wrapper = mount(VueButton, {
        slots: {
          default: 'Click Me'
        },
        props: { toggle: true },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const agButton = wrapper.find('ag-button');
      expect(agButton.exists()).toBe(true);

      // Simulate a click event on the ag-button element
      const clickEvent = new MouseEvent('click', { bubbles: true, composed: true });
      agButton.element.dispatchEvent(clickEvent);

      await wrapper.vm.$nextTick();

      // Check that the click event was emitted
      expect(wrapper.emitted()).toHaveProperty('click');
      expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('should handle toggle events', async () => {
      const wrapper = mount(VueButton, {
        props: {
          toggle: true
        },
        slots: {
          default: 'Toggle Me'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const agButton = wrapper.find('ag-button');
      expect(agButton.exists()).toBe(true);

      // Simulate a toggle event on the ag-button element
      const toggleEvent = new CustomEvent('toggle', {
        detail: { pressed: true }
      });
      agButton.element.dispatchEvent(toggleEvent);

      await wrapper.vm.$nextTick();

      // Check that the toggle event was emitted with correct data
      expect(wrapper.emitted()).toHaveProperty('toggle');
      expect(wrapper.emitted('toggle')).toHaveLength(1);
      expect(wrapper.emitted('toggle')?.[0]).toEqual([{ pressed: true }]);
    });
  });
});
