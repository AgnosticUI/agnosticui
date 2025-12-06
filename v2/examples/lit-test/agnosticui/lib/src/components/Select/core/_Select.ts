import { LitElement, html, css } from 'lit';
import { property, query } from 'lit/decorators.js';
import {
  createFormControlIds,
  buildAriaDescribedBy,
  isHorizontalLabel,
  type LabelPosition,
} from '../../../shared/form-control-utils';
import { formControlStyles } from '../../../shared/form-control-styles';

export type SelectSize = 'small' | 'large' | '';

// Event types
export interface SelectChangeEventDetail {
  value: string | string[];
}
export type SelectChangeEvent = CustomEvent<SelectChangeEventDetail>;

export interface SelectProps {
  size?: SelectSize;
  multiple?: boolean;
  disabled?: boolean;
  name?: string;
  multipleSize?: number;
  // External label support
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  // Event callbacks
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: SelectChangeEvent) => void;
}

/**
 * Select component - A lightly styled native select element
 *
 * @slot - Option elements
 *
 * @csspart ag-select - The select element
 *
 * @fires change - Emitted when selection changes
 */
export class Select extends LitElement implements SelectProps {
  @property({ type: String, reflect: true })
  public size: SelectSize = '';

  @property({ type: Boolean, reflect: true })
  public multiple = false;

  @property({ type: Boolean, reflect: true })
  public disabled = false;

  @property({ type: String })
  public name = '';

  @property({ type: Number, attribute: 'multiple-size' })
  public multipleSize?: number;

  // External label properties
  @property({ type: String })
  public label = '';

  @property({ type: String, attribute: 'label-position' })
  public labelPosition: LabelPosition = 'top';

  @property({ type: Boolean, attribute: 'label-hidden' })
  public labelHidden = false;

  @property({ type: Boolean, attribute: 'no-label' })
  public noLabel = false;

  @property({ type: Boolean })
  public required = false;

  @property({ type: Boolean })
  public invalid = false;

  @property({ type: String, attribute: 'error-message' })
  public errorMessage = '';

  @property({ type: String, attribute: 'help-text' })
  public helpText = '';

  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onChange?: (event: SelectChangeEvent) => void;

  @query('select')
  private selectElement!: HTMLSelectElement;

  protected firstUpdated() {
    // Ensure options are moved after first render
    this.handleSlotChange();

    // Listen for dynamic changes to slotted options
    const slotElement = this.shadowRoot?.querySelector('slot');
    if (slotElement) {
      slotElement.addEventListener('slotchange', () => this.handleSlotChange());
    }
  }

