import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';


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
  /**
   * Callback for native click events
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * Callback for change events (fired when radio selection changes)
   */
  onChange?: (event: RadioChangeEvent) => void;
}

export class AgRadio extends LitElement implements RadioProps {
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
  `;

  @property({ type: String, reflect: true })
  name = '';

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

  // Event callback props
  @property({ attribute: false })
  onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  onChange?: (event: RadioChangeEvent) => void;

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

    // Find the root document (traverse up from shadow roots if needed)
    let root: Node = this.getRootNode();
    while (root && 'host' in root) {
      const parent = (root as ShadowRoot).host?.getRootNode();
      if (parent && parent !== root) {
        root = parent;
      } else {
        break;
      }
    }

    const doc = root instanceof Document ? root : document;
    const allRadios = doc.querySelectorAll(`ag-radio[name="${this.name}"]`);

    // Filter to only enabled radios and return as array
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
    // Find the root document (traverse up from shadow roots if needed)
    let root: Node = this.getRootNode();
    while (root && 'host' in root) {
      const parent = (root as ShadowRoot).host?.getRootNode();
      if (parent && parent !== root) {
        root = parent;
      } else {
        break;
      }
    }

    const doc = root instanceof Document ? root : document;
    const allRadios = doc.querySelectorAll(`ag-radio[name="${this.name}"]`);

    allRadios.forEach((radio) => {
      if (radio !== this && radio instanceof AgRadio) {
        radio.checked = false;
      }
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
  }
}
