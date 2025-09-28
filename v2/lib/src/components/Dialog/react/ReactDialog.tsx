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
        'close-on-escape'?: boolean;
        'close-on-backdrop'?: boolean;
        'show-close-button'?: boolean;
      }, HTMLElement>;
    }
  }
}

// Ensure web components are defined before using them
const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-dialog')
  ]);
};

interface ReactDialogProps {
  open?: boolean;
  heading?: string;
  description?: string;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  onDialogOpen?: () => void;
  onDialogClose?: () => void;
  onDialogCancel?: () => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactDialog: React.FC<ReactDialogProps> = ({
  open = false,
  heading,
  description,
  closeOnEscape = true,
  closeOnBackdrop = true,
  showCloseButton = false,
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
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const dialogEl = ref.current as HTMLElement & {
        closeOnEscape?: boolean;
        closeOnBackdrop?: boolean;
        showCloseButton?: boolean;
      };

      // Explicitly set boolean properties to ensure they're properly handled
      if (closeOnEscape !== undefined) {
        dialogEl.closeOnEscape = closeOnEscape;
      }
      if (closeOnBackdrop !== undefined) {
        dialogEl.closeOnBackdrop = closeOnBackdrop;
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

      dialogEl.addEventListener("dialog-open", handleDialogOpen as EventListener);
      dialogEl.addEventListener("dialog-close", handleDialogClose as EventListener);
      dialogEl.addEventListener("dialog-cancel", handleDialogCancel as EventListener);

      return () => {
        dialogEl.removeEventListener("dialog-open", handleDialogOpen as EventListener);
        dialogEl.removeEventListener("dialog-close", handleDialogClose as EventListener);
        dialogEl.removeEventListener("dialog-cancel", handleDialogCancel as EventListener);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onDialogOpen, onDialogClose, onDialogCancel, closeOnEscape, closeOnBackdrop, showCloseButton]);

  return (
    <ag-dialog
      ref={ref}
      {...(open && { open: true })}
      heading={heading}
      description={description}
      {...(closeOnEscape !== undefined && { 'close-on-escape': closeOnEscape })}
      {...(closeOnBackdrop !== undefined && { 'close-on-backdrop': closeOnBackdrop })}
      {...(showCloseButton !== undefined && { 'show-close-button': showCloseButton })}
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