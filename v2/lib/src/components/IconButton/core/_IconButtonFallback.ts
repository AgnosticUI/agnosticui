/* v2/lib/src/components/IconButton/core/_IconButtonFallback.ts */
import { escapeHtml } from '../../../utils/escape.js';

export interface IconButtonFallbackProps {
  label: string;
  icon?: string;
  unicode?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean | string;
  pressed?: boolean | string;
  loading?: boolean | string;
  /** Toggles Option 1 (completely empty internal frame) instead of the Option 2 placeholder ring */
  useEmptyIcon?: boolean | string;
}

/**
 * _IconButtonFallback - Isomorphic Pure HTML String Engine
 * 
 * Emits dual-class fallback targets to prevent Flash of Unstyled Content (FOUC)
 * and secure Cumulative Layout Shift (CLS) stability during server rendering passes.
 */
export function _IconButtonFallback(props: IconButtonFallbackProps): string {
  const label = props.label ? escapeHtml(props.label) : '';
  const type = props.type || 'button';
  const size = props.size || 'md';
  const variant = props.variant || 'ghost';

  // Isomorphic Boolean/String Attribute Normalization Gate
  const isDisabled = props.disabled !== undefined ? (props.disabled === true || props.disabled === 'true' || props.disabled === '') : false;
  const isPressed = props.pressed !== undefined ? (props.pressed === true || props.pressed === 'true' || props.pressed === '') : false;
  const isLoading = props.loading !== undefined ? (props.loading === true || props.loading === 'true' || props.loading === '') : false;
  const useEmptyIcon = props.useEmptyIcon !== undefined ? (props.useEmptyIcon === true || props.useEmptyIcon === 'true' || props.useEmptyIcon === '') : false;

  const disabledAttr = isDisabled ? ' disabled' : '';
  const pressedAttr = isPressed ? ' aria-pressed="true"' : '';

  let iconContent = '';
  if (props.unicode) {
    // Unicode Symbol Fallback Channel
    iconContent = `<span class="ag-icon-button-icon" aria-hidden="true">${escapeHtml(props.unicode)}</span>`;
  } else if (props.icon) {
    if (useEmptyIcon) {
      // Option 1: Completely Empty Internal Frame for zero visual flashing
      iconContent = `<span class="ag-icon-button-icon" aria-hidden="true" data-icon="${escapeHtml(props.icon)}"></span>`;
    } else {
      // Option 2: Default Intentionally Muted Dashed Wireframe Ring
      // Calibrated to stroke-width="1" for an exceptionally light visual indicator
      iconContent = `
        <span class="ag-icon-button-icon" aria-hidden="true" data-icon="${escapeHtml(props.icon)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true" style="opacity: 0.25;">
            <circle cx="12" cy="12" r="9" stroke-dasharray="3 3" />
          </svg>
        </span>
      `;
    }
  }

  let loadingContent = '';
  if (isLoading) {
    loadingContent = `
      <span class="ag-icon-button-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" focusable="false" aria-hidden="true" style="animation: spin 1s linear infinite;">
          <path d="M21 12a9 9 0 11-6.219-8.56"/>
        </svg>
      </span>
    `;
  }

  return `
    <button
      class="ag-icon-button ag-icon-button-size-${size} ag-icon-button-variant-${variant}${isLoading ? ' ag-icon-button-loading' : ''}"
      type="${type}"
      aria-label="${label}"${pressedAttr}${disabledAttr}
    >
      ${iconContent}
      ${loadingContent}
    </button>
  `.trim();
}
