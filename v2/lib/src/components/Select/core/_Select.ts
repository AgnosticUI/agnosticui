import { LitElement, html, css } from 'lit';
import { property, query } from 'lit/decorators.js';

export type SelectSize = 'small' | 'large' | '';

export interface SelectProps {
  size?: SelectSize;
  multiple?: boolean;
  disabled?: boolean;
  name?: string;
  multipleSize?: number;
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

  static styles = css`
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
  `;

  private handleChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    let value: string | string[];

    if (this.multiple) {
      value = Array.from(select.selectedOptions).map(option => option.value);
    } else {
      value = select.value;
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <select
        class="select"
        part="ag-select"
        ?multiple=${this.multiple}
        ?disabled=${this.disabled}
        .name=${this.name}
        .size=${this.multipleSize ?? (this.multiple ? 4 : 1)}
        @change=${this.handleChange}
        aria-disabled=${this.disabled ? 'true' : 'false'}
      ></select>
      <slot></slot>
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
