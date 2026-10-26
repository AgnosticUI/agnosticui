import { type SliderProps } from '../core/Slider';

// Define the interface natively inside the barrel file to bypass Vue SFC type compilation gates
export interface VueSliderProps extends Omit<SliderProps, 'onChange' | 'onInput' | 'onFocus' | 'onBlur'> {}

export { default as VueSlider } from './VueSlider.vue';

// Direct core reference bypass for cross-hydration stability
export { _SliderFallback } from '../core/_SliderFallback.js';
