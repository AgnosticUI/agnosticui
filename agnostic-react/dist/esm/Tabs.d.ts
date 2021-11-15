import React, { KeyboardEvent, FC, ReactNode, ReactElement } from 'react';
export interface TabListProps {
    size?: 'small' | 'large' | 'xlarge' | '';
    disabledOptions?: number[];
    isDisabled?: boolean;
    isBorderless?: boolean;
    isSkinned?: boolean;
    selectedTab?: number;
    selectTab: (index: number) => void;
    isVerticalOrientation?: boolean;
    tabButtons: ReactElement[];
}
export declare const TabList: FC<TabListProps>;
export interface TabButtonProps {
    index?: number;
    isBorderless?: boolean;
    isSkinned?: boolean;
    disabledOptions?: number[];
    isDisabled?: boolean;
    size?: 'small' | 'large' | 'xlarge' | '';
    selectedTab?: number;
    controlsPanelId: string;
    children: ReactNode;
    onClick?: (activeIndex: number) => void;
    onKeyDown: (ev: KeyboardEvent<HTMLElement>) => void;
}
/**
 * Note that a TabButton must be a direct descendent of TabList to comply with aria role
 * rules as it is required for them to be structured as: tablist (parent) > tab (child).
 */
export declare const TabButton: React.ForwardRefExoticComponent<TabButtonProps & React.RefAttributes<HTMLButtonElement>>;
export interface TabPanelProps {
    id: string;
    isSelected?: boolean;
    children: ReactNode;
}
export declare const TabPanel: FC<TabPanelProps>;
export interface TabProps {
    isBorderless?: boolean;
    isDisabled?: boolean;
    disabledOptions?: number[];
    isSkinned?: boolean;
    isVerticalOrientation?: boolean;
    size?: 'small' | 'large' | 'xlarge' | '';
    tabButtons: ReactElement[];
    tabPanels: ReactElement[];
}
export declare const Tabs: FC<TabProps>;
