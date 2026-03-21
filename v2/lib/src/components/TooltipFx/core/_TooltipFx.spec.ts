import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';
import { TooltipFx } from './TooltipFx';

expect.extend(toHaveNoViolations);

describe('TooltipFx', () => {
  let element: TooltipFx;

  beforeEach(() => {
    element = document.createElement('ag-tooltip-fx') as TooltipFx;
    element.content = 'Test tooltip content';
    const trigger = document.createElement('button');
    trigger.textContent = 'Hover me';
    element.appendChild(trigger);
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
      expect(element.tagName.toLowerCase()).toBe('ag-tooltip-fx');

      await element.updateComplete;
      const tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip).toBeDefined();
    });

    it('should inherit Tooltip functionality', async () => {
      await element.updateComplete;
      const tooltip = element.shadowRoot?.querySelector('#tooltip');
      expect(tooltip).toBeDefined();
    });

    it('should have default tooltip props', () => {
      expect(element.placement).toBe('top');
      expect(element.disabled).toBe(false);
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
    it('should apply fx class to tooltip element', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      const tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip?.classList.contains('ag-fx-pulse')).toBe(true);
    });

    it('should update fx class when fx prop changes', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      let tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip?.classList.contains('ag-fx-pulse')).toBe(true);

      element.fx = 'bounce';
      await element.updateComplete;

      tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip?.classList.contains('ag-fx-pulse')).toBe(false);
      expect(tooltip?.classList.contains('ag-fx-bounce')).toBe(true);
    });

    it('should remove old fx class when changing fx', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      element.fx = 'wobble';
      await element.updateComplete;

      const tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip?.classList.contains('ag-fx-pulse')).toBe(false);
      expect(tooltip?.classList.contains('ag-fx-wobble')).toBe(true);
    });

    it('should apply ag-fx-disabled class when fxDisabled is true', async () => {
      element.fxDisabled = true;
      await element.updateComplete;

      const tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip?.classList.contains('ag-fx-disabled')).toBe(true);
    });

    it('should remove ag-fx-disabled class when fxDisabled is false', async () => {
      element.fxDisabled = true;
      await element.updateComplete;

      element.fxDisabled = false;
      await element.updateComplete;

      const tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip?.classList.contains('ag-fx-disabled')).toBe(false);
    });
  });

  describe('FX Custom Properties', () => {
    it('should set --ag-fx-duration custom property based on fxSpeed', async () => {
      element.fxSpeed = 'lg';
      await element.updateComplete;

      const tooltip = element.shadowRoot?.querySelector('.tooltip') as HTMLElement;
      const durationValue = tooltip?.style.getPropertyValue('--ag-fx-duration');
      expect(durationValue).toBe('var(--ag-fx-duration-lg)');
    });

    it('should set --ag-fx-ease custom property based on fxEase', async () => {
      element.fxEase = 'spring-md';
      await element.updateComplete;

      const tooltip = element.shadowRoot?.querySelector('.tooltip') as HTMLElement;
      const easeValue = tooltip?.style.getPropertyValue('--ag-fx-ease');
      expect(easeValue).toBe('var(--ag-fx-ease-spring-md)');
    });

    it('should update custom properties when fxSpeed changes', async () => {
      element.fxSpeed = 'sm';
      await element.updateComplete;

      element.fxSpeed = 'xl';
      await element.updateComplete;

      const tooltip = element.shadowRoot?.querySelector('.tooltip') as HTMLElement;
      const durationValue = tooltip?.style.getPropertyValue('--ag-fx-duration');
      expect(durationValue).toBe('var(--ag-fx-duration-xl)');
    });

    it('should update custom properties when fxEase changes', async () => {
      element.fxEase = 'ease-in';
      await element.updateComplete;

      element.fxEase = 'bounce';
      await element.updateComplete;

      const tooltip = element.shadowRoot?.querySelector('.tooltip') as HTMLElement;
      const easeValue = tooltip?.style.getPropertyValue('--ag-fx-ease');
      expect(easeValue).toBe('var(--ag-fx-ease-bounce)');
    });
  });

  describe('FX Effects Support', () => {
    const fxEffects = [
      'pulse',
      'bounce',
      'jelly',
      'shimmer',
      'glow',
      'flip',
      'ripple',
      'highlight-sweep',
      'press-pop',
      'slide-in',
    ];

    fxEffects.forEach((effect) => {
      it(`should support ${effect} effect`, async () => {
        element.fx = effect;
        await element.updateComplete;

        const tooltip = element.shadowRoot?.querySelector('.tooltip');
        expect(tooltip?.classList.contains(`ag-fx-${effect}`)).toBe(true);
      });
    });
  });

  describe('Integration with Tooltip Props', () => {
    it('should work with placement prop', async () => {
      element.placement = 'bottom';
      element.fx = 'slide-in';
      await element.updateComplete;

      expect(element.placement).toBe('bottom');
      const tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip?.classList.contains('ag-fx-slide-in')).toBe(true);
    });

    it('should work with disabled prop', async () => {
      element.disabled = true;
      element.fx = 'pulse';
      await element.updateComplete;

      expect(element.disabled).toBe(true);
      const tooltip = element.shadowRoot?.querySelector('.tooltip');
      expect(tooltip?.classList.contains('ag-fx-pulse')).toBe(true);
    });

    it('should work with content prop', async () => {
      element.content = 'Updated content';
      await element.updateComplete;
      expect(element.content).toBe('Updated content');
    });
  });

  describe('Events', () => {
    it('should fire show event when tooltip is shown', async () => {
      await element.updateComplete;

      let showEventFired = false;
      element.addEventListener('show', () => {
        showEventFired = true;
      });

      element.show();
      await element.updateComplete;

      expect(showEventFired).toBe(true);
    });

    it('should fire hide event when tooltip is hidden', async () => {
      await element.updateComplete;
      element.show();
      await element.updateComplete;

      let hideEventFired = false;
      element.addEventListener('hide', () => {
        hideEventFired = true;
      });

      element.hide();
      await element.updateComplete;

      expect(hideEventFired).toBe(true);
    });
  });
});
