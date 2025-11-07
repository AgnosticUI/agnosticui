export { default } from './VueSlider.vue';
export { default as VueSlider } from './VueSlider.vue';

// Define types separately since Vue component types are handled differently
export interface VueSliderProps {
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;
  labelledBy?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number | [number, number];
  dual?: boolean;
  vertical?: boolean;
  filled?: boolean;
  monochrome?: boolean;
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  name?: string;
  showTooltip?: boolean;
  showTicks?: boolean;
  tickStep?: number;
}
