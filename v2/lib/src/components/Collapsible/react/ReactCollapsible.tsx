
import { createComponent } from '@lit/react';
import React from 'react';
import { AgCollapsible, type CollapsibleProps } from '../core/Collapsible';

export type ReactCollapsibleProps = CollapsibleProps;

export const ReactCollapsible = createComponent({
  tagName: 'ag-collapsible',
  elementClass: AgCollapsible,
  react: React,
  events: {
    onToggle: 'toggle',
  },
});
