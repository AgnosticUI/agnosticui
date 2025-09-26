import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VueDialog from './VueDialog.vue';
import VueDialogHeader from './VueDialogHeader.vue';
import VueDialogFooter from './VueDialogFooter.vue';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('VueDialog Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      const wrapper = mount(VueDialog, {
        slots: {
          default: 'Dialog Content'
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
      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);
    });

    it('should render children content', async () => {
      const wrapper = mount(VueDialog, {
        slots: {
          default: 'Dialog Content'
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
      expect(wrapper.text()).toContain('Dialog Content');
    });

    it('should not be open by default', async () => {
      const wrapper = mount(VueDialog, {
        slots: {
          default: 'Dialog Content'
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

      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);

      // Check the property on the DOM element rather than attribute
      const agDialogElement = agDialog.element as HTMLElement & { open: boolean };
      expect(agDialogElement.open).toBe(false);
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass open prop to web component', async () => {
      const wrapper = mount(VueDialog, {
        props: {
          open: true
        },
        slots: {
          default: 'Dialog Content'
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

      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);

      // Check the property on the DOM element rather than attribute
      const agDialogElement = agDialog.element as HTMLElement & { open: boolean };
      expect(agDialogElement.open).toBe(true);
    });

    it('should pass heading prop to web component', async () => {
      const wrapper = mount(VueDialog, {
        props: {
          heading: 'Test Dialog'
        },
        slots: {
          default: 'Dialog Content'
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

      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);

      // Check the property on the DOM element rather than attribute
      const agDialogElement = agDialog.element as HTMLElement & { heading: string };
      expect(agDialogElement.heading).toBe('Test Dialog');
    });

    it('should pass description prop to web component', async () => {
      const wrapper = mount(VueDialog, {
        props: {
          description: 'Test description'
        },
        slots: {
          default: 'Dialog Content'
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

      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);

      // Check the property on the DOM element rather than attribute
      const agDialogElement = agDialog.element as HTMLElement & { description: string };
      expect(agDialogElement.description).toBe('Test description');
    });

    it('should pass boolean props to web component', async () => {
      // First ensure web component is defined
      await customElements.whenDefined('ag-dialog');

      const wrapper = mount(VueDialog, {
        props: {
          closeOnEscape: false,
          closeOnBackdrop: false,
          showCloseButton: true
        },
        slots: {
          default: 'Dialog Content'
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

      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);

      // Wait for mounted lifecycle and property setting
      await new Promise(resolve => setTimeout(resolve, 300));

      // Check the properties on the DOM element rather than attributes
      const agDialogElement = agDialog.element as HTMLElement & {
        closeOnEscape: boolean;
        closeOnBackdrop: boolean;
        showCloseButton: boolean;
        updateComplete?: Promise<void>;
      };

      // Wait for Lit updateComplete if available (with timeout)
      if (agDialogElement.updateComplete) {
        try {
          await Promise.race([
            agDialogElement.updateComplete,
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error('updateComplete timeout')), 2000)
            )
          ]);
        } catch (error) {
          // Continue with test even if updateComplete times out
          // This is expected in some test environments
        }
      }

      expect(agDialogElement.closeOnEscape).toBe(false);
      expect(agDialogElement.closeOnBackdrop).toBe(false);
      expect(agDialogElement.showCloseButton).toBe(true);
    }, 8000);
  });

  describe('Event Handling', () => {
    it('should handle dialog-open events', async () => {
      const wrapper = mount(VueDialog, {
        slots: {
          default: 'Dialog Content'
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

      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);

      // Simulate a dialog-open event
      const openEvent = new CustomEvent('dialog-open', { bubbles: true });
      agDialog.element.dispatchEvent(openEvent);

      await wrapper.vm.$nextTick();

      // Check that the dialog-open event was emitted
      expect(wrapper.emitted()).toHaveProperty('dialog-open');
      expect(wrapper.emitted('dialog-open')).toHaveLength(1);
    });

    it('should handle dialog-close events', async () => {
      const wrapper = mount(VueDialog, {
        slots: {
          default: 'Dialog Content'
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

      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);

      // Simulate a dialog-close event
      const closeEvent = new CustomEvent('dialog-close', { bubbles: true });
      agDialog.element.dispatchEvent(closeEvent);

      await wrapper.vm.$nextTick();

      // Check that the dialog-close event was emitted
      expect(wrapper.emitted()).toHaveProperty('dialog-close');
      expect(wrapper.emitted('dialog-close')).toHaveLength(1);
    });

    it('should handle dialog-cancel events', async () => {
      const wrapper = mount(VueDialog, {
        slots: {
          default: 'Dialog Content'
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

      const agDialog = wrapper.find('ag-dialog');
      expect(agDialog.exists()).toBe(true);

      // Simulate a dialog-cancel event (e.g., from ESC key)
      const cancelEvent = new CustomEvent('dialog-cancel', { bubbles: true });
      agDialog.element.dispatchEvent(cancelEvent);

      await wrapper.vm.$nextTick();

      // Check that the dialog-cancel event was emitted
      expect(wrapper.emitted()).toHaveProperty('dialog-cancel');
      expect(wrapper.emitted('dialog-cancel')).toHaveLength(1);
    });
  });

  describe('Slot Components', () => {
    it('should render VueDialogHeader with slot attribute', async () => {
      const wrapper = mount(VueDialog, {
        slots: {
          default: `
            <VueDialogHeader>Custom Header</VueDialogHeader>
          `
        },
        global: {
          components: {
            VueDialogHeader
          },
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const header = wrapper.find('[slot="header"]');
      expect(header.exists()).toBe(true);
      expect(header.text()).toContain('Custom Header');
    });

    it('should render VueDialogFooter with slot attribute', async () => {
      const wrapper = mount(VueDialog, {
        slots: {
          default: `
            Dialog Content
            <VueDialogFooter>Custom Footer</VueDialogFooter>
          `
        },
        global: {
          components: {
            VueDialogFooter
          },
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      const footer = wrapper.find('[slot="footer"]');
      expect(footer.exists()).toBe(true);
      expect(footer.text()).toContain('Custom Footer');
    });
  });
});