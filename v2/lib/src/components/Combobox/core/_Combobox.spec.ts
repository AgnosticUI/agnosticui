/**
 * AgnosticUI v2 Combobox Component - Test Suite (Phase 1 MVP)
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * Version: 2.0.0-dev
 */

import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest';
import { AgCombobox, type ComboboxOption } from './Combobox';

// Component registers itself on import

describe('AgCombobox - Phase 1 MVP', () => {
  let element: AgCombobox;
  const mockOptions: ComboboxOption[] = [
    { value: 'ca', label: 'California' },
    { value: 'co', label: 'Colorado' },
    { value: 'ct', label: 'Connecticut' },
    { value: 'fl', label: 'Florida' },
    { value: 'ny', label: 'New York' },
  ];

  describe('Basic Rendering', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('renders the component', () => {
      expect(element).toBeTruthy();
    });

    it('renders label when provided', () => {
      const label = element.shadowRoot?.querySelector('label');
      expect(label).toBeTruthy();
      expect(label?.textContent?.trim()).toBe('Select State');
    });

    it('renders input with combobox role', () => {
      const input = element.shadowRoot?.querySelector('input[role="combobox"]');
      expect(input).toBeTruthy();
    });

    it('renders listbox when open', async () => {
      element.open();
      await element.updateComplete;

      const listbox = element.shadowRoot?.querySelector('[role="listbox"]');
      expect(listbox).toBeTruthy();
    });

    it('hides listbox by default', () => {
      const listbox = element.shadowRoot?.querySelector('[role="listbox"]');
      expect(listbox?.getAttribute('hidden')).toBe('');
    });

    it('generates unique IDs for each instance', async () => {
      const element2 = document.createElement('ag-combobox') as AgCombobox;
      element2.options = mockOptions;
      element2.label = 'Select Another State';
      document.body.appendChild(element2);
      await element2.updateComplete;

      const input1 = element.shadowRoot?.querySelector('input');
      const input2 = element2.shadowRoot?.querySelector('input');

      expect(input1?.getAttribute('id')).not.toBe(input2?.getAttribute('id'));

      document.body.removeChild(element2);
    });
  });

  describe('ARIA Attributes', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('sets aria-autocomplete="list" on input', () => {
      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('aria-autocomplete')).toBe('list');
    });

    it('sets aria-haspopup="listbox" on input', () => {
      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('aria-haspopup')).toBe('listbox');
    });

    it('sets aria-expanded="false" when closed', () => {
      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('aria-expanded')).toBe('false');
    });

    it('sets aria-expanded="true" when open', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input');
      expect(input?.getAttribute('aria-expanded')).toBe('true');
    });

    it('sets aria-controls to reference listbox', () => {
      const input = element.shadowRoot?.querySelector('input');
      const listbox = element.shadowRoot?.querySelector('[role="listbox"]');

      const controlsId = input?.getAttribute('aria-controls');
      expect(controlsId).toBeTruthy();
      expect(listbox?.getAttribute('id')).toBe(controlsId);
    });

    it('updates aria-activedescendant when navigating options', async () => {
      element.open();
      await element.updateComplete;

      // Simulate ArrowDown to activate first option
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await element.updateComplete;

      const activeDescendant = input.getAttribute('aria-activedescendant');
      expect(activeDescendant).toBeTruthy();
      expect(activeDescendant).toContain('option-0');
    });

    it('sets aria-label on listbox', async () => {
      element.open();
      await element.updateComplete;

      const listbox = element.shadowRoot?.querySelector('[role="listbox"]');
      expect(listbox?.getAttribute('aria-label')).toBe('Select State suggestions');
    });
  });

  describe('Keyboard Navigation', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('opens listbox on ArrowDown when closed', async () => {
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('false');

      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await element.updateComplete;

      expect(input.getAttribute('aria-expanded')).toBe('true');
    });

    it('moves focus to first option on ArrowDown', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await element.updateComplete;

      const activeDescendant = input.getAttribute('aria-activedescendant');
      expect(activeDescendant).toContain('option-0');
    });

    it('moves focus down through options with ArrowDown', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;

      // First ArrowDown
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await element.updateComplete;
      expect(input.getAttribute('aria-activedescendant')).toContain('option-0');

      // Second ArrowDown
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await element.updateComplete;
      expect(input.getAttribute('aria-activedescendant')).toContain('option-1');
    });

    it('wraps to first option when ArrowDown at end', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;

      // Navigate past last option to wrap (need length + 1 presses to wrap)
      for (let i = 0; i <= mockOptions.length; i++) {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
        await element.updateComplete;
      }

      // Should wrap back to first
      const activeDescendant = input.getAttribute('aria-activedescendant');
      expect(activeDescendant).toContain('option-0');
    });

    it('opens listbox on ArrowUp when closed', async () => {
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('false');

      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
      await element.updateComplete;

      expect(input.getAttribute('aria-expanded')).toBe('true');
    });

    it('moves focus to last option on first ArrowUp', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
      await element.updateComplete;

      const activeDescendant = input.getAttribute('aria-activedescendant');
      expect(activeDescendant).toContain(`option-${mockOptions.length - 1}`);
    });

    it('selects option on Enter key', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;

      // Navigate to first option
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await element.updateComplete;

      // Select with Enter
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      await element.updateComplete;

      expect(element.value).toBe('ca');
      expect(input.value).toBe('California');
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    it('closes listbox on Escape key', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('true');

      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await element.updateComplete;

      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    it('closes listbox on Tab key', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('true');

      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
      await element.updateComplete;

      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    it('moves cursor to start on Home key', async () => {
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = 'test';
      input.setSelectionRange(4, 4); // Cursor at end

      const preventDefaultSpy = vi.fn();
      const event = new KeyboardEvent('keydown', { key: 'Home', bubbles: true });
      Object.defineProperty(event, 'preventDefault', { value: preventDefaultSpy });

      input.dispatchEvent(event);
      await element.updateComplete;

      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    it('moves cursor to end on End key', async () => {
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = 'test';
      input.setSelectionRange(0, 0); // Cursor at start

      const preventDefaultSpy = vi.fn();
      const event = new KeyboardEvent('keydown', { key: 'End', bubbles: true });
      Object.defineProperty(event, 'preventDefault', { value: preventDefaultSpy });

      input.dispatchEvent(event);
      await element.updateComplete;

      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  describe('Filtering', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('filters options using startsWith by default', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = 'Co';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await element.updateComplete;

      const options = element.shadowRoot?.querySelectorAll('[role="option"]');
      expect(options?.length).toBe(2); // Colorado, Connecticut
    });

    it('uses contains filter when filterMode="contains"', async () => {
      element.filterMode = 'contains';
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = 'or';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await element.updateComplete;

      const options = element.shadowRoot?.querySelectorAll('[role="option"]');
      expect(options?.length).toBe(4); // California, Colorado, Florida, New York
    });

    it('shows all options when search is empty', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = '';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await element.updateComplete;

      const options = element.shadowRoot?.querySelectorAll('[role="option"]');
      expect(options?.length).toBe(mockOptions.length);
    });

    it('shows no results message when no matches found', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = 'xyz';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await element.updateComplete;

      const noResults = element.shadowRoot?.querySelector('.ag-combobox__no-results');
      expect(noResults).toBeTruthy();
      expect(noResults?.textContent?.trim()).toContain('No results found');
    });

    it('is case-insensitive', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = 'cali';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await element.updateComplete;

      const options = element.shadowRoot?.querySelectorAll('[role="option"]');
      expect(options?.length).toBe(1);
      expect(options?.[0].textContent?.trim()).toBe('California');
    });

    it('opens listbox when user types', async () => {
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('false');

      input.value = 'C';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await element.updateComplete;

      expect(input.getAttribute('aria-expanded')).toBe('true');
    });

    it('disables filtering when filterMode="none"', async () => {
      element.filterMode = 'none';
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.value = 'Co';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await element.updateComplete;

      const options = element.shadowRoot?.querySelectorAll('[role="option"]');
      expect(options?.length).toBe(mockOptions.length); // All options still shown
    });
  });

  describe('Selection', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('selects option on click', async () => {
      element.open();
      await element.updateComplete;

      const firstOption = element.shadowRoot?.querySelector('[role="option"]') as HTMLElement;
      firstOption.click();
      await element.updateComplete;

      expect(element.value).toBe('ca');
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('California');
    });

    it('closes listbox after selection', async () => {
      element.open();
      await element.updateComplete;

      const firstOption = element.shadowRoot?.querySelector('[role="option"]') as HTMLElement;
      firstOption.click();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    it('dispatches change event on selection', async () => {
      const changeSpy = vi.fn();
      element.addEventListener('change', changeSpy);

      element.open();
      await element.updateComplete;

      const firstOption = element.shadowRoot?.querySelector('[role="option"]') as HTMLElement;
      firstOption.click();
      await element.updateComplete;

      expect(changeSpy).toHaveBeenCalledOnce();
      expect(changeSpy.mock.calls[0][0].detail.value).toBe('ca');
      expect(changeSpy.mock.calls[0][0].detail.option.label).toBe('California');
    });

    it('dispatches select event on selection', async () => {
      const selectSpy = vi.fn();
      element.addEventListener('select', selectSpy);

      element.open();
      await element.updateComplete;

      const firstOption = element.shadowRoot?.querySelector('[role="option"]') as HTMLElement;
      firstOption.click();
      await element.updateComplete;

      expect(selectSpy).toHaveBeenCalledOnce();
      expect(selectSpy.mock.calls[0][0].detail.value).toBe('ca');
      expect(selectSpy.mock.calls[0][0].detail.option.label).toBe('California');
    });

    it('supports controlled value prop', async () => {
      element.value = 'co';
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('Colorado');
    });

    it('supports clearable with clear button', async () => {
      element.clearable = true;
      element.value = 'ca';
      await element.updateComplete;

      const clearButton = element.shadowRoot?.querySelector('ag-close-button') as HTMLElement;
      expect(clearButton).toBeTruthy();

      // The `ag-close-button` is a custom element. We need to click its internal button.
      const internalButton = clearButton.shadowRoot?.querySelector('button');
      expect(internalButton).toBeTruthy();
      internalButton?.click();
      await element.updateComplete;

      expect(element.value).toBe('');
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });

    it('hides clear button when no value', async () => {
      element.clearable = true;
      await element.updateComplete;

      const clearButton = element.shadowRoot?.querySelector('ag-close-button');
      expect(clearButton).toBeNull();
    });

    it('skips disabled options', async () => {
      element.options = [
        { value: 'ca', label: 'California' },
        { value: 'co', label: 'Colorado', disabled: true },
        { value: 'ct', label: 'Connecticut' },
      ];
      await element.updateComplete;

      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;

      // First ArrowDown - should select California
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await element.updateComplete;
      expect(input.getAttribute('aria-activedescendant')).toContain('option-0');

      // Second ArrowDown - should skip Colorado and go to Connecticut
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await element.updateComplete;
      expect(input.getAttribute('aria-activedescendant')).toContain('option-2');
    });
  });

  describe('Public Methods', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('open() method opens the listbox', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('true');
    });

    it('close() method closes the listbox', async () => {
      element.open();
      await element.updateComplete;

      element.close();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    it('toggle() method toggles open state', async () => {
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;

      element.toggle();
      await element.updateComplete;
      expect(input.getAttribute('aria-expanded')).toBe('true');

      element.toggle();
      await element.updateComplete;
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    it('focus() method focuses the input', async () => {
      element.focus();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(element.shadowRoot?.activeElement).toBe(input);
    });

    it('selectOption() method selects by value', async () => {
      element.selectOption('co');
      await element.updateComplete;

      expect(element.value).toBe('co');
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('Colorado');
    });

    it('clearSelection() method clears value', async () => {
      element.value = 'ca';
      await element.updateComplete;

      element.clearSelection();
      await element.updateComplete;

      expect(element.value).toBe('');
      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });
  });

  describe('Size Variants', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('applies small size class', async () => {
      element.size = 'small';
      await element.updateComplete;

      expect(element.getAttribute('size')).toBe('small');
    });

    it('applies large size class', async () => {
      element.size = 'large';
      await element.updateComplete;

      expect(element.getAttribute('size')).toBe('large');
    });

    it('uses default size when not specified', () => {
      expect(element.size).toBe('default');
    });
  });

  describe('Disabled State', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('disables input when disabled=true', async () => {
      element.disabled = true;
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.disabled).toBe(true);
      expect(input.getAttribute('aria-disabled')).toBe('true');
    });

    it('prevents opening when disabled', async () => {
      element.disabled = true;
      await element.updateComplete;

      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    it('disables toggle button when disabled', async () => {
      element.disabled = true;
      await element.updateComplete;

      const toggleButton = element.shadowRoot?.querySelector('.ag-combobox__toggle') as HTMLButtonElement;
      expect(toggleButton.disabled).toBe(true);
    });
  });

  describe('Loading State', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('shows loading message when loading=true', async () => {
      element.loading = true;
      element.open();
      await element.updateComplete;

      const loadingMessage = element.shadowRoot?.querySelector('.ag-combobox__loading');
      expect(loadingMessage).toBeTruthy();
      expect(loadingMessage?.textContent?.trim()).toContain('Loading');
    });

    it('hides options when loading', async () => {
      element.loading = true;
      element.open();
      await element.updateComplete;

      const options = element.shadowRoot?.querySelectorAll('[role="option"]');
      expect(options?.length).toBe(0);
    });
  });

  describe('CSS Parts API', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('exposes ag-combobox-wrapper part', () => {
      const wrapper = element.shadowRoot?.querySelector('[part~="ag-combobox-wrapper"]');
      expect(wrapper).toBeTruthy();
    });

    it('exposes ag-combobox-input-wrapper part', () => {
      const inputWrapper = element.shadowRoot?.querySelector('[part~="ag-combobox-input-wrapper"]');
      expect(inputWrapper).toBeTruthy();
    });

    it('exposes ag-combobox-input part', () => {
      const input = element.shadowRoot?.querySelector('[part~="ag-combobox-input"]');
      expect(input).toBeTruthy();
    });

    it('exposes ag-combobox-listbox part', () => {
      const listbox = element.shadowRoot?.querySelector('[part~="ag-combobox-listbox"]');
      expect(listbox).toBeTruthy();
    });

    it('exposes ag-combobox-option part on options', async () => {
      element.open();
      await element.updateComplete;

      const option = element.shadowRoot?.querySelector('[part~="ag-combobox-option"]');
      expect(option).toBeTruthy();
    });
  });

  describe('Design Tokens', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('uses v2 design tokens', () => {
      const styles = AgCombobox.styles.toString();

      expect(styles).toContain('--ag-space-');
      expect(styles).toContain('--ag-font-size-');
      expect(styles).toContain('--ag-text-primary');
      expect(styles).toContain('--ag-border');
      expect(styles).toContain('--ag-radius-');
      expect(styles).toContain('--ag-focus-ring-color');
    });

    it('does not use v1 tokens', () => {
      const styles = AgCombobox.styles.toString();

      expect(styles).not.toContain('--agnostic-');
      expect(styles).not.toContain('--fluid-');
    });

    it('supports reduced motion', () => {
      const styles = AgCombobox.styles.toString();
      expect(styles).toContain('prefers-reduced-motion');
    });

    it('supports high contrast mode', () => {
      const styles = AgCombobox.styles.toString();
      expect(styles).toContain('outline:');
    });
  });

  describe('Help and Error Text', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('renders help text when provided', async () => {
      element.helpText = 'Choose your state';
      await element.updateComplete;

      const helpText = element.shadowRoot?.querySelector('.ag-combobox__help-text');
      expect(helpText).toBeTruthy();
      expect(helpText?.textContent?.trim()).toBe('Choose your state');
    });

    it('renders error text when provided', async () => {
      element.errorText = 'State is required';
      await element.updateComplete;

      const errorText = element.shadowRoot?.querySelector('.ag-combobox__error-text');
      expect(errorText).toBeTruthy();
      expect(errorText?.textContent?.trim()).toBe('State is required');
    });

    it('sets aria-invalid when errorText is present', async () => {
      element.errorText = 'State is required';
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-invalid')).toBe('true');
    });

    it('associates error text with input via aria-describedby', async () => {
      element.errorText = 'State is required';
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      const errorText = element.shadowRoot?.querySelector('.ag-combobox__error-text');

      const describedBy = input.getAttribute('aria-describedby');
      expect(describedBy).toContain(errorText?.getAttribute('id'));
    });
  });

  describe('Click Outside', () => {
    beforeEach(async () => {
      element = document.createElement('ag-combobox') as AgCombobox;
      element.options = mockOptions;
      element.label = 'Select State';
      document.body.appendChild(element);
      await element.updateComplete;
    });

    afterEach(() => {
      if (element && document.body.contains(element)) {
        document.body.removeChild(element);
      }
    });

    it('closes listbox when clicking outside', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      expect(input.getAttribute('aria-expanded')).toBe('true');

      // Click outside
      document.body.click();
      await element.updateComplete;

      expect(input.getAttribute('aria-expanded')).toBe('false');
    });

    it('does not close when clicking inside component', async () => {
      element.open();
      await element.updateComplete;

      const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
      input.click();
      await element.updateComplete;

      expect(input.getAttribute('aria-expanded')).toBe('true');
    });
  });
});
