import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Header, type HeaderContentJustify } from './_Header';

if (!customElements.get('ag-header')) {
  customElements.define('ag-header', Header);
}

describe('Header Component', () => {
  let element: Header;

  beforeEach(() => {
    element = document.createElement('ag-header') as Header;
    document.body.appendChild(element);
  });

  afterEach(() => {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  it('should register the custom element', () => {
    expect(customElements.get('ag-header')).toBeDefined();
  });

  it('should have default properties', async () => {
    await element.updateComplete;
    expect(element.sticky).toBe(false);
    expect(element.contentJustify).toBe('between');
    expect(element.isSkinned).toBe(true);
  });

  it('should render semantic header element', async () => {
    await element.updateComplete;
    const header = element.shadowRoot!.querySelector('header');
    expect(header).not.toBeNull();
    expect(header!.classList.contains('header')).toBe(true);
  });

  it('should render logo slot content', async () => {
    const slotContent = '<a href="/">Logo</a>';
    element.innerHTML = `<div slot="logo">${slotContent}</div>`;
    await element.updateComplete;
    expect(element.innerHTML).toContain('Logo');
  });

  it('should render default slot content', async () => {
    const slotContent = '<nav>Navigation</nav>';
    element.innerHTML = slotContent;
    await element.updateComplete;
    expect(element.innerHTML).toContain('Navigation');
  });

  it('should render both logo and navigation slots', async () => {
    element.innerHTML = `
      <a href="/" slot="logo">Brand</a>
      <nav>Menu</nav>
    `;
    await element.updateComplete;
    expect(element.innerHTML).toContain('Brand');
    expect(element.innerHTML).toContain('Menu');
  });

  describe('Sticky positioning', () => {
    it('should not be sticky by default', async () => {
      await element.updateComplete;
      expect(element.sticky).toBe(false);
      expect(element.hasAttribute('sticky')).toBe(false);
    });

    it('should apply sticky attribute when sticky is true', async () => {
      element.sticky = true;
      await element.updateComplete;
      expect(element.hasAttribute('sticky')).toBe(true);
    });

    it('uses correct CSS attribute selector for sticky', () => {
      const styleContent = Header.styles.toString();
      expect(styleContent).toContain(':host([sticky])');
      expect(styleContent).not.toContain(':host([sticky="true"])');
    });
  });

  describe('Content justification', () => {
    const justifyOptions: HeaderContentJustify[] = ['start', 'end', 'between', 'around', 'center'];

    justifyOptions.forEach(justify => {
      it(`should apply contentJustify="${justify}" attribute`, async () => {
        element.contentJustify = justify;
        await element.updateComplete;
        expect(element.getAttribute('contentJustify')).toBe(justify);
      });
    });

    it('should use "between" as default contentJustify', async () => {
      await element.updateComplete;
      expect(element.contentJustify).toBe('between');
    });
  });

  describe('Skinned styling', () => {
    it('should be skinned by default', async () => {
      await element.updateComplete;
      expect(element.isSkinned).toBe(true);
      expect(element.hasAttribute('isSkinned')).toBe(true);
    });

    it('should apply isSkinned attribute when true', async () => {
      element.isSkinned = true;
      await element.updateComplete;
      expect(element.hasAttribute('isSkinned')).toBe(true);
    });

    it('should remove isSkinned attribute when false', async () => {
      element.isSkinned = false;
      await element.updateComplete;
      expect(element.hasAttribute('isSkinned')).toBe(false);
    });

    it('uses correct CSS attribute selector for isSkinned', () => {
      const styleContent = Header.styles.toString();
      expect(styleContent).toContain(':host([isSkinned])');
      expect(styleContent).not.toContain(':host([isSkinned="true"])');
    });
  });

  describe('CSS Shadow Parts', () => {
    it('should expose ag-header shadow part', async () => {
      await element.updateComplete;
      const header = element.shadowRoot!.querySelector('[part="ag-header"]');
      expect(header).not.toBeNull();
    });

    it('should expose ag-header-content shadow part', async () => {
      await element.updateComplete;
      const content = element.shadowRoot!.querySelector('[part="ag-header-content"]');
      expect(content).not.toBeNull();
    });
  });

  describe('Design tokens', () => {
    it('should use design tokens (not hard-coded colors)', () => {
      const styleContent = Header.styles.toString();
      // Check for design token usage
      expect(styleContent).toContain('--ag-background-primary');
      expect(styleContent).toContain('--ag-border');
      expect(styleContent).toContain('--ag-space-');
      expect(styleContent).toContain('--ag-z-index-dropdown');
      // Ensure no hard-coded colors
      expect(styleContent).not.toMatch(/#[0-9a-fA-F]{3,6}(?![^;]*var\()/);
    });
  });

  describe('Accessibility', () => {
    it('should use semantic header element', async () => {
      await element.updateComplete;
      const header = element.shadowRoot!.querySelector('header');
      expect(header).not.toBeNull();
    });

    it('should have header-content wrapper for layout', async () => {
      await element.updateComplete;
      const content = element.shadowRoot!.querySelector('.header-content');
      expect(content).not.toBeNull();
    });
  });
});
