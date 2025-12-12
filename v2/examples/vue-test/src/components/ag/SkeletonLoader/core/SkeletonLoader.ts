import { AgSkeleton, type SkeletonProps } from './_SkeletonLoader';

if (!customElements.get('ag-skeleton')) {
  customElements.define('ag-skeleton', AgSkeleton);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-skeleton': AgSkeleton;
  }
}

export * from './_SkeletonLoader';
export type SkeletonVariant = SkeletonProps['variant'];
export type SkeletonEffect = SkeletonProps['effect'];
export type SkeletonWidth = SkeletonProps['width'];
export type SkeletonHeight = SkeletonProps['height'];
