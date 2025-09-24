import React, { useRef, useEffect } from "react";
import "../core/_IconButton";

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-icon-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        label: string;
        icon?: string;
        unicode?: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
        pressed?: boolean;
        loading?: boolean;
        'aria-label'?: string;
        'aria-describedby'?: string;
      }, HTMLElement>;
    }
  }
}

// Ensure web components are defined before using them
const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-icon-button')
  ]);
};

interface ReactIconButtonProps {
  /** Required accessible name for the button */
  label: string;

  /** Icon identifier or name (for icon systems) */
  icon?: string;

  /** Unicode symbol for simple icons (×, ☰, etc.) */
  unicode?: string;

  /** Button size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';

  /** Button type */
  type?: 'button' | 'submit' | 'reset';

  /** Disabled state */
  disabled?: boolean;

  /** Pressed state for toggle buttons */
  pressed?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Additional ARIA label (will override label prop) */
  ariaLabel?: string;

  /** ARIA described by reference */
  ariaDescribedby?: string;

  /** Click event handler */
  onClick?: (event: Event) => void;

  /** Keyboard activation event handler */
  onActivate?: (detail: { label: string; pressed: boolean; originalEvent: KeyboardEvent }) => void;

  /** Slotted icon content */
  children?: React.ReactNode;

  /** CSS class name */
  className?: string;

  /** Element ID */
  id?: string;
}

export const ReactIconButton: React.FC<ReactIconButtonProps> = ({
  label,
  icon,
  unicode,
  size = 'md',
  variant = 'ghost',
  type = 'button',
  disabled = false,
  pressed = false,
  loading = false,
  ariaLabel,
  ariaDescribedby,
  onClick,
  onActivate,
  children,
  className,
  id,
  ...rest
}: ReactIconButtonProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const iconButtonEl = ref.current;

      const handleClick = (event: Event) => {
        // eslint-disable-next-line no-console
        console.log('ReactIconButton click:', {
          label: ariaLabel || label,
          pressed,
          timestamp: new Date().toISOString(),
          event: event.type
        });
        onClick?.(event);
      };

      const handleActivate = (event: Event) => {
        const customEvent = event as CustomEvent;
        // eslint-disable-next-line no-console
        console.log('ReactIconButton keyboard activate:', {
          label: ariaLabel || label,
          key: customEvent.detail.originalEvent?.key,
          timestamp: new Date().toISOString(),
          detail: customEvent.detail
        });
        onActivate?.(customEvent.detail);
      };

      iconButtonEl.addEventListener("icon-button-click", handleClick as EventListener);
      iconButtonEl.addEventListener("icon-button-activate", handleActivate as EventListener);

      return () => {
        iconButtonEl.removeEventListener("icon-button-click", handleClick as EventListener);
        iconButtonEl.removeEventListener("icon-button-activate", handleActivate as EventListener);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onClick, onActivate, label, ariaLabel, pressed]);

  return (
    <ag-icon-button
      ref={ref}
      label={ariaLabel || label}
      icon={icon}
      unicode={unicode}
      size={size}
      variant={variant}
      type={type}
      disabled={disabled || undefined}
      pressed={pressed || undefined}
      loading={loading || undefined}
      aria-describedby={ariaDescribedby}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-icon-button>
  );
};