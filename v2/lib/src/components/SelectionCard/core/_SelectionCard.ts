/**
 * AgnosticUI v2 SelectionCard - Core Implementation
 *
 * A card-based selection control that can function as either a radio or checkbox.
 * Must be used within an ag-selection-card-group.
 *
 * @element ag-selection-card
 * @slot - Default slot for visual content (icons, text, etc.)
 * @csspart container - The outer clickable label
 * @csspart control - The hidden input element
 * @csspart indicator - The selection indicator (top-right corner)
 * @csspart content - The slotted content wrapper
 */

import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';

export type SelectionCardTheme = 'success' | 'info' | 'error' | 'warning' | 'monochrome' | '';

export interface SelectionCardProps {
  /** Unique value for this card (required) */
  value: string;
  /** Accessible label for this card (required) */
  label: string;
  /** Whether this card is selected */
  checked?: boolean;
  /** Whether this card is disabled */
  disabled?: boolean;
}

// Internal props set by parent group
interface SelectionCardInternalProps {
  /** Input type (set by parent group) */
  _type?: 'radio' | 'checkbox';
  /** Input name (set by parent group) */
  _name?: string;
  /** Theme (set by parent group) */
  _theme?: SelectionCardTheme;
}

export class AgSelectionCard extends LitElement implements SelectionCardProps, SelectionCardInternalProps {
  static override styles = css`
    :host {
      display: block;
      --_selection-card-padding: var(--ag-selection-card-padding, var(--ag-space-4));
      --_selection-card-gap: var(--ag-selection-card-gap, var(--ag-space-3));
      --_selection-card-border-radius: var(--ag-selection-card-border-radius, var(--ag-radius-md));
      --_selection-card-indicator-size: var(--ag-selection-card-indicator-size, var(--ag-space-5));
      --_selection-card-background: var(--ag-selection-card-background, var(--ag-background-primary));
      --_selection-card-border-color: var(--ag-selection-card-border-color, var(--ag-border));
    }

    .selection-card {
      position: relative;
      display: block;
      padding: var(--_selection-card-padding);
      background: var(--_selection-card-background);
      border: var(--ag-border-width-1) solid var(--_selection-card-border-color);
      border-radius: var(--_selection-card-border-radius);
      cursor: pointer;
      transition:
        border-color var(--ag-motion-fast) ease-in-out,
        background-color var(--ag-motion-fast) ease-in-out,
        box-shadow var(--ag-motion-fast) ease-in-out;
    }

    /* Theme: default/empty (primary blue) */
    .selection-card--default:hover:not(.selection-card--disabled) {
      border-color: var(--ag-primary);
    }
    .selection-card--default.selection-card--checked {
      background: var(--ag-primary-background);
      border-color: var(--ag-primary);
      border-width: var(--ag-border-width-2);
    }
    .selection-card--default .selection-card__indicator {
      background: var(--ag-primary);
    }

    /* Theme: success (green) */
    .selection-card--success:hover:not(.selection-card--disabled) {
      border-color: var(--ag-success);
    }
    .selection-card--success.selection-card--checked {
      background: var(--ag-success-background);
      border-color: var(--ag-success);
      border-width: var(--ag-border-width-2);
      color: var(--ag-success-text);
    }
    .selection-card--success .selection-card__indicator {
      background: var(--ag-success);
    }

    /* Theme: info (blue/cyan) */
    .selection-card--info:hover:not(.selection-card--disabled) {
      border-color: var(--ag-info);
    }
    .selection-card--info.selection-card--checked {
      background: var(--ag-info-background);
      border-color: var(--ag-info);
      border-width: var(--ag-border-width-2);
      color: var(--ag-info-text);
    }
    .selection-card--info .selection-card__indicator {
      background: var(--ag-info);
    }

    /* Theme: warning (yellow/orange) */
    .selection-card--warning:hover:not(.selection-card--disabled) {
      border-color: var(--ag-warning);
    }
    .selection-card--warning.selection-card--checked {
      background: var(--ag-warning-background);
      border-color: var(--ag-warning);
      border-width: var(--ag-border-width-2);
      color: var(--ag-warning-text);
    }
    .selection-card--warning .selection-card__indicator {
      background: var(--ag-warning);
    }

    /* Theme: error (red) */
    .selection-card--error:hover:not(.selection-card--disabled) {
      border-color: var(--ag-danger);
    }
    .selection-card--error.selection-card--checked {
      background: var(--ag-danger-background);
      border-color: var(--ag-danger);
      border-width: var(--ag-border-width-2);
      color: var(--ag-danger-text);
    }
    .selection-card--error .selection-card__indicator {
      background: var(--ag-danger);
    }

    /* Theme: monochrome (black/white) */
    .selection-card--monochrome:hover:not(.selection-card--disabled) {
      border-color: var(--ag-black);
    }
    .selection-card--monochrome.selection-card--checked {
      background: var(--ag-background-primary-inverted);
      border-color: var(--ag-black);
      border-width: var(--ag-border-width-2);
      color: var(--ag-text-primary-inverted);
    }
    .selection-card--monochrome .selection-card__indicator {
      background: var(--ag-black);
    }

    /* Focus state */
    .selection-card:focus-within:not(.selection-card--disabled) {
      outline: var(--ag-focus-width) solid var(--ag-focus-ring-color, rgba(var(--ag-focus), 0.5));
      outline-offset: var(--ag-focus-offset);
    }

    /* Disabled state */
    .selection-card--disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* Hidden input */
    .selection-card__input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Indicator (badge in top-right corner) */
    .selection-card__indicator {
      position: absolute;
      top: var(--ag-space-2);
      right: var(--ag-space-2);
      width: var(--_selection-card-indicator-size);
      height: var(--_selection-card-indicator-size);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ag-radius-full);
      opacity: 0;
      transform: scale(0.8);
      transition:
        opacity var(--ag-motion-fast) ease-in-out,
        transform var(--ag-motion-fast) ease-in-out;
    }

    .selection-card--checked .selection-card__indicator {
      opacity: 1;
      transform: scale(1);
    }

    /* Radio indicator - filled circle */
    .selection-card__radio-dot {
      width: 40%;
      height: 40%;
      background: var(--ag-white);
      border-radius: var(--ag-radius-full);
    }

    /* Checkbox indicator - checkmark */
    .selection-card__checkmark {
      width: 60%;
      height: 60%;
      fill: none;
      stroke: var(--ag-white);
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Content wrapper */
    .selection-card__content {
      display: block;
    }

    /* Visually hidden label for screen readers */
    .selection-card__label-sr {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    /* Respect reduced motion preferences */
    @media (prefers-reduced-motion: reduce) {
      .selection-card,
      .selection-card__indicator {
        transition: none;
      }
    }

    /* High contrast mode support */
    @media (forced-colors: active) {
      .selection-card--checked {
        outline: 2px solid CanvasText;
      }
      .selection-card__indicator {
        background: CanvasText;
      }
      .selection-card__checkmark {
        stroke: Canvas;
      }
      .selection-card__radio-dot {
        background: Canvas;
      }
    }
  `;

