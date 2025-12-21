import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isBackdropClick } from './handleBackdropClick';

describe('isBackdropClick', () => {
  let testContainer: HTMLElement;

  beforeEach(() => {
    testContainer = document.createElement('div');
    document.body.appendChild(testContainer);
  });

  afterEach(() => {
    document.body.removeChild(testContainer);
  });

  it('should return false when shadowRoot is null', () => {
    const event = new MouseEvent('click');
    const result = isBackdropClick(event, null, '.content');
    expect(result).toBe(false);
  });

  it('should return false if the content container is not found', () => {
    const shadowHost = document.createElement('div');
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = '<div class="backdrop"></div>';
    testContainer.appendChild(shadowHost);

    const clickTarget = shadowRoot.querySelector('.backdrop') as HTMLElement;
    
    const event = new MouseEvent('click', { bubbles: true, composed: true });
    
    // Mock composedPath
    Object.defineProperty(event, 'composedPath', {
      value: () => [clickTarget, shadowRoot, shadowHost, testContainer, document.body, window],
      writable: true,
    });

    const result = isBackdropClick(event, shadowRoot, '.nonexistent-content');
    expect(result).toBe(false);
  });

  it('should return true when clicking on the backdrop element itself', () => {
    const shadowHost = document.createElement('div');
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);
    testContainer.appendChild(shadowHost);

    const event = new MouseEvent('click', { bubbles: true, composed: true });
    
    // Mock composedPath to simulate click on backdrop
    Object.defineProperty(event, 'composedPath', {
      value: () => [backdrop, shadowRoot, shadowHost, testContainer, document.body, window],
      writable: true,
    });

    const result = isBackdropClick(event, shadowRoot, '.content');
    expect(result).toBe(true);
  });

  it('should return false when clicking directly on the shadow DOM content', () => {
    const shadowHost = document.createElement('div');
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);
    testContainer.appendChild(shadowHost);

    const event = new MouseEvent('click', { bubbles: true, composed: true });
    
    // Mock composedPath to simulate click on content
    Object.defineProperty(event, 'composedPath', {
      value: () => [content, backdrop, shadowRoot, shadowHost, testContainer, document.body, window],
      writable: true,
    });

    const result = isBackdropClick(event, shadowRoot, '.content');
    expect(result).toBe(false);
  });

  it('should return false when clicking on a child of the shadow DOM content', () => {
    const shadowHost = document.createElement('div');
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    const button = document.createElement('button');
    content.appendChild(button);
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);
    testContainer.appendChild(shadowHost);

    const event = new MouseEvent('click', { bubbles: true, composed: true });
    
    // Mock composedPath to simulate click on button
    Object.defineProperty(event, 'composedPath', {
      value: () => [button, content, backdrop, shadowRoot, shadowHost, testContainer, document.body, window],
      writable: true,
    });

    const result = isBackdropClick(event, shadowRoot, '.content');
    expect(result).toBe(false);
  });

  it('should return false when clicking on slotted light DOM content', () => {
    const shadowHost = document.createElement('div');
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    const slot = document.createElement('slot');
    content.appendChild(slot);
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);

    const slottedContent = document.createElement('div');
    const button = document.createElement('button');
    slottedContent.appendChild(button);
    shadowHost.appendChild(slottedContent);
    testContainer.appendChild(shadowHost);

    const event = new MouseEvent('click', { bubbles: true, composed: true });
    
    // Mock composedPath to simulate click on slotted button
    Object.defineProperty(event, 'composedPath', {
      value: () => [button, slottedContent, slot, content, backdrop, shadowRoot, shadowHost, testContainer, document.body, window],
      writable: true,
    });

    const result = isBackdropClick(event, shadowRoot, '.content');
    expect(result).toBe(false);
  });

  it('should return true for a click outside the content, originating from outside the component', () => {
    const shadowHost = document.createElement('div');
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    const content = document.createElement('div');
    content.className = 'content';
    backdrop.appendChild(content);
    shadowRoot.appendChild(backdrop);
    testContainer.appendChild(shadowHost);

    const event = new MouseEvent('click', { bubbles: true, composed: true });
    
    // Mock composedPath to simulate click on testContainer
    Object.defineProperty(event, 'composedPath', {
      value: () => [testContainer, document.body, window],
      writable: true,
    });

    const result = isBackdropClick(event, shadowRoot, '.content');
    expect(result).toBe(true);
  });
});