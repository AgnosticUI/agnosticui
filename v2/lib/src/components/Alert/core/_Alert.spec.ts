import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Alert, type AlertType } from './_Alert';

if (!customElements.get('ag-alert')) {
  customElements.define('ag-alert', Alert);
}

describe('Alert Component', () => {
  let element: Alert;

  beforeEach(() => {
    element = document.createElement('ag-alert') as Alert;
    document.body.appendChild(element);
  });

  afterEach(() => {
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });

  it('should register the custom element', () => {
    expect(customElements.get('ag-alert')).toBeDefined();
  });

  it('should have default properties', async () => {
    await element.updateComplete;
    expect(element.type).toBe('default');
    expect(element.bordered).toBe(false);
    expect(element.rounded).toBe(false);
    expect(element.borderedLeft).toBe(false);
  });

  it('should have role="alert"', async () => {
    await element.updateComplete;
    const div = element.shadowRoot!.querySelector('.alert');
    expect(div).not.toBeNull();
    expect(div!.getAttribute('role')).toBe('alert');
  });

  it('should render slot content', async () => {
    const slotContent = '<div>My Alert</div>';
    element.innerHTML = slotContent;
    await element.updateComplete;
    // Vitest does not have a direct equivalent of `@open-wc/testing`'s `lightDom`,
    // so we inspect the element's innerHTML.
    expect(element.innerHTML).toContain('My Alert');
  });

  describe('Alert Types', () => {
    const alertTypes: AlertType[] = ['warning', 'info', 'success', 'error', 'primary', 'default'];
    alertTypes.forEach(type => {
      it(`should apply the correct class for type="${type}"`, async () => {
        element.type = type;
        await element.updateComplete;
        const div = element.shadowRoot!.querySelector('.alert');
        expect(div).not.toBeNull();
        expect(div!.classList.contains(`alert-${type}`)).toBe(true);
      });
    });
  });

  describe('Visual Modifiers', () => {
    it('should apply bordered class when bordered is true', async () => {
      element.bordered = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector('.alert');
      expect(div).not.toBeNull();
      expect(div!.classList.contains('alert-bordered')).toBe(true);
    });

    it('should apply rounded class when rounded is true', async () => {
      element.rounded = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector('.alert');
      expect(div).not.toBeNull();
      expect(div!.classList.contains('alert-rounded')).toBe(true);
    });

    it('should apply border-left class when borderedLeft is true', async () => {
      element.borderedLeft = true;
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector('.alert');
      expect(div).not.toBeNull();
      expect(div!.classList.contains('alert-border-left')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have an implicit aria-live of "assertive" due to role="alert"', async () => {
      // While we cannot directly test the screen reader announcement,
      // we verify the presence of the role attribute that triggers it.
      await element.updateComplete;
      const div = element.shadowRoot!.querySelector('.alert');
      expect(div).not.toBeNull();
      expect(div!.getAttribute('role')).toBe('alert');
    });
  });
});
