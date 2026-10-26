// import { LitElement, html, css, unsafeCSS } from 'lit';
import { LitElement, html, css, unsafeCSS, type CSSResultGroup } from 'lit';

import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../VisuallyHidden/core/VisuallyHidden.js';

import styles from './badge-structure.module.css';
import structuralStylesText from './badge-structure.module.css?inline';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'primary' | 'info' | 'neutral' | 'monochrome';
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
static override styles: CSSResultGroup = [
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ];

  @property({ type: String, reflect: true }) declare variant: 'default' | 'success' | 'warning' | 'primary' | 'danger' | 'info' | 'neutral' | 'monochrome';
  @property({ type: String, reflect: true }) declare size: 'xs' | 'sm' | 'md';
  @property({ type: Boolean, reflect: true }) declare dot: boolean;
  @property({ type: Number }) declare value: number | null;
  @property({ type: Number }) declare max: number;
  @property({ type: Boolean, reflect: true }) declare interactive: boolean;
  @property({ type: String, attribute: 'status-label' }) declare statusLabel: string | null;
  @property({ type: String }) declare live: 'off' | 'polite' | 'assertive';
  @property({ type: Boolean, attribute: 'hidden-from-at' }) declare hiddenFromAT: boolean;

  @state() private _isSingleChar = false;

  constructor() {
    super();
    this.variant = 'default';
    this.size = 'md';
    this.dot = false;
    this.value = null;
    this.max = 99;
    this.interactive = false;
    this.statusLabel = null;
    this.live = 'off';
    this.hiddenFromAT = false;
  }

  private get _displayValue() {
    if (this.value === null || this.value === undefined) return '';
    if (this.value > this.max) return `${this.max}+`;
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

  override connectedCallback() {
    super.connectedCallback();
    if (this.live !== 'off') this._updateLiveRegion();
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
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
    const currentSingleChar = text.length === 1 && !this.dot;
    if (this._isSingleChar !== currentSingleChar) {
      this._isSingleChar = currentSingleChar;
      if (currentSingleChar) {
        this.setAttribute('single-char', 'true');
      } else {
        this.removeAttribute('single-char');
      }
    }
  }

  private _updateLiveRegion() {
    let liveRegion = document.getElementById('ag-badge-live');
    if (!liveRegion) {
      liveRegion = document.createElement('ag-visually-hidden');
      liveRegion.id = 'ag-badge-live';
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

  override willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('dot') || changedProperties.has('statusLabel')) {
      this.hiddenFromAT = (this.dot && !this.statusLabel) || this.hiddenFromAT;
    }
  }

  override render() {
    const tabindex = this.interactive ? '0' : undefined;

    let sizeStyle = styles.sizeMd;
    if (this.size === 'xs') sizeStyle = styles.sizeXs;
    if (this.size === 'sm') sizeStyle = styles.sizeSm;

    let variantStyle = styles.variantDefault;
    if (this.variant === 'primary') variantStyle = styles.variantPrimary;
    if (this.variant === 'success') variantStyle = styles.variantSuccess;
    if (this.variant === 'warning') variantStyle = styles.variantWarning;
    if (this.variant === 'danger') variantStyle = styles.variantDanger;
    if (this.variant === 'info') variantStyle = styles.variantInfo;
    if (this.variant === 'neutral') variantStyle = styles.variantNeutral;
    if (this.variant === 'monochrome') variantStyle = styles.variantMonochrome;

    const badgeClasses = [
      styles.badge,
      'badge',
      sizeStyle,
      variantStyle
    ];
    if (this.dot) badgeClasses.push(styles.dot, 'dot');
    if (this.interactive) badgeClasses.push(styles.interactive);
    if (this._isSingleChar) badgeClasses.push(styles.singleChar);

    return html`
      <span
        part="ag-badge"
        class="${badgeClasses.join(' ').trim()}"
        role=${ifDefined(this.interactive ? 'button' : undefined)}
        tabindex=${ifDefined(tabindex)}
        aria-label=${ifDefined(this.statusLabel || undefined)}
        aria-hidden=${this.hiddenFromAT ? 'true' : 'false'}
        @click=${this._handleClick}
        @keydown=${this._handleKeydown}
      >
        ${this.dot ? '' : this._displayValue}
        <slot @slotchange=${this._checkSingleChar}></slot>
      </span>
    `;
  }
}
