/**
 * AgnosticUI v2 SelectionButton - Core Implementation
 *
 * A button-styled selection control that can function as either a radio or checkbox.
 * Must be used within an ag-selection-button-group.
 *
 * @element ag-selection-button
 * @slot - Default slot for button text/content
 * @csspart container - The outer clickable label
 * @csspart control - The hidden input element
 * @csspart indicator - The selection indicator (inline, end side)
 * @csspart content - The slotted content wrapper
 */

import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';

export type SelectionButtonTheme = 'success' | 'info' | 'error' | 'warning' | 'monochrome' | '';
export type SelectionButtonSize = 'sm' | 'md' | 'lg';
export type SelectionButtonShape = '' | 'rounded' | 'capsule';

export interface SelectionButtonProps {
  /** Unique value for this button (required) */
  value: string;
  /** Accessible label for this button (required) */
  label: string;
  /** Whether this button is selected */
  checked?: boolean;
  /** Whether this button is disabled */
  disabled?: boolean;
}

// Internal props set by parent group
interface SelectionButtonInternalProps {
  /** Input type (set by parent group) */
  _type?: 'radio' | 'checkbox';
  /** Input name (set by parent group) */
  _name?: string;
  /** Theme (set by parent group) */
  _theme?: SelectionButtonTheme;
  /** Size (set by parent group) */
  _size?: SelectionButtonSize;
  /** Shape (set by parent group) */
  _shape?: SelectionButtonShape;
}

