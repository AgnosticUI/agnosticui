import * as React from 'react';
import { createComponent } from '@lit/react';
import { Toast } from '../core/Toast';
import type { ToastProps } from '../core/Toast';

export interface ReactToastProps extends ToastProps {
  children?: React.ReactNode;
}

export const ReactToast = createComponent({
  tagName: 'ag-toast',
  elementClass: Toast,
  react: React,
  events: {
    onToastOpen: 'toast-open',
    onToastClose: 'toast-close',
    onToastDismiss: 'toast-dismiss',
  },
});
