import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Mark } from './_Mark';

// Ensure the custom element is defined
if (!customElements.get('ag-mark')) {
  customElements.define('ag-mark', Mark);
}

describe('Mark', () => {
  let element: Mark;

  beforeEach(() => {
    element = document.createElement('ag-mark') as Mark;
  });

  afterEach(() => {
    // Ensure the element is removed from the DOM after each test
    if (element.parentElement) {
      element.remove();
    }
  });

  describe('Static Mode', () => {
    it('renders a single mark tag around content when no search is provided', async () => {
      element.innerHTML = 'Static highlight';
      document.body.appendChild(element);
      await element.updateComplete;

      const markElement = element.shadowRoot?.querySelector('mark.mark');
      expect(markElement).toBeDefined();
      const slot = element.shadowRoot?.querySelector('slot');
      expect(slot).toBeDefined();
      expect(slot?.assignedNodes()[0].textContent).toBe('Static highlight');
    });

    it('applies the correct variant class in static mode', async () => {
      element.innerHTML = 'Static highlight';
      document.body.appendChild(element);
      element.variant = 'success';
      await element.updateComplete;

      const markElement = element.shadowRoot?.querySelector('mark.mark');
      expect(markElement?.classList.contains('mark-success')).toBe(true);
    });
  });

  describe('Reactive Mode', () => {
    beforeEach(() => {
      element.innerHTML = 'The quick brown fox jumps over the lazy dog. The.';
      document.body.appendChild(element);
    });

    it('highlights a single case-insensitive match by default', async () => {
      element.search = 'quick';
      await element.updateComplete;

      const marks = element.shadowRoot?.querySelectorAll('mark');
      expect(marks?.length).toBe(1);
      expect(marks?.[0].textContent).toBe('quick');
      expect(element.shadowRoot?.textContent).toContain('The ');
      expect(element.shadowRoot?.textContent).toContain(' brown fox');
    });

    it('highlights nothing if no match is found', async () => {
      element.search = 'xyz';
      await element.updateComplete;
      
      const marks = element.shadowRoot?.querySelectorAll('mark');
      expect(marks?.length).toBe(0);
      expect(element.shadowRoot?.textContent).toBe('The quick brown fox jumps over the lazy dog. The.');
    });

    it('highlights all matches when matchAll is true', async () => {
      element.search = 'the';
      element.matchAll = true;
      await element.updateComplete;
      
      const marks = element.shadowRoot?.querySelectorAll('mark');
      expect(marks?.length).toBe(3);
      expect(marks?.[0].textContent).toBe('The');
      expect(marks?.[1].textContent).toBe('the');
      expect(marks?.[2].textContent).toBe('The');
    });

    it('highlights only case-sensitive matches when caseSensitive is true', async () => {
      element.search = 'The';
      element.matchAll = true;
      element.caseSensitive = true;
      await element.updateComplete;

      const marks = element.shadowRoot?.querySelectorAll('mark');
      expect(marks?.length).toBe(2);
      expect(marks?.[0].textContent).toBe('The');
      expect(marks?.[1].textContent).toBe('The');
    });

    it('dynamically updates highlights when search term changes', async () => {
      element.search = 'fox';
      await element.updateComplete;
      let marks = element.shadowRoot?.querySelectorAll('mark');
      expect(marks?.length).toBe(1);
      expect(marks?.[0].textContent).toBe('fox');

      element.search = 'dog';
      await element.updateComplete;
      marks = element.shadowRoot?.querySelectorAll('mark');
      expect(marks?.length).toBe(1);
      expect(marks?.[0].textContent).toBe('dog');
    });
  });
});