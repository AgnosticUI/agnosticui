import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgBadge } from './Badge';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);


// Register the custom element
if (!customElements.get('ag-badge')) {
  customElements.define('ag-badge', AgBadge);
}

describe('AgBadge', () => {
  let element: AgBadge;

  beforeEach(() => {
    element = document.createElement('ag-badge') as AgBadge;
    document.body.appendChild(element);
  });

  afterEach(() => {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  describe('Defaults', () => {
    it('should render with default properties', async () => {
      await element.updateComplete;
      expect(element).toBeInstanceOf(AgBadge);
      const span = element.shadowRoot?.querySelector('.badge');
      expect(span).toBeDefined();
      expect(element.variant).toBe('default');
      expect(element.size).toBe('md');
      expect(element.dot).toBe(false);
      expect(element.value).toBe(null);
      expect(element.max).toBe(99);
      expect(element.interactive).toBe(false);
    });
  });

  describe('Variants', () => {
    it('should set the variant class', async () => {
      element.variant = 'success';
      await element.updateComplete;
      expect(element.getAttribute('variant')).toBe('success');
    });

    it('should set the size class', async () => {
      element.size = 'sm';
      await element.updateComplete;
      expect(element.getAttribute('size')).toBe('sm');
    });
  });

  describe('Dot variant', () => {
    it('should render a dot', async () => {
      element.dot = true;
      await element.updateComplete;
      const span = element.shadowRoot?.querySelector('.badge');
      expect(span?.textContent?.trim()).toBe('');
      expect(element.hasAttribute('dot')).toBe(true);
    });

    it('should be aria-hidden by default when a dot', async () => {
      element.dot = true;
      await element.updateComplete;
      const span = element.shadowRoot?.querySelector('.badge');
      expect(span?.getAttribute('aria-hidden')).toBe('true');
    });

    it('should not be aria-hidden when a dot has a statusLabel', async () => {
      element.dot = true;
      element.statusLabel = 'Online';
      await element.updateComplete;
      const span = element.shadowRoot?.querySelector('.badge');
      expect(span?.getAttribute('aria-hidden')).toBe('false');
      expect(span?.getAttribute('aria-label')).toBe('Online');
    });
  });

  describe('Count variant', () => {
    it('should display the value', async () => {
      element.value = 5;
      await element.updateComplete;
      const span = element.shadowRoot?.querySelector('.badge');
      expect(span?.textContent?.trim()).toBe('5');
    });

    it('should display max+ when value exceeds max', async () => {
      element.value = 100;
      element.max = 99;
      await element.updateComplete;
      const span = element.shadowRoot?.querySelector('.badge');
      expect(span?.textContent?.trim()).toBe('99+');
    });
  });

  describe('Interactive variant', () => {
    it('should be interactive', async () => {
      element.interactive = true;
      await element.updateComplete;
      const span = element.shadowRoot?.querySelector('.badge');
      expect(span?.getAttribute('role')).toBe('button');
      expect(span?.getAttribute('tabindex')).toBe('0');
    });

    it('should emit a click event', async () => {
      const spy = vi.fn();
      element.addEventListener('badge:click', spy);
      element.interactive = true;
      await element.updateComplete;
      const span = element.shadowRoot?.querySelector('.badge');
      span?.dispatchEvent(new MouseEvent('click'));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should be keyboard accessible', async () => {
      const spy = vi.fn();
      element.addEventListener('badge:click', spy);
      element.interactive = true;
      await element.updateComplete;
      const span = element.shadowRoot?.querySelector('.badge');
      span?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      expect(spy).toHaveBeenCalledTimes(1);
      span?.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  describe('Live region', () => {
    it('should create and update a live region', async () => {
      element.live = 'polite';
      element.value = 3;
      element.statusLabel = '3 unread messages';
      await element.updateComplete;

      let liveRegion = document.getElementById('ag-badge-live');
      expect(liveRegion).toBeDefined();
      expect(liveRegion?.textContent).toBe('3 unread messages');

      element.value = 4;
      element.statusLabel = '4 unread messages';
      await element.updateComplete;

      liveRegion = document.getElementById('ag-badge-live');
      expect(liveRegion?.textContent).toBe('4 unread messages');
    });
  });

    describe('Accessibility', () => {
    it('should pass axe-core accessibility tests', async () => {
      element.value = 10;
      await element.updateComplete;
      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });

    it('should pass axe-core accessibility tests for dot variant', async () => {
      element.dot = true;
      await element.updateComplete;
      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });

    it('should pass axe-core accessibility tests for interactive variant', async () => {
      element.interactive = true;
      element.value = 10;
      await element.updateComplete;
      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });
  });
});
