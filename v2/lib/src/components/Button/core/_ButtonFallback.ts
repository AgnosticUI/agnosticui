import styles from './button-structure.module.css';
import { escapeHtml } from '../../../utils/escape.js';

export interface ButtonFallbackProps {
  variant?: 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | 'monochrome' | '';
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  bordered?: boolean | string;
  ghost?: boolean | string;
  link?: boolean | string;
  grouped?: boolean | string;
  fullWidth?: boolean | string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean | string;
  loading?: boolean | string;
  toggle?: boolean | string;
  pressed?: boolean | string;
  ariaLabel?: string;
  slotContent?: string;
}

export function _ButtonFallback(props: ButtonFallbackProps = {}): string {
  const variant = props.variant || '';
  const size = props.size || 'md';
  const shape = props.shape || '';
  const allowedTypes = ['button', 'submit', 'reset'];

  const type = allowedTypes.includes(props.type || '')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ? props.type!
    : 'button';

  const ariaLabel = props.ariaLabel ? escapeHtml(props.ariaLabel) : '';
  const slotContent = props.slotContent || '';

  // Isomorphic Normalization Boundaries
  const bordered: boolean = props.bordered === true || props.bordered === 'true' || props.bordered === '';
  const ghost: boolean = props.ghost === true || props.ghost === 'true' || props.ghost === '';
  const link: boolean = props.link === true || props.link === 'true' || props.link === '';
  const grouped: boolean = props.grouped === true || props.grouped === 'true' || props.grouped === '';
  const fullWidth: boolean = props.fullWidth === true || props.fullWidth === 'true' || props.fullWidth === '';
  const disabled: boolean = props.disabled === true || props.disabled === 'true' || props.disabled === '';
  const loading: boolean = props.loading === true || props.loading === 'true' || props.loading === '';
  const toggle: boolean = props.toggle === true || props.toggle === 'true' || props.toggle === '';
  const pressed: boolean = props.pressed === true || props.pressed === 'true' || props.pressed === '';

  const classes: string[] = [styles.baseButton, 'ag-button'];

  // 1. Variant Mappings
  if (variant === 'primary') classes.push(styles.variantPrimary, 'ag-button--primary');
  else if (variant === 'secondary') classes.push(styles.variantSecondary, 'ag-button--secondary');
  else if (variant === 'success') classes.push(styles.variantSuccess, 'ag-button--success');
  else if (variant === 'warning') classes.push(styles.variantWarning, 'ag-button--warning');
  else if (variant === 'danger') classes.push(styles.variantDanger, 'ag-button--danger');
  else if (variant === 'monochrome') classes.push(styles.variantMonochrome, 'ag-button--monochrome');

  // 2. Size Mappings
  if (size === 'x-sm') classes.push(styles.sizeXSm, 'ag-button--x-sm');
  else if (size === 'sm') classes.push(styles.sizeSm, 'ag-button--sm');
  else if (size === 'md') classes.push(styles.sizeMd, 'ag-button--md');
  else if (size === 'lg') classes.push(styles.sizeLg, 'ag-button--lg');
  else if (size === 'xl') classes.push(styles.sizeXl, 'ag-button--xl');

  // 3. Shape Mappings
  if (shape === 'capsule') classes.push(styles.shapeCapsule, 'ag-button--capsule');
  else if (shape === 'rounded') classes.push(styles.shapeRounded, 'ag-button--rounded');
  else if (shape === 'circle') classes.push(styles.shapeCircle, 'ag-button--circle');
  else if (shape === 'square') classes.push(styles.shapeSquare, 'ag-button--square');
  else if (shape === 'rounded-square') classes.push(styles.shapeRoundedSquare, 'ag-button--rounded-square');

  // 4. Boolean Layout State Mappings
  if (bordered) classes.push(styles.isBordered, 'ag-button--bordered');
  if (ghost) classes.push(styles.isGhost, 'ag-button--ghost');
  if (link) classes.push(styles.isLink, 'ag-button--link');
  if (grouped) classes.push(styles.isGrouped, 'ag-button--grouped');
  
  const isDisabled = disabled || loading;
  if (isDisabled) classes.push(styles.isDisabled, 'ag-button--disabled');

  const buttonClassList = classes.filter(Boolean).join(' ').trim();
  const hostClass = fullWidth ? `${styles.fullWidth} ag-button-container ag-button--full-width` : 'ag-button-container';

  const hasAriaLabel = ariaLabel ? `aria-label="${ariaLabel}"` : '';
  const hasAriaBusy = loading ? 'aria-busy="true"' : '';
  const hasAriaPressed = toggle ? `aria-pressed="${pressed ? 'true' : 'false'}"` : '';

  const buttonElementHtml = `
    <button
      type="${type}"
      class="${buttonClassList}"
      part="ag-button"
      ${isDisabled ? 'disabled' : ''}
      aria-disabled="${isDisabled ? 'true' : 'false'}"
      ${hasAriaBusy}
      ${hasAriaPressed}
      ${hasAriaLabel}
    >${slotContent}</button>`.trim();

  if (fullWidth) {
    return `
      <div class="${hostClass}">
        ${buttonElementHtml}
      </div>`.trim();
  }

  return buttonElementHtml;
}
