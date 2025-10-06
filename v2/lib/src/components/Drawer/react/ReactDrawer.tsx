import React, { useRef, useEffect, type PropsWithChildren } from "react";
import "../core/_drawer";

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-drawer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        open?: boolean;
        heading?: string;
        description?: string;
        'no-close-on-escape'?: boolean;
        'no-close-on-backdrop'?: boolean;
        'show-close-button'?: boolean;
        position?: 'start' | 'end' | 'top' | 'bottom';
      }, HTMLElement>;
    }
  }
}

type DrawerPosition = 'start' | 'end' | 'top' | 'bottom';

export interface ReactDrawerProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
  position?: DrawerPosition;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactDrawer: React.FC<PropsWithChildren<ReactDrawerProps>> = ({
  open = false,
  heading,
  description,
  noCloseOnEscape = false,
  noCloseOnBackdrop = false,
  showCloseButton = false,
  position = 'bottom',
  onClose,
  children,
  className,
  id,
  ...rest
}) => {
  const ref = useRef<HTMLElement & {
    open?: boolean;
    noCloseOnEscape?: boolean;
    noCloseOnBackdrop?: boolean;
    showCloseButton?: boolean;
    position?: DrawerPosition;
  }>(null);

  useEffect(() => {
    const handleClose = (e: Event) => {
      // We are managing the state, so we prevent the component from closing itself.
      e.preventDefault();
      if (onClose) {
        onClose();
      }
    };

    const node = ref.current;
    if (node) {
      // The event is 'close'
      node.addEventListener('close', handleClose);
    }

    return () => {
      if (node) {
        node.removeEventListener('close', handleClose);
      }
    };
  }, [ref, onClose]);

  return (
    <ag-drawer
      ref={ref}
      {...(open && { open: true })}
      heading={heading}
      description={description}
      {...(noCloseOnEscape && { 'no-close-on-escape': true })}
      {...(noCloseOnBackdrop && { 'no-close-on-backdrop': true })}
      {...(showCloseButton && { 'show-close-button': true })}
      position={position}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-drawer>
  );
};

// Export helper components for slot-based content
interface DrawerHeaderProps {
  children?: React.ReactNode;
}

interface DrawerFooterProps {
  children?: React.ReactNode;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children }) => {
  return <div slot="header">{children}</div>;
};

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ children }) => {
  return <div slot="footer">{children}</div>;
};
