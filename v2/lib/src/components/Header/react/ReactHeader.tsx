import * as React from 'react';
import { createComponent } from '@lit/react';
import { Header } from '../core/_Header';
import type { HeaderProps } from '../core/_Header';

export interface ReactHeaderProps extends HeaderProps {
  children?: React.ReactNode;
}

export const ReactHeader = createComponent({
  tagName: 'ag-header',
  elementClass: Header,
  react: React,
  events: {},
});
