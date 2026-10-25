import styles from './checkbox-structure.module.css';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxTheme = 'default' | 'primary' | 'success' | 'monochrome';

export interface CheckboxFallbackProps {
  name?: string;
  value?: string;
  checked?: boolean | string;
  indeterminate?: boolean | string;
  disabled?: boolean | string;
  size?: CheckboxSize;
  theme?: CheckboxTheme;
  labelText?: string;
  labelPosition?: 'end' | 'start';
  required?: boolean | string;
  invalid?: boolean | string;
  errorMessage?: string;
  helpText?: string;
  slotContent?: string;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * _CheckboxFallback
 * 
 * An Isomorphic Pure HTML String Engine built to eliminate pre-hydration style voids.
 * 
 * NOTE ON CLASS DUPLICATION:
 * This component outputs BOTH hashed CSS Module references (e.g. `styles.checkboxWrapper`) 
 * and unhashed namespace fallbacks (e.g. `ag-checkbox-wrapper`). 
 * 
 * 1. The `ag-` global fallback classes ensure immediate geometric painting on the server.
 * 2. The dynamic `styles` class hashes ensure that when the framework hydrator executes 
 *    DOM reconciliation, the token already matches, making client activation near zero-cost.
 * 
 * For deep-dive architectural context, see the docs: "How SSR Fallbacks Work"
 */
export function _CheckboxFallback(props: CheckboxFallbackProps = {}): string {
  const isChecked = props.checked === true || props.checked === 'true' || props.checked === '';
  const isIndeterminate = props.indeterminate === true || props.indeterminate === 'true' || props.indeterminate === '';
  const isDisabled = props.disabled === true || props.disabled === 'true' || props.disabled === '';
  const isRequired = props.required === true || props.required === 'true' || props.required === '';
  const isInvalid = props.invalid === true || props.invalid === 'true' || props.invalid === '';

  const name = props.name || '';
  const value = props.value || '';
  const size = props.size || 'medium';
  const theme = props.theme || 'primary';
  const labelText = props.labelText || '';
  const labelPosition = props.labelPosition || 'end';
  const errorMessage = props.errorMessage || '';
  const helpText = props.helpText || '';
  const slotContent = props.slotContent || '';

  // Intertwine the runtime CSS module hash map with the portable .ag cascade protector
  const wrapperClasses = [styles.checkboxWrapper, 'ag-checkbox-wrapper'];
  if (labelPosition === 'start') {
    wrapperClasses.push(styles.checkboxWrapperLabelStart, 'ag-checkbox-wrapper--label-start');
  }

  const indicatorClasses = [
    styles.checkboxLabel, 
    'ag-checkbox-indicator', 
    'ag-checkbox-label', 
    `ag-checkbox-label--${size}`, 
    `ag-checkbox-label--${theme}`
  ];
  if (size === 'small') indicatorClasses.push(styles.checkboxLabelSmall);
  if (size === 'medium') indicatorClasses.push(styles.checkboxLabelMedium);
  if (size === 'large') indicatorClasses.push(styles.checkboxLabelLarge);
  if (theme === 'default') indicatorClasses.push(styles.checkboxLabelDefault);
  if (theme === 'primary') indicatorClasses.push(styles.checkboxLabelPrimary);
  if (theme === 'success') indicatorClasses.push(styles.checkboxLabelSuccess);
  if (theme === 'monochrome') indicatorClasses.push(styles.checkboxLabelMonochrome);

  const textLabelClasses = [styles.checkboxLabelCopy, 'ag-checkbox-label-copy', `ag-checkbox-label-copy--${size}`];
  if (size === 'small') textLabelClasses.push(styles.checkboxLabelCopySmall);
  if (size === 'medium') textLabelClasses.push(styles.checkboxLabelCopyMedium);
  if (size === 'large') textLabelClasses.push(styles.checkboxLabelCopyLarge);

  const helperHtml = helpText
    ? `<div class="ag-form-control__helper ag-checkbox__helper" part="ag-checkbox-helper">${escapeHtml(helpText)}</div>`
    : '';

  const errorHtml = isInvalid && errorMessage
    ? `<div class="ag-form-control__error ag-checkbox__error" part="ag-checkbox-error">${escapeHtml(errorMessage)}</div>`
    : '';

  const requiredIndicator = isRequired
    ? `<span class="ag-form-control__required" aria-label="required">*</span>`
    : '';

  const ariaCheckedState = isIndeterminate ? 'mixed' : (isChecked ? 'true' : 'false');
  const checkedAttr = isChecked ? 'checked' : '';
  const disabledAttr = isDisabled ? 'disabled' : '';
  const requiredAttr = isRequired ? 'required aria-required="true"' : '';
  const invalidAttr = isInvalid ? 'aria-invalid="true"' : 'aria-invalid="false"';

  const nativeInputHtml = `
    <input
      type="checkbox"
      class="${styles.checkboxInput} ag-checkbox-input"
      part="ag-checkbox-input"
      ${name ? `name="${escapeHtml(name)}"` : ''}
      ${value ? `value="${escapeHtml(value)}"` : ''}
      ${checkedAttr}
      ${disabledAttr}
      ${requiredAttr}
      ${invalidAttr}
      aria-label="${escapeHtml(labelText || 'Checkbox')}"
      aria-checked="${ariaCheckedState}"
    />
  `.trim();

  return `
    <div class="${styles.checkboxContainer} ag-checkbox-container">
      <label class="${wrapperClasses.join(' ').trim()}" part="ag-checkbox-wrapper">
        ${nativeInputHtml}
        <span class="${indicatorClasses.join(' ').trim()}" part="ag-checkbox-indicator" aria-hidden="true"></span>
        <span class="${textLabelClasses.join(' ').trim()}" part="ag-checkbox-label">
          ${labelText ? escapeHtml(labelText) : slotContent}
          ${requiredIndicator}
        </span>
      </label>
      ${helperHtml}
      ${errorHtml}
    </div>
  `.trim();
}
