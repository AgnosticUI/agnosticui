/**
 * AgnosticUI v2 Input - Canonical Implementation (Starting Simple)
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-09-19
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { generateUniqueId } from '../../../utils/unique-id';

/**
 * AgInput - Foundation input component (starting minimal)
 *
 * Starting with basic label + input functionality, will build up incrementally
 */
@customElement('ag-input')
export class AgInput extends LitElement {
  static styles = css`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      display: block;
    }

    /* Label Above Input - BBC GEL Best Practice
     *
     * Why Label Above (BBC GEL):
     * - Mobile-friendly: Labels above work better on small screens
     * - Accessibility standard: Clear visual hierarchy
     * - Cognitive accessibility: Easier to scan and understand
     * - International: Works with various text lengths/languages
     *
     * Note: Labels below inputs are possible via customization:
     * Use noLabel prop + external <ag-label> or <label> for custom positioning
     */
    .ag-input__label {
      display: block;
      margin-bottom: 0.25rem;
    }

    /* Visually hidden label - screen reader only */
    .ag-input__label--hidden {
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

    /* Focus styles - consistent with --agnostic-focus pattern */
    .ag-input__input:focus-visible,
    .ag-input__textarea:focus-visible {
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }

    /* Textarea resize behavior */
    .ag-input__textarea {
      resize: vertical;
    }

    /* Inline mode display */
    :host([is-inline]) {
      display: inline-block;
    }

    /* Addon field wrapper - flex for addon support */
    .ag-input__field {
      display: flex;
      align-items: stretch; /* Changed from center to stretch */
    }

    /* Addon positioning - exact height matching for all content types */
    .ag-input__addon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem; /* Default size padding */
      box-sizing: border-box;
      min-height: 2.75rem; /* 44px - matches working left addons */
      line-height: 1;
      font-size: 1rem;
    }

    /* Small size addon - exact height matching */
    :host([size="small"]) .ag-input__addon {
      padding: 0.5rem;
      min-height: 2.25rem; /* Proportional to small inputs */
      font-size: 0.875rem;
    }

    /* Large size addon - exact height matching */
    :host([size="large"]) .ag-input__addon {
      padding: 1rem;
      min-height: 3.4375rem; /* 55px - match actual large input height */
      font-size: 1.125rem;
    }

    /* Default size addon - explicit for specificity */
    :host([size="default"]) .ag-input__addon,
    :host(:not([size])) .ag-input__addon {
      padding: 0.75rem;
      min-height: 2.75rem; /* 44px - match working left addons */
      font-size: 1rem;
    }

    /* Input takes remaining space in addon layout */
    .ag-input__field input,
    .ag-input__field textarea {
      flex: 1;
      /* Reset borders for seamless addon connection */
      border-radius: 0;
    }

    /* Required field indicator */
    .ag-input__required {
      color: inherit;
    }

    /* Error state visibility */
    .ag-input__error[hidden] {
      display: none !important;
    }

    .ag-input__error:not([hidden]) {
      display: block;
    }
  `;

  // Core element ID for label association
  private _inputId = generateUniqueId('ag-input');

  /**
   * Label Architecture - Flexible but Accessible by Default
   */
  @property({ type: String })
  declare label: string;

  @property({ type: Boolean, attribute: 'label-hidden' })
  declare labelHidden: boolean;

