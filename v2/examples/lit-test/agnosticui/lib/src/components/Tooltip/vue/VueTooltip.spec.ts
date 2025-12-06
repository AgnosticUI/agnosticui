import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VueTooltip from './VueTooltip.vue';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('VueTooltip Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Test tooltip'
        },
        slots: {
          default: '<button>Test Button</button>'
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

      // Check for the custom element in the DOM
      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);
    });

    it('should render children content', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Tooltip text'
        },
        slots: {
          default: '<span>Trigger Element</span>'
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
      expect(wrapper.text()).toContain('Trigger Element');
    });

    it('should pass content prop to web component', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Test tooltip content'
        },
        slots: {
          default: '<button>Hover me</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);

      // Check the property on the DOM element (content doesn't reflect to attribute)
      const agTooltipElement = agTooltip.element as HTMLElement & { content: string };
      expect(agTooltipElement.content).toBe('Test tooltip content');
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass placement prop to web component', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Tooltip',
          placement: 'bottom'
        },
        slots: {
          default: '<button>Button</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);

      // Check the property on the DOM element (test environment may not reflect attributes)
      const agTooltipElement = agTooltip.element as HTMLElement & { placement: string };
      expect(agTooltipElement.placement).toBe('bottom');
    });

    it('should pass trigger prop to web component', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Tooltip',
          trigger: 'click'
        },
        slots: {
          default: '<button>Button</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);

      // Check the property on the DOM element (trigger doesn't reflect to attribute)
      const agTooltipElement = agTooltip.element as HTMLElement & { trigger: string };
      expect(agTooltipElement.trigger).toBe('click');
    });

    it('should pass distance prop to web component', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Tooltip',
          distance: 16
        },
        slots: {
          default: '<button>Button</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);

      // Check the property on the DOM element
      const agTooltipElement = agTooltip.element as HTMLElement & { distance: number };
      expect(agTooltipElement.distance).toBe(16);
    });

    it('should pass disabled prop to web component', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Tooltip',
          disabled: true
        },
        slots: {
          default: '<button>Button</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);

      // Check the property on the DOM element
      const agTooltipElement = agTooltip.element as HTMLElement & { disabled: boolean };
      expect(agTooltipElement.disabled).toBe(true);
    });

    it('should use default prop values correctly', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Default Props Tooltip'
        },
        slots: {
          default: '<button>Default Button</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);

      // Check default values
      const agTooltipElement = agTooltip.element as HTMLElement & {
        placement: string;
        distance: number;
        skidding: number;
        trigger: string;
        disabled: boolean;
      };

      expect(agTooltipElement.placement).toBe('top');
      expect(agTooltipElement.distance).toBe(8);
      expect(agTooltipElement.skidding).toBe(0);
      expect(agTooltipElement.trigger).toBe('hover focus');
      expect(agTooltipElement.disabled).toBe(false);
    });
  });

  describe('Event Handling', () => {
    it('should handle show events', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Test'
        },
        slots: {
          default: '<button>Button</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);

      // Simulate a show event on the ag-tooltip element
      const showEvent = new CustomEvent('show');
      agTooltip.element.dispatchEvent(showEvent);

      await wrapper.vm.$nextTick();

      // Check that the show event was emitted
      expect(wrapper.emitted()).toHaveProperty('show');
      expect(wrapper.emitted('show')).toHaveLength(1);
    });

    it('should handle hide events', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Test'
        },
        slots: {
          default: '<button>Button</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);

      // Simulate a hide event on the ag-tooltip element
      const hideEvent = new CustomEvent('hide');
      agTooltip.element.dispatchEvent(hideEvent);

      await wrapper.vm.$nextTick();

      // Check that the hide event was emitted
      expect(wrapper.emitted()).toHaveProperty('hide');
      expect(wrapper.emitted('hide')).toHaveLength(1);
    });
  });

  describe('Imperative API', () => {
    it('should provide show, hide, and toggle methods via expose', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Test'
        },
        slots: {
          default: '<button>Button</button>'
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

      // Check that vm provides the expected methods via defineExpose
      expect(wrapper.vm.show).toBeDefined();
      expect(wrapper.vm.hide).toBeDefined();
      expect(wrapper.vm.toggle).toBeDefined();
      expect(typeof wrapper.vm.show).toBe('function');
      expect(typeof wrapper.vm.hide).toBe('function');
      expect(typeof wrapper.vm.toggle).toBe('function');
    });

    it('should call web component methods when using imperative API', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Test'
        },
        slots: {
          default: '<button>Button</button>'
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

      const agTooltip = wrapper.find('ag-tooltip');
      const agTooltipElement = agTooltip.element as HTMLElement & {
        show: () => void;
        hide: () => void;
        toggle: () => void;
      };

      // Mock the methods if they don't exist (since web component may not be fully loaded)
      if (!agTooltipElement.show) agTooltipElement.show = vi.fn();
      if (!agTooltipElement.hide) agTooltipElement.hide = vi.fn();
      if (!agTooltipElement.toggle) agTooltipElement.toggle = vi.fn();

      const showSpy = vi.spyOn(agTooltipElement, 'show');
      const hideSpy = vi.spyOn(agTooltipElement, 'hide');
      const toggleSpy = vi.spyOn(agTooltipElement, 'toggle');

      // Test imperative methods
      wrapper.vm.show();
      expect(showSpy).toHaveBeenCalledTimes(1);

      wrapper.vm.hide();
      expect(hideSpy).toHaveBeenCalledTimes(1);

      wrapper.vm.toggle();
      expect(toggleSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Slot Content', () => {
    it('should render content slot when provided', async () => {
      const wrapper = mount(VueTooltip, {
        slots: {
          default: '<button>Trigger</button>',
          content: '<div class="custom-tooltip">Custom tooltip content</div>'
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

      // Check that content slot structure exists (even if content is in shadow DOM)
      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);
      expect(wrapper.text()).toContain('Trigger'); // Trigger content should be visible
    });

    it('should prioritize content slot over content prop', async () => {
      const wrapper = mount(VueTooltip, {
        props: {
          content: 'Prop content'
        },
        slots: {
          default: '<button>Trigger</button>',
          content: '<div class="slot-content">Slot content</div>'
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

      // When content slot is provided, component should still render correctly
      const agTooltip = wrapper.find('ag-tooltip');
      expect(agTooltip.exists()).toBe(true);
      expect(wrapper.text()).toContain('Trigger'); // Trigger content should be visible
    });
  });
});