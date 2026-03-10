import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { formControlStyles } from '../../../shared/form-control-styles';
import {
  createFormControlIds,
  buildAriaDescribedBy,
} from '../../../shared/form-control-utils';
import { FaceMixin } from '../../../shared/face-mixin';


export type RadioSize = 'small' | 'medium' | 'large';
export type RadioTheme = 'default' | 'primary' | 'success' | 'monochrome';

// Event type definitions
export interface RadioChangeEventDetail {
  checked: boolean;
  value: string;
  name: string;
}

export type RadioChangeEvent = CustomEvent<RadioChangeEventDetail>;

/**
 * @csspart ag-radio-wrapper - The outer wrapper label element
 * @csspart ag-radio-input - The native radio input element
 * @csspart ag-radio-indicator - The custom visual radio indicator
 * @csspart ag-radio-label - The label text span
 */
export interface RadioProps {
  /**
   * Name attribute for the radio input (required for grouping)
   */
  name?: string;
  /**
   * Value of the radio input
   */
  value?: string;
  /**
   * Whether the radio is checked
   */
  checked?: boolean;
  /**
   * Whether the radio is disabled
   */
  disabled?: boolean;
  /**
   * Size of the radio button
   */
  size?: RadioSize;
  /**
   * Color theme variant
   */
  theme?: RadioTheme;
  /**
   * Label text for the radio button (internal label that wraps the radio)
   */
  labelText?: string;
  /**
   * Position of labelText relative to radio (end = after radio, start = before radio)
   */
  labelPosition?: 'end' | 'start';
  /**
   * Optional external label displayed above the radio (useful for groups or standalone with context)
   */
  label?: string;
  /**
   * Visually hides the external label while keeping it accessible to screen readers
   */
  labelHidden?: boolean;
  /**
   * Completely removes the external label element
   */
  noLabel?: boolean;
  /**
   * Marks the radio as required. Displays an asterisk (*) after the external label
   */
  required?: boolean;
  /**
   * Marks the radio as invalid. Sets aria-invalid and can display error message
   */
  invalid?: boolean;
  /**
   * Error message displayed when invalid. Linked via aria-describedby
   */
  errorMessage?: string;
  /**
   * Helper text displayed below the radio. Linked via aria-describedby
   */
  helpText?: string;
  /**
   * Callback for native click events
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * Callback for change events (fired when radio selection changes)
   */
  onChange?: (event: RadioChangeEvent) => void;
}

export class AgRadio extends FaceMixin(LitElement) implements RadioProps {
  static override styles = [
    formControlStyles,
    css`
      :host {
        display: inline-block;
      }

    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      gap: var(--ag-space-3);
    }

    :host([disabled]) .radio-wrapper {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .radio-wrapper--label-start {
      flex-direction: row-reverse;
    }

    .radio-input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      margin: 0;
      padding: 0;
    }

    .radio-indicator {
      position: relative;
      display: inline-block;
      flex-shrink: 0;
      border-radius: var(--ag-radius-full);
      transition: all var(--ag-motion-fast) ease-in-out;
    }

    /* Size variants */
    .radio-indicator--small {
      width: 12px;
      height: 12px;
    }

    .radio-indicator--medium {
      width: 14px;
      height: 14px;
    }

    .radio-indicator--large {
      width: 16px;
      height: 16px;
    }

    /* Default theme - alias to primary */
    .radio-indicator--default {
      border: var(--ag-border-width-2) solid var(--ag-primary-border);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--default {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--default {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-primary-border),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-input:checked:focus + .radio-indicator--default {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    /* Primary theme */
    .radio-indicator--primary {
      border: var(--ag-border-width-2) solid var(--ag-primary-border);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--primary {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--primary {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-primary-border),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-input:checked:focus + .radio-indicator--primary {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    /* Success theme - green */
    .radio-indicator--success {
      border: var(--ag-border-width-2) solid var(--ag-border);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--success {
      background: var(--ag-success);
      border-color: var(--ag-success);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--success {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-border),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-input:checked:focus + .radio-indicator--success {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    /* Monochrome theme */
    .radio-indicator--monochrome {
      border: var(--ag-border-width-2) solid var(--ag-black);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--monochrome {
      background: var(--ag-black);
      border-color: var(--ag-black);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--monochrome {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-black),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-input:checked:focus + .radio-indicator--monochrome {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-label {
      display: inline-block;
    }

    .radio-label--small {
      font-size: 0.875rem;
    }

    .radio-label--medium {
      font-size: 1rem;
    }

    .radio-label--large {
      font-size: 1.125rem;
    }

    /* Respect reduced motion preferences */
    @media (prefers-reduced-motion: reduce) {
      .radio-indicator {
        transition: none;
      }
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .radio-indicator {
        outline: var(--ag-border-width-1) solid;
      }
    }
  `,
  ];

