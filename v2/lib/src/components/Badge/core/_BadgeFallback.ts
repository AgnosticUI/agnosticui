import styles from './badge-structure.module.css';
import { escapeHtml } from '../../../utils/escape.js';
import type { BadgeProps } from './_Badge.js';

export function _BadgeFallback(props: BadgeProps = {}): string {
  const isDot = props.dot === true || (props.dot as unknown as string) === 'true' || (props.dot as unknown as string) === '';
  const isInteractive = props.interactive === true || (props.interactive as unknown as string) === 'true' || (props.interactive as unknown as string) === '';
  const hiddenFromAT = props.hiddenFromAT === true || (props.hiddenFromAT as unknown as string) === 'true' || (props.hiddenFromAT as unknown as string) === '';

  const variant = props.variant || 'default';
  const size = props.size || 'md';
  const max = props.max !== undefined ? Number(props.max) : 99;
  const statusLabel = props.statusLabel || '';

  let displayValue = '';
  if (props.value !== null && props.value !== undefined) {
    const numericVal = Number(props.value);
    displayValue = numericVal > max ? `${max}+` : numericVal.toString();
  }

  let sizeStyle = styles.sizeMd;
  if (size === 'xs') sizeStyle = styles.sizeXs;
  if (size === 'sm') sizeStyle = styles.sizeSm;

  let variantStyle = styles.variantDefault;
  if (variant === 'primary') variantStyle = styles.variantPrimary;
  if (variant === 'success') variantStyle = styles.variantSuccess;
  if (variant === 'warning') variantStyle = styles.variantWarning;
  if (variant === 'danger') variantStyle = styles.variantDanger;
  if (variant === 'info') variantStyle = styles.variantInfo;
  if (variant === 'neutral') variantStyle = styles.variantNeutral;
  if (variant === 'monochrome') variantStyle = styles.variantMonochrome;

  const isSingleChar = displayValue.length === 1 && !isDot;

  const badgeClasses = [
    styles.badge,
    'badge',
    `ag-badge--${size}`,
    `ag-badge--${variant}`,
    sizeStyle,
    variantStyle
  ];
  if (isDot) badgeClasses.push(styles.dot, 'dot', 'ag-badge--dot');
  if (isInteractive) badgeClasses.push(styles.interactive, 'ag-badge--interactive');
  if (isSingleChar) badgeClasses.push(styles.singleChar, 'ag-badge--single-char');

  const roleAttr = isInteractive ? ' role="button"' : '';
  const tabAttr = isInteractive ? ' tabindex="0"' : '';
  const labelAttr = statusLabel ? ` aria-label="${escapeHtml(statusLabel)}"` : '';
  const hiddenAttr = (isDot && !statusLabel) || hiddenFromAT ? ' aria-hidden="true"' : ' aria-hidden="false"';

  return `
    <span class="${styles.badgeWrapper || ''} ag-badge-wrapper">
      <span
        part="ag-badge"
        class="${badgeClasses.join(' ').trim()}"
        ${roleAttr}
        ${tabAttr}
        ${labelAttr}
        ${hiddenAttr}
      >${isDot ? '' : displayValue}</span>
    </span>
  `.trim();
}
