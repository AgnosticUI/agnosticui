import { createComponent } from '@lit/react';
import React from 'react';
import { Icon, type IconProps } from '../core/Icon';

export type ReactIconProps = IconProps;

export const ReactIcon = createComponent({
  tagName: 'ag-icon',
  elementClass: Icon,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
