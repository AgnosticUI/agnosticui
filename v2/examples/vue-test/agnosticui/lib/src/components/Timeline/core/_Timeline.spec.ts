// v2/lib/src/components/Timeline/core/_Timeline.spec.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { html, render } from 'lit';
import { AgTimeline, AgTimelineItem } from './_Timeline.js';

expect.extend(toHaveNoViolations);

// Register custom elements for testing
if (!customElements.get('ag-timeline')) {
  customElements.define('ag-timeline', AgTimeline);
}
if (!customElements.get('ag-timeline-item')) {
  customElements.define('ag-timeline-item', AgTimelineItem);
}

describe('AgTimeline', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Rendering', () => {
    it('should render with default props', async () => {
      const template = html`
        <ag-timeline>
          <ag-timeline-item>
            <span slot="ag-start">1938</span>
            <span slot="ag-marker">✓</span>
            <span slot="ag-end">Bill Tilden wins US National Championship</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await new Promise(resolve => setTimeout(resolve, 0));
      
      const timeline = container.querySelector('ag-timeline');
      expect(timeline).toBeTruthy();
      
      await timeline?.updateComplete;
      
      expect(timeline?.orientation).toBe('horizontal');
    });

    it('should render multiple timeline items', async () => {
      const template = html`
        <ag-timeline>
          <ag-timeline-item>
            <span slot="ag-start">1938</span>
            <span slot="ag-marker">✓</span>
            <span slot="ag-end">Bill Tilden</span>
          </ag-timeline-item>
          <ag-timeline-item>
            <span slot="ag-start">1969</span>
            <span slot="ag-marker">✓</span>
            <span slot="ag-end">Rod Laver wins second Grand Slam</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await new Promise(resolve => setTimeout(resolve, 0));
      
      const items = container.querySelectorAll('ag-timeline-item');
      expect(items.length).toBe(2);
    });

    it('should render with vertical orientation', async () => {
      const template = html`
        <ag-timeline orientation="vertical">
          <ag-timeline-item>
            <span slot="ag-start">1980</span>
            <span slot="ag-marker">✓</span>
            <span slot="ag-end">Bjorn Borg wins fifth consecutive Wimbledon</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await new Promise(resolve => setTimeout(resolve, 0));
      
      const timeline = container.querySelector('ag-timeline');
      await timeline?.updateComplete;
      
      expect(timeline?.orientation).toBe('vertical');
    });

    it('should render with variant styling', async () => {
      const template = html`
        <ag-timeline variant="primary">
          <ag-timeline-item>
            <span slot="ag-start">1950</span>
            <span slot="ag-marker">✓</span>
            <span slot="ag-end">Althea Gibson wins US National Championship</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await new Promise(resolve => setTimeout(resolve, 0));
      
      const timeline = container.querySelector('ag-timeline');
      await timeline?.updateComplete;
      
      expect(timeline?.variant).toBe('primary');
    });
  });

  describe('AgTimelineItem', () => {
    it('should render all three slots', async () => {
      const template = html`
        <ag-timeline>
          <ag-timeline-item>
            <span slot="ag-start">2017</span>
            <span slot="ag-marker">★</span>
            <span slot="ag-end">Serena Williams wins Australian Open</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      // Wait for components to be defined and connected
      await customElements.whenDefined('ag-timeline');
      await customElements.whenDefined('ag-timeline-item');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const item = container.querySelector('ag-timeline-item');
      expect(item).toBeTruthy();
      
      await item?.updateComplete;
      
      const startSlot = item?.shadowRoot?.querySelector('slot[name="ag-start"]');
      const markerSlot = item?.shadowRoot?.querySelector('slot[name="ag-marker"]');
      const endSlot = item?.shadowRoot?.querySelector('slot[name="ag-end"]');
      
      expect(startSlot).toBeTruthy();
      expect(markerSlot).toBeTruthy();
      expect(endSlot).toBeTruthy();
    });

    it('should mark first and last items', async () => {
      const template = html`
        <ag-timeline>
          <ag-timeline-item>
            <span slot="ag-end">First item</span>
          </ag-timeline-item>
          <ag-timeline-item>
            <span slot="ag-end">Middle item</span>
          </ag-timeline-item>
          <ag-timeline-item>
            <span slot="ag-end">Last item</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const items = container.querySelectorAll('ag-timeline-item');
      expect(items[0].hasAttribute('first')).toBe(true);
      expect(items[1].hasAttribute('first')).toBe(false);
      expect(items[2].hasAttribute('last')).toBe(true);
    });

    it('should support marker aria-label', async () => {
      const template = html`
        <ag-timeline>
          <ag-timeline-item marker-aria-label="Championship victory">
            <span slot="ag-start">1969</span>
            <span slot="ag-marker">🏆</span>
            <span slot="ag-end">Rod Laver completes Grand Slam</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await new Promise(resolve => setTimeout(resolve, 0));
      
      const item = container.querySelector('ag-timeline-item');
      await item?.updateComplete;
      
      expect(item?.markerAriaLabel).toBe('Championship victory');
    });
  });

  describe('Accessibility', () => {
    it('should use semantic list elements', async () => {
      const template = html`
        <ag-timeline aria-label="Tennis champions timeline">
          <ag-timeline-item>
            <span slot="ag-start">1938</span>
            <span slot="ag-end">Bill Tilden</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await customElements.whenDefined('ag-timeline');
      await customElements.whenDefined('ag-timeline-item');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const timeline = container.querySelector('ag-timeline');
      await timeline?.updateComplete;
      
      const ul = timeline?.shadowRoot?.querySelector('ul[role="list"]');
      expect(ul).toBeTruthy();
      
      const item = container.querySelector('ag-timeline-item');
      await item?.updateComplete;
      
      const li = item?.shadowRoot?.querySelector('li[role="listitem"]');
      expect(li).toBeTruthy();
    });

    it('should pass basic axe accessibility tests', async () => {
      const template = html`
        <ag-timeline aria-label="Tennis history">
          <ag-timeline-item marker-aria-label="Victory">
            <span slot="ag-start">1969</span>
            <span slot="ag-marker">✓</span>
            <span slot="ag-end">Rod Laver wins Grand Slam</span>
          </ag-timeline-item>
          <ag-timeline-item marker-aria-label="Championship">
            <span slot="ag-start">1980</span>
            <span slot="ag-marker">★</span>
            <span slot="ag-end">Bjorn Borg wins Wimbledon</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await customElements.whenDefined('ag-timeline');
      await customElements.whenDefined('ag-timeline-item');
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should mark connectors as decorative with aria-hidden', async () => {
      const template = html`
        <ag-timeline>
          <ag-timeline-item>
            <span slot="ag-end">Test item</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      await customElements.whenDefined('ag-timeline');
      await customElements.whenDefined('ag-timeline-item');
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const item = container.querySelector('ag-timeline-item');
      await item?.updateComplete;
      
      const connectors = item?.shadowRoot?.querySelectorAll('.connector[aria-hidden="true"]');
      expect(connectors?.length).toBeGreaterThan(0);
    });
  });

  describe('Variants', () => {
    const variants = ['primary', 'success', 'warning', 'danger', 'monochrome'] as const;
    
    variants.forEach(variant => {
      it(`should apply ${variant} variant`, async () => {
        const template = html`
          <ag-timeline variant=${variant}>
            <ag-timeline-item>
              <span slot="ag-end">Test</span>
            </ag-timeline-item>
          </ag-timeline>
        `;
        render(template, container);
        
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const item = container.querySelector('ag-timeline-item');
        expect(item?.getAttribute('variant')).toBe(variant);
      });
    });
  });

  describe('Compact mode', () => {
    it('should apply compact attribute', async () => {
      const template = html`
        <ag-timeline compact>
          <ag-timeline-item>
            <span slot="ag-end">Test</span>
          </ag-timeline-item>
        </ag-timeline>
      `;
      render(template, container);
      
      const timeline = container.querySelector('ag-timeline');
      expect(timeline?.hasAttribute('compact')).toBe(true);
    });
  });
});
