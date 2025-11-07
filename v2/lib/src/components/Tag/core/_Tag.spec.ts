import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { AgTag } from './Tag';

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
    el.uppercase = true;
    await el.updateComplete;
    expect(el.hasAttribute('uppercase')).toBe(true);
  });

  it('renders slot content for close', async () => {
    el.innerHTML = `Label <button slot="close">x</button>`;
    await el.updateComplete;
    const slots = el.shadowRoot?.querySelectorAll('slot');
    expect(slots?.length).toBe(2);
  });

  describe('Removable Functionality', () => {
    it('should not show remove button when removable is false', async () => {
      el.removable = false;
      await el.updateComplete;
      const removeButton = el.shadowRoot?.querySelector('.tag-remove-button');
      expect(removeButton).toBeNull();
    });

    it('should show remove button when removable is true', async () => {
      el.removable = true;
      await el.updateComplete;
      const removeButton = el.shadowRoot?.querySelector('.tag-remove-button');
      expect(removeButton).not.toBeNull();
    });

    it('should dispatch tag-remove event when remove button is clicked', async () => {
      el.variant = 'success';
      el.removable = true;
      await el.updateComplete;

      let eventFired = false;
      let eventDetail: any = null;

      el.addEventListener('tag-remove', (e: Event) => {
        eventFired = true;
        eventDetail = (e as CustomEvent).detail;
      });

      const removeButton = el.shadowRoot?.querySelector('.tag-remove-button') as HTMLButtonElement;
      expect(removeButton).not.toBeNull();
      removeButton.click();

      expect(eventFired).toBe(true);
      expect(eventDetail.variant).toBe('success');
    });

    it('should invoke onTagRemove callback when remove button is clicked', async () => {
      const onRemoveCallback = vi.fn();
      el.variant = 'warning';
      el.removable = true;
      el.onTagRemove = onRemoveCallback;
      await el.updateComplete;

      const removeButton = el.shadowRoot?.querySelector('.tag-remove-button') as HTMLButtonElement;
      removeButton.click();

      expect(onRemoveCallback).toHaveBeenCalledTimes(1);
      expect(onRemoveCallback.mock.calls[0][0].detail.variant).toBe('warning');
    });

    it('should support both addEventListener and callback props simultaneously', async () => {
      const onRemoveCallback = vi.fn();
      let addEventListenerCalled = false;

      el.variant = 'info';
      el.removable = true;
      el.onTagRemove = onRemoveCallback;
      await el.updateComplete;

      el.addEventListener('tag-remove', () => {
        addEventListenerCalled = true;
      });

      const removeButton = el.shadowRoot?.querySelector('.tag-remove-button') as HTMLButtonElement;
      removeButton.click();

      // Both patterns should work
      expect(onRemoveCallback).toHaveBeenCalledTimes(1);
      expect(addEventListenerCalled).toBe(true);
    });
  });

  describe('Event Handling Patterns', () => {
    describe('addEventListener Pattern', () => {
      it('should dispatch tag-remove event with detail', async () => {
        el.variant = 'error';
        el.removable = true;
        await el.updateComplete;

        let eventFired = false;
        let eventDetail: any;

        el.addEventListener('tag-remove', (e: Event) => {
          eventFired = true;
          eventDetail = (e as CustomEvent).detail;
        });

        const removeButton = el.shadowRoot?.querySelector('.tag-remove-button') as HTMLButtonElement;
        removeButton.click();

        expect(eventFired).toBe(true);
        expect(eventDetail.variant).toBe('error');
      });
    });

    describe('Callback Props Pattern', () => {
      it('should invoke onTagRemove callback with event detail', async () => {
        const onRemoveCallback = vi.fn();
        el.variant = 'primary';
        el.removable = true;
        el.onTagRemove = onRemoveCallback;
        await el.updateComplete;

        const removeButton = el.shadowRoot?.querySelector('.tag-remove-button') as HTMLButtonElement;
        removeButton.click();

        expect(onRemoveCallback).toHaveBeenCalledTimes(1);
        expect(onRemoveCallback.mock.calls[0][0].detail.variant).toBe('primary');
      });
    });

    describe('Event Bubbling and Composition', () => {
      it('should dispatch events with bubbles: true and composed: true', async () => {
        el.removable = true;
        await el.updateComplete;

        let removeEvent: any = null;

        el.addEventListener('tag-remove', (e: Event) => {
          removeEvent = e;
        });

        const removeButton = el.shadowRoot?.querySelector('.tag-remove-button') as HTMLButtonElement;
        removeButton.click();

        expect(removeEvent.bubbles).toBe(true);
        expect(removeEvent.composed).toBe(true);
      });
    });
  });
});
