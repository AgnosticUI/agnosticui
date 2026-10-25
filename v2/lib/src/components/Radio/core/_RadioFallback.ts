import { type RadioProps } from './_Radio.js';
import { escapeHtml } from '../../../utils/escape.js';
import styles from './radio-structure.module.css';

export type RadioSize = 'small' | 'medium' | 'large';
export type RadioTheme = 'default' | 'primary' | 'success' | 'monochrome';

export interface RadioFallbackProps {
  name?: string;
  value?: string;
  checked?: boolean | string;
  disabled?: boolean | string;
  required?: boolean | string;
  invalid?: boolean | string;
  size?: RadioSize;
  theme?: RadioTheme;
  labelText?: string;
  labelPosition?: 'end' | 'start';
  label?: string;
  labelHidden?: boolean | string;
  noLabel?: boolean | string;
  errorMessage?: string;
  helpText?: string;
}

/**
 * _RadioFallback
 * 
 * An Isomorphic Pure HTML String Engine built to eliminate pre-hydration style voids.
 * 
 * NOTE ON CLASS DUPLICATION:
 * This component outputs BOTH hashed CSS Module references (e.g. `styles.radioWrapper`) 
 * and unhashed namespace fallbacks (e.g. `ag-radio-wrapper`). 
 * 
 * 1. The `ag-` global fallback classes ensure immediate geometric painting on the server.
 * 2. The dynamic `styles` class hashes ensure that when the framework hydrator executes 
 *    DOM reconciliation, the token already matches, making client activation near zero-cost.
 * 
 * For deep-dive architectural context, see the docs: "How SSR Fallbacks Work"
 */
export function _RadioFallback(props: RadioFallbackProps = {}): string {
  const normalizedProps: RadioProps = {
    name: props.name || '',
    value: props.value || '',
    checked: props.checked !== undefined ? (props.checked === true || props.checked === 'true' || props.checked === '') : false,
    disabled: props.disabled !== undefined ? (props.disabled === true || props.disabled === 'true' || props.disabled === '') : false,
    required: props.required !== undefined ? (props.required === true || props.required === 'true' || props.required === '') : false,
    invalid: props.invalid !== undefined ? (props.invalid === true || props.invalid === 'true' || props.invalid === '') : false,
    size: props.size || 'medium',
    theme: props.theme || 'primary',
    labelText: props.labelText || '',
    labelPosition: props.labelPosition || 'end',
    label: props.label || '',
    labelHidden: props.labelHidden !== undefined ? (props.labelHidden === true || props.labelHidden === 'true' || props.labelHidden === '') : false,
    noLabel: props.noLabel !== undefined ? (props.noLabel === true || props.noLabel === 'true' || props.noLabel === '') : false,
    errorMessage: props.errorMessage || '',
    helpText: props.helpText || '',
  };

  const name = normalizedProps.name ? ` name="${escapeHtml(normalizedProps.name)}"` : '';
  const value = normalizedProps.value ? ` value="${escapeHtml(normalizedProps.value)}"` : '';
  const checked = normalizedProps.checked ? ' checked aria-checked="true"' : ' aria-checked="false"';
  const disabled = normalizedProps.disabled ? ' disabled' : '';
  const required = normalizedProps.required ? ' required aria-required="true"' : ' aria-required="false"';
  const invalid = normalizedProps.invalid ? ' aria-invalid="true"' : ' aria-invalid="false"';

  const randomId = Math.random().toString(36).substring(2, 9);
  const inputId = `ag-radio-input-${randomId}`;
  const labelId = `ag-radio-label-${randomId}`;
  const helperId = `ag-radio-helper-${randomId}`;
  const errorId = `ag-radio-error-${randomId}`;

  let ariaDescribedBy = '';
  const descriptions: string[] = [];
  if (normalizedProps.helpText) descriptions.push(helperId);
  if (normalizedProps.invalid && normalizedProps.errorMessage) descriptions.push(errorId);
  if (descriptions.length > 0) {
    ariaDescribedBy = ` aria-describedby="${descriptions.join(' ')}"`;
  }

  const size = normalizedProps.size || 'medium';
  let sizeClass = styles.radioIndicatorMedium;
  let labelSizeClass = styles.radioLabelMedium;

  if (size === 'small') {
    sizeClass = styles.radioIndicatorSmall;
    labelSizeClass = styles.radioLabelSmall;
  } else if (size === 'large') {
    sizeClass = styles.radioIndicatorLarge;
    labelSizeClass = styles.radioLabelLarge;
  }

  const theme = normalizedProps.theme || 'primary';
  
  const wrapperClasses = `
    ${styles.radioWrapper} ag-radio-wrapper
    ${normalizedProps.labelPosition === 'start' ? `${styles.radioWrapperLabelStart} ag-radio-wrapper--label-start` : ''}
  `.trim();

  const indicatorClasses = `
    ${styles.radioIndicator} ag-radio-indicator
    ${sizeClass} ag-radio-indicator--${size}
    ag-radio-indicator--${theme}
  `.trim();

  const labelClasses = `
    ${styles.radioLabel} ag-radio-label
    ${labelSizeClass} ag-radio-label--${size}
  `.trim();

  const radioControlHtml = `
    <label class="${wrapperClasses}" part="ag-radio-wrapper">
      <input
        type="radio"
        id="${inputId}"
        class="${styles.radioInput} ag-radio-input"
        part="ag-radio-input"
        ${name}
        ${value}
        ${checked}
        ${disabled}
        ${required}
        ${invalid}
        ${ariaDescribedBy}
      />
      <span class="${indicatorClasses}" part="ag-radio-indicator"></span>
      <span class="${labelClasses}" part="ag-radio-label">
        ${normalizedProps.labelText ? escapeHtml(normalizedProps.labelText) : ''}
      </span>
    </label>
  `.trim();

  let bodyHtml = radioControlHtml;

  if (normalizedProps.label || normalizedProps.helpText || normalizedProps.errorMessage) {
    let externalLabelHtml = '';
    if (normalizedProps.label && !normalizedProps.noLabel) {
      const hiddenClass = normalizedProps.labelHidden ? ' ag-form-control__label--hidden' : '';
      const requiredIndicator = normalizedProps.required ? '<span class="ag-form-control__required" part="ag-required" aria-hidden="true">*</span>' : '';
      externalLabelHtml = `
        <label id="${labelId}" for="${inputId}" class="ag-form-control__label ag-radio__external-label${hiddenClass}" part="ag-radio-external-label">
          ${escapeHtml(normalizedProps.label)}
          ${requiredIndicator}
        </label>
      `.trim();
    }

    const helperHtml = normalizedProps.helpText 
      ? `<div id="${helperId}" class="ag-form-control__helper ag-radio__helper" part="ag-radio-helper">${escapeHtml(normalizedProps.helpText)}</div>` 
      : '';

    const errorHiddenAttr = (!normalizedProps.invalid || !normalizedProps.errorMessage) ? ' hidden' : '';
    const errorHtml = `
      <div id="${errorId}" class="ag-form-control__error ag-radio__error" part="ag-radio-error"${errorHiddenAttr}>
        ${normalizedProps.errorMessage ? escapeHtml(normalizedProps.errorMessage) : ''}
      </div>
    `.trim();

    bodyHtml = `
      <div class="${styles.radioContainer} ag-radio-container">
        ${externalLabelHtml}
        ${radioControlHtml}
        ${helperHtml}
        ${errorHtml}
      </div>
    `.trim();
  }

  return bodyHtml;
}
