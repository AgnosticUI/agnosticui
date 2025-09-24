/**
 * AgnosticUI IconButton Component Tests
 * Comprehensive test suite for ag-icon-button
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgIconButton } from './_IconButton';

// AgIconButton is automatically registered as 'ag-icon-button' via @customElement decorator

describe('AgIconButton', () => {
  let element: AgIconButton;

  beforeEach(() => {
    // Create element and add to DOM
    element = document.createElement('ag-icon-button') as AgIconButton;
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up after each test
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  describe('Basic Functionality', () => {
    it('should render with semantic button element', async () => {
      element.label = 'Test button';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button).toBeTruthy();
      expect(button!.tagName).toBe('BUTTON');
    });

    it('should have accessible name via aria-label', async () => {
      element.label = 'Close dialog';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-label')).toBe('Close dialog');
    });

    it('should warn when label is missing', async () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      // Force a re-render to trigger the warning
      element.requestUpdate();
      await element.updateComplete;

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('AgIconButton: label property is required for accessibility')
      );

      consoleSpy.mockRestore();
    });

    it('should set default properties correctly', async () => {
      element.label = 'Test';
      await element.updateComplete;

      expect(element.size).toBe('md');
      expect(element.variant).toBe('ghost');
      expect(element.type).toBe('button');
      expect(element.disabled).toBe(false);
      expect(element.pressed).toBe(false);
      expect(element.loading).toBe(false);
    });
  });

  describe('Icon Rendering', () => {
    it('should render unicode icon when provided', async () => {
      element.label = 'Close';
      element.unicode = '×';
      await element.updateComplete;

      const icon = element.shadowRoot!.querySelector('.unicode-icon');
      expect(icon).toBeTruthy();
      expect(icon!.textContent).toBe('×');
      expect(icon!.getAttribute('aria-hidden')).toBe('true');
    });

    it('should render icon identifier with placeholder SVG', async () => {
      element.label = 'Menu';
      element.icon = 'menu';
      await element.updateComplete;

      const icon = element.shadowRoot!.querySelector('[data-icon="menu"]');
      expect(icon).toBeTruthy();
      expect(icon!.getAttribute('aria-hidden')).toBe('true');

      const svg = icon!.querySelector('svg');
      expect(svg).toBeTruthy();
      expect(svg!.getAttribute('focusable')).toBe('false');
      expect(svg!.getAttribute('aria-hidden')).toBe('true');
    });

    it('should render slotted icon content', async () => {
      element.label = 'Custom icon';
      element.innerHTML = '<svg slot="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>';
      await element.updateComplete;

      const slottedSvg = element.querySelector('svg[slot="icon"]');
      expect(slottedSvg).toBeTruthy();

      const iconContainer = element.shadowRoot!.querySelector('.icon');
      expect(iconContainer!.getAttribute('aria-hidden')).toBe('true');
    });

    it('should prioritize slotted content over unicode and icon', async () => {
      element.label = 'Test';
      element.unicode = '×';
      element.icon = 'menu';
      element.innerHTML = '<span slot="icon">Custom</span>';
      await element.updateComplete;

      const slottedContent = element.querySelector('[slot="icon"]');
      expect(slottedContent).toBeTruthy();
      expect(slottedContent!.textContent).toBe('Custom');

      // Should not render unicode or icon identifier
      const unicodeIcon = element.shadowRoot!.querySelector('.unicode-icon');
      const iconElement = element.shadowRoot!.querySelector('[data-icon]');
      expect(unicodeIcon).toBeFalsy();
      expect(iconElement).toBeFalsy();
    });

    it('should prioritize unicode over icon identifier', async () => {
      element.label = 'Test';
      element.unicode = '☰';
      element.icon = 'menu';
      await element.updateComplete;

      const unicodeIcon = element.shadowRoot!.querySelector('.unicode-icon');
      expect(unicodeIcon).toBeTruthy();
      expect(unicodeIcon!.textContent).toBe('☰');

      const iconElement = element.shadowRoot!.querySelector('[data-icon]');
      expect(iconElement).toBeFalsy();
    });
  });

  describe('Size Variants', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    sizes.forEach(size => {
      it(`should apply size="${size}" attribute and styling`, async () => {
        element.label = 'Test';
        element.size = size;
        await element.updateComplete;

        expect(element.getAttribute('size')).toBe(size);
        expect(element.size).toBe(size);
      });
    });

    it('should have minimum touch target size for accessibility', async () => {
      element.label = 'Test';
      element.size = 'xs';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      const computedStyle = getComputedStyle(button!);

      // Minimum 44px touch target
      const minWidth = parseInt(computedStyle.minWidth);
      const minHeight = parseInt(computedStyle.minHeight);

      expect(minWidth).toBeGreaterThanOrEqual(44);
      expect(minHeight).toBeGreaterThanOrEqual(44);
    });
  });

  describe('Visual Variants', () => {
    const variants = ['primary', 'secondary', 'ghost', 'danger'] as const;

    variants.forEach(variant => {
      it(`should apply variant="${variant}" attribute`, async () => {
        element.label = 'Test';
        element.variant = variant;
        await element.updateComplete;

        expect(element.getAttribute('variant')).toBe(variant);
        expect(element.variant).toBe(variant);
      });
    });
  });

  describe('Button States', () => {
    it('should handle disabled state correctly', async () => {
      element.label = 'Test';
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.disabled).toBe(true);
      expect(element.hasAttribute('disabled')).toBe(true);
    });

    it('should handle pressed state for toggle buttons', async () => {
      element.label = 'Toggle';
      element.pressed = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-pressed')).toBe('true');
      expect(element.hasAttribute('pressed')).toBe(true);
    });

    it('should handle loading state', async () => {
      element.label = 'Save';
      element.loading = true;
      await element.updateComplete;

      expect(element.hasAttribute('loading')).toBe(true);

      // The loading state sets pointer-events: none via CSS custom property
      // Check if the host element has the loading attribute which enables the CSS
      expect(element.loading).toBe(true);
    });

    it('should render loading indicator when loading', async () => {
      element.label = 'Save';
      element.loading = true;
      await element.updateComplete;

      const loadingSvg = element.shadowRoot!.querySelector('svg[style*="animation"]');
      expect(loadingSvg).toBeTruthy();
      expect(loadingSvg!.getAttribute('aria-hidden')).toBe('true');
    });
  });

  describe('Keyboard Interaction', () => {
    it('should activate on Space key', async () => {
      element.label = 'Test';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      let eventFired = false;
      let eventDetail: any = null;

      element.addEventListener('icon-button-activate', (e: any) => {
        eventFired = true;
        eventDetail = e.detail;
      });

      // Simulate Space key press
      const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
      button!.dispatchEvent(spaceEvent);

      expect(eventFired).toBe(true);
      expect(eventDetail.label).toBe('Test');
      expect(eventDetail.originalEvent.key).toBe(' ');
    });

    it('should activate on Enter key', async () => {
      element.label = 'Test';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      let eventFired = false;
      let eventDetail: any = null;

      element.addEventListener('icon-button-activate', (e: any) => {
        eventFired = true;
        eventDetail = e.detail;
      });

      // Simulate Enter key press
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      button!.dispatchEvent(enterEvent);

      expect(eventFired).toBe(true);
      expect(eventDetail.label).toBe('Test');
      expect(eventDetail.originalEvent.key).toBe('Enter');
    });

    it('should not activate when disabled', async () => {
      element.label = 'Test';
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      let eventFired = false;

      element.addEventListener('icon-button-activate', () => {
        eventFired = true;
      });

      const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
      button!.dispatchEvent(spaceEvent);

      expect(eventFired).toBe(false);
    });

    it('should not activate when loading', async () => {
      element.label = 'Test';
      element.loading = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      let eventFired = false;

      element.addEventListener('icon-button-activate', () => {
        eventFired = true;
      });

      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      button!.dispatchEvent(enterEvent);

      expect(eventFired).toBe(false);
    });
  });

  describe('Click Events', () => {
    it('should dispatch custom click event with details', async () => {
      element.label = 'Test button';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      let eventDetail: any = null;

      element.addEventListener('icon-button-click', (e: any) => {
        eventDetail = e.detail;
      });

      button!.click();

      expect(eventDetail.label).toBe('Test button');
      expect(eventDetail.pressed).toBe(false);
      expect(eventDetail.originalEvent).toBeInstanceOf(MouseEvent);
    });

    it('should include pressed state in event details', async () => {
      element.label = 'Toggle';
      element.pressed = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      let eventDetail: any = null;

      element.addEventListener('icon-button-click', (e: any) => {
        eventDetail = e.detail;
      });

      button!.click();

      expect(eventDetail.pressed).toBe(true);
    });

    it('should prevent click when disabled', async () => {
      element.label = 'Test';
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      let eventFired = false;

      element.addEventListener('icon-button-click', () => {
        eventFired = true;
      });

      button!.click();

      expect(eventFired).toBe(false);
    });

    it('should prevent click when loading', async () => {
      element.label = 'Test';
      element.loading = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      let eventFired = false;

      element.addEventListener('icon-button-click', () => {
        eventFired = true;
      });

      button!.click();

      expect(eventFired).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', async () => {
      element.label = 'Menu button';
      element.pressed = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-label')).toBe('Menu button');
      expect(button!.getAttribute('aria-pressed')).toBe('true');
    });

    it('should hide icon from screen readers', async () => {
      element.label = 'Test';
      element.unicode = '×';
      await element.updateComplete;

      const icon = element.shadowRoot!.querySelector('.icon');
      expect(icon!.getAttribute('aria-hidden')).toBe('true');
    });

    it('should set focusable="false" on SVG icons', async () => {
      element.label = 'Test';
      element.icon = 'menu';
      await element.updateComplete;

      const svg = element.shadowRoot!.querySelector('svg');
      expect(svg!.getAttribute('focusable')).toBe('false');
    });

    it('should not be focusable when disabled', async () => {
      element.label = 'Test';
      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.disabled).toBe(true);
    });
  });

  describe('Button Types', () => {
    it('should set button type correctly', async () => {
      element.label = 'Submit';
      element.type = 'submit';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.type).toBe('submit');
    });

    it('should default to type="button"', async () => {
      element.label = 'Test';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.type).toBe('button');
    });
  });

  describe('Custom Loading Slot', () => {
    it('should render custom loading content', async () => {
      element.label = 'Save';
      element.loading = true;
      element.innerHTML = '<span slot="loading">Custom loading...</span>';
      await element.updateComplete;

      const customLoading = element.querySelector('[slot="loading"]');
      expect(customLoading).toBeTruthy();
      expect(customLoading!.textContent).toBe('Custom loading...');
    });
  });

  describe('Property Updates', () => {
    it('should react to label changes', async () => {
      element.label = 'Initial';
      await element.updateComplete;

      element.label = 'Updated';
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-label')).toBe('Updated');
    });

    it('should react to disabled state changes', async () => {
      element.label = 'Test';
      await element.updateComplete;

      element.disabled = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.disabled).toBe(true);
    });

    it('should react to pressed state changes', async () => {
      element.label = 'Toggle';
      await element.updateComplete;

      element.pressed = true;
      await element.updateComplete;

      const button = element.shadowRoot!.querySelector('button');
      expect(button!.getAttribute('aria-pressed')).toBe('true');
    });
  });

  describe('Semantic Token Integration', () => {
    it('should use semantic tokens for styling', async () => {
      element.label = 'Test';
      await element.updateComplete;

      // Check if component styles contain semantic token CSS custom properties
      const styleContent = AgIconButton.styles.toString();
      const hasSemanticTokens = styleContent.includes('--ag-') ||
                               styleContent.includes('var(--ag-') ||
                               styleContent.includes('var(--icon-button-');

      expect(hasSemanticTokens).toBeTruthy();
    });
  });
});