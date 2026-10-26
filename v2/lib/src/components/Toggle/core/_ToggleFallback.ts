import styles from './toggle-structure.module.css';
import { escapeHtml } from '../../../utils/escape.js';
import type { ToggleProps } from './_Toggle.js';

/**
 * _ToggleFallback
 * 
 * An Isomorphic Pure HTML String Engine built to eliminate pre-hydration style voids.
 * 
 * NOTE ON CLASS DUPLICATION:
 * This component outputs BOTH hashed CSS Module references (e.g. `styles.toggleWrapper`) 
 * and unhashed namespace fallbacks (e.g. `ag-toggle-wrapper`). 
 * 
 * 1. The `ag-` global fallback classes ensure immediate geometric painting on the server.
 * 2. The dynamic `styles` class hashes ensure that when the framework hydrator executes 
 *    DOM reconciliation, the token already matches, making client activation near zero-cost.
 * 
 * For deep-dive architectural context, see the docs: "How SSR Fallbacks Work"
 */
export function _ToggleFallback(props: ToggleProps = {}): string {
  const isChecked = props.checked === true || (props.checked as unknown as string) === 'true' || (props.checked as unknown as string) === '';
  const isDisabled = props.disabled === true || (props.disabled as unknown as string) === 'true' || (props.disabled as unknown as string) === '';
  const isReadonly = props.readonly === true || (props.readonly as unknown as string) === 'true' || (props.readonly as unknown as string) === '';
  const isRequired = props.required === true || (props.required as unknown as string) === 'true' || (props.required as unknown as string) === '';
  const isInvalid = props.invalid === true || (props.invalid as unknown as string) === 'true' || (props.invalid as unknown as string) === '';

  const name = props.name || '';
  const value = props.value || '';
  const size = props.size || 'md';
  const variant = props.variant || 'default';
  const label = props.label || '';
  const helpText = props.helpText || '';
  const errorMessage = props.errorMessage || '';
  const labelPosition = props.labelPosition || 'top';
  const noLabel = props.noLabel || false;
  const labelHidden = props.labelHidden || false;

  const randomId = Math.random().toString(36).substring(2, 9);
  const toggleId = `ag-toggle-input-${randomId}`;
  const labelId = `ag-toggle-label-${randomId}`;
  const helperId = `ag-toggle-helper-${randomId}`;
  const errorId = `ag-toggle-error-${randomId}`;

  // Map dynamic size tokens from symmetric layout matrix definition keys
  let sizeClass = styles.sizeMd;
  if (size === 'xs') sizeClass = styles.sizeXs;
  if (size === 'sm') sizeClass = styles.sizeSm;
  if (size === 'lg') sizeClass = styles.sizeLg;
  if (size === 'xl') sizeClass = styles.sizeXl;

  // Map dynamic semantic variant tokens from template criteria
  let variantClass = '';
  if (variant === 'success') variantClass = styles.variantSuccess;
  if (variant === 'warning') variantClass = styles.variantWarning;
  if (variant === 'danger') variantClass = styles.variantDanger;
  if (variant === 'monochrome') variantClass = styles.variantMonochrome;

  // Double-sided class array construction building clean runtime hashes next to global selectors
  const buttonClasses = [
    styles.toggleWrapper,
    'ag-toggle',
    `ag-toggle--${size}`,
    'ag-toggle-wrapper',
    sizeClass
  ];

  if (variantClass) buttonClasses.push(variantClass);
  if (variant !== 'default') buttonClasses.push(`ag-toggle--${variant}`);
  if (isDisabled) buttonClasses.push('ag-toggle--disabled');
  if (isReadonly) buttonClasses.push('ag-toggle--readonly');

  const nameAttr = name ? ` name="${escapeHtml(name)}"` : '';
  const valueAttr = value ? ` value="${escapeHtml(value)}"` : '';
  const disabledAttr = isDisabled ? ' disabled' : '';
  const readonlyAttr = isReadonly ? ' readonly' : '';

  let ariaDescribedBy = '';
  const descriptions: string[] = [];
  if (helpText && !isInvalid) descriptions.push(helperId);
  if (isInvalid && errorMessage) descriptions.push(errorId);
  if (descriptions.length > 0) {
    ariaDescribedBy = ` aria-describedby="${descriptions.join(' ')}"`;
  }

  const labelLedByAttr = (label && !noLabel) ? ` aria-labelledby="${labelId}"` : '';

  const labelHtml = (label && !noLabel) ? `
    <label id="${labelId}" for="${toggleId}" class="ag-form-control__label${labelHidden ? ' ag-form-control__label--hidden' : ''}${isRequired ? ' ag-form-control__label--required' : ''}">
      ${escapeHtml(label)}
    </label>
  ` : '';

  const helperHtml = (helpText && !isInvalid) ? `<div id="${helperId}" class="ag-form-control__helper" part="ag-toggle-helper">${escapeHtml(helpText)}</div>` : '';
  const errorHtml = (isInvalid && errorMessage) ? `<div id="${errorId}" class="ag-form-control__error" part="ag-toggle-error">${escapeHtml(errorMessage)}</div>` : '';

  const buttonHtml = `
    <button
      id="${toggleId}"
      role="switch"
      aria-checked="${isChecked ? 'true' : 'false'}"
      class="${buttonClasses.join(' ').trim()}"
      part="ag-toggle-button"
      ${labelLedByAttr}
      ${ariaDescribedBy}
      ${nameAttr}
      ${valueAttr}
      ${disabledAttr}
      ${readonlyAttr}
    >
      <span class="${styles.toggleTrack || ''} ag-toggle__track" part="ag-toggle-track">
        <span class="${styles.toggleHandle || ''} ag-toggle__handle" part="ag-toggle-handle"></span>
      </span>
      <span class="visually-hidden">${isChecked ? 'On' : 'Off'}</span>
    </button>
  `;

  let bodyHtml = buttonHtml;

  if (labelPosition === 'start' || labelPosition === 'end') {
    bodyHtml = `
      <div class="ag-form-control--horizontal">
        ${labelHtml}
        ${buttonHtml}
      </div>
    `;
  } else if (labelPosition === 'bottom') {
    bodyHtml = `
      ${buttonHtml}
      ${labelHtml}
    `;
  } else {
    bodyHtml = `
      ${labelHtml}
      ${buttonHtml}
    `;
  }

  return `
    <div class="${styles.toggleContainer || ''} ag-toggle-container">
      ${bodyHtml}
      ${helperHtml}
      ${errorHtml}
    </div>
  `.trim();
}
