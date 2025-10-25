import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Avatar } from './Avatar';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Avatar', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.innerHTML = '';
  });

  const createAvatar = async (props: Partial<Avatar> = {}) => {
    const avatar = new Avatar();
    Object.assign(avatar, props);
    container.appendChild(avatar);
    await avatar.updateComplete;
    return avatar;
  };

  describe('Accessibility', () => {
    it('should be fully accessible with no violations', async () => {
      const avatar = await createAvatar({ text: 'AB' });
      const results = await axe(avatar);
      expect(results).toHaveNoViolations();
    });
  });

  it('renders correctly with default props', async () => {
    const el = await createAvatar();
    expect(el).toBeInstanceOf(Avatar);
  });

  it('renders text initials', async () => {
    const el = await createAvatar({ text: 'AB' });
    const textEl = el.shadowRoot?.querySelector('.avatar-text');
    expect(textEl?.textContent).toBe('AB');
  });

  it('renders image when imgSrc is provided', async () => {
    const el = await createAvatar({
      imgSrc: 'https://example.com/avatar.jpg',
      imgAlt: 'User avatar',
    });
    const img = el.shadowRoot?.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.src).toContain('avatar.jpg');
    expect(img?.alt).toBe('User avatar');
  });

  it('renders slotted content when no text or imgSrc', async () => {
    const el = await createAvatar();
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    el.appendChild(svg);
    await el.updateComplete;
    const slot = el.shadowRoot?.querySelector('slot');
    expect(slot).toBeTruthy();
  });

  describe('Sizes', () => {
    it('applies xs size', async () => {
      const el = await createAvatar({ size: 'xs' });
      expect(el.size).toBe('xs');
      expect(el.getAttribute('size')).toBe('xs');
    });

    it('applies sm size', async () => {
      const el = await createAvatar({ size: 'sm' });
      expect(el.size).toBe('sm');
    });

    it('applies md size by default', async () => {
      const el = await createAvatar();
      expect(el.size).toBe('md');
    });

    it('applies lg size', async () => {
      const el = await createAvatar({ size: 'lg' });
      expect(el.size).toBe('lg');
    });

    it('applies xl size', async () => {
      const el = await createAvatar({ size: 'xl' });
      expect(el.size).toBe('xl');
    });
  });

  describe('Shapes', () => {
    it('applies circle shape by default', async () => {
      const el = await createAvatar();
      expect(el.shape).toBe('circle');
    });

    it('applies square shape', async () => {
      const el = await createAvatar({ shape: 'square' });
      expect(el.shape).toBe('square');
      expect(el.getAttribute('shape')).toBe('square');
    });

    it('applies rounded shape', async () => {
      const el = await createAvatar({ shape: 'rounded' });
      expect(el.shape).toBe('rounded');
    });
  });

  describe('Variants', () => {
    it('applies default variant by default', async () => {
      const el = await createAvatar();
      expect(el.variant).toBe('default');
    });

    it('applies info variant', async () => {
      const el = await createAvatar({ variant: 'info' });
      expect(el.variant).toBe('info');
      expect(el.getAttribute('variant')).toBe('info');
    });

    it('applies warning variant', async () => {
      const el = await createAvatar({ variant: 'warning' });
      expect(el.variant).toBe('warning');
    });

    it('applies success variant', async () => {
      const el = await createAvatar({ variant: 'success' });
      expect(el.variant).toBe('success');
    });

    it('applies error variant', async () => {
      const el = await createAvatar({ variant: 'error' });
      expect(el.variant).toBe('error');
    });

    it('applies transparent variant', async () => {
      const el = await createAvatar({ variant: 'transparent' });
      expect(el.variant).toBe('transparent');
    });
  });

  describe('Accessibility', () => {
    it('has role="img" by default', async () => {
      const el = await createAvatar({ text: 'AB' });
      const avatar = el.shadowRoot?.querySelector('.avatar');
      expect(avatar?.getAttribute('role')).toBe('img');
    });

    it('has role="presentation" for decorative images', async () => {
      const el = await createAvatar({ imgSrc: 'https://example.com/avatar.jpg' });
      const avatar = el.shadowRoot?.querySelector('.avatar');
      expect(avatar?.getAttribute('role')).toBe('presentation');
    });

    it('has role="img" when imgAlt is provided', async () => {
      const el = await createAvatar({
        imgSrc: 'https://example.com/avatar.jpg',
        imgAlt: 'User',
      });
      const avatar = el.shadowRoot?.querySelector('.avatar');
      expect(avatar?.getAttribute('role')).toBe('img');
    });

    it('uses ariaLabel when provided', async () => {
      const el = await createAvatar({ text: 'AB', ariaLabel: 'Adam Brown' });
      const avatar = el.shadowRoot?.querySelector('.avatar');
      expect(avatar?.getAttribute('aria-label')).toBe('Adam Brown');
    });

    it('falls back to text for aria-label', async () => {
      const el = await createAvatar({ text: 'AB' });
      const avatar = el.shadowRoot?.querySelector('.avatar');
      expect(avatar?.getAttribute('aria-label')).toBe('AB');
    });

    it('falls back to imgAlt for aria-label', async () => {
      const el = await createAvatar({
        imgSrc: 'https://example.com/avatar.jpg',
        imgAlt: 'User avatar',
      });
      const avatar = el.shadowRoot?.querySelector('.avatar');
      expect(avatar?.getAttribute('aria-label')).toBe('User avatar');
    });
  });

  describe('CSS Shadow Parts', () => {
    it('exposes ag-avatar part', async () => {
      const el = await createAvatar({ text: 'AB' });
      const avatar = el.shadowRoot?.querySelector('[part="ag-avatar"]');
      expect(avatar).toBeTruthy();
    });

    it('exposes ag-avatar-text part when text is provided', async () => {
      const el = await createAvatar({ text: 'AB' });
      const textPart = el.shadowRoot?.querySelector('[part="ag-avatar-text"]');
      expect(textPart).toBeTruthy();
    });

    it('exposes ag-avatar-image part when imgSrc is provided', async () => {
      const el = await createAvatar({
        imgSrc: 'https://example.com/avatar.jpg',
        imgAlt: 'User',
      });
      const imagePart = el.shadowRoot?.querySelector('[part="ag-avatar-image"]');
      expect(imagePart).toBeTruthy();
    });
  });

  describe('Property updates', () => {
    it('updates text dynamically', async () => {
      const el = await createAvatar({ text: 'AB' });
      el.text = 'CD';
      await el.updateComplete;
      const textEl = el.shadowRoot?.querySelector('.avatar-text');
      expect(textEl?.textContent).toBe('CD');
    });

    it('updates size dynamically', async () => {
      const el = await createAvatar({ size: 'sm' });
      el.size = 'lg';
      await el.updateComplete;
      expect(el.size).toBe('lg');
      expect(el.getAttribute('size')).toBe('lg');
    });

    it('updates variant dynamically', async () => {
      const el = await createAvatar({ variant: 'default' });
      el.variant = 'success';
      await el.updateComplete;
      expect(el.variant).toBe('success');
      expect(el.getAttribute('variant')).toBe('success');
    });
  });
});
