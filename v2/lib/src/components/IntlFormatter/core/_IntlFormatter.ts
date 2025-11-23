import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export interface IntlFormatterProps {
  type?: 'date' | 'number' | 'percent' | 'currency';
  value?: number | string | Date;
  lang?: string;
  
  // Date-specific props
  date?: Date | string;
  weekday?: 'narrow' | 'short' | 'long';
  era?: 'narrow' | 'short' | 'long';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'short' | 'long';
  timeZone?: string;
  hourFormat?: 'auto' | '12' | '24';
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  
  // Number-specific props
  noGrouping?: boolean;
  currency?: string;
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
}

/**
 * @element ag-intl-formatter
 * @summary Formats dates, numbers, currency, and percentages using the browser's Intl API
 * 
 * @prop {string} type - The type of formatting: 'date', 'number', 'percent', or 'currency'
 * @prop {number|string|Date} value - The value to format (for numbers/currency/percent) or date
 * @prop {string} lang - The locale to use for formatting (e.g., 'en-US', 'fr-FR'). Defaults to browser locale
 * 
 * @fires format-error - Dispatched when formatting fails with details about the error
 * 
 * @csspart date-time - The time element wrapper for date formatting
 * @csspart number - The span element for number formatting
 * @csspart percent - The span element for percent formatting
 * @csspart currency - The span element for currency formatting
 * @csspart error - The span element shown when validation fails
 * 
 * @example
 * ```html
 * <!-- Date formatting -->
 * <ag-intl-formatter type="date" date="2024-01-01"></ag-intl-formatter>
 * 
 * <!-- Date with style shortcuts -->
 * <ag-intl-formatter type="date" date="2024-01-01" date-style="long"></ag-intl-formatter>
 * 
 * <!-- Number formatting -->
 * <ag-intl-formatter type="number" value="1234.56"></ag-intl-formatter>
 * 
 * <!-- Currency formatting -->
 * <ag-intl-formatter type="currency" value="1234.56" currency="USD"></ag-intl-formatter>
 * 
 * <!-- Percent formatting -->
 * <ag-intl-formatter type="percent" value="0.75"></ag-intl-formatter>
 * ```
 */
export class IntlFormatter extends LitElement implements IntlFormatterProps {
  @property({ type: String })
  declare type: 'date' | 'number' | 'percent' | 'currency';

  @property({ type: String })
  declare value: number | string | Date;

  @property({ type: String })
  declare lang: string;

  // Date-specific properties
  @property({ type: String })
  declare date: Date | string;

  @property({ type: String })
  declare weekday: 'narrow' | 'short' | 'long';

  @property({ type: String })
  declare era: 'narrow' | 'short' | 'long';

  @property({ type: String })
  declare year: 'numeric' | '2-digit';

  @property({ type: String })
  declare month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';

  @property({ type: String })
  declare day: 'numeric' | '2-digit';

  @property({ type: String })
  declare hour: 'numeric' | '2-digit';

  @property({ type: String })
  declare minute: 'numeric' | '2-digit';

  @property({ type: String })
  declare second: 'numeric' | '2-digit';

  @property({ type: String, attribute: 'time-zone-name' })
  declare timeZoneName: 'short' | 'long';

  @property({ type: String, attribute: 'time-zone' })
  declare timeZone: string;

  @property({ type: String, attribute: 'hour-format' })
  declare hourFormat: 'auto' | '12' | '24';

  @property({ type: String, attribute: 'date-style' })
  declare dateStyle: 'full' | 'long' | 'medium' | 'short';

  @property({ type: String, attribute: 'time-style' })
  declare timeStyle: 'full' | 'long' | 'medium' | 'short';

  // Number-specific properties
  @property({ type: Boolean, attribute: 'no-grouping' })
  declare noGrouping: boolean;

  @property({ type: String })
  declare currency: string;

  @property({ type: String, attribute: 'currency-display' })
  declare currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name';

  @property({ type: Number, attribute: 'minimum-integer-digits' })
  declare minimumIntegerDigits: number;

  @property({ type: Number, attribute: 'minimum-fraction-digits' })
  declare minimumFractionDigits: number;

  @property({ type: Number, attribute: 'maximum-fraction-digits' })
  declare maximumFractionDigits: number;

  @property({ type: Number, attribute: 'minimum-significant-digits' })
  declare minimumSignificantDigits: number;

  @property({ type: Number, attribute: 'maximum-significant-digits' })
  declare maximumSignificantDigits: number;

  // Formatter cache for performance
  private _formatterCache = new Map<string, Intl.DateTimeFormat | Intl.NumberFormat>();

  constructor() {
    super();
    this.type = 'date';
    this.hourFormat = 'auto';
    this.noGrouping = false;
    this.currency = 'USD';
    this.currencyDisplay = 'symbol';
  }

  /**
   * Get the locale to use for formatting
   */
  private _getLocale(): string | string[] {
    return this.lang || navigator.language;
  }

