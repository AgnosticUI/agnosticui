import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';


export type RadioSize = 'small' | 'medium' | 'large';
export type RadioTheme = 'default' | 'primary' | 'monochrome';

export type RadioChangeEvent = CustomEvent<{
  checked: boolean;
  value: string;
  name: string;
}>;

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
  name: string;
  /**
   * Value of the radio input
   */
  value: string;
  /**
   * Whether the radio is checked
   */
  checked: boolean;
  /**
   * Whether the radio is disabled
   */
  disabled: boolean;
  /**
   * Size of the radio button
   */
  size: RadioSize;
  /**
   * Color theme variant
   */
  theme: RadioTheme;
  /**
   * Label text for the radio button
   */
  labelText: string;
  /**
   * Position of label relative to radio
   */
  labelPosition: 'end' | 'start';
}

export class Radio extends LitElement implements RadioProps {
  static override styles = css`
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

    /* Default theme - green from v1 */
    .radio-indicator--default {
      border: var(--ag-border-width-2) solid var(--ag-border);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--default {
      background: var(--ag-success);
      border-color: var(--ag-success);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--default {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-border),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) var(--ag-focus);
    }

    .radio-input:checked:focus + .radio-indicator--default {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) var(--ag-focus);
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
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) var(--ag-focus);
    }

    .radio-input:checked:focus + .radio-indicator--primary {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) var(--ag-focus);
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
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) var(--ag-focus);
    }

    .radio-input:checked:focus + .radio-indicator--monochrome {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) var(--ag-focus);
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
  `;

  @property({ type: String })
  name = '';

  @property({ type: String })
  value = '';

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  size: RadioSize = 'medium';

  @property({ type: String })
  theme: RadioTheme = 'default';

  @property({ type: String })
  labelText = '';

  @property({ type: String })
  labelPosition: 'end' | 'start' = 'end';

  private handleChange(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }

    const input = e.target as HTMLInputElement;
    this.checked = input.checked;

    this.dispatchEvent(
      new CustomEvent<{ checked: boolean; value: string; name: string }>(
        'ag-change',
        {
          detail: {
            checked: this.checked,
            value: this.value,
            name: this.name,
          },
          bubbles: true,
          composed: true,
        }
      )
    );
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

    return html`
      <label class=${wrapperClasses.trim()} part="ag-radio-wrapper">
        <input
          type="radio"
          class="radio-input"
          part="ag-radio-input"
          name=${this.name}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
          aria-checked=${this.checked ? 'true' : 'false'}
        />
        <span class=${indicatorClasses.trim()} part="ag-radio-indicator"></span>
        <span class=${labelClasses.trim()} part="ag-radio-label">
          ${this.labelText ? this.labelText : html`<slot></slot>`}
        </span>
      </label>
    `;
  }
}

if (!customElements.get('ag-radio')) {
  customElements.define('ag-radio', Radio);
}