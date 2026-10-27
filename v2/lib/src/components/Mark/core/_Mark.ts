import { LitElement, html, css, unsafeCSS } from 'lit';
import type { TemplateResult } from 'lit';
import { property, query } from 'lit/decorators.js';
import styles from './mark-structure.module.css';
import structuralStylesText from './mark-structure.module.css?inline';

export type MarkVariant = 'warning' | 'info' | 'success' | 'error' | 'primary' | 'secondary' | 'monochrome';

export interface MarkProps {
  variant?: MarkVariant;
  search?: string;
  caseSensitive?: boolean;
  matchAll?: boolean;
}

/**
 * @element ag-mark
 * @csspart ag-mark - The root wrapping mark element in static mode.
 */
export class Mark extends LitElement implements MarkProps {
  // Security Constraint: structuralStylesText is treated as compile-time static text
  static styles = css`${unsafeCSS(structuralStylesText)}`;

  @property({ type: String })
  declare public variant: MarkVariant;

  @property({ type: String })
  declare search?: string;

  @property({ type: Boolean, attribute: 'case-sensitive' })
  declare caseSensitive: boolean;

  @property({ type: Boolean, attribute: 'match-all' })
  declare matchAll: boolean;

  @query('slot')
  private _slot!: HTMLSlotElement;

  private get _textContent(): string {
    if (!this._slot) return '';
    return this._slot.assignedNodes({ flatten: true }).map(node => node.textContent ?? '').join('');
  }

  constructor() {
    super();
    this.variant = 'warning';
    this.search = undefined;
    this.caseSensitive = false;
    this.matchAll = false;
  }

  private _onSlotChange() {
    this.requestUpdate();
  }

  private getVariantClass(): string {
    // CSS Module Mapping Guardrail conversion
    const mapping: Record<MarkVariant, string> = {
      warning: styles.markWarning,
      info: styles.markInfo,
      success: styles.markSuccess,
      error: styles.markError,
      primary: styles.markPrimary,
      secondary: styles.markSecondary,
      monochrome: styles.markMonochrome
    };
    return mapping[this.variant] || styles.markWarning;
  }

  private _renderStatic() {
    return html`
      <mark class="${styles.mark} ${this.getVariantClass()}" part="ag-mark">
        <slot @slotchange=${this._onSlotChange}></slot>
      </mark>
    `;
  }
  
  private _renderReactive() {
    const text = this._textContent;
    const hiddenSlot = html`<slot @slotchange=${this._onSlotChange} style="display: none;"></slot>`;
    
    if (!text) {
      return hiddenSlot;
    }

    if (!this.search) {
      return html`${hiddenSlot}${text}`;
    }

    const escapedSearch = this.search.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
    if (!escapedSearch) {
      return html`${hiddenSlot}${text}`;
    }

    let flags = this.matchAll ? 'g' : '';
    if (!this.caseSensitive) {
      flags += 'i';
    }

    const regex = new RegExp(escapedSearch, flags);
    const parts: (string | TemplateResult)[] = [];
    const variantClass = this.getVariantClass();

    if (this.matchAll) {
      const matches = [...text.matchAll(regex)];
      if (!matches.length) return html`${hiddenSlot}${text}`;
      
      let lastIndex = 0;
      for (const match of matches) {
        parts.push(text.substring(lastIndex, match.index));
        parts.push(html`<mark class="${styles.mark} ${variantClass}">${match[0]}</mark>`);
        lastIndex = (match.index ?? 0) + match[0].length;
      }
      parts.push(text.substring(lastIndex));
    } else {
      const match = text.match(regex);
      if (match && match.index !== undefined) {
        const pre = text.substring(0, match.index);
        const highlighted = html`<mark class="${styles.mark} ${variantClass}">${match[0]}</mark>`;
        const post = text.substring(match.index + match[0].length);
        parts.push(pre, highlighted, post);
      } else {
        parts.push(text);
      }
    }
    
    return html`${hiddenSlot}${parts}`;
  }

  render() {
    if (!this.search) {
      return this._renderStatic();
    }
    return this._renderReactive();
  }
}
