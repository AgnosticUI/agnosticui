// ag-progress-ring.spec.ts
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AgProgressRing } from './AgProgressRing.js';

expect.extend(toHaveNoViolations);

describe('ag-progress-ring', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.textContent = '';
    vi.restoreAllMocks();
  });

  it('defines the custom element', () => {
    expect(customElements.get('ag-progress-ring')).toBe(AgProgressRing);
  });

  it('renders with default values (0%)', async () => {
    const el = document.createElement('ag-progress-ring') as AgProgressRing;
    container.appendChild(el);
    await el.updateComplete; // Ensure first render is done

    const root = el.shadowRoot!.querySelector('[part="ag-progress-ring"]')!;
    const indicator = el.shadowRoot!.querySelector('.indicator') as SVGCircleElement;
    const label = el.shadowRoot!.querySelector('.label')!;

    expect(root.getAttribute('role')).toBe('progressbar');
    expect(root.getAttribute('aria-valuenow')).toBe('0');
    expect(indicator.style.strokeDashoffset).not.toBe(''); // Just check it calculated something
    expect(label.textContent).toContain('0%');
  });

  it('updates value and clamps range', async () => {
    const el = document.createElement('ag-progress-ring') as AgProgressRing;
    container.appendChild(el);

    el.value = 75;
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.label')!.textContent).toContain('75%');
    expect(el.getAttribute('value')).toBe('75'); // Reflects

    // Test Clamping
    el.value = 150;
    await el.updateComplete;
    expect(el.value).toBe(100);
    expect(el.shadowRoot!.querySelector('[role="progressbar"]')?.getAttribute('aria-valuenow')).toBe('100');
  });

  it('reflects size and variant attributes', async () => {
    const el = document.createElement('ag-progress-ring') as AgProgressRing;
    container.appendChild(el);

    el.size = 'small';
    el.variant = 'success';
    await el.updateComplete;

    expect(el).toHaveAttribute('size', 'small');
    expect(el).toHaveAttribute('variant', 'success');

    // Robust Check: Verify the CSS variable *changed* to contain the expected token
    // rather than matching the exact string "var(--ag-success)".
    const computed = getComputedStyle(el);
    expect(computed.getPropertyValue('--ag-progress-ring-indicator-color')).toContain('success');
  });

  it('renders slotted content', async () => {
    const el = document.createElement('ag-progress-ring') as AgProgressRing;
    el.innerHTML = '<span class="icon">🚀</span>';
    container.appendChild(el);
    await el.updateComplete;

    const slot = el.shadowRoot!.querySelector('slot')!;
    const nodes = slot.assignedNodes();
    expect(nodes[0].textContent).toBe('🚀');
  });

  it('respects no-animation attribute', async () => {
    const el = document.createElement('ag-progress-ring') as AgProgressRing;
    container.appendChild(el);
    
    // Check default state first
    const indicator = el.shadowRoot!.querySelector('.indicator')!;
    // JSDOM usually returns "" for complex transitions, checking if it is NOT none is safer
    // Or we simply check the attribute logic if JSDOM is being stubborn
    
    el.noAnimation = true;
    await el.updateComplete;
    expect(el).toHaveAttribute('no-animation');
    
    // In JSDOM, this usually works if the CSS is parsed correctly
    expect(getComputedStyle(indicator).transition).toBe('none');
  });

  it('respects prefers-reduced-motion', async () => {
    // 1. Mock the media query to be true
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const el = document.createElement('ag-progress-ring') as AgProgressRing;
    container.appendChild(el);
    await el.updateComplete;

    const indicator = el.shadowRoot!.querySelector('.indicator')!;
    expect(getComputedStyle(indicator).transition).toBe('none');
  });

  it('is accessible', async () => {
    const el = document.createElement('ag-progress-ring') as AgProgressRing;
    el.value = 50;
    el.label = "Upload status";
    container.appendChild(el);
    await el.updateComplete;

    const results = await axe(el);
    expect(results).toHaveNoViolations();
  });
});