  @property({ type: String, reflect: true })
  value = '';

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  size: RadioSize = 'medium';

  @property({ type: String })
  theme: RadioTheme = 'primary';

  @property({ type: String })
  labelText = '';

  @property({ type: String })
  labelPosition: 'end' | 'start' = 'end';

  // Optional external label (for groups or above radio)
  @property({ type: String })
  label = '';

  @property({ type: Boolean, attribute: 'label-hidden' })
  labelHidden = false;

  @property({ type: Boolean, attribute: 'no-label' })
  noLabel = false;

  // Validation & hints
  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: String, attribute: 'error-message' })
  errorMessage = '';

  @property({ type: String, attribute: 'help-text' })
  helpText = '';

  // Stable IDs for form control elements (created once)
  private _ids = createFormControlIds('ag-radio');

  private inputRef?: HTMLInputElement;

  // Event callback props
  @property({ attribute: false })
  onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  onChange?: (event: RadioChangeEvent) => void;

  // ─── FACE ─────────────────────────────────────────────────────────────────

  /**
   * Sync the form value to ElementInternals.
   * Submits this radio's value when checked, or null when unchecked.
   * Each radio in the group reports independently; only the checked one
   * contributes a value, matching native radio behavior.
   */
  private _syncFormValue(): void {
    this._internals.setFormValue(this.checked ? this.value : null);
  }

  /**
   * Returns true if any ag-radio in this named group is checked.
   * Uses the same DOM-traversal logic as uncheckOtherRadiosInGroup so it
   * works whether the radios are in the document or nested inside a shadow root.
   */
  private _isGroupChecked(): boolean {
    if (this.checked) return true;
    // Query from the immediate root node. If the radios live inside a shadow root
    // (e.g. a Lit host component), getRootNode() returns that shadow root and
    // querySelectorAll can reach them. If they're in the document's light DOM
    // (React/Vue), getRootNode() returns the document. Traversing all the way up
    // to document would bypass shadow roots and miss the siblings.
    const root = this.getRootNode() as Document | ShadowRoot;
    return Array.from(root.querySelectorAll(`ag-radio[name="${this.name}"]`)).some(
      (el) => (el as AgRadio).checked
    );
  }

  /**
   * Sync validity to ElementInternals.
   *
   * Shadow DOM isolation prevents the inner <input type="radio"> from seeing
   * sibling ag-radio elements in separate shadow trees, so native delegation
   * would report each unchecked required radio as invalid individually.
   * Instead we query the DOM directly: a required radio group is valid when
   * ANY radio with the same name is checked.
   */
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

  /**
   * FACE lifecycle: called when the parent form is reset.
   * Restores checked to false and clears the form value.
   */
  override formResetCallback(): void {
    this.checked = false;
    this._internals.setFormValue(null);
    this._internals.setValidity({});
    this._syncStates();
  }

  /**
   * Sync CustomStateSet states so :state() pseudo-classes work from external CSS.
   *
   * Must be called AFTER _syncValidity() so that :state(invalid) reads the
   * freshly-updated _internals.validity.valid value.
   *
   * Exposed states:
   *  :state(checked)  — this radio is selected
   *  :state(disabled) — radio is disabled
   *  :state(required) — radio is required
   *  :state(invalid)  — FACE constraint validation is failing
   */
  private _syncStates(): void {
    this._setState('checked', this.checked);
    this._setState('disabled', this.disabled);
    this._setState('required', this.required);
    this._setState('invalid', !this._internals.validity.valid);
  }

  // ─── End FACE ─────────────────────────────────────────────────────────────

  override firstUpdated() {
    this.inputRef = this.shadowRoot?.querySelector('.radio-input') as HTMLInputElement;

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
    // Only handle arrow keys, Home, and End for keyboard navigation within radio groups
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
      return;
    }

    e.preventDefault(); // Prevent page scroll

    const radios = this.getRadiosInGroup();
    if (radios.length === 0) return;

    const currentIndex = radios.indexOf(this);
    if (currentIndex === -1) return;

    let nextIndex: number;

    // Handle different key types
    if (e.key === 'Home') {
      // Go to first radio
      nextIndex = 0;
    } else if (e.key === 'End') {
      // Go to last radio
      nextIndex = radios.length - 1;
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      // Move forward (wrap to beginning)
      nextIndex = (currentIndex + 1) % radios.length;
    } else {
      // ArrowUp or ArrowLeft: Move backward (wrap to end)
      nextIndex = (currentIndex - 1 + radios.length) % radios.length;
    }

    // Focus and check the next radio
    const nextRadio = radios[nextIndex];
    if (nextRadio && !nextRadio.disabled) {
      // Find the input element in the next radio's shadow DOM
      const nextInput = nextRadio.shadowRoot?.querySelector('.radio-input') as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
        // Programmatically check the radio by setting checked and dispatching change
        nextRadio.checked = true;
        nextRadio.uncheckOtherRadiosInGroup();

        // Dispatch change event
        const changeEvent = new CustomEvent<RadioChangeEventDetail>(
          'change',
          {
            detail: {
              checked: true,
              value: nextRadio.value,
              name: nextRadio.name,
            },
            bubbles: true,
            composed: true,
          }
        );
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

    // FACE: sync form value and validity on user interaction
    this._syncFormValue();
    this._syncValidity();
    this._syncStates();

    // Radio group coordination: When this radio is checked, uncheck all other radios with the same name
    // This is necessary because native radios in separate shadow DOMs don't coordinate automatically
    if (this.checked && !wasChecked && this.name) {
      this.uncheckOtherRadiosInGroup();
    }

    // Dual-dispatch: CustomEvent + callback
    const changeEvent = new CustomEvent<RadioChangeEventDetail>(
      'change',
      {
        detail: {
          checked: this.checked,
          value: this.value,
          name: this.name,
        },
        bubbles: true,
        composed: true,
      }
    );

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
        // If checked didn't actually change (was already false), Lit's updated() won't
        // fire on the sibling, so _syncValidity() wouldn't be called. Force it so
        // unchecked siblings correctly reflect the group's new validity state.
        radio._syncValidity();
        radio._syncStates();
      }
    });
  }

  /**
   * Render optional external label (for groups or above radio)
   */
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
        ${this.required
          ? html`
              <span class="ag-form-control__required" part="ag-required" aria-hidden="true">*</span>
            `
          : nothing}
      </label>
    `;
  }

  /**
   * Render helper text
   */
  private _renderHelper() {
    if (!this.helpText) return nothing;

    return html`
      <div
        id="${this._ids.helperId}"
        class="ag-form-control__helper ag-radio__helper"
        part="ag-radio-helper"
      >
        ${this.helpText}
      </div>
    `;
  }

  /**
   * Render error text
   */
  private _renderError() {
    return html`
      <div
        id="${this._ids.errorId}"
        class="ag-form-control__error ag-radio__error"
        part="ag-radio-error"
        ?hidden="${!this.invalid || !this.errorMessage}"
      >
        ${this.errorMessage || ''}
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
    const wrapperClasses = `
      radio-wrapper
      ${this.labelPosition === 'start' ? 'radio-wrapper--label-start' : ''}
    `;

    const indicatorClasses = `
      radio-indicator
      radio-indicator--${this.size}
      radio-indicator--${this.theme}
    `;

    const labelClasses = `
      radio-label
      radio-label--${this.size}
    `;

    // Build aria-describedby
    const describedBy = this._getAriaDescribedBy();

    // The radio control (internal label wrapper + input + indicator + text)
    const radioControl = html`
      <label class=${wrapperClasses.trim()} part="ag-radio-wrapper">
        <input
          type="radio"
          id="${this._ids.inputId}"
          class="radio-input"
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

    // If external label/helper/error are provided, wrap with them
    if (this.label || this.helpText || this.errorMessage) {
      return html`
        <div class="ag-radio-wrapper-with-external">
          ${this._renderExternalLabel()}
          ${radioControl}
          ${this._renderHelper()}
          ${this._renderError()}
        </div>
      `;
    }

    // Otherwise just return the radio control
    return radioControl;
  }
}
