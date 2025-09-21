import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import VueInput from './VueInput.vue';

// Mock console.log to test event logging if needed
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('VueInput Wrapper', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  afterEach(() => {
    // Clean up any DOM elements
    document.body.innerHTML = '';
  });

  describe('Basic Rendering', () => {
    it('should render without errors', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Test Input'
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
      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);
    });

    it('should render with label prop', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Username'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the property on the DOM element (label doesn't reflect to attribute)
      const agInputElement = agInput.element as HTMLElement & { label: string };
      expect(agInputElement.label).toBe('Username');
    });

    it('should render children content', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Input with content'
        },
        slots: {
          default: '<span>Additional content</span>'
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
      expect(wrapper.text()).toContain('Additional content');
    });
  });

  describe('Props Pass-Through', () => {
    it('should pass type prop to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Email',
          type: 'email'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the property on the DOM element
      const agInputElement = agInput.element as HTMLElement & { type: string };
      expect(agInputElement.type).toBe('email');
    });

    it('should pass value prop to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Input',
          value: 'test value'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the property on the DOM element
      const agInputElement = agInput.element as HTMLElement & { value: string };
      expect(agInputElement.value).toBe('test value');
    });

    it('should pass placeholder prop to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Input',
          placeholder: 'Enter text...'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the attribute since placeholder is a standard HTML attribute
      expect(agInput.attributes('placeholder')).toBe('Enter text...');
    });

    it('should pass size prop to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Large Input',
          size: 'large'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the property on the DOM element
      const agInputElement = agInput.element as HTMLElement & { size: string };
      expect(agInputElement.size).toBe('large');
    });

    it('should pass disabled prop to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Disabled Input',
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the property on the DOM element
      const agInputElement = agInput.element as HTMLElement & { disabled: boolean };
      expect(agInputElement.disabled).toBe(true);
    });

    it('should pass required prop to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Required Input',
          required: true
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the property on the DOM element
      const agInputElement = agInput.element as HTMLElement & { required: boolean };
      expect(agInputElement.required).toBe(true);
    });

    it('should pass textarea props to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Textarea',
          type: 'textarea',
          rows: 6,
          cols: 80
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the properties on the DOM element
      const agInputElement = agInput.element as HTMLElement & {
        type: string;
        rows: number;
        cols: number;
      };
      expect(agInputElement.type).toBe('textarea');
      expect(agInputElement.rows).toBe(6);
      expect(agInputElement.cols).toBe(80);
    });

    it('should use default prop values correctly', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Default Props Input'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check default values
      const agInputElement = agInput.element as HTMLElement & {
        type: string;
        size: string;
        disabled: boolean;
        required: boolean;
        isRounded: boolean;
        rows: number;
        cols: number;
      };

      expect(agInputElement.type).toBe('text');
      expect(agInputElement.size).toBe('default');
      expect(agInputElement.disabled).toBe(false);
      expect(agInputElement.required).toBe(false);
      // Check that isRounded attribute is not set when false (proper boolean attribute behavior)
      expect(agInput.attributes('is-rounded')).toBeUndefined();
      expect(agInputElement.rows).toBe(4);
      expect(agInputElement.cols).toBe(50);
    });
  });

  describe('Styling Variants', () => {
    it('should pass styling variant props to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Styled Input',
          isRounded: true,
          isUnderlined: true,
          isInline: true
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the properties on the DOM element
      const agInputElement = agInput.element as HTMLElement & {
        isRounded: boolean;
        isUnderlined: boolean;
        isInline: boolean;
      };
      expect(agInputElement.isRounded).toBe(true);
      expect(agInputElement.isUnderlined).toBe(true);
      expect(agInputElement.isInline).toBe(true);
    });

    it('should pass addon props to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Input with Addons',
          hasLeftAddon: true,
          hasRightAddon: true
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the properties on the DOM element
      const agInputElement = agInput.element as HTMLElement & {
        hasLeftAddon: boolean;
        hasRightAddon: boolean;
      };
      expect(agInputElement.hasLeftAddon).toBe(true);
      expect(agInputElement.hasRightAddon).toBe(true);
    });
  });

  describe('Validation and Error Handling', () => {
    it('should pass validation props to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Validation Input',
          invalid: true,
          errorMessage: 'This field is required',
          helpText: 'Please enter a valid value'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the properties on the DOM element
      const agInputElement = agInput.element as HTMLElement & {
        invalid: boolean;
        errorMessage: string;
        helpText: string;
      };
      expect(agInputElement.invalid).toBe(true);
      expect(agInputElement.errorMessage).toBe('This field is required');
      expect(agInputElement.helpText).toBe('Please enter a valid value');
    });

    it('should pass readonly prop to web component', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Readonly Input',
          readonly: true,
          value: 'Cannot edit this'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the property on the DOM element
      const agInputElement = agInput.element as HTMLElement & { readonly: boolean };
      expect(agInputElement.readonly).toBe(true);
    });
  });

  describe('Event Handling', () => {
    it('should handle input events', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Test Input'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Simulate an input event on the ag-input element
      const inputEvent = new Event('input', { bubbles: true });
      agInput.element.dispatchEvent(inputEvent);

      await wrapper.vm.$nextTick();

      // Check that the input event was emitted
      expect(wrapper.emitted()).toHaveProperty('input');
      expect(wrapper.emitted('input')).toHaveLength(1);
    });

    it('should handle change events', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Test Input'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Simulate a change event on the ag-input element
      const changeEvent = new Event('change', { bubbles: true });
      agInput.element.dispatchEvent(changeEvent);

      await wrapper.vm.$nextTick();

      // Check that the change event was emitted
      expect(wrapper.emitted()).toHaveProperty('change');
      expect(wrapper.emitted('change')).toHaveLength(1);
    });

    it('should handle focus events', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Test Input'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Simulate a focus event on the ag-input element
      const focusEvent = new Event('focus', { bubbles: true });
      agInput.element.dispatchEvent(focusEvent);

      await wrapper.vm.$nextTick();

      // Check that the focus event was emitted
      expect(wrapper.emitted()).toHaveProperty('focus');
      expect(wrapper.emitted('focus')).toHaveLength(1);
    });

    it('should handle blur events', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Test Input'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Simulate a blur event on the ag-input element
      const blurEvent = new Event('blur', { bubbles: true });
      agInput.element.dispatchEvent(blurEvent);

      await wrapper.vm.$nextTick();

      // Check that the blur event was emitted
      expect(wrapper.emitted()).toHaveProperty('blur');
      expect(wrapper.emitted('blur')).toHaveLength(1);
    });
  });

  describe('Imperative API', () => {
    it('should provide focus, blur, and select methods via expose', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Test Input'
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
      expect(wrapper.vm.focus).toBeDefined();
      expect(wrapper.vm.blur).toBeDefined();
      expect(wrapper.vm.select).toBeDefined();
      expect(typeof wrapper.vm.focus).toBe('function');
      expect(typeof wrapper.vm.blur).toBe('function');
      expect(typeof wrapper.vm.select).toBe('function');
    });

    it('should call underlying input methods when using imperative API', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Test Input'
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

      // Mock the shadow DOM input element
      const agInput = wrapper.find('ag-input');
      const mockInput = {
        focus: vi.fn(),
        blur: vi.fn(),
        select: vi.fn()
      };

      // Mock shadowRoot and querySelector
      Object.defineProperty(agInput.element, 'shadowRoot', {
        value: {
          querySelector: vi.fn().mockReturnValue(mockInput)
        },
        configurable: true
      });

      // Test imperative methods
      wrapper.vm.focus();
      expect(mockInput.focus).toHaveBeenCalledTimes(1);

      wrapper.vm.blur();
      expect(mockInput.blur).toHaveBeenCalledTimes(1);

      wrapper.vm.select();
      expect(mockInput.select).toHaveBeenCalledTimes(1);
    });
  });

  describe('Label Variants', () => {
    it('should handle label visibility variants', async () => {
      const wrapper = mount(VueInput, {
        props: {
          label: 'Hidden Label Input',
          labelHidden: true
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the property on the DOM element
      const agInputElement = agInput.element as HTMLElement & { labelHidden: boolean };
      expect(agInputElement.labelHidden).toBe(true);
    });

    it('should handle no label variant', async () => {
      const wrapper = mount(VueInput, {
        props: {
          noLabel: true,
          ariaLabel: 'Accessible input without visible label'
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

      const agInput = wrapper.find('ag-input');
      expect(agInput.exists()).toBe(true);

      // Check the properties on the DOM element
      const agInputElement = agInput.element as HTMLElement & {
        noLabel: boolean;
        ariaLabel: string;
      };
      expect(agInputElement.noLabel).toBe(true);
      expect(agInputElement.ariaLabel).toBe('Accessible input without visible label');
    });
  });
});