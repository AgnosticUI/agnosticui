export { default } from './VueRating.vue';
export { default as VueRating } from './VueRating.vue';

export interface VueRatingProps {
  value?: number;
  max?: number;
  precision?: 'whole' | 'half';
  readonly?: boolean;
  allowClear?: boolean;
  variant?: '' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export type RatingChangeEvent = {
  oldValue: number;
  newValue: number;
};

export type RatingHoverEvent = {
  phase: 'start' | 'move' | 'end';
  value: number;
};
