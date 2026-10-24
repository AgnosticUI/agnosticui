// v2/lib/src/components/Checkbox/core/_Checkbox.ts (Part 1 of 3)
import { LitElement, html, css, unsafeCSS, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { formControlStyles } from '../../../shared/form-control-styles';
import {
  createFormControlIds,
  buildAriaDescribedBy,
} from '../../../shared/form-control-utils';
import { FaceMixin, syncInnerInputValidity } from '../../../shared/face-mixin';

// Ingest the class dictionary hashes for runtime binding parity
import styles from './checkbox-structure.module.css';
// Ingest the raw compiled style content safely via inward bundler string loaders
import structuralStylesText from './checkbox-structure.module.css?inline';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxTheme = 'default' | 'primary' | 'success' | 'monochrome';

// Event types
export interface CheckboxChangeEventDetail {
  checked: boolean;
  value: string;
  name: string;
  indeterminate: boolean;
}

export type CheckboxChangeEvent = CustomEvent<CheckboxChangeEventDetail>;

/**
 * @csspart ag-checkbox-wrapper - The outer wrapper label element
 * @csspart ag-checkbox-input - The native checkbox input element
 * @csspart ag-checkbox-indicator - The custom visual checkbox indicator (box with checkmark)
 * @csspart ag-checkbox-label - The label text span
 */
export interface CheckboxProps {
  name?: string;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  theme?: CheckboxTheme;
  labelText?: string;
  labelPosition?: 'end' | 'start';
  // Validation & hints
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  // Event callbacks
  onClick?: (event: MouseEvent) => void;
  onChange?: (event: CheckboxChangeEvent) => void;
}

export class AgCheckbox extends FaceMixin(LitElement) implements CheckboxProps {
  static override styles = [
    formControlStyles,
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      /* Interactive browser-only focus-visible indicator outlines and active states */
      .checkbox-input:focus + .checkbox-label::before {
        box-shadow: 0 0 0 var(--ag-focus-width) rgba(var(--ag-focus), 0.5);
        outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
        outline-offset: var(--ag-focus-offset);
      }

      :host([disabled]) .checkbox-wrapper {
        cursor: not-allowed;
        opacity: 0.6;
      }

      /* Indeterminate horizontal baseline checkmark line styling markers */
      .checkbox-input:indeterminate + .checkbox-label::after {
        transform: rotate(0deg) scale(1) translate(-6px);
        opacity: 1;
        border-inline-end: none;
        border-bottom: var(--ag-border-width-2) solid var(--ag-white);
        width: 8px;
        height: 0;
        inset-inline-start: 50%;
        top: 50%;
        margin-inline-start: -4px;
        margin-block-start: -1px;
      }

      /* Checked checkmark transformation animations */
      .checkbox-input:checked + .checkbox-label::after {
        opacity: 1;
        transform: rotate(40deg) scale(1) translate(2px);
      }

      .checkbox-input:checked + .checkbox-label--default::before,
      .checkbox-input:indeterminate + .checkbox-label--default::before {
        background: var(--ag-primary);
        border-color: var(--ag-primary);
      }

      .checkbox-input:checked + .checkbox-label--primary::before,
      .checkbox-input:indeterminate + .checkbox-label--primary::before {
        background: var(--ag-primary);
        border-color: var(--ag-primary);
      }

      .checkbox-input:checked + .checkbox-label--success::before,
      .checkbox-input:indeterminate + .checkbox-label--success::before {
        background: var(--ag-success);
        border-color: var(--ag-success);
      }

      .checkbox-input:checked + .checkbox-label--monochrome::before,
      .checkbox-input:indeterminate + .checkbox-label--monochrome::before {
        background: var(--ag-black);
        border-color: var(--ag-black);
      }

      /* Respect reduced motion preferences */
      @media (prefers-reduced-motion: reduce) {
        .checkbox-label,
        .checkbox-label::before,
        .checkbox-label::after {
          transition: none;
        }
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .checkbox-label::before {
          outline: var(--ag-border-width-1) solid;
        }
      }
    `,
  ];
// v2/lib/src/components/Checkbox/core/_Checkbox.ts (Part 2 of 3)

  @property({ type: String })
  declare value: string;

  @property({ type: Boolean, reflect: true })
  declare checked: boolean;

  @property({ type: Boolean, reflect: true })
  declare indeterminate: boolean;

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @property({ type: String })
  declare size: CheckboxSize;

  @property({ type: String })
  declare theme: CheckboxTheme;

  @property({ type: String })
  declare labelText: string;

  @property({ type: String })
  declare labelPosition: 'end' | 'start';

  // Validation & hints
  @property({ type: Boolean, reflect: true })
  declare required: boolean;

  @property({ type: Boolean, reflect: true })
  declare invalid: boolean;

  @property({ type: String, attribute: 'error-message' })
  declare errorMessage: string;

  @property({ type: String, attribute: 'help-text' })
  declare helpText: string;

  // Event callbacks
  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onChange?: (event: CheckboxChangeEvent) => void;

  // Stable IDs for form control elements (created once)
  private _ids = createFormControlIds('ag-checkbox');

  private inputRef?: HTMLInputElement;

  constructor() {
    super();
    this.value = '';
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
    this.size = 'medium';
    this.theme = 'primary';
    this.labelText = '';
    this.labelPosition = 'end';
    this.required = false;
    this.invalid = false;
    this.errorMessage = '';
    this.helpText = '';
  }

  /**
   * Expose the internal focusable element for FormControl ARIA wiring
   */
  get controlElement(): HTMLElement | null {
    return this.inputRef || null;
  }

  // ─── FACE ─────────────────────────────────────────────────────────────────

  /**
   * FACE lifecycle: called when the parent form is reset.
   * Restores checked and indeterminate to their default states.
   */
  override formResetCallback(): void {
    this.checked = false;
    this.indeterminate = false;
    this._internals.setFormValue(null);
    this._internals.setValidity({});
    this._syncStates();
  }

  /**
   * FACE lifecycle: called on session restore or browser autofill.
   * Restores checked state from the previously saved form value.
   * A non-null state means the checkbox was checked; null means unchecked.
   */
  override formStateRestoreCallback(
    state: File | string | FormData | null,
    _mode: 'restore' | 'autocomplete'
  ): void {
    this.checked = state !== null;
    this.indeterminate = false;
    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
    this._syncStates();
  }

  /**
   * Sync validity to ElementInternals by delegating to the inner
   * <input type="checkbox">. Required validation is handled natively
   * by the inner input; we just mirror its state.
   */
  private _syncValidity(): void {
    syncInnerInputValidity(this._internals, this.inputRef);
  }

  /**
   * Sync CustomStateSet states so :state() pseudo-classes work from external CSS.
   *
   * Must be called AFTER _syncValidity() so that :state(invalid) reads the
   * freshly-updated _internals.validity.valid value.
   *
   * Exposed states:
   *  :state(checked)       — checkbox is checked
   *  :state(indeterminate) — checkbox is in indeterminate state
   *  :state(disabled)      — checkbox is disabled
   *  :state(required)      — checkbox is required
   *  :state(invalid)       — FACE constraint validation is failing
   */
  private _syncStates(): void {
    this._setState('checked', this.checked);
    this._setState('indeterminate', this.indeterminate);
    this._setState('disabled', this.disabled);
    this._setState('required', this.required);
    this._setState('invalid', !this._internals.validity.valid);
  }

  // ─── End FACE ─────────────────────────────────────────────────────────────

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // Sync indeterminate state to native input
    if (changedProperties.has('indeterminate') && this.inputRef) {
      this.inputRef.indeterminate = this.indeterminate;
    }

    // FACE: sync form value and validity for programmatic changes to checked/indeterminate
    if (changedProperties.has('checked') || changedProperties.has('indeterminate')) {
      this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
      this._syncValidity();
      this._syncStates();
    }
  }

  // v2/lib/src/components/Checkbox/core/_Checkbox.ts (Part 3 of 3)

  private handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    // Invoke native click callback if provided
    if (this.onClick) {
      this.onClick(e);
    }
  }

  private handleChange(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }

    const input = e.target as HTMLInputElement;
    this.checked = input.checked;

    // When user clicks, clear indeterminate state
    if (this.indeterminate) {
      this.indeterminate = false;
    }

    // FACE: sync form value and validity on user interaction
    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
    this._syncStates();

    // Dispatch custom change event with dual-dispatch pattern
    const changeEvent = new CustomEvent<CheckboxChangeEventDetail>('change', {
      detail: {
        checked: this.checked,
        value: this.value,
        name: this.name,
        indeterminate: this.indeterminate,
      },
      bubbles: true,
      composed: true,
    });

    // Dual-dispatch: DOM event first
    this.dispatchEvent(changeEvent);

    // Then invoke callback if provided
    if (this.onChange) {
      this.onChange(changeEvent);
    }
  }

  /**
   * Render helper text
   */
  private _renderHelper() {
    if (!this.helpText) return nothing;

    return html`
      <div
        id="${this._ids.helperId}"
        class="ag-form-control__helper ag-checkbox__helper"
        part="ag-checkbox-helper"
      >
        ${this.helpText}
      </div>
    `;
  }

  /**
   * Render error text
   */
  private _renderError() {
    if (!this.invalid || !this.errorMessage) return nothing;

    return html`
      <div
        id="${this._ids.errorId}"
        class="ag-form-control__error ag-checkbox__error"
        part="ag-checkbox-error"
      >
        ${this.errorMessage}
      </div>
    `;
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

  override render() {
    const wrapperClasses = [
      'checkbox-wrapper',
      this.labelPosition === 'start' ? styles.checkboxWrapperLabelStart : '',
      this.labelPosition === 'start' ? 'checkbox-wrapper--label-start' : ''
    ].filter(Boolean).join(' ').trim();

    const labelClasses = [
      'checkbox-label',
      styles.checkboxLabel,
      styles[`checkbox-label${this.size.charAt(0).toUpperCase() + this.size.slice(1)}`],
      styles[`checkbox-label${this.theme.charAt(0).toUpperCase() + this.theme.slice(1)}`],
      `checkbox-label--${this.size}`,
      `checkbox-label--${this.theme}`
    ].filter(Boolean).join(' ').trim();

    const labelCopyClasses = [
      'checkbox-label-copy',
      styles.checkboxLabelCopy,
      styles[`checkbox-labelCopy${this.size.charAt(0).toUpperCase() + this.size.slice(1)}`],
      `checkbox-label-copy--${this.size}`
    ].filter(Boolean).join(' ').trim();

    // Build aria-describedby
    const describedBy = this._getAriaDescribedBy();

    // Main structure wraps everything with both CSS Modules and fallback literal compatibility
    return html`
      <div class="${styles.agCheckboxContainer} ag-checkbox-container">
        <label 
          for="${this._ids.inputId}"
          class="${wrapperClasses}" 
          part="ag-checkbox-wrapper"
        >
          <input
            type="checkbox"
            id="${this._ids.inputId}"
            class="${styles.checkboxInput} checkbox-input"
            part="ag-checkbox-input"
            .name=${this.name}
            .value=${this.value}
            .checked=${this.checked}
            .indeterminate=${this.indeterminate}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-label="${this.labelText || 'Checkbox'}"
            aria-required="${this.required ? 'true' : 'false'}"
            aria-invalid="${this.invalid ? 'true' : 'false'}"
            aria-describedby="${describedBy || nothing}"
            aria-checked=${this.indeterminate
              ? 'mixed'
              : this.checked
              ? 'true'
              : 'false'}
            @click=${this.handleClick}
            @change=${this.handleChange}
          />
          <span
            class="${labelClasses}"
            part="ag-checkbox-indicator"
            aria-hidden="true"
          ></span>
          <span class="${labelCopyClasses}" part="ag-checkbox-label">
            ${this.labelText || html`<slot></slot>`}
            ${this.required
              ? html`<span class="ag-form-control__required" aria-label="required">*</span>`
              : nothing}
          </span>
        </label>
        ${this._renderHelper()}
        ${this._renderError()}
      </div>
    `;
  }

  override firstUpdated() {
    this.inputRef = this.shadowRoot?.querySelector(
      '.checkbox-input'
    ) as HTMLInputElement;
    if (this.inputRef && this.indeterminate) {
      this.inputRef.indeterminate = this.indeterminate;
    }

    // FACE: set initial form value and sync validity after first render
    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
    this._syncStates();
  }
}
