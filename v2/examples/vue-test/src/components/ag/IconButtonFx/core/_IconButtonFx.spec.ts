import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';
import { IconButtonFx } from './IconButtonFx';

expect.extend(toHaveNoViolations);

describe('IconButtonFx', () => {
  let element: IconButtonFx;

  beforeEach(() => {
    element = document.createElement('ag-icon-button-fx') as IconButtonFx;
    element.label = 'Test Icon Button';
    element.unicode = '×';
    document.body.appendChild(element);
  });

  afterEach(() => {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  describe('Basic Functionality', () => {
    it('should render with default properties', async () => {
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe('ag-icon-button-fx');

      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('button');
      expect(button).toBeDefined();
    });

    it('should inherit IconButton functionality', async () => {
      await element.updateComplete;
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('type')).toBe('button');
      expect(button?.getAttribute('aria-label')).toBe('Test Icon Button');
    });

    it('should display icon content', async () => {
      await element.updateComplete;
      const icon = element.shadowRoot?.querySelector('.unicode-icon');
      expect(icon?.textContent).toBe('×');
    });
  });

  describe('FX Props', () => {
    it('should have default fx props', () => {
      expect(element.fxSpeed).toBe('md');
      expect(element.fxEase).toBe('ease');
      expect(element.fxDisabled).toBe(false);
    });

    it('should accept fx prop', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      expect(element.fx).toBe('pulse');
    });

    it('should accept fxSpeed prop', async () => {
      element.fxSpeed = 'lg';
      await element.updateComplete;

      expect(element.fxSpeed).toBe('lg');
    });

    it('should accept fxEase prop', async () => {
      element.fxEase = 'spring-md';
      await element.updateComplete;

      expect(element.fxEase).toBe('spring-md');
    });

    it('should accept fxDisabled prop', async () => {
      element.fxDisabled = true;
      await element.updateComplete;

      expect(element.fxDisabled).toBe(true);
    });
  });

  describe('FX Class Application', () => {
    it('should apply fx class to button element', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-pulse')).toBe(true);
    });

    it('should update fx class when fx prop changes', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      let button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-pulse')).toBe(true);

      element.fx = 'bounce';
      await element.updateComplete;

      button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-pulse')).toBe(false);
      expect(button?.classList.contains('ag-fx-bounce')).toBe(true);
    });

    it('should remove old fx class when changing fx', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      element.fx = 'wobble';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-pulse')).toBe(false);
      expect(button?.classList.contains('ag-fx-wobble')).toBe(true);
    });

    it('should apply ag-fx-disabled class when fxDisabled is true', async () => {
      element.fxDisabled = true;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-disabled')).toBe(true);
    });

    it('should remove ag-fx-disabled class when fxDisabled is false', async () => {
      element.fxDisabled = true;
      await element.updateComplete;

      element.fxDisabled = false;
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-disabled')).toBe(false);
    });
  });

  describe('FX Custom Properties', () => {
    it('should set --ag-fx-duration custom property based on fxSpeed', async () => {
      element.fxSpeed = 'lg';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button') as HTMLElement;
      const durationValue = button?.style.getPropertyValue('--ag-fx-duration');
      expect(durationValue).toBe('var(--ag-fx-duration-lg)');
    });

    it('should set --ag-fx-ease custom property based on fxEase', async () => {
      element.fxEase = 'spring-md';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button') as HTMLElement;
      const easeValue = button?.style.getPropertyValue('--ag-fx-ease');
      expect(easeValue).toBe('var(--ag-fx-ease-spring-md)');
    });

    it('should update custom properties when fxSpeed changes', async () => {
      element.fxSpeed = 'sm';
      await element.updateComplete;

      element.fxSpeed = 'xl';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button') as HTMLElement;
      const durationValue = button?.style.getPropertyValue('--ag-fx-duration');
      expect(durationValue).toBe('var(--ag-fx-duration-xl)');
    });

    it('should update custom properties when fxEase changes', async () => {
      element.fxEase = 'ease-in';
      await element.updateComplete;

      element.fxEase = 'bounce';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button') as HTMLElement;
      const easeValue = button?.style.getPropertyValue('--ag-fx-ease');
      expect(easeValue).toBe('var(--ag-fx-ease-bounce)');
    });
  });

  describe('FX Effects Support', () => {
    const fxEffects = [
      'pulse',
      'bounce',
      'jelly',
      'press-pop',
      'slide-in',
      'grow',
      'shrink',
      'push',
      'shake',
      'wobble',
      'pulse-wobble'
    ];

    fxEffects.forEach((effect) => {
      it(`should support ${effect} effect`, async () => {
        element.fx = effect;
        await element.updateComplete;

        const button = element.shadowRoot?.querySelector('button');
        expect(button?.classList.contains(`ag-fx-${effect}`)).toBe(true);
      });
    });
  });

  describe('Integration with IconButton Props', () => {
    it('should work with variant prop', async () => {
      element.variant = 'primary';
      element.fx = 'pulse';
      await element.updateComplete;

      expect(element.variant).toBe('primary');
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-pulse')).toBe(true);
    });

    it('should work with disabled prop', async () => {
      element.disabled = true;
      element.fx = 'pulse';
      await element.updateComplete;

      expect(element.disabled).toBe(true);
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-pulse')).toBe(true);
    });

    it('should work with size prop', async () => {
      element.size = 'lg';
      element.fx = 'bounce';
      await element.updateComplete;

      expect(element.size).toBe('lg');
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('ag-fx-bounce')).toBe(true);
    });

    it('should work with pressed prop', async () => {
      element.pressed = true;
      element.fx = 'pulse';
      await element.updateComplete;

      expect(element.pressed).toBe(true);
      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-pressed')).toBe('true');
    });

    it('should work with loading prop', async () => {
      element.loading = true;
      element.fx = 'pulse';
      await element.updateComplete;

      expect(element.loading).toBe(true);
    });
  });

  describe('Events', () => {
    it('should dispatch icon-button-click event when clicked', async () => {
      await element.updateComplete;

      const clickSpy = vi.fn();
      element.addEventListener('icon-button-click', clickSpy);

      const button = element.shadowRoot?.querySelector('button');
      button?.click();

      expect(clickSpy).toHaveBeenCalled();
    });

    it('should include event detail in icon-button-click event', async () => {
      await element.updateComplete;

      let eventDetail: any;
      element.addEventListener('icon-button-click', (e: Event) => {
        eventDetail = (e as CustomEvent).detail;
      });

      const button = element.shadowRoot?.querySelector('button');
      button?.click();

      expect(eventDetail).toBeDefined();
      expect(eventDetail.label).toBe('Test Icon Button');
      expect(eventDetail.pressed).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should require label prop for accessibility', async () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      const elementWithoutLabel = document.createElement('ag-icon-button-fx') as IconButtonFx;
      elementWithoutLabel.unicode = '×';
      document.body.appendChild(elementWithoutLabel);

      await elementWithoutLabel.updateComplete;

      expect(consoleWarnSpy).toHaveBeenCalled();

      elementWithoutLabel.remove();
      consoleWarnSpy.mockRestore();
    });

    it('should set aria-label from label prop', async () => {
      element.label = 'Close dialog';
      await element.updateComplete;

      const button = element.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-label')).toBe('Close dialog');
    });

    it('should hide icon from screen readers with aria-hidden', async () => {
      await element.updateComplete;

      const icon = element.shadowRoot?.querySelector('.unicode-icon');
      expect(icon?.getAttribute('aria-hidden')).toBe('true');
    });
  });
});
