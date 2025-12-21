import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { AgSlider, type SliderProps } from '../core/Slider';

/**
 * React-specific props for Slider
 *
 * Following AgnosticUI v2 event conventions:
 * - Custom events (input, change) are mapped in the events object
 * - Native events (focus, blur) work automatically via callback props
 */
export interface ReactSliderProps extends SliderProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

// Create Slider component with @lit/react
export const ReactSlider = createComponent({
  tagName: 'ag-slider',
  elementClass: AgSlider,
  react: React,
  events: {
    // Custom events need to be mapped
    onInput: 'input' as EventName<CustomEvent<{ value: number | [number, number] }>>,
    onChange: 'change' as EventName<CustomEvent<{ value: number | [number, number] }>>,
    // Native events (focus, blur) work automatically, no mapping needed
  },
});
