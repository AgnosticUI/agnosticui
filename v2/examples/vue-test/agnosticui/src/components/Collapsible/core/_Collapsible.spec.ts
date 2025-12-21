import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';

import './Collapsible';
import { AgCollapsible } from './Collapsible';

expect.extend(toHaveNoViolations);

describe('Collapsible Component', () => {
  let el: AgCollapsible;

  beforeEach(() => {
    el = document.createElement('ag-collapsible') as AgCollapsible;
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('should have correct default properties', async () => {
    await el.updateComplete;
    expect(el.open).toBe(false);
    expect(el.bordered).toBe(false);
    expect(el.shadow).toBe(false);
  });

  it('should reflect open property to attribute', async () => {
    el.open = true;
    await el.updateComplete;
    const details = el.shadowRoot?.querySelector('details');
    expect(details?.open).toBe(true);
  });

  it('uses correct CSS attribute selectors for boolean props', async () => {
    await el.updateComplete;
    const styleContent = (el.constructor as typeof AgCollapsible).styles.toString();
    expect(styleContent).toContain(':host([bordered])');
    expect(styleContent).not.toContain('[bordered="true"]');
    expect(styleContent).toContain(':host([shadow])');
    expect(styleContent).not.toContain('[shadow="true"]');
  });

  it('should apply bordered styles', async () => {
    el.bordered = true;
    await el.updateComplete;
    const details = el.shadowRoot?.querySelector('details');
    const styles = window.getComputedStyle(details!);
    expect(styles.borderColor).not.toBe('transparent');
  });

  it('should apply shadow styles', async () => {
    el.shadow = true;
    await el.updateComplete;
    const details = el.shadowRoot?.querySelector('details');
    const styles = window.getComputedStyle(details!);
    expect(styles.boxShadow).not.toBe('none');
  });

  describe('Accessibility', () => {
    it('should pass axe-core accessibility tests', async () => {
      el.innerHTML = `<span slot="summary">Test Summary</span>`;
      await el.updateComplete;
      const results = await axe(el);
      expect(results).toHaveNoViolations();
    });

    it('should pass axe-core accessibility tests when open', async () => {
      el.innerHTML = `<span slot="summary">Test Summary</span>`;
      el.open = true;
      await el.updateComplete;
      const results = await axe(el);
      expect(results).toHaveNoViolations();
    });
  });
});