  /**
   * Generate a cache key based on formatter type and options
   */
  private _getCacheKey(): string {
    const parts = [this.type, this._getLocale()];
    
    if (this.type === 'date') {
      parts.push(
        this.dateStyle || '',
        this.timeStyle || '',
        this.weekday || '',
        this.era || '',
        this.year || '',
        this.month || '',
        this.day || '',
        this.hour || '',
        this.minute || '',
        this.second || '',
        this.timeZoneName || '',
        this.timeZone || '',
        this.hourFormat || ''
      );
    } else {
      parts.push(
        String(this.noGrouping),
        this.currency || '',
        this.currencyDisplay || '',
        String(this.minimumIntegerDigits || ''),
        String(this.minimumFractionDigits || ''),
        String(this.maximumFractionDigits || ''),
        String(this.minimumSignificantDigits || ''),
        String(this.maximumSignificantDigits || '')
      );
    }
    
    return parts.join('|');
  }

  /**
   * Dispatch a format error event
   */
  private _dispatchError(type: 'date' | 'number', error: Error): void {
    this.dispatchEvent(new CustomEvent('format-error', {
      detail: { type, error: error.message },
      bubbles: true,
      composed: true
    }));
  }

  /**
   * Validate component properties based on type
   */
  private _validate(): { valid: boolean; error?: string } {
    if (this.type === 'currency' && !this.currency) {
      return { valid: false, error: 'Currency type requires a currency code' };
    }
    
    if (this.type === 'date') {
      const dateValue = this.date || this.value;
      if (!dateValue) {
        return { valid: false, error: 'Date type requires a date value' };
      }
    } else {
      if (this.value === undefined || this.value === null) {
        return { valid: false, error: `${this.type} type requires a value` };
      }
    }
    
    return { valid: true };
  }

  /**
   * Format a date value using Intl.DateTimeFormat
   */
  private _formatDate(): string {
    const validation = this._validate();
    if (!validation.valid) {
      this._dispatchError('date', new Error(validation.error));
      return '';
    }

    const dateValue = this.date || this.value;
    const date = new Date(dateValue);

    // Check for invalid date
    if (isNaN(date.getTime())) {
      this._dispatchError('date', new Error('Invalid date'));
      return '';
    }

    const hour12 = this.hourFormat === 'auto' ? undefined : this.hourFormat === '12';

    const options: Intl.DateTimeFormatOptions = {
      dateStyle: this.dateStyle,
      timeStyle: this.timeStyle,
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12: hour12,
    };

    // Remove undefined values
    Object.keys(options).forEach(key => {
      if (options[key as keyof Intl.DateTimeFormatOptions] === undefined) {
        delete options[key as keyof Intl.DateTimeFormatOptions];
      }
    });

    try {
      // Use cache for better performance
      const cacheKey = this._getCacheKey();
      let formatter = this._formatterCache.get(cacheKey) as Intl.DateTimeFormat;
      
      if (!formatter) {
        formatter = new Intl.DateTimeFormat(this._getLocale(), options);
        this._formatterCache.set(cacheKey, formatter);
      }
      
      return formatter.format(date);
    } catch (error) {
      this._dispatchError('date', error as Error);
      return '';
    }
  }

  /**
   * Format a number value using Intl.NumberFormat
   */
  private _formatNumber(): string {
    const validation = this._validate();
    if (!validation.valid) {
      this._dispatchError('number', new Error(validation.error));
      return '';
    }

    const numValue = typeof this.value === 'string' ? parseFloat(this.value) : Number(this.value);

    // Check for invalid number
    if (isNaN(numValue)) {
      this._dispatchError('number', new Error('Invalid number'));
      return '';
    }

    const style = this.type === 'percent' ? 'percent' : this.type === 'currency' ? 'currency' : 'decimal';

    const options: Intl.NumberFormatOptions = {
      style,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits,
    };

    // Remove undefined values
    Object.keys(options).forEach(key => {
      if (options[key as keyof Intl.NumberFormatOptions] === undefined) {
        delete options[key as keyof Intl.NumberFormatOptions];
      }
    });

    try {
      // Use cache for better performance
      const cacheKey = this._getCacheKey();
      let formatter = this._formatterCache.get(cacheKey) as Intl.NumberFormat;
      
      if (!formatter) {
        formatter = new Intl.NumberFormat(this._getLocale(), options);
        this._formatterCache.set(cacheKey, formatter);
      }
      
      return formatter.format(numValue);
    } catch (error) {
      this._dispatchError('number', error as Error);
      return '';
    }
  }

  /**
   * Render the formatted value
   */
  render() {
    const validation = this._validate();
    if (!validation.valid) {
      return html`<span part="error"></span>`;
    }

    let formattedValue = '';

    if (this.type === 'date') {
      formattedValue = this._formatDate();
      const dateValue = this.date || this.value;
      const date = new Date(dateValue);
      
      if (!isNaN(date.getTime())) {
        return html`<time part="date-time" datetime="${date.toISOString()}">${formattedValue}</time>`;
      }
    } else {
      formattedValue = this._formatNumber();
      return html`<span part="${this.type}">${formattedValue}</span>`;
    }

    return html`${formattedValue}`;
  }

  /**
   * Clean up formatter cache when component is removed
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this._formatterCache.clear();
  }
}
