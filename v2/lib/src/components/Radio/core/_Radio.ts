import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { unsafeCSS } from 'lit';
import { formControlStyles } from '../../../shared/form-control-styles';
import { createFormControlIds, buildAriaDescribedBy } from '../../../shared/form-control-utils';
import { FaceMixin } from '../../../shared/face-mixin';
import styles from './radio-structure.module.css';
import structuralStylesText from './radio-structure.module.css?inline';

export type RadioSize = 'small' | 'medium' | 'large';
export type RadioTheme = 'default' | 'primary' | 'success' | 'monochrome';

export interface RadioChangeEventDetail {
  checked: boolean;
  value: string;
  name: string;
}

export type RadioChangeEvent = CustomEvent<RadioChangeEventDetail>;

export interface RadioProps {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: RadioSize;
  theme?: RadioTheme;
  labelText?: string;
  labelPosition?: 'end' | 'start';
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  onClick?: (event: MouseEvent) => void;
  onChange?: (event: RadioChangeEvent) => void;
}

export class AgRadio extends FaceMixin(LitElement) implements RadioProps {
  static override styles = [
    formControlStyles,
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      /* Reactive skin configurations outside structural geometry sheet */
      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.6;
      }
      
      /* FIX: Scope invalid boundaries cleanly against the immutable part anchor */
      :host([invalid]) [part="ag-radio-indicator"] {
        border-color: var(--ag-error-border, var(--ag-error-text)) !important;
      }

      /* Baseline unselected skin states tied to primitive element adjacent matching */
      input[type="radio"] + .radio-indicator--default {
        border: var(--ag-border-width-2) solid var(--ag-primary-border);
        background: var(--ag-white);
        box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
      }
      input[type="radio"] + .radio-indicator--primary {
        border: var(--ag-border-width-2) solid var(--ag-primary-border);
        background: var(--ag-white);
        box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
      }
      input[type="radio"] + .radio-indicator--success {
        border: var(--ag-border-width-2) solid var(--ag-border);
        background: var(--ag-white);
        box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
      }
      input[type="radio"] + .radio-indicator--monochrome {
        border: var(--ag-border-width-2) solid var(--ag-black);
        background: var(--ag-white);
        box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
      }

