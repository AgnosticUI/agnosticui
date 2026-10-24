// v2/lib/src/components/Input/core/_InputFallback.ts (Part 1 of 2)
import styles from './input-structure.module.css';

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'textarea';

export type InputSize = 'small' | 'default' | 'large';

export interface InputFallbackProps {
  label?: string;
  labelHidden?: boolean;
  labelPosition?: 'top' | 'end' | 'bottom' | 'start';
  noLabel?: boolean;
  ariaLabel?: string;
  name?: string;
  type?: InputType;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  size?: InputSize;
  capsule?: boolean;
  rounded?: boolean;
  underlined?: boolean;
  underlinedWithBackground?: boolean;
  inline?: boolean;
  min?: string;
  max?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  // Fallback explicit slot mappings for rendering server placeholders
  slotAddonLeft?: string;
  slotAddonRight?: string;
}

// Global utility helper to clean user strings safely inside attributes
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function _InputFallback(props: InputFallbackProps = {}): string {
  const {
    label = '',
    labelHidden = false,
    labelPosition = 'top',
    noLabel = false,
    ariaLabel = '',
    name = '',
    type = 'text',
    value = '',
    placeholder = '',
    rows = 4,
    cols = 50,
    size = 'default',
    capsule = false,
    rounded = false,
    underlined = false,
    underlinedWithBackground = false,
    inline = false,
    min = '',
    max = '',
    required = false,
    disabled = false,
    readonly = false,
    invalid = false,
    errorMessage = '',
    helpText = '',
    slotAddonLeft = '',
    slotAddonRight = '',
  } = props;

  const isTextarea = type === 'textarea';
  const isHorizontal = labelPosition === 'start' || labelPosition === 'end';
  const hasAddons = !!slotAddonLeft || !!slotAddonRight;

  // 1. Resolve Dynamic Layout Classes from CSS Module alongside literal strings
  const wrapperClasses = [styles.agInput, 'ag-input'];
  if (size === 'small') wrapperClasses.push(styles.agInputSmall, 'ag-input--small');
  if (size === 'large') wrapperClasses.push(styles.agInputLarge, 'ag-input--large');
  if (rounded) wrapperClasses.push(styles.agInputRounded, 'ag-input--rounded');
  if (underlined) wrapperClasses.push(styles.agInputUnderlined, 'ag-input--underlined');
  if (underlinedWithBackground) wrapperClasses.push(styles.agInputUnderlinedWithBackground, 'ag-input--underlined-with-background');
  if (capsule) wrapperClasses.push(styles.agInputCapsule, 'ag-input--capsule');
  if (inline) wrapperClasses.push(styles.agInputInline, 'ag-input--inline');

  const elementClass = isTextarea ? `${styles.agInputTextarea} ag-input__textarea` : `${styles.agInputInput} ag-input__input`;

  // 2. Render Label Sub-Structure
  let labelHtml = '';
  if (label && !noLabel) {
    const positionClasses: string[] = [];
    if (isHorizontal) {
      positionClasses.push(styles['ag-form-control__label--horizontal']);
      positionClasses.push(styles[`ag-form-control__label--${labelPosition}`]);
      positionClasses.push(styles['ag-input__label--horizontal']);
      positionClasses.push(styles[`ag-input__label--${labelPosition}`]);
      positionClasses.push('ag-form-control__label--horizontal', `ag-form-control__label--${labelPosition}`, 'ag-input__label--horizontal', `ag-input__label--${labelPosition}`);
    } else if (labelPosition === 'bottom') {
      positionClasses.push(styles['ag-input__label--bottom'], 'ag-input__label--bottom');
    }

    const completeLabelClass = [
      styles['ag-form-control__label'],
      styles.agInputLabel,
      labelHidden ? `${styles['ag-form-control__label--hidden']} ${styles['ag-input__label--hidden']} ag-form-control__label--hidden ag-input__label--hidden` : '',
      positionClasses.join(' '),
      'ag-form-control__label',
      'ag-input__label'
    ].filter(Boolean).join(' ').trim();

    const requiredIndicator = required
      ? `<span class="${styles['ag-form-control__required']} ${styles.agInputRequired} ag-form-control__required ag-input__required" aria-hidden="true">*</span>`
      : '';

    labelHtml = `<label class="${completeLabelClass}">${escapeHtml(label)} ${requiredIndicator}</label>`;
  }

  // 3. Render Helper and Error Blocks
  const helperHtml = helpText
    ? `<div class="${styles['ag-form-control__helper']} ${styles.agInputHelp} ag-form-control__helper ag-input__help">${escapeHtml(helpText)}</div>`
    : '';

  const errorHtml = invalid && errorMessage
    ? `<div class="${styles['ag-form-control__error']} ${styles.agInputError} ag-form-control__error ag-input__error" role="alert" aria-atomic="true">${escapeHtml(errorMessage)}</div>`
    : '';

  // 4. Compute Shared Attribute Strings
  const sharedAttrs = `
    ${name ? `name="${escapeHtml(name)}"` : ''}
    ${disabled || invalid ? `aria-invalid="${invalid ? 'true' : 'false'}"` : 'aria-invalid="false"'}
    ${required ? 'required aria-required="true"' : ''}
    ${disabled ? 'disabled' : ''}
    ${readonly ? 'readonly' : ''}
    ${placeholder ? `placeholder="${escapeHtml(placeholder)}"` : ''}
    ${ariaLabel ? `aria-label="${escapeHtml(ariaLabel)}"` : ''}
  `.trim();

  // 5. Render Core Primitives
  let nativeElementHtml = '';
  if (isTextarea) {
    nativeElementHtml = `<textarea class="${elementClass}" rows="${rows}" cols="${cols}" ${sharedAttrs}>${escapeHtml(value)}</textarea>`;
  } else {
    const supportsMinMax = ['date', 'datetime-local', 'month', 'time', 'week', 'number', 'range'].includes(type);
    const minMaxAttrs = supportsMinMax ? `${min ? `min="${escapeHtml(min)}"` : ''} ${max ? `max="${escapeHtml(max)}"` : ''}` : '';
    nativeElementHtml = `<input type="${type}" class="${elementClass}" value="${escapeHtml(value)}" ${sharedAttrs} ${minMaxAttrs} />`;
  }

  // 6. Assemble Field with Addons if Present (with complete string parity)
  let inputFieldHtml = '';
  if (hasAddons) {
    inputFieldHtml = `
      <div class="${styles.agInputField} ag-input__field">
        ${slotAddonLeft ? `<div class="${styles.agInputAddon} ${styles['ag-input__addon--left']} ag-input__addon ag-input__addon--left">${slotAddonLeft}</div>` : ''}
        ${nativeElementHtml}
        ${slotAddonRight ? `<div class="${styles.agInputAddon} ${styles['ag-input__addon--right']} ag-input__addon ag-input__addon--right">${slotAddonRight}</div>` : ''}
      </div>
    `.trim();
  } else {
    inputFieldHtml = nativeElementHtml;
  }

  // 7. Assemble Global Structural Layout Combinations
  const finalClassList = wrapperClasses.filter(Boolean).join(' ').trim();

  if (isHorizontal) {
    return `
      <div class="${finalClassList}">
        <div class="ag-form-control--horizontal">
          ${labelHtml}
          ${inputFieldHtml}
        </div>
        ${helperHtml}
        ${errorHtml}
      </div>
    `.trim();
  }

  if (labelPosition === 'bottom') {
    return `
      <div class="${finalClassList}">
        ${inputFieldHtml}
        ${helperHtml}
        ${errorHtml}
        ${labelHtml}
      </div>
    `.trim();
  }

  // Default: 'top' layout stack configuration
  return `
    <div class="${finalClassList}">
      ${labelHtml}
      ${helperHtml}
      ${errorHtml}
      ${inputFieldHtml}
    </div>
  `.trim();
}