  private handleSlotChange() {
    // Move option/optgroup elements from light DOM into the shadow DOM select
    // This is required because <option> elements must be direct children of <select>
    // and slotted content doesn't satisfy this requirement
    if (!this.selectElement) return;

    const slotElement = this.shadowRoot?.querySelector('slot');
    if (!slotElement) return;

    const assignedNodes = slotElement.assignedNodes();

    // Move each option/optgroup from light DOM into the select element
    assignedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;
        if (el.tagName === 'OPTION' || el.tagName === 'OPTGROUP') {
          // Move the element from light DOM to shadow DOM
          // appendChild will move it if it's not already a child
          this.selectElement.appendChild(node);
        }
      }
    });
  }

  static styles = [
    formControlStyles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      /* Hide the slot since options are moved into select */
      slot {
        display: none;
      }

      .select {
      display: block;
      width: 100%;
      /* Remove default browser styling */
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      /* Base styling */
      padding: var(--ag-space-2) var(--ag-space-8) var(--ag-space-2) var(--ag-space-3);
      -moz-padding-start: calc(var(--ag-space-3) - 3px);
      font-size: var(--ag-font-size-base);
      font-weight: 400;
      line-height: 1.5;
      font-family: inherit;
      color: var(--ag-text-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      background-color: var(--ag-background-primary);
      transition:
        border-color var(--ag-transition-fast) ease-in-out,
        box-shadow var(--ag-transition-fast) ease-in-out;
    }

    /* Custom dropdown arrow for single select */
    .select:not([multiple]) {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333330' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right var(--ag-space-3) center;
      background-size: var(--ag-font-size-base) var(--ag-space-3);
    }

    /* Focus state */
    .select:focus {
      border-color: var(--ag-focus-ring-color);
      box-shadow: 0 0 0 var(--ag-focus-ring-outline-width) var(--ag-focus-ring-color);
      /* Needed for High Contrast mode */
      outline:
        var(--ag-focus-ring-outline-width) var(--ag-focus-ring-outline-style)
        var(--ag-focus-ring-outline-color);
      transition: box-shadow var(--ag-transition-fast) ease-out;
    }

    /* Disabled state */
    .select:disabled {
      background-color: var(--ag-disabled-bg);
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* Firefox focusring fix */
    .select:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 var(--ag-text-primary);
    }

    /* Small size variant */
    :host([size="small"]) .select {
      padding-top: var(--ag-space-1);
      padding-bottom: var(--ag-space-1);
      padding-left: var(--ag-space-2);
      font-size: var(--ag-font-size-small);
    }

    /* Large size variant */
    :host([size="large"]) .select {
      padding-top: var(--ag-space-2);
      padding-bottom: var(--ag-space-2);
      padding-left: var(--ag-space-4);
      font-size: var(--ag-font-size-large);
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion), (update: slow) {
      .select,
      .select:focus {
        transition: none;
      }
    }
  `,
  ];

  private handleClick(event: MouseEvent) {
    // Invoke callback if provided (native composed event)
    if (this.onClick) {
      this.onClick(event);
    }
  }

  private handleFocus(event: FocusEvent) {
    // Re-dispatch from host so consumers can listen on <ag-select>
    this.dispatchEvent(new FocusEvent('focus', {
      bubbles: true,
      composed: true,
    }));

    // Invoke callback if provided
    if (this.onFocus) {
      this.onFocus(event);
    }
  }

  private handleBlur(event: FocusEvent) {
    // Re-dispatch from host so consumers can listen on <ag-select>
    this.dispatchEvent(new FocusEvent('blur', {
      bubbles: true,
      composed: true,
    }));

    // Invoke callback if provided
    if (this.onBlur) {
      this.onBlur(event);
    }
  }

  private handleChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    let value: string | string[];

    if (this.multiple) {
      value = Array.from(select.selectedOptions).map(option => option.value);
    } else {
      value = select.value;
    }

    // Dual-dispatch: dispatchEvent + callback
    const changeEvent = new CustomEvent<SelectChangeEventDetail>('change', {
      detail: { value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(changeEvent);

    // Invoke callback if provided
    if (this.onChange) {
      this.onChange(changeEvent);
    }
  }

  private renderLabel(ids: { inputId: string }) {
    if (!this.label || this.noLabel) return '';

    // Build position classes
    const positionClasses: string[] = [];
    if (isHorizontalLabel(this.labelPosition)) {
      positionClasses.push('ag-form-control__label--horizontal');
      positionClasses.push(`ag-form-control__label--${this.labelPosition}`);
    } else if (this.labelPosition === 'bottom') {
      positionClasses.push(`ag-form-control__label--${this.labelPosition}`);
    }

    return html`
      <label
        for=${ids.inputId}
        class="ag-form-control__label ${this.labelHidden
          ? 'ag-form-control__label--hidden'
          : ''} ${this.required ? 'ag-form-control__label--required' : ''} ${positionClasses.join(' ')}"
      >
        ${this.label}
      </label>
    `;
  }

  render() {
    const ids = createFormControlIds('select');
    const ariaDescribedBy = buildAriaDescribedBy({
      helperId: ids.helperId,
      errorId: ids.errorId,
      hasHelper: !!this.helpText && !this.invalid,
      hasError: !!this.invalid && !!this.errorMessage,
    });

    const isHorizontal = isHorizontalLabel(this.labelPosition);

    const selectElement = html`
      <select
        id=${ids.inputId}
        class="select"
        part="ag-select"
        ?multiple=${this.multiple}
        ?disabled=${this.disabled}
        ?required=${this.required}
        .name=${this.name}
        .size=${this.multipleSize ?? (this.multiple ? 4 : 1)}
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @change=${this.handleChange}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-invalid=${this.invalid ? 'true' : 'false'}
        aria-describedby=${ariaDescribedBy || undefined}
      ></select>
      <slot></slot>
    `;

    const helperText = this.helpText && !this.invalid
      ? html`<div id=${ids.helperId} class="ag-form-control__helper">
          ${this.helpText}
        </div>`
      : '';

    const errorText = this.invalid && this.errorMessage
      ? html`<div id=${ids.errorId} class="ag-form-control__error">
          ${this.errorMessage}
        </div>`
      : '';

    // For horizontal layout: [Label] [Select] structure with helper/error below
    if (isHorizontal) {
      return html`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel(ids)}
          ${selectElement}
        </div>
        ${helperText}
        ${errorText}
      `;
    }

    // For bottom label: Select first, then helper/error, then label
    if (this.labelPosition === 'bottom') {
      return html`
        ${selectElement}
        ${helperText}
        ${errorText}
        ${this.renderLabel(ids)}
      `;
    }

    // Top label (default): Label first, then select, then helper/error
    return html`
      ${this.renderLabel(ids)}
      ${selectElement}
      ${helperText}
      ${errorText}
    `;
  }
}

// Register the custom element
if (!customElements.get('ag-select')) {
  customElements.define('ag-select', Select);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-select': Select;
  }
}
