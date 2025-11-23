/**
 * AgnosticUI v2 FormControl - Core Implementation
 *
 * A layout and accessibility wrapper for form controls providing:
 * - Label, helper text, error text presentation
 * - ARIA wiring (aria-invalid, aria-describedby, required)
 * - Shadow DOM-safe programmatic control association
 *
 * Version: 2.0.0-dev
 */

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { generateUniqueId } from '../../../utils/unique-id';

/**
 * Interface for slotted controls with FormControl support.
 * Controls must implement this interface to work with FormControl.
 */
export interface FormControlCompatible extends HTMLElement {
  /** When false, control should suppress internal label/helper/error */
  standalone: boolean;
  /** Exposes the focusable element for ARIA association */
  controlElement: HTMLElement | null;
}

/**
 * Interface for AgFormControl properties.
 *
 * @property {'vertical' | 'horizontal'} align - Layout orientation
 * @property {boolean} invalid - Whether the control is in an invalid state
 * @property {boolean} required - Whether the control is required
 */
export interface FormControlProps {
  /** Layout orientation: 'vertical' (default) or 'horizontal' */
  align?: 'vertical' | 'horizontal';
  /** Whether the control is in an invalid state (shows error, sets aria-invalid) */
  invalid?: boolean;
  /** Whether the control is required (shows indicator, sets required attribute) */
  required?: boolean;
}

/**
 * AgFormControl - Layout + accessibility wrapper for form controls.
 *
 * This component provides:
 * - Label, helper text, and error text presentation
 * - Vertical or horizontal layout
 * - ARIA attributes for accessibility (aria-invalid, aria-describedby, required)
 * - Shadow DOM-safe programmatic control association
 *
 * IMPORTANT: This component handles PRESENTATION and ACCESSIBILITY only.
 * It does NOT manage form state (touched, dirty, pristine, validation).
 * All stateful form logic should be handled by external form libraries.
 *
 * Slot Model:
 * - label: Label content (typically <ag-label>)
 * - control: The form control element (e.g., <ag-input>, <ag-checkbox>)
 * - helper: Helper text content
 * - error: Error message content (only shown when invalid=true)
 *
 * @element ag-form-control
 * @slot label - Label content (typically <ag-label>)
 * @slot control - The form control element
 * @slot helper - Helper text content
 * @slot error - Error message content
 * @csspart ag-form-control - The outer wrapper
 * @csspart ag-form-control-label - The label container
 * @csspart ag-form-control-helper - The helper text container
 * @csspart ag-form-control-error - The error text container
 */
export class AgFormControl extends LitElement implements FormControlProps {
  static styles = css`
    :host {
      display: block;
    }

    .ag-form-control {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-2);
    }

    :host([align="horizontal"]) .ag-form-control {
      flex-direction: row;
      align-items: center;
      gap: var(--ag-space-3);
    }

    .ag-form-control__label {
      display: block;
    }

    :host([align="horizontal"]) .ag-form-control__label {
      flex-shrink: 0;
    }

    .ag-form-control__control {
      display: block;
      flex: 1;
    }

    .ag-form-control__helper {
      display: block;
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
      margin-top: var(--ag-space-1);
    }

    .ag-form-control__error {
      display: block;
      font-size: var(--ag-font-size-sm);
      color: var(--ag-danger);
      margin-top: var(--ag-space-1);
    }

    .ag-form-control__error[hidden] {
      display: none;
    }

    .ag-form-control__required {
      color: var(--ag-danger);
      margin-left: var(--ag-space-1);
    }
  `;

