export { default } from './VueInput.vue';
export { default as VueInput } from './VueInput.vue';

// Define types separately since Vue component types are handled differently
export interface VueInputProps {
  modelValue?: string;
  label?: string;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  rows?: number;
  cols?: number;
  size?: 'small' | 'default' | 'large';
  isCapsule?: boolean;
  isRounded?: boolean;
  isUnderlined?: boolean;
  isUnderlinedWithBackground?: boolean;
  isInline?: boolean;
  hasLeftAddon?: boolean;
  hasRightAddon?: boolean;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
}
