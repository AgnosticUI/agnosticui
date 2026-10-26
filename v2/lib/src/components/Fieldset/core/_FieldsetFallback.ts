import { escapeHtml } from '../../../utils/escape.js';
import type { FieldsetProps } from './_Fieldset.js';

/**
 * Explicitly broadens property value bounds to capture loosely-parsed values from meta-framework server phases
 * without provoking strict TS semantic type-overlap assignment gate blocks.
 */
export type FieldsetFallbackProps = Omit<FieldsetProps, 'bordered' | 'legendHidden'> & {
  bordered?: boolean | string;
  legendHidden?: boolean | string;
  children?: string;
};

/**
 * Isomorphic pure HTML string fallback generator engine.
 * Emits both unhashed global namespace hooks and modular placeholders side-by-side.
 */
export function _FieldsetFallback(props: FieldsetFallbackProps = {}): string {
  // Isomorphic normalizations parsing loosely-typed server attributes safely
  const isBordered = props.bordered !== undefined && (props.bordered === true || props.bordered === 'true' || props.bordered === '');
  const isLegendHidden = props.legendHidden !== undefined && (props.legendHidden === true || props.legendHidden === 'true' || props.legendHidden === '');
  const normalizedLayout = props.layout === 'horizontal' ? 'horizontal' : 'vertical';
  
  const legendText = props.legend ? escapeHtml(props.legend) : '';
  const nestedChildren = props.children || '';

  // Compose dynamic framework-agnostic global selectors matching client lifecycles
  const wrapperClasses = [
    'ag-fieldset',
    isBordered ? 'ag-fieldset--bordered' : '',
    normalizedLayout === 'horizontal' ? 'ag-fieldset--horizontal' : ''
  ].filter(Boolean).join(' ');

  const legendClasses = [
    'ag-fieldset-legend',
    isLegendHidden ? 'ag-fieldset-legend--hidden' : ''
  ].filter(Boolean).join(' ');

  const legendTemplate = legendText 
    ? `<legend class="${legendClasses}" part="ag-legend">${legendText}</legend>` 
    : '';

  return [
    `<fieldset class="${wrapperClasses}" part="ag-fieldset">`,
      legendTemplate,
      `<div class="ag-fieldset-content" part="ag-content">`,
        nestedChildren,
      `</div>`,
    `</fieldset>`
  ].join('');
}
