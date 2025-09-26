import { default as React } from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-tabs': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                activation?: 'manual' | 'automatic';
                'active-tab'?: number;
                orientation?: 'horizontal' | 'vertical';
                'aria-label'?: string;
                'aria-labelledby'?: string;
            }, HTMLElement>;
            'ag-tab': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                panel?: string;
                disabled?: boolean;
                'aria-disabled'?: string;
            }, HTMLElement>;
            'ag-tab-panel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                hidden?: boolean;
            }, HTMLElement>;
        }
    }
}
interface ReactTabsProps {
    activation?: 'manual' | 'automatic';
    activeTab?: number;
    orientation?: 'horizontal' | 'vertical';
    ariaLabel?: string;
    ariaLabelledBy?: string;
    onTabChange?: (detail: {
        activeTab: number;
        previousTab: number;
    }) => void;
    children?: React.ReactNode;
    className?: string;
    id?: string;
}
export declare const ReactTabs: React.FC<ReactTabsProps>;
interface TabProps {
    panel: string;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    id?: string;
}
interface TabPanelProps {
    id: string;
    children?: React.ReactNode;
    className?: string;
}
export declare const Tab: React.FC<TabProps>;
export declare const TabPanel: React.FC<TabPanelProps>;
export {};
//# sourceMappingURL=ReactTabs.d.ts.map