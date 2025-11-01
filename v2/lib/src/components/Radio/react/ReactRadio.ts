import * as React from 'react';
import { createComponent } from '@lit/react';
import { AgRadio, type RadioProps } from '../core/Radio';

export interface ReactRadioProps extends RadioProps {
  children?: React.ReactNode;
}

export const ReactRadio = createComponent({
  tagName: 'ag-radio',
  elementClass: AgRadio,
  react: React,
  events: {
    onClick: 'click',
    onChange: 'change',
  },
});
