import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CloseButton } from './CloseButton';

describe('CloseButton', () => {
  let element: CloseButton;

  beforeEach(() => {
    element = new CloseButton();
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('renders with default props', async () => {
    await element.updateComplete;

    expect(element).toBeDefined();
    expect(element.label).toBe('Close');
    expect(element.size).toBe('md');
    expect(element.position).toBeUndefined();
  });

  it('renders button element with correct aria-label', async () => {
    element.label = 'Close dialog';
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('button');
    expect(button).toBeDefined();
    expect(button?.getAttribute('aria-label')).toBe('Close dialog');
  });

  it('renders an SVG icon inside the button', async () => {
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('button');
    const svg = button?.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.querySelector('path')).not.toBeNull();
  });


  it('applies size classes', async () => {
    // Small size
    element.size = 'sm';
    await element.updateComplete;
    let button = element.shadowRoot?.querySelector('button');
    expect(button?.className).toContain('close-button-sm');

    // Medium size
    element.size = 'md';
    await element.updateComplete;
    button = element.shadowRoot?.querySelector('button');
    expect(button?.className).toContain('close-button-md');

    // Large size
    element.size = 'lg';
    await element.updateComplete;
    button = element.shadowRoot?.querySelector('button');
    expect(button?.className).toContain('close-button-lg');
  });

  it('reflects position attribute', async () => {
    element.position = 'top-end';
    await element.updateComplete;

    expect(element.getAttribute('position')).toBe('top-end');
    expect(element.position).toBe('top-end');
  });

  it('dispatches close-button-click event when clicked', async () => {
    await element.updateComplete;

    const eventSpy = vi.fn();
    element.addEventListener('close-button-click', eventSpy);

    const button = element.shadowRoot?.querySelector('button');
    button?.click();

    expect(eventSpy).toHaveBeenCalledOnce();
  });

  it('stops propagation of click event', async () => {
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('button') as HTMLButtonElement;

    const event = new MouseEvent('click', { bubbles: true });
    const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');

    // Trigger the internal click handler by dispatching the event
    button.dispatchEvent(event);

    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  it('exposes ag-close-button CSS part', async () => {
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('part')).toBe('ag-close-button');
  });

  it('uses correct CSS attribute selectors for position', () => {
    const styleContent = CloseButton.styles.toString();

    // Should use [position] not [position="true"]
    expect(styleContent).toContain(':host([position])');
    expect(styleContent).toContain(':host([position="top-start"])');
    expect(styleContent).toContain(':host([position="top-end"])');
    expect(styleContent).toContain(':host([position="bottom-start"])');
    expect(styleContent).toContain(':host([position="bottom-end"])');
  });

  it('uses design tokens for styling', () => {
    const styleContent = CloseButton.styles.toString();

    expect(styleContent).toContain('var(--ag-text-secondary)');
    expect(styleContent).toContain('var(--ag-text-primary)');
    expect(styleContent).toContain('var(--ag-background-secondary)');
    expect(styleContent).toContain('var(--ag-space-');
    expect(styleContent).toContain('var(--ag-radius-');
    expect(styleContent).toContain('var(--ag-focus-width)');
    expect(styleContent).toContain('var(--ag-focus)');
    expect(styleContent).toContain('var(--ag-motion-fast)');
  });
});
