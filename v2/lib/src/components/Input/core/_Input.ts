/**
 * AgnosticUI v2 Input - Canonical Implementation (Starting Simple)
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-10-06
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
      margin-bottom: var(--ag-space-2);
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
    }

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

    .ag-input__input,
    .ag-input__textarea {
      box-sizing: border-box;
      width: 100%;
      padding: var(--ag-space-2) var(--ag-space-3);
      font-size: var(--ag-font-size-base);
      line-height: var(--ag-line-height-base);
      color: var(--ag-text-primary);
      background-color: var(--ag-background-primary);
      border: 1px solid var(--ag-border-subtle);
      border-radius: 0; /* Make it rectangular by default */
      transition: all var(--ag-motion-medium);
    }

    .ag-input__input::placeholder,
    .ag-input__textarea::placeholder {
      color: var(--ag-text-muted);
      opacity: 1;
    }

    .ag-input__input:focus-visible,
    .ag-input__textarea:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
      border-color: var(--ag-focus);
    }

    .ag-input__textarea {
      resize: vertical;
    }

    :host([inline]) {
      display: inline-block;
    }

    /* Sizes */
    :host([size="small"]) .ag-input__input,
    :host([size="small"]) .ag-input__textarea {
      padding: var(--ag-space-1) var(--ag-space-2);
      font-size: var(--ag-font-size-sm);
    }

    :host([size="large"]) .ag-input__input,
    :host([size="large"]) .ag-input__textarea {
      padding: var(--ag-space-3) var(--ag-space-4);
      font-size: var(--ag-font-size-lg);
    }

    /* Variants */
    :host([capsule]) .ag-input__input,
    :host([capsule]) .ag-input__textarea {
      border-radius: var(--ag-radius-full);
    }

    :host([rounded]) .ag-input__input,
    :host([rounded]) .ag-input__textarea {
      border-radius: var(--ag-radius-md);
    }

    :host([underlined]) .ag-input__input,
    :host([underlined]) .ag-input__textarea {
      border-radius: 0;
      border-width: 0 0 1px 0;
    }

    :host([underlined-with-background]) .ag-input__input,
    :host([underlined-with-background]) .ag-input__textarea {
      border-radius: 0;
      border-width: 0 0 1px 0;
      background-color: var(--ag-background-secondary);
    }

    /* States */
    :host([disabled]) .ag-input__input,
    :host([disabled]) .ag-input__textarea {
      background-color: var(--ag-background-disabled);
      color: var(--ag-text-muted);
      cursor: not-allowed;
    }

    :host([invalid]) .ag-input__input,
    :host([invalid]) .ag-input__textarea {
      border-color: var(--ag-danger);
    }

    :host([invalid]) .ag-input__input:focus-visible,
    :host([invalid]) .ag-input__textarea:focus-visible {
      border-color: var(--ag-danger);
      outline-color: var(--ag-danger);
    }

    /* Addons */
    .ag-input__field {
      display: flex;
      align-items: stretch;
    }

    .ag-input__addon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--ag-space-2) var(--ag-space-3);
      font-size: var(--ag-font-size-base);
      line-height: var(--ag-line-height-base);
      color: var(--ag-text-primary);
      background-color: var(--ag-background-secondary);
      border: 1px solid var(--ag-border-subtle);
    }

    :host([has-left-addon]) .ag-input__addon--left {
      border-right: 0;
      border-radius: var(--ag-radius-md) 0 0 var(--ag-radius-md);
    }

    :host([has-right-addon]) .ag-input__addon--right {
      border-left: 0;
      border-radius: 0 var(--ag-radius-md) var(--ag-radius-md) 0;
    }

    :host([has-left-addon]) .ag-input__field .ag-input__input,
    :host([has-left-addon]) .ag-input__field .ag-input__textarea {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    :host([has-right-addon]) .ag-input__field .ag-input__input,
    :host([has-right-addon]) .ag-input__field .ag-input__textarea {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .ag-input__field .ag-input__input,
    .ag-input__field .ag-input__textarea {
      flex: 1;
    }

    /* Help & Error Text */
    .ag-input__help,
    .ag-input__error {
      margin-top: var(--ag-space-2);
      font-size: var(--ag-font-size-sm);
    }

    .ag-input__help {
      color: var(--ag-text-secondary);
    }

    .ag-input__error {
      color: var(--ag-danger);
    }

    .ag-input__error[hidden] {
      display: none !important;
    }

    .ag-input__required {
      color: var(--ag-danger);
      margin-left: var(--ag-space-1);
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

  @property({ type: String, reflect: true })
  declare value: string;

  @property({ type: String })
  declare placeholder: string;

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
  @property({ type: Boolean, reflect: true })
  declare capsule: boolean;

  @property({ type: Boolean, reflect: true })
  declare rounded: boolean;

  @property({ type: Boolean, reflect: true })
  declare underlined: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'underlined-with-background' })
  declare underlinedWithBackground: boolean;

  @property({ type: Boolean, reflect: true })
  declare inline: boolean;

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
    this.placeholder = '';
    this.rows = 4;
    this.cols = 50;
    this.size = 'default';
    this.capsule = false;
    this.rounded = false;
    this.underlined = false;
    this.underlinedWithBackground = false;
    this.inline = false;
    this.hasLeftAddon = false;
    this.hasRightAddon = false;
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.invalid = false;
    this.errorMessage = '';
    this.helpText = '';
  }

  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    // Dispatch native input event
    const inputEvent = new Event('input', { bubbles: true, composed: true });
    this.dispatchEvent(inputEvent);
  }

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    // Dispatch native change event
    const changeEvent = new Event('change', { bubbles: true, composed: true });
    this.dispatchEvent(changeEvent);
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
    if (this.rounded) {
      classes.push('ag-input--rounded');
    }
    if (this.underlined) {
      classes.push('ag-input--underlined');
    }
    if (this.underlinedWithBackground) {
      classes.push('ag-input--underlined-with-background');
    }

    // Render the input/textarea element
    const inputElement = isTextarea ? html`
      <textarea
        id="${this._inputId}"
        part="textarea"
        class="ag-input__textarea"
        .value="${this.value}"
        placeholder="${ifDefined(this.placeholder || undefined)}"
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
        @input=${this._handleInput}
        @change=${this._handleChange}
      ></textarea>
    ` : html`
      <input
        type="${this.type}"
        id="${this._inputId}"
        part="input"
        class="ag-input__input"
        .value="${this.value}"
        placeholder="${ifDefined(this.placeholder || undefined)}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required ? 'true' : 'false'}"
        aria-invalid="${this.invalid ? 'true' : 'false'}"
        aria-label="${ifDefined(this.ariaLabel || undefined)}"
        aria-labelledby="${ifDefined(this.labelledBy || undefined)}"
        aria-describedby="${describedByIds.length > 0 ? describedByIds.join(' ') : ifDefined(undefined)}"
        @input=${this._handleInput}
        @change=${this._handleChange}
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
