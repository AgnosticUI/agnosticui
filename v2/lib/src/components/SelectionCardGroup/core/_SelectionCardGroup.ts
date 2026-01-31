/**
 * AgnosticUI v2 SelectionCardGroup - Core Implementation
 *
 * A container component that manages single (radio) or multiple (checkbox) selection
 * using card-based UI. Provides keyboard navigation and accessibility features.
 *
 * @element ag-selection-card-group
 * @slot - Default slot for ag-selection-card elements
 * @csspart fieldset - The fieldset element
 * @csspart legend - The legend element
 * @csspart content - The content wrapper containing cards
 */

import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { AgSelectionCard } from '../../SelectionCard/core/_SelectionCard.js';

export type SelectionType = 'radio' | 'checkbox';
export type SelectionCardGroupTheme = 'success' | 'info' | 'error' | 'warning' | 'monochrome' | '';

export interface SelectionChangeEventDetail {
  /** The value of the card that triggered the change */
  value: string;
  /** Whether the card is now selected */
  checked: boolean;
  /** All currently selected values */
  selectedValues: string[];
}

export type SelectionChangeEvent = CustomEvent<SelectionChangeEventDetail>;

export interface SelectionCardGroupProps {
  /** Selection mode: 'radio' (single) or 'checkbox' (multiple) */
  type: SelectionType;
  /** Name attribute for the input elements */
  name: string;
  /** Legend text for the fieldset (accessibility) */
  legend?: string;
  /** Visually hide the legend while keeping it accessible */
  legendHidden?: boolean;
  /** Theme variant for cards */
  theme?: SelectionCardGroupTheme;
  /** Controlled value for radio mode */
  value?: string;
  /** Controlled values for checkbox mode */
  values?: string[];
  /** Disable all cards in the group */
  disabled?: boolean;
  /** Callback for selection changes */
  onSelectionChange?: (event: SelectionChangeEvent) => void;
}

export class AgSelectionCardGroup extends LitElement implements SelectionCardGroupProps {
  static override styles = css`
    :host {
      display: block;
    }

    .selection-card-group {
      border: 0;
      padding: 0;
      margin: 0;
      min-inline-size: auto;
    }

    .selection-card-group__legend {
      font-weight: 600;
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
      padding: 0;
      margin-block-end: var(--ag-space-4);
    }

    .selection-card-group__legend--hidden {
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

    .selection-card-group__content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: var(--ag-selection-card-group-gap, var(--ag-space-4));
    }
  `;

  @property({ type: String, reflect: true })
  declare type: SelectionType;

  @property({ type: String, reflect: true })
  declare name: string;

  @property({ type: String })
  declare legend: string;

  @property({ type: Boolean, attribute: 'legend-hidden' })
  declare legendHidden: boolean;

  @property({ type: String, reflect: true })
  declare theme: SelectionCardGroupTheme;

  @property({ type: String })
  declare value: string;

  @property({ type: Array })
  declare values: string[];

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @property({ attribute: false })
  declare onSelectionChange: ((event: SelectionChangeEvent) => void) | undefined;

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
    this.addEventListener('selection-card-change', this._handleCardChange as EventListener);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('selection-card-change', this._handleCardChange as EventListener);
    this.removeEventListener('keydown', this._handleKeyDown);
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // Sync props to child cards
    if (
      changedProperties.has('type') ||
      changedProperties.has('name') ||
      changedProperties.has('theme') ||
      changedProperties.has('disabled') ||
      changedProperties.has('value') ||
      changedProperties.has('values') ||
      changedProperties.has('_internalSelectedValues')
    ) {
      this._syncChildCards();
    }
  }

  override firstUpdated() {
    this._syncChildCards();
  }

  private _getCards(): AgSelectionCard[] {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return [];

    return slot
      .assignedElements({ flatten: true })
      .filter((el): el is AgSelectionCard => el.tagName.toLowerCase() === 'ag-selection-card');
  }

  private _syncChildCards() {
    const cards = this._getCards();
    const selectedValues = this._getSelectedValues();

    cards.forEach((card) => {
      card._type = this.type;
      card._name = this.name;
      card._theme = this.theme;
      card.checked = selectedValues.includes(card.value);
      if (this.disabled) {
        card.disabled = true;
      }
    });
  }

  private _handleCardChange = (e: CustomEvent<{ value: string; checked: boolean }>) => {
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
    const changeEvent = new CustomEvent<SelectionChangeEventDetail>('selection-change', {
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
    const cards = this._getCards().filter((card) => !card.disabled);
    if (cards.length === 0) return;

    // Find currently focused card (check shadowRoot for focus)
    const focusedCard = cards.find(card =>
      card.shadowRoot?.activeElement || card === document.activeElement
    );
    const currentIndex = focusedCard ? cards.indexOf(focusedCard) : -1;

    let nextIndex: number | null = null;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % cards.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        nextIndex = currentIndex === -1 ? cards.length - 1 : (currentIndex - 1 + cards.length) % cards.length;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = cards.length - 1;
        break;
    }

    if (nextIndex !== null) {
      const nextCard = cards[nextIndex];
      nextCard.focus();

      // For radio groups, arrow keys also select
      if (this.type === 'radio') {
        this._handleCardChange(new CustomEvent('selection-card-change', {
          detail: { value: nextCard.value, checked: true },
        }));
      }
    }
  };

  private _handleSlotChange() {
    this._syncChildCards();
  }

  override render() {
    const legendClasses = [
      'selection-card-group__legend',
      this.legendHidden ? 'selection-card-group__legend--hidden' : '',
    ].filter(Boolean).join(' ');

    return html`
      <fieldset
        class="selection-card-group"
        part="fieldset"
        role="${this.type === 'radio' ? 'radiogroup' : 'group'}"
        aria-disabled="${this.disabled ? 'true' : 'false'}"
      >
        ${this.legend
          ? html`<legend class="${legendClasses}" part="legend">${this.legend}</legend>`
          : nothing}
        <div class="selection-card-group__content" part="content">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </fieldset>
    `;
  }
}
