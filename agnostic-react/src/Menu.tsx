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
  cloneElement,
} from 'react';
import styles from './menu.module.css';
// import buttonStyles from './button.module.css';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  // menuRef?: (instance: A11yDialogInstance) => void
  buttonLabel: string;
  size?: 'small' | 'large' | '';
  isRounded?: boolean;
  isBordered?: boolean;
  menuItems: JSX.Element[];
  icon?: ReactNode;
}

export interface MenuTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  menuTitle: string;
  icon?: ReactNode;
  isExpanded: boolean;
  onClick?: MouseEventHandler;
  onKeydown?: KeyboardEventHandler;
}

const MenuTrigger: FC<MenuTriggerProps> = ({
  isExpanded = false,
  icon = '▾',
  menuTitle,
  onClick,
  onKeyDown,
}): ReactElement => (
  <button
    className={styles.trigger}
    aria-haspopup="true"
    aria-expanded={isExpanded}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    {menuTitle}
    <span className={styles.icon} aria-hidden="true">
      {icon}
    </span>
  </button>
);

export const Menu: FC<MenuProps> = ({
  id,
  buttonLabel,
  isRounded = false,
  isBordered = false,
  size = '',
  menuItems,
}): ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const selectItem = useCallback(
    (index) => {
      setSelectedItem(index);
    },
    [setSelectedItem],
  );

  let sizeClass;
  sizeClass = size === 'small' ? styles.small : '';
  switch (size) {
    case 'small':
      sizeClass = styles.small;
      break;
    case 'large':
      sizeClass = styles.large;
      break;
    default:
      sizeClass = '';
  }

  const menuClasses = [
    styles.menu,
    sizeClass,
    isBordered ? styles.bordered : '',
    isRounded ? styles.rounded : '',
  ]
    .filter((cls) => cls)
    .join(' ');

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

  /**
   *
   * @param evOrString arg of either keyboard event or a string w/direction key like Up Down etc.
   * @param index
   * @returns
   */
  const onMenuItemKeyDown = (evOrString: KeyboardEvent<HTMLElement> | string, index: number) => {
    console.log('onMenuItemKeyDown - index: ', index);
    const key = typeof evOrString === 'string' ? evOrString : evOrString.key;
    console.log('onMenuItemKeyDown - key: ', key);
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
        // Focus and select the item, and closes the menu as well.
        focusItem(index);
        selectItem(index);
        break;
      case 'Escape':
        setExpanded(false);
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
      if (selectedItem < 1) {
        setSelectedItem(0);
        // Waits for next render cycle
        // requestAnimationFrame(() => {
        onMenuItemKeyDown('Home', 0);
        // });
      } else {
        // Waits for next render cycle
        // requestAnimationFrame(() => {
        // Previously selected item. Directly select that.
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
          setExpanded(true);
          afterOpened();
          // if (selectedItem < 1) {
          //   setSelectedItem(0);
          //   // Waits for next render cycle
          //   requestAnimationFrame(() => {
          //     onMenuItemKeyDown('Home', 0);
          //   });
          // } else {
          //   // Waits for next render cycle
          //   requestAnimationFrame(() => {
          //     // Previously selected item. Directly select that.
          //     focusItem(selectedItem);
          //     selectItem(selectedItem);
          //   });
          // }
          e.preventDefault();
        }
        break;
      case 'Escape':
        if (expanded) {
          setExpanded(false);
          // TODO -- we need to:
          //  Put focus on the trigger button
          //  This will require MenuTrigger refactor to use ForwardRef
        }
        break;
      default:
      // Noop
    }
  };

  const onTriggerButtonClicked = () => {
    console.log(
      'onTriggerButtonClicked expanded before setExpanded !expanded called...: ',
      expanded,
    );
    // toggled is local reference to !expanded since setExpanded is async (avoids race condition)
    const toggled = !expanded;
    setExpanded(toggled);
    setTimeout(() => {
      console.log('onTriggerButtonClicked toggled: ', toggled);
      if (toggled) {
        afterOpened();
      }
    }, 10);
  };

  return (
    <div className={menuClasses}>
      <MenuTrigger
        menuTitle={buttonLabel}
        onClick={onTriggerButtonClicked}
        onKeyDown={onTriggerButtonKeyDown}
        isExpanded={expanded}
      />
      <div className={styles.items} id={id} role="menu" hidden={!expanded}>
        {menuItems.map((btn, i) => cloneElement(
          btn,
          {
            key: i,
            index: i,
            isSelected: selectedItem === i,
            isDisabled: btn.props.isDisabled,
            // role: 'menuitem',
            ref: itemRefs.current[i],
            onClick: selectItem,
            onKeyDown: (ev: KeyboardEvent<HTMLElement>) => onMenuItemKeyDown(ev, i),
            children: btn.props.children,
          },
          btn.props.children,
        ))}
      </div>
    </div>
  );
};

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  index?: number;
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick?: (activeIndex: number) => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLElement>) => void;
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
      children,
    }: MenuItemProps,
    menuRef: React.ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => {
    const classes = [styles.item, isSelected ? styles.selected : ''].filter((cl) => cl).join(' ');
    return (
      <button
        className={classes}
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
