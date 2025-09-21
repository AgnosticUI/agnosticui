import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Tooltip } from './_Tooltip';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Tooltip - Comprehensive Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createTooltip = async (props: Partial<Tooltip> = {}, triggerContent = 'Trigger') => {
    const tooltip = new Tooltip();
    const trigger = document.createElement('button');
    trigger.textContent = triggerContent;
    tooltip.appendChild(trigger);

    Object.assign(tooltip, props);
    container.appendChild(tooltip);
    await tooltip.updateComplete;
    return { tooltip, trigger };
  };

  describe('Accessibility', () => {
    it('should be fully accessible with no violations', async () => {
      const { tooltip } = await createTooltip({ content: 'Hello' });
      const results = await axe(tooltip);
      expect(results).toHaveNoViolations();
    });
  });

  describe('ARIA and Attributes', () => {
    it('should apply correct ARIA attributes on initialization', async () => {
      const { tooltip, trigger } = await createTooltip({ content: 'Hello' });
      const tooltipElement = tooltip.shadowRoot?.querySelector('#tooltip');
      expect(tooltipElement?.getAttribute('role')).toBe('tooltip');
      expect(trigger.getAttribute('aria-describedby')).toBe('tooltip');
    });

    it('should be hidden from assistive technology when closed', async () => {
      const { tooltip } = await createTooltip({ content: 'Hello' });
      const tooltipElement = tooltip.shadowRoot?.querySelector('#tooltip');
      // Using a style check as a proxy for visibility to AT
      expect(window.getComputedStyle(tooltipElement!).display).toBe('none');
    });
  });

  describe('Properties', () => {
    it('should have correct default properties', async () => {
      const { tooltip } = await createTooltip();
      expect(tooltip.content).toBe('');
      expect(tooltip.placement).toBe('top');
      expect(tooltip.distance).toBe(8);
      expect(tooltip.skidding).toBe(0);
      expect(tooltip.trigger).toBe('hover focus');
    });

    it('should accept and reflect new property values', async () => {
      const { tooltip } = await createTooltip({
        content: 'New Content',
        placement: 'bottom',
        distance: 10,
        skidding: 5,
        trigger: 'click',
      });
      expect(tooltip.content).toBe('New Content');
      expect(tooltip.placement).toBe('bottom');
      expect(tooltip.distance).toBe(10);
      expect(tooltip.skidding).toBe(5);
      expect(tooltip.trigger).toBe('click');
    });
  });

  describe('Interactions', () => {
    it('should show on hover and hide on mouseleave', async () => {
      const { tooltip } = await createTooltip({ trigger: 'hover' });
      tooltip.dispatchEvent(new MouseEvent('mouseenter'));
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(true);

      tooltip.dispatchEvent(new MouseEvent('mouseleave'));
      await new Promise(r => setTimeout(r, 150)); // Wait for hide timeout
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(false);
    });

    it('should show on focus and hide on blur', async () => {
      const { tooltip, trigger } = await createTooltip({ trigger: 'focus' });
      trigger.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(true);

      trigger.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(false);
    });

    it('should toggle on click', async () => {
      const { tooltip, trigger } = await createTooltip({ trigger: 'click' });
      trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(true);

      trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(false);
    });

    it('should dismiss with Escape key', async () => {
      const { tooltip } = await createTooltip();
      tooltip.show();
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(true);

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(false);
    });

    it('should persist when hovering from trigger to tooltip (WCAG)', async () => {
      const { tooltip } = await createTooltip({ trigger: 'hover' });
      const tooltipElement = tooltip.shadowRoot?.querySelector('#tooltip');

      tooltip.dispatchEvent(new MouseEvent('mouseenter'));
      await tooltip.updateComplete;
      expect(tooltipElement?.hasAttribute('data-show')).toBe(true);

      tooltip.dispatchEvent(new MouseEvent('mouseleave'));
      tooltipElement?.dispatchEvent(new MouseEvent('mouseenter'));
      await new Promise(r => setTimeout(r, 150));
      await tooltip.updateComplete;
      expect(tooltipElement?.hasAttribute('data-show')).toBe(true);

      tooltipElement?.dispatchEvent(new MouseEvent('mouseleave'));
      await new Promise(r => setTimeout(r, 150));
      await tooltip.updateComplete;
      expect(tooltipElement?.hasAttribute('data-show')).toBe(false);
    });

    it.todo('should show on long press for touch interaction');
    it.todo('should dismiss on tap outside for touch interaction');
  });

  describe('Focus Management', () => {
    it('should not give focus to the tooltip panel itself', async () => {
      const { tooltip, trigger } = await createTooltip({ trigger: 'focus' });
      trigger.focus();
      await tooltip.updateComplete;

      expect(tooltip.shadowRoot?.activeElement).not.toBe(tooltip.shadowRoot?.querySelector('#tooltip'));
      expect(document.activeElement).toBe(trigger);
    });
  });

  describe('API Methods and Events', () => {
    it('should show and hide programmatically via methods', async () => {
      const { tooltip } = await createTooltip();
      tooltip.show();
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(true);

      tooltip.hide();
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(false);
    });

    it('should dispatch show and hide events', async () => {
      const { tooltip } = await createTooltip();
      const showSpy = vi.fn();
      const hideSpy = vi.fn();
      tooltip.addEventListener('show', showSpy);
      tooltip.addEventListener('hide', hideSpy);

      tooltip.show();
      await tooltip.updateComplete;
      expect(showSpy).toHaveBeenCalledTimes(1);

      tooltip.hide();
      await tooltip.updateComplete;
      expect(hideSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('Slots and Content', () => {
    it('should render content from the content property', async () => {
      const { tooltip } = await createTooltip({ content: 'Property Content' });
      const slot = tooltip.shadowRoot?.querySelector('slot[name="content"]') as HTMLSlotElement;
      const nodes = slot.assignedNodes();
      expect(nodes.length).toBe(0); // No slotted content
      expect(slot.textContent).toContain('Property Content');
    });

    it('should prioritize slotted content over the content property', async () => {
      const { tooltip } = await createTooltip({ content: 'Property Content' });
      const slottedContent = document.createElement('span');
      slottedContent.setAttribute('slot', 'content');
      slottedContent.textContent = 'Slotted Content';
      tooltip.appendChild(slottedContent);
      await tooltip.updateComplete;

      const slot = tooltip.shadowRoot?.querySelector('slot[name="content"]') as HTMLSlotElement;
      const elements = slot.assignedElements();
      expect(elements[0]).toBe(slottedContent);
      expect(elements[0].textContent).toBe('Slotted Content');
    });
  });

  describe('Edge Cases', () => {
    it('should not show when disabled property is true', async () => {
      const { tooltip, trigger } = await createTooltip({ disabled: true });
      
      trigger.dispatchEvent(new MouseEvent('mouseenter'));
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(false);

      trigger.focus();
      await tooltip.updateComplete;
      expect(tooltip.shadowRoot?.querySelector('#tooltip')?.hasAttribute('data-show')).toBe(false);
    });
  });
});
