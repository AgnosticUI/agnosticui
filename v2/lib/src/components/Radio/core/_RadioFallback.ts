import { type RadioProps } from './_Radio.js';
import styles from './radio-structure.module.css';

/**
 * Escapes malicious HTML sequences inside property interpolations
 * to enforce the Markup Injection Guardrail.
 */
function escapeHtml(value: string = ''): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Embedded Pre-Hydration Layout Reset Stylesheet Block
 * Injects baseline modular resets inline to eliminate transparent vacuums on dev servers.
 * Parallel to the verified Checkbox fallback architecture.
 */
const fallbackStylesHtml = `
  <style data-ag-fallback="radio">
    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      gap: var(--ag-spacing-sm, 8px);
      line-height: var(--ag-line-height-normal, 1.5);
    }
    .radio-wrapper--label-start {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    .radio-input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      cursor: inherit;
      z-index: 1;
    }
    .radio-indicator {
      display: inline-block;
      box-sizing: border-box;
      flex-shrink: 0;
      border-radius: var(--ag-radius-full, 50%);
      position: relative;
      border: 2px solid currentColor;
      background-color: transparent;
      width: 18px;
      height: 18px;
    }
    .radio-indicator-small { width: 14px; height: 14px; }
    .radio-indicator-large { width: 22px; height: 22px; }
    .radio-input:checked + .radio-indicator::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
      background-color: currentColor;
      border-radius: 50%;
    }
  </style>
`.trim();

export function _RadioFallback(props: any = {}): string {
  const normalizedProps: RadioProps = {
    name: props.name || '',
    value: props.value || '',
    checked: props.checked !== undefined ? props.checked : props['checked'] === '' || props['checked'] === 'true',
    disabled: props.disabled !== undefined ? props.disabled : props['disabled'] === '' || props['disabled'] === 'true',
    required: props.required !== undefined ? props.required : props['required'] === '' || props['required'] === 'true',
    invalid: props.invalid !== undefined ? props.invalid : props['invalid'] === '' || props['invalid'] === 'true',
    size: props.size || 'medium',
    theme: props.theme || 'primary',
    labelText: props.labelText || props['label-text'] || props['labelText'] || '',
    labelPosition: props.labelPosition || props['label-position'] || props['labelPosition'] || 'end',
    label: props.label || '',
    labelHidden: props.labelHidden !== undefined ? props.labelHidden : props['label-hidden'] === '' || props['label-hidden'] === 'true',
    noLabel: props.noLabel !== undefined ? props.noLabel : props['no-label'] === '' || props['no-label'] === 'true',
    errorMessage: props.errorMessage || props['error-message'] || props['errorMessage'] || '',
    helpText: props.helpText || props['help-text'] || props['help-text'] || '',
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
  let resetSizeClass = '';

  if (size === 'small') {
    sizeClass = styles.radioIndicatorSmall;
    labelSizeClass = styles.radioLabelSmall;
    resetSizeClass = ' radio-indicator-small';
  } else if (size === 'large') {
    sizeClass = styles.radioIndicatorLarge;
    labelSizeClass = styles.radioLabelLarge;
    resetSizeClass = ' radio-indicator-large';
  }

  const theme = normalizedProps.theme || 'primary';
  const wrapperClasses = `
    ${styles.radioWrapper} radio-wrapper
    ${normalizedProps.labelPosition === 'start' ? `${styles.radioWrapperLabelStart} radio-wrapper--label-start` : ''}
  `.trim();

  const indicatorClasses = `
    ${styles.radioIndicator} radio-indicator
    ${sizeClass}${resetSizeClass}
    radio-indicator--${theme}
  `.trim();

  const labelClasses = `
    ${styles.radioLabel}
    ${labelSizeClass}
  `.trim();

  const radioControlHtml = `
    <label class="${wrapperClasses}" part="ag-radio-wrapper">
      <input
        type="radio"
        id="${inputId}"
        class="${styles.radioInput} radio-input"
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
      <div class="${styles.radioWrapperWithExternal} ag-radio-wrapper-with-external">
        ${externalLabelHtml}
        ${radioControlHtml}
        ${helperHtml}
        ${errorHtml}
      </div>
    `.trim();
  }

  return `
    ${fallbackStylesHtml}
    ${bodyHtml}
  `.trim();
}
