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

/**
 * Most of the extended AlertProps are self-explanatory. However, the icon prop is not.
 * It's a means for consumer to project custom icon. Here's how that might be set up:
 * 1. Create an Icon to pass in:
    import styles from 'agnosticui/alert.module.css';
    interface ExampleIconProps {
      type: string;
    }
    const ExampleIcon = ({ type }: ExampleIconProps) => {
      const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';
      // You will probably want to customize this to your liking. However, to match the
      // colors used for various types, look at: https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/alert.css#L51
      // which will show you the proper color custom property e.g. --agnostic-warning-light for
      // a warning toast.
      const svgClasses = type
        ? [styles[`alert${typeCapitalized}Icon`], styles.alertIcon].join(' ')
        : styles.alertIcon;
      return (
        <svg
          className={svgClasses}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
      );
    };
  * 2. Pass in as render prop:
      <Toast
        icon={<ExampleIcon type="error" />}
        type="error"
        verticalPosition="top"
        horizontalPosition="center"
      >
        Example error toast
      </Toast>
  * Note the type should be the same for the example icon as for the Toasts if you're
  * using the CSS Modules in alert.module.css
 */
export interface ToastsProps {
  // Selector to place the portal
  portalRootSelector?: string;
  horizontalPosition?: 'start' | 'center' | 'end';
  verticalPosition?: 'top' | 'bottom';
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
  const toastClasses = [styles.alertToast, horizontalPosition || '', verticalPosition || '']
    .filter((cls) => cls)
    .join(' ');

  return (
    <ToastPortal portalRootSelector={portalRootSelector}>
      <div className={toastClasses}>{children}</div>
    </ToastPortal>
  );
};
