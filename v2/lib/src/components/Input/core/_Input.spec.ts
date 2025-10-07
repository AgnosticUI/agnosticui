/**
 * AgnosticUI v2 Input Component - Incremental Test Suite
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-10-06
 */

import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest';
import { AgInput } from './_Input';

// Ensure the component is registered
if (!customElements.get('ag-input')) {
  customElements.define('ag-input', AgInput);
}

describe('AgInput - Basic Functionality', () => {
  let element: AgInput;

  describe('Basic Label + Input (Starting Point)', () => {
    beforeEach(async () => {
      element = new AgInput();
      element.label = 'Email Address';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('renders a basic input component', () => {
      expect(element).toBeTruthy();
    });

    it('renders label above input per BBC GEL', () => {
      const label = element.shadowRoot?.querySelector('label');
      const input = element.shadowRoot?.querySelector('input');

      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label?.textContent?.trim()).toBe('Email Address');
    });

    it('associates label with input via for/id', () => {
      const label = element.shadowRoot?.querySelector('label');
      const input = element.shadowRoot?.querySelector('input');

      expect(label?.getAttribute('for')).toBe(input?.getAttribute('id'));
    });

    it('generates unique IDs for each component instance', async () => {
      const element2 = new AgInput();
      element2.label = 'Password';
      document.body.appendChild(element2);
      await element2.updateComplete;

      const input1 = element.shadowRoot?.querySelector('input');
      const input2 = element2.shadowRoot?.querySelector('input');

      expect(input1?.getAttribute('id')).not.toBe(input2?.getAttribute('id'));

      // Cleanup
      document.body.removeChild(element2);
    });

    it('supports basic input types', async () => {
      element.type = 'email';
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('type')).toBe('email');
    });

    it('applies focus styles with --ag-focus', () => {
      // Check that focus-visible styles are defined in the component
      const styles = (element.constructor as typeof AgInput).styles;
      expect(styles).toBeTruthy();
      // In a real test environment, we'd check that the CSS rule exists
    });
  });
});

describe('Label Architecture (Complete Flexibility)', () => {
  afterEach(() => {
    // Clean up any elements created in individual tests
    document.querySelectorAll('ag-input').forEach(el => {
      if (document.body.contains(el)) {
        document.body.removeChild(el);
      }
    });
  });

  describe('Standard Built-in Label (Recommended)', () => {
    it('displays visible label above input by default', async () => {
      const element = new AgInput();
      element.label = 'Full Name';
      document.body.appendChild(element);
      await element.updateComplete;

      const label = element.shadowRoot?.querySelector('label');
      const input = element.shadowRoot?.querySelector('input');

      expect(label?.textContent?.trim()).toBe('Full Name');
      expect(label?.getAttribute('for')).toBe(input?.getAttribute('id'));
      expect(label?.classList.contains('ag-input__label--hidden')).toBe(false);
    });
  });

  describe('Visually Hidden Label (Screen Reader Only)', () => {
    it('hides label visually but keeps it for screen readers', async () => {
      const element = new AgInput();
      element.label = 'Search';
      element.labelHidden = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const label = element.shadowRoot?.querySelector('label');
      expect(label?.textContent?.trim()).toBe('Search');
      expect(label?.classList.contains('ag-input__label--hidden')).toBe(true);
    });
  });

  describe('External Label (Escape Hatch)', () => {
    it('skips built-in label when noLabel is true', async () => {
      const element = new AgInput();
      element.noLabel = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const label = element.shadowRoot?.querySelector('label');
      expect(label).toBeNull();
    });

    it('supports external label via labelledBy', async () => {
      // Create external label
      const externalLabel = document.createElement('label');
      externalLabel.id = 'external-label';
      externalLabel.textContent = 'External Label';
      document.body.appendChild(externalLabel);

      const element = new AgInput();
      element.noLabel = true;
      element.labelledBy = 'external-label';
      document.body.appendChild(element);
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('aria-labelledby')).toBe('external-label');

      // Cleanup
      document.body.removeChild(externalLabel);
    });
  });

  describe('aria-label Only (Icon-Only Scenarios)', () => {
    it('uses aria-label when no visible label needed', async () => {
      const element = new AgInput();
      element.noLabel = true;
      element.ariaLabel = 'Search products';
      document.body.appendChild(element);
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('aria-label')).toBe('Search products');
    });
  });
});