  @property({ type: Boolean, attribute: 'no-label' })
  declare noLabel: boolean;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: String, attribute: 'labelled-by' })
  declare labelledBy: string;

  /**
   * Input properties
   */
  @property({ type: String })
  declare type: string;

  @property({ type: String })
  declare value: string;

  /**
   * Textarea-specific properties (when type="textarea")
   */
  @property({ type: Number })
  declare rows: number;

  @property({ type: Number })
  declare cols: number;

  /**
   * v1 Parity - Size Variants
   */
  @property({ type: String, reflect: true })
  declare size: 'small' | 'default' | 'large';

  /**
   * v1 Parity - Styling Variants
   */
  @property({ type: Boolean, reflect: true, attribute: 'is-rounded' })
  declare isRounded: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'is-underlined' })
  declare isUnderlined: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'is-underlined-with-background' })
  declare isUnderlinedWithBackground: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'is-inline' })
  declare isInline: boolean;

  /**
   * v1 Parity - Addon Support
   */
  @property({ type: Boolean, reflect: true, attribute: 'has-left-addon' })
  declare hasLeftAddon: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'has-right-addon' })
  declare hasRightAddon: boolean;

  /**
   * Validation & State
   */
  @property({ type: Boolean, reflect: true })
  declare required: boolean;

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @property({ type: Boolean, reflect: true })
  declare readonly: boolean;

  @property({ type: Boolean, reflect: true })
  declare invalid: boolean;

  @property({ type: String, attribute: 'error-message' })
  declare errorMessage: string;

  @property({ type: String, attribute: 'help-text' })
  declare helpText: string;

  constructor() {
    super();
    this.label = '';
    this.labelHidden = false;
    this.noLabel = false;
    this.ariaLabel = '';
    this.labelledBy = '';
    this.type = 'text';
    this.value = '';
    this.rows = 4;
    this.cols = 50;
    this.size = 'default';
    this.isRounded = false;
    this.isUnderlined = false;
    this.isUnderlinedWithBackground = false;
    this.isInline = false;
    this.hasLeftAddon = false;
    this.hasRightAddon = false;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.invalid = false;
    this.errorMessage = '';
    this.helpText = '';
  }

  render() {
    const isTextarea = this.type === 'textarea';
    const hasAddons = this.hasLeftAddon || this.hasRightAddon;

    // Generate IDs for help and error text
    const helpId = `${this._inputId}-help`;
    const errorId = `${this._inputId}-error`;

    // Build aria-describedby list
    const describedByIds: string[] = [];
    if (this.helpText) {
      describedByIds.push(helpId);
    }
    if (this.errorMessage) {
      describedByIds.push(errorId);
    }
    // Include any external labelledBy reference
    if (this.labelledBy) {
      describedByIds.push(this.labelledBy);
    }

    // Build class list for wrapper
    const classes = ['ag-input'];

    // Size variant
    if (this.size !== 'default') {
      classes.push(`ag-input--${this.size}`);
    }

    // Styling variants
    if (this.isRounded) {
      classes.push('ag-input--rounded');
    }
    if (this.isUnderlined) {
      classes.push('ag-input--underlined');
    }
    if (this.isUnderlinedWithBackground) {
      classes.push('ag-input--underlined-with-background');
    }

    // Render the input/textarea element
    const inputElement = isTextarea ? html`
      <textarea
        id="${this._inputId}"
        part="textarea"
        class="ag-input__textarea"
        .value="${this.value}"
        rows="${this.rows}"
        cols="${this.cols}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required ? 'true' : 'false'}"
        aria-invalid="${this.invalid ? 'true' : 'false'}"
        aria-label="${ifDefined(this.ariaLabel || undefined)}"
        aria-labelledby="${ifDefined(this.labelledBy || undefined)}"
        aria-describedby="${describedByIds.length > 0 ? describedByIds.join(' ') : ifDefined(undefined)}"
      ></textarea>
    ` : html`
      <input
        type="${this.type}"
        id="${this._inputId}"
        part="input"
        class="ag-input__input"
        .value="${this.value}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required ? 'true' : 'false'}"
        aria-invalid="${this.invalid ? 'true' : 'false'}"
        aria-label="${ifDefined(this.ariaLabel || undefined)}"
        aria-labelledby="${ifDefined(this.labelledBy || undefined)}"
        aria-describedby="${describedByIds.length > 0 ? describedByIds.join(' ') : ifDefined(undefined)}"
      />
    `;

    return html`
      <div class="${classes.join(' ')}" part="wrapper">
        ${!this.noLabel ? html`
          <label
            for="${this._inputId}"
            part="label"
            class="ag-input__label ${this.labelHidden ? 'ag-input__label--hidden' : ''}"
          >
            ${this.label}
            ${this.required ? html`
              <span class="ag-input__required" aria-hidden="true">*</span>
            ` : ''}
          </label>
        ` : ''}

        ${this.helpText ? html`
          <div class="ag-input__help" id="${helpId}" part="help">
            ${this.helpText}
          </div>
        ` : ''}

        ${this.errorMessage ? html`
          <div class="ag-input__error" id="${errorId}" part="error">
            ${this.errorMessage}
          </div>
        ` : html`
          <div class="ag-input__error" id="${errorId}" part="error" hidden></div>
        `}

        ${hasAddons ? html`
          <div class="ag-input__field" part="field-wrapper">
            ${this.hasLeftAddon ? html`
              <div class="ag-input__addon ag-input__addon--left" part="addon-left">
                <slot name="addon-left"></slot>
              </div>
            ` : ''}

            ${inputElement}

            ${this.hasRightAddon ? html`
              <div class="ag-input__addon ag-input__addon--right" part="addon-right">
                <slot name="addon-right"></slot>
              </div>
            ` : ''}
          </div>
        ` : inputElement}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-input': AgInput;
  }
}