import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  size?: 'xs' | 'sm' | 'md';
  dot?: boolean;
  value?: number | null;
  max?: number;
  interactive?: boolean;
  statusLabel?: string | null;
  live?: 'off' | 'polite' | 'assertive';
  hiddenFromAT?: boolean;
}

export class AgBadge extends LitElement implements BadgeProps {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ag-radius-full);
      padding: var(--ag-space-1) var(--ag-space-2);
      font-size: var(--ag-font-size-xs);
      line-height: 1;
      white-space: nowrap;
      transition: all var(--ag-motion-fast);
    }
    :host([dot]) .badge {
      width: var(--ag-space-2);
      height: var(--ag-space-2);
      padding: 0;
      border-radius: 50%;
    }
    :host([size="xs"]) .badge {
      font-size: calc(var(--ag-font-size-xs) - 1px);
    }
    :host([size="xs"]:not([dot])) .badge {
      padding: var(--ag-space-0) var(--ag-space-1);
    }
    :host([size="xs"][dot]) .badge {
      width: var(--ag-space-1);
      height: var(--ag-space-1);
    }
    :host([size="sm"]) .badge {
      font-size: var(--ag-font-size-xs);
    }
    :host([size="sm"]:not([dot])) .badge {
      padding: var(--ag-space-1) var(--ag-space-2);
    }
    :host([size="sm"][dot]) .badge {
      width: var(--ag-space-2);
      height: var(--ag-space-2);
    }
    :host([size="md"]) .badge {
      font-size: var(--ag-font-size-sm);
    }
    :host([size="md"]:not([dot])) .badge {
      padding: var(--ag-space-1) var(--ag-space-3);
    }
    :host([size="md"][dot]) .badge {
      width: var(--ag-space-3);
      height: var(--ag-space-3);
    }
    :host([variant="default"]) .badge {
      background-color: var(--ag-neutral-800);
      color: var(--ag-white);
    }
    :host([variant="success"]) .badge {
      background-color: var(--ag-success);
      color: var(--ag-white);
    }
    :host([variant="warning"]) .badge {
      background-color: var(--ag-warning);
      color: var(--ag-black);
    }
    :host([variant="danger"]) .badge {
      background-color: var(--ag-danger);
      color: var(--ag-white);
    }
    :host([variant="info"]) .badge {
      background-color: var(--ag-info);
      color: var(--ag-white);
    }
    :host([variant="neutral"]) .badge {
      background-color: var(--ag-neutral-200);
      color: var(--ag-neutral-800);
    }
    :host([interactive]) .badge {
      cursor: pointer;
    }
    :host([interactive]) .badge:hover {
      filter: brightness(1.1);
    }
    :host([interactive]) .badge:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }
    :host([single-char]) .badge {
      border-radius: 50%;
    }
    :host([size="xs"][single-char]) .badge {
      padding: 1px;
      width: calc(var(--ag-font-size-xs));
      height: calc(var(--ag-font-size-xs));
    }
    :host([size="sm"][single-char]) .badge {
      padding: 2px;
      width: var(--ag-font-size-sm);
      height: var(--ag-font-size-sm);
    }
    :host([size="md"][single-char]) .badge {
      padding: 2px;
      width: var(--ag-font-size-base);
      height: var(--ag-font-size-base);
    }
  `;

  @property({ type: String, reflect: true })
  public variant: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' = 'default';

  @property({ type: String, reflect: true })
  public size: 'xs' | 'sm' | 'md' = 'md';

  @property({ type: Boolean, reflect: true })
  public dot = false;

  @property({ type: Number })
  public value: number | null = null;

  @property({ type: Number })
  public max = 99;

  @property({ type: Boolean, reflect: true })
  public interactive = false;

  @property({ type: String, attribute: 'status-label' })
  public statusLabel: string | null = null;

  @property({ type: String })
  public live: 'off' | 'polite' | 'assertive' = 'off';

  // Hidden from assistive technologies
  @property({ type: Boolean, attribute: 'hidden-from-at' })
  public hiddenFromAT = false;

  private get _displayValue() {
    if (this.value === null || this.value === undefined) {
      return '';
    }
    if (this.value > this.max) {
      return `${this.max}+`;
    }
    return this.value.toString();
  }

  private _handleClick() {
    if (this.interactive) {
      this.dispatchEvent(new CustomEvent('badge:click', { bubbles: true, composed: true }));
    }
  }

  private _handleKeydown(e: KeyboardEvent) {
    if (this.interactive && (e.key === 'Enter' || e.key === ' ')) {
      this.dispatchEvent(new CustomEvent('badge:click', { bubbles: true, composed: true }));
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.live !== 'off') {
      this._updateLiveRegion();
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    this._checkSingleChar();
    if (changedProperties.has('value') && this.live !== 'off') {
      this._updateLiveRegion();
    }
  }

  private _checkSingleChar() {
    let text = this._displayValue || '';
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      const nodes = slot.assignedNodes({ flatten: true });
      text += nodes.map(node => node.textContent || '').join('');
    }
    text = text.replace(/\s+/g, '');
    if (text.length === 1 && !this.dot) {
      this.setAttribute('single-char', 'true');
    } else {
      this.removeAttribute('single-char');
    }
  }

  private _onSlotChange() {
    this._checkSingleChar();
  }

  private _updateLiveRegion() {
    let liveRegion = document.getElementById('ag-badge-live');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'ag-badge-live';
      liveRegion.className = 'visually-hidden';
      liveRegion.setAttribute('aria-live', this.live);
      liveRegion.setAttribute('aria-atomic', 'true');
      document.body.appendChild(liveRegion);
    }
    liveRegion.setAttribute('aria-live', this.live);
    if (this.value !== null && this.value !== undefined) {
      liveRegion.textContent = this.statusLabel ? this.statusLabel : `${this._displayValue} items`;
    } else {
      liveRegion.textContent = this.statusLabel || '';
    }
  }

  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('dot') || changedProperties.has('statusLabel')) {
      this.hiddenFromAT = (this.dot && !this.statusLabel) || this.hiddenFromAT;
    }
  }

  render() {
    const tabindex = this.interactive ? '0' : undefined;
    return html`
      <span
        part="ag-badge"
        class="badge"
        role=${ifDefined(this.interactive ? 'button' : undefined)}
        tabindex=${ifDefined(tabindex)}
        aria-label=${ifDefined(this.statusLabel || undefined)}
        aria-hidden=${this.hiddenFromAT ? 'true' : 'false'}
        @click=${this._handleClick}
        @keydown=${this._handleKeydown}
      >
        ${this.dot ? '' : this._displayValue}
        <slot @slotchange=${this._onSlotChange}></slot>
      </span>
    `;
  }
}