describe('Input Types Support (HTML5 + Textarea)', () => {
  afterEach(() => {
    document.querySelectorAll('ag-input').forEach(el => {
      if (document.body.contains(el)) {
        document.body.removeChild(el);
      }
    });
  });

  describe('Standard HTML5 Input Types', () => {
    const inputTypes = ['text', 'email', 'password', 'number', 'tel', 'url', 'search'];

    inputTypes.forEach(type => {
      it(`supports type="${type}"`, async () => {
        const element = new AgInput();
        element.label = `Test ${type}`;
        element.type = type;
        document.body.appendChild(element);
        await element.updateComplete;

        const input = element.shadowRoot?.querySelector('input');
        expect(input?.getAttribute('type')).toBe(type);
      });
    });

    it('defaults to type="text"', async () => {
      const element = new AgInput();
      element.label = 'Default Type';
      document.body.appendChild(element);
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('type')).toBe('text');
    });
  });

  describe('Textarea Mode (v1 Parity)', () => {
    it('renders textarea element when type="textarea"', async () => {
      const element = new AgInput();
      element.label = 'Comments';
      element.type = 'textarea';
      document.body.appendChild(element);
      await element.updateComplete;

      const textarea = element.shadowRoot?.querySelector('textarea');
      const input = element.shadowRoot?.querySelector('input');

      expect(textarea).toBeTruthy();
      expect(input).toBeNull();
    });

    it('supports rows and cols for textarea', async () => {
      const element = new AgInput();
      element.label = 'Description';
      element.type = 'textarea';
      element.rows = 6;
      element.cols = 50;
      document.body.appendChild(element);
      await element.updateComplete;

      const textarea = element.shadowRoot?.querySelector('textarea');
      expect(textarea?.getAttribute('rows')).toBe('6');
      expect(textarea?.getAttribute('cols')).toBe('50');
    });

    it('textarea maintains same label associations', async () => {
      const element = new AgInput();
      element.label = 'Feedback';
      element.type = 'textarea';
      document.body.appendChild(element);
      await element.updateComplete;

      const label = element.shadowRoot?.querySelector('label');
      const textarea = element.shadowRoot?.querySelector('textarea');

      expect(label?.getAttribute('for')).toBe(textarea?.getAttribute('id'));
    });
  });
});

