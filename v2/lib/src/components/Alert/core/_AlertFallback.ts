/* v2/lib/src/components/Alert/core/_AlertFallback.ts */

export interface AlertFallbackProps {
  variant?: 'warning' | 'info' | 'success' | 'error' | 'danger' | 'primary' | 'default' | 'monochrome';
  bordered?: boolean | string;
  rounded?: boolean | string;
  borderedLeft?: boolean | string;
  dismissible?: boolean | string;
  slotDefault?: string;
}

/**
 * _AlertFallback - Isomorphic Pure HTML String Engine
 * Emits side-by-side namespace fallback selectors to preserve layout boundary rules during SSR
 */
export function _AlertFallback(props: AlertFallbackProps): string {
  const variant = props.variant || 'default';
  const content = props.slotDefault || '';

  const isRounded = props.rounded !== undefined ? (props.rounded === true || props.rounded === 'true' || props.rounded === '') : false;
  const isBordered = props.bordered !== undefined ? (props.bordered === true || props.bordered === 'true' || props.bordered === '') : false;
  const isBorderedLeft = props.borderedLeft !== undefined ? (props.borderedLeft === true || props.borderedLeft === 'true' || props.borderedLeft === '') : false;
  const isDismissible = props.dismissible !== undefined ? (props.dismissible === true || props.dismissible === 'true' || props.dismissible === '') : false;

  const classes = [
    'ag-alert',
    `ag-alert-${variant}`,
    isRounded ? 'ag-alert-rounded' : '',
    isBordered ? 'ag-alert-bordered' : '',
    isBorderedLeft ? 'ag-alert-border-left' : ''
  ].filter(Boolean).join(' ');

  let closeButtonContent = '';
  if (isDismissible) {
    closeButtonContent = `
      <div class="ag-alert-close">
        <button type="button" class="ag-close-button ag-close-button-size-sm" aria-label="Dismiss alert" part="ag-close-button">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    `.trim();
  }

  return `
    <div class="${classes}" role="alert">
      <div class="ag-alert-content">
        ${content}
      </div>
      ${closeButtonContent}
    </div>
  `.trim();
}
