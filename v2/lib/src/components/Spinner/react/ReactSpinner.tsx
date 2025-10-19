
import { createComponent } from '@lit/react';
import React from 'react';
import { Spinner, type SpinnerProps } from '../core/_Spinner';

export type ReactSpinnerProps = SpinnerProps;

export const ReactSpinner = createComponent({
  tagName: 'ag-spinner',
  elementClass: Spinner,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