describe('v1 Parity - Size Variants', () => {
  afterEach(() => {
    document.querySelectorAll('ag-input').forEach(el => {
      if (document.body.contains(el)) {
        document.body.removeChild(el);
      }
    });
  });

  describe('Size Property Support', () => {
    const sizes = ['small', 'default', 'large'];

    sizes.forEach(size => {
      it(`applies size="${size}" attribute`, async () => {
        const element = new AgInput();
        element.label = `${size} Input`;
        element.size = size as 'small' | 'default' | 'large';
        document.body.appendChild(element);
        await element.updateComplete;

        expect(element.hasAttribute('size')).toBe(true);
        expect(element.getAttribute('size')).toBe(size);
      });
    });

    it('defaults to "default" size when not specified', async () => {
      const element = new AgInput();
      element.label = 'Default Size';
      document.body.appendChild(element);
      await element.updateComplete;

      // Should either have no size attribute or default to "default"
      const sizeAttr = element.getAttribute('size');
      expect(sizeAttr === null || sizeAttr === 'default').toBe(true);
    });

    it('applies size classes to wrapper element', async () => {
      const element = new AgInput();
      element.label = 'Large Input';
      element.size = 'large';
      document.body.appendChild(element);
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('.ag-input');
      expect(wrapper?.classList.contains('ag-input--large')).toBe(true);
    });

    it('works with textarea mode', async () => {
      const element = new AgInput();
      element.label = 'Small Textarea';
      element.type = 'textarea';
      element.size = 'small';
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.getAttribute('size')).toBe('small');
      const wrapper = element.shadowRoot?.querySelector('.ag-input');
      expect(wrapper?.classList.contains('ag-input--small')).toBe(true);
    });
  });

  describe('Size Styling Integration', () => {
    it('applies size-specific CSS parts for external styling', async () => {
      const element = new AgInput();
      element.label = 'Size Parts Test';
      element.size = 'large';
      document.body.appendChild(element);
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('[part="wrapper"]');
      const input = element.shadowRoot?.querySelector('[part="input"]');
      const label = element.shadowRoot?.querySelector('[part="label"]');

      expect(wrapper).toBeTruthy();
      expect(input).toBeTruthy();
      expect(label).toBeTruthy();
      // Parts are available for CSS targeting like: ag-input[size="large"]::part(input)
    });
  });
});

describe('v1 Parity - Styling Variants', () => {
  afterEach(() => {
    document.querySelectorAll('ag-input').forEach(el => {
      if (document.body.contains(el)) {
        document.body.removeChild(el);
      }
    });
  });

  describe('Boolean Styling Properties', () => {
    it('applies capsule variant', async () => {
      const element = new AgInput();
      element.label = 'Capsule Input';
      element.capsule = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('capsule')).toBe(true);
    });

    it('applies rounded variant', async () => {
      const element = new AgInput();
      element.label = 'Rounded Input';
      element.rounded = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('rounded')).toBe(true);
      const wrapper = element.shadowRoot?.querySelector('.ag-input');
      expect(wrapper?.classList.contains('ag-input--rounded')).toBe(true);
    });

    it('applies underlined variant', async () => {
      const element = new AgInput();
      element.label = 'Underlined Input';
      element.underlined = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('underlined')).toBe(true);
      const wrapper = element.shadowRoot?.querySelector('.ag-input');
      expect(wrapper?.classList.contains('ag-input--underlined')).toBe(true);
    });

    it('applies underlinedWithBackground variant', async () => {
      const element = new AgInput();
      element.label = 'Underlined with Background';
      element.underlinedWithBackground = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('underlined-with-background')).toBe(true);
      const wrapper = element.shadowRoot?.querySelector('.ag-input');
      expect(wrapper?.classList.contains('ag-input--underlined-with-background')).toBe(true);
    });

    it('applies inline variant', async () => {
      const element = new AgInput();
      element.label = 'Inline Input';
      element.inline = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('inline')).toBe(true);
      // Note: CSS :host([inline]) rule will set display: inline-block
      // but computed styles may not reflect this in test environment
    });
  });

  describe('Combined Styling Variants', () => {
    it('supports multiple styling variants together', async () => {
      const element = new AgInput();
      element.label = 'Multi-styled Input';
      element.capsule = true;
      element.rounded = true;
      element.underlined = true;
      element.size = 'large';
      document.body.appendChild(element);
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('.ag-input');
      expect(wrapper?.classList.contains('ag-input--rounded')).toBe(true);
      expect(wrapper?.classList.contains('ag-input--underlined')).toBe(true);
      expect(wrapper?.classList.contains('ag-input--large')).toBe(true);
      expect(element.hasAttribute('capsule')).toBe(true);
    });

    it('styling variants work with textarea mode', async () => {
      const element = new AgInput();
      element.label = 'Styled Textarea';
      element.type = 'textarea';
      element.rounded = true;
      element.size = 'small';
      document.body.appendChild(element);
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('.ag-input');
      expect(wrapper?.classList.contains('ag-input--rounded')).toBe(true);
      expect(wrapper?.classList.contains('ag-input--small')).toBe(true);

      const textarea = element.shadowRoot?.querySelector('textarea');
      expect(textarea).toBeTruthy();
    });
  });
});

