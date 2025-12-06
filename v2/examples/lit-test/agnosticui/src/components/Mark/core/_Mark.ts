import { LitElement, html, css } from 'lit';
import type { TemplateResult } from 'lit';
import { property, query } from 'lit/decorators.js';

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
  static styles = css`
    :host {
      display: inline;
    }
    .mark {
      border-radius: var(--ag-radius-xs);
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .mark::before,
    .mark::after {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
    .mark::before {
      content: " [highlight start] ";
    }
    .mark::after {
      content: " [highlight end] ";
    }
    .mark-warning {
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }
    .mark-info {
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
    }
    .mark-success {
      background-color: var(--ag-success-background);
      color: var(--ag-success-text);
    }
    .mark-error {
      background-color: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }
    .mark-primary {
      background-color: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }
    .mark-secondary {
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }
    .mark-monochrome {
      background-color: var(--ag-background-secondary-inverted);
      color: var(--ag-text-primary-inverted);
    }
  `;

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
    // Return empty string if the slot is not yet available
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

  private _renderStatic() {
    return html`
      <mark class="mark mark-${this.variant}" part="ag-mark">
        <slot @slotchange=${this._onSlotChange}></slot>
      </mark>
    `;
  }
  
  private _renderReactive() {
    const text = this._textContent;
    // The hidden slot is our source of truth for the light DOM content.
    const hiddenSlot = html`<slot @slotchange=${this._onSlotChange} style="display: none;"></slot>`;
    
    if (!text) {
      return hiddenSlot;
    }

    if (!this.search) {
      return html`${hiddenSlot}${text}`;
    }

    // To prevent user input from breaking the RegExp, we escape special characters.
    // This treats the search string as a literal sequence of characters.
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

    // We use two different strategies depending on whether we need to find all matches
    // or just the first one.
    if (this.matchAll) {
      // String.prototype.matchAll() returns an iterator of all results, which we
      // spread into an array to work with it.
      const matches = [...text.matchAll(regex)];
      if (!matches.length) return html`${hiddenSlot}${text}`;
      
      let lastIndex = 0;
      // We loop through each match, pushing the text *before* the match,
      // and then the highlighted match itself.
      for (const match of matches) {
        parts.push(text.substring(lastIndex, match.index));
        parts.push(html`<mark class="mark mark-${this.variant}">${match[0]}</mark>`);
        lastIndex = (match.index ?? 0) + match[0].length;
      }
      // Finally, we add any remaining text after the last match.
      parts.push(text.substring(lastIndex));
    } else {
      // For a single match, we can't use a global regex with `split`, as it would
      // incorrectly remove all occurrences. Instead, we find only the first match.
      const match = text.match(regex);
      if (match && match.index !== undefined) {
        // We manually slice the string into three parts: before the match, the
        // highlighted match, and after the match.
        const pre = text.substring(0, match.index);
        const highlighted = html`<mark class="mark mark-${this.variant}">${match[0]}</mark>`;
        const post = text.substring(match.index + match[0].length);
        parts.push(pre, highlighted, post);
      } else {
        // If no match is found, we just push the original text.
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
