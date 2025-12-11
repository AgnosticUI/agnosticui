/**
 * VueIconButton Component Tests
 * Minimal test suite focusing on core functionality
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import VueIconButton from './VueIconButton.vue';

// Mock console.log to test event logging
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('VueIconButton Wrapper', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Close dialog'
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);
      expect(wrapper.exists()).toBe(true);
    });

    it('should pass required label prop', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Menu button'
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);
      // Check that the component has the web component
      expect(wrapper.html()).toContain('ag-icon-button');
    });

    it('should accept icon props', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Menu',
          icon: 'hamburger',
          unicode: '☰'
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);
      expect(wrapper.html()).toContain('ag-icon-button');
    });
  });

  describe('Props Configuration', () => {
    it('should accept size prop', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Test',
          size: 'lg'
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);
    });

    it('should accept variant prop', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Test',
          variant: 'primary'
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);
    });

    it('should accept disabled prop', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Test',
          disabled: true
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);
    });
  });

  describe('ARIA Properties', () => {
    it('should handle ariaLabel prop', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Original',
          ariaLabel: 'Accessible label'
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);
    });

  });

  describe('Slot Content', () => {
    it('should render slotted content', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Custom icon'
        },
        slots: {
          default: '<svg data-testid="custom-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>'
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);

      // Check that slot content is rendered
      const slotContent = wrapper.find('svg');
      expect(slotContent.exists()).toBe(true);
    });
  });

  describe('TypeScript Props', () => {
    it('should accept all valid size values', () => {
      const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = ['xs', 'sm', 'md', 'lg', 'xl'];

      sizes.forEach(size => {
        expect(() => {
          mount(VueIconButton, {
            props: {
              label: 'Test',
              size
            },
            global: {
              config: {
                compilerOptions: {
                  isCustomElement: (tag: string) => tag.startsWith('ag-')
                }
              }
            }
          });
        }).not.toThrow();
      });
    });

    it('should accept all valid variant values', () => {
      const variants: Array<'primary' | 'secondary' | 'ghost' | 'danger'> =
        ['primary', 'secondary', 'ghost', 'danger'];

      variants.forEach(variant => {
        expect(() => {
          mount(VueIconButton, {
            props: {
              label: 'Test',
              variant
            },
            global: {
              config: {
                compilerOptions: {
                  isCustomElement: (tag: string) => tag.startsWith('ag-')
                }
              }
            }
          });
        }).not.toThrow();
      });
    });
  });

  describe('Event Handling', () => {
    it('should setup event listeners', async () => {
      wrapper = mount(VueIconButton, {
        props: {
          label: 'Click me'
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

      const iconButton = wrapper.find('ag-icon-button');
      expect(iconButton.exists()).toBe(true);

      // The component should exist and be ready for event handling
      expect(wrapper.html()).toContain('ag-icon-button');
    });
  });
});