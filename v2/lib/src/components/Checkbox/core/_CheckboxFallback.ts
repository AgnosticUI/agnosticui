// v2/lib/src/components/Checkbox/core/_CheckboxFallback.ts (Part 1 of 2)
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

/**
 * Embedded Pre-Hydration Layout Reset Stylesheet Block
 * Injects baseline modular resets inline to completely eliminate the
 * heavy black user-agent unstyled native flash on hard page refreshes.
 */
const fallbackStylesHtml = `
  <style data-ag-fallback="checkbox">
    .ag-checkbox-container {
      display: block;
    }
    .checkbox-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      gap: 0;
    }
    .checkbox-wrapper--label-start {
      flex-direction: row-reverse;
    }
    .checkbox-input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      margin: 0;
      padding: 0;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    }
    .checkbox-label {
      position: relative;
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }
    .checkbox-label::before {
      content: '';
      display: inline-block;
      flex-shrink: 0;
      margin-inline-end: var(--ag-space-3);
      border-radius: var(--ag-radius-sm);
      transition: all var(--ag-motion-fast) ease-in-out;
    }
    .checkbox-label::after {
      content: '';
      position: absolute;
      display: block;
      opacity: 0;
      transform: rotate(40deg) scale(0);
      transform-origin: center center;
      transition: all var(--ag-motion-fast) ease-in-out;
    }
  </style>
`.trim();

export function _CheckboxFallback(props: CheckboxFallbackProps = {}): string {
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

  // 1. Resolve Dynamic Layout Classes from CSS Module alongside unhashed fallbacks
  const wrapperClasses = [styles.checkboxWrapper, 'checkbox-wrapper'];
  if (labelPosition === 'start') wrapperClasses.push(styles.checkboxWrapperLabelStart, 'checkbox-wrapper--label-start');

  const indicatorClasses = [styles.checkboxLabel, 'checkbox-indicator', 'checkbox-label'];
  if (size === 'small') indicatorClasses.push(styles.checkboxLabelSmall, 'checkbox-label--small');
  if (size === 'medium') indicatorClasses.push(styles.checkboxLabelMedium, 'checkbox-label--medium');
  if (size === 'large') indicatorClasses.push(styles.checkboxLabelLarge, 'checkbox-label--large');
  if (theme === 'default') indicatorClasses.push(styles.checkboxLabelDefault, 'checkbox-label--default');
  if (theme === 'primary') indicatorClasses.push(styles.checkboxLabelPrimary, 'checkbox-label--primary');
  if (theme === 'success') indicatorClasses.push(styles.checkboxLabelSuccess, 'checkbox-label--success');
  if (theme === 'monochrome') indicatorClasses.push(styles.checkboxLabelMonochrome, 'checkbox-label--monochrome');

  const textLabelClasses = [styles.checkboxLabelCopy, 'checkbox-label-copy'];
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

  // 4. Final Core Structural Assembler Layout incorporating the pre-hydration styles
  return `
    ${fallbackStylesHtml}
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