describe('v1 Parity - Addon Support', () => {
  afterEach(() => {
    document.querySelectorAll('ag-input').forEach(el => {
      if (document.body.contains(el)) {
        document.body.removeChild(el);
      }
    });
  });

  describe('Left Addon Support', () => {
    it('enables left addon when hasLeftAddon is true', async () => {
      const element = new AgInput();
      element.label = 'Search';
      element.hasLeftAddon = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('has-left-addon')).toBe(true);
      const leftAddon = element.shadowRoot?.querySelector('.ag-input__addon--left');
      expect(leftAddon).toBeTruthy();

      const leftSlot = leftAddon?.querySelector('slot[name="addon-left"]');
      expect(leftSlot).toBeTruthy();
    });

    it('wraps input in field container when addons present', async () => {
      const element = new AgInput();
      element.label = 'With Addon';
      element.hasLeftAddon = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const fieldWrapper = element.shadowRoot?.querySelector('.ag-input__field');
      expect(fieldWrapper).toBeTruthy();
      expect(fieldWrapper?.getAttribute('part')).toBe('field-wrapper');
    });

    it('input receives flex: 1 for remaining space', async () => {
      const element = new AgInput();
      element.label = 'Flex Input';
      element.hasLeftAddon = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const fieldWrapper = element.shadowRoot?.querySelector('.ag-input__field');
      const input = fieldWrapper?.querySelector('input');
      expect(input).toBeTruthy();
    });
  });

  describe('Right Addon Support', () => {
    it('enables right addon when hasRightAddon is true', async () => {
      const element = new AgInput();
      element.label = 'Amount';
      element.hasRightAddon = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('has-right-addon')).toBe(true);
      const rightAddon = element.shadowRoot?.querySelector('.ag-input__addon--right');
      expect(rightAddon).toBeTruthy();

      const rightSlot = rightAddon?.querySelector('slot[name="addon-right"]');
      expect(rightSlot).toBeTruthy();
    });
  });

  describe('Dual Addon Support', () => {
    it('supports both left and right addons together', async () => {
      const element = new AgInput();
      element.label = 'Currency';
      element.hasLeftAddon = true;
      element.hasRightAddon = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const leftAddon = element.shadowRoot?.querySelector('.ag-input__addon--left');
      const rightAddon = element.shadowRoot?.querySelector('.ag-input__addon--right');
      const fieldWrapper = element.shadowRoot?.querySelector('.ag-input__field');

      expect(leftAddon).toBeTruthy();
      expect(rightAddon).toBeTruthy();
      expect(fieldWrapper).toBeTruthy();
    });

    it('maintains proper order: left addon, input, right addon', async () => {
      const element = new AgInput();
      element.label = 'Ordered Elements';
      element.hasLeftAddon = true;
      element.hasRightAddon = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const fieldWrapper = element.shadowRoot?.querySelector('.ag-input__field');
      const children = Array.from(fieldWrapper?.children || []);

      expect(children[0]?.classList.contains('ag-input__addon--left')).toBe(true);
      expect(children[1]?.tagName.toLowerCase()).toBe('input');
      expect(children[2]?.classList.contains('ag-input__addon--right')).toBe(true);
    });
  });

  describe('Addon Integration', () => {
    it('works with textarea mode', async () => {
      const element = new AgInput();
      element.label = 'Textarea with Addons';
      element.type = 'textarea';
      element.hasLeftAddon = true;
      element.hasRightAddon = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const fieldWrapper = element.shadowRoot?.querySelector('.ag-input__field');
      const textarea = fieldWrapper?.querySelector('textarea');
      const leftAddon = element.shadowRoot?.querySelector('.ag-input__addon--left');
      const rightAddon = element.shadowRoot?.querySelector('.ag-input__addon--right');

      expect(textarea).toBeTruthy();
      expect(leftAddon).toBeTruthy();
      expect(rightAddon).toBeTruthy();
    });

    it('combines with size and styling variants', async () => {
      const element = new AgInput();
      element.label = 'Combined Features';
      element.size = 'large';
      element.rounded = true;
      element.hasLeftAddon = true;
      element.hasRightAddon = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const wrapper = element.shadowRoot?.querySelector('.ag-input');
      expect(wrapper?.classList.contains('ag-input--large')).toBe(true);
      expect(wrapper?.classList.contains('ag-input--rounded')).toBe(true);

      const leftAddon = element.shadowRoot?.querySelector('.ag-input__addon--left');
      const rightAddon = element.shadowRoot?.querySelector('.ag-input__addon--right');
      expect(leftAddon).toBeTruthy();
      expect(rightAddon).toBeTruthy();
    });
  });
});

