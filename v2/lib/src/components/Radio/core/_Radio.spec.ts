import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Radio } from './Radio';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Radio - Comprehensive Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createRadio = async (props: Partial<Radio> = {}) => {
    const radio = new Radio();
    Object.assign(radio, props);
    container.appendChild(radio);
    await radio.updateComplete;
    return radio;
  };

  describe('Accessibility', () => {
    it('should be fully accessible with no violations', async () => {
      const radio = await createRadio({
        name: 'test',
        value: '1',
        labelText: 'Option 1',
      });
      const results = await axe(radio);
      expect(results).toHaveNoViolations();
    });

    it('should have proper ARIA attributes', async () => {
      const radio = await createRadio({
        name: 'test',
        value: '1',
        checked: true,
        labelText: 'Option 1',
      });
      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-checked')).toBe('true');
    });

    it('should update aria-checked when unchecked', async () => {
      const radio = await createRadio({
        name: 'test',
        value: '1',
        checked: false,
        labelText: 'Option 1',
      });
      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-checked')).toBe('false');
    });
  });

  describe('Properties & Attributes', () => {
    it('should have correct default properties', async () => {
      const radio = await createRadio();
      expect(radio.name).toBe('');
      expect(radio.value).toBe('');
      expect(radio.checked).toBe(false);
      expect(radio.disabled).toBe(false);
      expect(radio.size).toBe('medium');
      expect(radio.theme).toBe('default');
      expect(radio.labelText).toBe('');
      expect(radio.labelPosition).toBe('end');
    });

    it('should accept and reflect property values', async () => {
      const radio = await createRadio({
        name: 'options',
        value: 'option1',
        checked: true,
        disabled: true,
        size: 'large',
        theme: 'primary',
        labelText: 'Primary Option',
        labelPosition: 'start',
      });

      expect(radio.name).toBe('options');
      expect(radio.value).toBe('option1');
      expect(radio.checked).toBe(true);
      expect(radio.disabled).toBe(true);
      expect(radio.size).toBe('large');
      expect(radio.theme).toBe('primary');
      expect(radio.labelText).toBe('Primary Option');
      expect(radio.labelPosition).toBe('start');
    });

    it('should reflect disabled attribute', async () => {
      const radio = await createRadio({ disabled: true });
      expect(radio.hasAttribute('disabled')).toBe(true);
    });

    it('should reflect checked attribute', async () => {
      const radio = await createRadio({ checked: true });
      expect(radio.hasAttribute('checked')).toBe(true);
    });
  });

  describe('Size Variants', () => {
    it('should render small size correctly', async () => {
      const radio = await createRadio({ size: 'small', labelText: 'Small' });
      const indicator = radio.shadowRoot?.querySelector('.radio-indicator');
      expect(indicator?.classList.contains('radio-indicator--small')).toBe(true);
    });

    it('should render medium size correctly', async () => {
      const radio = await createRadio({ size: 'medium', labelText: 'Medium' });
      const indicator = radio.shadowRoot?.querySelector('.radio-indicator');
      expect(indicator?.classList.contains('radio-indicator--medium')).toBe(true);
    });

    it('should render large size correctly', async () => {
      const radio = await createRadio({ size: 'large', labelText: 'Large' });
      const indicator = radio.shadowRoot?.querySelector('.radio-indicator');
      expect(indicator?.classList.contains('radio-indicator--large')).toBe(true);
    });
  });

  describe('Theme Variants', () => {
    it('should render default theme correctly', async () => {
      const radio = await createRadio({ theme: 'default', labelText: 'Default' });
      const indicator = radio.shadowRoot?.querySelector('.radio-indicator');
      expect(indicator?.classList.contains('radio-indicator--default')).toBe(true);
    });

    it('should render primary theme correctly', async () => {
      const radio = await createRadio({ theme: 'primary', labelText: 'Primary' });
      const indicator = radio.shadowRoot?.querySelector('.radio-indicator');
      expect(indicator?.classList.contains('radio-indicator--primary')).toBe(true);
    });

    it('should render monochrome theme correctly', async () => {
      const radio = await createRadio({ theme: 'monochrome', labelText: 'Mono' });
      const indicator = radio.shadowRoot?.querySelector('.radio-indicator');
      expect(indicator?.classList.contains('radio-indicator--monochrome')).toBe(true);
    });
  });

  describe('Label Position', () => {
    it('should position label at end by default', async () => {
      const radio = await createRadio({ labelText: 'Label' });
      const wrapper = radio.shadowRoot?.querySelector('.radio-wrapper');
      expect(wrapper?.classList.contains('radio-wrapper--label-start')).toBe(false);
    });

    it('should position label at start when specified', async () => {
      const radio = await createRadio({ labelText: 'Label', labelPosition: 'start' });
      const wrapper = radio.shadowRoot?.querySelector('.radio-wrapper');
      expect(wrapper?.classList.contains('radio-wrapper--label-start')).toBe(true);
    });
  });

  describe('Events', () => {
    it('should emit ag-change event when changed', async () => {
      const radio = await createRadio({
        name: 'test',
        value: 'option1',
        labelText: 'Option 1',
      });

      let eventFired = false;
      let eventDetail: any;

      radio.addEventListener('ag-change', ((e: CustomEvent) => {
        eventFired = true;
        eventDetail = e.detail;
      }) as EventListener);

      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.click();
      await radio.updateComplete;

      expect(eventFired).toBe(true);
      expect(eventDetail.checked).toBe(true);
      expect(eventDetail.value).toBe('option1');
      expect(eventDetail.name).toBe('test');
    });

    it('should not emit events when disabled', async () => {
      const radio = await createRadio({
        name: 'test',
        value: 'option1',
        disabled: true,
        labelText: 'Disabled',
      });

      let eventFired = false;
      radio.addEventListener('ag-change', () => {
        eventFired = true;
      });

      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.click();
      await radio.updateComplete;

      expect(eventFired).toBe(false);
    });

    it('should bubble events', async () => {
      const radio = await createRadio({
        name: 'test',
        value: 'option1',
        labelText: 'Option 1',
      });

      let eventBubbled = false;
      container.addEventListener('ag-change', () => {
        eventBubbled = true;
      });

      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.click();
      await radio.updateComplete;

      expect(eventBubbled).toBe(true);
    });
  });

  describe('Native Input', () => {
    it('should render native radio input', async () => {
      const radio = await createRadio();
      const input = radio.shadowRoot?.querySelector('input[type="radio"]');
      expect(input).toBeTruthy();
    });

    it('should sync checked state to native input', async () => {
      const radio = await createRadio({ checked: true, name: 'test', value: '1' });
      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.checked).toBe(true);
    });

    it('should sync disabled state to native input', async () => {
      const radio = await createRadio({ disabled: true });
      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.disabled).toBe(true);
    });

    it('should set name and value attributes', async () => {
      const radio = await createRadio({ name: 'group1', value: 'option1' });
      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.name).toBe('group1');
      expect(input.value).toBe('option1');
    });
  });

  describe('CSS Shadow Parts', () => {
    it('should expose ag-radio-wrapper part', async () => {
      const radio = await createRadio({ labelText: 'Test' });
      const part = radio.shadowRoot?.querySelector('[part="ag-radio-wrapper"]');
      expect(part).toBeTruthy();
    });

    it('should expose ag-radio-input part', async () => {
      const radio = await createRadio();
      const part = radio.shadowRoot?.querySelector('[part="ag-radio-input"]');
      expect(part).toBeTruthy();
    });

    it('should expose ag-radio-indicator part', async () => {
      const radio = await createRadio();
      const part = radio.shadowRoot?.querySelector('[part="ag-radio-indicator"]');
      expect(part).toBeTruthy();
    });

    it('should expose ag-radio-label part when label text provided', async () => {
      const radio = await createRadio({ labelText: 'Label' });
      const part = radio.shadowRoot?.querySelector('[part="ag-radio-label"]');
      expect(part).toBeTruthy();
    });
  });

  describe('CSS Selectors', () => {
    it('should use correct attribute selectors for disabled state', () => {
      const styleContent = Radio.styles.toString();
      expect(styleContent).toContain(':host([disabled])');
      expect(styleContent).not.toContain('[disabled="true"]');
    });
  });

  describe('Label Rendering', () => {
    it('should render label text when provided', async () => {
      const radio = await createRadio({ labelText: 'Test Label' });
      const label = radio.shadowRoot?.querySelector('.radio-label');
      expect(label?.textContent).toContain('Test Label');
    });

    it('should render label span with slot even when no label text provided', async () => {
      const radio = await createRadio();
      const label = radio.shadowRoot?.querySelector('.radio-label');
      // Label span is always rendered to support slotted content
      expect(label).toBeTruthy();
      // When no labelText prop and no slotted content, it should be empty
      expect(label?.textContent?.trim()).toBe('');
    });
  });

  describe('Disabled State', () => {
    it('should apply disabled styles', async () => {
      const radio = await createRadio({ disabled: true, labelText: 'Disabled' });
      expect(radio.hasAttribute('disabled')).toBe(true);
    });

    it('should prevent interaction when disabled', async () => {
      const radio = await createRadio({
        disabled: true,
        name: 'test',
        value: '1',
        labelText: 'Disabled',
      });

      let eventFired = false;
      radio.addEventListener('ag-change', () => {
        eventFired = true;
      });

      const input = radio.shadowRoot?.querySelector('input') as HTMLInputElement;
      const changeEvent = new Event('change', { bubbles: true });
      input.dispatchEvent(changeEvent);
      await radio.updateComplete;

      expect(eventFired).toBe(false);
    });
  });

  describe('Radio Groups', () => {
    it('should support grouping with same name', async () => {
      const radio1 = await createRadio({ name: 'group', value: '1', labelText: '1' });
      const radio2 = await createRadio({ name: 'group', value: '2', labelText: '2' });

      const input1 = radio1.shadowRoot?.querySelector('input') as HTMLInputElement;
      const input2 = radio2.shadowRoot?.querySelector('input') as HTMLInputElement;

      expect(input1.name).toBe('group');
      expect(input2.name).toBe('group');
    });
  });
});
