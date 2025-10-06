import React, { useRef, useEffect } from "react";
import "../core/_dialog";

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-dialog': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        open?: boolean;
        heading?: string;
        description?: string;
        'no-close-on-escape'?: boolean;
        'no-close-on-backdrop'?: boolean;
        'show-close-button'?: boolean;
        'drawer-position'?: 'start' | 'end' | 'top' | 'bottom';
      }, HTMLElement>;
    }
  }
}

interface ReactDialogProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
  onDialogOpen?: () => void;
  onDialogClose?: () => void;
  onDialogCancel?: () => void;
  drawerPosition?: 'start' | 'end' | 'top' | 'bottom' | undefined;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactDialog: React.FC<ReactDialogProps> = ({
  open = false,
  heading,
  description,
  noCloseOnEscape = false,
  noCloseOnBackdrop = false,
  showCloseButton = false,
  drawerPosition = 'bottom',
  onDialogOpen,
  onDialogClose,
  onDialogCancel,
  children,
  className,
  id,
  ...rest
}: ReactDialogProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const dialogEl = ref.current as HTMLElement & {
      noCloseOnEscape?: boolean;
      noCloseOnBackdrop?: boolean;
      showCloseButton?: boolean;
    };

    // Explicitly set boolean properties to ensure they're properly handled
    if (noCloseOnEscape !== undefined) {
      dialogEl.noCloseOnEscape = noCloseOnEscape;
    }
    if (noCloseOnBackdrop !== undefined) {
      dialogEl.noCloseOnBackdrop = noCloseOnBackdrop;
    }
    if (showCloseButton !== undefined) {
      dialogEl.showCloseButton = showCloseButton;
    }

    const handleDialogOpen = (event: Event) => {
      event.stopPropagation();
      onDialogOpen?.();
    };

    const handleDialogClose = (event: Event) => {
      event.stopPropagation();
      onDialogClose?.();
    };

    const handleDialogCancel = (event: Event) => {
      event.stopPropagation();
      onDialogCancel?.();
    };

    // Set up event listeners synchronously to avoid missing early events
    dialogEl.addEventListener("dialog-open", handleDialogOpen as EventListener);
    dialogEl.addEventListener("dialog-close", handleDialogClose as EventListener);
    dialogEl.addEventListener("dialog-cancel", handleDialogCancel as EventListener);

    return () => {
      dialogEl.removeEventListener("dialog-open", handleDialogOpen as EventListener);
      dialogEl.removeEventListener("dialog-close", handleDialogClose as EventListener);
      dialogEl.removeEventListener("dialog-cancel", handleDialogCancel as EventListener);
    };
  }, [onDialogOpen, onDialogClose, onDialogCancel, noCloseOnEscape, noCloseOnBackdrop, showCloseButton]);

  return (
    <ag-dialog
      ref={ref}
      {...(open && { open: true })}
      heading={heading}
      description={description}
      {...(noCloseOnEscape && { 'no-close-on-escape': true })}
      {...(noCloseOnBackdrop && { 'no-close-on-backdrop': true })}
      {...(showCloseButton !== undefined && { 'show-close-button': showCloseButton })}
      {...(drawerPosition && { 'drawer-position': drawerPosition })}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-dialog>
  );
};

// Export helper components for slot-based content
interface DialogHeaderProps {
  children?: React.ReactNode;
}

interface DialogFooterProps {
  children?: React.ReactNode;
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({ children }: DialogHeaderProps) => {
  return <div slot="header">{children}</div>;
};

export const DialogFooter: React.FC<DialogFooterProps> = ({ children }: DialogFooterProps) => {
  return <div slot="footer">{children}</div>;
};
