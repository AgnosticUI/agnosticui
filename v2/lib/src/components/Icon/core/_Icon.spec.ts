// _Icon.spec.ts
import { expect, describe, it, beforeEach, afterEach } from 'vitest';
import { Icon } from './Icon';
import { axe } from 'jest-axe';

describe('Icon', () => {
  let element: Icon;

  beforeEach(async () => {
    element = new Icon();
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('renders correctly with default props', async () => {
    expect(element).toBeInstanceOf(Icon);

    const wrapper = element.shadowRoot!.querySelector('.icon-base');
    expect(wrapper).not.toBeNull();
    expect(wrapper!.classList.contains('icon-base')).toBe(true);
  });

  it('applies size prop and reflects attribute', async () => {
    element.size = '24';
    await element.updateComplete;

    expect(element.hasAttribute('size')).toBe(true);
    expect(element.getAttribute('size')).toBe('24');
  });

  it('applies type prop and reflects attribute', async () => {
    element.type = 'success';
    await element.updateComplete;

    expect(element.hasAttribute('type')).toBe(true);
    expect(element.getAttribute('type')).toBe('success');
  });

  it('forwards slotted content (e.g., SVG)', async () => {
    const svg = document.createElement('svg');
    svg.className = 'icon-svg';
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.innerHTML = '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>';

    element.appendChild(svg);
    await element.updateComplete;

    const slottedSvg = element.querySelector('.icon-svg');
    expect(slottedSvg).not.toBeNull();
    expect(slottedSvg!.classList.contains('icon-svg')).toBe(true);
  });

  it('is accessible by default', async () => {
    const results = await axe(element);
    expect(results.violations).toHaveLength(0);
  });

  it('reflects size attribute on host element', async () => {
    element.size = '24';
    await element.updateComplete;

    expect(element.hasAttribute('size')).toBe(true);
    expect(element.getAttribute('size')).toBe('24');
  });

  it('reflects type attribute on host element', async () => {
    element.type = 'success';
    await element.updateComplete;

    expect(element.hasAttribute('type')).toBe(true);
    expect(element.getAttribute('type')).toBe('success');
  });

  it('handles empty slot gracefully', async () => {
    // No slotted content
    await element.updateComplete;

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
    expect(slot!.assignedNodes({ flatten: true }).length).toBe(0); // No children
  });

  it('ignores invalid size value and reflects attribute', async () => {
    element.size = 'invalid' as any; // Type assertion for test
    await element.updateComplete;

    const wrapper = element.shadowRoot!.querySelector('.icon-base');
    expect(wrapper).not.toBeNull();
    // Reflects but no invalid class (CSS ignores)
    expect(element.getAttribute('size')).toBe('invalid');
  });

  it('supports multiple slotted children', async () => {
    const svg1 = document.createElement('svg');
    svg1.className = 'icon-svg';
    svg1.setAttribute('viewBox', '0 0 24 24');

    const svg2 = document.createElement('svg');
    svg2.className = 'icon-svg';
    svg2.setAttribute('viewBox', '0 0 24 24');

    element.appendChild(svg1);
    element.appendChild(svg2);
    await element.updateComplete;

    const slottedSvgs = element.querySelectorAll('.icon-svg');
    expect(slottedSvgs.length).toBe(2);
  });

  // TODO: Add more tests based on SpecSheet.md (e.g., responsiveness, color contrast)
});
