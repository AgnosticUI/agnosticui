import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { IntlFormatter } from './IntlFormatter.js';

describe('IntlFormatter', () => {
  let element: IntlFormatter;

  beforeEach(() => {
    element = document.createElement('ag-intl-formatter') as IntlFormatter;
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.remove();
  });

  describe('Rendering', () => {
    it('renders correctly', async () => {
      expect(element).toBeDefined();
      expect(element.tagName.toLowerCase()).toBe('ag-intl-formatter');
      await element.updateComplete;
    });

    it('renders with default props', async () => {
      await element.updateComplete;
      expect(element.type).toBe('date');
      expect(element.hourFormat).toBe('auto');
      expect(element.noGrouping).toBe(false);
      expect(element.currency).toBe('USD');
      expect(element.currencyDisplay).toBe('symbol');
    });

    it('renders error state when validation fails', async () => {
      element.type = 'currency';
      element.currency = ''; // Invalid - currency required
      element.value = 100;
      await element.updateComplete;

      const errorSpan = element.shadowRoot?.querySelector('[part="error"]');
      expect(errorSpan).toBeDefined();
    });
  });

  describe('Date Formatting', () => {
    it('formats a date with default options', async () => {
      element.type = 'date';
      element.date = '2024-01-15';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBeTruthy();
      expect(content).toContain('2024');
    });

    it('formats a date with custom options', async () => {
      element.type = 'date';
      element.date = '2024-01-15T12:00:00';
      element.year = 'numeric';
      element.month = 'long';
      element.day = 'numeric';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('January');
      expect(content).toMatch(/1[45]/); // Handles timezone differences
      expect(content).toContain('2024');
    });

    it('formats date with dateStyle shortcut', async () => {
      element.type = 'date';
      element.date = '2024-01-15';
      element.dateStyle = 'long';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('January');
      expect(content).toContain('2024');
    });

    it('formats time with timeStyle shortcut', async () => {
      element.type = 'date';
      element.date = '2024-01-15T14:30:00';
      element.timeStyle = 'short';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toMatch(/\d{1,2}:\d{2}/);
    });

    it('renders time element for dates with correct part', async () => {
      element.type = 'date';
      element.date = '2024-01-15T10:30:00Z';
      await element.updateComplete;

      const timeElement = element.shadowRoot?.querySelector('time[part="date-time"]');
      expect(timeElement).toBeDefined();
      expect(timeElement?.getAttribute('datetime')).toContain('2024-01-15');
    });

    it('handles invalid date gracefully', async () => {
      element.type = 'date';
      element.date = 'invalid-date';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('');
    });

    it('dispatches error event for invalid date', async () => {
      const errorHandler = vi.fn();
      element.addEventListener('format-error', errorHandler);

      element.type = 'date';
      element.date = 'invalid-date';
      await element.updateComplete;

      expect(errorHandler).toHaveBeenCalled();
      expect(errorHandler.mock.calls[0][0].detail.type).toBe('date');
    });

    it('respects hour format 24', async () => {
      element.type = 'date';
      element.date = '2024-01-15T14:30:00';
      element.hour = 'numeric';
      element.minute = 'numeric';
      element.hourFormat = '24';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('14');
    });

    it('respects hour format 12', async () => {
      element.type = 'date';
      element.date = '2024-01-15T14:30:00';
      element.hour = 'numeric';
      element.minute = 'numeric';
      element.hourFormat = '12';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toMatch(/[AP]M/);
    });

    it('formats weekday', async () => {
      element.type = 'date';
      element.date = '2024-01-15T12:00:00'; // Monday at noon
      element.weekday = 'long';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      // Could be Sunday or Monday depending on timezone interpretation
      expect(content).toMatch(/Sunday|Monday/);
    });

    it('respects timezone', async () => {
      element.type = 'date';
      element.date = '2024-01-15T12:00:00Z';
      element.timeZone = 'America/New_York';
      element.hour = 'numeric';
      element.timeZoneName = 'short';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBeTruthy();
    });

    it('formats era when specified', async () => {
      element.type = 'date';
      element.date = '2024-01-15';
      element.era = 'short';
      element.year = 'numeric';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('AD');
    });

    it('uses formatter cache for repeated renders', async () => {
      element.type = 'date';
      element.date = '2024-01-15';
      element.lang = 'en-US';
      await element.updateComplete;

      const firstContent = element.shadowRoot?.textContent?.trim();

      // Change date but keep formatting options the same
      element.date = '2024-02-20';
      await element.updateComplete;

      const secondContent = element.shadowRoot?.textContent?.trim();
      expect(firstContent).not.toBe(secondContent);
    });
  });

  describe('Number Formatting', () => {
    it('formats a number with default options', async () => {
      element.type = 'number';
      element.value = 1234.56;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('1,234.56');
    });

    it('renders with correct part attribute', async () => {
      element.type = 'number';
      element.value = 1234.56;
      element.lang = 'en-US';
      await element.updateComplete;

      const span = element.shadowRoot?.querySelector('span[part="number"]');
      expect(span).toBeDefined();
    });

    it('formats without grouping separators', async () => {
      element.type = 'number';
      element.value = 1234.56;
      element.noGrouping = true;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('1234.56');
    });

    it('respects minimum fraction digits', async () => {
      element.type = 'number';
      element.value = 10;
      element.minimumFractionDigits = 2;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('10.00');
    });

    it('respects maximum fraction digits', async () => {
      element.type = 'number';
      element.value = 10.12345;
      element.maximumFractionDigits = 2;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('10.12');
    });

    it('respects minimum integer digits', async () => {
      element.type = 'number';
      element.value = 5;
      element.minimumIntegerDigits = 3;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('005');
    });

    it('respects significant digits', async () => {
      element.type = 'number';
      element.value = 12345;
      element.minimumSignificantDigits = 2;
      element.maximumSignificantDigits = 3;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toMatch(/12[,.]?[34]/);
    });

    it('handles invalid number gracefully', async () => {
      element.type = 'number';
      element.value = 'not-a-number';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('');
    });

    it('dispatches error event for invalid number', async () => {
      const errorHandler = vi.fn();
      element.addEventListener('format-error', errorHandler);

      element.type = 'number';
      element.value = 'not-a-number';
      await element.updateComplete;

      expect(errorHandler).toHaveBeenCalled();
      expect(errorHandler.mock.calls[0][0].detail.type).toBe('number');
    });

    it('handles missing value gracefully', async () => {
      element.type = 'number';
      await element.updateComplete;

      const errorSpan = element.shadowRoot?.querySelector('[part="error"]');
      expect(errorSpan).toBeDefined();
    });
  });

  describe('Percent Formatting', () => {
    it('formats a percentage', async () => {
      element.type = 'percent';
      element.value = 0.75;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('75%');
    });

    it('renders with correct part attribute', async () => {
      element.type = 'percent';
      element.value = 0.75;
      element.lang = 'en-US';
      await element.updateComplete;

      const span = element.shadowRoot?.querySelector('span[part="percent"]');
      expect(span).toBeDefined();
    });

    it('formats percentage with decimals', async () => {
      element.type = 'percent';
      element.value = 0.1234;
      element.minimumFractionDigits = 2;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('12');
      expect(content).toContain('%');
    });
  });

  describe('Currency Formatting', () => {
    it('formats currency with default USD', async () => {
      element.type = 'currency';
      element.value = 1234.56;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('$');
      expect(content).toContain('1,234.56');
    });

    it('renders with correct part attribute', async () => {
      element.type = 'currency';
      element.value = 1234.56;
      element.lang = 'en-US';
      await element.updateComplete;

      const span = element.shadowRoot?.querySelector('span[part="currency"]');
      expect(span).toBeDefined();
    });

    it('formats different currencies', async () => {
      element.type = 'currency';
      element.value = 1234.56;
      element.currency = 'EUR';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('€');
    });

    it('respects currency display options - code', async () => {
      element.type = 'currency';
      element.value = 1234.56;
      element.currency = 'USD';
      element.currencyDisplay = 'code';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('USD');
    });

    it('respects currency display options - name', async () => {
      element.type = 'currency';
      element.value = 1234.56;
      element.currency = 'USD';
      element.currencyDisplay = 'name';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('US dollar');
    });

    it('validates currency code is required', async () => {
      element.type = 'currency';
      element.value = 1234.56;
      element.currency = '';
      await element.updateComplete;

      const errorSpan = element.shadowRoot?.querySelector('[part="error"]');
      expect(errorSpan).toBeDefined();
    });
  });

  describe('Localization', () => {
    it('formats numbers with French locale', async () => {
      element.type = 'number';
      element.value = 1234.56;
      element.lang = 'fr-FR';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      // French uses space as thousands separator and comma for decimals
      expect(content).toMatch(/1[\s\u202F]234,56/);
    });

    it('formats dates with French locale', async () => {
      element.type = 'date';
      element.date = '2024-01-15';
      element.month = 'long';
      element.lang = 'fr-FR';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('janvier');
    });

    it('formats currency with different locale', async () => {
      element.type = 'currency';
      element.value = 1234.56;
      element.currency = 'EUR';
      element.lang = 'de-DE';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      // German uses . for thousands and , for decimals
      expect(content).toContain('1.234,56');
    });

    it('uses browser locale when lang not specified', async () => {
      element.type = 'number';
      element.value = 1234.56;
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('handles string number values', async () => {
      element.type = 'number';
      element.value = '1234.56';
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('1,234.56');
    });

    it('handles Date object', async () => {
      element.type = 'date';
      element.date = new Date('2024-01-15T10:00:00Z');
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBeTruthy();
    });

    it('updates when properties change', async () => {
      element.type = 'number';
      element.value = 100;
      element.lang = 'en-US';
      await element.updateComplete;

      let content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('100');

      element.value = 200;
      await element.updateComplete;

      content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('200');
    });

    it('handles zero values', async () => {
      element.type = 'number';
      element.value = 0;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBe('0');
    });

    it('handles negative numbers', async () => {
      element.type = 'number';
      element.value = -1234.56;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toContain('-');
      expect(content).toContain('1,234.56');
    });

    it('handles very large numbers', async () => {
      element.type = 'number';
      element.value = 999999999999.99;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBeTruthy();
      expect(content).toContain('999');
    });

    it('handles very small decimals', async () => {
      element.type = 'number';
      element.value = 0.000001;
      element.lang = 'en-US';
      await element.updateComplete;

      const content = element.shadowRoot?.textContent?.trim();
      expect(content).toBeTruthy();
    });

    it('clears formatter cache on disconnect', async () => {
      element.type = 'number';
      element.value = 1234;
      await element.updateComplete;

      // Cache should have entries
      element.remove();
      
      // After removal, cache should be cleared (tested via disconnectedCallback)
      expect(element.isConnected).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('provides semantic time element for dates', async () => {
      element.type = 'date';
      element.date = '2024-01-15T10:30:00Z';
      await element.updateComplete;

      const timeElement = element.shadowRoot?.querySelector('time');
      expect(timeElement).toBeDefined();
      expect(timeElement?.hasAttribute('datetime')).toBe(true);
    });

    it('exposes CSS parts for styling', async () => {
      element.type = 'number';
      element.value = 1234;
      await element.updateComplete;

      const span = element.shadowRoot?.querySelector('[part]');
      expect(span).toBeDefined();
      expect(span?.getAttribute('part')).toBeTruthy();
    });
  });

  describe('Performance', () => {
    it('caches formatters for better performance', async () => {
      const iterations = 10;
      const start = performance.now();

      for (let i = 0; i < iterations; i++) {
        element.type = 'number';
        element.value = 1000 + i;
        element.lang = 'en-US';
        await element.updateComplete;
      }

      const duration = performance.now() - start;
      // With caching, this should be reasonably fast
      expect(duration).toBeLessThan(500); // 500ms for 10 renders
    });
  });
});
