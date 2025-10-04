import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isElementInContainer } from './isElementInContainer';

describe('isElementInContainer', () => {
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

  it('should return false when element is null', () => {
    const result = isElementInContainer(null, shadowRoot, lightDomContainer);
    expect(result).toBe(false);
  });

  it('should return false when shadowRoot is null', () => {
    const element = document.createElement('div');
    const result = isElementInContainer(element, null, lightDomContainer);
    expect(result).toBe(false);
  });

  it('should return true when element is in shadow DOM', () => {
    const element = document.createElement('div');
    shadowRoot.appendChild(element);

    const result = isElementInContainer(element, shadowRoot, lightDomContainer);
    expect(result).toBe(true);
  });

  it('should return true when element is child of shadow DOM element', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    parent.appendChild(child);
    shadowRoot.appendChild(parent);

    const result = isElementInContainer(child, shadowRoot, lightDomContainer);
    expect(result).toBe(true);
  });

  it('should return true when element is in light DOM container', () => {
    const element = document.createElement('div');
    lightDomContainer.appendChild(element);

    const result = isElementInContainer(element, shadowRoot, lightDomContainer);
    expect(result).toBe(true);
  });

  it('should return true when element is child of light DOM container', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    parent.appendChild(child);
    lightDomContainer.appendChild(parent);

    const result = isElementInContainer(child, shadowRoot, lightDomContainer);
    expect(result).toBe(true);
  });

  it('should return false when element is outside both containers', () => {
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    const result = isElementInContainer(outsideElement, shadowRoot, lightDomContainer);
    expect(result).toBe(false);

    document.body.removeChild(outsideElement);
  });

  it('should work without light DOM container parameter', () => {
    const shadowElement = document.createElement('div');
    shadowRoot.appendChild(shadowElement);

    const result = isElementInContainer(shadowElement, shadowRoot);
    expect(result).toBe(true);
  });

  it('should return false when element is not in shadow and no light container provided', () => {
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    const result = isElementInContainer(outsideElement, shadowRoot);
    expect(result).toBe(false);

    document.body.removeChild(outsideElement);
  });

  it('should handle deeply nested elements in shadow DOM', () => {
    const level1 = document.createElement('div');
    const level2 = document.createElement('div');
    const level3 = document.createElement('div');
    const level4 = document.createElement('span');

    level3.appendChild(level4);
    level2.appendChild(level3);
    level1.appendChild(level2);
    shadowRoot.appendChild(level1);

    const result = isElementInContainer(level4, shadowRoot, lightDomContainer);
    expect(result).toBe(true);
  });

  it('should handle deeply nested elements in light DOM', () => {
    const level1 = document.createElement('div');
    const level2 = document.createElement('div');
    const level3 = document.createElement('div');
    const level4 = document.createElement('span');

    level3.appendChild(level4);
    level2.appendChild(level3);
    level1.appendChild(level2);
    lightDomContainer.appendChild(level1);

    const result = isElementInContainer(level4, shadowRoot, lightDomContainer);
    expect(result).toBe(true);
  });

  it('should correctly identify elements in shadow vs light DOM', () => {
    const shadowElement = document.createElement('div');
    const lightElement = document.createElement('div');

    shadowRoot.appendChild(shadowElement);
    lightDomContainer.appendChild(lightElement);

    // Shadow element should be in container
    expect(isElementInContainer(shadowElement, shadowRoot, lightDomContainer)).toBe(true);

    // Light element should be in container
    expect(isElementInContainer(lightElement, shadowRoot, lightDomContainer)).toBe(true);

    // External element should not be in container
    const externalElement = document.createElement('div');
    document.body.appendChild(externalElement);
    expect(isElementInContainer(externalElement, shadowRoot, lightDomContainer)).toBe(false);
    document.body.removeChild(externalElement);
  });

  it('should handle button elements in shadow DOM', () => {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    shadowRoot.appendChild(button);

    const result = isElementInContainer(button, shadowRoot, lightDomContainer);
    expect(result).toBe(true);
  });

  it('should handle input elements in light DOM', () => {
    const input = document.createElement('input');
    input.type = 'text';
    lightDomContainer.appendChild(input);

    const result = isElementInContainer(input, shadowRoot, lightDomContainer);
    expect(result).toBe(true);
  });

  it('should return false for sibling elements outside containers', () => {
    const siblingContainer = document.createElement('div');
    const siblingElement = document.createElement('div');
    siblingContainer.appendChild(siblingElement);
    document.body.appendChild(siblingContainer);

    const result = isElementInContainer(siblingElement, shadowRoot, lightDomContainer);
    expect(result).toBe(false);

    document.body.removeChild(siblingContainer);
  });
});
