import { createComponent } from '@lit/react';
import React from 'react';
import { AgFieldset, type FieldsetProps } from '../Fieldset';

export interface ReactFieldsetProps extends FieldsetProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactFieldset = createComponent({
  tagName: 'ag-fieldset',
  elementClass: AgFieldset,
  react: React,
  events: {
    // No custom events for Fieldset
  },
});
