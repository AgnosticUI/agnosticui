import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { ScrollProgress } from './ScrollProgress';

// Register the custom element
if (!customElements.get('ag-scroll-progress')) {
  customElements.define('ag-scroll-progress', ScrollProgress);
}

describe('ScrollProgress Component', () => {
  let element: ScrollProgress;

  beforeEach(() => {
    // Reset scroll position
    window.scrollTo(0, 0);
  });

  afterEach(() => {
    element?.remove();
  });

  it('should render with default props (bar mode)', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    document.body.appendChild(element);
    await element.updateComplete;

    expect(element.mode).toBe('bar');
    expect(element.orientation).toBe('top');

    const progressEl = element.shadowRoot?.querySelector('ag-progress');
    expect(progressEl).not.toBeNull();
  });

  it('should render in dot-trail mode', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'dot-trail';
    element.dots = 5;
    document.body.appendChild(element);
    await element.updateComplete;

    const dots = element.shadowRoot?.querySelectorAll('ag-badge[dot]');
    expect(dots?.length).toBe(5);
  });

  it('should render in badge mode', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'badge';
    document.body.appendChild(element);
    await element.updateComplete;

    const badge = element.shadowRoot?.querySelector('ag-badge');
    expect(badge).not.toBeNull();
    expect(badge?.textContent?.trim()).toMatch(/\d+%/);
  });

  it('should render in ring mode', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'ring';
    document.body.appendChild(element);
    await element.updateComplete;

    const ring = element.shadowRoot?.querySelector('ag-progress-ring');
    expect(ring).not.toBeNull();
  });

  it('should apply custom dots count in dot-trail mode', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'dot-trail';
    element.dots = 7;
    document.body.appendChild(element);
    await element.updateComplete;

    const dots = element.shadowRoot?.querySelectorAll('ag-badge[dot]');
    expect(dots?.length).toBe(7);
  });

  it('should apply badge variant', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'badge';
    element.badgeVariant = 'success';
    document.body.appendChild(element);
    await element.updateComplete;

    const badge = element.shadowRoot?.querySelector('ag-badge');
    expect(badge?.getAttribute('variant')).toBe('success');
  });

  it('should apply ring size and variant', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'ring';
    element.ringSize = 64;
    element.ringVariant = 'danger';
    document.body.appendChild(element);
    await element.updateComplete;

    const ring = element.shadowRoot?.querySelector('ag-progress-ring');
    expect(ring?.getAttribute('variant')).toBe('danger');
  });

  it('should expose CSS shadow parts', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'bar';
    document.body.appendChild(element);
    await element.updateComplete;

    const progressBar = element.shadowRoot?.querySelector('[part="scroll-progress-bar"]');
    expect(progressBar).not.toBeNull();
  });

  it('should set orientation attribute for bar mode', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'bar';
    element.orientation = 'bottom';
    document.body.appendChild(element);
    await element.updateComplete;

    expect(element.getAttribute('orientation')).toBe('bottom');
  });

  it('should respect precision for percentage display', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'badge';
    element.precision = 1;
    document.body.appendChild(element);
    await element.updateComplete;

    const badge = element.shadowRoot?.querySelector('ag-badge');
    expect(badge).not.toBeNull();
    // Should show one decimal place (e.g., "0.0%" instead of "0%")
    expect(badge?.textContent?.trim()).toMatch(/^\d+\.\d%$/);
  });

  it('should default to integer precision (0 decimals)', async () => {
    element = document.createElement('ag-scroll-progress') as ScrollProgress;
    element.mode = 'badge';
    document.body.appendChild(element);
    await element.updateComplete;

    const badge = element.shadowRoot?.querySelector('ag-badge');
    expect(badge).not.toBeNull();
    // Should show no decimal places (e.g., "0%")
    expect(badge?.textContent?.trim()).toMatch(/^\d+%$/);
  });
});
