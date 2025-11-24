/**
 * AgnosticUI v2 Toggle - Canonical Implementation
 *
 * 🔒 IMMUTABLE CANONICAL VERSION 🔒
 *
 * This file contains the canonical, upgrade-safe implementation of the Toggle component.
 * It should NEVER be modified directly by users or AI assistants.
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-09-24
 * API Compatibility: 2.x
 *
 * Stability Guarantees:
 * - All public APIs remain backward compatible within major versions
 * - All ARIA attributes and accessibility features are preserved
 * - All CSS functional styling remains consistent
 * - Component behavior is identical across patch and minor updates
 * - Full WAI-ARIA Switch pattern compliance maintained
 *
 * For customization, use:
 * - Toggle.ts: Experimental/AI-modifiable version
 * - styled/: Production styling tiers
 * - experiments/: Experimental styling variations
 * - extensions/: AI-safe behavioral extensions
 */

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  createFormControlIds,
  buildAriaDescribedBy,
  isHorizontalLabel,
  type LabelPosition,
} from '../../../shared/form-control-utils';
import { formControlStyles } from '../../../shared/form-control-styles';

// Event types
export interface ToggleChangeEventDetail {
  checked: boolean;
  name: string;
  value: string;
}

export type ToggleChangeEvent = CustomEvent<ToggleChangeEventDetail>;

export interface ToggleProps {
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  checked?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'monochrome';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  name?: string;
  value?: string;
  // Event callbacks
  onClick?: (event: MouseEvent) => void;
  onToggleChange?: (event: ToggleChangeEvent) => void;
}

/**
 * AgToggle - Accessible binary toggle/switch component
 *
 * A semantic button element implementing the WAI-ARIA Switch pattern
 * for binary on/off state controls with comprehensive accessibility support.
 *
 * Features:
 * - WAI-ARIA Switch pattern compliance with role="switch"
 * - Semantic <button> element foundation
 * - Required accessible name via aria-label or aria-labelledby
 * - Keyboard navigation (Space/Enter activation)
 * - Minimalist styling via design tokens
 * - Size variants with consistent proportions
 * - Form integration support
 */
export class AgToggle extends LitElement implements ToggleProps {
  static styles = [
    formControlStyles,
    css`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      /* Block for label positioning support */
      display: block;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      color: inherit;
      padding: 0;

      /* Flexbox for track/handle layout */
      display: flex;
      align-items: center;
      position: relative;

      /* Touch target accessibility - minimum 44px */
      min-width: 44px;
      min-height: 44px;

      /* Focus management */
      border-radius: var(--ag-focus-border-radius);
      transition: all var(--ag-transition-duration) ease;
    }

    button:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    }

    .ag-toggle__track {
      /* Track container */
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 9999px;
      transition: inherit;

      /* Default size - will be overridden by size variants */
      width: var(--toggle-width, 40px);
      height: var(--toggle-height, 20px);

      /* Functional styling only */
      background: var(--ag-neutral-300);
      border: 1px solid transparent;
    }

    .ag-toggle__handle {
      /* Handle positioning and animation */
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: transform var(--ag-transition-duration) ease;

      /* Default handle size */
      width: var(--handle-size, 18px);
      height: var(--handle-size, 18px);

      /* Functional styling only */
      background: var(--ag-white);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    /* Checked state - handle moves to right */
    :host([checked]) .ag-toggle__handle {
      transform: translateY(-50%) translateX(calc(var(--toggle-width) - var(--handle-size) - 4px));
    }

    /* Size variants with 2:1 width:height ratio */
    :host([size="xs"]) {
      --toggle-width: 28px;
      --toggle-height: 14px;
      --handle-size: 12px;
    }

    :host([size="sm"]) {
      --toggle-width: 34px;
      --toggle-height: 17px;
      --handle-size: 15px;
    }

    :host([size="md"]) {
      --toggle-width: 40px;
      --toggle-height: 20px;
      --handle-size: 18px;
    }

    :host([size="lg"]) {
      --toggle-width: 48px;
      --toggle-height: 24px;
      --handle-size: 22px;
    }

    :host([size="xl"]) {
      --toggle-width: 56px;
      --toggle-height: 28px;
      --handle-size: 26px;
    }

    /* Checked state coloring */
    :host([checked]) .ag-toggle__track {
      background: var(--ag-primary);
    }

    :host([checked][variant="success"]) .ag-toggle__track {
      background: var(--ag-success);
    }

    :host([checked][variant="warning"]) .ag-toggle__track {
      background: var(--ag-warning);
    }

    :host([checked][variant="danger"]) .ag-toggle__track {
      background: var(--ag-danger);
    }

    :host([checked][variant="monochrome"]) .ag-toggle__track {
      background: var(--ag-background-primary-inverted);
    }

    :host([checked][variant="monochrome"]) .ag-toggle__handle {
      background: var(--ag-text-primary-inverted);
    }

    /* Readonly state */
    :host([readonly]) button {
      cursor: default;
    }

    /* Screen reader only text */
    .visually-hidden {
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
  `,
  ];

