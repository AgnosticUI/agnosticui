import styles from './divider-structure.module.css';
import type { DividerProps } from './_Divider.js';

/**
 * Explicitly broadens property value bounds to capture loosely-parsed values from meta-framework server phases
 * without provoking strict TS semantic type-overlap assignment gate blocks.
 */
export type DividerFallbackProps = Omit<DividerProps, 'vertical'> & {
  vertical?: boolean | string;
  children?: string;
};

/**
 * Isomorphic pure HTML string fallback generator engine.
 * Emits both unhashed global namespace hooks and modular placeholders side-by-side.
 */
export function _DividerFallback(props: DividerFallbackProps = {}): string {
  // Isomorphic normalizations parsing loosely-typed server attributes safely
  const isVertical = props.vertical === true || props.vertical === 'true' || props.vertical === '';
  const justify = props.justify || 'center';
  const size = props.size || 'default';
  const variant = props.variant || 'default';
  const slotContent = props.children || '';
  const hasContent = slotContent.trim().length > 0;

  const sizeCapitalized = size.charAt(0).toUpperCase() + size.slice(1);
  const justifyCapitalized = justify.charAt(0).toUpperCase() + justify.slice(1);

  const sizeKey = `dividerSize${sizeCapitalized}`;
  const justifyKey = `dividerJustify${justifyCapitalized}`;

  const wrapperClasses = [
    'divider',
    'ag-divider',
    styles.dividerWrapper
  ];

  if (isVertical) {
    wrapperClasses.push('divider-vertical', 'ag-divider--vertical', styles.dividerVertical);
  }

  if (size !== 'default') {
    wrapperClasses.push(`divider-${size}`, `ag-divider--${size}`);
    if (styles[sizeKey]) wrapperClasses.push(styles[sizeKey]);
  }

  if (justify !== 'center' && !isVertical) {
    wrapperClasses.push(`divider-justify-${justify}`, `ag-divider--justify-${justify}`);
    if (styles[justifyKey]) wrapperClasses.push(styles[justifyKey]);
  }

  if (variant !== 'default') {
    wrapperClasses.push(`divider-${variant}`, `ag-divider--variant-${variant}`);
  }

  const contentClasses = [
    'divider-content',
    'ag-divider-content',
    styles.dividerContent
  ];

  if (hasContent) {
    contentClasses.push('divider-has-content', 'ag-divider--has-content', styles.dividerHasContent);
  }

  const orientation = isVertical ? 'vertical' : 'horizontal';

  return `
    <div 
      class="${wrapperClasses.join(' ').trim()}" 
      part="ag-divider" 
      role="separator" 
      aria-orientation="${orientation}"
    >
      <span class="${contentClasses.join(' ').trim()}" part="ag-divider-content">${slotContent}</span>
    </div>
  `.trim();
}