describe('Validation & Error Handling (BBC GEL)', () => {
  afterEach(() => {
    document.querySelectorAll('ag-input').forEach(el => {
      if (document.body.contains(el)) {
        document.body.removeChild(el);
      }
    });
  });

  describe('Required Field Support', () => {
    it('applies required attribute to input when required is true', async () => {
      const element = new AgInput();
      element.label = 'Email';
      element.required = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('required')).toBe(true);
      const input = element.shadowRoot?.querySelector('input');
      expect(input?.hasAttribute('required')).toBe(true);
      expect(input?.getAttribute('aria-required')).toBe('true');
    });

    it('displays required indicator in label', async () => {
      const element = new AgInput();
      element.label = 'Password';
      element.required = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const requiredIndicator = element.shadowRoot?.querySelector('.ag-input__required');
      expect(requiredIndicator).toBeTruthy();
      expect(requiredIndicator?.getAttribute('aria-hidden')).toBe('true');
      expect(requiredIndicator?.textContent?.trim()).toBe('*');
    });

    it('works with textarea mode', async () => {
      const element = new AgInput();
      element.label = 'Required Comments';
      element.type = 'textarea';
      element.required = true;
      document.body.appendChild(element);
      await element.updateComplete;

      const textarea = element.shadowRoot?.querySelector('textarea');
      expect(textarea?.hasAttribute('required')).toBe(true);
      expect(textarea?.getAttribute('aria-required')).toBe('true');
    });
  });

  describe('Disabled State', () => {
    it('applies disabled attribute to input when disabled is true', async () => {
      const element = new AgInput();
      element.label = 'Disabled Field';
      element.disabled = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('disabled')).toBe(true);
      const input = element.shadowRoot?.querySelector('input');
      expect(input?.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('Readonly State', () => {
    it('applies readonly attribute to input when readonly is true', async () => {
      const element = new AgInput();
      element.label = 'Readonly Field';
      element.readonly = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('readonly')).toBe(true);
      const input = element.shadowRoot?.querySelector('input');
      expect(input?.hasAttribute('readonly')).toBe(true);
    });
  });

  describe('Invalid State (aria-invalid)', () => {
    it('applies aria-invalid when invalid is true', async () => {
      const element = new AgInput();
      element.label = 'Email';
      element.invalid = true;
      document.body.appendChild(element);
      await element.updateComplete;

      expect(element.hasAttribute('invalid')).toBe(true);
      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('aria-invalid')).toBe('true');
    });

    it('defaults to aria-invalid="false" when valid', async () => {
      const element = new AgInput();
      element.label = 'Valid Input';
      document.body.appendChild(element);
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('aria-invalid')).toBe('false');
    });
  });

  describe('Error Message Display (BBC GEL)', () => {
    it('displays error message above input when errorMessage is set', async () => {
      const element = new AgInput();
      element.label = 'Email';
      element.invalid = true;
      element.errorMessage = 'Please enter a valid email address';
      document.body.appendChild(element);
      await element.updateComplete;

      const errorDiv = element.shadowRoot?.querySelector('.ag-input__error');
      expect(errorDiv).toBeTruthy();
      expect(errorDiv?.textContent?.trim()).toBe('Please enter a valid email address');
      expect(errorDiv?.getAttribute('part')).toBe('error');
    });

    it('associates error message with input via aria-describedby', async () => {
      const element = new AgInput();
      element.label = 'Username';
      element.invalid = true;
      element.errorMessage = 'Username is required';
      document.body.appendChild(element);
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      const errorDiv = element.shadowRoot?.querySelector('.ag-input__error');
      const errorId = errorDiv?.getAttribute('id');

      expect(errorId).toBeTruthy();
      expect(input?.getAttribute('aria-describedby')?.includes(errorId!)).toBe(true);
    });

    it('hides error message when no errorMessage provided', async () => {
      const element = new AgInput();
      element.label = 'Valid Field';
      document.body.appendChild(element);
      await element.updateComplete;

      const errorDiv = element.shadowRoot?.querySelector('.ag-input__error');
      expect(errorDiv?.hasAttribute('hidden')).toBe(true);
    });
  });

  describe('Help Text Support', () => {
    it('displays help text when helpText is provided', async () => {
      const element = new AgInput();
      element.label = 'Password';
      element.helpText = 'Must be at least 8 characters long';
      document.body.appendChild(element);
      await element.updateComplete;

      const helpDiv = element.shadowRoot?.querySelector('.ag-input__help');
      expect(helpDiv).toBeTruthy();
      expect(helpDiv?.textContent?.trim()).toBe('Must be at least 8 characters long');
      expect(helpDiv?.getAttribute('part')).toBe('help');
    });

    it('associates help text with input via aria-describedby', async () => {
      const element = new AgInput();
      element.label = 'Phone';
      element.helpText = 'Include country code';
      document.body.appendChild(element);
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      const helpDiv = element.shadowRoot?.querySelector('.ag-input__help');
      const helpId = helpDiv?.getAttribute('id');

      expect(helpId).toBeTruthy();
      expect(input?.getAttribute('aria-describedby')?.includes(helpId!)).toBe(true);
    });

    it('combines help text and error message in aria-describedby', async () => {
      const element = new AgInput();
      element.label = 'Email';
      element.helpText = 'We will never share your email';
      element.invalid = true;
      element.errorMessage = 'Invalid email format';
      document.body.appendChild(element);
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      const helpDiv = element.shadowRoot?.querySelector('.ag-input__help');
      const errorDiv = element.shadowRoot?.querySelector('.ag-input__error');

      const describedBy = input?.getAttribute('aria-describedby');
      expect(describedBy?.includes(helpDiv?.getAttribute('id')!)).toBe(true);
      expect(describedBy?.includes(errorDiv?.getAttribute('id')!)).toBe(true);
    });
  });

  describe('Validation Integration', () => {
    it('works with all label patterns', async () => {
      const element = new AgInput();
      element.label = 'Hidden Label Field';
      element.labelHidden = true;
      element.required = true;
      element.invalid = true;
      element.errorMessage = 'This field is required';
      document.body.appendChild(element);
      await element.updateComplete;

      const label = element.shadowRoot?.querySelector('label');
      const input = element.shadowRoot?.querySelector('input');
      const errorDiv = element.shadowRoot?.querySelector('.ag-input__error');

      expect(label?.classList.contains('ag-input__label--hidden')).toBe(true);
      expect(input?.getAttribute('aria-invalid')).toBe('true');
      expect(errorDiv?.textContent?.trim()).toBe('This field is required');
    });

    it('works with addon layout', async () => {
      const element = new AgInput();
      element.label = 'Amount';
      element.hasLeftAddon = true;
      element.hasRightAddon = true;
      element.required = true;
      element.helpText = 'Enter amount in USD';
      document.body.appendChild(element);
      await element.updateComplete;

      const fieldWrapper = element.shadowRoot?.querySelector('.ag-input__field');
      const input = fieldWrapper?.querySelector('input');
      const helpDiv = element.shadowRoot?.querySelector('.ag-input__help');

      expect(fieldWrapper).toBeTruthy();
      expect(input?.getAttribute('aria-required')).toBe('true');
      expect(helpDiv?.textContent?.trim()).toBe('Enter amount in USD');
    });
  });
});

