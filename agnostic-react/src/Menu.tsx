import React, {
  FC,
  HTMLAttributes,
  ReactNode,
  KeyboardEvent,
  ReactElement,
  MouseEventHandler,
  KeyboardEventHandler,
  MutableRefObject,
  RefObject,
  createRef,
  useCallback,
  useState,
  useRef,
  useEffect,
  cloneElement,
} from 'react';
import styles from './menu.module.css';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  buttonLabel: string;
  size?: 'small' | 'large' | '';
  isRounded?: boolean;
  isBordered?: boolean;
  menuItems: JSX.Element[];
  icon?: ReactNode;
  onOpen?: (selectedItem: number) => void;
  onClose?: () => void;
  closeOnClickOutside?: boolean;
  closeOnSelect?: boolean;
}

export interface MenuTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  menuTitle: string;
  icon?: ReactNode;
  isExpanded: boolean;
  onClick?: MouseEventHandler;
  onKeydown?: KeyboardEventHandler;
  className: string;
}

/* eslint-disable react/prop-types */
export const MenuTrigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(
  (
    { isExpanded = false, icon = '▾', menuTitle, onClick, onKeyDown, className }: MenuTriggerProps,
    triggerButtonRef: React.ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => (
    <button
      className={`${styles.trigger} ${className}`}
      aria-haspopup="true"
      ref={triggerButtonRef}
      aria-expanded={isExpanded}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {menuTitle}
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
    </button>
  ),
);
/* eslint-enable react/prop-types */

export const Menu: FC<MenuProps> = ({
  id,
  buttonLabel,
  isRounded = false,
  isBordered = false,
  size = '',
  menuItems,
  onOpen,
  onClose,
  closeOnClickOutside = true,
  closeOnSelect = true,
}): ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const selectItem = useCallback(
    (index) => {
      setSelectedItem(index);
    },
    [setSelectedItem],
  );

  // Just delegates to setExpanded -- allows us to emit events beforehand
  const setOpened = (open: boolean) => {
    if (open && onOpen) {
      onOpen(selectedItem);
    } else if (onClose) {
      onClose();
    }
    setExpanded(open);
  };

  let triggerSizeClasses: string;
  let itemSizeClasses: string;
  switch (size) {
    case 'small':
      triggerSizeClasses = styles.triggerSmall;
      itemSizeClasses = styles.itemSmall;
      break;
    case 'large':
      triggerSizeClasses = styles.triggerLarge;
      itemSizeClasses = styles.itemLarge;
      break;
    default:
      triggerSizeClasses = '';
      itemSizeClasses = '';
  }

  const triggerClasses = [
    styles.trigger,
    triggerSizeClasses,
    isBordered ? styles.triggerBordered : '',
    isRounded ? styles.triggerRounded : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  const itemClasses = [itemSizeClasses, isRounded ? styles.itemRounded : '']
    .filter((cls) => cls)
    .join(' ');

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const itemRefs: MutableRefObject<RefObject<HTMLButtonElement>[]> = useRef(
    menuItems.map(() => createRef()),
  );

  // TODO support all of -- menuitemradio, menuitem, menuitemcheckbox
  // TODO -- we could tease this out to a useFocusItem hook and share with Tabs.tsx's focusTab
  const focusItem = useCallback(
    (index: number, direction?: string) => {
      let i: number = index;
      if (direction === 'asc') {
        i += 1;
      } else if (direction === 'desc') {
        i -= 1;
      }

      // Circular navigation
      //
      // If we've went beyond "start" circle around to last
      if (i < 0) {
        i = menuItems.length - 1;
      } else if (i >= menuItems.length) {
        // We've went beyond "last" so circle around to first
        i = 0;
      }

      const nextMenuItem = itemRefs.current[i].current;

      if (nextMenuItem) {
        // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
        // only if we've been supplied a `direction`. Otherwise, nothing left to do.
        if (nextMenuItem.disabled && direction) {
          // Retry with new `i` index going in same direction
          focusItem(i, direction);
        } else {
          // Nominal case is to just focs next tab :)
          nextMenuItem.focus();
        }
      }
    },
    [menuItems],
  );

  const focusTriggerButton = (): void => triggerRef?.current?.focus();

  // TODO -- consider making all this a useClickedOutside hook
  const isInside = (el: EventTarget | null) => {
    if (rootRef.current) {
      const children = rootRef.current.querySelectorAll('*');
      for (let i = 0; i < children.length; i += 1) {
        const child = children[i];
        if (el === child) {
          return true;
        }
      }
    }
    return false;
  };

  const clickedOutside = (ev: Event) => {
    if (expanded && closeOnClickOutside) {
      if (!isInside(ev.target)) {
        setExpanded(false);
        focusTriggerButton();
      }
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', clickedOutside);
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('click', clickedOutside);
      }
    };
  });

  /**
   *
   * @param evOrString arg of either keyboard event or a string w/direction key like Up Down etc.
   * @param index
   * @returns
   */
  const onMenuItemKeyDown = (evOrString: KeyboardEvent<HTMLElement> | string, index: number) => {
    const key = typeof evOrString === 'string' ? evOrString : evOrString.key;
    switch (key) {
      case 'Up': // These first cases are IEEdge :(
      case 'ArrowUp':
        focusItem(index, 'desc');
        break;
      case 'Down':
      case 'ArrowDown':
        focusItem(index, 'asc');
        break;
      case 'Home':
      case 'ArrowHome':
        focusItem(0);
        break;
      case 'End':
      case 'ArrowEnd':
        focusItem(menuItems.length - 1);
        break;
      case 'Enter':
      case 'Space':
        // Focus and select the item
        focusItem(index);
        selectItem(index);
        // If we're to close the menu on selection (default) then do so
        if (closeOnSelect) {
          setOpened(false);
          focusTriggerButton();
        }
        break;
      case 'Escape':
        setOpened(false);
        focusTriggerButton();
        break;
      case 'Tab':
        // Trap tabs while capturing these menu events
        if (typeof evOrString !== 'string') {
          evOrString.preventDefault();
        }
        break;
      default:
        return;
    }
    if (typeof evOrString !== 'string') {
      evOrString.preventDefault();
    }
  };

  const afterOpened = () => {
    requestAnimationFrame(() => {
      // If selectedItem < 1 probably hasn't been opened before (or happens to be on
      // first item). Otherwise, might be "reopening" and has previously selected item
      if (selectedItem < 1) {
        setSelectedItem(0);
        onMenuItemKeyDown('Home', 0);
      } else {
        focusItem(selectedItem);
        selectItem(selectedItem);
      }
    });
  };

  const onTriggerButtonKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    switch (e.key) {
      case 'Down':
      case 'ArrowDown':
        // If not expanded and we haven't previously selected an item other then first item
        // puts focus on first item in menu list. Otherwise,
        if (!expanded) {
          setOpened(true);
          afterOpened();
          e.preventDefault();
        }
        break;
      case 'Escape':
        if (expanded) {
          setOpened(false);
          focusTriggerButton();
        }
        break;
      default:
      // Noop
    }
  };

  const onTriggerButtonClicked = () => {
    // toggled is local reference to !expanded since setExpanded is async (avoids race condition)
    const toggled = !expanded;
    setOpened(toggled);
    setTimeout(() => {
      if (toggled) {
        afterOpened();
      } else if (closeOnSelect) {
        // If we're to close the menu on selection (default) then do so
        setOpened(false);
        focusTriggerButton();
      }
    }, 10);
  };

  return (
    <div className={styles.menu} ref={rootRef}>
      <MenuTrigger
        menuTitle={buttonLabel}
        onClick={onTriggerButtonClicked}
        ref={triggerRef}
        onKeyDown={onTriggerButtonKeyDown}
        isExpanded={expanded}
        className={triggerClasses}
      />
      <div className={styles.items} id={id} role="menu" hidden={!expanded}>
        {menuItems.map((btn, i) => cloneElement(
          btn,
          {
            key: i,
            index: i,
            isSelected: selectedItem === i,
            isDisabled: btn.props.isDisabled,
            ref: itemRefs.current[i],
            className: itemClasses,
            onClick: () => {
              selectItem(i);
              if (closeOnSelect) {
                setOpened(false);
                focusTriggerButton();
              }
            },
            onKeyDown: (ev: KeyboardEvent<HTMLElement>) => onMenuItemKeyDown(ev, i),
            children: btn.props.children,
          },
          btn.props.children,
        ))}
      </div>
    </div>
  );
};

export interface MenuItemProps {
  index?: number;
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick?: (activeIndex: number) => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLElement>) => void;
  className?: string;
  children: ReactNode;
}

/* eslint-disable react/prop-types */
export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      index = 0,
      isDisabled = false,
      isSelected = false,
      onKeyDown,
      onClick,
      className,
      children,
    }: MenuItemProps,
    menuRef: React.ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => {
    const baseItemClasses = [styles.item, isSelected ? styles.selected : '']
      .filter((cl) => cl)
      .join(' ');
    return (
      <button
        className={`${className} ${baseItemClasses}`}
        role="menuitem"
        tabIndex={isSelected ? 0 : -1}
        disabled={isDisabled}
        ref={menuRef}
        onClick={() => onClick && onClick(index)}
        onKeyDown={onKeyDown}
      >
        {children}
      </button>
    );
  },
);
/* eslint-enable react/prop-types */