  @property({ type: String, reflect: true })
  declare value: string;

  @property({ type: String })
  declare label: string;

  @property({ type: Boolean, reflect: true })
  declare checked: boolean;

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  // Internal props set by parent group
  @property({ type: String, attribute: false })
  declare _type: 'radio' | 'checkbox';

  @property({ type: String, attribute: false })
  declare _name: string;

  @property({ type: String, attribute: false })
  declare _theme: SelectionCardTheme;

  constructor() {
    super();
    this.value = '';
    this.label = '';
    this.checked = false;
    this.disabled = false;
    this._type = 'radio';
    this._name = '';
    this._theme = '';
  }

  private _handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }

    // For radio, always select; for checkbox, toggle
    const newChecked = this._type === 'radio' ? true : !this.checked;

    // Dispatch event to parent group
    this.dispatchEvent(new CustomEvent('selection-card-change', {
      detail: {
        value: this.value,
        checked: newChecked,
      },
      bubbles: true,
      composed: true,
    }));
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;

    // Space or Enter to select/toggle
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this._handleClick(e);
    }
  }

  private _renderIndicator() {
    if (this._type === 'checkbox') {
      // Checkmark for checkbox
      return html`
        <svg class="selection-card__checkmark" viewBox="0 0 24 24">
          <polyline points="4 12 10 18 20 6"></polyline>
        </svg>
      `;
    }
    // Filled circle for radio
    return html`<div class="selection-card__radio-dot"></div>`;
  }

  override render() {
    // Map empty theme to 'default' for CSS class
    const themeClass = this._theme || 'default';
    const containerClasses = [
      'selection-card',
      `selection-card--${themeClass}`,
      this.checked ? 'selection-card--checked' : '',
      this.disabled ? 'selection-card--disabled' : '',
    ].filter(Boolean).join(' ');

    return html`
      <label
        class="${containerClasses}"
        part="container"
        tabindex="${this.disabled ? -1 : 0}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}"
      >
        <input
          type="${this._type}"
          class="selection-card__input"
          part="control"
          name="${this._name || nothing}"
          value="${this.value}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          aria-checked="${this.checked ? 'true' : 'false'}"
          tabindex="-1"
        />
        <span class="selection-card__label-sr">${this.label}</span>
        <div class="selection-card__indicator" part="indicator" aria-hidden="true">
          ${this._renderIndicator()}
        </div>
        <div class="selection-card__content" part="content">
          <slot></slot>
        </div>
      </label>
    `;
  }
}