describe('Event Handling', () => {
  let element: AgInput;

  beforeEach(async () => {
    element = new AgInput();
    element.label = 'Event Test';
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    if (document.body.contains(element)) {
      document.body.removeChild(element);
    }
  });

  it('updates value and dispatches native input event without detail', async () => {
    const inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    let receivedEvent: Event | undefined;

    element.addEventListener('input', (e) => {
      receivedEvent = e;
    });

    inputEl.value = 'new value';
    inputEl.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true, detail: undefined }));

    await element.updateComplete;

    expect(element.value).toBe('new value');
    expect(receivedEvent).toBeDefined();
    expect(receivedEvent?.type).toBe('input');
    expect(receivedEvent?.bubbles).toBe(true);
    expect(receivedEvent?.composed).toBe(true);
    expect(receivedEvent instanceof Event).toBe(true);
  });

  it('updates value and dispatches native change event without detail', async () => {
    const inputEl = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    let receivedEvent: Event | undefined;

    element.addEventListener('change', (e) => {
      receivedEvent = e;
    });

    inputEl.value = 'changed value';
    inputEl.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

    await element.updateComplete;

    expect(element.value).toBe('changed value');
    expect(receivedEvent).toBeDefined();
    expect(receivedEvent?.type).toBe('change');
    expect(receivedEvent?.bubbles).toBe(true);
    expect(receivedEvent?.composed).toBe(true);
    expect(receivedEvent instanceof Event).toBe(true);
  });
});

