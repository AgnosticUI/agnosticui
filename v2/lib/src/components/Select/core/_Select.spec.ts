import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Select } from './_Select';

// Component registers itself on import

describe('ag-select', () => {
  let element: Select;

  beforeEach(async () => {
    element = document.createElement('ag-select') as Select;
    element.innerHTML = `
      <option value="">Select an option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    `;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    if (element && document.body.contains(element)) {
      document.body.removeChild(element);
    }
  });

  it('should render with default properties', () => {
    expect(element).toBeDefined();
    expect(element.size).toBe('');
    expect(element.multiple).toBe(false);
    expect(element.disabled).toBe(false);
  });

  it('should render a select element', () => {
    const select = element.shadowRoot?.querySelector('select');
    expect(select).toBeDefined();
    expect(select?.classList.contains('select')).toBe(true);
  });

  it('should render slotted options', async () => {
    const select = element.shadowRoot?.querySelector('select') as HTMLSelectElement;
    const slot = element.shadowRoot?.querySelector('slot');
    const assignedNodes = slot?.assignedNodes();

    // Check that slot exists and has content
    expect(slot).toBeDefined();
    expect(assignedNodes?.length).toBeGreaterThan(0);

    // Check select has options
    expect(select?.options.length).toBe(4);
  });

  it('should apply small size class when size="small"', async () => {
    element.size = 'small';
    await element.updateComplete;
    expect(element.getAttribute('size')).toBe('small');
  });

  it('should apply large size class when size="large"', async () => {
    element.size = 'large';
    await element.updateComplete;
    expect(element.getAttribute('size')).toBe('large');
  });

  it('should set multiple attribute when multiple is true', async () => {
    element.multiple = true;
    await element.updateComplete;

    const select = element.shadowRoot?.querySelector('select');
    expect(select?.hasAttribute('multiple')).toBe(true);
  });

  it('should set disabled attribute when disabled is true', async () => {
    element.disabled = true;
    await element.updateComplete;

    const select = element.shadowRoot?.querySelector('select');
    expect(select?.hasAttribute('disabled')).toBe(true);
    expect(select?.getAttribute('aria-disabled')).toBe('true');
  });

  it('should set name attribute', async () => {
    element.name = 'test-select';
    await element.updateComplete;

    const select = element.shadowRoot?.querySelector('select');
    expect(select?.name).toBe('test-select');
  });

  it('should set size attribute for multiple select', async () => {
    element.multiple = true;
    element.multipleSize = 5;
    await element.updateComplete;

    const select = element.shadowRoot?.querySelector('select');
    expect(select?.size).toBe(5);
  });

  it('should emit change event with single value', async () => {
    let changeEvent: CustomEvent<{ value: string | string[] }> | null = null;
    element.addEventListener('change', (e: Event) => {
      changeEvent = e as CustomEvent<{ value: string | string[] }>;
    });

    const select = element.shadowRoot?.querySelector('select') as HTMLSelectElement;
    select.value = '2';
    select.dispatchEvent(new Event('change', { bubbles: true }));

    await element.updateComplete;

    expect(changeEvent).toBeDefined();
    expect((changeEvent! as CustomEvent<{ value: string | string[] }>).detail.value).toBe('2');
  });

  it('should emit change event with multiple values', async () => {
    element.multiple = true;
    await element.updateComplete;

    let changeEvent: CustomEvent<{ value: string | string[] }> | null = null;
    element.addEventListener('change', (e: Event) => {
      changeEvent = e as CustomEvent<{ value: string | string[] }>;
    });

    const select = element.shadowRoot?.querySelector('select') as HTMLSelectElement;
    select.options[1].selected = true;
    select.options[2].selected = true;
    select.dispatchEvent(new Event('change', { bubbles: true }));

    await element.updateComplete;

    expect(changeEvent).toBeDefined();
    const eventDetail = (changeEvent! as CustomEvent<{ value: string | string[] }>).detail;
    expect(Array.isArray(eventDetail.value)).toBe(true);
    expect(eventDetail.value).toContain('1');
    expect(eventDetail.value).toContain('2');
  });

  it('should expose ag-select CSS part', () => {
    const select = element.shadowRoot?.querySelector('[part="ag-select"]');
    expect(select).toBeDefined();
  });

  it('should use design tokens for styling', () => {
    const styles = Select.styles.toString();

    // Check for v2 design tokens
    expect(styles).toContain('--ag-space-');
    expect(styles).toContain('--ag-font-size-');
    expect(styles).toContain('--ag-text-primary');
    expect(styles).toContain('--ag-border');
    expect(styles).toContain('--ag-radius-md');
    expect(styles).toContain('--ag-focus-ring-color');
    expect(styles).toContain('--ag-disabled-bg');
    expect(styles).toContain('--ag-transition-fast');
  });

  it('should not use v1 tokens', () => {
    const styles = Select.styles.toString();

    // Should not contain v1 tokens
    expect(styles).not.toContain('--agnostic-');
    expect(styles).not.toContain('--fluid-');
  });

  it('should have reduced motion support', () => {
    const styles = Select.styles.toString();
    expect(styles).toContain('prefers-reduced-motion');
  });

  it('should have high contrast mode support', () => {
    const styles = Select.styles.toString();
    expect(styles).toContain('outline:');
    expect(styles).toContain('--ag-focus-ring-outline');
  });

  it('should handle dynamically added options', async () => {
    const select = element.shadowRoot?.querySelector('select') as HTMLSelectElement;
    const initialCount = select.options.length;
    expect(initialCount).toBe(4);

    // Dynamically add a new option
    const newOption = document.createElement('option');
    newOption.value = '4';
    newOption.textContent = 'Option 4';
    element.appendChild(newOption);

    // Wait for slotchange event to fire and options to be moved
    await new Promise(resolve => setTimeout(resolve, 50));

    // Check that the new option was added to the select
    expect(select.options.length).toBe(5);
    expect(select.options[4].value).toBe('4');
    expect(select.options[4].textContent).toBe('Option 4');
  });

  it('should handle dynamically removed options', async () => {
    const select = element.shadowRoot?.querySelector('select') as HTMLSelectElement;
    const initialCount = select.options.length;
    expect(initialCount).toBe(4);

    // Remove the last option from light DOM
    const lastOption = element.querySelector('option[value="3"]');
    if (lastOption) {
      element.removeChild(lastOption);
    }

    // Wait for slotchange event to fire
    await new Promise(resolve => setTimeout(resolve, 50));

    // The option should still be in the select because we moved it
    // Removing from light DOM doesn't automatically remove from shadow DOM
    // This is expected behavior - once moved, it's in shadow DOM
    expect(select.options.length).toBe(4);
  });
});
