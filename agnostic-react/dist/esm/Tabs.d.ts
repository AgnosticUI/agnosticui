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
    disabledOptions?: number[];
    isDisabled?: boolean;
    size?: 'small' | 'large' | 'xlarge' | '';
    selectedTab?: number;
    children: ReactNode;
    onClick?: (activeIndex: number) => void;
}
export declare const TabButton: FC<TabButtonProps>;
export interface TabProps {
    isBorderless?: boolean;
    isDisabled?: boolean;
    disabledOptions?: number[];
    isSkinned?: boolean;
    size?: 'small' | 'large' | 'xlarge' | '';
    tabButtons: ReactElement[];
    tabPanels: ReactElement[];
}
export declare const Tabs: FC<TabProps>;
