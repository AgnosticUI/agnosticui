import React, {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";
import type { ReactNode } from "react";
import "../core/_Menu";

// Define the types for the Menu's properties and methods
export type AgnosticMenuElement = HTMLElement & {
  open: boolean;
  placement: string;
  focusFirstItem: () => void;
  focusLastItem: () => void;
  focusNextItem: () => void;
  focusPreviousItem: () => void;
};

// Define the shape of the context data
interface MenuContextValue {
  isReady: boolean;
}

// Create the context
const MenuContext = createContext<MenuContextValue | null>(null);

// Extend React's JSX namespace
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

// Props interfaces
interface ReactMenuButtonProps {
  disabled?: boolean;
  ariaLabel?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  children?: ReactNode;
  className?: string;
  id?: string;
}

interface ReactMenuProps {
  open?: boolean;
  placement?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
}

interface ReactMenuItemProps {
  value?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  onMenuSelect?: (detail: { value: string }) => void;
  children?: ReactNode;
  className?: string;
  id?: string;
}

interface ReactMenuSeparatorProps {
  className?: string;
  id?: string;
}

// ReactMenuButton (largely unchanged, but benefits from defined web components)
export const ReactMenuButton: React.FC<ReactMenuButtonProps> = ({
  disabled = false,
  ariaLabel,
  onMenuOpen,
  onMenuClose,
  children,
  className,
  id,
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const menuButtonEl = ref.current;
    if (!menuButtonEl) return;

    const handleMenuOpen = (event: Event) => {
      event.stopPropagation();
      onMenuOpen?.();
    };

    const handleMenuClose = (event: Event) => {
      event.stopPropagation();
      onMenuClose?.();
    };

    customElements.whenDefined('ag-menu-button').then(() => {
      menuButtonEl.addEventListener("menu-open", handleMenuOpen as EventListener);
      menuButtonEl.addEventListener("menu-close", handleMenuClose as EventListener);
    });

    return () => {
      menuButtonEl.removeEventListener("menu-open", handleMenuOpen as EventListener);
      menuButtonEl.removeEventListener("menu-close", handleMenuClose as EventListener);
    };
  }, [onMenuOpen, onMenuClose]);

  return (
    <ag-menu-button
      ref={ref}
      disabled={disabled}
      aria-label={ariaLabel}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </ag-menu-button>
  );
};

// ReactMenu (Refactored with Stateful-Ready Pattern)
export const ReactMenu = forwardRef<AgnosticMenuElement, ReactMenuProps>((
  {
    open,
    placement = 'bottom-start',
    ariaLabel,
    ariaLabelledBy,
    children,
    className,
    id,
    ...rest
  },
  ref
) => {
  const menuRef = useRef<AgnosticMenuElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const menuElement = menuRef.current;
    if (!menuElement) return;

    customElements.whenDefined('ag-menu').then(() => {
      if (open !== undefined) menuElement.open = open;
      if (placement) menuElement.placement = placement;
      if (ariaLabel) menuElement.setAttribute('aria-label', ariaLabel);
      if (ariaLabelledBy) menuElement.setAttribute('aria-labelledby', ariaLabelledBy);
      setIsReady(true);
    });
  }, [open, placement, ariaLabel, ariaLabelledBy]);

  useImperativeHandle(ref, () => menuRef.current as AgnosticMenuElement);

  return (
    <MenuContext.Provider value={{ isReady }}>
      <ag-menu
        ref={menuRef}
        className={className}
        id={id}
        slot="menu"
        {...rest}
      >
        {children}
      </ag-menu>
    </MenuContext.Provider>
  );
});
ReactMenu.displayName = "ReactMenu";

// ReactMenuItem (Refactored to use Context)
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
}) => {
  const context = useContext(MenuContext);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const menuItemEl = ref.current;
    if (!context?.isReady || !menuItemEl) return;

    const handleMenuSelect = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      onMenuSelect?.(detail);
    };

    customElements.whenDefined('ag-menu-item').then(() => {
        menuItemEl.addEventListener("menu-select", handleMenuSelect as EventListener);
    });

    return () => {
      menuItemEl.removeEventListener("menu-select", handleMenuSelect as EventListener);
    };
  }, [context?.isReady, onMenuSelect]);

  if (!context?.isReady) return null;

  return (
    <ag-menu-item
      ref={ref}
      value={value}
      disabled={disabled}
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

// ReactMenuSeparator (Refactored to use Context)
export const ReactMenuSeparator: React.FC<ReactMenuSeparatorProps> = ({
  className,
  id,
  ...rest
}) => {
  const context = useContext(MenuContext);
  if (!context?.isReady) return null;

  return (
    <ag-menu-separator
      className={className}
      id={id}
      {...rest}
    />
  );
};
