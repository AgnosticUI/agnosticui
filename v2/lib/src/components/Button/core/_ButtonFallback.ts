// v2/lib/src/components/Button/core/_ButtonFallback.ts
import styles from './button-structure.module.css';

export interface ButtonFallbackProps {
  variant?: 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | 'monochrome' | '';
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  bordered?: boolean;
  ghost?: boolean;
  link?: boolean;
  grouped?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  toggle?: boolean;
  pressed?: boolean;
  ariaLabel?: string;
  slotContent?: string;
}

export function _ButtonFallback(props: ButtonFallbackProps = {}): string {
  const {
    variant = '',
    size = 'md',
    shape = '',
    bordered = false,
    ghost = false,
    link = false,
    grouped = false,
    fullWidth = false,
    type = 'button',
    disabled = false,
    loading = false,
    toggle = false,
    pressed = false,
    ariaLabel = '',
    slotContent = '',
  } = props;

  const classes: string[] = [];

  // 1. Variant Mappings
  if (variant === 'primary') classes.push(styles.variantPrimary);
  else if (variant === 'secondary') classes.push(styles.variantSecondary);
  else if (variant === 'success') classes.push(styles.variantSuccess);
  else if (variant === 'warning') classes.push(styles.variantWarning);
  else if (variant === 'danger') classes.push(styles.variantDanger);
  else if (variant === 'monochrome') classes.push(styles.variantMonochrome);

  // 2. Size Mappings
  if (size === 'x-sm') classes.push(styles.sizeXSm);
  else if (size === 'sm') classes.push(styles.sizeSm);
  else if (size === 'md') classes.push(styles.sizeMd);
  else if (size === 'lg') classes.push(styles.sizeLg);
  else if (size === 'xl') classes.push(styles.sizeXl);

  // 3. Shape Mappings
  if (shape === 'capsule') classes.push(styles.shapeCapsule);
  else if (shape === 'rounded') classes.push(styles.shapeRounded);
  else if (shape === 'circle') classes.push(styles.shapeCircle);
  else if (shape === 'square') classes.push(styles.shapeSquare);
  else if (shape === 'rounded-square') classes.push(styles.shapeRoundedSquare);

  // 4. Boolean Layout State Classes
  if (bordered) classes.push(styles.isBordered);
  if (ghost) classes.push(styles.isGhost);
  if (link) classes.push(styles.isLink);
  if (grouped) classes.push(styles.isGrouped);
  if (disabled || loading) classes.push(styles.isDisabled);

  const buttonClassList = classes.filter(Boolean).join(' ').trim();
  const hostClass = fullWidth ? styles.fullWidth : '';

  const isDisabled = disabled || loading;
  const hasAriaLabel = ariaLabel ? `aria-label="${ariaLabel}"` : '';
  const hasAriaBusy = loading ? 'aria-busy="true"' : '';
  const hasAriaPressed = toggle ? `aria-pressed="${pressed ? 'true' : 'false'}"` : '';

  const buttonElementHtml = `
    <button
      type="${type}"
      class="${buttonClassList}"
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
