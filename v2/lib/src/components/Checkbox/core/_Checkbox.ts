import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';


export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxTheme = 'default' | 'primary' | 'monochrome';

export type CheckboxChangeEvent = CustomEvent<{
  checked: boolean;
  value: string;
  name: string;
  indeterminate: boolean;
}>;

/**
 * @csspart ag-checkbox-wrapper - The outer wrapper label element
 * @csspart ag-checkbox-input - The native checkbox input element
 * @csspart ag-checkbox-indicator - The custom visual checkbox indicator (box with checkmark)
 * @csspart ag-checkbox-label - The label text span
 */
export interface CheckboxProps {
  name: string;
  value: string;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  size: CheckboxSize;
  theme: CheckboxTheme;
  labelText: string;
  labelPosition: 'end' | 'start';
}

export class Checkbox extends LitElement implements CheckboxProps {
  static override styles = css`
    :host {
      display: inline-block;
    }

    .checkbox-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      gap: var(--ag-space-3);
    }

    :host([disabled]) .checkbox-wrapper {
      cursor: not-allowed;
      opacity: 0.6;
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
    }

    .checkbox-label {
      position: relative;
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }

    /* The box - drawn with ::before */
    .checkbox-label::before {
      content: '';
      display: inline-block;
      flex-shrink: 0;
      margin-inline-end: var(--ag-space-3);
      border-radius: var(--ag-radius-sm);
      transition: all var(--ag-motion-fast) ease-in-out;
    }

    /* The checkmark - drawn with ::after */
    .checkbox-label::after {
      content: '';
      position: absolute;
      display: block;
      opacity: 0;
      transform: rotate(40deg) scale(0);
      transform-origin: center center;
      transition: all var(--ag-motion-fast) ease-in-out;
    }

    /* Size variants */
    .checkbox-label--small::before {
      width: 14px;
      height: 14px;
    }

    .checkbox-label--small::after {
      left: 4px;
      top: 0px;
      width: 4px;
      height: 8px;
      border-right: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    .checkbox-label--medium::before {
      width: 16px;
      height: 16px;
    }

    .checkbox-label--medium::after {
      left: 5px;
      top: 1px;
      width: 4px;
      height: 9px;
      border-right: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    .checkbox-label--large::before {
      width: 18px;
      height: 18px;
    }

    .checkbox-label--large::after {
      left: 6px;
      top: 1px;
      width: 5px;
      height: 10px;
      border-right: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    /* Indeterminate state - horizontal line */
    .checkbox-input:indeterminate + .checkbox-label::after {
      transform: rotate(0deg) scale(1) translate(-6px);
      opacity: 1;
      border-right: none;
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
      width: 8px;
      height: 0;
      left: 50%;
      top: 50%;
      margin-left: -4px;
      margin-top: -1px;
    }

    /* Checked state */
    .checkbox-input:checked + .checkbox-label::after {
      opacity: 1;
      transform: rotate(40deg) scale(1) translate(2px);
    }

    /* Default theme - green from v1 */
    .checkbox-label--default::before {
      border: var(--ag-border-width-2) solid var(--ag-border);
      background: var(--ag-white);
    }

    .checkbox-input:checked + .checkbox-label--default::before,
    .checkbox-input:indeterminate + .checkbox-label--default::before {
      background: var(--ag-success);
      border-color: var(--ag-success);
    }

    .checkbox-input:focus + .checkbox-label--default::before {
      box-shadow: 0 0 0 var(--ag-focus-width) var(--ag-focus);
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    /* Primary theme */
    .checkbox-label--primary::before {
      border: var(--ag-border-width-2) solid var(--ag-primary-border);
      background: var(--ag-white);
    }

    .checkbox-input:checked + .checkbox-label--primary::before,
    .checkbox-input:indeterminate + .checkbox-label--primary::before {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
    }

    .checkbox-input:focus + .checkbox-label--primary::before {
      box-shadow: 0 0 0 var(--ag-focus-width) var(--ag-focus);
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    /* Monochrome theme */
    .checkbox-label--monochrome::before {
      border: var(--ag-border-width-2) solid var(--ag-black);
      background: var(--ag-white);
    }

    .checkbox-input:checked + .checkbox-label--monochrome::before,
    .checkbox-input:indeterminate + .checkbox-label--monochrome::before {
      background: var(--ag-black);
      border-color: var(--ag-black);
    }

    .checkbox-input:focus + .checkbox-label--monochrome::before {
      box-shadow: 0 0 0 var(--ag-focus-width) var(--ag-focus);
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    .checkbox-label-copy {
      display: inline-block;
    }

    .checkbox-label-copy--small {
      font-size: 0.875rem;
    }

    .checkbox-label-copy--medium {
      font-size: 1rem;
    }

    .checkbox-label-copy--large {
      font-size: 1.125rem;
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
  `;

  @property({ type: String })
  name = '';

  @property({ type: String })
  value = '';

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  size: CheckboxSize = 'medium';

  @property({ type: String })
  theme: CheckboxTheme = 'default';

  @property({ type: String })
  labelText = '';

  @property({ type: String })
  labelPosition: 'end' | 'start' = 'end';

  private inputRef?: HTMLInputElement;

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // Sync indeterminate state to native input
    if (changedProperties.has('indeterminate') && this.inputRef) {
      this.inputRef.indeterminate = this.indeterminate;
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

    this.dispatchEvent(
      new CustomEvent<{
        checked: boolean;
        value: string;
        name: string;
        indeterminate: boolean;
      }>('ag-change', {
        detail: {
          checked: this.checked,
          value: this.value,
          name: this.name,
          indeterminate: this.indeterminate,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  override render() {
    const wrapperClasses = `
      checkbox-wrapper
      ${this.labelPosition === 'start' ? 'checkbox-wrapper--label-start' : ''}
    `;

    const labelClasses = `
      checkbox-label
      checkbox-label--${this.size}
      checkbox-label--${this.theme}
    `;

    const labelCopyClasses = `
      checkbox-label-copy
      checkbox-label-copy--${this.size}
    `;

    return html`
      <label class=${wrapperClasses.trim()} part="ag-checkbox-wrapper">
        <input
          type="checkbox"
          class="checkbox-input"
          part="ag-checkbox-input"
          name=${this.name}
          value=${this.value}
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
          aria-checked=${this.indeterminate
            ? 'mixed'
            : this.checked
            ? 'true'
            : 'false'}
        />
        <span
          class=${labelClasses.trim()}
          part="ag-checkbox-indicator"
          aria-hidden="true"
        ></span>
        <span class=${labelCopyClasses.trim()} part="ag-checkbox-label">
          ${this.labelText ? this.labelText : html`<slot></slot>`}
        </span>
      </label>
    `;
  }

  override firstUpdated() {
    this.inputRef = this.shadowRoot?.querySelector(
      '.checkbox-input'
    ) as HTMLInputElement;
    if (this.inputRef && this.indeterminate) {
      this.inputRef.indeterminate = this.indeterminate;
    }
  }
}

if (!customElements.get('ag-checkbox')) {
  customElements.define('ag-checkbox', Checkbox);
}
