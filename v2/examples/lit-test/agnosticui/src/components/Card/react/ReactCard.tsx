import { createComponent } from '@lit/react';
import React from 'react';
import { AgCard, type CardProps } from '../core/Card';

export type ReactCardProps = CardProps;

export const ReactCard = createComponent({
  tagName: 'ag-card',
  elementClass: AgCard,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
