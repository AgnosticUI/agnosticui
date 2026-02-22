/**
 * AgnosticUI v2 SelectionButtonGroup - Core Implementation
 *
 * A container component that manages single (radio) or multiple (checkbox) selection
 * using button-styled UI. Provides keyboard navigation and accessibility features.
 *
 * @element ag-selection-button-group
 * @slot - Default slot for ag-selection-button elements
 * @csspart fieldset - The fieldset element
 * @csspart legend - The legend element
 * @csspart content - The content wrapper containing buttons
 */

import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { AgSelectionButton, SelectionButtonTheme, SelectionButtonSize, SelectionButtonShape } from '../../SelectionButton/core/_SelectionButton';

export type SelectionButtonType = 'radio' | 'checkbox';
export type SelectionButtonGroupTheme = SelectionButtonTheme;
export type SelectionButtonGroupSize = SelectionButtonSize;
export type SelectionButtonGroupShape = SelectionButtonShape;

export interface SelectionButtonChangeEventDetail {
  /** The value of the button that triggered the change */
  value: string;
  /** Whether the button is now selected */
  checked: boolean;
  /** All currently selected values */
  selectedValues: string[];
}

export type SelectionButtonChangeEvent = CustomEvent<SelectionButtonChangeEventDetail>;

export interface SelectionButtonGroupProps {
  /** Selection mode: 'radio' (single) or 'checkbox' (multiple) */
  type: SelectionButtonType;
  /** Name attribute for the input elements */
  name: string;
  /** Legend text for the fieldset (accessibility) */
  legend?: string;
  /** Visually hide the legend while keeping it accessible */
  legendHidden?: boolean;
  /** Theme variant for buttons */
  theme?: SelectionButtonGroupTheme;
  /** Size variant for buttons */
  size?: SelectionButtonGroupSize;
  /** Shape variant for buttons */
  shape?: SelectionButtonGroupShape;
  /** Controlled value for radio mode */
  value?: string;
  /** Controlled values for checkbox mode */
  values?: string[];
  /** Disable all buttons in the group */
  disabled?: boolean;
  /** Callback for selection changes */
  onSelectionChange?: (event: SelectionButtonChangeEvent) => void;
}

export class AgSelectionButtonGroup extends LitElement implements SelectionButtonGroupProps {
  static override styles = css`
    :host {
      display: block;
    }

    .selection-button-group {
      border: 0;
      padding: 0;
      margin: 0;
      min-inline-size: auto;
    }

    .selection-button-group__legend {
      font-weight: 600;
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
      padding: 0;
      margin-block-end: var(--ag-space-4);
    }

    .selection-button-group__legend--hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    .selection-button-group__content {
      display: flex;
      flex-wrap: wrap;
      gap: var(--ag-selection-button-group-gap, var(--ag-space-2));
    }
  `;

  @property({ type: String, reflect: true })
  declare type: SelectionButtonType;

  @property({ type: String, reflect: true })
  declare name: string;

  @property({ type: String })
  declare legend: string;

  @property({ type: Boolean, attribute: 'legend-hidden' })
  declare legendHidden: boolean;

  @property({ type: String, reflect: true })
  declare theme: SelectionButtonGroupTheme;

  @property({ type: String, reflect: true })
  declare size: SelectionButtonGroupSize;

  @property({ type: String, reflect: true })
  declare shape: SelectionButtonGroupShape;

  @property({ type: String })
  declare value: string;

  @property({ type: Array })
  declare values: string[];

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @property({ attribute: false })
  declare onSelectionChange: ((event: SelectionButtonChangeEvent) => void) | undefined;

  // Internal state for uncontrolled mode
  @state()
  declare _internalSelectedValues: string[];

  constructor() {
    super();
    this.type = 'radio';
    this.name = '';
    this.legend = '';
    this.legendHidden = false;
    this.theme = '';
    this.size = 'md';
    this.shape = '';
    this.value = '';
    this.values = [];
    this.disabled = false;
    this._internalSelectedValues = [];
  }