  @property({ type: String, reflect: true })
  align: 'vertical' | 'horizontal' = 'vertical';

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: Boolean, reflect: true })
  required = false;

  // Internal state
  private _helperId = generateUniqueId('ag-form-control-helper');
  private _errorId = generateUniqueId('ag-form-control-error');
  private _labelId = generateUniqueId('ag-form-control-label');
  private _control: FormControlCompatible | null = null;

  constructor() {
    super();
    this.align = 'vertical';
    this.invalid = false;
    this.required = false;
  }

  connectedCallback() {
    super.connectedCallback();
    // Validate align prop
    if (this.align !== 'vertical' && this.align !== 'horizontal') {
      this.align = 'vertical';
    }
  }

  override firstUpdated() {
    this._discoverControl();
    this._setupLabelClickHandler();
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // Re-wire ARIA if invalid or required state changed
    if (changedProperties.has('invalid') || changedProperties.has('required')) {
      this._wireARIA();
    }

    // Re-discover control if needed
    if (changedProperties.has('align')) {
      this._discoverControl();
    }
  }

  /**
   * Discover the slotted control and configure it
   */
  private _discoverControl() {
    const controlSlot = this.shadowRoot?.querySelector('slot[name="control"]') as HTMLSlotElement;
    if (!controlSlot) return;

    const assignedElements = controlSlot.assignedElements();
    if (assignedElements.length === 0) return;

    const controlElement = assignedElements[0] as FormControlCompatible;

    // Check if the control implements the FormControlCompatible interface
    if ('standalone' in controlElement && 'controlElement' in controlElement) {
      this._control = controlElement;
      // Tell the control to suppress its internal label/helper/error
      this._control.standalone = false;
      this._wireARIA();
    }
  }

  /**
   * Wire ARIA attributes to the control's focusable element
   */
  private _wireARIA() {
    if (!this._control || !this._control.controlElement) return;

    const focusableElement = this._control.controlElement;

    // Set aria-labelledby to reference the label
    const labelSlot = this.shadowRoot?.querySelector('slot[name="label"]') as HTMLSlotElement;
    if (labelSlot && labelSlot.assignedElements().length > 0) {
      focusableElement.setAttribute('aria-labelledby', this._labelId);
    }

    // Set aria-invalid
    if (this.invalid) {
      focusableElement.setAttribute('aria-invalid', 'true');
    } else {
      focusableElement.setAttribute('aria-invalid', 'false');
    }

    // Set required
    if (this.required) {
      focusableElement.setAttribute('required', '');
      focusableElement.setAttribute('aria-required', 'true');
    } else {
      focusableElement.removeAttribute('required');
      focusableElement.setAttribute('aria-required', 'false');
    }

    // Build aria-describedby
    const describedByIds: string[] = [];

    // Check if helper slot has content
    const helperSlot = this.shadowRoot?.querySelector('slot[name="helper"]') as HTMLSlotElement;
    if (helperSlot && helperSlot.assignedElements().length > 0) {
      describedByIds.push(this._helperId);
    }

    // Check if error slot has content and we're invalid
    const errorSlot = this.shadowRoot?.querySelector('slot[name="error"]') as HTMLSlotElement;
    if (this.invalid && errorSlot && errorSlot.assignedElements().length > 0) {
      describedByIds.push(this._errorId);
    }

    if (describedByIds.length > 0) {
      focusableElement.setAttribute('aria-describedby', describedByIds.join(' '));
    } else {
      focusableElement.removeAttribute('aria-describedby');
    }
  }

  /**
   * Setup click handler on label to focus the control
   */
  private _setupLabelClickHandler() {
    const labelSlot = this.shadowRoot?.querySelector('slot[name="label"]') as HTMLSlotElement;
    if (!labelSlot) return;

    const labelWrapper = labelSlot.parentElement;
    if (!labelWrapper) return;

    // Make the label wrapper clickable
    labelWrapper.style.cursor = 'pointer';
    labelWrapper.addEventListener('click', (e) => {
      // Don't interfere if clicking on interactive elements within the label
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        return;
      }

      // Focus the control
      if (this._control?.controlElement) {
        this._control.controlElement.focus();
      }
    });
  }

  /**
   * Handle slot changes to re-wire ARIA
   */
  private _handleSlotChange() {
    this._discoverControl();
  }

  render() {
    return html`
      <div class="ag-form-control" part="ag-form-control">
        <div
          class="ag-form-control__label"
          part="ag-form-control-label"
          id="${this._labelId}"
        >
          <slot name="label"></slot>
          ${this.required ? html`
            <span class="ag-form-control__required" aria-hidden="true">*</span>
          ` : ''}
        </div>

        <div class="ag-form-control__control">
          <slot name="control" @slotchange=${this._handleSlotChange}></slot>
        </div>

        <div
          class="ag-form-control__helper"
          part="ag-form-control-helper"
          id="${this._helperId}"
        >
          <slot name="helper"></slot>
        </div>

        <div
          class="ag-form-control__error"
          part="ag-form-control-error"
          id="${this._errorId}"
          ?hidden="${!this.invalid}"
        >
          <slot name="error"></slot>
        </div>
      </div>
    `;
  }
}
