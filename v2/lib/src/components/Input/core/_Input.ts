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

// Props interface following INTERFACE_STANDARDS.md
export interface InputProps {
  // Label properties
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;
  labelledBy?: string;

  // Input properties
  type?: string;
  value?: string;
  placeholder?: string;

  // Textarea properties
  rows?: number;
  cols?: number;

  // Size variants
  size?: 'small' | 'default' | 'large';

  // Styling variants
  capsule?: boolean;
  rounded?: boolean;
  underlined?: boolean;
  underlinedWithBackground?: boolean;
  inline?: boolean;

  // Addon support - REMOVED: hasLeftAddon and hasRightAddon props
  // Slots are now auto-detected via slotchange events

  // Validation & state
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;

  // Event callbacks (native events only - no custom events)
  onClick?: (event: MouseEvent) => void;
  onInput?: (event: InputEvent) => void;
  onChange?: (event: Event) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

/**
 * AgInput - Foundation input component (starting minimal)
 *
 * Starting with basic label + input functionality, will build up incrementally
 */
@customElement('ag-input')
export class AgInput extends LitElement implements InputProps {
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
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      border-color: rgba(var(--ag-focus), 0.6);
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
      border-color: rgb(var(--ag-danger));
    }

    :host([invalid]) .ag-input__input:focus-visible,
    :host([invalid]) .ag-input__textarea:focus-visible {
      border-color: rgba(var(--ag-danger-rgb), 0.6);
      outline-color: rgba(var(--ag-danger-rgb), 0.5);
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
      /* background-color: var(--ag-background-secondary); */
      border: 1px solid var(--ag-border-subtle);
    }

    .ag-input__addon--left {
      border-right: 0;
      border-radius: var(--ag-radius-md) 0 0 var(--ag-radius-md);
    }

    .ag-input__addon--right {
      border-left: 0;
      border-radius: 0 var(--ag-radius-md) var(--ag-radius-md) 0;
    }

    /* When left addon is present */
    .ag-input__field:has(.ag-input__addon--left) .ag-input__input,
    .ag-input__field:has(.ag-input__addon--left) .ag-input__textarea {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* When right addon is present */
    .ag-input__field:has(.ag-input__addon--right) .ag-input__input,
    .ag-input__field:has(.ag-input__addon--right) .ag-input__textarea {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .ag-input__field .ag-input__input,
    .ag-input__field .ag-input__textarea {
      flex: 1;
    }

    /* Capsule variant with addons */
    :host([capsule]) .ag-input__addon--left {
      border-radius: var(--ag-radius-full) 0 0 var(--ag-radius-full);
      padding: var(--ag-space-2) var(--ag-space-4);
    }

    :host([capsule]) .ag-input__addon--right {
      border-radius: 0 var(--ag-radius-full) var(--ag-radius-full) 0;
      padding: var(--ag-space-2) var(--ag-space-4);
    }

    /* Remove border on INPUT where it meets the addon for capsule */
    :host([capsule]) .ag-input__field:has(.ag-input__addon--left) .ag-input__input,
    :host([capsule]) .ag-input__field:has(.ag-input__addon--left) .ag-input__textarea {
      border-left: 0;
    }

    :host([capsule]) .ag-input__field:has(.ag-input__addon--right) .ag-input__input,
    :host([capsule]) .ag-input__field:has(.ag-input__addon--right) .ag-input__textarea {
      border-right: 0;
    }

    /* Underlined variant with addons */
    :host([underlined]) .ag-input__addon,
    :host([underlined-with-background]) .ag-input__addon {
      border-top: 0;
      border-radius: 0;
      background: transparent;
    }

    :host([underlined]) .ag-input__addon--left,
    :host([underlined-with-background]) .ag-input__addon--left {
      border-left: 0;
      border-right: 0;
    }

    :host([underlined]) .ag-input__addon--right,
    :host([underlined-with-background]) .ag-input__addon--right {
      border-right: 0;
      border-left: 0;
    }

    /* Remove border on INPUT where it meets the addon for underlined */
    :host([underlined]) .ag-input__field:has(.ag-input__addon--left) .ag-input__input,
    :host([underlined]) .ag-input__field:has(.ag-input__addon--left) .ag-input__textarea,
    :host([underlined-with-background]) .ag-input__field:has(.ag-input__addon--left) .ag-input__input,
    :host([underlined-with-background]) .ag-input__field:has(.ag-input__addon--left) .ag-input__textarea {
      border-left: 0;
    }

    :host([underlined]) .ag-input__field:has(.ag-input__addon--right) .ag-input__input,
    :host([underlined]) .ag-input__field:has(.ag-input__addon--right) .ag-input__textarea,
    :host([underlined-with-background]) .ag-input__field:has(.ag-input__addon--right) .ag-input__input,
    :host([underlined-with-background]) .ag-input__field:has(.ag-input__addon--right) .ag-input__textarea {
      border-right: 0;
    }

    /* Underlined with background variant - add background to addon */
    :host([underlined-with-background]) .ag-input__addon {
      background-color: var(--ag-background-secondary);
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
      color: rgb(var(--ag-danger));
    }

    .ag-input__error[hidden] {
      display: none !important;
    }

    .ag-input__required {
      color: rgb(var(--ag-danger));
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

  @property({ type: String, reflect: true, attribute: 'aria-label' })
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
   * REMOVED: hasLeftAddon and hasRightAddon props - now auto-detected
   */
  private _hasLeftAddon = false;
  private _hasRightAddon = false;

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

  /**
   * Event callback props (not reflected as attributes)
   * Following AgnosticUI v2 event conventions for native events
   */
  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onInput?: (event: InputEvent) => void;

  @property({ attribute: false })
  declare onChange?: (event: Event) => void;

  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

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
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.invalid = false;
    this.errorMessage = '';
    this.helpText = '';
  }

  /**
   * Event Handlers
   * Following AgnosticUI v2 event conventions:
   * - Native composed events (input, change, click) just invoke callbacks
   * - Native non-bubbling events (focus, blur) re-dispatch from host + invoke callbacks
   */
  private _handleClick(e: MouseEvent) {
    // Native click is composed - just invoke callback if provided
    if (this.onClick) {
      this.onClick(e);
    }
  }

  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    // Native input is composed - just invoke callback if provided
    if (this.onInput) {
      this.onInput(e as InputEvent);
    }
  }

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    // Native change is composed - just invoke callback if provided
    if (this.onChange) {
      this.onChange(e);
    }
  }

