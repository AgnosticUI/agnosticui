import { createComponent } from '@lit/react';
import React from 'react';
import { ScrollProgress, type ScrollProgressProps } from '../core/ScrollProgress';

export type { ScrollProgressProps };

export const ReactScrollProgress = createComponent({
  tagName: 'ag-scroll-progress',
  elementClass: ScrollProgress,
  react: React,
  events: {
    // No custom events for this component
  },
});
