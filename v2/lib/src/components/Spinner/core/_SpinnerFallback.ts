import { escapeHtml } from "../../../utils/escape.js";

export type SpinnerSize = 'small' | 'default' | 'large' | 'xlarge';

export interface SpinnerFallbackProps {
  size?: SpinnerSize;
  ariaLabel?: string;
  children?: string;
}

export function _SpinnerFallback(props: SpinnerFallbackProps): string {
  // Normalize parameters safely on the server side
  const size = props.size || 'default';
  const ariaLabel = props.ariaLabel !== undefined ? props.ariaLabel : 'Loading...';
  const slottedContent = props.children || ariaLabel;

  // Build the inline attributes string mirroring the web component configuration states
  const hostAttributes = `size="${escapeHtml(size)}" aria-label="${escapeHtml(ariaLabel)}"`;

  // Render isomorphic markup emitting unhashed namespaces side-by-side with modular mapping shells
  return `<ag-spinner ${hostAttributes} style="display: inline-block;"><div class="ag-spinner" part="ag-spinner" role="status" aria-live="polite" aria-busy="true"><span class="ag-spinner-label" part="ag-spinner-label">${slottedContent}</span></div></ag-spinner>`;
}
