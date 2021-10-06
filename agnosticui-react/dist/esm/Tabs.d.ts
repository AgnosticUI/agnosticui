import { FC, ReactNode, ReactElement } from 'react';
export interface TabHeaderProps {
    isBorderless?: boolean;
    isSkinned?: boolean;
    children: ReactNode;
}
export declare const TabHeader: FC<TabHeaderProps>;
export interface TabPanelProps {
    title: string;
    children: ReactNode;
}
export declare const TabPanel: FC<TabPanelProps>;
export interface TabButtonProps {
    index?: number;
    isBorderless?: boolean;
    isSkinned?: boolean;
    size?: 'small' | 'large' | 'jumbo' | '';
    selectedTab?: number;
    children: ReactNode;
    onClick?: (activeIndex: number) => void;
}
export declare const TabButton: FC<TabButtonProps>;
export interface TabProps {
    isBorderless?: boolean;
    isSkinned?: boolean;
    size?: 'small' | 'large' | 'jumbo' | '';
    tabButtons: ReactElement[];
    tabPanels: ReactElement[];
}
export declare const Tabs: FC<TabProps>;
