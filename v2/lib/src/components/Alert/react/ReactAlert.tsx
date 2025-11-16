import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { AgAlert, type AlertProps, type AlertDismissEvent } from '../core/Alert';

/**
 * React-specific props interface derived from core AlertProps
 * Extends core props including event handlers (onAlertDismiss)
 */
export interface ReactAlertProps extends AlertProps {
  children?: React.ReactNode;
}

// Create component with @lit/react
export const ReactAlert = createComponent({
  tagName: 'ag-alert',
  elementClass: AgAlert,
  react: React,
  events: {
    onAlertDismiss: 'alert-dismiss' as EventName<AlertDismissEvent>,
  },
});

// Re-export event types
export type { AlertDismissEvent } from '../core/Alert';
