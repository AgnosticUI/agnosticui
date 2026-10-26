export interface AvatarGroupFallbackProps {
  children?: string;
}

/**
 * Isomorphic pure HTML string fallback generator engine for AvatarGroup.
 * Emits unhashed global namespace hooks matching client lifecycles.
 */
export function _AvatarGroupFallback(props: AvatarGroupFallbackProps = {}): string {
  const nestedChildren = props.children || '';
  const wrapperClasses = ['ag-avatar-group'].filter(Boolean).join(' ');

  return `<div class="${wrapperClasses}" part="ag-avatar-group">${nestedChildren}</div>`;
}
