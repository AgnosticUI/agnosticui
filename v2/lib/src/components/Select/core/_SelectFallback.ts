import styles from './select-structure.module.css';
import { escapeHtml } from "../../../utils/escape.js";

export interface SelectFallbackProps {
  size?: 'small' | 'large' | '';
  multiple?: boolean | string;
  disabled?: boolean | string;
  name?: string;
  multipleSize?: number;
  label?: string;
  labelPosition?: 'top' | 'end' | 'bottom' | 'start';
  labelHidden?: boolean | string;
  noLabel?: boolean | string;
  required?: boolean | string;
  invalid?: boolean | string;
  errorMessage?: string;
  helpText?: string;
  optionPlaceholder?: string;
}

export function _SelectFallback(props: SelectFallbackProps = {}): string {
  // Isomorphic Boolean/String Attribute Normalization safely satisfies compiler boundaries
  const size = props.size || '';
  const multiple = props.multiple !== undefined ? (props.multiple === true || props.multiple === 'true' || props.multiple === '') : false;
  const disabled = props.disabled !== undefined ? (props.disabled === true || props.disabled === 'true' || props.disabled === '') : false;
  const required = props.required !== undefined ? (props.required === true || props.required === 'true' || props.required === '') : false;
  const invalid = props.invalid !== undefined ? (props.invalid === true || props.invalid === 'true' || props.invalid === '') : false;
  
  const name = props.name ? escapeHtml(props.name) : '';
  const label = props.label ? escapeHtml(props.label) : '';
  const labelPosition = props.labelPosition || 'top';
  const labelHidden = props.labelHidden === true || props.labelHidden === 'true';
  const noLabel = props.noLabel === true || props.noLabel === 'true';
  const errorMessage = props.errorMessage ? escapeHtml(props.errorMessage) : '';
  const helpText = props.helpText ? escapeHtml(props.helpText) : '';
  const optionPlaceholder = props.optionPlaceholder ? escapeHtml(props.optionPlaceholder) : '';

  const isHorizontal = labelPosition === 'start' || labelPosition === 'end';
  
  // 1. Resolve Dual-Class Lifecycle Tokens
  let sizeModifierClass = '';
  let globalSizeClass = '';
  if (size === 'small') {
    sizeModifierClass = styles.selectSmall;
    globalSizeClass = 'ag-select-small';
  }
  if (size === 'large') {
    sizeModifierClass = styles.selectLarge;
    globalSizeClass = 'ag-select-large';
  }

  const selectClass = `${styles.select} ${sizeModifierClass} ag-select ${globalSizeClass}`.trim();

  // 2. Render Sub-Structures with Side-by-Side Lifecycles
  let labelHtml = '';
  if (label && !noLabel) {
    const positionClasses: string[] = [];
    const globalPositionClasses: string[] = [];
    
    if (isHorizontal) {
      positionClasses.push(styles['ag-form-control__label--horizontal']);
      positionClasses.push(styles[`ag-form-control__label--${labelPosition}`]);
      globalPositionClasses.push('ag-form-control-label--horizontal');
      globalPositionClasses.push(`ag-form-control-label--${labelPosition}`);
    } else if (labelPosition === 'bottom') {
      positionClasses.push(styles['ag-form-control__label--bottom']);
      globalPositionClasses.push('ag-form-control-label--bottom');
    }

    const completeLabelClass = `${styles['ag-form-control__label']} ${
      labelHidden ? styles['ag-form-control__label--hidden'] : ''
    } ${positionClasses.join(' ')} ag-form-control-label ${
      labelHidden ? 'ag-form-control-label--hidden' : ''
    } ${globalPositionClasses.join(' ')}`.trim();

    const requiredIndicator = required
      ? `<span class="ag-form-control__required" aria-hidden="true">*</span>`
      : '';

    labelHtml = `<label class="${completeLabelClass}">${label} ${requiredIndicator}</label>`;
  }

  const helperHtml = helpText && !invalid
    ? `<div class="${styles['ag-form-control__helper']} ag-form-control-helper">${helpText}</div>`
    : '';

  const errorHtml = invalid && errorMessage
    ? `<div class="${styles['ag-form-control__error']} ag-form-control-error">${errorMessage}</div>`
    : '';

  const calculatedSize = props.multipleSize ?? (multiple ? 4 : 1);
  const selectElementHtml = `
    <select
      class="${selectClass}"
      ${multiple ? 'multiple' : ''}
      ${disabled ? 'disabled' : ''}
      ${required ? 'required' : ''}
      ${name ? `name="${name}"` : ''}
      size="${calculatedSize}"
      aria-disabled="${disabled ? 'true' : 'false'}"
      aria-invalid="${invalid ? 'true' : 'false'}"
    >${optionPlaceholder ? `<option value="">${optionPlaceholder}</option>` : ''}</select>`.trim();

  // 3. Assemble Layout Configurations
  if (isHorizontal) {
    const horizontalWrapperClass = `${styles['ag-form-control--horizontal']} ag-form-control--horizontal`;
    return `
      <div class="${horizontalWrapperClass}">
        ${labelHtml}
        ${selectElementHtml}
      </div>
      ${helperHtml}
      ${errorHtml}
    `.trim();
  }

  if (labelPosition === 'bottom') {
    return `
      ${selectElementHtml}
      ${helperHtml}
      ${errorHtml}
      ${labelHtml}
    `.trim();
  }

  return `
    ${labelHtml}
    ${selectElementHtml}
    ${helperHtml}
    ${errorHtml}
  `.trim();
}
