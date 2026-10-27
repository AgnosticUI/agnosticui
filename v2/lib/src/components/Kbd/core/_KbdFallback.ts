import { escapeHtml } from "../../../utils/escape.js";

export type KbdVariant = 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger' | 'error' | 'monochrome';
export type KbdSize = 'sm' | 'md' | 'lg';

export interface KbdFallbackProps {
  variant?: KbdVariant;
  bordered?: boolean | string;
  background?: boolean | string;
  size?: KbdSize;
  children?: string;
}

export function _KbdFallback(props: KbdFallbackProps): string {
  // Normalize Server/Meta-framework properties cleanly
  const variant = props.variant || 'default';
  const size = props.size || 'md';
  const bordered = props.bordered !== undefined ? (props.bordered === true || props.bordered === 'true' || props.bordered === '') : true;
  const background = props.background !== undefined ? (props.background === true || props.background === 'true' || props.background === '') : false;
  const content = props.children || '';

  // Single character detection strategy on the server side
  const trimmedContent = content.trim();
  const isSingleChar = trimmedContent.length === 1;

  // Build the inline attributes string mirroring the Web Component state mapping rules
  let hostAttributes = `variant="${escapeHtml(variant)}" size="${escapeHtml(size)}"`;
  if (bordered) hostAttributes += ' bordered';
  if (background) hostAttributes += ' background';
  if (isSingleChar) hostAttributes += ' single-char';

  // Render isomorphic markup emitting unhashed namespaces side-by-side with modular mapping shells
  return `<ag-kbd ${hostAttributes} style="display: inline-flex; font-family: monospace; font-size: var(--ag-font-size-sm);"><kbd class="ag-kbd-wrapper" part="ag-kbd-wrapper">${content}</kbd></ag-kbd>`;
}