  // Form control IDs
  private _toggleId: string = '';
  private _labelId: string = '';
  private _helperId: string = '';
  private _errorId: string = '';

  /**
   * Label text for the toggle
   */
  @property({ type: String })
  declare label: string;

  /**
   * Position of the label relative to the toggle
   */
  @property({ type: String, attribute: 'label-position' })
  labelPosition: LabelPosition = 'top';

  /**
   * Visually hide the label (still accessible to screen readers)
   */
  @property({ type: Boolean, attribute: 'label-hidden' })
  declare labelHidden: boolean;

  /**
   * Remove label completely
   */
  @property({ type: Boolean, attribute: 'no-label' })
  declare noLabel: boolean;

  /**
   * Current checked state of the toggle
   */
  @property({ type: Boolean, reflect: true })
  declare checked: boolean;

  /**
   * Toggle size variant
   */
  @property({ type: String, reflect: true })
  declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Visual variant
   */
  @property({ type: String, reflect: true })
  declare variant: 'default' | 'success' | 'warning' | 'danger' | 'monochrome';

  /**
   * Disabled state
   */
  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  /**
   * Read-only state - visually interactive but doesn't change
   */
  @property({ type: Boolean, reflect: true })
  declare readonly: boolean;

  /**
   * Required field indicator
   */
  @property({ type: Boolean, reflect: true })
  declare required: boolean;

  /**
   * Invalid state for validation feedback
   */
  @property({ type: Boolean, reflect: true })
  declare invalid: boolean;

  /**
   * Error message text displayed when invalid
   */
  @property({ type: String, attribute: 'error-message' })
  declare errorMessage: string;

  /**
   * Helper text displayed below toggle
   */
  @property({ type: String, attribute: 'help-text' })
  declare helpText: string;

  /**
   * Form integration - name attribute
   */
  @property({ type: String })
  declare name: string;

  /**
   * Form integration - value when checked
   */
  @property({ type: String })
  declare value: string;

  /**
   * Click event callback
   */
  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  /**
   * Toggle change event callback
   */
  @property({ attribute: false })
  declare onToggleChange?: (event: ToggleChangeEvent) => void;

  constructor() {
    super();

    // Initialize form control IDs
    const ids = createFormControlIds('toggle');
    this._toggleId = ids.inputId;
    this._labelId = ids.labelId;
    this._helperId = ids.helperId;
    this._errorId = ids.errorId;

    // Default values
    this.label = '';
    this.labelHidden = false;
    this.noLabel = false;
    this.checked = false;
    this.size = 'md';
    this.variant = 'default';
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
    this.errorMessage = '';
    this.helpText = '';
    this.name = '';
    this.value = '';
  }

  protected firstUpdated() {
    // Developer experience: warn about missing label
    if (!this.label && !this.noLabel) {
      // eslint-disable-next-line no-console
      console.warn('AgToggle: label property is required for accessibility.');
    }
  }

