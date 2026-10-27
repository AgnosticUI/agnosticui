/**
 * @summary Ingests framework props to render a zero-drift accessible baseline layout markup block on the server.
 */
export interface VisuallyHiddenFallbackProps {
  slotDefault?: string;
}

export function _VisuallyHiddenFallback(props: VisuallyHiddenFallbackProps = {}): string {
  const innerContent = props.slotDefault || '';
  return `<div class="ag-visually-hidden">${innerContent}</div>`;
}
