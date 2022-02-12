import { useEffect, useMemo, FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

// import { createPortal } from 'react-dom';
import { Alert, AlertProps } from './Alert';

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
export interface ToastProps extends AlertProps {
  // Selector to place the portal
  portalRootSelector?: string;
}

// TODOs
//  DONE 1. Wrap in Portal (createPortal from react-dom)
//  DONE 2. Make SVG optional and projectable render prop
//  DONE 3. Add toast specific aria attributes:
// aria-live="polite" aria-atomic="true"
//  DONE 4. If type is error use instead aria-live="assertive"
// 5. Adds an optional close X button render prop that can self manage.
//   Probably consumer could do
// const [isOpen, setIsOpen] = useState(false);
// return (
//   <Toast isOpen={isOpen} close={ <CloseButton onClick={() => setIsOpen(false)} /> } .../ >
// )
interface ToastPortalProps {
  // Selector to place the portal
  portalRootSelector?: string;
}

const ToastPortal: FC<ToastPortalProps> = ({ portalRootSelector = 'body', children }) => {
  // TODO -- take selector as prop
  // TODO -- throw if portalRoot is falsy
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

export const Toast: FC<ToastProps> = ({ portalRootSelector = 'body', ...rest }): ReactElement => (
  <ToastPortal portalRootSelector={portalRootSelector}>
    <Alert {...rest} />
  </ToastPortal>
);