      /* Focused interaction states */
      input[type="radio"]:focus + .radio-indicator--default {
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-primary-border),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
      }
      input[type="radio"]:focus + .radio-indicator--primary {
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-primary-border),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
      }
      input[type="radio"]:focus + .radio-indicator--success {
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-border),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
      }
      input[type="radio"]:focus + .radio-indicator--monochrome {
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-black),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
      }

      /* Active checked states - fills the inner visual circle wrapper safely */
      input[type="radio"]:checked + .radio-indicator--default {
        background: var(--ag-primary);
        border-color: var(--ag-primary);
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
      }
      input[type="radio"]:checked + .radio-indicator--primary {
        background: var(--ag-primary);
        border-color: var(--ag-primary);
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
      }
      input[type="radio"]:checked + .radio-indicator--success {
        background: var(--ag-success);
        border-color: var(--ag-success);
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
      }
      input[type="radio"]:checked + .radio-indicator--monochrome {
        background: var(--ag-black);
        border-color: var(--ag-black);
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
      }

      /* Active checked + focused interaction overrides */
      input[type="radio"]:checked:focus + .radio-indicator--default {
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
      }
      input[type="radio"]:checked:focus + .radio-indicator--primary {
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
      }
      input[type="radio"]:checked:focus + .radio-indicator--success {
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
      }
      input[type="radio"]:checked:focus + .radio-indicator--monochrome {
        box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                    0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
      }

      @media (prefers-reduced-motion: reduce) {
        [part="ag-radio-indicator"] { transition: none; }
      }

      @media (prefers-contrast: high) {
        [part="ag-radio-indicator"] { outline: var(--ag-border-width-1) solid; }
      }
    `,
  ];



  @property({ type: String, reflect: true }) value = '';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) size: RadioSize = 'medium';
  @property({ type: String }) theme: RadioTheme = 'primary';
  @property({ type: String }) labelText = '';
  @property({ type: String }) labelPosition: 'end' | 'start' = 'end';
  @property({ type: String }) label = '';
  @property({ type: Boolean, attribute: 'label-hidden' }) labelHidden = false;
  @property({ type: Boolean, attribute: 'no-label' }) noLabel = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) invalid = false;
  @property({ type: String, attribute: 'error-message' }) errorMessage = '';
  @property({ type: String, attribute: 'help-text' }) helpText = '';

  private _ids = createFormControlIds('ag-radio');
  private inputRef?: HTMLInputElement;

  @property({ attribute: false }) onClick?: (event: MouseEvent) => void;
  @property({ attribute: false }) onChange?: (event: RadioChangeEvent) => void;

  private _syncFormValue(): void {
    this._internals.setFormValue(this.checked ? this.value : null);
  }

  private _isGroupChecked(): boolean {
    if (this.checked) return true;
    const root = this.getRootNode() as Document | ShadowRoot;
    return Array.from(root.querySelectorAll(`ag-radio[name="${this.name}"]`)).some(
      (el) => (el as AgRadio).checked
    );
  }

  private _syncValidity(): void {
    if (!this.required) {
      this._internals.setValidity({});
      return;
    }
    if (this._isGroupChecked()) {
      this._internals.setValidity({});
    } else {
      this._internals.setValidity({ valueMissing: true }, 'Please select one of these options.');
    }
  }

  override formResetCallback(): void {
    this.checked = false;
    this._internals.setFormValue(null);
    this._internals.setValidity({});
    this._syncStates();
  }

  override formStateRestoreCallback(
    state: File | string | FormData | null,
    _mode: 'restore' | 'autocomplete'
  ): void {
    this.checked = state === this.value;
    this._syncFormValue();
    this._syncValidity();
    this._syncStates();
  }

  private _syncStates(): void {
    this._setState('checked', this.checked);
    this._setState('disabled', this.disabled);
    this._setState('required', this.required);
    this._setState('invalid', !this._internals.validity.valid);
  }

  override firstUpdated() {
    this.inputRef = this.shadowRoot?.querySelector(`.${styles.radioInput}`) as HTMLInputElement;

    // FACE: set initial form value and sync validity after first render
    this._syncFormValue();
    this._syncValidity();
    this._syncStates();
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // FACE: sync form value and validity for programmatic changes to checked.
    // This fires when uncheckOtherRadiosInGroup() sets sibling.checked = false,
    // so group FACE state stays synchronized without any explicit coordination.
    if (changedProperties.has('checked')) {
      this._syncFormValue();
      this._syncValidity();
      this._syncStates();
    }
  }

  private handleClick(e: MouseEvent) {
    if (this.onClick) {
      this.onClick(e);
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
      return;
    }
    e.preventDefault();
    const radios = this.getRadiosInGroup();
    if (radios.length === 0) return;

    const currentIndex = radios.indexOf(this);
    if (currentIndex === -1) return;

    let nextIndex: number;
    if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = radios.length - 1;
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % radios.length;
    } else {
      nextIndex = (currentIndex - 1 + radios.length) % radios.length;
    }

    const nextRadio = radios[nextIndex];
    if (nextRadio && !nextRadio.disabled) {
      const nextInput = nextRadio.shadowRoot?.querySelector(`.${styles.radioInput}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
        nextRadio.checked = true;
        nextRadio.uncheckOtherRadiosInGroup();

        const changeEvent = new CustomEvent<RadioChangeEventDetail>('change', {
          detail: { checked: true, value: nextRadio.value, name: nextRadio.name },
          bubbles: true,
          composed: true,
        });
        nextRadio.dispatchEvent(changeEvent);
        if (nextRadio.onChange) {
          nextRadio.onChange(changeEvent as RadioChangeEvent);
        }
      }
    }
  }

  private getRadiosInGroup(): AgRadio[] {
    if (!this.name) return [];
    const root = this.getRootNode() as Document | ShadowRoot;
    const allRadios = root.querySelectorAll(`ag-radio[name="${this.name}"]`);
    return Array.from(allRadios).filter((radio): radio is AgRadio => {
      return radio instanceof AgRadio && !radio.disabled;
    });
  }

  private handleChange(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    const input = e.target as HTMLInputElement;
    const wasChecked = this.checked;
    this.checked = input.checked;

    this._syncFormValue();
    this._syncValidity();
    this._syncStates();

    if (this.checked && !wasChecked && this.name) {
      this.uncheckOtherRadiosInGroup();
    }

    const changeEvent = new CustomEvent<RadioChangeEventDetail>('change', {
      detail: { checked: this.checked, value: this.value, name: this.name },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(changeEvent);
    if (this.onChange) {
      this.onChange(changeEvent as RadioChangeEvent);
    }
  }

  private uncheckOtherRadiosInGroup() {
    const root = this.getRootNode() as Document | ShadowRoot;
    const allRadios = root.querySelectorAll(`ag-radio[name="${this.name}"]`);
    allRadios.forEach((radio) => {
      if (radio !== this && radio instanceof AgRadio) {
        radio.checked = false;
        radio._syncValidity();
        radio._syncStates();
      }
    });
  }


  private _renderExternalLabel() {
    if (!this.label || this.noLabel) return nothing;
    return html`
      <label
        id="${this._ids.labelId}"
        for="${this._ids.inputId}"
        class="ag-form-control__label ag-radio__external-label ${this.labelHidden ? 'ag-form-control__label--hidden' : ''}"
        part="ag-radio-external-label"
      >
        ${this.label}
        ${this.required ? html`<span class="ag-form-control__required" part="ag-required" aria-hidden="true">*</span>` : nothing}
      </label>
    `;
  }

  private _renderHelper() {
    if (!this.helpText) return nothing;
    return html`
      <div id="${this._ids.helperId}" class="ag-form-control__helper ag-radio__helper" part="ag-radio-helper">
        ${this.helpText}
      </div>
    `;
  }

  private _renderError() {
    return html`
      <div id="${this._ids.errorId}" class="ag-form-control__error ag-radio__error" part="ag-radio-error" ?hidden="${!this.invalid || !this.errorMessage}">
        ${this.errorMessage || ''}
      </div>
    `;
  }

  override render() {
    const wrapperClasses = `
      ${styles.radioWrapper}
      ${this.labelPosition === 'start' ? styles.radioWrapperLabelStart : ''}
    `;

    const sizeClass = this.size === 'small' ? styles.radioIndicatorSmall : this.size === 'large' ? styles.radioIndicatorLarge : styles.radioIndicatorMedium;
    const indicatorClasses = `
      ${styles.radioIndicator}
      ${sizeClass}
      radio-indicator--${this.theme}
    `;

    const labelSizeClass = this.size === 'small' ? styles.radioLabelSmall : this.size === 'large' ? styles.radioLabelLarge : styles.radioLabelMedium;
    const labelClasses = `
      ${styles.radioLabel}
      ${labelSizeClass}
    `;

    const describedBy = this._getAriaDescribedBy();

    const radioControl = html`
      <label class=${wrapperClasses.trim()} part="ag-radio-wrapper">
        <input
          type="radio"
          id="${this._ids.inputId}"
          class="${styles.radioInput}"
          part="ag-radio-input"
          name=${this.name}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-required="${this.required ? 'true' : 'false'}"
          aria-invalid="${this.invalid ? 'true' : 'false'}"
          aria-describedby="${describedBy || nothing}"
          @click=${this.handleClick}
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
          aria-checked=${this.checked ? 'true' : 'false'}
        />
        <span class=${indicatorClasses.trim()} part="ag-radio-indicator"></span>
        <span class=${labelClasses.trim()} part="ag-radio-label">
          ${this.labelText ? this.labelText : html`<slot></slot>`}
        </span>
      </label>
    `;

    if (this.label || this.helpText || this.errorMessage) {
      return html`
        <div class="${styles.radioWrapperWithExternal}">
          ${this._renderExternalLabel()}
          ${radioControl}
          ${this._renderHelper()}
          ${this._renderError()}
        </div>
      `;
    }
    return radioControl;
  }

  private _getAriaDescribedBy(): string | undefined {
    return buildAriaDescribedBy({
      helperId: this._ids.helperId,
      errorId: this._ids.errorId,
      hasHelper: !!this.helpText,
      hasError: this.invalid && !!this.errorMessage,
    });
  }
}
