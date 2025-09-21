import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VueAccordion from './VueAccordion.vue';
import VueAccordionItem from './VueAccordionItem.vue';
import VueAccordionHeader from './VueAccordionHeader.vue';
import VueAccordionContent from './VueAccordionContent.vue';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('VueAccordion Wrapper Suite', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('VueAccordion (Group Container)', () => {
    describe('Basic Rendering', () => {
      it('should render without errors', async () => {
        const wrapper = mount(VueAccordion, {
          slots: {
            default: '<div>Test Accordion Group</div>'
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
        const agAccordion = wrapper.find('ag-accordion');
        expect(agAccordion.exists()).toBe(true);
      });

      it('should render children content', async () => {
        const wrapper = mount(VueAccordion, {
          slots: {
            default: '<div>Accordion Group Content</div>'
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
        expect(wrapper.text()).toContain('Accordion Group Content');
      });
    });
  });

  describe('VueAccordionItem', () => {
    describe('Basic Rendering', () => {
      it('should render without errors', async () => {
        const wrapper = mount(VueAccordionItem, {
          slots: {
            default: '<div>Test Accordion Item</div>'
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
        const agAccordionItem = wrapper.find('ag-accordion-item');
        expect(agAccordionItem.exists()).toBe(true);
      });

      it('should render children content', async () => {
        const wrapper = mount(VueAccordionItem, {
          slots: {
            default: '<span>Accordion Item Content</span>'
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
        expect(wrapper.text()).toContain('Accordion Item Content');
      });
    });

    describe('Props Pass-Through', () => {
      it('should pass open prop to web component', async () => {
        const wrapper = mount(VueAccordionItem, {
          props: {
            open: true
          },
          slots: {
            default: '<div>Open Accordion Item</div>'
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

        const agAccordionItem = wrapper.find('ag-accordion-item');
        expect(agAccordionItem.exists()).toBe(true);

        // Check the property on the DOM element
        const agAccordionItemElement = agAccordionItem.element as HTMLElement & { open: boolean };
        expect(agAccordionItemElement.open).toBe(true);
      });

      it('should pass disabled prop to web component', async () => {
        const wrapper = mount(VueAccordionItem, {
          props: {
            disabled: true
          },
          slots: {
            default: '<div>Disabled Accordion Item</div>'
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

        const agAccordionItem = wrapper.find('ag-accordion-item');
        expect(agAccordionItem.exists()).toBe(true);

        // Check the property on the DOM element
        const agAccordionItemElement = agAccordionItem.element as HTMLElement & { disabled: boolean };
        expect(agAccordionItemElement.disabled).toBe(true);
      });

      it('should pass headingLevel prop to web component', async () => {
        const wrapper = mount(VueAccordionItem, {
          props: {
            headingLevel: 2
          },
          slots: {
            default: '<div>Heading Level 2 Item</div>'
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

        const agAccordionItem = wrapper.find('ag-accordion-item');
        expect(agAccordionItem.exists()).toBe(true);

        // Check the attribute since heading-level is kebab-case
        expect(agAccordionItem.attributes('heading-level')).toBe('2');
      });

      it('should use default prop values correctly', async () => {
        const wrapper = mount(VueAccordionItem, {
          slots: {
            default: '<div>Default Props Item</div>'
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

        const agAccordionItem = wrapper.find('ag-accordion-item');
        expect(agAccordionItem.exists()).toBe(true);

        // Check default values
        const agAccordionItemElement = agAccordionItem.element as HTMLElement & {
          open: boolean;
          disabled: boolean;
        };
        expect(agAccordionItemElement.open).toBe(false);
        expect(agAccordionItemElement.disabled).toBe(false);
        expect(agAccordionItem.attributes('heading-level')).toBe('3');
      });
    });

    describe('Event Handling', () => {
      it('should handle toggle events', async () => {
        const wrapper = mount(VueAccordionItem, {
          slots: {
            default: '<div>Toggle Me</div>'
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

        const agAccordionItem = wrapper.find('ag-accordion-item');
        expect(agAccordionItem.exists()).toBe(true);

        // Simulate a toggle event on the ag-accordion-item element
        const toggleEvent = new CustomEvent('toggle', {
          detail: { open: true }
        });
        agAccordionItem.element.dispatchEvent(toggleEvent);

        await wrapper.vm.$nextTick();

        // Check that the toggle event was emitted with correct data
        expect(wrapper.emitted()).toHaveProperty('toggle');
        expect(wrapper.emitted('toggle')).toHaveLength(1);
        expect(wrapper.emitted('toggle')?.[0]).toEqual([{ open: true }]);
      });

      it('should handle toggle events with different states', async () => {
        const wrapper = mount(VueAccordionItem, {
          props: {
            open: true
          },
          slots: {
            default: '<div>Toggle State Test</div>'
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

        const agAccordionItem = wrapper.find('ag-accordion-item');
        expect(agAccordionItem.exists()).toBe(true);

        // Simulate closing the accordion
        const toggleEvent = new CustomEvent('toggle', {
          detail: { open: false }
        });
        agAccordionItem.element.dispatchEvent(toggleEvent);

        await wrapper.vm.$nextTick();

        // Check that the toggle event was emitted with correct data
        expect(wrapper.emitted()).toHaveProperty('toggle');
        expect(wrapper.emitted('toggle')).toHaveLength(1);
        expect(wrapper.emitted('toggle')?.[0]).toEqual([{ open: false }]);
      });
    });
  });

  describe('VueAccordionHeader', () => {
    it('should render header content in slot', async () => {
      const wrapper = mount(VueAccordionHeader, {
        slots: {
          default: 'Header Content'
        }
      });

      await wrapper.vm.$nextTick();

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.text()).toContain('Header Content');

      // Check that it renders a span with slot="header"
      const headerSpan = wrapper.find('span[slot="header"]');
      expect(headerSpan.exists()).toBe(true);
    });
  });

  describe('VueAccordionContent', () => {
    it('should render content in slot', async () => {
      const wrapper = mount(VueAccordionContent, {
        slots: {
          default: 'Content Body'
        }
      });

      await wrapper.vm.$nextTick();

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.text()).toContain('Content Body');

      // Check that it renders a div with slot="content"
      const contentDiv = wrapper.find('div[slot="content"]');
      expect(contentDiv.exists()).toBe(true);
    });
  });

  describe('Integration', () => {
    it('should work together as a complete accordion', async () => {
      // Create a complete accordion structure using all components
      const wrapper = mount({
        template: `
          <VueAccordion>
            <VueAccordionItem :open="false" :heading-level="2">
              <VueAccordionHeader>First Item Header</VueAccordionHeader>
              <VueAccordionContent>First Item Content</VueAccordionContent>
            </VueAccordionItem>
            <VueAccordionItem :open="true" :heading-level="2">
              <VueAccordionHeader>Second Item Header</VueAccordionHeader>
              <VueAccordionContent>Second Item Content</VueAccordionContent>
            </VueAccordionItem>
          </VueAccordion>
        `,
        components: {
          VueAccordion,
          VueAccordionItem,
          VueAccordionHeader,
          VueAccordionContent
        }
      }, {
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (tag: string) => tag.startsWith('ag-')
            }
          }
        }
      });

      await wrapper.vm.$nextTick();

      // Check that all components are rendered
      expect(wrapper.find('ag-accordion').exists()).toBe(true);
      expect(wrapper.findAll('ag-accordion-item')).toHaveLength(2);
      expect(wrapper.findAll('span[slot="header"]')).toHaveLength(2);
      expect(wrapper.findAll('div[slot="content"]')).toHaveLength(2);

      // Check content is rendered
      expect(wrapper.text()).toContain('First Item Header');
      expect(wrapper.text()).toContain('First Item Content');
      expect(wrapper.text()).toContain('Second Item Header');
      expect(wrapper.text()).toContain('Second Item Content');
    });
  });
});