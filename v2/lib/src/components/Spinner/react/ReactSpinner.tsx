
import { createComponent } from '@lit/react';
import React from 'react';
import { AgSpinner, type SpinnerProps } from '../core/Spinner';

export type ReactSpinnerProps = SpinnerProps;

export const ReactSpinner = createComponent({
  tagName: 'ag-spinner',
  elementClass: AgSpinner,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
