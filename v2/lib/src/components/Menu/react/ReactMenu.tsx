import React, { useRef, useEffect } from "react";
import "../core/_Menu";

// Extend React's JSX namespace to include our custom elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-menu-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        disabled?: boolean;
        'aria-label'?: string;
      }, HTMLElement>;
      'ag-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        open?: boolean;
        placement?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
      }, HTMLElement>;
      'ag-menu-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        value?: string;
        disabled?: boolean;
        href?: string;
        target?: string;
      }, HTMLElement>;
      'ag-menu-separator': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Ensure web components are defined before using them
const ensureWebComponentsDefined = () => {
  return Promise.all([
    customElements.whenDefined('ag-menu-button'),
    customElements.whenDefined('ag-menu'),
    customElements.whenDefined('ag-menu-item'),
    customElements.whenDefined('ag-menu-separator')
  ]);
};

interface ReactMenuButtonProps {
  disabled?: boolean;
  ariaLabel?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactMenuButton: React.FC<ReactMenuButtonProps> = ({
  disabled = false,
  ariaLabel,
  onMenuOpen,
  onMenuClose,
  children,
  className,
  id,
  ...rest
}: ReactMenuButtonProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const menuButtonEl = ref.current;

      const handleMenuOpen = (event: Event) => {
        event.stopPropagation();
        onMenuOpen?.();
      };

      const handleMenuClose = (event: Event) => {
        event.stopPropagation();
        onMenuClose?.();
      };

      menuButtonEl.addEventListener("menu-open", handleMenuOpen as EventListener);
      menuButtonEl.addEventListener("menu-close", handleMenuClose as EventListener);

      return () => {
        menuButtonEl.removeEventListener("menu-open", handleMenuOpen as EventListener);
        menuButtonEl.removeEventListener("menu-close", handleMenuClose as EventListener);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onMenuOpen, onMenuClose]);

  return (
    <ag-menu-button
      ref={ref}
      disabled={disabled || undefined}
      aria-label={ariaLabel}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-menu-button>
  );
};

interface ReactMenuProps {
  open?: boolean;
  placement?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactMenu: React.FC<ReactMenuProps> = ({
  open,
  placement = 'bottom-start',
  ariaLabel,
  ariaLabelledBy,
  children,
  className,
  id,
  ...rest
}: ReactMenuProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupComponent = async () => {
      await ensureWebComponentsDefined();
    };

    setupComponent();
  }, []);

  // Only pass open prop if explicitly set to true, let web component manage its own default state
  const menuProps = {
    ref,
    placement,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    className,
    id,
    slot: "menu",
    ...rest,
    ...(open === true && { open: true })
  };

  return (
    <ag-menu {...menuProps}>
      {children}
    </ag-menu>
  );
};

interface ReactMenuItemProps {
  value?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  onMenuSelect?: (detail: { value: string }) => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactMenuItem: React.FC<ReactMenuItemProps> = ({
  value = '',
  disabled = false,
  href,
  target,
  onMenuSelect,
  children,
  className,
  id,
  ...rest
}: ReactMenuItemProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupEventListeners = async () => {
      await ensureWebComponentsDefined();

      if (!ref.current) return;

      const menuItemEl = ref.current;

      const handleMenuSelect = (event: Event) => {
        const detail = (event as CustomEvent).detail;
        onMenuSelect?.(detail);
      };

      menuItemEl.addEventListener("menu-select", handleMenuSelect as EventListener);

      return () => {
        menuItemEl.removeEventListener("menu-select", handleMenuSelect as EventListener);
      };
    };

    let cleanup: (() => void) | undefined;
    setupEventListeners().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => cleanup?.();
  }, [onMenuSelect]);

  return (
    <ag-menu-item
      ref={ref}
      value={value}
      disabled={disabled || undefined}
      href={href}
      target={target}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-menu-item>
  );
};

interface ReactMenuSeparatorProps {
  className?: string;
  id?: string;
}

export const ReactMenuSeparator: React.FC<ReactMenuSeparatorProps> = ({
  className,
  id,
  ...rest
}: ReactMenuSeparatorProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const setupComponent = async () => {
      await ensureWebComponentsDefined();
    };

    setupComponent();
  }, []);

  return (
    <ag-menu-separator
      ref={ref}
      className={className}
      id={id}
      {...rest}
    />
  );
};