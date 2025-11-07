import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgLink } from './_Link';
import './Link';

describe('Link', () => {
  let element: AgLink;
  let host: HTMLElement;

  beforeEach(() => {
    host = document.createElement('div');
    document.body.appendChild(host);
  });

  afterEach(() => {
    host.remove();
  });

  it('renders with default props', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.textContent = 'Test Link';
    host.appendChild(element);
    await element.updateComplete;

    expect(element).toBeInstanceOf(AgLink);

    const anchor = element.shadowRoot?.querySelector('a');
    expect(anchor).toBeDefined();
  });

  it('renders with href attribute', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Test Link';
    host.appendChild(element);
    await element.updateComplete;

    const anchor = element.shadowRoot?.querySelector('a');
    expect(anchor?.getAttribute('href')).toBe('/test');
  });

  it('applies variant classes correctly - success', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.variant = 'success';
    element.href = '/test';
    element.textContent = 'Test';
    host.appendChild(element);
    await element.updateComplete;

    expect(element.getAttribute('variant')).toBe('success');
  });

  it('applies variant classes correctly - warning', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.variant = 'warning';
    element.href = '/test';
    element.textContent = 'Test';
    host.appendChild(element);
    await element.updateComplete;

    expect(element.getAttribute('variant')).toBe('warning');
  });

  it('applies variant classes correctly - danger', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.variant = 'danger';
    element.href = '/test';
    element.textContent = 'Test';
    host.appendChild(element);
    await element.updateComplete;

    expect(element.getAttribute('variant')).toBe('danger');
  });

  it('handles disabled state - renders span and adds aria-disabled', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.disabled = true;
    element.textContent = 'Disabled Link';
    host.appendChild(element);
    await element.updateComplete;

    // Should render a span instead of anchor when disabled
    const span = element.shadowRoot?.querySelector('span');
    const anchor = element.shadowRoot?.querySelector('a');

    expect(span).toBeDefined();
    expect(anchor).toBeNull();
    expect(span?.getAttribute('aria-disabled')).toBe('true');
    expect(span?.getAttribute('role')).toBe('link');
  });

  it('handles external links - adds rel and target attributes', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = 'https://example.com';
    element.external = true;
    element.textContent = 'External Link';
    host.appendChild(element);
    await element.updateComplete;

    const anchor = element.shadowRoot?.querySelector('a');
    expect(anchor?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(anchor?.getAttribute('target')).toBe('_blank');
  });

  it('handles isButton styling', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.isButton = true;
    element.textContent = 'Button Link';
    host.appendChild(element);
    await element.updateComplete;

    expect(element.hasAttribute('isButton')).toBe(true);
  });

  it('exposes CSS shadow part ag-link', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Test';
    host.appendChild(element);
    await element.updateComplete;

    const anchor = element.shadowRoot?.querySelector('[part="ag-link"]');
    expect(anchor).toBeDefined();
  });

  it('slotted content renders correctly', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Click Here';
    host.appendChild(element);
    await element.updateComplete;

    const slot = element.shadowRoot?.querySelector('slot');
    expect(slot).toBeDefined();
    expect(element.textContent?.trim()).toBe('Click Here');
  });

  it('click event fires on enabled link', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Click me';
    host.appendChild(element);
    await element.updateComplete;

    let clicked = false;
    element.onClick = () => { clicked = true; };

    const anchor = element.shadowRoot?.querySelector('a');
    anchor?.click();

    expect(clicked).toBe(true);
  });

  it('click event does not fire when disabled', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.disabled = true;
    element.textContent = 'Disabled';
    host.appendChild(element);
    await element.updateComplete;

    let clicked = false;
    element.onClick = () => { clicked = true; };

    const span = element.shadowRoot?.querySelector('span');
    span?.click();

    // onClick should not be called when disabled
    expect(clicked).toBe(false);
  });

  it('focus event works correctly', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Focus me';
    host.appendChild(element);
    await element.updateComplete;

    const focusSpy = vi.fn();
    element.addEventListener('focus', focusSpy);

    const anchor = element.shadowRoot?.querySelector('a');
    anchor?.focus();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('blur event works correctly', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Blur me';
    host.appendChild(element);
    await element.updateComplete;

    const blurSpy = vi.fn();
    element.addEventListener('blur', blurSpy);

    const anchor = element.shadowRoot?.querySelector('a');
    anchor?.focus();
    anchor?.blur();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('uses boolean attributes not string attributes', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.disabled = true;
    element.external = true;
    element.isButton = true;
    element.textContent = 'Test';
    host.appendChild(element);
    await element.updateComplete;

    // Boolean attributes should reflect as boolean, not as string "true"
    expect(element.disabled).toBe(true);
    expect(element.external).toBe(true);
    expect(element.isButton).toBe(true);
  });

  it('handles aria-label attribute', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.ariaLabel = 'Test Label';
    element.textContent = 'Icon';
    host.appendChild(element);
    await element.updateComplete;

    const anchor = element.shadowRoot?.querySelector('a');
    expect(anchor?.getAttribute('aria-label')).toBe('Test Label');
  });

  it('renders native <a> element for accessibility', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Link';
    host.appendChild(element);
    await element.updateComplete;

    const anchor = element.shadowRoot?.querySelector('a');
    expect(anchor?.tagName).toBe('A');
  });

  it('is keyboard navigable with Tab', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Link';
    host.appendChild(element);
    await element.updateComplete;

    const anchor = element.shadowRoot?.querySelector('a') as HTMLAnchorElement;

    // Native anchor elements are focusable by default
    expect(anchor.tabIndex).not.toBe(-1);
  });

  it('combines isButton with variants correctly', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.isButton = true;
    element.variant = 'success';
    element.textContent = 'Button Link';
    host.appendChild(element);
    await element.updateComplete;

    expect(element.hasAttribute('isButton')).toBe(true);
    expect(element.getAttribute('variant')).toBe('success');
  });

  it('has focus() method that delegates to internal anchor', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Link';
    host.appendChild(element);
    await element.updateComplete;

    expect(typeof element.focus).toBe('function');

    const anchor = element.shadowRoot?.querySelector('a');
    const focusSpy = vi.spyOn(anchor as HTMLElement, 'focus');

    element.focus();

    expect(focusSpy).toHaveBeenCalledOnce();
  });

  it('has blur() method that delegates to internal anchor', async () => {
    element = document.createElement('ag-link') as AgLink;
    element.href = '/test';
    element.textContent = 'Link';
    host.appendChild(element);
    await element.updateComplete;

    expect(typeof element.blur).toBe('function');

    const anchor = element.shadowRoot?.querySelector('a');
    const blurSpy = vi.spyOn(anchor as HTMLElement, 'blur');

    element.blur();

    expect(blurSpy).toHaveBeenCalledOnce();
  });
});