  private renderLabel() {
    if (!this.label || this.noLabel) return '';

    const positionClasses: string[] = [];
    if (isHorizontalLabel(this.labelPosition)) {
      positionClasses.push('ag-form-control__label--horizontal');
      positionClasses.push(`ag-form-control__label--${this.labelPosition}`);
    } else if (this.labelPosition === 'bottom') {
      positionClasses.push(`ag-form-control__label--${this.labelPosition}`);
    }

    return html`
      <label
        id=${this._labelId}
        for=${this._toggleId}
        class="ag-form-control__label ${this.labelHidden
          ? 'ag-form-control__label--hidden'
          : ''} ${this.required ? 'ag-form-control__label--required' : ''} ${positionClasses.join(' ')}"
        part="ag-toggle-label"
      >
        ${this.label}
      </label>
    `;
  }

  private _handleClick = (event: MouseEvent) => {
    // Invoke native click callback if provided
    if (this.onClick) {
      this.onClick(event);
    }

    this._performToggle(event);
  };

  private _handleKeydown = (event: KeyboardEvent) => {
    // WAI-ARIA Switch pattern: Space and Enter should toggle
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this._performToggle(event);
    }
  };

  private _performToggle = (event: Event) => {
    if (this.disabled || this.readonly) {
      event.preventDefault();
      return;
    }

    this.checked = !this.checked;

    // Dispatch custom event with form integration details
    const toggleChangeEvent = new CustomEvent<ToggleChangeEventDetail>('toggle-change', {
      detail: {
        checked: this.checked,
        name: this.name,
        value: this.value
      },
      bubbles: true,
      composed: true
    });

    // Dual-dispatch: DOM event first
    this.dispatchEvent(toggleChangeEvent);

    // Then invoke callback if provided
    if (this.onToggleChange) {
      this.onToggleChange(toggleChangeEvent);
    }
  };

  render() {
    // Build aria-describedby
    const describedBy = buildAriaDescribedBy({
      helperId: this._helperId,
      errorId: this._errorId,
      hasHelper: !!this.helpText && !this.invalid,
      hasError: !!this.invalid && !!this.errorMessage,
    });

    // Helper text rendering
    const helperText = this.helpText && !this.invalid
      ? html`<div class="ag-form-control-help-text" id="${this._helperId}">
          ${this.helpText}
        </div>`
      : '';

    // Error message rendering
    const errorText = this.invalid && this.errorMessage
      ? html`<div class="ag-form-control-error-message" id="${this._errorId}">
          ${this.errorMessage}
        </div>`
      : '';

    // Toggle button rendering
    const toggleButton = html`
      <button
        id="${this._toggleId}"
        role="switch"
        aria-checked="${this.checked}"
        aria-labelledby="${ifDefined(this.label && !this.noLabel ? this._labelId : undefined)}"
        aria-describedby="${ifDefined(describedBy)}"
        ?disabled="${this.disabled}"
        class="ag-toggle ag-toggle--${this.size} ag-toggle--${this.variant}"
        part="ag-toggle-button"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <span class="ag-toggle__track" part="ag-toggle-track">
          <span class="ag-toggle__handle" part="ag-toggle-handle"></span>
        </span>

        <!-- Screen reader state indication -->
        <span class="visually-hidden">
          ${this.checked ? 'On' : 'Off'}
        </span>
      </button>
    `;

    // Check if label should be in horizontal layout
    const isHorizontal = isHorizontalLabel(this.labelPosition);

    // Horizontal layout (start/end positions)
    if (isHorizontal) {
      return html`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel()}
          ${toggleButton}
        </div>
        ${helperText}
        ${errorText}
      `;
    }

    // Bottom position layout
    if (this.labelPosition === 'bottom') {
      return html`
        ${toggleButton}
        ${helperText}
        ${errorText}
        ${this.renderLabel()}
      `;
    }

    // Top position layout (default)
    return html`
      ${this.renderLabel()}
      ${toggleButton}
      ${helperText}
      ${errorText}
    `;
  }
}
