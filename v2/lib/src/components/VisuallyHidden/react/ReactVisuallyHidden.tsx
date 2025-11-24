import { createComponent } from '@lit/react';
import React from 'react';
import { VisuallyHidden } from '../core/VisuallyHidden';

export interface ReactVisuallyHiddenProps {
  children?: React.ReactNode;
}

export const ReactVisuallyHidden = createComponent({
  tagName: 'ag-visually-hidden',
  elementClass: VisuallyHidden,
  react: React,
  events: {},
});
