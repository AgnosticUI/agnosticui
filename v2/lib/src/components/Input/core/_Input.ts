/**
 * AgnosticUI Input Component
 *
 * A flexible input component supporting various types, sizes, and styles.
 * Handles labels, helper text, and error messages using shared form control utilities.
 */

import { LitElement, html, css, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { hasSlotContent } from '../../../utils/slot';
import { formControlStyles } from '../../../shared/form-control-styles';
import {
  createFormControlIds,
  buildAriaDescribedBy,
  isHorizontalLabel,
  type LabelPosition,
} from '../../../shared/form-control-utils';

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'textarea';

export type InputSize = 'small' | 'default' | 'large';

/**
 * Input component properties for type safety
 */
export interface InputProps {
  label?: string;
  labelHidden?: boolean;
  labelPosition?: LabelPosition;
  noLabel?: boolean;
  ariaLabel?: string;
  labelledBy?: string;
  type?: InputType;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  size?: InputSize;
  capsule?: boolean;
  rounded?: boolean;
  underlined?: boolean;
  underlinedWithBackground?: boolean;
  inline?: boolean;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  onClick?: (event: MouseEvent) => void;
  onInput?: (event: InputEvent) => void;
  onChange?: (event: Event) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

export class AgInput extends LitElement implements InputProps {
  static styles = [
    formControlStyles,
    css`
      :host {
        display: block;
      }

      :host([inline]) {
        display: inline-block;
      }

      /* Wrapper with size classes */
      .ag-input {
        display: block;
      }

      .ag-input--small {
        /* Size-specific wrapper styling if needed */
      }

      .ag-input--large {
        /* Size-specific wrapper styling if needed */
      }

      .ag-input--rounded {
        /* Rounded variant wrapper styling if needed */
      }

      .ag-input--underlined {
        /* Underlined variant wrapper styling if needed */
      }

      .ag-input--underlined-with-background {
        /* Underlined with background wrapper styling if needed */
      }

      /* Input & Textarea Base Styles */
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
        border-radius: 0;
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
    `,
  ];

  // Stable IDs for form control elements (created once)
  private _ids = createFormControlIds('ag-input');

  // Reference to the actual input/textarea element
  @query('input, textarea')
  private _inputElement?: HTMLInputElement | HTMLTextAreaElement;

  // Label properties
  @property({ type: String })
  declare label: string;

  @property({ type: Boolean, attribute: 'label-hidden' })
  declare labelHidden: boolean;

  @property({ type: String, attribute: 'label-position' })
  declare labelPosition: LabelPosition;

  @property({ type: Boolean, attribute: 'no-label' })
  declare noLabel: boolean;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: String, attribute: 'labelled-by' })
  declare labelledBy: string;

  // Input properties
  @property({ type: String })
  declare type: InputType;

  @property({ type: String, reflect: true })
  declare value: string;

  @property({ type: String })
  declare placeholder: string;

  // Textarea-specific properties
  @property({ type: Number })
  declare rows: number;

  @property({ type: Number })
  declare cols: number;

  // Size and style variants
  @property({ type: String, reflect: true })
  declare size: InputSize;

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

  // Validation and state
  @property({ type: Boolean, reflect: true })
  declare required: boolean;

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @property({ type: Boolean, reflect: true })
  declare readonly: boolean;

  @property({ type: Boolean, reflect: true })
  declare invalid: boolean;

  // Helper and error text
  @property({ type: String, attribute: 'error-message' })
  declare errorMessage: string;

  @property({ type: String, attribute: 'help-text' })
  declare helpText: string;

  // Event handlers
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

  // Addon slot tracking
  @state() private _hasLeftAddon = false;
  @state() private _hasRightAddon = false;

  constructor() {
    super();
    this.label = '';
    this.labelHidden = false;
    this.labelPosition = 'top';
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
   * Expose the internal input element for external access
   */
  get controlElement(): HTMLInputElement | HTMLTextAreaElement | undefined {
    return this._inputElement;
  }

  /**
   * Get the current value of the input
   */
  getValue(): string {
    return this._inputElement?.value ?? '';
  }

  /**
   * Set the value of the input
   */
  setValue(value: string): void {
    if (this._inputElement) {
      this._inputElement.value = value;
      this.value = value;
    }
  }

  /**
   * Focus the input element
   */
  focus(): void {
    this._inputElement?.focus();
  }

  /**
   * Blur the input element
   */
  blur(): void {
    this._inputElement?.blur();
  }

  /**
   * Select the text in the input
   */
  select(): void {
    this._inputElement?.select();
  }

  /**
   * Handle slot changes to detect addons
   */
  private _handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const slotName = slot.name;

    if (slotName === 'addon-left') {
      this._hasLeftAddon = hasSlotContent(slot);
    } else if (slotName === 'addon-right') {
      this._hasRightAddon = hasSlotContent(slot);
    }

    this.requestUpdate();
  }

  /**
   * Handle input events
   */
  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;

    if (this.onInput) {
      this.onInput(e as InputEvent);
    }
  }

  /**
   * Handle change events
   */
  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;

    if (this.onChange) {
      this.onChange(e);
    }
  }

  /**
   * Handle focus events
   */
  private _handleFocus(e: FocusEvent) {
    // Focus doesn't bubble - re-dispatch from host
    this.dispatchEvent(
      new FocusEvent('focus', {
        bubbles: true,
        composed: true,
        relatedTarget: e.relatedTarget,
      })
    );

    if (this.onFocus) {
      this.onFocus(e);
    }
  }

  /**
   * Handle blur events
   */
  private _handleBlur(e: FocusEvent) {
    // Blur doesn't bubble - re-dispatch from host
    this.dispatchEvent(
      new FocusEvent('blur', {
        bubbles: true,
        composed: true,
        relatedTarget: e.relatedTarget,
      })
    );

    if (this.onBlur) {
      this.onBlur(e);
    }
  }

  /**
   * Handle click events
   */
  private _handleClick(e: MouseEvent) {
    if (this.onClick) {
      this.onClick(e);
    }
  }

  /**
   * Build ARIA describedby attribute
   */
  private _getAriaDescribedBy(): string | undefined {
    return buildAriaDescribedBy({
      helperId: this._ids.helperId,
      errorId: this._ids.errorId,
      hasHelper: !!this.helpText,
      hasError: this.invalid && !!this.errorMessage,
    });
  }

  /**
   * Render the input or textarea element
   */
  private _renderInputElement() {
    const isTextarea = this.type === 'textarea';

    // Build aria-describedby including external labelledBy if present
    const describedBy = this._getAriaDescribedBy();
    const describedByIds: string[] = [];
    if (describedBy) {
      describedByIds.push(describedBy);
    }
    if (this.labelledBy) {
      describedByIds.push(this.labelledBy);
    }

    if (isTextarea) {
      return html`
        <textarea
          id="${this._ids.inputId}"
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
      `;
    }

    return html`
      <input
        type="${this.type}"
        id="${this._ids.inputId}"
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
  }

  override firstUpdated() {
    // Initial check for slot content
    setTimeout(() => {
      const leftAddonSlot = this.shadowRoot?.querySelector('slot[name="addon-left"]') as HTMLSlotElement;
      const rightAddonSlot = this.shadowRoot?.querySelector('slot[name="addon-right"]') as HTMLSlotElement;

      const hadLeftAddon = this._hasLeftAddon;
      const hadRightAddon = this._hasRightAddon;

      this._hasLeftAddon = hasSlotContent(leftAddonSlot);
      this._hasRightAddon = hasSlotContent(rightAddonSlot);

      // Only request update if something changed
      if (hadLeftAddon !== this._hasLeftAddon || hadRightAddon !== this._hasRightAddon) {
        this.requestUpdate();
      }
    }, 0);
  }

  /**
   * Render custom label for Input (using shared utility but customized for Input)
   */
  private _renderLabel() {
    if (!this.label || this.noLabel) return nothing;

    // Build position classes based on directional value
    const positionClasses: string[] = [];
    if (isHorizontalLabel(this.labelPosition)) {
      positionClasses.push('ag-form-control__label--horizontal');
      positionClasses.push(`ag-form-control__label--${this.labelPosition}`);
      positionClasses.push('ag-input__label--horizontal');
      positionClasses.push(`ag-input__label--${this.labelPosition}`);
    } else if (this.labelPosition === 'bottom') {
      positionClasses.push(`ag-form-control__label--${this.labelPosition}`);
      positionClasses.push(`ag-input__label--${this.labelPosition}`);
    }

    return html`
      <label
        id="${this._ids.labelId}"
        for="${this._ids.inputId}"
        class="ag-form-control__label ag-input__label ${this.labelHidden ? 'ag-form-control__label--hidden ag-input__label--hidden' : ''} ${positionClasses.join(' ')}"
        part="ag-input-label"
      >
        ${this.label}
        ${this.required
          ? html`
              <span class="ag-form-control__required ag-input__required" part="ag-input-required" aria-hidden="true">*</span>
            `
          : nothing}
      </label>
    `;
  }

  /**
   * Render custom helper text for Input
   */
  private _renderHelper() {
    if (!this.helpText) return nothing;

    return html`
      <div
        id="${this._ids.helperId}"
        class="ag-form-control__helper ag-input__help"
        part="ag-input-help"
      >
        ${this.helpText}
      </div>
    `;
  }

  /**
   * Render custom error message for Input
   */
  private _renderError() {
    return html`
      <div
        id="${this._ids.errorId}"
        class="ag-form-control__error ag-input__error"
        part="ag-input-error"
        ?hidden="${!this.invalid || !this.errorMessage}"
      >
        ${this.errorMessage || ''}
      </div>
    `;
  }

  render() {
    const hasAddons = this._hasLeftAddon || this._hasRightAddon;
    const isHorizontal = isHorizontalLabel(this.labelPosition);

    // Build wrapper class list
    const wrapperClasses = ['ag-input'];
    if (this.size === 'small') wrapperClasses.push('ag-input--small');
    if (this.size === 'large') wrapperClasses.push('ag-input--large');
    if (this.rounded) wrapperClasses.push('ag-input--rounded');
    if (this.underlined) wrapperClasses.push('ag-input--underlined');
    if (this.underlinedWithBackground) wrapperClasses.push('ag-input--underlined-with-background');

    // Render input field (with or without addons)
    const inputField = hasAddons
      ? html`
          <div class="ag-input__field" part="ag-input-field-wrapper">
            ${this._hasLeftAddon
              ? html`
                  <div class="ag-input__addon ag-input__addon--left" part="ag-input-addon-left">
                    <slot name="addon-left" @slotchange=${this._handleSlotChange}></slot>
                  </div>
                `
              : html`
                  <slot name="addon-left" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
                `}

            ${this._renderInputElement()}

            ${this._hasRightAddon
              ? html`
                  <div class="ag-input__addon ag-input__addon--right" part="ag-input-addon-right">
                    <slot name="addon-right" @slotchange=${this._handleSlotChange}></slot>
                  </div>
                `
              : html`
                  <slot name="addon-right" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
                `}
          </div>
        `
      : html`
          ${this._renderInputElement()}
          <slot name="addon-left" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
          <slot name="addon-right" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
        `;

    // For horizontal layout: [Label] [Input] structure with helper/error below
    if (isHorizontal) {
      return html`
        <div class="${wrapperClasses.join(' ')}" part="ag-input-wrapper">
          <div class="ag-form-control--horizontal">
            ${this._renderLabel()}
            ${inputField}
          </div>
          ${this.helpText ? this._renderHelper() : nothing}
          ${this._renderError()}
        </div>
      `;
    }

    // For vertical layout: Different order for top vs bottom labels
    if (this.labelPosition === 'bottom') {
      // Bottom label: Input first, then helper/error, then label
      return html`
        <div class="${wrapperClasses.join(' ')}" part="ag-input-wrapper">
          ${inputField}
          ${this.helpText ? this._renderHelper() : nothing}
          ${this._renderError()}
          ${this._renderLabel()}
        </div>
      `;
    }

    // Top label (default): Label first, then helper/error, then input
    return html`
      <div class="${wrapperClasses.join(' ')}" part="ag-input-wrapper">
        ${this._renderLabel()}
        ${this.helpText ? this._renderHelper() : nothing}
        ${this._renderError()}
        ${inputField}
      </div>
    `;
  }
}
