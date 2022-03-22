import { FC, HTMLAttributes, ReactNode, ReactElement } from 'react';
import styles from './menu.module.css';
// import buttonStyles from './button.module.css';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  // TODO -- would be nice to offer various sizes here
  // size?: 'small' | 'large' | 'xlarge' | '';
  // menuId: string;
  // menuTitle: string;
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

// group, menuitemradio, menuitem, menuitemcheckboxwebhintaxe/aria

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

/*
    <div class="menu-items" id="players2" data-inclusive-menu-from="left" role="menu">
      <button class="menu-item selected" role="menuitem" tabindex="-1">Andre Agassi</button>
      <button class="menu-item" role="menuitem" tabindex="-1">Serena Williams</button>
      <button class="menu-item" role="menuitem" tabindex="-1" disabled>Rafael Nadal</button>
      <button class="menu-item selected" role="menuitem" tabindex="-1">Roger Federer</button>
      <button class="menu-item" role="menuitem" tabindex="-1">Althea Gibson</button>
      <button class="menu-item" role="menuitem" tabindex="-1">Bjorn Borg</button>
    </div>

.menu {
  composes: menu from './menu.css';
.trigger {
  composes: menu-trigger from './menu.css';
.items {
  composes: menu-items from './menu.css';
.item {
  composes: menu-item from './menu.css';
.icon {
  composes: menu-icon from './menu.css';
.rounded {
  composes: menu-rounded from './menu.css';
.bordered {
  composes: menu-bordered from './menu.css'; */
export const menuContainerClasses = (props: MenuProps): string => {
  const { isRounded, isBordered } = props;
  return [styles.menu, isBordered ? styles.bordered : '', isRounded ? styles.rounded : '']
    .filter((cls) => cls)
    .join(' ');
};

export const Menu: FC<MenuProps> = ({
  isRounded = false,
  isBordered = false,
  children,
}): ReactElement => (
  <div className={menuContainerClasses({ isRounded, isBordered })}>{children}</div>
);
