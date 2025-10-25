import * as React from 'react';
import { createComponent } from '@lit/react';
import { Alert, type AlertProps } from '../core/Alert';

export interface ReactAlertProps extends AlertProps {
  children?: React.ReactNode;
}

export const ReactAlert = createComponent({
  tagName: 'ag-alert',
  elementClass: Alert,
  react: React,
  events: {},
});
