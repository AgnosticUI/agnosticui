import { createComponent } from '@lit/react';
import React from 'react';
import { Progress, type ProgressProps } from '../core/Progress';

export type { ProgressProps };

export const ReactProgress = createComponent({
  tagName: 'ag-progress',
  elementClass: Progress,
  react: React,
  events: {
    // No events for this component
  },
});