// v2/lib/src/components/Rating/react/ReactRating.tsx
import * as React from 'react';
import { createComponent } from '@lit/react';
import { AgRating } from '../core/_Rating';

export interface RatingChangeEventDetail {
  oldValue: number;
  newValue: number;
}

export interface RatingHoverEventDetail {
  phase: 'start' | 'move' | 'end';
  value: number;
}

export type RatingChangeEvent = CustomEvent<RatingChangeEventDetail>;
export type RatingHoverEvent = CustomEvent<RatingHoverEventDetail>;

export type RatingPrecision = 'whole' | 'half';
export type RatingSize = 'sm' | 'md' | 'lg';
export type RatingVariant = '' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface RatingProps {
  value?: number;
  max?: number;
  precision?: RatingPrecision;
  readonly?: boolean;
  allowClear?: boolean;
  variant?: RatingVariant;
  size?: RatingSize;
}

export interface ReactRatingProps extends RatingProps {
  children?: React.ReactNode;
  onRatingChange?: (event: RatingChangeEvent) => void;
  onRatingHover?: (event: RatingHoverEvent) => void;
}

export const ReactRating = createComponent({
  tagName: 'ag-rating',
  elementClass: AgRating,
  react: React,
  events: {
    onRatingChange: 'rating-change',
    onRatingHover: 'rating-hover',
  },
});
