import { AgSlider, type SliderProps } from './_Slider';

if (!customElements.get('ag-slider')) {
  customElements.define('ag-slider', AgSlider);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-slider': AgSlider;
  }
}

export type { SliderProps };

export * from './_Slider';
