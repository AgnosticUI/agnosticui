import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Checkbox } from './Checkbox';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Checkbox - Comprehensive Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createCheckbox = async (props: Partial<Checkbox> = {}) => {
    const checkbox = new Checkbox();
    Object.assign(checkbox, props);
    container.appendChild(checkbox);
    await checkbox.updateComplete;
    return checkbox;
  };

  describe('Accessibility', () => {
    it('should be fully accessible with no violations', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: '1',
        labelText: 'Accept terms',
      });
      const results = await axe(checkbox);
      expect(results).toHaveNoViolations();
    });

    it('should have proper ARIA attributes when checked', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: '1',
        checked: true,
        labelText: 'Accept',
      });
      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      expect(input.getAttribute('aria-checked')).toBe('true');
    });

    it('should have proper ARIA attributes when unchecked', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: '1',
        checked: false,
        labelText: 'Accept',
      });
      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      expect(input.getAttribute('aria-checked')).toBe('false');
    });

    it('should have aria-checked="mixed" when indeterminate', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: '1',
        indeterminate: true,
        labelText: 'Select all',
      });
      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      expect(input.getAttribute('aria-checked')).toBe('mixed');
    });
  });

  describe('Properties & Attributes', () => {
    it('should have correct default properties', async () => {
      const checkbox = await createCheckbox();
      expect(checkbox.name).toBe('');
      expect(checkbox.value).toBe('');
      expect(checkbox.checked).toBe(false);
      expect(checkbox.indeterminate).toBe(false);
      expect(checkbox.disabled).toBe(false);
      expect(checkbox.size).toBe('medium');
      expect(checkbox.theme).toBe('default');
      expect(checkbox.labelText).toBe('');
      expect(checkbox.labelPosition).toBe('end');
    });

    it('should accept and reflect property values', async () => {
      const checkbox = await createCheckbox({
        name: 'options',
        value: 'option1',
        checked: true,
        indeterminate: false,
        disabled: true,
        size: 'large',
        theme: 'primary',
        labelText: 'Primary Option',
        labelPosition: 'start',
      });

      expect(checkbox.name).toBe('options');
      expect(checkbox.value).toBe('option1');
      expect(checkbox.checked).toBe(true);
      expect(checkbox.indeterminate).toBe(false);
      expect(checkbox.disabled).toBe(true);
      expect(checkbox.size).toBe('large');
      expect(checkbox.theme).toBe('primary');
      expect(checkbox.labelText).toBe('Primary Option');
      expect(checkbox.labelPosition).toBe('start');
    });

    it('should reflect disabled attribute', async () => {
      const checkbox = await createCheckbox({ disabled: true });
      expect(checkbox.hasAttribute('disabled')).toBe(true);
    });

    it('should reflect checked attribute', async () => {
      const checkbox = await createCheckbox({ checked: true });
      expect(checkbox.hasAttribute('checked')).toBe(true);
    });

    it('should reflect indeterminate attribute', async () => {
      const checkbox = await createCheckbox({ indeterminate: true });
      expect(checkbox.hasAttribute('indeterminate')).toBe(true);
    });
  });

  describe('Indeterminate State', () => {
    it('should render indeterminate state correctly', async () => {
      const checkbox = await createCheckbox({
        indeterminate: true,
        labelText: 'Select all',
      });
      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      expect(input.indeterminate).toBe(true);
    });

    it('should clear indeterminate state on user click', async () => {
      const checkbox = await createCheckbox({
        indeterminate: true,
        name: 'test',
        value: '1',
        labelText: 'Select all',
      });

      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      input.click();
      await checkbox.updateComplete;

      expect(checkbox.indeterminate).toBe(false);
    });

    it('should sync indeterminate to native input on update', async () => {
      const checkbox = await createCheckbox({ labelText: 'Test' });
      checkbox.indeterminate = true;
      await checkbox.updateComplete;

      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      expect(input.indeterminate).toBe(true);
    });
  });

  describe('Size Variants', () => {
    it('should render small size correctly', async () => {
      const checkbox = await createCheckbox({ size: 'small', labelText: 'Small' });
      const indicator = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(indicator?.classList.contains('checkbox-label--small')).toBe(true);
    });

    it('should render medium size correctly', async () => {
      const checkbox = await createCheckbox({ size: 'medium', labelText: 'Medium' });
      const indicator = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(indicator?.classList.contains('checkbox-label--medium')).toBe(
        true
      );
    });

    it('should render large size correctly', async () => {
      const checkbox = await createCheckbox({ size: 'large', labelText: 'Large' });
      const indicator = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(indicator?.classList.contains('checkbox-label--large')).toBe(true);
    });
  });

  describe('Theme Variants', () => {
    it('should render default theme correctly', async () => {
      const checkbox = await createCheckbox({
        theme: 'default',
        labelText: 'Default',
      });
      const indicator = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(indicator?.classList.contains('checkbox-label--default')).toBe(
        true
      );
    });

    it('should render primary theme correctly', async () => {
      const checkbox = await createCheckbox({
        theme: 'primary',
        labelText: 'Primary',
      });
      const indicator = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(indicator?.classList.contains('checkbox-label--primary')).toBe(
        true
      );
    });

    it('should render monochrome theme correctly', async () => {
      const checkbox = await createCheckbox({
        theme: 'monochrome',
        labelText: 'Mono',
      });
      const indicator = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(indicator?.classList.contains('checkbox-label--monochrome')).toBe(
        true
      );
    });
  });

  describe('Label Position', () => {
    it('should position label at end by default', async () => {
      const checkbox = await createCheckbox({ labelText: 'Label' });
      const wrapper = checkbox.shadowRoot?.querySelector('.checkbox-wrapper');
      expect(wrapper?.classList.contains('checkbox-wrapper--label-start')).toBe(
        false
      );
    });

    it('should position label at start when specified', async () => {
      const checkbox = await createCheckbox({
        labelText: 'Label',
        labelPosition: 'start',
      });
      const wrapper = checkbox.shadowRoot?.querySelector('.checkbox-wrapper');
      expect(wrapper?.classList.contains('checkbox-wrapper--label-start')).toBe(
        true
      );
    });
  });

  describe('Events', () => {
    it('should emit ag-change event when changed', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: 'option1',
        labelText: 'Option 1',
      });

      let eventFired = false;
      let eventDetail: any;

      checkbox.addEventListener('change', ((e: CustomEvent) => {
        eventFired = true;
        eventDetail = e.detail;
      }) as EventListener);

      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      input.click();
      await checkbox.updateComplete;

      expect(eventFired).toBe(true);
      expect(eventDetail.checked).toBe(true);
      expect(eventDetail.value).toBe('option1');
      expect(eventDetail.name).toBe('test');
      expect(eventDetail.indeterminate).toBe(false);
    });

    it('should include indeterminate in event detail', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: 'option1',
        indeterminate: true,
        labelText: 'Option 1',
      });

      let eventDetail: any;
      checkbox.addEventListener('change', ((e: CustomEvent) => {
        eventDetail = e.detail;
      }) as EventListener);

      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      input.click();
      await checkbox.updateComplete;

      // After clicking indeterminate checkbox, it should be false
      expect(eventDetail.indeterminate).toBe(false);
    });

    it('should not emit events when disabled', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: 'option1',
        disabled: true,
        labelText: 'Disabled',
      });

      let eventFired = false;
      checkbox.addEventListener('ag-change', () => {
        eventFired = true;
      });

      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      input.click();
      await checkbox.updateComplete;

      expect(eventFired).toBe(false);
    });

    it('should bubble events', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: 'option1',
        labelText: 'Option 1',
      });

      let eventBubbled = false;
      container.addEventListener('change', () => {
        eventBubbled = true;
      });

      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      input.click();
      await checkbox.updateComplete;

      expect(eventBubbled).toBe(true);
    });
  });

  describe('Native Input', () => {
    it('should render native checkbox input', async () => {
      const checkbox = await createCheckbox();
      const input = checkbox.shadowRoot?.querySelector('input[type="checkbox"]');
      expect(input).toBeTruthy();
    });

    it('should sync checked state to native input', async () => {
      const checkbox = await createCheckbox({
        checked: true,
        name: 'test',
        value: '1',
      });
      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      expect(input.checked).toBe(true);
    });

    it('should sync disabled state to native input', async () => {
      const checkbox = await createCheckbox({ disabled: true });
      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      expect(input.disabled).toBe(true);
    });

    it('should set name and value attributes', async () => {
      const checkbox = await createCheckbox({ name: 'group1', value: 'option1' });
      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      expect(input.name).toBe('group1');
      expect(input.value).toBe('option1');
    });
  });

  describe('CSS Shadow Parts', () => {
    it('should expose ag-checkbox-wrapper part', async () => {
      const checkbox = await createCheckbox({ labelText: 'Test' });
      const part = checkbox.shadowRoot?.querySelector(
        '[part="ag-checkbox-wrapper"]'
      );
      expect(part).toBeTruthy();
    });

    it('should expose ag-checkbox-input part', async () => {
      const checkbox = await createCheckbox();
      const part = checkbox.shadowRoot?.querySelector('[part="ag-checkbox-input"]');
      expect(part).toBeTruthy();
    });

    it('should expose ag-checkbox-indicator part', async () => {
      const checkbox = await createCheckbox();
      const part = checkbox.shadowRoot?.querySelector(
        '[part="ag-checkbox-indicator"]'
      );
      expect(part).toBeTruthy();
    });

    it('should expose ag-checkbox-label part when label text provided', async () => {
      const checkbox = await createCheckbox({ labelText: 'Label' });
      const part = checkbox.shadowRoot?.querySelector('[part="ag-checkbox-label"]');
      expect(part).toBeTruthy();
    });
  });

  describe('CSS Selectors', () => {
    it('should use correct attribute selectors for disabled state', () => {
      const styleContent = Checkbox.styles.toString();
      expect(styleContent).toContain(':host([disabled])');
      expect(styleContent).not.toContain('[disabled="true"]');
    });
  });

  describe('Label Rendering', () => {
    it('should render label text when provided', async () => {
      const checkbox = await createCheckbox({ labelText: 'Test Label' });
      const label = checkbox.shadowRoot?.querySelector('.checkbox-label-copy');
      expect(label?.textContent).toContain('Test Label');
    });

    it('should render label span with slot even when no label text provided', async () => {
      const checkbox = await createCheckbox();
      const label = checkbox.shadowRoot?.querySelector('.checkbox-label-copy');
      // Label span is always rendered to support slotted content
      expect(label).toBeTruthy();
      // When no labelText prop and no slotted content, it should be empty
      expect(label?.textContent?.trim()).toBe('');
    });
  });

  describe('Disabled State', () => {
    it('should apply disabled styles', async () => {
      const checkbox = await createCheckbox({ disabled: true, labelText: 'Disabled' });
      expect(checkbox.hasAttribute('disabled')).toBe(true);
    });

    it('should prevent interaction when disabled', async () => {
      const checkbox = await createCheckbox({
        disabled: true,
        name: 'test',
        value: '1',
        labelText: 'Disabled',
      });

      let eventFired = false;
      checkbox.addEventListener('ag-change', () => {
        eventFired = true;
      });

      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      const changeEvent = new Event('change', { bubbles: true });
      input.dispatchEvent(changeEvent);
      await checkbox.updateComplete;

      expect(eventFired).toBe(false);
    });
  });

  describe('Toggle Behavior', () => {
    it('should toggle checked state on click', async () => {
      const checkbox = await createCheckbox({
        name: 'test',
        value: '1',
        labelText: 'Toggle',
      });

      const input = checkbox.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;

      expect(checkbox.checked).toBe(false);

      input.click();
      await checkbox.updateComplete;
      expect(checkbox.checked).toBe(true);

      input.click();
      await checkbox.updateComplete;
      expect(checkbox.checked).toBe(false);
    });
  });

  describe('Checkmark Animation', () => {
    it('should have checkmark styles defined for ::after pseudo-element', async () => {
      const checkbox = await createCheckbox({ labelText: 'Test' });
      const indicator = checkbox.shadowRoot?.querySelector('.checkbox-label');
      expect(indicator).toBeTruthy();

      // Verify the CSS includes ::after pseudo-element for checkmark
      const styleContent = Checkbox.styles.toString();
      expect(styleContent).toContain('.checkbox-label::after');
      expect(styleContent).toContain('content');
      expect(styleContent).toContain('transform');
    });
  });

  describe('Event Propagation (Standardized Pattern)', () => {
    it('should dispatch change event via addEventListener pattern', async () => {
      const checkbox = await createCheckbox({
        labelText: 'Event test',
        name: 'test',
        value: 'testValue',
      });

      const eventSpy = vi.fn();
      checkbox.addEventListener('change', eventSpy);

      const input = checkbox.shadowRoot?.querySelector('input');
      input?.click();
      await checkbox.updateComplete;

      expect(eventSpy).toHaveBeenCalledOnce();
      const event = eventSpy.mock.calls[0][0] as CustomEvent;
      expect(event.detail).toEqual({
        checked: true,
        value: 'testValue',
        name: 'test',
        indeterminate: false,
      });
      expect(event.bubbles).toBe(true);
      expect(event.composed).toBe(true);
    });

    it('should invoke onChange callback prop pattern', async () => {
      const onChangeSpy = vi.fn();
      const checkbox = await createCheckbox({
        labelText: 'Callback test',
        name: 'test',
        value: 'testValue',
      });
      checkbox.onChange = onChangeSpy;
      await checkbox.updateComplete;

      const input = checkbox.shadowRoot?.querySelector('input');
      input?.click();
      await checkbox.updateComplete;

      expect(onChangeSpy).toHaveBeenCalledOnce();
      const event = onChangeSpy.mock.calls[0][0];
      expect(event.detail).toEqual({
        checked: true,
        value: 'testValue',
        name: 'test',
        indeterminate: false,
      });
    });

    it('should invoke onClick callback for native click event', async () => {
      const onClickSpy = vi.fn();
      const checkbox = await createCheckbox({ labelText: 'Click test' });
      checkbox.onClick = onClickSpy;
      await checkbox.updateComplete;

      const input = checkbox.shadowRoot?.querySelector('input');
      input?.click();
      await checkbox.updateComplete;

      expect(onClickSpy).toHaveBeenCalledOnce();
      const event = onClickSpy.mock.calls[0][0];
      expect(event).toBeInstanceOf(MouseEvent);
    });

    it('should dispatch both DOM event and invoke callback (dual-dispatch)', async () => {
      const domEventSpy = vi.fn();
      const callbackSpy = vi.fn();

      const checkbox = await createCheckbox({
        labelText: 'Dual dispatch test',
        name: 'test',
        value: 'testValue',
      });
      checkbox.addEventListener('change', domEventSpy);
      checkbox.onChange = callbackSpy;
      await checkbox.updateComplete;

      const input = checkbox.shadowRoot?.querySelector('input');
      input?.click();
      await checkbox.updateComplete;

      // Both should be called
      expect(domEventSpy).toHaveBeenCalledOnce();
      expect(callbackSpy).toHaveBeenCalledOnce();

      // Both should receive the same event data
      const domEvent = domEventSpy.mock.calls[0][0] as CustomEvent;
      const callbackEvent = callbackSpy.mock.calls[0][0];
      expect(domEvent.detail).toEqual(callbackEvent.detail);
    });

    it('should clear indeterminate state on change', async () => {
      const eventSpy = vi.fn();
      const checkbox = await createCheckbox({
        labelText: 'Indeterminate test',
        indeterminate: true,
      });
      checkbox.addEventListener('change', eventSpy);
      await checkbox.updateComplete;

      expect(checkbox.indeterminate).toBe(true);

      const input = checkbox.shadowRoot?.querySelector('input');
      input?.click();
      await checkbox.updateComplete;

      expect(checkbox.indeterminate).toBe(false);
      expect(eventSpy).toHaveBeenCalledOnce();
      const event = eventSpy.mock.calls[0][0] as CustomEvent;
      expect(event.detail.indeterminate).toBe(false);
    });

    it('should not invoke callbacks when disabled', async () => {
      const onClickSpy = vi.fn();
      const onChangeSpy = vi.fn();

      const checkbox = await createCheckbox({
        labelText: 'Disabled test',
        disabled: true,
      });
      checkbox.onClick = onClickSpy;
      checkbox.onChange = onChangeSpy;
      await checkbox.updateComplete;

      const input = checkbox.shadowRoot?.querySelector('input');
      input?.click();
      await checkbox.updateComplete;

      // Disabled checkboxes don't fire events
      expect(onClickSpy).not.toHaveBeenCalled();
      expect(onChangeSpy).not.toHaveBeenCalled();
    });

    it('should include form integration data in change event', async () => {
      const eventSpy = vi.fn();
      const checkbox = await createCheckbox({
        labelText: 'Form data test',
        name: 'newsletter',
        value: 'subscribed',
      });
      checkbox.addEventListener('change', eventSpy);
      await checkbox.updateComplete;

      const input = checkbox.shadowRoot?.querySelector('input');
      input?.click();
      await checkbox.updateComplete;

      expect(eventSpy).toHaveBeenCalledOnce();
      const event = eventSpy.mock.calls[0][0] as CustomEvent;
      expect(event.detail).toEqual({
        checked: true,
        value: 'subscribed',
        name: 'newsletter',
        indeterminate: false,
      });
    });
  });
});
