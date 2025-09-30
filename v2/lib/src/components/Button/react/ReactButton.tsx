import React, { useRef, useEffect } from "react";
import "../core/_Button";

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
        loading?: boolean;
        toggle?: boolean;
        pressed?: boolean;
        variant?: 'primary' | 'secondary' | 'warning' | 'danger' | '';
        'aria-label'?: string;
        'aria-describedby'?: string;
      }, HTMLElement>;
    }
  }
}

// Ensure web components are defined before using them
const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-button')
  ]);
};

interface ReactButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  toggle?: boolean;
  pressed?: boolean;
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | '';
  ariaLabel?: string;
  ariaDescribedby?: string;
  onClick?: (event: Event) => void;
  onToggle?: (detail: { pressed: boolean }) => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactButton: React.FC<ReactButtonProps> = ({
  type = 'button',
  disabled = false,
  loading = false,
  toggle = false,
  pressed = false,
  variant,
  ariaLabel,
  ariaDescribedby,
  onClick,
  onToggle,
  children,
  className,
  id,
  ...rest
}: ReactButtonProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const buttonEl = ref.current as any;

      // Set variant attribute directly (not property) so CSS selectors work
      if (variant) {
        buttonEl.setAttribute('variant', variant);
      } else {
        buttonEl.removeAttribute('variant');
      }

      const handleClick = (event: Event) => {
        onClick?.(event);
      };

      const handleToggle = (event: Event) => {
        const detail = (event as CustomEvent).detail;
        onToggle?.(detail);
      };

      buttonEl.addEventListener("click", handleClick as EventListener);
      if (toggle) {
        buttonEl.addEventListener("toggle", handleToggle as EventListener);
      }

      return () => {
        buttonEl.removeEventListener("click", handleClick as EventListener);
        if (toggle) {
          buttonEl.removeEventListener("toggle", handleToggle as EventListener);
        }
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onClick, onToggle, toggle, variant]);

  // Don't pass variant through JSX - set it via useEffect instead
  // This is because React sets properties, not attributes, and we need
  // the attribute for CSS selectors to work
  return (
    <ag-button
      ref={ref}
      type={type}
      disabled={disabled || undefined}
      loading={loading || undefined}
      toggle={toggle || undefined}
      pressed={pressed || undefined}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-button>
  );
};