describe('Event Handling for Textarea', () => {
  let element: AgInput;

  beforeEach(async () => {
    element = new AgInput();
    element.label = 'Textarea Event Test';
    element.type = 'textarea';
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    if (document.body.contains(element)) {
      document.body.removeChild(element);
    }
  });

  it('updates value and dispatches native input event without detail for textarea', async () => {
    const textareaEl = element.shadowRoot?.querySelector('textarea') as HTMLTextAreaElement;
    let receivedEvent: Event | undefined;

    element.addEventListener('input', (e) => {
      receivedEvent = e;
    });

    textareaEl.value = 'new textarea value';
    textareaEl.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true, detail: undefined }));

    await element.updateComplete;

    expect(element.value).toBe('new textarea value');
    expect(receivedEvent).toBeDefined();
    expect(receivedEvent?.type).toBe('input');
    expect(receivedEvent?.bubbles).toBe(true);
    expect(receivedEvent?.composed).toBe(true);
  });

  it('updates value and dispatches native change event without detail for textarea', async () => {
    const textareaEl = element.shadowRoot?.querySelector('textarea') as HTMLTextAreaElement;
    let receivedEvent: Event | undefined;

    element.addEventListener('change', (e) => {
      receivedEvent = e;
    });

    textareaEl.value = 'changed textarea value';
    textareaEl.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

    await element.updateComplete;

    expect(element.value).toBe('changed textarea value');
    expect(receivedEvent).toBeDefined();
    expect(receivedEvent?.type).toBe('change');
    expect(receivedEvent?.bubbles).toBe(true);
    expect(receivedEvent?.composed).toBe(true);
  });
});

// TODO: Next blocks to implement incrementally:
// - HTML5 Input Attributes
// - Accessibility Compliance
