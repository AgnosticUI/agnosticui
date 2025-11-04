import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  Toast,
  type ToastProps,
  type ToastOpenEvent,
  type ToastCloseEvent,
  type ToastDismissEvent,
} from '../core/Toast';

export interface ReactToastProps extends ToastProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactToast = createComponent({
  tagName: 'ag-toast',
  elementClass: Toast,
  react: React,
  events: {
    onToastOpen: 'toast-open' as EventName<ToastOpenEvent>,
    onToastClose: 'toast-close' as EventName<ToastCloseEvent>,
    onToastDismiss: 'toast-dismiss' as EventName<ToastDismissEvent>,
  },
});

// Re-export event types
export type { ToastOpenEvent, ToastCloseEvent, ToastDismissEvent } from '../core/Toast';
