import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AgCard } from './Card';

// Type alias for backward compatibility
type Card = AgCard;
const Card = AgCard;

describe('AgCard', () => {
  let host: HTMLElement;

  beforeEach(() => {
    host = document.createElement('div');
    document.body.appendChild(host);
  });

  afterEach(() => {
    host.remove();
  });

  it('renders correctly and sets default properties', () => {
    const el = document.createElement('ag-card') as AgCard;
    host.appendChild(el);
    expect(el).toBeInstanceOf(AgCard);
    expect(el.stacked).toBe(false);
    expect(el.shadow).toBe(false);
    expect(el.animated).toBe(false);
    expect(el.rounded).toBe('');
    expect(el.variant).toBe('');
  });

  it('reflects properties as attributes', async () => {
    const el = document.createElement('ag-card') as AgCard;
    el.stacked = true;
    el.shadow = true;
    host.appendChild(el);
    await el.updateComplete; // Wait for Lit to update the DOM

    // Boolean properties with reflect: true are removed when false
    expect(el.hasAttribute('stacked')).toBe(true);
    expect(el.hasAttribute('shadow')).toBe(true);
  });

  it('has relative position for the pseudo-element trick', async () => {
    const el = document.createElement('ag-card') as AgCard;
    host.appendChild(el);
    await el.updateComplete;

    // Verify that the component's styles include position: relative on :host
    // This is needed for the pseudo-element clickable card trick
    const styleContent = AgCard.styles.toString();
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

  it('applies animated attribute correctly', async () => {
    const el = document.createElement('ag-card') as Card;
    el.animated = true;
    host.appendChild(el);
    await el.updateComplete;

    expect(el.hasAttribute('animated')).toBe(true);

    // Verify animation styles are defined
    const styleContent = Card.styles.toString();
    expect(styleContent).toContain('animated');
    expect(styleContent).toContain('transition');
    expect(styleContent).toContain('transform');
  });

  it('applies rounded attribute variants correctly', async () => {
    const elSm = document.createElement('ag-card') as Card;
    elSm.rounded = 'sm';
    host.appendChild(elSm);
    await elSm.updateComplete;
    expect(elSm.getAttribute('rounded')).toBe('sm');

    const elMd = document.createElement('ag-card') as Card;
    elMd.rounded = 'md';
    host.appendChild(elMd);
    await elMd.updateComplete;
    expect(elMd.getAttribute('rounded')).toBe('md');

    const elLg = document.createElement('ag-card') as Card;
    elLg.rounded = 'lg';
    host.appendChild(elLg);
    await elLg.updateComplete;
    expect(elLg.getAttribute('rounded')).toBe('lg');

    // Verify rounded styles are defined for all variants
    const styleContent = AgCard.styles.toString();
    expect(styleContent).toContain('rounded="sm"');
    expect(styleContent).toContain('rounded="md"');
    expect(styleContent).toContain('rounded="lg"');
    expect(styleContent).toContain('border-radius');
  });

  it('supports success variant', async () => {
    const el = document.createElement('ag-card') as Card;
    el.variant = 'success';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.getAttribute('variant')).toBe('success');

    // Verify success variant styles are defined
    const styleContent = AgCard.styles.toString();
    expect(styleContent).toContain('variant="success"');
  });

  it('supports info variant', async () => {
    const el = document.createElement('ag-card') as Card;
    el.variant = 'info';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.getAttribute('variant')).toBe('info');

    // Verify info variant styles are defined
    const styleContent = AgCard.styles.toString();
    expect(styleContent).toContain('variant="info"');
  });

  it('supports error variant', async () => {
    const el = document.createElement('ag-card') as Card;
    el.variant = 'error';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.getAttribute('variant')).toBe('error');

    // Verify error variant styles are defined
    const styleContent = AgCard.styles.toString();
    expect(styleContent).toContain('variant="error"');
  });

  it('supports warning variant', async () => {
    const el = document.createElement('ag-card') as Card;
    el.variant = 'warning';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.getAttribute('variant')).toBe('warning');

    // Verify warning variant styles are defined
    const styleContent = AgCard.styles.toString();
    expect(styleContent).toContain('variant="warning"');
  });

  it('respects reduced motion preferences for animations', async () => {
    const el = document.createElement('ag-card') as Card;
    el.animated = true;
    host.appendChild(el);
    await el.updateComplete;

    // Verify prefers-reduced-motion media query is present
    const styleContent = AgCard.styles.toString();
    expect(styleContent).toContain('prefers-reduced-motion');
  });

  it('combines multiple attributes correctly', async () => {
    const el = document.createElement('ag-card') as Card;
    el.shadow = true;
    el.animated = true;
    el.rounded = 'md';
    el.variant = 'success';
    host.appendChild(el);
    await el.updateComplete;

    expect(el.hasAttribute('shadow')).toBe(true);
    expect(el.hasAttribute('animated')).toBe(true);
    expect(el.getAttribute('rounded')).toBe('md');
    expect(el.getAttribute('variant')).toBe('success');
  });

  it('uses correct CSS attribute selectors for boolean props (not ="true")', async () => {
    const el = document.createElement('ag-card') as Card;
    host.appendChild(el);
    await el.updateComplete;

    const styleContent = AgCard.styles.toString();

    // CRITICAL: Boolean attributes should use [attrname] not [attrname="true"]
    // Lit reflects boolean props as present/absent, not as ="true"/"false"
    expect(styleContent).toContain(':host([shadow])');
    expect(styleContent).toContain(':host([animated])');
    expect(styleContent).toContain(':host([stacked])');

    // String attribute variants
    expect(styleContent).toContain('[rounded="sm"]');
    expect(styleContent).toContain('[rounded="md"]');
    expect(styleContent).toContain('[rounded="lg"]');

    // These should NOT exist (common mistake)
    expect(styleContent).not.toContain('[shadow="true"]');
    expect(styleContent).not.toContain('[animated="true"]');
    expect(styleContent).not.toContain('[stacked="true"]');
  });
});