  // Get current selected values (controlled or uncontrolled)
  private _getSelectedValues(): string[] {
    if (this.type === 'radio') {
      // For radio: use controlled value if set, otherwise internal state
      if (this.value) {
        return [this.value];
      }
      return this._internalSelectedValues;
    }
    // For checkbox: use controlled values if set (non-empty), otherwise internal state
    if (this.values && this.values.length > 0) {
      return this.values;
    }
    return this._internalSelectedValues;
  }

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('selection-button-change', this._handleButtonChange as EventListener);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('selection-button-change', this._handleButtonChange as EventListener);
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // Sync props to child buttons
    if (
      changedProperties.has('type') ||
      changedProperties.has('name') ||
      changedProperties.has('theme') ||
      changedProperties.has('size') ||
      changedProperties.has('shape') ||
      changedProperties.has('disabled') ||
      changedProperties.has('value') ||
      changedProperties.has('values') ||
      changedProperties.has('_internalSelectedValues')
    ) {
      this._syncChildButtons();
    }
  }

  override firstUpdated() {
    this._syncChildButtons();
  }

  private _getButtons(): AgSelectionButton[] {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return [];

    return slot
      .assignedElements({ flatten: true })
      .filter((el): el is AgSelectionButton => el.tagName.toLowerCase() === 'ag-selection-button');
  }

  private _syncChildButtons() {
    const buttons = this._getButtons();
    const selectedValues = this._getSelectedValues();

    buttons.forEach((button) => {
      button._type = this.type;
      button._name = this.name;
      button._theme = this.theme;
      button._size = this.size;
      button._shape = this.shape;
      button.checked = selectedValues.includes(button.value);
      if (this.disabled) {
        button.disabled = true;
      }
    });
  }

  private _handleButtonChange = (e: CustomEvent<{ value: string; checked: boolean }>) => {
    e.stopPropagation();

    const { value, checked } = e.detail;
    let newSelectedValues: string[];

    if (this.type === 'radio') {
      // Radio: only one selected
      newSelectedValues = checked ? [value] : [];
    } else {
      // Checkbox: toggle in list - use current selected values
      const current = [...this._getSelectedValues()];
      if (checked) {
        if (!current.includes(value)) {
          current.push(value);
        }
      } else {
        const index = current.indexOf(value);
        if (index > -1) {
          current.splice(index, 1);
        }
      }
      newSelectedValues = current;
    }

    // Update internal state (for uncontrolled mode)
    this._internalSelectedValues = newSelectedValues;

    // Dispatch event
    const changeEvent = new CustomEvent<SelectionButtonChangeEventDetail>('selection-change', {
      detail: {
        value,
        checked,
        selectedValues: newSelectedValues,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(changeEvent);

    if (this.onSelectionChange) {
      this.onSelectionChange(changeEvent);
    }
  };

  private _handleKeyDown = (e: KeyboardEvent) => {
    const buttons = this._getButtons().filter((button) => !button.disabled);
    if (buttons.length === 0) return;

    // Find currently focused button (check shadowRoot for focus)
    const focusedButton = buttons.find(button => {
      try {
        return button.shadowRoot?.activeElement || button === document.activeElement;
      } catch {
        return button === document.activeElement;
      }
    });
    const currentIndex = focusedButton ? buttons.indexOf(focusedButton) : -1;

    let nextIndex: number | null = null;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % buttons.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        nextIndex = currentIndex === -1 ? buttons.length - 1 : (currentIndex - 1 + buttons.length) % buttons.length;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = buttons.length - 1;
        break;
    }

    if (nextIndex !== null) {
      const nextButton = buttons[nextIndex];
      nextButton.focus();

      // For radio groups, arrow keys also select
      if (this.type === 'radio') {
        this._handleButtonChange(new CustomEvent('selection-button-change', {
          detail: { value: nextButton.value, checked: true },
        }));
      }
    }
  };

  private _handleSlotChange() {
    this._syncChildButtons();
  }

  override render() {
    const legendClasses = [
      'selection-button-group__legend',
      this.legendHidden ? 'selection-button-group__legend--hidden' : '',
    ].filter(Boolean).join(' ');

    return html`
      <fieldset
        class="selection-button-group"
        part="ag-selection-button-group-fieldset"
        role="${this.type === 'radio' ? 'radiogroup' : 'group'}"
        aria-disabled="${this.disabled ? 'true' : 'false'}"
      >
        ${this.legend
          ? html`<legend class="${legendClasses}" part="ag-selection-button-group-legend">${this.legend}</legend>`
          : nothing}
        <div class="selection-button-group__content" part="ag-selection-button-group-content">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </fieldset>
    `;
  }
}
