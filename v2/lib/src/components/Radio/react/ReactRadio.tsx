import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { Radio, type RadioProps, type RadioChangeEvent } from '../core/Radio';

/**
 * React-specific props interface derived from core RadioProps
 * Extends core props including event handlers (onChange)
 */
export interface ReactRadioProps extends RadioProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onChange?: (event: RadioChangeEvent) => void;
}

// Create component with @lit/react
export const ReactRadio = createComponent({
  tagName: 'ag-radio',
  elementClass: Radio,
  react: React,
  events: {
    onChange: 'ag-change' as EventName<RadioChangeEvent>,
  },
});

// Re-export types
export type { RadioChangeEvent, RadioSize, RadioTheme } from '../core/Radio';
