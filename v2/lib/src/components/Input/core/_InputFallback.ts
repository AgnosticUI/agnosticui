import styles from './input-structure.module.css';
import { escapeHtml } from "../../../utils/escape.js";

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
  labelHidden?: boolean | string; // Widened to allow loose string injection
  labelPosition?: 'top' | 'end' | 'bottom' | 'start';
  noLabel?: boolean | string; // Widened
  ariaLabel?: string;
  name?: string;
  type?: InputType;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  size?: InputSize;
  capsule?: boolean | string; // Widened
  rounded?: boolean | string; // Widened
  underlined?: boolean | string; // Widened
  underlinedWithBackground?: boolean | string; // Widened
  inline?: boolean | string; // Widened
  min?: string;
  max?: string;
  required?: boolean | string; // Widened
  disabled?: boolean | string; // Widened
  readonly?: boolean | string; // Widened
  invalid?: boolean | string; // Widened
  errorMessage?: string;
  helpText?: string;
  slotAddonLeft?: string;
  slotAddonRight?: string;
}

export function _InputFallback(props: InputFallbackProps = {}): string {
  const label = props.label ? escapeHtml(props.label) : '';
  const labelPosition = props.labelPosition || 'top';
  const ariaLabel = props.ariaLabel ? escapeHtml(props.ariaLabel) : '';
  const name = props.name ? escapeHtml(props.name) : '';
  const type = props.type || 'text';
  const value = props.value ? escapeHtml(props.value) : '';
  const placeholder = props.placeholder ? escapeHtml(props.placeholder) : '';
  const rows = props.rows || 4;
  const cols = props.cols || 50;
  const size = props.size || 'default';
  const min = props.min ? escapeHtml(props.min) : '';
  const max = props.max ? escapeHtml(props.max) : '';
  const errorMessage = props.errorMessage ? escapeHtml(props.errorMessage) : '';
  const helpText = props.helpText ? escapeHtml(props.helpText) : '';
  const slotAddonLeft = props.slotAddonLeft || '';
  const slotAddonRight = props.slotAddonRight || '';

  // Isomorphic Normalization: We normalize the widened values into strict internal booleans
  const labelHidden = props.labelHidden === true || props.labelHidden === 'true';
  const noLabel = props.noLabel === true || props.noLabel === 'true';
  const capsule = props.capsule === true || props.capsule === 'true' || props.capsule === '';
  const rounded = props.rounded === true || props.rounded === 'true' || props.rounded === '';
  const underlined = props.underlined === true || props.underlined === 'true' || props.underlined === '';
  const underlinedWithBackground = props.underlinedWithBackground === true || props.underlinedWithBackground === 'true' || props.underlinedWithBackground === '';
  const inline = props.inline === true || props.inline === 'true' || props.inline === '';
  const required = props.required === true || props.required === 'true' || props.required === '';
  const disabled = props.disabled === true || props.disabled === 'true' || props.disabled === '';
  const readonly = props.readonly === true || props.readonly === 'true' || props.readonly === '';
  const invalid = props.invalid === true || props.invalid === 'true' || props.invalid === '';

  const isTextarea = type === 'textarea';
  const isHorizontal = labelPosition === 'start' || labelPosition === 'end';
  const hasAddons = !!slotAddonLeft || !!slotAddonRight;

  // 1. Resolve Dynamic Layout Classes from CSS Module alongside global tokens
  const wrapperClasses = [styles.agInput, 'ag-input'];
  if (size === 'small') wrapperClasses.push(styles.agInputSmall, 'ag-input--small');
  if (size === 'large') wrapperClasses.push(styles.agInputLarge, 'ag-input--large');
  if (rounded) wrapperClasses.push(styles.agInputRounded, 'ag-input--rounded');
  if (underlined) wrapperClasses.push(styles.agInputUnderlined, 'ag-input--underlined');
  if (underlinedWithBackground) wrapperClasses.push(styles.agInputUnderlinedWithBackground, 'ag-input--underlined-with-background');
  if (capsule) wrapperClasses.push(styles.agInputCapsule, 'ag-input--capsule');
  if (inline) wrapperClasses.push(styles.agInputInline, 'ag-input--inline');

  const elementClass = isTextarea 
    ? `${styles.agInputTextarea} ag-input__textarea` 
    : `${styles.agInputInput} ag-input__input`;

  // 2. Render Label Sub-Structure
  let labelHtml = '';
  if (label && !noLabel) {
    const positionClasses: string[] = [];
    const globalPositionClasses: string[] = [];
    if (isHorizontal) {
      positionClasses.push(styles['ag-form-control__label--horizontal'], styles[`ag-form-control__label--${labelPosition}`], styles['ag-input__label--horizontal'], styles[`ag-input__label--${labelPosition}`]);
      globalPositionClasses.push('ag-form-control__label--horizontal', `ag-form-control__label--${labelPosition}`, 'ag-input__label--horizontal', `ag-input__label--${labelPosition}`);
    } else if (labelPosition === 'bottom') {
      positionClasses.push(styles['ag-input__label--bottom']);
      globalPositionClasses.push('ag-input__label--bottom');
    }

    const completeLabelClass = [
      styles['ag-form-control__label'],
      styles.agInputLabel,
      labelHidden ? `${styles['ag-form-control__label--hidden']} ${styles['ag-input__label--hidden']}` : '',
      positionClasses.join(' '),
      'ag-form-control__label',
      'ag-input__label',
      labelHidden ? 'ag-form-control__label--hidden ag-input__label--hidden' : '',
      globalPositionClasses.join(' ')
    ].filter(Boolean).join(' ').trim();

    const requiredIndicator = required
      ? `<span class="${styles['ag-form-control__required']} ${styles.agInputRequired} ag-form-control__required ag-input__required" aria-hidden="true">*</span>`
      : '';

    labelHtml = `<label class="${completeLabelClass}">${label} ${requiredIndicator}</label>`;
  }

  // 3. Render Helper and Error Blocks
  const helperHtml = helpText
    ? `<div class="${styles['ag-form-control__helper']} ${styles.agInputHelp} ag-form-control__helper ag-input__help">${helpText}</div>`
    : '';

  const errorHtml = invalid && errorMessage
    ? `<div class="${styles['ag-form-control__error']} ${styles.agInputError} ag-form-control__error ag-input__error" role="alert" aria-atomic="true">${errorMessage}</div>`
    : '';

  // 4. Compute Shared Attribute Strings
  const sharedAttrs = `
    ${name ? `name="${name}"` : ''}
    ${disabled || invalid ? `aria-invalid="${invalid ? 'true' : 'false'}"` : 'aria-invalid="false"'}
    ${required ? 'required aria-required="true"' : ''}
    ${disabled ? 'disabled' : ''}
    ${readonly ? 'readonly' : ''}
    ${placeholder ? `placeholder="${placeholder}"` : ''}
    ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}
  `.trim();

  // 5. Render Core Primitives
  let nativeElementHtml = '';
  if (isTextarea) {
    nativeElementHtml = `<textarea class="${elementClass}" rows="${rows}" cols="${cols}" ${sharedAttrs}>${value}</textarea>`;
  } else {
    const supportsMinMax = ['date', 'datetime-local', 'month', 'time', 'week', 'number', 'range'].includes(type);
    const minMaxAttrs = supportsMinMax ? `${min ? `min="${min}"` : ''} ${max ? `max="${max}"` : ''}` : '';
    nativeElementHtml = `<input type="${type}" class="${elementClass}" value="${value}" ${sharedAttrs} ${minMaxAttrs} />`;
  }

  // 6. Assemble Field with Addons
  let inputFieldHtml = '';
  if (hasAddons) {
    const fieldWrapperClass = `${styles.agInputField} ag-input__field`;
    inputFieldHtml = `
      <div class="${fieldWrapperClass}">
        ${slotAddonLeft ? `<div class="${styles.agInputAddon} ${styles['ag-input__addon--left']} ag-input__addon ag-input__addon--left">${slotAddonLeft}</div>` : ''}
        ${nativeElementHtml}
        ${slotAddonRight ? `<div class="${styles.agInputAddon} ${styles['ag-input__addon--right']} ag-input__addon ag-input__addon--right">${slotAddonRight}</div>` : ''}
      </div>
    `.trim();
  } else {
    inputFieldHtml = nativeElementHtml;
  }

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

  return `
    <div class="${finalClassList}">
      ${labelHtml}
      ${helperHtml}
      ${errorHtml}
      ${inputFieldHtml}
    </div>
  `.trim();
}