export class AgSelectionButton extends LitElement implements SelectionButtonProps, SelectionButtonInternalProps {
  static override styles = css`
    :host {
      display: inline-flex;
    }

    .selection-button {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ag-space-2);
      margin: 0;
      font: inherit;
      cursor: pointer;
      transition:
        background-color var(--ag-motion-fast) var(--ag-fx-ease-ease-out),
        border-color var(--ag-motion-fast) var(--ag-fx-ease-ease-out),
        color var(--ag-motion-fast) var(--ag-fx-ease-ease-out);
    }

    /* ========================================
       SIZE VARIANTS
       ======================================== */

    /* Small */
    .selection-button--sm {
      height: var(--ag-space-9);
      min-height: var(--ag-space-9);
      font-size: var(--ag-font-size-xs);
      padding-inline: calc(var(--ag-space-3) + var(--ag-space-3));
      --_indicator-size: 0.75rem;
      --_indicator-offset: var(--ag-space-1);
    }

    /* Medium (default) */
    .selection-button--md {
      height: var(--ag-space-10);
      min-height: var(--ag-space-10);
      font-size: var(--ag-font-size-sm);
      padding-inline: calc(var(--ag-space-4) + var(--ag-space-4));
      --_indicator-size: 0.875rem;
      --_indicator-offset: var(--ag-space-1);
    }

    /* Large */
    .selection-button--lg {
      height: var(--ag-space-12);
      min-height: var(--ag-space-12);
      font-size: var(--ag-font-size-base);
      padding-inline: calc(var(--ag-space-5) + var(--ag-space-5));
      --_indicator-size: 1rem;
      --_indicator-offset: var(--ag-space-1);
    }

    /* ========================================
       SHAPE VARIANTS
       ======================================== */

    .selection-button--shape-default {
      border-radius: 0;
    }

    .selection-button--shape-rounded {
      border-radius: var(--ag-radius-md);
    }

    .selection-button--shape-capsule {
      border-radius: var(--ag-radius-full);
      /* 0.375rem is between --ag-space-1 (0.25rem) and --ag-space-2 (0.5rem) */
      --_indicator-offset: 0.375rem;
    }

    /* ========================================
       THEME VARIANTS - UNCHECKED STATE
       Border/text uses theme color, transparent background
       ======================================== */

    /* Default (primary) - unchecked */
    .selection-button--default {
      background: transparent;
      border: 1px solid var(--ag-primary);
      color: var(--ag-primary-text);
      --_indicator-bg: var(--ag-primary);
    }

    /* Success - unchecked */
    .selection-button--success {
      background: transparent;
      border: 1px solid var(--ag-success);
      color: var(--ag-success-text);
      --_indicator-bg: var(--ag-success);
    }

    /* Info - unchecked */
    .selection-button--info {
      background: transparent;
      border: 1px solid var(--ag-info);
      color: var(--ag-info-text);
      --_indicator-bg: var(--ag-info);
    }

    /* Warning - unchecked */
    .selection-button--warning {
      background: transparent;
      border: 1px solid var(--ag-warning);
      color: var(--ag-warning-text);
      --_indicator-bg: var(--ag-warning);
    }

    /* Error - unchecked */
    .selection-button--error {
      background: transparent;
      border: 1px solid var(--ag-danger);
      color: var(--ag-danger-text);
      --_indicator-bg: var(--ag-danger);
    }

    /* Monochrome - unchecked */
    .selection-button--monochrome {
      background: transparent;
      border: 1px solid var(--ag-text-primary);
      color: var(--ag-text-primary);
      --_indicator-bg: var(--ag-text-primary);
    }

    /* ========================================
       THEME VARIANTS - CHECKED STATE
       Filled background with white text
       ======================================== */

    /* Default (primary) - checked */
    .selection-button--default.selection-button--checked {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
      color: var(--ag-white);
    }

    /* Success - checked */
    .selection-button--success.selection-button--checked {
      background: var(--ag-success);
      border-color: var(--ag-success);
      color: var(--ag-white);
    }

    /* Info - checked */
    .selection-button--info.selection-button--checked {
      background: var(--ag-info);
      border-color: var(--ag-info);
      color: var(--ag-white);
    }

    /* Warning - checked */
    .selection-button--warning.selection-button--checked {
      background: var(--ag-warning);
      border-color: var(--ag-warning);
      color: var(--ag-neutral-900);
    }

    /* Error - checked */
    .selection-button--error.selection-button--checked {
      background: var(--ag-danger);
      border-color: var(--ag-danger);
      color: var(--ag-white);
    }

    /* Monochrome - checked */
    .selection-button--monochrome.selection-button--checked {
      background: var(--ag-background-primary-inverted);
      border-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* ========================================
       HOVER STATES
       ======================================== */

    /* Default - unchecked hover (fill with theme color) */
    .selection-button--default:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    /* Default - checked hover (darker shade) */
    .selection-button--default.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-primary-dark);
      border-color: var(--ag-primary-dark);
    }

    /* Success - unchecked hover */
    .selection-button--success:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-success);
      color: var(--ag-white);
    }

    /* Success - checked hover */
    .selection-button--success.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-success-dark);
      border-color: var(--ag-success-dark);
    }

    /* Info - unchecked hover */
    .selection-button--info:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-info);
      color: var(--ag-white);
    }

    /* Info - checked hover */
    .selection-button--info.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-info-dark);
      border-color: var(--ag-info-dark);
    }

    /* Warning - unchecked hover */
    .selection-button--warning:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-warning);
      color: var(--ag-neutral-900);
    }

    /* Warning - checked hover */
    .selection-button--warning.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-warning-dark);
      border-color: var(--ag-warning-dark);
    }

    /* Error - unchecked hover */
    .selection-button--error:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    /* Error - checked hover */
    .selection-button--error.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-danger-dark);
      border-color: var(--ag-danger-dark);
    }

    /* Monochrome - unchecked hover */
    .selection-button--monochrome:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* Monochrome - checked hover */
    .selection-button--monochrome.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-background-secondary-inverted);
      border-color: var(--ag-background-secondary-inverted);
    }

    /* ========================================
       FOCUS STATE
       ======================================== */

    .selection-button:focus-within:not(.selection-button--disabled) {
      outline: var(--ag-focus-width) solid var(--ag-focus-ring-color, rgba(var(--ag-focus), 0.5));
      outline-offset: var(--ag-focus-offset);
    }

    /* ========================================
       DISABLED STATE
       ======================================== */

    .selection-button--disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* ========================================
       HIDDEN INPUT (screen reader accessible)
       ======================================== */

    .selection-button__input {
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

    /* ========================================
       INDICATOR (corner badge, top-right)
       ======================================== */

    .selection-button__indicator {
      position: absolute;
      top: var(--_indicator-offset);
      inset-inline-end: var(--_indicator-offset);
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--_indicator-size);
      height: var(--_indicator-size);
      opacity: 0;
      transform: scale(0.6);
      transition:
        opacity var(--ag-motion-fast) ease-in-out,
        transform var(--ag-motion-fast) var(--ag-fx-ease-ease-out);
    }

    .selection-button--checked .selection-button__indicator {
      opacity: 1;
      transform: scale(1);
    }

    .selection-button__indicator-svg {
      width: 100%;
      height: 100%;
    }

    /* Content wrapper */
    .selection-button__content {
      display: inline-flex;
      align-items: center;
    }

    /* Visually hidden label for screen readers */
    .selection-button__label-sr {
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

    /* ========================================
       REDUCED MOTION
       ======================================== */

    @media (prefers-reduced-motion: reduce) {
      .selection-button,
      .selection-button__indicator {
        transition: none;
      }
    }

    /* ========================================
       HIGH CONTRAST MODE
       ======================================== */

    @media (forced-colors: active) {
      .selection-button--checked {
        outline: 2px solid CanvasText;
      }
      .selection-button__indicator-svg circle {
        fill: CanvasText;
      }
      .selection-button__indicator-svg path,
      .selection-button__indicator-svg circle:last-child {
        stroke: Canvas;
        fill: Canvas;
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
  declare _theme: SelectionButtonTheme;

  @property({ type: String, attribute: false })
  declare _size: SelectionButtonSize;

  @property({ type: String, attribute: false })
  declare _shape: SelectionButtonShape;

  constructor() {
    super();
    this.value = '';
    this.label = '';
    this.checked = false;
    this.disabled = false;
    this._type = 'radio';
    this._name = '';
    this._theme = '';
    this._size = 'md';
    this._shape = '';
  }

  override focus() {
    const label = this.shadowRoot?.querySelector('.selection-button') as HTMLElement | null;
    label?.focus();
  }

  private _handleClick(e: Event) {
    // Prevent label from forwarding click to input (we handle selection ourselves)
    e.preventDefault();

    if (this.disabled) {
      return;
    }

    // For radio, always select; for checkbox, toggle
    const newChecked = this._type === 'radio' ? true : !this.checked;

    // Dispatch event to parent group
    this.dispatchEvent(new CustomEvent('selection-button-change', {
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
      // Circle with checkmark for checkbox
      return html`
        <svg class="selection-button__indicator-svg" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="10" fill="currentColor" />
          <path d="M6 10l3 3 5-6" stroke="var(--ag-selection-button-indicator-check, var(--_indicator-bg))"
                stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
      `;
    }
    // Circle with dot for radio
    return html`
      <svg class="selection-button__indicator-svg" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="10" fill="currentColor" />
        <circle cx="10" cy="10" r="4" fill="var(--ag-selection-button-indicator-dot, var(--_indicator-bg))" />
      </svg>
    `;
  }

  override render() {
    // Map empty theme to 'default' for CSS class
    const themeClass = this._theme || 'default';
    const sizeClass = this._size || 'md';
    const shapeClass = this._shape || 'default';

    const containerClasses = [
      'selection-button',
      `selection-button--${themeClass}`,
      `selection-button--${sizeClass}`,
      `selection-button--shape-${shapeClass}`,
      this.checked ? 'selection-button--checked' : '',
      this.disabled ? 'selection-button--disabled' : '',
    ].filter(Boolean).join(' ');

    return html`
      <label
        class="${containerClasses}"
        part="ag-selection-button-container"
        tabindex="${this.disabled ? -1 : 0}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}"
      >
        <input
          type="${this._type}"
          class="selection-button__input"
          part="ag-selection-button-control"
          name="${this._name || nothing}"
          value="${this.value}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          aria-checked="${this.checked ? 'true' : 'false'}"
          tabindex="-1"
        />
        <span class="selection-button__label-sr">${this.label}</span>
        <span class="selection-button__content" part="ag-selection-button-content">
          <slot></slot>
        </span>
        <span class="selection-button__indicator" part="ag-selection-button-indicator" aria-hidden="true">
          ${this._renderIndicator()}
        </span>
      </label>
    `;
  }
}
