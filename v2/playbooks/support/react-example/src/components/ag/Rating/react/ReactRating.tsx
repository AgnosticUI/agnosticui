import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { AgRating, type RatingProps, type RatingChangeEvent, type RatingHoverEvent } from '../core/Rating';

export interface ReactRatingProps extends RatingProps {
  children?: React.ReactNode;
}

export const ReactRating = createComponent({
  tagName: 'ag-rating',
  elementClass: AgRating,
  react: React,
  events: {
    onRatingChange: 'rating-change' as EventName<RatingChangeEvent>,
    onRatingHover: 'rating-hover' as EventName<RatingHoverEvent>,
  },
});