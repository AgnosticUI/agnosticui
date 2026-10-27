import { escapeHtml } from "../../../utils/escape.js";

export type LoaderSize = 'small' | 'default' | 'large';

export interface LoaderFallbackProps {
  size?: LoaderSize;
  ariaLabel?: string;
  children?: string;
}

export function _LoaderFallback(props: LoaderFallbackProps): string {
  // Normalize layout properties safely on the server side
  const size = props.size || 'default';
  const ariaLabel = props.ariaLabel !== undefined ? props.ariaLabel : 'Loading...';
  const slottedContent = props.children || ariaLabel;

  // Build the inline attribute bindings matching the web component configuration states
  const hostAttributes = `size="${escapeHtml(size)}" aria-label="${escapeHtml(ariaLabel)}"`;

  // Render isomorphic markup emitting unhashed namespaces side-by-side with modular mapping shells
  return `<ag-loader ${hostAttributes} style="display: inline-block;"><div class="ag-loader" part="ag-loader" aria-busy="true"><span class="ag-loader-label" role="progressbar" aria-label="Loading" part="ag-loader-label">${slottedContent}</span></div></ag-loader>`;
}
