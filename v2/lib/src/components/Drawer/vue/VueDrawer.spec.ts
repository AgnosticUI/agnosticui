import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VueDrawer from './VueDrawer.vue';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => { });

describe('VueDrawer Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      const wrapper = mount(VueDrawer, {
        slots: {
          default: 'Test Drawer Content'
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

      expect(wrapper.exists()).toBe(true);
      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);
    });

    it('should render children content', async () => {
      const wrapper = mount(VueDrawer, {
        slots: {
          default: 'Drawer Content'
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

      expect(wrapper.text()).toContain('Drawer Content');
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass open prop to web component', async () => {
      const wrapper = mount(VueDrawer, {
        props: {
          open: true
        },
        slots: {
          default: 'Open Drawer'
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

      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);
      const agDrawerElement = agDrawer.element as HTMLElement & { open: boolean };
      expect(agDrawerElement.open).toBe(true);
    });

    it('should pass heading prop to web component', async () => {
      const wrapper = mount(VueDrawer, {
        props: {
          heading: 'Test Heading'
        },
        slots: {
          default: 'Drawer Content'
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

      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);
      const agDrawerElement = agDrawer.element as HTMLElement & { heading: string };
      expect(agDrawerElement.heading).toBe('Test Heading');
    });

    it('should pass description prop to web component', async () => {
      const wrapper = mount(VueDrawer, {
        props: {
          description: 'Test Description'
        },
        slots: {
          default: 'Drawer Content'
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

      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);
      const agDrawerElement = agDrawer.element as HTMLElement & { description: string };
      expect(agDrawerElement.description).toBe('Test Description');
    });

    it('should pass noCloseOnEscape prop to web component', async () => {
      const wrapper = mount(VueDrawer, {
        props: {
          noCloseOnEscape: true
        },
        slots: {
          default: 'Drawer Content'
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

      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);
      expect(agDrawer.attributes('no-close-on-escape')).toBeDefined();
    });

    it('should pass noCloseOnBackdrop prop to web component', async () => {
      const wrapper = mount(VueDrawer, {
        props: {
          noCloseOnBackdrop: true
        },
        slots: {
          default: 'Drawer Content'
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

      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);
      expect(agDrawer.attributes('no-close-on-backdrop')).toBeDefined();
    });

    it('should pass showCloseButton prop to web component', async () => {
      const wrapper = mount(VueDrawer, {
        props: {
          showCloseButton: true
        },
        slots: {
          default: 'Drawer Content'
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

      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);
      expect(agDrawer.attributes('show-close-button')).toBeDefined();
    });

    it('should pass position prop to web component', async () => {
      const wrapper = mount(VueDrawer, {
        props: {
          position: 'start'
        },
        slots: {
          default: 'Drawer Content'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      // Wait for custom element definition
      await customElements.whenDefined('ag-drawer');
      await wrapper.vm.$nextTick();

      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);
      // Debug: Log attributes and properties
      const agDrawerElement = agDrawer.element as HTMLElement & { position: string };
      const attributes = {};
      for (let attr of agDrawer.element.attributes) {
        attributes[attr.name] = attr.value;
      }
      console.log('Attributes:', attributes);
      console.log('Position property:', agDrawerElement.position);
      expect(agDrawerElement.position).toBe('start'); // Check property
      expect(agDrawer.attributes('position')).toBe('start'); // Check attribute
    });
  });

  describe('Event Handling', () => {
    it('should handle close events', async () => {
      const wrapper = mount(VueDrawer, {
        props: {
          open: true
        },
        slots: {
          default: 'Drawer Content'
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

      const agDrawer = wrapper.find('ag-drawer');
      expect(agDrawer.exists()).toBe(true);

      // Simulate a dialog-close event on the ag-drawer element
      const closeEvent = new CustomEvent('dialog-close', {
        bubbles: true,
        composed: true,
        cancelable: true
      });
      agDrawer.element.dispatchEvent(closeEvent);

      await wrapper.vm.$nextTick();

      // Check that the close event was emitted
      expect(wrapper.emitted()).toHaveProperty('close');
      expect(wrapper.emitted('close')).toHaveLength(1);
    });
  });
});
