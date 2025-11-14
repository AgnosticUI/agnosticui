/**
 * AgnosticUI v2 Combobox - Phase 1 MVP
 *
 * An accessible autocomplete widget combining text input with filterable dropdown list.
 * Follows W3C ARIA APG combobox pattern with aria-activedescendant focus management.
 *
 * Phase 1 Features:
 * - Single-select mode
 * - Keyboard navigation (arrows, enter, escape)
 * - Filtering (startsWith, contains)
 * - Screen reader announcements
 * - Integration with Input component
 *
 * Version: 2.0.0-dev
 */

import { LitElement, html, css, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { generateUniqueId } from '../../../utils/unique-id';
import '../../shared/CloseButton/CloseButton.js';
import '../../Checkbox/core/Checkbox.js';
import '../../Tag/core/Tag.js';

// Event interfaces
export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
  icon?: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface ComboboxChangeEventDetail {
  value: string | string[];
  option: ComboboxOption | null;
}
export type ComboboxChangeEvent = CustomEvent<ComboboxChangeEventDetail>;

export interface ComboboxSelectEventDetail {
  option: ComboboxOption;
  value: string | string[];
}
export type ComboboxSelectEvent = CustomEvent<ComboboxSelectEventDetail>;

export interface ComboboxSearchEventDetail {
  searchTerm: string;
}
export type ComboboxSearchEvent = CustomEvent<ComboboxSearchEventDetail>;

export interface ComboboxOpenEventDetail {
  open: boolean;
}
export type ComboboxOpenEvent = CustomEvent<ComboboxOpenEventDetail>;

export interface ComboboxCloseEventDetail {
  open: boolean;
}
export type ComboboxCloseEvent = CustomEvent<ComboboxCloseEventDetail>;

// Filter mode type
export type ComboboxFilterMode = 'startsWith' | 'contains' | 'none';

// Props interface
export interface ComboboxProps {
  // Data
  options: ComboboxOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  placeholder?: string;

  // Label & Accessibility
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string | null;
  labelledBy?: string;
  helpText?: string;
  errorText?: string;
  id?: string;

  // Behavior
  autocomplete?: 'list' | 'none';
  filterMode?: 'startsWith' | 'contains' | 'none';
  clearable?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;

  // UI Configuration
  size?: 'small' | 'default' | 'large';
  maxVisibleOptions?: number;
  closeOnSelect?: boolean;
  variant?: 'default' | 'monochrome';

  // Loading
  loading?: boolean;
  loadingText?: string;
  noResultsText?: string;

  // Callbacks
  onChange?: (event: ComboboxChangeEvent) => void;
  onSelect?: (event: ComboboxSelectEvent) => void;
  onSearch?: (event: ComboboxSearchEvent) => void;
  onOpen?: (event: ComboboxOpenEvent) => void;
  onClose?: (event: ComboboxCloseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

/**
 * @element ag-combobox
 * @fires {ComboboxChangeEvent} change - Fired when value changes
 * @fires {ComboboxSelectEvent} select - Fired when option is selected
 * @fires {ComboboxSearchEvent} search - Fired when search term changes
 * @fires {ComboboxOpenEvent} open - Fired when listbox opens
 * @fires {ComboboxCloseEvent} close - Fired when listbox closes
 *
 * @csspart ag-combobox-wrapper - Main wrapper element
 * @csspart ag-combobox-label - Label element
 * @csspart ag-combobox-input-wrapper - Input wrapper element
 * @csspart ag-combobox-input - Input element
 * @csspart ag-combobox-toggle-button - Dropdown toggle button
 * @csspart ag-combobox-listbox - Listbox dropdown element
 * @csspart ag-combobox-option - Individual option elements
 * @csspart ag-combobox-loading - Loading indicator element
 * @csspart ag-combobox-no-results - No results message element
 * @csspart ag-combobox-help-text - Help text element
 * @csspart ag-combobox-error-message - Error message element
 */
export class AgCombobox extends LitElement implements ComboboxProps {
  static styles = css`
    :host {
      display: block;
      position: relative;
      --combobox-min-width: 200px;
      --combobox-max-width: 100%;
      --combobox-listbox-max-height: 300px;
      --combobox-option-padding: var(--ag-space-3) var(--ag-space-4);
      --combobox-option-selected-bg: var(--ag-blue-100);
      --combobox-option-hover-bg: var(--ag-background-tertiary);
      --combobox-option-focus-bg: var(--ag-blue-50);
      --combobox-toggle-size: var(--ag-space-6);
    }

    .combobox-wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-2);
    }

    /* Label */
    .combobox-label {
      display: block;
      font-size: var(--ag-font-size-base);
      font-weight: var(--ag-font-weight-medium);
      color: var(--ag-text-primary);
      margin-bottom: var(--ag-space-1);
    }

    .combobox-label--hidden {
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

    /* Input wrapper */
    .combobox-input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--ag-space-1);
      padding: var(--ag-space-3) var(--ag-space-4);
      padding-right: calc(var(--combobox-toggle-size) * 2 + var(--ag-space-2) * 3);
      font-size: var(--ag-font-size-base);
      font-family: var(--ag-font-family-base);
      line-height: var(--ag-line-height-base);
      color: var(--ag-text-primary);
      background-color: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      transition: border-color var(--ag-motion-fast) ease-in-out;
      cursor: text;
    }

    .combobox-input-wrapper:focus-within {
      border-color: var(--ag-primary);
      box-shadow: 0 0 0 var(--ag-focus-ring-width) var(--ag-focus-ring-color);
    }

    /* Input */
    .combobox-input {
      flex: 1;
      min-width: 50px; /* Ensure input has a minimum width to be usable */
      font-size: var(--ag-font-size-base);
      font-family: var(--ag-font-family-base);
      line-height: var(--ag-line-height-base);
      color: var(--ag-text-primary);
      background-color: transparent;
      border: none;
      outline: none;
      padding: 0;
    }

    .combobox-input::placeholder {
      color: var(--ag-text-tertiary);
    }

    .combobox-input:disabled {
      opacity: var(--ag-opacity-disabled);
      cursor: not-allowed;
      background-color: var(--ag-background-secondary);
    }

    /* Invalid state */
    :host([invalid]) .combobox-input-wrapper {
      border-color: var(--ag-danger);
    }

    :host([invalid]) .combobox-input-wrapper:focus-within {
      box-shadow: 0 0 0 var(--ag-focus-ring-width) var(--ag-danger-light);
    }

    /* Toggle button */
    .combobox-toggle-button {
      position: absolute;
      right: var(--ag-space-2);
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--combobox-toggle-size);
      height: var(--combobox-toggle-size);
      padding: 0;
      background: transparent;
      border: none;
      border-radius: var(--ag-radius-sm);
      cursor: pointer;
      color: var(--ag-text-secondary);
      transition: background-color var(--ag-motion-fast) ease-in-out;
    }

    .combobox-toggle-button:hover:not(:disabled) {
      background-color: var(--ag-background-tertiary);
      color: var(--ag-text-primary);
    }

    .combobox-toggle-button:focus {
      outline: var(--ag-focus-ring-width) solid var(--ag-focus-ring-color);
      outline-offset: var(--ag-focus-ring-offset);
    }

    .combobox-toggle-button:disabled {
      opacity: var(--ag-opacity-disabled);
      cursor: not-allowed;
    }

    .combobox-clear-wrapper {
      position: absolute;
      right: calc(var(--ag-space-2) * 2 + var(--combobox-toggle-size));
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      /* The close button itself has padding, so we might not need width/height here */
    }

    /* This wrapper is no longer needed for positioning, but can be kept for semantics if we want */
    .combobox-tags-wrapper {
      display: contents; /* This makes the wrapper have no effect on layout */
    }

    .combobox-tags-wrapper ag-tag {
      pointer-events: auto; /* Re-enable clicks for tags */
    }

    .combobox-toggle-icon {
      width: var(--ag-space-4);
      height: var(--ag-space-4);
      transition: transform var(--ag-motion-fast) ease-in-out;
    }

    :host([open]) .combobox-toggle-icon {
      transform: rotate(180deg);
    }

    /* Listbox */
    .combobox-listbox {
      position: absolute;
      top: calc(100% + var(--ag-space-1));
      left: 0;
      right: 0;
      max-height: var(--combobox-listbox-max-height);
      overflow-y: auto;
      background-color: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      box-shadow: var(--ag-shadow-lg);
      z-index: var(--ag-z-index-dropdown);
      opacity: 0;
      transform: translateY(-8px);
      transition:
        opacity var(--ag-motion-fast) ease-in-out,
        transform var(--ag-motion-fast) ease-in-out;
      pointer-events: none;
    }

    :host([open]) .combobox-listbox {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    /* Option */
    .combobox-option {
      padding: var(--combobox-option-padding);
      cursor: pointer;
      color: var(--ag-text-primary);
      transition: background-color var(--ag-motion-fast) ease-in-out;
      position: relative;
    }

    /* Checkmark for selected option in single-select mode - drawn with ::after */
    .combobox-option[aria-selected="true"]::after {
      content: '';
      position: absolute;
      right: var(--ag-space-6);
      top: 50%;
      display: block;
      opacity: 1;
      transform: rotate(40deg) translateY(-50%);
      transform-origin: center center;
      transition: all var(--ag-motion-fast) ease-in-out;
    }

    /* Hide checkmark in multi-select mode since we use checkboxes */
    :host([multiple]) .combobox-option[aria-selected="true"]::after {
      display: none;
    }

    .combobox-option:hover:not([aria-disabled="true"]):not([aria-selected="true"]),
    .combobox-option.option-active:not([aria-disabled="true"]):not([aria-selected="true"]) {
      background-color: var(--combobox-option-hover-bg);
      color: var(--ag-text-primary);
    }

    .combobox-option[aria-selected="true"] {
      background-color: var(--ag-primary);
      color: var(--ag-white);
    }

    .combobox-option[aria-selected="true"]:hover,
    .combobox-option.option-active[aria-selected="true"] {
      background-color: var(--ag-primary-dark);
    }

    /* For multi-select, we want the checkbox to be visible even when the option is selected */
    .combobox-option[aria-selected="true"] ag-checkbox {
      color: var(--ag-white);
    }

    :host([variant="monochrome"]) .combobox-option[aria-selected="true"] {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* hover/active + selected gets --ag-background-secondary-inverted affordance */
    :host([variant="monochrome"]) .combobox-option[aria-selected="true"]:hover,
    :host([variant="monochrome"]) .combobox-option.option-active[aria-selected="true"] {
      background-color: var(--ag-background-secondary-inverted);
    }

    :host([variant="monochrome"]) .combobox-option[aria-selected="true"] ag-checkbox {
      color: var(--ag-white);
      color: var(--ag-text-primary-inverted);
    }

    /* Checkmark color for monochrome variant */
    :host([variant="monochrome"]) .combobox-option[aria-selected="true"]::after {
      border-right-color: var(--ag-text-primary-inverted);
      border-bottom-color: var(--ag-text-primary-inverted);
    }

    .combobox-option[aria-disabled="true"] {
      opacity: var(--ag-opacity-disabled);
      cursor: not-allowed;
    }

    /* Loading & Empty states */
    .combobox-loading,
    .combobox-no-results {
      padding: var(--ag-space-4);
      text-align: center;
      color: var(--ag-text-secondary);
      font-size: var(--ag-font-size-sm);
    }

    /* Help text */
    .combobox-help-text {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
    }

    /* Error message */
    .combobox-error-message {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-danger);
    }

    /* Screen reader only announcer */
    .combobox-sr-announcer {
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

    /* Size variants */
    :host([size="small"]) .combobox-input-wrapper {
      padding: var(--ag-space-2) var(--ag-space-3);
      padding-right: calc(var(--combobox-toggle-size) * 2 + var(--ag-space-2) * 3);
    }

    :host([size="small"]) .combobox-input {
      font-size: var(--ag-font-size-sm);
    }

    :host([size="small"]) {
      --combobox-option-padding: var(--ag-space-2) var(--ag-space-3);
      --combobox-toggle-size: var(--ag-space-5);
    }

    /* Checkmark size for small */
    :host([size="small"]) .combobox-option[aria-selected="true"]::after {
      width: 4px;
      height: 8px;
      border-right: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    /* Default/medium checkmark size */
    .combobox-option[aria-selected="true"]::after {
      width: 4px;
      height: 9px;
      border-right: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    :host([size="large"]) .combobox-input-wrapper {
      padding: var(--ag-space-4) var(--ag-space-5);
      padding-right: calc(var(--combobox-toggle-size) * 2 + var(--ag-space-2) * 3);
    }

    :host([size="large"]) .combobox-input {
      font-size: var(--ag-font-size-lg);
    }

    :host([size="large"]) {
      --combobox-option-padding: var(--ag-space-4) var(--ag-space-5);
      --combobox-toggle-size: var(--ag-space-7);
    }

    /* Checkmark size for large */
    :host([size="large"]) .combobox-option[aria-selected="true"]::after {
      width: 5px;
      height: 10px;
      border-right: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      .combobox-input,
      .combobox-toggle-button,
      .combobox-toggle-icon,
      .combobox-option,
      .combobox-option::after,
      .combobox-listbox {
        transition: none !important;
        animation: none !important;
      }
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      .combobox-option[aria-selected="true"] {
        outline: 2px solid CanvasText;
        outline-offset: -2px;
      }

      .combobox-option:hover {
        outline: 2px solid Highlight;
      }

      .combobox-toggle-button {
        border: 1px solid ButtonText;
      }
    }
  `;

  // Props
  @property({ type: Array })
  options: ComboboxOption[] = [];

  private _value: string | string[] = '';

  @property({ type: [String, Array] })
  get value(): string | string[] {
    return this._value;
  }

  set value(val: string | string[]) {
    const oldValue = this._value;
    if (this.multiple) {
      this._value = Array.isArray(val) ? val : (val ? val.split(' ') : []);
    } else {
      this._value = Array.isArray(val) ? val.join(' ') : val;
    }
    this.requestUpdate('value', oldValue);
  }

  @property({ type: [String, Array], attribute: 'default-value' })
  defaultValue?: string | string[];

  @property({ type: String })
  placeholder = '';

  @property({ type: String })
  label?: string;

  @property({ type: Boolean, attribute: 'label-hidden' })
  labelHidden = false;

  @property({ type: Boolean, attribute: 'no-label' })
  noLabel = false;

  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string | null = null;

  @property({ type: String, attribute: 'labelled-by' })
  labelledBy?: string;

  @property({ type: String, attribute: 'help-text' })
  helpText?: string;

  @property({ type: String, attribute: 'error-text' })
  errorText?: string;

  @property({ type: String })
  id = '';

  @property({ type: String })
  autocomplete: 'list' | 'none' = 'list';

  @property({ type: String, attribute: 'filter-mode' })
  filterMode: 'startsWith' | 'contains' | 'none' = 'startsWith';

  @property({ type: Boolean })
  clearable = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean })
  readonly = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: String, reflect: true })
  size: 'small' | 'default' | 'large' = 'default';

  @property({ type: String, reflect: true })
  variant: 'default' | 'monochrome' = 'default';

  @property({ type: Number, attribute: 'max-visible-options' })
  maxVisibleOptions = 10;

  @property({ type: Boolean })
  closeOnSelect = true;

  @property({ type: Boolean })
  multiple = false;

  @property({ type: Number, attribute: 'max-options-visible' })
  maxOptionsVisible = 3;

  @property({ type: Boolean })
  loading = false;

  @property({ type: String, attribute: 'loading-text' })
  loadingText = 'Loading...';

  @property({ type: String, attribute: 'no-results-text' })
  noResultsText = 'No results found';

  // Event callbacks
  @property({ attribute: false })
  onChange?: (event: ComboboxChangeEvent) => void;

  @property({ attribute: false })
  onSelect?: (event: ComboboxSelectEvent) => void;

  @property({ attribute: false })
  onSearch?: (event: ComboboxSearchEvent) => void;

  @property({ attribute: false })
  onOpen?: (event: ComboboxOpenEvent) => void;

  @property({ attribute: false })
  onClose?: (event: ComboboxCloseEvent) => void;

  @property({ attribute: false })
  onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  onBlur?: (event: FocusEvent) => void;

  // Internal state
  @state()
  private _open = false;

  @state()
  private _searchTerm = '';

  @state()
  private _filteredOptions: ComboboxOption[] = [];

  @state()
  private _activeIndex = -1;

  @state()
  private _selectedOptions: ComboboxOption[] = [];

  @state()
  private _displayLabel = '';

  // Element queries
  @query('.combobox-input')
  private _inputElement?: HTMLInputElement;

  @query('.combobox-listbox')
  private _listboxElement?: HTMLElement;

  @query('.combobox-sr-announcer')
  private _srAnnouncer?: HTMLElement;

  // Generated IDs
  private _comboboxId = '';
  private _listboxId = '';
  private _labelId = '';
  private _helpTextId = '';
  private _errorTextId = '';

  // Click outside handler
  private _clickOutsideHandler?: (event: MouseEvent) => void;

  // Flag to prevent reopening after selection
  private _justSelected = false;

  connectedCallback() {
    super.connectedCallback();
    this._comboboxId = this.id || generateUniqueId('combobox');
    this._listboxId = `${this._comboboxId}-listbox`;
    this._labelId = `${this._comboboxId}-label`;
    this._helpTextId = `${this._comboboxId}-help`;
    this._errorTextId = `${this._comboboxId}-error`;

    // Setup click outside handler
    this._clickOutsideHandler = (event: MouseEvent) => {
      if (!this._open) return;

      const path = event.composedPath();
      const clickedInside = path.includes(this);

      if (!clickedInside) {
        this.close();
      }
    };
    document.addEventListener('click', this._clickOutsideHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._clickOutsideHandler) {
      document.removeEventListener('click', this._clickOutsideHandler);
    }
  }

  private _isDefaultValueInitialized = false;

  willUpdate(changedProperties: Map<string, unknown>) {
    super.willUpdate(changedProperties);

    // Initialize from defaultValue when options are ready. This is crucial because
    // `options` and `defaultValue` are often set after the component is connected.
    if (!this._isDefaultValueInitialized && this.defaultValue && this.options.length > 0) {
      const initialValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue];
      this._selectedOptions = this.options.filter(opt => initialValues.includes(opt.value));
      this._selectionChanged(); // This updates `this.value`
      this._isDefaultValueInitialized = true;
      return; // Prevent the `changedProperties.has('value')` block from running in the same cycle
    }

    // Handle external changes to the `value` property
    if (changedProperties.has('value')) {
      // Ensure we don't overwrite the just-set default value in the same update cycle,
      // or if the value is being cleared externally.
      if (this._isDefaultValueInitialized || !this.defaultValue) {
        const newValue = this.value;
        const newValuesArray = Array.isArray(newValue) ? newValue : (newValue ? [newValue] : []);
        this._selectedOptions = this.options.filter(opt => newValuesArray.includes(opt.value));
        this._selectionChanged();
      }
    }

    // Sync invalid state from errorText
    if (changedProperties.has('errorText')) {
      this.invalid = !!this.errorText;
    }
  }

  // Public methods
  focus() {
    this._inputElement?.focus();
  }

  blur() {
    this._inputElement?.blur();
  }

  open() {
    if (this.disabled || this.readonly || this._open) return;

    this._open = true;
    this._filterOptions();

    // Reflect to host attribute
    this.setAttribute('open', '');

    // Dispatch open event
    const openEvent = new CustomEvent<ComboboxOpenEventDetail>('open', {
      detail: { open: true },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(openEvent);
    this.onOpen?.(openEvent);

    // Update ARIA
    this._inputElement?.setAttribute('aria-expanded', 'true');
  }

  close() {
    if (!this._open) return;

    this._open = false;
    this._activeIndex = -1;

    // When closing, ensure the input value is valid.
    // If the user was typing a search, but closes without selecting, revert the input.
    if (!this.multiple) {
      const isSearchTermAValidOptionLabel = this.options.some(opt => opt.label === this._searchTerm);
      if (!isSearchTermAValidOptionLabel) {
        const selectedOption = this._selectedOptions[0]; // For single select, there's only one
        if (selectedOption) {
          this._searchTerm = selectedOption.label;
        } else {
          this._searchTerm = '';
        }
      }
    } else {
      // In multiple mode, searchTerm should always reflect the displayLabel (summary or tags)
      this._searchTerm = this._displayLabel;
    }

    // Remove from host attribute
    this.removeAttribute('open');

    // Dispatch close event
    const closeEvent = new CustomEvent<ComboboxCloseEventDetail>('close', {
      detail: { open: false },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(closeEvent);
    this.onClose?.(closeEvent);

    // Update ARIA
    this._inputElement?.setAttribute('aria-expanded', 'false');
    this._inputElement?.removeAttribute('aria-activedescendant');
  }

  toggle() {
    if (this._open) {
      this.close();
    } else {
      this.open();
    }
  }

  selectOption(optionOrValue: ComboboxOption | string) {
    let option: ComboboxOption | undefined;

    if (typeof optionOrValue === 'string') {
      option = this.options.find(opt => opt.value === optionOrValue);
      if (!option) return;
    } else {
      option = optionOrValue;
    }

    if (option.disabled) return;

    if (this.multiple) {
      const index = this._selectedOptions.findIndex(o => o.value === option.value);
      if (index > -1) {
        // Option is already selected, remove it
        this._selectedOptions = this._selectedOptions.filter(o => o.value !== option.value);
      } else {
        // Option is not selected, add it
        this._selectedOptions = [...this._selectedOptions, option];
      }
      this._selectionChanged(); // Update value, displayLabel, searchTerm
      // In multiple mode, we don't close the listbox automatically
    } else {
      // Single select mode
      this._selectedOptions = [option];
      this._selectionChanged(); // Update value, displayLabel, searchTerm

      // Close if configured
      if (this.closeOnSelect) {
        this.close();
      }
    }

    // Force-update the input value in the DOM to prevent race conditions
    if (this._inputElement) {
      this._inputElement.value = this._searchTerm; // Use _searchTerm which is _displayLabel
    }

    // Dispatch select event
    const selectEvent = new CustomEvent<ComboboxSelectEventDetail>('select', {
      detail: {
        option: option,
        value: option.value
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(selectEvent);
    this.onSelect?.(selectEvent);

    // Dispatch change event (value is already updated by _selectionChanged)
    const changeEvent = new CustomEvent<ComboboxChangeEventDetail>('change', {
      detail: {
        value: this.value, // Use the updated value
        option: option
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changeEvent);
    this.onChange?.(changeEvent);

    // Set flag to prevent reopening on focus
    this._justSelected = true;

    // Return focus to input
    this._inputElement?.focus();

    // Defer setting cursor position until after the DOM has updated
    requestAnimationFrame(() => {
      const input = this._inputElement;
      if (input) {
        const len = input.value.length;
        input.setSelectionRange(len, len);
      }
    });

    // Clear flag on next animation frame
    setTimeout(() => {
      this._justSelected = false;
    }, 100);
  }

  clearSelection() {
    this._selectedOptions = [];
    this._selectionChanged();
    this._activeIndex = -1;

    // Dispatch change event
    const changeEvent = new CustomEvent<ComboboxChangeEventDetail>('change', {
      detail: {
        value: this.value,
        option: null
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changeEvent);
    this.onChange?.(changeEvent);
  }

  // Private methods
  private _selectionChanged() {
    if (this.multiple) {
      this.value = this._selectedOptions.map(opt => opt.value);
      // In multi-select, we clear the search term after each selection
      // to allow for the next search.
      this._searchTerm = '';
    } else {
      const selectedOption = this._selectedOptions[0];
      this.value = selectedOption?.value ?? '';
      this._displayLabel = selectedOption?.label ?? '';
      // In single-select, the search term should reflect the selected item's label.
      this._searchTerm = this._displayLabel;
    }
  }

  private _renderSelectedTags() {
    if (!this.multiple || this._selectedOptions.length === 0) {
      return nothing;
    }

    const tagsToRender = this._selectedOptions.slice(0, this.maxOptionsVisible);
    const overflowCount = this._selectedOptions.length - this.maxOptionsVisible;

    return html`
      <div class="combobox-tags-wrapper" part="ag-combobox-tags-wrapper">
        ${tagsToRender.map(option => html`
          <ag-tag
            removable
            .value=${option.value}
            @tag-remove=${() => this._handleTagRemove(option)}
          >
            ${option.label}
          </ag-tag>
        `)}
        ${overflowCount > 0 ? html`
          <ag-tag>+${overflowCount}</ag-tag>
        ` : nothing}
      </div>
    `;
  }

  private _handleTagRemove(optionToRemove: ComboboxOption) {
    this._selectedOptions = this._selectedOptions.filter(option => option.value !== optionToRemove.value);
    this._selectionChanged();
    // Re-focus the input after removing a tag
    this._inputElement?.focus();
  }
  private _filterOptions() {
    const term = this._searchTerm.trim();

    // If the search term is the label of the selected option, the user is not
    // actively searching. Show all options so they can pick a new one.
    if (!this.multiple && this._selectedOptions.length > 0 && term === this._selectedOptions[0].label) {
      this._filteredOptions = this.options.slice(0, this.maxVisibleOptions);
      // Only auto-focus the selected item if activeIndex is not explicitly -1
      // (which happens when opening via mouse click for "fresh start" UX)
      if (this._activeIndex !== -1) {
        this._activeIndex = this.options.findIndex(opt => opt.value === this._selectedOptions[0]?.value);
      }
      return;
    }

    if (!term || this.filterMode === 'none') {
      this._filteredOptions = this.options.slice(0, this.maxVisibleOptions);
      return;
    }

    let filtered: ComboboxOption[];

    switch (this.filterMode) {
      case 'startsWith':
        filtered = this._filterStartsWith(this.options, term);
        break;
      case 'contains':
        filtered = this._filterContains(this.options, term);
        break;
      default:
        filtered = this.options;
    }

    this._filteredOptions = filtered.slice(0, this.maxVisibleOptions);

    // Reset active index when filter changes
    if (this._filteredOptions.length > 0) {
      this._activeIndex = 0;
      this._updateAriaActivedescendant();
      this._announceOption(this._filteredOptions[0]);
    } else {
      this._activeIndex = -1;
      this._announceNoResults();
    }

    // Dispatch search event
    const searchEvent = new CustomEvent<ComboboxSearchEventDetail>('search', {
      detail: { searchTerm: term },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(searchEvent);
    this.onSearch?.(searchEvent);
  }

  private _filterStartsWith(options: ComboboxOption[], term: string): ComboboxOption[] {
    const lowerTerm = term.toLowerCase();
    return options.filter(opt => opt.label.toLowerCase().startsWith(lowerTerm));
  }

  private _filterContains(options: ComboboxOption[], term: string): ComboboxOption[] {
    const lowerTerm = term.toLowerCase();
    return options.filter(opt => opt.label.toLowerCase().includes(lowerTerm));
  }

  private _handleInputChange(e: Event) {
    const newValue = (e.target as HTMLInputElement).value;

    // Don't process input changes immediately after selection
    if (this._justSelected) {
      return;
    }

    // Only update if value actually changed
    if (newValue === this._searchTerm) {
      return;
    }
    
    this._searchTerm = newValue;

    // When typing, we are no longer on a "selected" item, so clear selections
    // This is for single-select mode where typing implies searching for a new item.
    if (!this.multiple) {
      this._selectedOptions = [];
      this.value = '';
    }

    // Open listbox if closed when user types
    if (!this._open) {
      this.open();
    }

    this._filterOptions();
  }

  private _handleInputKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!this._open) {
          this.open();
          // Set to first option when opening with ArrowDown
          if (this._filteredOptions.length > 0) {
            this._activeIndex = 0;
            this._updateAriaActivedescendant();
            this._scrollOptionIntoView(this._activeIndex);
            this._announceOption(this._filteredOptions[this._activeIndex]);
          }
        } else {
          this._updateActiveIndex(1);
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (!this._open) {
          this.open();
          // Set to last option
          if (this._filteredOptions.length > 0) {
            this._activeIndex = this._filteredOptions.length - 1;
            this._updateAriaActivedescendant();
            this._scrollOptionIntoView(this._activeIndex);
            this._announceOption(this._filteredOptions[this._activeIndex]);
          }
        } else {
          this._updateActiveIndex(-1);
        }
        break;

      case 'Enter':
        e.preventDefault();
        if (this._open && this._activeIndex >= 0 && this._activeIndex < this._filteredOptions.length) {
          this.selectOption(this._filteredOptions[this._activeIndex]);
        }
        break;

      case 'Escape':
        e.preventDefault();
        if (this._open) {
          this.close();
        } else if (this._searchTerm) {
          this.clearSelection();
        }
        break;

      case 'Backspace':
        // In multiple mode, if input is empty, remove the last selected tag
        if (this.multiple && this._searchTerm === '' && this._selectedOptions.length > 0) {
          e.preventDefault();
          const lastOption = this._selectedOptions[this._selectedOptions.length - 1];
          this._selectedOptions = this._selectedOptions.slice(0, -1);
          this._selectionChanged();

          // Dispatch change event
          const changeEvent = new CustomEvent<ComboboxChangeEventDetail>('change', {
            detail: {
              value: this.value,
              option: lastOption
            },
            bubbles: true,
            composed: true
          });
          this.dispatchEvent(changeEvent);
          this.onChange?.(changeEvent);
        }
        break;

      case 'Tab':
        // Close listbox on tab
        if (this._open) {
          this.close();
        }
        break;

      case 'Home':
        // Prevent default to move cursor in input
        e.preventDefault();
        if (this._inputElement) {
          this._inputElement.setSelectionRange(0, 0);
        }
        if (this._open && this._filteredOptions.length > 0) {
          this._activeIndex = 0;
          this._updateAriaActivedescendant();
          this._scrollOptionIntoView(this._activeIndex);
          this._announceOption(this._filteredOptions[this._activeIndex]);
        }
        break;

      case 'End':
        // Prevent default to move cursor in input
        e.preventDefault();
        if (this._inputElement) {
          const len = this._inputElement.value.length;
          this._inputElement.setSelectionRange(len, len);
        }
        if (this._open && this._filteredOptions.length > 0) {
          this._activeIndex = this._filteredOptions.length - 1;
          this._updateAriaActivedescendant();
          this._scrollOptionIntoView(this._activeIndex);
          this._announceOption(this._filteredOptions[this._activeIndex]);
        }
        break;
    }
  }

  private _handleInputFocus(e: FocusEvent) {
    // Don't reopen if we just selected an option
    if (this._justSelected) {
      this.onFocus?.(e);
      return;
    }
    
    // Open listbox on focus to show available options
    if (!this._open && !this.disabled && !this.readonly) {
      this.open();
    }
    
    this.onFocus?.(e);
  }

  private _handleInputBlur(e: FocusEvent) {
    this.onBlur?.(e);
  }

  private _handleInputClick() {
    if (!this._open) {
      // Reset active index for "fresh start" UX when opening via mouse
      // User will need to Arrow Down to activate first item
      this._activeIndex = -1;
      this.open();
    }
  }

  private _handleOptionClick(option: ComboboxOption, event: Event) {
    event.preventDefault();
    if (!option.disabled) {
      this.selectOption(option);
    }
  }

  private _handleToggleClick(event: MouseEvent) {
    event.preventDefault();
    this.toggle();
    this._inputElement?.focus();
  }

  private _handleClearClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.clearSelection();
    this._inputElement?.focus();
  }

  private _updateActiveIndex(delta: number) {
    if (this._filteredOptions.length === 0) return;

    let newIndex = this._activeIndex + delta;
    let attempts = 0;
    const maxAttempts = this._filteredOptions.length;

    // Keep moving in the direction until we find a non-disabled option or wrap around
    while (attempts < maxAttempts) {
      // Handle wrapping
      if (newIndex < 0) {
        newIndex = this._filteredOptions.length - 1;
      } else if (newIndex >= this._filteredOptions.length) {
        newIndex = 0;
      }

      // If we found a non-disabled option, use it
      if (!this._filteredOptions[newIndex].disabled) {
        break;
      }

      // Keep moving
      newIndex += delta;
      attempts++;
    }

    // Only update if we found a valid option
    if (attempts < maxAttempts && !this._filteredOptions[newIndex].disabled) {
      this._activeIndex = newIndex;
      this._updateAriaActivedescendant();
      this._scrollOptionIntoView(newIndex);
      this._announceOption(this._filteredOptions[newIndex]);
    }
  }

  private _updateAriaActivedescendant() {
    if (this._activeIndex >= 0 && this._activeIndex < this._filteredOptions.length) {
      const optionId = this._getOptionId(this._activeIndex);
      this._inputElement?.setAttribute('aria-activedescendant', optionId);
    } else {
      this._inputElement?.removeAttribute('aria-activedescendant');
    }
  }

  private _scrollOptionIntoView(index: number) {
    if (index < 0 || index >= this._filteredOptions.length) return;

    // Use requestAnimationFrame to ensure DOM is updated before scrolling
    requestAnimationFrame(() => {
      const optionId = this._getOptionId(index);
      const optionEl = this.shadowRoot?.getElementById(optionId);

      if (optionEl && this._listboxElement) {
        const listboxRect = this._listboxElement.getBoundingClientRect();
        const optionRect = optionEl.getBoundingClientRect();

        if (optionRect.bottom > listboxRect.bottom) {
          optionEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else if (optionRect.top < listboxRect.top) {
          optionEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    });
  }

  private _announceOption(option: ComboboxOption) {
    const activeIndex = this._filteredOptions.indexOf(option);
    const total = this._filteredOptions.length;
    const message = `${option.label}, ${activeIndex + 1} of ${total}`;

    if (this._srAnnouncer) {
      this._srAnnouncer.textContent = message;
    }
  }

  private _announceNoResults() {
    if (this._srAnnouncer) {
      this._srAnnouncer.textContent = this.noResultsText;
    }
  }

  private _getOptionId(index: number): string {
    return `${this._listboxId}-option-${index}`;
  }

  private _getDescribedBy(): string | undefined {
    const ids: string[] = [];
    if (this.helpText) ids.push(this._helpTextId);
    if (this.errorText) ids.push(this._errorTextId);
    return ids.length > 0 ? ids.join(' ') : undefined;
  }

  render() {
    const showLabel = !this.noLabel && this.label;
    const describedBy = this._getDescribedBy();

    return html`
      <div class="combobox-wrapper" part="ag-combobox-wrapper">
        ${showLabel ? html`
          <label
            id=${this._labelId}
            class="combobox-label ${this.labelHidden ? 'combobox-label--hidden' : ''}"
            part="ag-combobox-label"
            for=${this._comboboxId}
          >
            ${this.label}
          </label>
        ` : nothing}

        <div
          class="combobox-input-wrapper"
          part="ag-combobox-input-wrapper"
          @click=${() => this._inputElement?.focus()}
        >
          ${this.multiple ? this._renderSelectedTags() : nothing}
          <input
            id=${this._comboboxId}
            class="combobox-input"
            part="ag-combobox-input"
            type="text"
            role="combobox"
            aria-autocomplete=${this.autocomplete}
            aria-controls=${this._listboxId}
            aria-expanded=${this._open ? 'true' : 'false'}
            aria-haspopup="listbox"
            aria-disabled=${this.disabled ? 'true' : nothing}
            aria-labelledby=${this.labelledBy || (showLabel ? this._labelId : nothing)}
            aria-label=${this.ariaLabel || nothing}
            aria-describedby=${describedBy || nothing}
            aria-invalid=${this.invalid ? 'true' : 'false'}
            aria-required=${this.required ? 'true' : 'false'}
            .value=${this._searchTerm}
            placeholder=${this._selectedOptions.length > 0 && !this.multiple ? '' : this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @input=${this._handleInputChange}
            @keydown=${this._handleInputKeyDown}
            @focus=${this._handleInputFocus}
            @blur=${this._handleInputBlur}
            @click=${this._handleInputClick}
          />

          ${this.clearable && this._selectedOptions.length > 0 ? html`
            <div
              class="combobox-clear-wrapper"
              part="ag-combobox-clear-wrapper"
            >
              <ag-close-button
                size="sm"
                @close-button-click=${this._handleClearClick}
              ></ag-close-button>
            </div>
          ` : nothing}

          <button
            type="button"
            class="ag-combobox__toggle combobox-toggle-button"
            part="ag-combobox-toggle-button"
            aria-label="Toggle dropdown"
            tabindex="-1"
            ?disabled=${this.disabled}
            @click=${this._handleToggleClick}
          >
            <svg
              class="combobox-toggle-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <div
          id=${this._listboxId}
          class="combobox-listbox"
          part="ag-combobox-listbox"
          role="listbox"
          aria-label=${this.label ? `${this.label} suggestions` : 'Suggestions'}
          ?hidden=${!this._open}
        >
          ${this.loading ? html`
            <div class="ag-combobox__loading combobox-loading" part="ag-combobox-loading">
              ${this.loadingText}
            </div>
          ` : this._filteredOptions.length === 0 ? html`
            <div class="ag-combobox__no-results combobox-no-results" part="ag-combobox-no-results">
              ${this.noResultsText}
            </div>
          ` : html`
            ${this._filteredOptions.map((option, index) => html`
              <div
                id=${this._getOptionId(index)}
                class="combobox-option ${index === this._activeIndex ? 'option-active' : ''}"
                part="ag-combobox-option"
                role="option"
                aria-selected=${this._selectedOptions.some(o => o.value === option.value) ? 'true' : 'false'}
                aria-disabled=${option.disabled ? 'true' : 'false'}
                @click=${(e: MouseEvent) => this._handleOptionClick(option, e)}
              >
                ${this.multiple ? html`
                  <ag-checkbox
                    .checked=${this._selectedOptions.some(o => o.value === option.value)}
                    .size=${this.size === 'default' ? 'medium' : this.size}
                    .value=${option.value}
                    .name=${this._comboboxId}
                    .disabled=${option.disabled}
                    @change=${(e: CustomEvent) => {
                      e.stopPropagation(); // Prevent double-toggling from parent div click
                      this._handleOptionClick(option, e);
                    }}
                  >
                    ${option.label}
                  </ag-checkbox>
                ` : html`
                  ${option.label}
                `}
              </div>
            `)}
          `}
        </div>

        ${this.helpText ? html`
          <div
            id=${this._helpTextId}
            class="ag-combobox__help-text combobox-help-text"
            part="ag-combobox-help-text"
          >
            ${this.helpText}
          </div>
        ` : nothing}

        ${this.errorText ? html`
          <div
            id=${this._errorTextId}
            class="ag-combobox__error-text combobox-error-message"
            part="ag-combobox-error-message"
          >
            ${this.errorText}
          </div>
        ` : nothing}

        <div
          class="combobox-sr-announcer"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        ></div>
      </div>
    `;
  }
}
