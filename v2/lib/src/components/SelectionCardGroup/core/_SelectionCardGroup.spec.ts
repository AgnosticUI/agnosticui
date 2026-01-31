import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgSelectionCardGroup } from './SelectionCardGroup';
import { AgSelectionCard } from '../../SelectionCard/core/SelectionCard';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SelectionCardGroup - Comprehensive Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createGroup = async (
    props: Partial<AgSelectionCardGroup> = {},
    cardValues: string[] = ['a', 'b', 'c']
  ) => {
    const group = new AgSelectionCardGroup();
    Object.assign(group, { name: 'test-group', legend: 'Test Group', ...props });
    container.appendChild(group);

    // Add child cards
    for (const value of cardValues) {
      const card = new AgSelectionCard();
      card.value = value;
      card.label = `Option ${value.toUpperCase()}`;
      card.textContent = `Card ${value.toUpperCase()}`;
      group.appendChild(card);
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
      expect(legend?.classList.contains('selection-card-group__legend--hidden')).toBe(true);
    });
  });

  describe('Properties & Defaults', () => {
    it('should have correct default properties', async () => {
      const group = await createGroup();
      expect(group.type).toBe('radio');
      expect(group.disabled).toBe(false);
      expect(group.legendHidden).toBe(false);
    });

    it('should accept type="checkbox"', async () => {
      const group = await createGroup({ type: 'checkbox' });
      expect(group.type).toBe('checkbox');
    });
  });

  describe('Selection Behavior - Radio', () => {
    it('should only allow one selection in radio mode', async () => {
      const group = await createGroup({ type: 'radio' });
      const cards = group.querySelectorAll('ag-selection-card');

      // Simulate clicking first card
      cards[0].dispatchEvent(new CustomEvent('selection-card-change', {
        detail: { value: 'a', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;

      expect((cards[0] as AgSelectionCard).checked).toBe(true);
      expect((cards[1] as AgSelectionCard).checked).toBe(false);

      // Click second card
      cards[1].dispatchEvent(new CustomEvent('selection-card-change', {
        detail: { value: 'b', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;

      expect((cards[0] as AgSelectionCard).checked).toBe(false);
      expect((cards[1] as AgSelectionCard).checked).toBe(true);
    });

    it('should dispatch selection-change event with correct detail', async () => {
      const group = await createGroup({ type: 'radio' });
      const handler = vi.fn();
      group.addEventListener('selection-change', handler);

      const cards = group.querySelectorAll('ag-selection-card');
      cards[0].dispatchEvent(new CustomEvent('selection-card-change', {
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
      const cards = group.querySelectorAll('ag-selection-card');

      // Select first card
      cards[0].dispatchEvent(new CustomEvent('selection-card-change', {
        detail: { value: 'a', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;

      // Select second card
      cards[1].dispatchEvent(new CustomEvent('selection-card-change', {
        detail: { value: 'b', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;

      expect((cards[0] as AgSelectionCard).checked).toBe(true);
      expect((cards[1] as AgSelectionCard).checked).toBe(true);
    });

    it('should toggle selection in checkbox mode', async () => {
      const group = await createGroup({ type: 'checkbox' });
      const cards = group.querySelectorAll('ag-selection-card');

      // Select
      cards[0].dispatchEvent(new CustomEvent('selection-card-change', {
        detail: { value: 'a', checked: true },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;
      expect((cards[0] as AgSelectionCard).checked).toBe(true);

      // Deselect
      cards[0].dispatchEvent(new CustomEvent('selection-card-change', {
        detail: { value: 'a', checked: false },
        bubbles: true,
        composed: true,
      }));
      await group.updateComplete;
      expect((cards[0] as AgSelectionCard).checked).toBe(false);
    });
  });

  describe('Controlled Mode', () => {
    it('should respect controlled value prop for radio', async () => {
      const group = await createGroup({ type: 'radio', value: 'b' });
      await group.updateComplete;

      const cards = group.querySelectorAll('ag-selection-card');
      expect((cards[0] as AgSelectionCard).checked).toBe(false);
      expect((cards[1] as AgSelectionCard).checked).toBe(true);
    });

    it('should respect controlled values prop for checkbox', async () => {
      const group = await createGroup({ type: 'checkbox', values: ['a', 'c'] });
      await group.updateComplete;

      const cards = group.querySelectorAll('ag-selection-card');
      expect((cards[0] as AgSelectionCard).checked).toBe(true);
      expect((cards[1] as AgSelectionCard).checked).toBe(false);
      expect((cards[2] as AgSelectionCard).checked).toBe(true);
    });
  });

  describe('Disabled State', () => {
    it('should disable all cards when group is disabled', async () => {
      const group = await createGroup({ disabled: true });
      const cards = group.querySelectorAll('ag-selection-card');

      cards.forEach((card) => {
        expect((card as AgSelectionCard).disabled).toBe(true);
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('should navigate through cards with arrow keys', async () => {
      const group = await createGroup({ type: 'radio' });
      const cards = Array.from(group.querySelectorAll('ag-selection-card')) as AgSelectionCard[];
      await Promise.all(cards.map(c => c.updateComplete));

      // Focus first card
      cards[0].focus();

      // Arrow right to second
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      await group.updateComplete;
      expect(cards[1].checked).toBe(true);

      // Arrow right to third
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      await group.updateComplete;
      expect(cards[2].checked).toBe(true);

      // Arrow left back to second
      group.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
      await group.updateComplete;
      expect(cards[1].checked).toBe(true);
    });
  });
});
