import { FC, ReactNode } from 'react';
export interface HeaderNavProps {
    css?: string;
    children: ReactNode;
}
export declare const HeaderNav: FC<HeaderNavProps>;
export interface HeaderNavItemProps {
    css?: string;
    children: ReactNode;
}
export declare const HeaderNavItem: FC<HeaderNavItemProps>;
export interface HeaderProps {
    isSticky?: boolean;
    isSkinned?: boolean;
    isHeaderContentStart?: boolean;
    isHeaderContentEnd?: boolean;
    css?: string;
    children: ReactNode;
}
export declare const Header: FC<HeaderProps>;
