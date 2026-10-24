// v2/lib/src/components/Checkbox/core/_InputFallback.ts (Part 1 of 2)
import styles from './checkbox-structure.module.css';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxTheme = 'default' | 'primary' | 'success' | 'monochrome';

export interface CheckboxFallbackProps {
  name?: string;
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  theme?: CheckboxTheme;
  labelText?: string;
  labelPosition?: 'end' | 'start';
  required?: boolean;
  invalid?: boolean;
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

// v2/lib/src/components/Checkbox/core/_InputFallback.ts (Part 2 of 2)

export function _InputFallback(props: CheckboxFallbackProps = {}): string {
  const {
    name = '',
    value = '',
    checked = false,
    indeterminate = false,
    disabled = false,
    size = 'medium',
    theme = 'primary',
    labelText = '',
    labelPosition = 'end',
    required = false,
    invalid = false,
    errorMessage = '',
    helpText = '',
    slotContent = '',
  } = props;

  // 1. Resolve Dynamic Layout Classes from CSS Module alongside fallback literals
  const wrapperClasses = ['checkbox-wrapper'];
  if (labelPosition === 'start') wrapperClasses.push(styles.checkboxWrapperLabelStart, 'checkbox-wrapper--label-start');

  const indicatorClasses = ['checkbox-indicator', 'checkbox-label'];
  if (size === 'small') indicatorClasses.push(styles.checkboxLabelSmall, 'checkbox-label--small');
  if (size === 'medium') indicatorClasses.push(styles.checkboxLabelMedium, 'checkbox-label--medium');
  if (size === 'large') indicatorClasses.push(styles.checkboxLabelLarge, 'checkbox-label--large');
  if (theme === 'default') indicatorClasses.push(styles.checkboxLabelDefault, 'checkbox-label--default');
  if (theme === 'primary') indicatorClasses.push(styles.checkboxLabelPrimary, 'checkbox-label--primary');
  if (theme === 'success') indicatorClasses.push(styles.checkboxLabelSuccess, 'checkbox-label--success');
  if (theme === 'monochrome') indicatorClasses.push(styles.checkboxLabelMonochrome, 'checkbox-label--monochrome');

  const textLabelClasses = ['checkbox-label-copy'];
  if (size === 'small') textLabelClasses.push(styles.checkboxLabelCopySmall, 'checkbox-label-copy--small');
  if (size === 'medium') textLabelClasses.push(styles.checkboxLabelCopyMedium, 'checkbox-label-copy--medium');
  if (size === 'large') textLabelClasses.push(styles.checkboxLabelCopyLarge, 'checkbox-label-copy--large');

  // 2. Compute Helper, Error, and Required Markup blocks safely
  const helperHtml = helpText
    ? `<div class="ag-form-control__helper ag-checkbox__helper" part="ag-checkbox-helper">${escapeHtml(helpText)}</div>`
    : '';

  const errorHtml = invalid && errorMessage
    ? `<div class="ag-form-control__error ag-checkbox__error" part="ag-checkbox-error">${escapeHtml(errorMessage)}</div>`
    : '';

  const requiredIndicator = required
    ? `<span class="ag-form-control__required" aria-label="required">*</span>`
    : '';

  // 3. Assemble Core Input Attribute Strings
  const ariaCheckedState = indeterminate ? 'mixed' : (checked ? 'true' : 'false');
  const checkedAttr = checked ? 'checked' : '';
  const disabledAttr = disabled ? 'disabled' : '';
  const requiredAttr = required ? 'required aria-required="true"' : '';
  const invalidAttr = invalid ? 'aria-invalid="true"' : 'aria-invalid="false"';

  const nativeInputHtml = `
    <input
      type="checkbox"
      class="${styles.checkboxInput} checkbox-input"
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

  // 4. Final Core Structural Assembler Layout
  return `
    <div class="${styles.agCheckboxContainer} ag-checkbox-container">
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
