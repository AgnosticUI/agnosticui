import { escapeHtml } from "../../../utils/escape.js";

export type TagVariant = 'info' | 'warning' | 'error' | 'success' | 'primary' | 'monochrome' | '';
export type TagShape = 'pill' | 'round' | 'circle' | '';

export interface TagFallbackProps {
  variant?: TagVariant;
  shape?: TagShape;
  uppercase?: boolean | string;
  removable?: boolean | string;
  children?: string;
}

/**
 * Isomorphic Pure HTML String Engine for the Tag Component
 */
export function _TagFallback(props: TagFallbackProps = {}): string {
  const variant = props.variant || '';
  const shape = props.shape || '';
  const text = props.children || '';

  const uppercase = props.uppercase !== undefined
    ? (props.uppercase === true || props.uppercase === 'true' || props.uppercase === '')
    : false;

  const removable = props.removable !== undefined
    ? (props.removable === true || props.removable === 'true' || props.removable === '')
    : false;

  const hostClasses: string[] = ['ag-tag-host'];
  const wrapperClasses: string[] = ['ag-tag-wrapper'];

  if (variant) {
    hostClasses.push(`ag-tag-variant-${variant}`);
  }
  if (shape) {
    hostClasses.push(`ag-tag-shape-${shape}`);
    if (shape === 'circle') {
      wrapperClasses.push('ag-tag-shape-circle-wrapper');
    }
  }
  if (uppercase) {
    hostClasses.push('ag-tag-uppercase-host');
    wrapperClasses.push('ag-tag-uppercase');
  }

  let closeButtonHtml = '';
  if (removable) {
    closeButtonHtml = `
      <button class="ag-tag-remove-button" type="button" aria-label="Remove tag">
        <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1em; height: 1em;">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `.trim();
  }

  return `
    <span class="${hostClasses.join(' ')}">
      <span class="${wrapperClasses.join(' ')}">
        ${escapeHtml(text)}
        ${closeButtonHtml}
      </span>
    </span>
  `.trim();
}
