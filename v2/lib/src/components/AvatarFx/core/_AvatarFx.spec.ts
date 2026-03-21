import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';
import { AvatarFx } from './AvatarFx';

expect.extend(toHaveNoViolations);

describe('AvatarFx', () => {
  let element: AvatarFx;

  beforeEach(() => {
    element = document.createElement('ag-avatar-fx') as AvatarFx;
    element.text = 'AB';
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
      expect(element.tagName.toLowerCase()).toBe('ag-avatar-fx');

      await element.updateComplete;
      const avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar).toBeDefined();
    });

    it('should inherit Avatar functionality', async () => {
      await element.updateComplete;
      const avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar?.tagName.toLowerCase()).toBe('div');
    });

    it('should render text content', async () => {
      await element.updateComplete;
      const avatarText = element.shadowRoot?.querySelector('.avatar-text');
      expect(avatarText?.textContent).toBe('AB');
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
    it('should apply fx class to avatar element', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar?.classList.contains('ag-fx-pulse')).toBe(true);
    });

    it('should update fx class when fx prop changes', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      let avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar?.classList.contains('ag-fx-pulse')).toBe(true);

      element.fx = 'bounce';
      await element.updateComplete;

      avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar?.classList.contains('ag-fx-pulse')).toBe(false);
      expect(avatar?.classList.contains('ag-fx-bounce')).toBe(true);
    });

    it('should remove old fx class when changing fx', async () => {
      element.fx = 'pulse';
      await element.updateComplete;

      element.fx = 'wobble';
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar?.classList.contains('ag-fx-pulse')).toBe(false);
      expect(avatar?.classList.contains('ag-fx-wobble')).toBe(true);
    });

    it('should apply ag-fx-disabled class when fxDisabled is true', async () => {
      element.fxDisabled = true;
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar?.classList.contains('ag-fx-disabled')).toBe(true);
    });

    it('should remove ag-fx-disabled class when fxDisabled is false', async () => {
      element.fxDisabled = true;
      await element.updateComplete;

      element.fxDisabled = false;
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar?.classList.contains('ag-fx-disabled')).toBe(false);
    });
  });

  describe('FX Custom Properties', () => {
    it('should set --ag-fx-duration custom property based on fxSpeed', async () => {
      element.fxSpeed = 'lg';
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar') as HTMLElement;
      const durationValue = avatar?.style.getPropertyValue('--ag-fx-duration');
      expect(durationValue).toBe('var(--ag-fx-duration-lg)');
    });

    it('should set --ag-fx-ease custom property based on fxEase', async () => {
      element.fxEase = 'spring-md';
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar') as HTMLElement;
      const easeValue = avatar?.style.getPropertyValue('--ag-fx-ease');
      expect(easeValue).toBe('var(--ag-fx-ease-spring-md)');
    });

    it('should update custom properties when fxSpeed changes', async () => {
      element.fxSpeed = 'sm';
      await element.updateComplete;

      element.fxSpeed = 'xl';
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar') as HTMLElement;
      const durationValue = avatar?.style.getPropertyValue('--ag-fx-duration');
      expect(durationValue).toBe('var(--ag-fx-duration-xl)');
    });

    it('should update custom properties when fxEase changes', async () => {
      element.fxEase = 'ease-in';
      await element.updateComplete;

      element.fxEase = 'bounce';
      await element.updateComplete;

      const avatar = element.shadowRoot?.querySelector('.avatar') as HTMLElement;
      const easeValue = avatar?.style.getPropertyValue('--ag-fx-ease');
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

        const avatar = element.shadowRoot?.querySelector('.avatar');
        expect(avatar?.classList.contains(`ag-fx-${effect}`)).toBe(true);
      });
    });
  });

  describe('Integration with Avatar Props', () => {
    it('should work with variant prop', async () => {
      element.variant = 'info';
      element.fx = 'pulse';
      await element.updateComplete;

      expect(element.variant).toBe('info');
      const avatar = element.shadowRoot?.querySelector('.avatar');
      expect(avatar?.classList.contains('ag-fx-pulse')).toBe(true);
    });

    it('should work with size prop', async () => {
      element.size = 'lg';
      element.fx = 'bounce';
      await element.updateComplete;

      expect(element.size).toBe('lg');
    });

    it('should work with shape prop', async () => {
      element.shape = 'rounded';
      element.fx = 'pulse';
      await element.updateComplete;

      expect(element.shape).toBe('rounded');
    });

    it('should render image when imgSrc is provided', async () => {
      element.imgSrc = 'https://example.com/avatar.jpg';
      element.imgAlt = 'Test avatar';
      await element.updateComplete;

      const img = element.shadowRoot?.querySelector('.avatar-image');
      expect(img).toBeDefined();
    });
  });
});
