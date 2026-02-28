import { createComponent } from '@lit/react';
import React from 'react';
import { AgIcon, type IconProps } from '../core/Icon';

export type ReactIconProps = IconProps;

export const ReactIcon = createComponent({
  tagName: 'ag-icon',
  elementClass: AgIcon,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
