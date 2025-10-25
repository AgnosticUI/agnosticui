import { createComponent } from '@lit/react';
import React from 'react';
import { Divider, type DividerProps } from '../core/Divider';

export type ReactDividerProps = DividerProps;

export const ReactDivider = createComponent({
  tagName: 'ag-divider',
  elementClass: Divider,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
