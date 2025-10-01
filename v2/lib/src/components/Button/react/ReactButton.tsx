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
        size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
        shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
        bordered?: boolean;
        ghost?: boolean;
        link?: boolean;
        grouped?: boolean;
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
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  bordered?: boolean;
  ghost?: boolean;
  link?: boolean;
  grouped?: boolean;
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
  size = 'md',
  shape,
  bordered = false,
  ghost = false,
  link = false,
  grouped = false,
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

      // Set attributes directly (not properties) so CSS selectors work
      if (variant) {
        buttonEl.setAttribute('variant', variant);
      } else {
        buttonEl.removeAttribute('variant');
      }

      if (size) {
        buttonEl.setAttribute('size', size);
      } else {
        buttonEl.removeAttribute('size');
      }

      if (shape) {
        buttonEl.setAttribute('shape', shape);
      } else {
        buttonEl.removeAttribute('shape');
      }

      if (bordered) {
        buttonEl.setAttribute('bordered', '');
      } else {
        buttonEl.removeAttribute('bordered');
      }

      if (ghost) {
        buttonEl.setAttribute('ghost', '');
      } else {
        buttonEl.removeAttribute('ghost');
      }

      if (link) {
        buttonEl.setAttribute('link', '');
      } else {
        buttonEl.removeAttribute('link');
      }

      if (grouped) {
        buttonEl.setAttribute('grouped', '');
      } else {
        buttonEl.removeAttribute('grouped');
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
  }, [onClick, onToggle, toggle, variant, size, shape, bordered, ghost, link, grouped]);

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