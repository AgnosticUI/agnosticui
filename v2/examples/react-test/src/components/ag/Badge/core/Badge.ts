import { AgBadge, type BadgeProps } from './_Badge';

if (!customElements.get('ag-badge')) {
  customElements.define('ag-badge', AgBadge);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-badge': AgBadge;
  }
}

export * from './_Badge';
export type BadgeVariant = BadgeProps['variant'];
export type BadgeSize = BadgeProps['size'];
