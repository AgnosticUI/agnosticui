import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  let host: HTMLElement;

  beforeEach(() => {
    host = document.createElement('div');
    document.body.appendChild(host);
  });

  afterEach(() => {
    host.remove();
  });

  it('renders correctly and sets default properties', () => {
    const el = document.createElement('ag-card') as Card;
    host.appendChild(el);
    expect(el).toBeInstanceOf(Card);
    expect(el.isSkinned).toBe(true);
    expect(el.isStacked).toBe(false);
    expect(el.isShadow).toBe(false);
    expect(el.isAnimated).toBe(false);
    expect(el.isRounded).toBe(false);
    expect(el.variant).toBe('');
  });

  it('reflects properties as attributes', async () => {
    const el = document.createElement('ag-card') as Card;
    el.isSkinned = false;
    el.isStacked = true;
    el.isShadow = true;
    host.appendChild(el);
    await el.updateComplete; // Wait for Lit to update the DOM

    // Boolean properties with reflect: true are removed when false
    expect(el.hasAttribute('isskinned')).toBe(false);
    expect(el.hasAttribute('isstacked')).toBe(true);
    expect(el.hasAttribute('isshadow')).toBe(true);
  });

  it('has relative position for the pseudo-element trick', async () => {
    const el = document.createElement('ag-card') as Card;
    host.appendChild(el);
    await el.updateComplete;

    // Verify that the component's styles include position: relative on :host
    // This is needed for the pseudo-element clickable card trick
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain(':host');
    expect(styleContent).toContain('position: relative');
  });

  it('renders header, footer, and default slots', async () => {
    host.innerHTML = `
      <ag-card>
        <div slot="header">Header</div>
        <p>Default slot content</p>
        <div slot="footer">Footer</div>
      </ag-card>
    `;
    const el = host.querySelector('ag-card')! as Card;
    await el.updateComplete;

    const headerSlot = el.querySelector('[slot="header"]');
    const footerSlot = el.querySelector('[slot="footer"]');
    const defaultSlot = el.querySelector('p:not([slot])');

    expect(headerSlot).not.toBeNull();
    expect(footerSlot).not.toBeNull();
    expect(defaultSlot).not.toBeNull();
    expect(headerSlot?.textContent).toContain('Header');
    expect(defaultSlot?.textContent).toContain('Default slot content');
    expect(footerSlot?.textContent).toContain('Footer');
  });

  it('applies isAnimated attribute correctly', async () => {
    const el = document.createElement('ag-card') as Card;
    el.isAnimated = true;
    host.appendChild(el);
    await el.updateComplete;

    expect(el.hasAttribute('isanimated')).toBe(true);

    // Verify animation styles are defined
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain('isanimated');
    expect(styleContent).toContain('transition');
    expect(styleContent).toContain('transform');
  });

  it('applies isRounded attribute correctly', async () => {
    const el = document.createElement('ag-card') as Card;
    el.isRounded = true;
    host.appendChild(el);
    await el.updateComplete;

    expect(el.hasAttribute('isrounded')).toBe(true);

    // Verify rounded styles are defined
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain('isrounded');
    expect(styleContent).toContain('border-radius');
  });

  it('supports success variant', async () => {
    const el = document.createElement('ag-card') as Card;
    el.variant = 'success';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.getAttribute('variant')).toBe('success');

    // Verify success variant styles are defined
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain('variant="success"');
  });

  it('supports info variant', async () => {
    const el = document.createElement('ag-card') as Card;
    el.variant = 'info';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.getAttribute('variant')).toBe('info');

    // Verify info variant styles are defined
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain('variant="info"');
  });

  it('supports error variant', async () => {
    const el = document.createElement('ag-card') as Card;
    el.variant = 'error';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.getAttribute('variant')).toBe('error');

    // Verify error variant styles are defined
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain('variant="error"');
  });

  it('supports warning variant', async () => {
    const el = document.createElement('ag-card') as Card;
    el.variant = 'warning';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.getAttribute('variant')).toBe('warning');

    // Verify warning variant styles are defined
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain('variant="warning"');
  });

  it('respects reduced motion preferences for animations', async () => {
    const el = document.createElement('ag-card') as Card;
    el.isAnimated = true;
    host.appendChild(el);
    await el.updateComplete;

    // Verify prefers-reduced-motion media query is present
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain('prefers-reduced-motion');
  });

  it('combines multiple attributes correctly', async () => {
    const el = document.createElement('ag-card') as Card;
    el.isSkinned = true;
    el.isShadow = true;
    el.isAnimated = true;
    el.variant = 'success';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.hasAttribute('isskinned')).toBe(true);
    expect(el.hasAttribute('isshadow')).toBe(true);
    expect(el.hasAttribute('isanimated')).toBe(true);
    expect(el.getAttribute('variant')).toBe('success');
  });

  it('uses correct CSS attribute selectors for boolean props (not ="true")', async () => {
    const el = document.createElement('ag-card') as Card;
    host.appendChild(el);
    await el.updateComplete;

    const styleContent = Card.styles.toString();

    // CRITICAL: Boolean attributes should use [attrname] not [attrname="true"]
    // Lit reflects boolean props as present/absent, not as ="true"/"false"
    expect(styleContent).toContain(':host([isskinned])');
    expect(styleContent).toContain(':host([isshadow])');
    expect(styleContent).toContain(':host([isanimated])');
    expect(styleContent).toContain(':host([isrounded])');
    expect(styleContent).toContain(':host([isstacked])');

    // These should NOT exist (common mistake)
    expect(styleContent).not.toContain('[isskinned="true"]');
    expect(styleContent).not.toContain('[isshadow="true"]');
    expect(styleContent).not.toContain('[isanimated="true"]');
    expect(styleContent).not.toContain('[isrounded="true"]');
    expect(styleContent).not.toContain('[isstacked="true"]');
  });
});
