import { ReactNode, FC } from 'react';
export interface TabButtonCustomProps {
    css?: string;
    index?: number;
    selectedTab?: number;
    children: ReactNode;
    onClick?: (activeIndex: number) => void;
}
export declare const TabButtonCustom: FC<TabButtonCustomProps>;
