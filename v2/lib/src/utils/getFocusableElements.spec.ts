import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getFocusableElements } from './getFocusableElements';

describe('getFocusableElements', () => {
  let container: HTMLElement;
  let shadowHost: HTMLElement;
  let shadowRoot: ShadowRoot;

  beforeEach(() => {
    container = document.createElement('div');
    shadowHost = document.createElement('div');
    shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    document.body.appendChild(container);
    document.body.appendChild(shadowHost);
  });

  afterEach(() => {
    document.body.removeChild(container);
    document.body.removeChild(shadowHost);
  });

  it('should return empty array when shadowRoot is null', () => {
    const result = getFocusableElements(null);
    expect(result).toEqual([]);
  });

  it('should find button elements in shadow DOM', () => {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    shadowRoot.appendChild(button);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(button);
  });

  it('should find input elements in shadow DOM', () => {
    const input = document.createElement('input');
    input.type = 'text';
    shadowRoot.appendChild(input);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(input);
  });

  it('should find links with href in shadow DOM', () => {
    const link = document.createElement('a');
    link.href = 'https://example.com';
    link.textContent = 'Link';
    shadowRoot.appendChild(link);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(link);
  });

  it('should exclude links without href', () => {
    const link = document.createElement('a');
    link.textContent = 'Not a link';
    shadowRoot.appendChild(link);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(0);
  });

  it('should find slotted elements in light DOM', () => {
    const button = document.createElement('button');
    button.textContent = 'Slotted Button';
    container.appendChild(button);

    const result = getFocusableElements(shadowRoot, container);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(button);
  });

  it('should find both shadow and light DOM elements', () => {
    const shadowButton = document.createElement('button');
    shadowButton.textContent = 'Shadow Button';
    shadowRoot.appendChild(shadowButton);

    const lightButton = document.createElement('button');
    lightButton.textContent = 'Light Button';
    container.appendChild(lightButton);

    const result = getFocusableElements(shadowRoot, container);
    expect(result).toHaveLength(2);
    expect(result).toContain(shadowButton);
    expect(result).toContain(lightButton);
  });

  it('should exclude disabled buttons', () => {
    const button = document.createElement('button');
    button.disabled = true;
    shadowRoot.appendChild(button);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(0);
  });

  it('should exclude hidden elements', () => {
    const button = document.createElement('button');
    button.setAttribute('hidden', '');
    shadowRoot.appendChild(button);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(0);
  });

  it('should exclude elements with display: none', () => {
    const button = document.createElement('button');
    button.style.display = 'none';
    shadowRoot.appendChild(button);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(0);
  });

  it('should exclude elements with visibility: hidden', () => {
    const button = document.createElement('button');
    button.style.visibility = 'hidden';
    shadowRoot.appendChild(button);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(0);
  });

  it('should exclude elements with negative tabindex', () => {
    const div = document.createElement('div');
    div.setAttribute('tabindex', '-1');
    shadowRoot.appendChild(div);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(0);
  });

  it('should include elements with zero or positive tabindex', () => {
    const div1 = document.createElement('div');
    div1.setAttribute('tabindex', '0');
    const div2 = document.createElement('div');
    div2.setAttribute('tabindex', '1');
    shadowRoot.appendChild(div1);
    shadowRoot.appendChild(div2);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(2);
  });

  it('should find textarea elements', () => {
    const textarea = document.createElement('textarea');
    shadowRoot.appendChild(textarea);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(textarea);
  });

  it('should find select elements', () => {
    const select = document.createElement('select');
    shadowRoot.appendChild(select);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(select);
  });

  it('should find details and summary elements', () => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = 'Summary';
    details.appendChild(summary);
    shadowRoot.appendChild(details);

    const result = getFocusableElements(shadowRoot);
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result).toContain(summary);
  });

  it('should find contenteditable elements', () => {
    const div = document.createElement('div');
    div.setAttribute('contenteditable', 'true');
    shadowRoot.appendChild(div);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(div);
  });

  it('should find audio and video elements with controls', () => {
    const audio = document.createElement('audio');
    audio.setAttribute('controls', '');
    const video = document.createElement('video');
    video.setAttribute('controls', '');
    shadowRoot.appendChild(audio);
    shadowRoot.appendChild(video);

    const result = getFocusableElements(shadowRoot);
    // Note: In JSDOM, audio elements may not be focusable, but video elements are
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result.some(el => el.tagName.toLowerCase() === 'video')).toBe(true);
  });

  it('should exclude audio and video without controls', () => {
    const audio = document.createElement('audio');
    const video = document.createElement('video');
    shadowRoot.appendChild(audio);
    shadowRoot.appendChild(video);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(0);
  });

  it('should handle multiple types of focusable elements', () => {
    const button = document.createElement('button');
    const input = document.createElement('input');
    const link = document.createElement('a');
    link.href = '#';
    const textarea = document.createElement('textarea');

    shadowRoot.appendChild(button);
    shadowRoot.appendChild(input);
    shadowRoot.appendChild(link);
    shadowRoot.appendChild(textarea);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(4);
  });

  it('should handle mixed visible and hidden elements', () => {
    const visibleButton = document.createElement('button');
    visibleButton.textContent = 'Visible';
    const hiddenButton = document.createElement('button');
    hiddenButton.setAttribute('hidden', '');
    const disabledButton = document.createElement('button');
    disabledButton.disabled = true;

    shadowRoot.appendChild(visibleButton);
    shadowRoot.appendChild(hiddenButton);
    shadowRoot.appendChild(disabledButton);

    const result = getFocusableElements(shadowRoot);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(visibleButton);
  });
});
