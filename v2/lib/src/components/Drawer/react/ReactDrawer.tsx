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
  onDialogOpen?: () => void;
  onDialogClose?: () => void;
  onDialogCancel?: () => void;
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
  onDialogOpen,
  onDialogClose,
  onDialogCancel,
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
    if (!ref.current) return;

    const drawerEl = ref.current;

    // Explicitly set properties to ensure proper handling
    drawerEl.open = open;
    drawerEl.noCloseOnEscape = noCloseOnEscape;
    drawerEl.noCloseOnBackdrop = noCloseOnBackdrop;
    drawerEl.showCloseButton = showCloseButton;
    drawerEl.position = position;

    const handleClose = (event: Event) => {
      event.stopPropagation();
      onClose?.();
      onDialogClose?.();
    };

    const handleDialogOpen = (event: Event) => {
      event.stopPropagation();
      onDialogOpen?.();
    };

    const handleDialogCancel = (event: Event) => {
      event.stopPropagation();
      onDialogCancel?.();
    };

    // Set up event listeners for dialog events
    drawerEl.addEventListener('dialog-open', handleDialogOpen as EventListener);
    drawerEl.addEventListener('dialog-close', handleClose as EventListener);
    drawerEl.addEventListener('dialog-cancel', handleDialogCancel as EventListener);

    return () => {
      drawerEl.removeEventListener('dialog-open', handleDialogOpen as EventListener);
      drawerEl.removeEventListener('dialog-close', handleClose as EventListener);
      drawerEl.removeEventListener('dialog-cancel', handleDialogCancel as EventListener);
    };
  }, [open, noCloseOnEscape, noCloseOnBackdrop, showCloseButton, position, onClose, onDialogOpen, onDialogClose, onDialogCancel]);

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
