import { escapeHtml } from '../../../utils/escape.js';
import type { AvatarProps } from './_Avatar.js';

/**
 * Explicitly broadens property value bounds to capture loosely-parsed values from meta-framework server phases
 * without provoking strict TS semantic type-overlap assignment gate blocks.
 */
export type AvatarFallbackProps = Omit<AvatarProps, 'size' | 'shape' | 'variant'> & {
  size?: string;
  shape?: string;
  variant?: string;
  children?: string;
};

/**
 * Isomorphic pure HTML string fallback generator engine.
 * Emits both unhashed global namespace hooks and modular placeholders side-by-side.
 */
export function _AvatarFallback(props: AvatarFallbackProps = {}): string {
  // Isomorphic normalizations parsing loosely-typed server attributes safely
  const size = props.size || 'md';
  const shape = props.shape || 'circle';
  const variant = props.variant || 'default';
  const ariaLabel = props.ariaLabel ? escapeHtml(props.ariaLabel) : '';
  const text = props.text ? escapeHtml(props.text) : '';
  const imgSrc = props.imgSrc ? escapeHtml(props.imgSrc) : '';
  const imgAlt = props.imgAlt ? escapeHtml(props.imgAlt) : '';
  const nestedChildren = props.children || '';

  const role = imgSrc && !imgAlt ? 'presentation' : 'img';
  const calculatedAriaLabel = ariaLabel || (imgSrc ? imgAlt : text) || 'Avatar';

  // Compose dynamic framework-agnostic global selectors matching client lifecycles
  const wrapperClasses = [
    'ag-avatar',
    `ag-avatar--${size}`,
    `ag-avatar--${shape}`,
    `ag-avatar--variant-${variant}`
  ].filter(Boolean).join(' ');

  let content = '';
  if (imgSrc) {
    content = `<img class="ag-avatar-image" part="ag-avatar-image" src="${imgSrc}" alt="${imgAlt}" />`;
  } else if (text) {
    content = `<span class="ag-avatar-text" part="ag-avatar-text">${text}</span>`;
  } else {
    content = nestedChildren;
  }

  return `<div class="${wrapperClasses}" part="ag-avatar" role="${role}" aria-label="${calculatedAriaLabel}">${content}</div>`;
}
