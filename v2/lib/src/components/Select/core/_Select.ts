// v2/lib/src/components/Select/core/_Select.ts
import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, query } from 'lit/decorators.js';
import {
  createFormControlIds,
  buildAriaDescribedBy,
  isHorizontalLabel,
  type LabelPosition,
} from '../../../shared/form-control-utils';
import { formControlStyles } from '../../../shared/form-control-styles';
import { FaceMixin, syncInnerInputValidity } from '../../../shared/face-mixin';

// Ingest the class dictionary object to decode hashes
import styles from './select-structure.module.css';
// Ingest the compiled CSS text string for the shadow root definition
import structuralStylesText from './select-structure.module.css?inline';

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
export class Select extends FaceMixin(LitElement) implements SelectProps {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: String, reflect: true })
  public size: SelectSize = '';

  @property({ type: Boolean, reflect: true })
  public multiple = false;

  @property({ type: Boolean, reflect: true })
  public disabled = false;

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

  // Query by tag name remains safe because the tag itself is still <select>
  @query('select')
  private selectElement!: HTMLSelectElement;

  // ─── FACE ─────────────────────────────────────────────────────────────────

  override formResetCallback(): void {
    if (this.selectElement) {
      Array.from(this.selectElement.options).forEach(opt => (opt.selected = opt.defaultSelected));
    }
    this._syncFormValue();
    this._internals.setValidity({});
    this._syncStates();
  }

  override formStateRestoreCallback(
    state: File | string | FormData | null,
    _mode: 'restore' | 'autocomplete'
  ): void {
    this.updateComplete.then(() => {
      if (!this.selectElement) return;
      if (this.multiple && state instanceof FormData) {
        const restored = new Set(Array.from(state.values()) as string[]);
        Array.from(this.selectElement.options).forEach(opt => {
          opt.selected = restored.has(opt.value);
        });
      } else if (typeof state === 'string') {
        Array.from(this.selectElement.options).forEach(opt => {
          opt.selected = opt.value === state;
        });
      }
      this._syncFormValue();
      this._syncValidity();
      this._syncStates();
    });
  }

  private _syncStates(): void {
    this._setState('disabled', this.disabled);
    this._setState('required', this.required);
    this._setState('invalid', !this._internals.validity.valid);
  }

  private _syncFormValue(): void {
    if (!this.selectElement) return;
    if (this.multiple) {
      const formData = new FormData();
      Array.from(this.selectElement.selectedOptions).forEach(opt => {
        formData.append(this.name, opt.value);
      });
      this._internals.setFormValue(formData);
    } else {
      this._internals.setFormValue(this.selectElement.value || '');
    }
  }

  private _syncValidity(): void {
    syncInnerInputValidity(this._internals, this.selectElement);
  }

  // ─── End FACE ─────────────────────────────────────────────────────────────

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('required') ||
      changedProperties.has('invalid')
    ) {
      this._syncStates();
    }
  }

  protected firstUpdated() {
    this.handleSlotChange();

    const slotElement = this.shadowRoot?.querySelector('slot');
    if (slotElement) {
      slotElement.addEventListener('slotchange', () => this.handleSlotChange());
    }

    this._syncFormValue();
    this._syncValidity();
    this._syncStates();
  }

  private handleSlotChange() {
    if (!this.selectElement) return;

    const slotElement = this.shadowRoot?.querySelector('slot');
    if (!slotElement) return;

    const assignedNodes = slotElement.assignedNodes();

    assignedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;
        if (el.tagName === 'OPTION' || el.tagName === 'OPTGROUP') {
          this.selectElement.appendChild(node);
        }
      }
    });
  }

  static styles = [
    formControlStyles,
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      :host {
        display: block;
        width: 100%;
      }

      slot {
        display: none;
      }

      /* Target the tag directly to avoid missing un-hashed legacy string triggers */
      select {
        transition:
          border-color var(--ag-transition-fast) ease-in-out,
          box-shadow var(--ag-transition-fast) ease-in-out;
      }

      select:focus {
        border-color: var(--ag-focus-ring-color);
        box-shadow: 0 0 0 var(--ag-focus-ring-outline-width) var(--ag-focus-ring-color);
        outline:
          var(--ag-focus-ring-outline-width) var(--ag-focus-ring-outline-style)
          var(--ag-focus-ring-outline-color);
        transition: box-shadow var(--ag-transition-fast) ease-out;
      }

      select:disabled {
        background-color: var(--ag-disabled-bg);
        cursor: not-allowed;
        opacity: 0.6;
      }

      select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 var(--ag-text-primary);
      }

      @media (prefers-reduced-motion), (update: slow) {
        select,
        select:focus {
          transition: none;
        }
      }
    `,
  ];

  private handleClick(event: MouseEvent) {
    if (this.onClick) {
      this.onClick(event);
    }
  }

  private handleFocus(event: FocusEvent) {
    this.dispatchEvent(new FocusEvent('focus', {
      bubbles: true,
      composed: true,
    }));

    if (this.onFocus) {
      this.onFocus(event);
    }
  }

  private handleBlur(event: FocusEvent) {
    this.dispatchEvent(new FocusEvent('blur', {
      bubbles: true,
      composed: true,
    }));

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

    this._syncFormValue();
    this._syncValidity();

    const changeEvent = new CustomEvent<SelectChangeEventDetail>('change', {
      detail: { value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(changeEvent);

    if (this.onChange) {
      this.onChange(changeEvent);
    }
  }

  private renderLabel(ids: { inputId: string }) {
    if (!this.label || this.noLabel) return '';

    const positionClasses: string[] = [];
    if (isHorizontalLabel(this.labelPosition)) {
      positionClasses.push(styles['ag-form-control__label--horizontal']);
      positionClasses.push(styles[`ag-form-control__label--${this.labelPosition}`]);
    } else if (this.labelPosition === 'bottom') {
      positionClasses.push(styles['ag-form-control__label--bottom']);
    }

    const labelClasses = [
      styles['ag-form-control__label'],
      this.labelHidden ? styles['ag-form-control__label--hidden'] : '',
      ...positionClasses
    ].filter(Boolean).join(' ');

    return html`
      <label
        for=${ids.inputId}
        class="${labelClasses}"
      >
        ${this.label}
        ${this.required ? html`<span class="ag-form-control__required" aria-hidden="true">*</span>` : ''}
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

    // Dynamic sizing layout hashes
    let sizeModifierClass = '';
    if (this.size === 'small') sizeModifierClass = styles.selectSmall;
    if (this.size === 'large') sizeModifierClass = styles.selectLarge;

    const selectComputedClass = `${styles.select} ${sizeModifierClass}`.trim();

    const selectElement = html`
      <select
        id=${ids.inputId}
        class="${selectComputedClass}"
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
      ? html`<div id=${ids.helperId} class="${styles['ag-form-control__helper']}">
          ${this.helpText}
        </div>`
      : '';

    const errorText = this.invalid && this.errorMessage
      ? html`<div id=${ids.errorId} class="${styles['ag-form-control__error']}">
          ${this.errorMessage}
        </div>`
      : '';

    if (isHorizontal) {
      return html`
        <div class="${styles['ag-form-control--horizontal']}">
          ${this.renderLabel(ids)}
          ${selectElement}
        </div>
        ${helperText}
        ${errorText}
      `;
    }

    if (this.labelPosition === 'bottom') {
      return html`
        ${selectElement}
        ${helperText}
        ${errorText}
        ${this.renderLabel(ids)}
      `;
    }

    return html`
      ${this.renderLabel(ids)}
      ${selectElement}
      ${helperText}
      ${errorText}
    `;
  }
}
