import styles from './icon-structure.module.css';
import { escapeHtml } from '../../../utils/escape.js';

export type IconSize = '14' | '16' | '18' | '20' | '24' | '32' | '36' | '40' | '48' | '56' | '64' | '';
export type IconType = 'info' | 'primary' | 'action' | 'success' | 'warning' | 'error' | 'monochrome' | '';

export interface IconFallbackProps {
  size?: IconSize;
  type?: IconType;
  noFill?: boolean | string;
  slot?: string;
}

export function _IconFallback(props: IconFallbackProps = {}): string {
  // Isomorphic Boolean Normalization Block
  const isNoFill = props.noFill !== undefined 
    ? (props.noFill === true || props.noFill === 'true' || props.noFill === '') 
    : false;

  const sizeAttr = props.size ? props.size : '16';
  const typeAttr = props.type ? props.type : '';
  const slotContent = props.slot ? props.slot : '';

  // CSS Modules camelCase Key Maps
  const sizeKey = `icon${sizeAttr}` as keyof typeof styles;
  const layoutClass = styles[sizeKey] || styles.icon16;
  const globalSizeClass = `ag-icon-${sizeAttr}`;

  // Assemble the dual-class architecture template literal safely
  return `<span 
    class="${styles.iconBase} ${layoutClass} ag-icon-base ${globalSizeClass}" 
    part="icon-base"
    ${sizeAttr ? `size="${escapeHtml(sizeAttr)}"` : ''}
    ${typeAttr ? `type="${escapeHtml(typeAttr)}"` : ''}
    ${isNoFill ? 'no-fill' : ''}
  >${slotContent}</span>`;
}
