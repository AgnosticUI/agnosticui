import { createComponent } from '@lit/react';
import React from 'react';
import { Card, type CardProps } from '../core/_Card';

export type ReactCardProps = CardProps;

export const ReactCard = createComponent({
  tagName: 'ag-card',
  elementClass: Card,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
