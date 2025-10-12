import * as React from 'react';
import { createComponent } from '@lit/react';
import { Alert } from '../core/_Alert';
import type { AlertProps } from '../core/_Alert';

export interface ReactAlertProps extends AlertProps {
  children?: React.ReactNode;
}

export const ReactAlert = createComponent({
  tagName: 'ag-alert',
  elementClass: Alert,
  react: React,
  events: {},
});
