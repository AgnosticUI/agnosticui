import { AgSlider, type SliderProps } from './_Slider.js';

if (!customElements.get('ag-slider')) {
  customElements.define('ag-slider', AgSlider);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-slider': AgSlider;
  }
}

export type { SliderProps };

export * from './_Slider.js';
