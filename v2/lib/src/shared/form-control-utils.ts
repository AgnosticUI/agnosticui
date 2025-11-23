/**
 * Shared form control utilities
 *
 * Pure utility functions for form controls (Input, Checkbox, Radio, Toggle, etc.)
 */

import { html, type TemplateResult, nothing } from 'lit';
import { generateUniqueId } from '../utils/unique-id';

/**
 * Stable IDs for form control elements
 */
export interface FormControlIds {
  inputId: string;
  labelId: string;
  helperId: string;
  errorId: string;
}

/**
 * Generate stable IDs for form control elements
 * Call this once in the component constructor or as a class field
 *
 * @param prefix - Component prefix (e.g., 'ag-input')
 * @returns Object with inputId, labelId, helperId, errorId
 */
export function createFormControlIds(prefix: string): FormControlIds {
  const base = generateUniqueId(prefix);
  return {
    inputId: `${base}-input`,
    labelId: `${base}-label`,
    helperId: `${base}-helper`,
    errorId: `${base}-error`,
  };
}

/**
 * Build aria-describedby attribute value
 * Only includes IDs for elements that actually exist
 *
 * @param options - Configuration for which elements are present
 * @returns Space-separated ID string or undefined if no IDs
 */
export function buildAriaDescribedBy(options: {
  helperId: string;
  errorId: string;
  hasHelper: boolean;
  hasError: boolean;
}): string | undefined {
  const ids: string[] = [];
  if (options.hasHelper) ids.push(options.helperId);
  if (options.hasError) ids.push(options.errorId);
  return ids.length > 0 ? ids.join(' ') : undefined;
}

/**
 * Label position options for form controls
 */
export type LabelPosition = 'vertical' | 'horizontal';

/**
 * Render a form control label
 * Uses native <label for="..."> association within shadow DOM
 *
 * @param options - Label rendering options
 * @returns TemplateResult or nothing if no label
 */
export function renderFormLabel(options: {
  label: string;
  labelId: string;
  inputId: string;
  required: boolean;
  hidden: boolean;
  position?: LabelPosition;
}): TemplateResult | typeof nothing {
  if (!options.label) return nothing;

  const positionClass = options.position === 'horizontal'
    ? 'ag-form-control__label--horizontal'
    : '';

  return html`
    <label
      id="${options.labelId}"
      for="${options.inputId}"
      class="ag-form-control__label ${options.hidden ? 'ag-form-control__label--hidden' : ''} ${positionClass}"
      part="ag-label"
    >
      ${options.label}
      ${options.required ? html`
        <span class="ag-form-control__required" part="ag-required" aria-hidden="true">*</span>
      ` : nothing}
    </label>
  `;
}

/**
 * Render helper text
 *
 * @param options - Helper text rendering options
 * @returns TemplateResult or nothing if no helper text
 */
export function renderFormHelper(options: {
  helpText: string;
  helperId: string;
}): TemplateResult | typeof nothing {
  if (!options.helpText) return nothing;

  return html`
    <div
      id="${options.helperId}"
      class="ag-form-control__helper"
      part="ag-helper"
    >
      ${options.helpText}
    </div>
  `;
}

/**
 * Render error text
 * Hidden when not invalid or no error message
 *
 * @param options - Error text rendering options
 * @returns TemplateResult (always rendered but may be hidden)
 */
export function renderFormError(options: {
  errorMessage: string;
  errorId: string;
  invalid: boolean;
}): TemplateResult {
  return html`
    <div
      id="${options.errorId}"
      class="ag-form-control__error"
      part="ag-error"
      ?hidden="${!options.invalid || !options.errorMessage}"
    >
      ${options.errorMessage || ''}
    </div>
  `;
}
