import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AgTag } from './_Tag.js';

if (!customElements.get('ag-tag')) {
  customElements.define('ag-tag', AgTag);
}

describe('<ag-tag>', () => {
  let el: AgTag;

  beforeEach(async () => {
    el = document.createElement('ag-tag') as AgTag;
    el.textContent = 'Hello';
    document.body.appendChild(el);
    await el.updateComplete; // wait for Lit to render
    await Promise.resolve(); // allow slot projection to flush
  });

  afterEach(() => {
    el.remove();
  });
  it('renders default content', async () => {
    // ✅ New default render test
    await el.updateComplete;
    const renderedText = el.textContent?.trim();
    expect(renderedText).toBe('Hello');
  });
  it('reflects the variant attribute', async () => {
    el.setAttribute('variant', 'success');
    await el.updateComplete;
    expect(el.variant).toBe('success');
    expect(el.getAttribute('variant')).toBe('success');
  });

  it('reflects the shape attribute', async () => {
    el.setAttribute('shape', 'pill');
    await el.updateComplete;
    expect(el.shape).toBe('pill');
  });

  it('toggles uppercase correctly', async () => {
    el.isUppercase = true;
    await el.updateComplete;
    expect(el.hasAttribute('isUppercase')).toBe(true);
  });

  it('renders slot content for close', async () => {
    el.innerHTML = `Label <button slot="close">x</button>`;
    await el.updateComplete;
    const slots = el.shadowRoot?.querySelectorAll('slot');
    expect(slots?.length).toBe(2);
  });

  it('matches snapshot', () => {
    expect(el.shadowRoot?.innerHTML).toMatchSnapshot();
  });
});
