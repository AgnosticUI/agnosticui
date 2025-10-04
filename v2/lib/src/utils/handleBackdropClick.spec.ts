import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isBackdropClick } from './handleBackdropClick';

describe('isBackdropClick', () => {
  let shadowHost: HTMLElement;
  let shadowRoot: ShadowRoot;
  let lightDomContainer: HTMLElement;

  beforeEach(() => {
    shadowHost = document.createElement('div');
    shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    lightDomContainer = document.createElement('div');
    document.body.appendChild(shadowHost);
    document.body.appendChild(lightDomContainer);
  });

  afterEach(() => {
    document.body.removeChild(shadowHost);
    document.body.removeChild(lightDomContainer);
  });

  it('should return false when shadowRoot is null', () => {
    const event = new MouseEvent('click');
    const result = isBackdropClick(event, null, '.content');
    expect(result).toBe(false);
  });

  it('should return true when clicking on backdrop (not on content)', () => {
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);

    // Click on backdrop element
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: backdrop, enumerable: true });

    const result = isBackdropClick(event, shadowRoot, '.content', lightDomContainer);
    expect(result).toBe(true);
  });

  it('should return false when clicking on shadow DOM content', () => {
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);

    // Click on content element
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: content, enumerable: true });

    const result = isBackdropClick(event, shadowRoot, '.content', lightDomContainer);
    expect(result).toBe(false);
  });

  it('should return false when clicking on child of shadow DOM content', () => {
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    const button = document.createElement('button');
    button.textContent = 'Click me';
    content.appendChild(button);
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);

    // Click on button inside content
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: button, enumerable: true });

    const result = isBackdropClick(event, shadowRoot, '.content', lightDomContainer);
    expect(result).toBe(false);
  });

  it('should return false when clicking on light DOM slotted content', () => {
    const slottedElement = document.createElement('div');
    slottedElement.textContent = 'Slotted content';
    lightDomContainer.appendChild(slottedElement);

    // Click on slotted element
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: slottedElement, enumerable: true });

    const result = isBackdropClick(event, shadowRoot, '.content', lightDomContainer);
    expect(result).toBe(false);
  });

  it('should return false when clicking on child of slotted content', () => {
    const slottedElement = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = 'Slotted button';
    slottedElement.appendChild(button);
    lightDomContainer.appendChild(slottedElement);

    // Click on button inside slotted content
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: button, enumerable: true });

    const result = isBackdropClick(event, shadowRoot, '.content', lightDomContainer);
    expect(result).toBe(false);
  });

  it('should work without light DOM container parameter', () => {
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);

    // Click on backdrop (no light DOM container provided)
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: backdrop, enumerable: true });

    const result = isBackdropClick(event, shadowRoot, '.content');
    expect(result).toBe(true);
  });

  it('should handle content selector that does not match any element', () => {
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    shadowRoot.appendChild(backdrop);

    // Click on backdrop with non-matching selector
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: backdrop, enumerable: true });

    const result = isBackdropClick(event, shadowRoot, '.nonexistent', lightDomContainer);
    expect(result).toBe(true);
  });

  it('should distinguish between backdrop and content areas correctly', () => {
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    const header = document.createElement('div');
    header.className = 'header';
    const footer = document.createElement('div');
    footer.className = 'footer';

    content.appendChild(header);
    content.appendChild(footer);
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);

    // Click on backdrop - should be true
    let event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: backdrop, enumerable: true });
    expect(isBackdropClick(event, shadowRoot, '.content', lightDomContainer)).toBe(true);

    // Click on content - should be false
    event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: content, enumerable: true });
    expect(isBackdropClick(event, shadowRoot, '.content', lightDomContainer)).toBe(false);

    // Click on header inside content - should be false
    event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: header, enumerable: true });
    expect(isBackdropClick(event, shadowRoot, '.content', lightDomContainer)).toBe(false);
  });
});
