import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { AgBadge, type BadgeProps } from '../core/_Badge';

export interface ReactBadgeProps extends BadgeProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactBadge = createComponent({
  tagName: 'ag-badge',
  elementClass: AgBadge,
  react: React,
  events: {
    onBadgeClick: 'badge:click' as EventName<CustomEvent>,
  },
});
