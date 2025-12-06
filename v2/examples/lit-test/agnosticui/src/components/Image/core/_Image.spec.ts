import { describe, it, expect, vi } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { html, render } from 'lit';
import { AgImage } from './Image.js';
import type { AgImageSource } from './Image.js';

expect.extend(toHaveNoViolations);

// Helper to create and render a component with proper Lit lifecycle
async function fixture<T extends HTMLElement>(template: ReturnType<typeof html>): Promise<T> {
  const container = document.createElement('div');
  document.body.appendChild(container);
  render(template, container);
  const element = container.firstElementChild as T;
  
  // Wait for custom element to be defined
  const tagName = element.tagName.toLowerCase();
  if (!customElements.get(tagName)) {
    throw new Error(`Custom element ${tagName} is not defined`);
  }
  
  // Wait for initial render to complete
  if ('updateComplete' in element) {
    await (element as any).updateComplete;
  }
  
  return element;
}

describe('AgImage', () => {
  // ──────────────────────────────────────────────────────────────
  // Basic Rendering
  // ──────────────────────────────────────────────────────────────
  describe('Basic Rendering', () => {
    it('renders with required props', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test-image.jpg" alt="Test image"></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      expect(img).toBeTruthy();
      expect(img?.src).toContain('/test-image.jpg');
      expect(img?.alt).toBe('Test image');
    });

    it('sets default loading to lazy', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      expect(element.loading).toBe('lazy');
      const img = element.shadowRoot?.querySelector('img');
      expect(img?.loading).toBe('lazy');
    });

    it('sets default object-fit to cover', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      expect(element.fit).toBe('cover');
      const computedFit = element.style.getPropertyValue('--ag-image-fit');
      expect(computedFit).toBe('cover');
    });

    it('sets default position to center', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      expect(element.position).toBe('center');
      const computedPosition = element.style.getPropertyValue('--ag-image-position');
      expect(computedPosition).toBe('center');
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Aspect Ratio & Dimensions
  // ──────────────────────────────────────────────────────────────
  describe('Aspect Ratio & Dimensions', () => {
    it('auto-calculates aspect ratio from width and height', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/test.jpg" 
          alt="Test"
          .width=${1200}
          .height=${800}>
        </ag-image>
      `);

      expect(element.style.aspectRatio).toBe('1200 / 800');
      expect(element.style.width).toBe('1200px');
      expect(element.style.height).toBe('800px');
    });

    it('uses explicit aspectRatio over auto-calculated', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/test.jpg" 
          alt="Test"
          .width=${1200}
          .height=${800}
          aspect-ratio="16/9">
        </ag-image>
      `);

      // CSS normalizes aspect-ratio with spaces, so check for normalized form
      expect(element.style.aspectRatio).toBe('16 / 9');
    });

    it('sets width and height attributes on img element', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/test.jpg" 
          alt="Test"
          .width=${800}
          .height=${600}>
        </ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      expect(img?.getAttribute('width')).toBe('800');
      expect(img?.getAttribute('height')).toBe('600');
    });

    it('does not set aspect ratio if width/height not provided', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      expect(element.style.aspectRatio).toBe('');
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Responsive Images (Picture Element)
  // ──────────────────────────────────────────────────────────────
  describe('Responsive Images', () => {
    it('renders picture element with sources', async () => {
      const sources: AgImageSource[] = [
        { srcset: '/image-large.webp', type: 'image/webp', media: '(min-width: 1024px)' },
        { srcset: '/image-large.jpg', media: '(min-width: 1024px)' },
        { srcset: '/image-small.webp', type: 'image/webp' },
      ];

      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/image-fallback.jpg" 
          alt="Test"
          .sources=${sources}>
        </ag-image>
      `);

      const picture = element.shadowRoot?.querySelector('picture');
      expect(picture).toBeTruthy();

      const sourceElements = picture?.querySelectorAll('source');
      expect(sourceElements?.length).toBe(3);
      expect(sourceElements?.[0].srcset).toBe('/image-large.webp');
      expect(sourceElements?.[0].type).toBe('image/webp');
      expect(sourceElements?.[0].media).toBe('(min-width: 1024px)');
    });

    it('renders img without picture when no sources', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      const picture = element.shadowRoot?.querySelector('picture');
      expect(picture).toBeFalsy();

      const img = element.shadowRoot?.querySelector('img');
      expect(img).toBeTruthy();
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Loading States
  // ──────────────────────────────────────────────────────────────
  describe('Loading States', () => {
    it('shows placeholder during loading', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      const placeholder = element.shadowRoot?.querySelector('[part="ag-placeholder"]');
      expect(placeholder).toBeTruthy();
      expect(placeholder?.textContent?.trim()).toBe('Loading…');
    });

    it('hides placeholder after load', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      // Simulate image load
      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('load'));
      await element.updateComplete;

      const placeholder = element.shadowRoot?.querySelector('[part="ag-placeholder"]');
      expect(placeholder).toBeFalsy();
    });

    it('supports custom placeholder content via slot', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test">
          <div slot="placeholder">Custom loading...</div>
        </ag-image>
      `);

      const placeholder = element.shadowRoot?.querySelector('[part="ag-placeholder"]');
      const slot = placeholder?.querySelector('slot[name="placeholder"]');
      expect(slot).toBeTruthy();
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Error Handling
  // ──────────────────────────────────────────────────────────────
  describe('Error Handling', () => {
    it('shows error state when image fails to load', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/invalid.jpg" alt="Test"></ag-image>
      `);

      // Simulate image error
      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('error'));
      await element.updateComplete;

      const errorOverlay = element.shadowRoot?.querySelector('[part="ag-error"]');
      expect(errorOverlay).toBeTruthy();
      expect(errorOverlay?.textContent?.trim()).toBe('Failed to load image');
    });

    it('switches to fallbackSrc on error', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/invalid.jpg" 
          alt="Test"
          fallback-src="/fallback.jpg">
        </ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      expect(img?.src).toContain('/invalid.jpg');

      // Simulate image error
      img?.dispatchEvent(new Event('error'));
      await element.updateComplete;

      expect(img?.src).toContain('/fallback.jpg');
    });

    it('supports custom error content via slot', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/invalid.jpg" alt="Test">
          <div slot="error">Custom error message</div>
        </ag-image>
      `);

      // Simulate image error
      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('error'));
      await element.updateComplete;

      const errorOverlay = element.shadowRoot?.querySelector('[part="ag-error"]');
      const slot = errorOverlay?.querySelector('slot[name="error"]');
      expect(slot).toBeTruthy();
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Events
  // ──────────────────────────────────────────────────────────────
  describe('Events', () => {
    it('dispatches ag-load event when image loads', async () => {
      const loadSpy = vi.fn();
      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/test.jpg" 
          alt="Test"
          @ag-load=${loadSpy}>
        </ag-image>
      `);

      // Simulate image load
      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('load'));
      await element.updateComplete;

      expect(loadSpy).toHaveBeenCalledOnce();
    });

    it('dispatches ag-error event when image fails', async () => {
      const errorSpy = vi.fn();
      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/invalid.jpg" 
          alt="Test"
          @ag-error=${errorSpy}>
        </ag-image>
      `);

      // Simulate image error
      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('error'));
      await element.updateComplete;

      expect(errorSpy).toHaveBeenCalledOnce();
    });

    it('ag-load event bubbles and is composed', async () => {
      const loadSpy = vi.fn();
      document.body.addEventListener('ag-load', loadSpy);

      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('load'));
      await element.updateComplete;

      expect(loadSpy).toHaveBeenCalledOnce();
      document.body.removeEventListener('ag-load', loadSpy);
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Fade Transition
  // ──────────────────────────────────────────────────────────────
  describe('Fade Transition', () => {
    it('applies fade attribute when fade prop is true', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test" .fade=${true}></ag-image>
      `);

      expect(element.hasAttribute('fade')).toBe(true);
    });

    it('applies loaded class to img after load when fade is enabled', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test" .fade=${true}></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      expect(img?.classList.contains('loaded')).toBe(false);

      img?.dispatchEvent(new Event('load'));
      await element.updateComplete;

      expect(img?.classList.contains('loaded')).toBe(true);
    });

    it('respects custom duration prop', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/test.jpg" 
          alt="Test" 
          .fade=${true}
          .duration=${500}>
        </ag-image>
      `);

      expect(element.duration).toBe(500);
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Display Properties
  // ──────────────────────────────────────────────────────────────
  describe('Display Properties', () => {
    it('applies object-fit property', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test" .fit=${'contain'}></ag-image>
      `);

      const computedFit = element.style.getPropertyValue('--ag-image-fit');
      expect(computedFit).toBe('contain');
    });

    it('applies object-position property', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image 
          src="/test.jpg" 
          alt="Test" 
          .position=${'top left'}>
        </ag-image>
      `);

      const computedPosition = element.style.getPropertyValue('--ag-image-position');
      expect(computedPosition).toBe('top left');
    });

    it('supports all object-fit values', async () => {
      const fitValues: Array<'cover' | 'contain' | 'fill' | 'none' | 'scale-down'> = [
        'cover',
        'contain',
        'fill',
        'none',
        'scale-down',
      ];

      for (const fitValue of fitValues) {
        const element = await fixture<AgImage>(html`
          <ag-image src="/test.jpg" alt="Test" .fit=${fitValue}></ag-image>
        `);

        expect(element.fit).toBe(fitValue);
      }
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Loading Attribute
  // ──────────────────────────────────────────────────────────────
  describe('Loading Attribute', () => {
    it('supports eager loading', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test" .loading=${'eager'}></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      expect(img?.loading).toBe('eager');
    });

    it('applies decoding="async" by default', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      expect(img?.decoding).toBe('async');
    });
  });

  // ──────────────────────────────────────────────────────────────
  // CSS Shadow Parts
  // ──────────────────────────────────────────────────────────────
  describe('CSS Shadow Parts', () => {
    it('exposes ag-img part', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('[part="ag-img"]');
      expect(img).toBeTruthy();
    });

    it('exposes ag-placeholder part', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      const placeholder = element.shadowRoot?.querySelector('[part="ag-placeholder"]');
      expect(placeholder).toBeTruthy();
    });

    it('exposes ag-error part', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/invalid.jpg" alt="Test"></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('error'));
      await element.updateComplete;

      const errorPart = element.shadowRoot?.querySelector('[part="ag-error"]');
      expect(errorPart).toBeTruthy();
    });
  });

  // ──────────────────────────────────────────────────────────────
  // State Management
  // ──────────────────────────────────────────────────────────────
  describe('State Management', () => {
    it('resets loaded/errored state when src changes', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test1.jpg" alt="Test"></ag-image>
      `);

      // Load first image
      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('load'));
      await element.updateComplete;

      expect(img?.classList.contains('loaded')).toBe(true);

      // Change src
      element.src = '/test2.jpg';
      await element.updateComplete;

      // Should show placeholder again
      const placeholder = element.shadowRoot?.querySelector('[part="ag-placeholder"]');
      expect(placeholder).toBeTruthy();
    });
  });

  // ──────────────────────────────────────────────────────────────
  // Accessibility
  // ──────────────────────────────────────────────────────────────
  describe('Accessibility', () => {
    it('requires alt text', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Description of image"></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      expect(img?.alt).toBe('Description of image');
    });

    it('has no accessibility violations', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test image"></ag-image>
      `);

      const results = await axe(element);
      expect(results).toHaveNoViolations();
    });

    it('error overlay has role="alert"', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/invalid.jpg" alt="Test"></ag-image>
      `);

      const img = element.shadowRoot?.querySelector('img');
      img?.dispatchEvent(new Event('error'));
      await element.updateComplete;

      const errorOverlay = element.shadowRoot?.querySelector('[part="ag-error"]');
      expect(errorOverlay?.getAttribute('role')).toBe('alert');
    });

    it('placeholder has aria-label', async () => {
      const element = await fixture<AgImage>(html`
        <ag-image src="/test.jpg" alt="Test"></ag-image>
      `);

      const placeholder = element.shadowRoot?.querySelector('[part="ag-placeholder"]');
      expect(placeholder?.getAttribute('aria-label')).toBe('Image loading');
    });
  });
});
