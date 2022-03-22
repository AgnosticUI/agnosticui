import { FC, HTMLAttributes, ReactNode, ReactElement } from 'react';
import styles from './menu.module.css';
// import buttonStyles from './button.module.css';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'large' | '';
  isRounded?: boolean;
  isBordered?: boolean;
}

export interface MenuTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  menuTitle: string;
  icon?: ReactNode;
}

export const MenuTrigger: FC<MenuTriggerProps> = ({ icon = '▾', menuTitle }): ReactElement => (
  <button className={styles.trigger} aria-haspopup="true" aria-expanded="false">
    {menuTitle}
    <span className={styles.icon} aria-hidden="true">
      {icon}
    </span>
  </button>
);

export interface MenuItemsProps extends HTMLAttributes<HTMLDivElement> {
  menuId: string;
}

export const MenuItems: FC<MenuItemsProps> = ({ menuId, children }): ReactElement => (
  <div className={styles.items} id={menuId} role="menu">
    {children}
  </div>
);

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  isDisabled?: boolean;
  isSelected?: boolean;
  isNavigatedTo?: boolean;
}

// TODO support all of -- menuitemradio, menuitem, menuitemcheckbox
export const MenuItem: FC<MenuItemProps> = ({
  isDisabled = false,
  isSelected = false,
  isNavigatedTo = false,
  children,
}): ReactElement => {
  const classes = [styles.item, isSelected ? styles.selected : ''].filter((cl) => cl).join(' ');
  return (
    <button
      className={classes}
      role="menuitem"
      tabIndex={isNavigatedTo ? 0 : -1}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export const Menu: FC<MenuProps> = ({
  isRounded = false,
  isBordered = false,
  size = '',
  children,
}): ReactElement => {
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

  return <div className={menuClasses}>{children}</div>;
};
