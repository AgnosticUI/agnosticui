import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type CardVariant = 'success' | 'info' | 'error' | 'warning' | '';

export interface CardProps {
  isSkinned?: boolean;
  isStacked?: boolean;
  isShadow?: boolean;
  isAnimated?: boolean;
  isRounded?: boolean;
  variant?: CardVariant;
}

@customElement('ag-card')
export class Card extends LitElement implements CardProps {
  @property({ type: Boolean, reflect: true }) isSkinned = true;
  @property({ type: Boolean, reflect: true }) isStacked = false;
  @property({ type: Boolean, reflect: true }) isShadow = false;
  @property({ type: Boolean, reflect: true }) isAnimated = false;
  @property({ type: Boolean, reflect: true }) isRounded = false;
  @property({ type: String, reflect: true }) variant: CardVariant = '';

  static styles = css`
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      /* Use the global token directly for padding */
      --card-padding: var(--ag-space-8);
    }

    :host([isskinned]) {
      background-color: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
    }

    :host([isrounded]),
    :host([isskinned]) {
      border-radius: var(--ag-radius-lg);
    }

    :host([isshadow]) {
      box-shadow: var(--ag-shadow-lg);
      border-radius: var(--ag-radius-lg);
      overflow: hidden;
    }

    /* Enhanced hover effect for shadow cards */
    :host([isshadow]:hover) {
      box-shadow: var(--ag-shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04));
    }

    /* Animated cards - smooth transitions */
    :host([isanimated]) {
      transition:
        box-shadow var(--ag-timing-fast, 150ms) ease-out,
        transform var(--ag-timing-fast, 150ms) cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    :host([isanimated]:hover) {
      transform: translateY(-3px);
      transition:
        box-shadow var(--ag-timing-fast, 150ms) ease-out,
        transform var(--ag-timing-slow, 300ms) cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    /* Respect reduced motion preferences */
    @media (prefers-reduced-motion), (update: slow) {
      :host([isanimated]),
      :host([isanimated]:hover) {
        transition-duration: 0.001ms !important;
        transform: none !important;
      }
    }

    /* Variant colors */
    :host([variant="success"]) {
      background-color: var(--ag-success-light, #e3f9e5);
      color: var(--ag-success-dark, #1e5631);
    }

    :host([variant="info"]) {
      background-color: var(--ag-info-light, #e7f2fa);
      color: var(--ag-info-dark, #005a8e);
    }

    :host([variant="error"]) {
      background-color: var(--ag-error-light, #fce8e6);
      color: var(--ag-error-dark, #611a15);
    }

    :host([variant="warning"]) {
      background-color: var(--ag-warning-light, #fef7dc);
      color: var(--ag-warning-dark, #8d5a00);
    }

    .card-content {
      padding: var(--card-padding);
    }

    :host([isstacked]) .card-content > ::slotted(*:not(:last-child)) {
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
    return html`
      <div class="card-wrapper" part="ag-card-wrapper">
        <div class="card-header" part="ag-card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-content" part="ag-card-content">
          <slot></slot>
        </div>
        <div class="card-footer" part="ag-card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
