import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Popover } from './_Popover.js';
import './Popover.js';

// Extend expect with jest-axe matchers
expect.extend(toHaveNoViolations);

// Mock Floating UI to test positioning logic
vi.mock('@floating-ui/dom', async () => {
  const actual = await vi.importActual('@floating-ui/dom');
  return {
    ...actual,
    computePosition: vi.fn().mockResolvedValue({
      x: 100,
      y: 200,
      placement: 'bottom',
      middlewareData: {
        arrow: { x: 50, y: 0 }
      }
    }),
    autoUpdate: vi.fn().mockReturnValue(() => {})
  };
});

describe('Popover', () => {
  let popover: Popover;
  let trigger: HTMLButtonElement;

  beforeEach(async () => {
    // Create and setup popover component
    popover = document.createElement('ag-popover');
    trigger = document.createElement('button');
    trigger.setAttribute('slot', 'trigger');
    trigger.textContent = 'Open Popover';
    
    const title = document.createElement('span');
    title.setAttribute('slot', 'title');
    title.textContent = 'Test Title';
    
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.innerHTML = '<p>Test content</p>';
    
    popover.appendChild(trigger);
    popover.appendChild(title);
    popover.appendChild(content);
    
    document.body.appendChild(popover);
    await popover.updateComplete;
  });

  afterEach(() => {
    popover?.remove();
    vi.clearAllMocks();
  });

  describe('Basic Functionality', () => {
    it('should initialize with correct default properties', () => {
      expect(popover.placement).toBe('bottom');
      expect(popover.distance).toBe(8);
      expect(popover.skidding).toBe(0);
      expect(popover.arrow).toBe(true);
      expect(popover.disabled).toBe(false);
      expect(popover.triggerType).toBe('click');
      expect(popover.matchTriggerWidth).toBe(false);
      expect(popover.showCloseButton).toBe(true);
      expect(popover.closeLabel).toBe('Close popover');
      expect(popover.trapFocus).toBe(false);
      expect(popover.isOpen).toBe(false);
    });

    it('should set ARIA attributes on trigger element', () => {
      expect(trigger.getAttribute('aria-expanded')).toBe('false');
      // aria-controls is no longer set on the trigger, as it cannot reference an element inside the shadow DOM
      expect(trigger.getAttribute('aria-controls')).toBeNull();
      expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
    });

    it('should render with correct HTML structure', () => {
      const popoverElement = popover.shadowRoot?.getElementById('popover');
      expect(popoverElement).toBeTruthy();
      expect(popoverElement?.getAttribute('role')).toBe('dialog');
      expect(popoverElement?.getAttribute('aria-modal')).toBe('false');
    });
  });

  describe('Trigger Types', () => {
    it('should open on click when triggerType is "click"', async () => {
      popover.triggerType = 'click';
      await popover.updateComplete;

      trigger.click();
      await popover.updateComplete;

      expect(popover.isOpen).toBe(true);
    });

    it('should open on hover when triggerType is "hover"', async () => {
      popover.triggerType = 'hover';
      await popover.updateComplete;

      trigger.dispatchEvent(new Event('mouseenter'));
      await popover.updateComplete;

      expect(popover.isOpen).toBe(true);
    });

    it('should open on focus when triggerType is "focus"', async () => {
      popover.triggerType = 'focus';
      await popover.updateComplete;

      trigger.dispatchEvent(new Event('focus'));
      await popover.updateComplete;

      expect(popover.isOpen).toBe(true);
    });

    it('should close on mouse leave when triggerType is "hover"', async () => {
      popover.triggerType = 'hover';
      await popover.updateComplete;

      // Open first
      trigger.dispatchEvent(new Event('mouseenter'));
      await popover.updateComplete;
      expect(popover.isOpen).toBe(true);

      // Then close
      trigger.dispatchEvent(new Event('mouseleave'));
      // Wait for the hover timeout
      await new Promise(resolve => setTimeout(resolve, 200));
      await popover.updateComplete;

      expect(popover.isOpen).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations when closed', async () => {
      const results = await axe(popover);
      expect(results).toHaveNoViolations();
    });

    it('should have no accessibility violations when open', async () => {
      popover.show();
      await popover.updateComplete;
      
      const results = await axe(popover);
      expect(results).toHaveNoViolations();
    });

    it('should close on Escape key', async () => {
      popover.show();
      await popover.updateComplete;

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      popover.dispatchEvent(escapeEvent);
      await popover.updateComplete;

      expect(popover.isOpen).toBe(false);
    });

    it('should return focus to trigger when closed', async () => {
      const focusSpy = vi.spyOn(trigger, 'focus');
      
      popover.show();
      await popover.updateComplete;
      popover.hide();
      await popover.updateComplete;
      
      expect(focusSpy).toHaveBeenCalledOnce();
    });
  });

  describe('Slot Management', () => {
    it('should detect title slot content', () => {
      expect(popover.hasTitleSlot).toBe(true);
      expect(popover.hasAttribute('has-header')).toBe(true);
    });

    it('should detect content slot content', () => {
      expect(popover.hasContentSlot).toBe(true);
      expect(popover.hasAttribute('has-content')).toBe(true);
    });

    it('should handle dynamic content changes in slots', async () => {
      const title = popover.querySelector('[slot="title"]');
      if (title) {
        title.textContent = 'Updated Title';

        // Force mutation observer to trigger
        title.dispatchEvent(new Event('input'));
        await popover.updateComplete;
      }

      expect(popover.hasTitleSlot).toBe(true);
    });

    it('should hide header when no title and close button disabled', async () => {
      popover.showCloseButton = false;
      const title = popover.querySelector('[slot="title"]');
      if (title) {
        title.remove();
      }

      await popover.updateComplete;

      expect(popover.hasHeader).toBe(false);
      expect(popover.hasAttribute('has-header')).toBe(false);
    });
  });

  describe('Event Handling', () => {
    it('should close when clicking outside', async () => {
      popover.show();
      await popover.updateComplete;

      // Simulate click outside
      document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await popover.updateComplete;

      expect(popover.isOpen).toBe(false);
    });

    it('should not close when clicking inside popover', async () => {
      popover.show();
      await popover.updateComplete;

      const popoverElement = popover.shadowRoot?.getElementById('popover');
      popoverElement?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await popover.updateComplete;

      expect(popover.isOpen).toBe(true);
    });

    it('should stop propagation on close button click', async () => {
      popover.show();
      await popover.updateComplete;

      const closeButton = popover.shadowRoot?.querySelector('ag-close-button');
      const clickEvent = new CustomEvent('close-button-click', { bubbles: true });
      const stopPropagationSpy = vi.spyOn(clickEvent, 'stopPropagation');

      closeButton?.dispatchEvent(clickEvent);
      await popover.updateComplete;

      expect(stopPropagationSpy).toHaveBeenCalledOnce();
      expect(popover.isOpen).toBe(false);
    });
  });

  describe('Disabled State', () => {
    it('should not open when disabled', async () => {
      popover.disabled = true;
      await popover.updateComplete;

      trigger.click();
      await popover.updateComplete;

      expect(popover.isOpen).toBe(false);
    });

    it('should close when disabled while open', async () => {
      popover.show();
      await popover.updateComplete;
      expect(popover.isOpen).toBe(true);

      popover.disabled = true;
      await popover.updateComplete;

      expect(popover.isOpen).toBe(false);
    });
  });

  describe('Error Handling', () => {
    it('should not open when no trigger element is provided', async () => {
      const emptyPopover = document.createElement('ag-popover') as Popover;

      document.body.appendChild(emptyPopover);
      await emptyPopover.updateComplete;

      emptyPopover.show();
      await emptyPopover.updateComplete;

      // Should not open without a trigger
      expect(emptyPopover.isOpen).toBe(false);

      emptyPopover.remove();
    });

    // Note: Positioning error handling is tested through integration
    // Manual testing shows errors are properly logged to console
  });

  describe('Property Changes', () => {
    it('should update placement property', async () => {
      popover.placement = 'top';
      await popover.updateComplete;

      expect(popover.placement).toBe('top');
      expect(popover.getAttribute('placement')).toBe('top');
    });

    it('should update triggerType and change event listeners', async () => {
      const removeSpy = vi.spyOn(popover as any, '_removeTriggerListeners');
      const addSpy = vi.spyOn(popover as any, '_addTriggerListeners');

      popover.triggerType = 'hover';
      await popover.updateComplete;

      expect(removeSpy).toHaveBeenCalled();
      expect(addSpy).toHaveBeenCalled();
    });
  });
});
