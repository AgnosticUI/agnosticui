import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgSelectionButtonGroup } from './SelectionButtonGroup';
import { AgSelectionButton } from '../../SelectionButton/core/SelectionButton';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SelectionButtonGroup - Comprehensive Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createGroup = async (
    props: Partial<AgSelectionButtonGroup> = {},
    buttonValues: string[] = ['a', 'b', 'c']
  ) => {
    const group = new AgSelectionButtonGroup();
    Object.assign(group, { name: 'test-group', legend: 'Test Group', ...props });
    container.appendChild(group);

    // Add child buttons
    for (const value of buttonValues) {
      const button = new AgSelectionButton();
      button.value = value;
      button.label = `Option ${value.toUpperCase()}`;
      button.textContent = `Option ${value.toUpperCase()}`;
      group.appendChild(button);
    }

    await group.updateComplete;
    return group;
  };

  describe('Accessibility', () => {
    it('should have no accessibility violations with radio type', async () => {
      const group = await createGroup({ type: 'radio' });
      const results = await axe(group);
      expect(results).toHaveNoViolations();
    });

    it('should have no accessibility violations with checkbox type', async () => {
      const group = await createGroup({ type: 'checkbox' });
      const results = await axe(group);
      expect(results).toHaveNoViolations();
    });

    it('should render fieldset with legend', async () => {
      const group = await createGroup({ legend: 'Select an option' });
      const fieldset = group.shadowRoot?.querySelector('fieldset');
      const legend = group.shadowRoot?.querySelector('legend');
      expect(fieldset).toBeTruthy();
      expect(legend?.textContent).toBe('Select an option');
    });

    it('should have role="radiogroup" for radio type', async () => {
      const group = await createGroup({ type: 'radio' });
      const fieldset = group.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.getAttribute('role')).toBe('radiogroup');
    });

    it('should have role="group" for checkbox type', async () => {
      const group = await createGroup({ type: 'checkbox' });
      const fieldset = group.shadowRoot?.querySelector('fieldset');
      expect(fieldset?.getAttribute('role')).toBe('group');
    });

    it('should visually hide legend when legendHidden is true', async () => {
      const group = await createGroup({ legend: 'Hidden legend', legendHidden: true });
      const legend = group.shadowRoot?.querySelector('legend');
      expect(legend?.classList.contains('selection-button-group__legend--hidden')).toBe(true);
    });
  });

  describe('Properties & Defaults', () => {
    it('should have correct default properties', async () => {
      const group = await createGroup();
      expect(group.type).toBe('radio');
      expect(group.disabled).toBe(false);
      expect(group.legendHidden).toBe(false);
      expect(group.size).toBe('md');
      expect(group.shape).toBe('');
      expect(group.theme).toBe('');
    });

    it('should accept type="checkbox"', async () => {
      const group = await createGroup({ type: 'checkbox' });
      expect(group.type).toBe('checkbox');
    });

    it('should sync theme to child buttons', async () => {
      const group = await createGroup({ theme: 'success' });
      const buttons = group.querySelectorAll('ag-selection-button');
      buttons.forEach((button) => {
        expect((button as AgSelectionButton)._theme).toBe('success');
      });
    });

    it('should sync size to child buttons', async () => {
      const group = await createGroup({ size: 'lg' });
      const buttons = group.querySelectorAll('ag-selection-button');
      buttons.forEach((button) => {
        expect((button as AgSelectionButton)._size).toBe('lg');
      });
    });

    it('should sync shape to child buttons', async () => {
      const group = await createGroup({ shape: 'capsule' });
      const buttons = group.querySelectorAll('ag-selection-button');
      buttons.forEach((button) => {
        expect((button as AgSelectionButton)._shape).toBe('capsule');
      });
    });
  });

  describe('Selection Behavior - Radio', () => {
    it('should only allow one selection in radio mode', async () => {
      const group = await createGroup({ type: 'radio' });
      const buttons = group.querySelectorAll('ag-selection-button');

      // Simulate clicking first button
      buttons[0].dispatchEvent(new CustomEvent('selection-button-change', {
        detail: { value: 'a', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;

      expect((buttons[0] as AgSelectionButton).checked).toBe(true);
      expect((buttons[1] as AgSelectionButton).checked).toBe(false);

      // Click second button
      buttons[1].dispatchEvent(new CustomEvent('selection-button-change', {
        detail: { value: 'b', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;

      expect((buttons[0] as AgSelectionButton).checked).toBe(false);
      expect((buttons[1] as AgSelectionButton).checked).toBe(true);
    });

    it('should dispatch selection-change event with correct detail', async () => {
      const group = await createGroup({ type: 'radio' });
      const handler = vi.fn();
      group.addEventListener('selection-change', handler);

      const buttons = group.querySelectorAll('ag-selection-button');
      buttons[0].dispatchEvent(new CustomEvent('selection-button-change', {
        detail: { value: 'a', checked: true },
        bubbles: true,
        composed: true,
      }));

      expect(handler).toHaveBeenCalled();
      const detail = handler.mock.calls[0][0].detail;
      expect(detail.value).toBe('a');
      expect(detail.checked).toBe(true);
      expect(detail.selectedValues).toEqual(['a']);
    });
  });

  describe('Selection Behavior - Checkbox', () => {
    it('should allow multiple selections in checkbox mode', async () => {
      const group = await createGroup({ type: 'checkbox' });
      const buttons = group.querySelectorAll('ag-selection-button');

      // Select first button
      buttons[0].dispatchEvent(new CustomEvent('selection-button-change', {
        detail: { value: 'a', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;

      // Select second button
      buttons[1].dispatchEvent(new CustomEvent('selection-button-change', {
        detail: { value: 'b', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;

      expect((buttons[0] as AgSelectionButton).checked).toBe(true);
      expect((buttons[1] as AgSelectionButton).checked).toBe(true);
    });

    it('should toggle selection in checkbox mode', async () => {
      const group = await createGroup({ type: 'checkbox' });
      const buttons = group.querySelectorAll('ag-selection-button');

      // Select
      buttons[0].dispatchEvent(new CustomEvent('selection-button-change', {
        detail: { value: 'a', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;
      expect((buttons[0] as AgSelectionButton).checked).toBe(true);

      // Deselect
      buttons[0].dispatchEvent(new CustomEvent('selection-button-change', {
        detail: { value: 'a', checked: false },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;
      expect((buttons[0] as AgSelectionButton).checked).toBe(false);
    });
  });

  describe('Controlled Mode', () => {
    it('should respect controlled value prop for radio', async () => {
      const group = await createGroup({ type: 'radio', value: 'b' });
      await group.updateComplete;

      const buttons = group.querySelectorAll('ag-selection-button');
      expect((buttons[0] as AgSelectionButton).checked).toBe(false);
      expect((buttons[1] as AgSelectionButton).checked).toBe(true);
    });

    it('should respect controlled values prop for checkbox', async () => {
      const group = await createGroup({ type: 'checkbox', values: ['a', 'c'] });
      await group.updateComplete;

      const buttons = group.querySelectorAll('ag-selection-button');
      expect((buttons[0] as AgSelectionButton).checked).toBe(true);
      expect((buttons[1] as AgSelectionButton).checked).toBe(false);
      expect((buttons[2] as AgSelectionButton).checked).toBe(true);
    });
  });

  describe('Disabled State', () => {
    it('should disable all buttons when group is disabled', async () => {
      const group = await createGroup({ disabled: true });
      const buttons = group.querySelectorAll('ag-selection-button');

      buttons.forEach((button) => {
        expect((button as AgSelectionButton).disabled).toBe(true);
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('should navigate through buttons with arrow keys', async () => {
      const group = await createGroup({ type: 'radio' });
      const buttons = Array.from(group.querySelectorAll('ag-selection-button')) as AgSelectionButton[];
      await Promise.all(buttons.map(b => b.updateComplete));

      // Focus first button
      buttons[0].focus();

      // Arrow right to second
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      await group.updateComplete;
      expect(buttons[1].checked).toBe(true);

      // Arrow right to third
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      await group.updateComplete;
      expect(buttons[2].checked).toBe(true);

      // Arrow left back to second
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
      await group.updateComplete;
      expect(buttons[1].checked).toBe(true);
    });

    it('should wrap around when navigating past the end', async () => {
      const group = await createGroup({ type: 'radio' });
      const buttons = Array.from(group.querySelectorAll('ag-selection-button')) as AgSelectionButton[];
      await Promise.all(buttons.map(b => b.updateComplete));

      // Select last button first
      buttons[2].dispatchEvent(new CustomEvent('selection-button-change', {
        detail: { value: 'c', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;
      expect(buttons[2].checked).toBe(true);

      // Focus last button and arrow right should wrap to first
      buttons[2].focus();
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      await group.updateComplete;
      expect(buttons[0].checked).toBe(true);
    });

    it('should jump to first/last with Home/End keys', async () => {
      const group = await createGroup({ type: 'radio' });
      const buttons = Array.from(group.querySelectorAll('ag-selection-button')) as AgSelectionButton[];
      await Promise.all(buttons.map(b => b.updateComplete));

      // Focus second button
      buttons[1].focus();

      // End should go to last
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
      await group.updateComplete;
      expect(buttons[2].checked).toBe(true);

      // Home should go to first
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
      await group.updateComplete;
      expect(buttons[0].checked).toBe(true);
    });
  });

  describe('Themes', () => {
    const themes = ['', 'success', 'info', 'warning', 'error', 'monochrome'] as const;

    themes.forEach((theme) => {
      it(`should apply theme="${theme || 'default'}" to all buttons`, async () => {
        const group = await createGroup({ theme });
        const buttons = group.querySelectorAll('ag-selection-button');

        buttons.forEach((button) => {
          expect((button as AgSelectionButton)._theme).toBe(theme);
        });
      });
    });
  });

  describe('Sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      it(`should apply size="${size}" to all buttons`, async () => {
        const group = await createGroup({ size });
        const buttons = group.querySelectorAll('ag-selection-button');

        buttons.forEach((button) => {
          expect((button as AgSelectionButton)._size).toBe(size);
        });
      });
    });
  });

  describe('Shapes', () => {
    const shapes = ['', 'rounded', 'capsule'] as const;

    shapes.forEach((shape) => {
      it(`should apply shape="${shape || 'default'}" to all buttons`, async () => {
        const group = await createGroup({ shape });
        const buttons = group.querySelectorAll('ag-selection-button');

        buttons.forEach((button) => {
          expect((button as AgSelectionButton)._shape).toBe(shape);
        });
      });
    });
  });
});
