// v2/lib/src/components/Checkbox/core/_Checkbox.ts
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

export interface CheckboxChangeEventDetail {
  checked: boolean;
  value: string;
  name: string;
  indeterminate: boolean;
}

export type CheckboxChangeEvent = CustomEvent<CheckboxChangeEventDetail>;

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
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  onClick?: (event: MouseEvent) => void;
  onChange?: (event: CheckboxChangeEvent) => void;
}

export class AgCheckbox extends FaceMixin(LitElement) implements CheckboxProps {
  static override styles = [
    formControlStyles,
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      /* Satisfies the custom spec suite attribute checks for issue tracking components */
      :host([disabled]) {
        pointer-events: none;
      }

      /* Scope validation boundaries cleanly against the immutable part anchor to survive the pivot */
      :host([invalid]) [part="ag-checkbox-indicator"]::before {
        border-color: var(--ag-error-border, var(--ag-error-text)) !important;
      }

      .checkbox-wrapper {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        gap: 0;
      }

      .checkbox-wrapper--label-start {
        flex-direction: row-reverse;
      }

      .checkbox-input {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
        margin: 0;
        padding: 0;
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
      }

      .checkbox-label {
        position: relative;
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
      }

      /* The box container geometry bounds */
      .checkbox-label::before {
        content: '';
        display: inline-block;
        flex-shrink: 0;
        margin-inline-end: var(--ag-space-3);
        border-radius: var(--ag-radius-sm);
        transition: all var(--ag-motion-fast) ease-in-out;
      }

      /* The visual checkmark layout vectors */
      .checkbox-label::after {
        content: '';
        position: absolute;
        display: block;
        opacity: 0;
        transform: rotate(40deg) scale(0);
        transform-origin: center center;
        transition: all var(--ag-motion-fast) ease-in-out;
      }

      /* Sizing Variant Matrices */
      .checkbox-label--small::before { width: 14px; height: 14px; }
      .checkbox-label--small::after {
        inset-inline-start: 4px;
        top: 0px;
        width: 4px;
        height: 8px;
        border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
        border-bottom: var(--ag-border-width-2) solid var(--ag-white);
      }

      .checkbox-label--medium::before { width: 16px; height: 16px; }
      .checkbox-label--medium::after {
        inset-inline-start: 5px;
        top: 1px;
        width: 4px;
        height: 9px;
        border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
        border-bottom: var(--ag-border-width-2) solid var(--ag-white);
      }

      .checkbox-label--large::before { width: 18px; height: 18px; }
      .checkbox-label--large::after {
        inset-inline-start: 6px;
        top: 1px;
        width: 5px;
        height: 10px;
        border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
        border-bottom: var(--ag-border-width-2) solid var(--ag-white);
      }

      /* 
        CRITICAL ARCHITECTURAL REFACTOR:
        Target primitive element tag selectors instead of hardcoded literal classes 
        to circumvent dynamic bundler token hashing inside the Shadow DOM boundary.
      */
      input[type="checkbox"]:focus + .checkbox-label::before {
        box-shadow: 0 0 0 var(--ag-focus-width) rgba(var(--ag-focus), 0.5);
        outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
        outline-offset: var(--ag-focus-offset);
      }

      input[type="checkbox"]:indeterminate + .checkbox-label::after {
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

      input[type="checkbox"]:checked + .checkbox-label::after {
        opacity: 1;
        transform: rotate(40deg) scale(1) translate(2px);
      }

      /* Tonal palette theme modifiers securely mapped against primitive tokens */
      .checkbox-label--default::before { border: var(--ag-border-width-2) solid var(--ag-primary-border); background: var(--ag-white); }
      input[type="checkbox"]:checked + .checkbox-label--default::before,
      input[type="checkbox"]:indeterminate + .checkbox-label--default::before { background: var(--ag-primary); border-color: var(--ag-primary); }

      .checkbox-label--primary::before { border: var(--ag-border-width-2) solid var(--ag-primary-border); background: var(--ag-white); }
      input[type="checkbox"]:checked + .checkbox-label--primary::before,
      input[type="checkbox"]:indeterminate + .checkbox-label--primary::before { background: var(--ag-primary); border-color: var(--ag-primary); }

      .checkbox-label--success::before { border: var(--ag-border-width-2) solid var(--ag-border); background: var(--ag-white); }
      input[type="checkbox"]:checked + .checkbox-label--success::before,
      input[type="checkbox"]:indeterminate + .checkbox-label--success::before { background: var(--ag-success); border-color: var(--ag-success); }

      .checkbox-label--monochrome::before { border: var(--ag-border-width-2) solid var(--ag-black); background: var(--ag-white); }
      input[type="checkbox"]:checked + .checkbox-label--monochrome::before,
      input[type="checkbox"]:indeterminate + .checkbox-label--monochrome::before { background: var(--ag-black); border-color: var(--ag-black); }

      .checkbox-label-copy { display: inline-block; }
      .checkbox-label-copy--small { font-size: var(--ag-font-size-sm); }
      .checkbox-label-copy--medium { font-size: var(--ag-font-size-sm); }
      .checkbox-label-copy--large { font-size: var(--ag-font-size-base); }

      @media (prefers-reduced-motion: reduce) {
        [part="ag-checkbox-indicator"], 
        [part="ag-checkbox-indicator"]::before, 
        [part="ag-checkbox-indicator"]::after { 
          transition: none; 
        }
      }

      @media (prefers-contrast: high) {
        [part="ag-checkbox-indicator"]::before { outline: var(--ag-border-width-1) solid; }
      }
    `,
  ];

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

  @property({ type: Boolean, reflect: true })
  declare required: boolean;

  @property({ type: Boolean, reflect: true })
  declare invalid: boolean;

  @property({ type: String, attribute: 'error-message' })
  declare errorMessage: string;

  @property({ type: String, attribute: 'help-text' })
  declare helpText: string;

  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onChange?: (event: CheckboxChangeEvent) => void;

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

  get controlElement(): HTMLElement | null {
    return this.inputRef || null;
  }

  override formResetCallback(): void {
    this.checked = false;
    this.indeterminate = false;
    this._internals.setFormValue(null);
    this._internals.setValidity({});
    this._syncStates();
  }

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

    if (changedProperties.has('indeterminate') && this.inputRef) {
      this.inputRef.indeterminate = this.indeterminate;
    }

    if (changedProperties.has('checked') || changedProperties.has('indeterminate')) {
      // Safely intercept non-boolean attribute primitives without generating linter exceptions
      if (typeof (this.checked as unknown) === 'string') {
        this.checked = (this.checked as unknown) === 'true' || (this.checked as unknown) === '';
      }
      this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
      this._syncValidity();
      this._syncStates();
    }
  }


  private handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
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

    if (this.indeterminate) {
      this.indeterminate = false;
    }

    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
    this._syncStates();

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

    this.dispatchEvent(changeEvent);

    if (this.onChange) {
      this.onChange(changeEvent);
    }
  }

  private _renderHelper() {
    if (!this.helpText) return nothing;
    return html`
      <div id="${this._ids.helperId}" class="ag-form-control__helper ag-checkbox__helper" part="ag-checkbox-helper">
        ${this.helpText}
      </div>
    `;
  }

  private _renderError() {
    if (!this.invalid || !this.errorMessage) return nothing;
    return html`
      <div id="${this._ids.errorId}" class="ag-form-control__error ag-checkbox__error" part="ag-checkbox-error">
        ${this.errorMessage}
      </div>
    `;
  }

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
      styles.checkboxWrapper, 
      this.labelPosition === 'start' ? styles.checkboxWrapperLabelStart : '',
      this.labelPosition === 'start' ? 'checkbox-wrapper--label-start' : ''
    ].filter(Boolean).join(' ').trim();

    const sizeCapitalized = this.size.charAt(0).toUpperCase() + this.size.slice(1);
    const themeCapitalized = this.theme.charAt(0).toUpperCase() + this.theme.slice(1);

    const sizeKey = `checkboxLabel${sizeCapitalized}`;   
    const themeKey = `checkboxLabel${themeCapitalized}`; 
    const copyKey = `checkboxLabelCopy${sizeCapitalized}`; 

    const labelClasses = [
      'checkbox-label',
      styles.checkboxLabel,
      styles[sizeKey],
      styles[themeKey],
      `checkbox-label--${this.size}`,
      `checkbox-label--${this.theme}`
    ].filter(Boolean).join(' ').trim();

    const labelCopyClasses = [
      'checkbox-label-copy',
      styles.checkboxLabelCopy,
      styles[copyKey],
      `checkbox-label-copy--${this.size}`
    ].filter(Boolean).join(' ').trim();

    const describedBy = this._getAriaDescribedBy();

    return html`
      <div class="${styles.agCheckboxContainer} ag-checkbox-container">
        <label for="${this._ids.inputId}" class="${wrapperClasses}" part="ag-checkbox-wrapper">
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
            aria-checked=${this.indeterminate ? 'mixed' : this.checked ? 'true' : 'false'}
            @click=${this.handleClick}
            @change=${this.handleChange}
          />
          <span class="${labelClasses}" part="ag-checkbox-indicator" aria-hidden="true"></span>
          <span class="${labelCopyClasses}" part="ag-checkbox-label">
            ${this.labelText || html`<slot></slot>`}
            ${this.required ? html`<span class="ag-form-control__required" aria-label="required">*</span>` : nothing}
          </span>
        </label>
        ${this._renderHelper()}
        ${this._renderError()}
      </div>
    `;
  }

  override firstUpdated() {
    this.inputRef = this.shadowRoot?.querySelector('.checkbox-input') as HTMLInputElement;
    if (this.inputRef && this.indeterminate) {
      this.inputRef.indeterminate = this.indeterminate;
    }
    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
    this._syncStates();
  }
}
