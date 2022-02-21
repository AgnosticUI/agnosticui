import { useEffect, useMemo, FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styles from './alert.module.css';

import { Alert, AlertProps } from './Alert';

export interface ToastPortalProps {
  // Selector to place the portal
  portalRootSelector?: string;
}

export const ToastPortal: FC<ToastPortalProps> = ({ portalRootSelector = 'body', children }) => {
  const portalRoot: HTMLElement = document.querySelector(portalRootSelector) as HTMLElement;
  if (!portalRoot) {
    throw Error('Could not find portal root.');
  }

  const toastContainer = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    portalRoot.appendChild(toastContainer);
    return () => {
      toastContainer.remove();
    };
  });

  return createPortal(children, portalRoot);
};

export interface ToastsProps {
  // Selector to place the portal
  portalRootSelector?: string;
  horizontalPosition: 'start' | 'center' | 'end';
  verticalPosition: 'top' | 'bottom';
}
export interface ToastProps extends AlertProps {
  /**
   * This defaults to true and only is useful to pass in if you
   * want to be able to use a close button to control state and thus
   * pass in isOpen={toastState---SET-FALSE}
   */
  isOpen?: boolean;
}

// These are the individual toast boxes. We do NOT take in the ToastProps but the
// AlertProps as it's the Toasts (not individual Toast components) job to position
// the group fixed position to viewport. As such, this allows for "stacking" toasts.
// eslint-disable-next-line max-len
export const Toast: FC<ToastProps> = ({ isOpen = true, ...rest }): ReactElement => (isOpen ? <Alert isToast {...rest} /> : <></>);

// This is the Toasts wrapper that fixed positions the toast and teleports it etc.
export const Toasts: FC<ToastsProps> = ({
  portalRootSelector = 'body',
  horizontalPosition,
  verticalPosition,
  children,
}): ReactElement => {
  const toastClasses = [styles.alertToast, horizontalPosition, verticalPosition]
    .filter((cls) => cls)
    .join(' ');

  return (
    <ToastPortal portalRootSelector={portalRootSelector}>
      <div className={toastClasses}>{children}</div>
    </ToastPortal>
  );
};
