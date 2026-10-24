// v2/lib/src/components/Input/core/_Input.ts
/**
 * AgnosticUI Input Component
 *
 * A flexible input component supporting various types, sizes, and styles.
 * Handles labels, helper text, and error messages using shared form control utilities.
 */

import { LitElement, html, css, unsafeCSS, nothing } from 'lit';
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
import { FaceMixin, syncInnerInputValidity } from '../../../shared/face-mixin';

// Ingest the class dictionary object to decode hashes
import styles from './input-structure.module.css';
// Ingest the compiled CSS text string for the shadow root definition
import structuralStylesText from './input-structure.module.css?inline';

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
  name?: string;
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
  min?: string;
  max?: string;
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

export class AgInput extends FaceMixin(LitElement) implements InputProps {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [
    formControlStyles,
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      /* Interactive browser-only animations, focus indicators, and state loops */
      .ag-input__input:focus-visible,
      .ag-input__textarea:focus-visible {
        outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
        outline-offset: var(--ag-focus-offset);
        border-color: rgba(var(--ag-focus), 0.6);
      }

      /* Focus states for validation anomalies */
      :host([invalid]) .ag-input__input:focus-visible,
      :host([invalid]) .ag-input__textarea:focus-visible {
        border-color: rgba(var(--ag-danger-rgb), 0.6);
        outline-color: rgba(var(--ag-danger-rgb), 0.5);
      }

      /* Hover states for interactive inputs */
      .ag-input__input:not(:disabled):hover,
      .ag-input__textarea:not(:disabled):hover {
        border-color: var(--ag-border-hover, #888888);
      }

      :host([disabled]) .ag-input__input,
      :host([disabled]) .ag-input__textarea {
        background-color: var(--ag-background-disabled);
        color: var(--ag-text-muted);
        cursor: not-allowed;
      }

      :host([invalid]) .ag-input__input,
      :host([invalid]) .ag-input__textarea {
        border-color: var(--ag-error-text);
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

  // Range constraints (for date, number, time inputs)
  @property({ type: String })
  declare min: string;

  @property({ type: String })
  declare max: string;

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
// v2/lib/src/components/Input/core/_Input.ts (Part 2 of 4)

  constructor() {
    super();
    this.label = '';
    this.labelHidden = false;
    this.labelPosition = 'top';
    this.noLabel = false;
    this.ariaLabel = '';
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
    this.min = '';
    this.max = '';
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
   * Select the text in the input
   */
  select(): void {
    this._inputElement?.select();
  }

  /**
   * FACE lifecycle: called when the parent form is reset.
   * Restores value to empty and clears validity state.
   */
  override formResetCallback(): void {
    this.value = '';
    this._internals.setFormValue('');
    this._internals.setValidity({});
    this._syncStates();
  }

  /**
   * FACE lifecycle: called on session restore or browser autofill.
   * Restores the input value from the previously saved form state.
   */
  override formStateRestoreCallback(
    state: File | string | FormData | null,
    _mode: 'restore' | 'autocomplete'
  ): void {
    this.value = typeof state === 'string' ? state : '';
    this._internals.setFormValue(this.value);
    this._syncValidity();
    this._syncStates();
  }

  /**
   * Sync CustomStateSet states so :state() pseudo-classes work from external CSS.
   */
  private _syncStates(): void {
    this._setState('disabled', this.disabled);
    this._setState('readonly', this.readonly);
    this._setState('required', this.required);
    this._setState('invalid', !this._internals.validity.valid);
  }

  /**
   * Sync the inner input's native validity state to ElementInternals.
   */
  private _syncValidity(): void {
    syncInnerInputValidity(this._internals, this._inputElement);
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
    this._internals.setFormValue(this.value);
    this._syncValidity();

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
    this._internals.setFormValue(this.value);
    this._syncValidity();

    if (this.onChange) {
      this.onChange(e);
    }

    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  /**
   * Handle focus events
   */
  private _handleFocus(e: FocusEvent) {
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

  private _supportsMinMax(): boolean {
    return ['date', 'datetime-local', 'month', 'time', 'week', 'number', 'range'].includes(this.type);
  }

  private _renderInputElement() {
    const isTextarea = this.type === 'textarea';
    const describedBy = this._getAriaDescribedBy();
    const describedByIds: string[] = [];
    if (describedBy) {
      describedByIds.push(describedBy);
    }

    if (isTextarea) {
      return html`
        <textarea
          id="${this._ids.inputId}"
          part="ag-textarea"
          class="${styles.agInputTextarea}"
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
        class="${styles.agInputInput}"
        .value="${this.value}"
        placeholder="${ifDefined(this.placeholder || undefined)}"
        min="${ifDefined(this._supportsMinMax() && this.min ? this.min : undefined)}"
        max="${ifDefined(this._supportsMinMax() && this.max ? this.max : undefined)}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required ? 'true' : 'false'}"
        aria-invalid="${this.invalid ? 'true' : 'false'}"
        aria-label="${ifDefined(this.ariaLabel || undefined)}"
        aria-describedby="${describedByIds.length > 0 ? describedByIds.join(' ') : ifDefined(undefined)}"
        @click=${this._handleClick}
        @input=${this._handleInput}
        @change=${this._handleChange}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      />
    `;
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('readonly') ||
      changedProperties.has('required') ||
      changedProperties.has('invalid')
    ) {
      this._syncStates();
    }
  }

  override firstUpdated() {
    this._internals.setFormValue(this.value ?? '');
    this._syncValidity();
    this._syncStates();

    setTimeout(() => {
      const leftAddonSlot = this.shadowRoot?.querySelector('slot[name="addon-left"]') as HTMLSlotElement;
      const rightAddonSlot = this.shadowRoot?.querySelector('slot[name="addon-right"]') as HTMLSlotElement;

      const hadLeftAddon = this._hasLeftAddon;
      const hadRightAddon = this._hasRightAddon;

      this._hasLeftAddon = hasSlotContent(leftAddonSlot);
      this._hasRightAddon = hasSlotContent(rightAddonSlot);

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
    const literalPositionClasses: string[] = [];

    if (isHorizontalLabel(this.labelPosition)) {
      positionClasses.push(styles['ag-form-control__label--horizontal']);
      positionClasses.push(styles[`ag-form-control__label--${this.labelPosition}`]);
      positionClasses.push(styles['ag-input__label--horizontal']);
      positionClasses.push(styles[`ag-input__label--${this.labelPosition}`]);

      literalPositionClasses.push('ag-form-control__label--horizontal');
      literalPositionClasses.push(`ag-form-control__label--${this.labelPosition}`);
      literalPositionClasses.push('ag-input__label--horizontal');
      literalPositionClasses.push(`ag-input__label--${this.labelPosition}`);
    } else if (this.labelPosition === 'bottom') {
      positionClasses.push(styles['ag-input__label--bottom']);
      literalPositionClasses.push('ag-input__label--bottom');
    }

    const completeLabelClass = [
      styles['ag-form-control__label'],
      styles.agInputLabel,
      this.labelHidden ? `${styles['ag-form-control__label--hidden']} ${styles['ag-input__label--hidden']}` : '',
      positionClasses.join(' '),
      'ag-form-control__label',
      'ag-input__label',
      this.labelHidden ? 'ag-input__label--hidden' : '',
      literalPositionClasses.join(' ')
    ].filter(Boolean).join(' ').trim();

    return html`
      <label
        id="${this._ids.labelId}"
        for="${this._ids.inputId}"
        class="${completeLabelClass}"
        part="ag-input-label"
      >
        ${this.label}
        ${this.required
          ? html`
              <span class="${styles['ag-form-control__required']} ${styles.agInputRequired} ag-input__required" part="ag-input-required" aria-hidden="true">*</span>
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
        class="${styles['ag-form-control__helper']} ${styles.agInputHelp} ag-input__help"
        part="ag-input-help"
      >
        ${this.helpText}
      </div>
    `;
  }

  /**
   * Render custom error message for Input.
   * role="alert" + aria-atomic="true" ensures screen readers announce the
   * message immediately when it becomes visible (e.g. after blur or submit).
   * The live region is always in the DOM so ATs register it on page load;
   * content is populated only when invalid so announcements fire on change.
   */
  private _renderError() {
    return html`
      <div
        id="${this._ids.errorId}"
        class="${styles['ag-form-control__error']} ${styles.agInputError} ag-input__error"
        part="ag-input-error"
        role="alert"
        aria-atomic="true"
        ?hidden="${!this.invalid || !this.errorMessage}"
      >
        ${this.errorMessage || ''}
      </div>
    `;
  }

  render() {
    const hasAddons = this._hasLeftAddon || this._hasRightAddon;
    const isHorizontal = isHorizontalLabel(this.labelPosition);

    // Build wrapper class list with both module hashes and literal fallbacks to clear specimen suites
    const wrapperClasses = [styles.agInput, 'ag-input'];
    if (this.size === 'small') { wrapperClasses.push(styles.agInputSmall, 'ag-input--small'); }
    if (this.size === 'large') { wrapperClasses.push(styles.agInputLarge, 'ag-input--large'); }
    if (this.rounded) { wrapperClasses.push(styles.agInputRounded, 'ag-input--rounded'); }
    if (this.underlined) { wrapperClasses.push(styles.agInputUnderlined, 'ag-input--underlined'); }
    if (this.underlinedWithBackground) { wrapperClasses.push(styles.agInputUnderlinedWithBackground, 'ag-input--underlined-with-background'); }
    if (this.capsule) { wrapperClasses.push(styles.agInputCapsule, 'ag-input--capsule'); }
    if (this.inline) { wrapperClasses.push(styles.agInputInline, 'ag-input--inline'); }

    // Render input field (with or without addons using standard dual-string setups)
    const inputField = hasAddons
      ? html`
          <div class="${styles.agInputField} ag-input__field" part="ag-input-field-wrapper">
            ${this._hasLeftAddon
              ? html`
                  <div class="${styles.agInputAddon} ${styles['ag-input__addon--left']} ag-input__addon ag-input__addon--left" part="ag-input-addon-left">
                    <slot name="addon-left" @slotchange=${this._handleSlotChange}></slot>
                  </div>
                `
              : html`
                  <slot name="addon-left" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
                `}

            ${this._renderInputElement()}

            ${this._hasRightAddon
              ? html`
                  <div class="${styles.agInputAddon} ${styles['ag-input__addon--right']} ag-input__addon ag-input__addon--right" part="ag-input-addon-right">
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

    const finalClassList = wrapperClasses.filter(Boolean).join(' ').trim();

    // For horizontal layout: [Label] [Input] structure with helper/error below
    if (isHorizontal) {
      return html`
        <div class="${finalClassList}" part="ag-input-wrapper">
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
        <div class="${finalClassList}" part="ag-input-wrapper">
          ${inputField}
          ${this.helpText ? this._renderHelper() : nothing}
          ${this._renderError()}
          ${this._renderLabel()}
        </div>
      `;
    }

    // Top label (default): Label first, then helper/error, then input
    return html`
      <div class="${finalClassList}" part="ag-input-wrapper">
        ${this._renderLabel()}
        ${this.helpText ? this._renderHelper() : nothing}
        ${this._renderError()}
        ${inputField}
      </div>
    `;
  }
}
