
import { createComponent } from '@lit/react';
import React from 'react';
import { ButtonFx, type ButtonFxProps } from '../core/_ButtonFx';

export type ReactButtonFxProps = ButtonFxProps;

export const ReactButtonFx = createComponent({
  tagName: 'ag-button-fx',
  elementClass: ButtonFx,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