  private _handleFocus(e: FocusEvent) {
    // Focus doesn't bubble - re-dispatch from host so consumers can listen
    this.dispatchEvent(new FocusEvent('focus', {
      bubbles: true,
      composed: true,
      relatedTarget: e.relatedTarget,
    }));

    // Invoke callback if provided
    if (this.onFocus) {
      this.onFocus(e);
    }
  }

  private _handleBlur(e: FocusEvent) {
    // Blur doesn't bubble - re-dispatch from host so consumers can listen
    this.dispatchEvent(new FocusEvent('blur', {
      bubbles: true,
      composed: true,
      relatedTarget: e.relatedTarget,
    }));

    // Invoke callback if provided
    if (this.onBlur) {
      this.onBlur(e);
    }
  }

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
   * Handle slot changes to detect if addons are present
   */
  private _handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const slotName = slot.name;

    if (slotName === 'addon-left') {
      this._hasLeftAddon = this._hasSlotContent(slot);
    } else if (slotName === 'addon-right') {
      this._hasRightAddon = this._hasSlotContent(slot);
    }

    this.requestUpdate();
  }

  override firstUpdated() {
    // Initial check for slot content
    // We need to defer this check to avoid "change in update" warning
    setTimeout(() => {
      const leftAddonSlot = this.shadowRoot?.querySelector('slot[name="addon-left"]') as HTMLSlotElement;
      const rightAddonSlot = this.shadowRoot?.querySelector('slot[name="addon-right"]') as HTMLSlotElement;

      const hadLeftAddon = this._hasLeftAddon;
      const hadRightAddon = this._hasRightAddon;

      this._hasLeftAddon = this._hasSlotContent(leftAddonSlot);
      this._hasRightAddon = this._hasSlotContent(rightAddonSlot);

      // Only request update if something changed
      if (hadLeftAddon !== this._hasLeftAddon || hadRightAddon !== this._hasRightAddon) {
        this.requestUpdate();
      }
    }, 0);
  }

  render() {
    const isTextarea = this.type === 'textarea';
    const hasAddons = this._hasLeftAddon || this._hasRightAddon;

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
        part="ag-textarea"
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
        @click=${this._handleClick}
        @input=${this._handleInput}
        @change=${this._handleChange}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      ></textarea>
    ` : html`
      <input
        type="${this.type}"
        id="${this._inputId}"
        part="ag-input"
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
        @click=${this._handleClick}
        @input=${this._handleInput}
        @change=${this._handleChange}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      />
    `;

    return html`
      <div class="${classes.join(' ')}" part="ag-input-wrapper">
        ${!this.noLabel ? html`
          <label
            for="${this._inputId}"
            part="ag-input-label"
            class="ag-input__label ${this.labelHidden ? 'ag-input__label--hidden' : ''}"
          >
            ${this.label}
            ${this.required ? html`
              <span class="ag-input__required" part="ag-input-required" aria-hidden="true">*</span>
            ` : ''}
          </label>
        ` : ''}

        ${this.helpText ? html`
          <div class="ag-input__help" id="${helpId}" part="ag-input-help">
            ${this.helpText}
          </div>
        ` : ''}

        ${this.errorMessage ? html`
          <div class="ag-input__error" id="${errorId}" part="ag-input-error">
            ${this.errorMessage}
          </div>
        ` : html`
          <div class="ag-input__error" id="${errorId}" part="ag-input-error" hidden></div>
        `}

        ${hasAddons ? html`
          <div class="ag-input__field" part="ag-input-field-wrapper">
            ${this._hasLeftAddon ? html`
              <div class="ag-input__addon ag-input__addon--left" part="ag-input-addon-left">
                <slot name="addon-left" @slotchange=${this._handleSlotChange}></slot>
              </div>
            ` : html`
              <slot name="addon-left" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
            `}

            ${inputElement}

            ${this._hasRightAddon ? html`
              <div class="ag-input__addon ag-input__addon--right" part="ag-input-addon-right">
                <slot name="addon-right" @slotchange=${this._handleSlotChange}></slot>
              </div>
            ` : html`
              <slot name="addon-right" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
            `}
          </div>
        ` : html`
          ${inputElement}
          <slot name="addon-left" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
          <slot name="addon-right" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
        `}
      </div>
    `;
  }
}
