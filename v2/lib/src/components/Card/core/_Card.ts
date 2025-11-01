import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type CardVariant = 'success' | 'info' | 'error' | 'warning' | '';
export type CardRounded = 'sm' | 'md' | 'lg' | '';

export interface CardProps {
  skinned?: boolean;
  stacked?: boolean;
  shadow?: boolean;
  animated?: boolean;
  rounded?: CardRounded;
  variant?: CardVariant;
}

@customElement('ag-card')
export class Card extends LitElement implements CardProps {
  @property({ type: Boolean, reflect: true }) skinned = true;
  @property({ type: Boolean, reflect: true }) stacked = false;
  @property({ type: Boolean, reflect: true }) shadow = false;
  @property({ type: Boolean, reflect: true }) animated = false;
  @property({ type: String, reflect: true }) rounded: CardRounded = '';
  @property({ type: String, reflect: true }) variant: CardVariant = '';

  private _hasHeaderSlotContent = false;
  private _hasFooterSlotContent = false;

  /**
   * Check if a slot has meaningful content (not just whitespace)
   */
  private _hasSlotContent(slot: HTMLSlotElement | null): boolean {
    if (!slot) return false;
    const assignedNodes = slot.assignedNodes({ flatten: true });
    return assignedNodes.some(node => {
      if (node.nodeType === Node.ELEMENT_NODE) return true;
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent?.trim() !== '';
      }
      return false;
    });
  }

  /**
   * Handle slot changes to detect if header/footer are empty
   */
  private _handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const slotName = slot.name;

    if (slotName === 'header') {
      this._hasHeaderSlotContent = this._hasSlotContent(slot);
    } else if (slotName === 'footer') {
      this._hasFooterSlotContent = this._hasSlotContent(slot);
    }

    this.requestUpdate();
  }

  override firstUpdated() {
    // Initial check for slot content
    const headerSlot = this.shadowRoot?.querySelector('slot[name="header"]') as HTMLSlotElement;
    const footerSlot = this.shadowRoot?.querySelector('slot[name="footer"]') as HTMLSlotElement;

    this._hasHeaderSlotContent = this._hasSlotContent(headerSlot);
    this._hasFooterSlotContent = this._hasSlotContent(footerSlot);
    this.requestUpdate();
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      /* Use the global token directly for padding */
      --card-padding: var(--ag-space-8);
    }

    :host([skinned]) {
      background-color: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
    }

    /* Rounded variants - no rounding by default */
    :host([rounded="sm"]) {
      border-radius: var(--ag-radius-sm);
    }

    :host([rounded="md"]) {
      border-radius: var(--ag-radius-md);
    }

    :host([rounded="lg"]) {
      border-radius: var(--ag-radius-lg);
    }

    :host([shadow]) {
      box-shadow: var(--ag-shadow-lg);
      overflow: hidden;
    }

    /* Enhanced hover effect for shadow cards */
    :host([shadow]:hover) {
      box-shadow: var(--ag-shadow-xl);
    }

    /* Animated cards - smooth transitions */
    :host([animated]) {
      transition:
        box-shadow var(--ag-timing-fast, 150ms) ease-out,
        transform var(--ag-timing-fast, 150ms) cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    :host([animated]:hover) {
      transform: translateY(-3px);
      transition:
        box-shadow var(--ag-timing-fast, 150ms) ease-out,
        transform var(--ag-timing-slow, 300ms) cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    /* Respect reduced motion preferences */
    @media (prefers-reduced-motion), (update: slow) {
      :host([animated]),
      :host([animated]:hover) {
        transition-duration: 0.001ms !important;
        transform: none !important;
      }
    }

    /* Variant colors */
    :host([variant="success"]) {
      background-color: var(--ag-success-background);
      color: var(--ag-success-text);
    }

    :host([variant="info"]) {
      background-color: var(--ag-info-background);
      color: var(--ag-info-text);
    }

    :host([variant="error"]) {
      background-color: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    :host([variant="warning"]) {
      background-color: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }

    .card-header,
    .card-footer {
      color: var(--ag-text-primary);
    }

    .card-header {
      padding: var(--ag-space-4) var(--card-padding);
      border-bottom: var(--ag-border-width-1) solid var(--ag-border);
    }

    .card-footer {
      padding: var(--ag-space-4) var(--card-padding);
      border-top: var(--ag-border-width-1) solid var(--ag-border);
    }

    /* Hide header/footer when empty class is applied */
    .card-header.empty,
    .card-footer.empty {
      display: none;
    }

    .card-content {
      padding: var(--card-padding);
    }

    :host([stacked]) .card-content > ::slotted(*:not(:last-child)) {
      margin-bottom: var(--ag-space-8);
    }

    /* The accessible clickable card trick */
    ::slotted(a.card-primary-action)::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      cursor: pointer;
    }

    /* Ensure content and other actions are selectable/clickable */
    .card-content,
    ::slotted(h1), ::slotted(h2), ::slotted(h3), ::slotted(h4), ::slotted(h5), ::slotted(h6),
    ::slotted(p), ::slotted(div) {
      position: relative;
      z-index: 2;
    }

    ::slotted(.card-secondary-action) {
      position: relative;
      z-index: 2;
    }
  `;

  render() {
    const headerClass = this._hasHeaderSlotContent ? 'card-header' : 'card-header empty';
    const footerClass = this._hasFooterSlotContent ? 'card-footer' : 'card-footer empty';

    return html`
      <div class="card-wrapper" part="ag-card-wrapper">
        <div class="${headerClass}" part="ag-card-header">
          <slot name="header" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="card-content" part="ag-card-content">
          <slot></slot>
        </div>
        <div class="${footerClass}" part="ag-card-footer">
          <slot name="footer" @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
  }
}
