import { createComponent } from '@lit/react';
import React from 'react';
import { AgDivider, type DividerProps } from '../core/Divider';

export type ReactDividerProps = DividerProps;

export const ReactDivider = createComponent({
  tagName: 'ag-divider',
  elementClass: AgDivider,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
