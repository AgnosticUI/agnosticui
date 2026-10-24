import styles from './select-structure.module.css';

export interface SelectFallbackProps {
  size?: 'small' | 'large' | '';
  multiple?: boolean;
  disabled?: boolean;
  name?: string;
  multipleSize?: number;
  label?: string;
  labelPosition?: 'top' | 'end' | 'bottom' | 'start';
  labelHidden?: boolean;
  noLabel?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
}

export function _SelectFallback(props: SelectFallbackProps = {}): string {
  const {
    size = '',
    multiple = false,
    disabled = false,
    name = '',
    multipleSize,
    label = '',
    labelPosition = 'top',
    labelHidden = false,
    noLabel = false,
    required = false,
    invalid = false,
    errorMessage = '',
    helpText = '',
  } = props;

  // 1. Resolve Dynamic Layout Classes from Module
  const isHorizontal = labelPosition === 'start' || labelPosition === 'end';
  
  let selectModifierClass = '';
  if (size === 'small') selectModifierClass = styles.selectSmall;
  if (size === 'large') selectModifierClass = styles.selectLarge;

  const selectClass = `${styles.select} ${selectModifierClass}`.trim();

  // 2. Render Sub-Structures
  let labelHtml = '';
  if (label && !noLabel) {
    const positionClasses: string[] = [];
    if (isHorizontal) {
      positionClasses.push(styles['ag-form-control__label--horizontal']);
      positionClasses.push(styles[`ag-form-control__label--${labelPosition}`]);
    } else if (labelPosition === 'bottom') {
      positionClasses.push(styles['ag-form-control__label--bottom']);
    }

    const completeLabelClass = `${styles['ag-form-control__label']} ${
      labelHidden ? styles['ag-form-control__label--hidden'] : ''
    } ${positionClasses.join(' ')}`.trim();

    const requiredIndicator = required
      ? `<span class="ag-form-control__required" aria-hidden="true">*</span>`
      : '';

    labelHtml = `<label class="${completeLabelClass}">${label} ${requiredIndicator}</label>`;
  }

  const helperHtml = helpText && !invalid
    ? `<div class="${styles['ag-form-control__helper']}">${helpText}</div>`
    : '';

  const errorHtml = invalid && errorMessage
    ? `<div class="${styles['ag-form-control__error']}">${errorMessage}</div>`
    : '';

  const calculatedSize = multipleSize ?? (multiple ? 4 : 1);
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
    ></select>
  `.trim();

  // 3. Assemble Layout Configurations
  if (isHorizontal) {
    return `
      <div class="${styles['ag-form-control--horizontal']}">
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

  // Default: 'top' layout
  return `
    ${labelHtml}
    ${selectElementHtml}
    ${helperHtml}
    ${errorHtml}
  `.trim();
}
