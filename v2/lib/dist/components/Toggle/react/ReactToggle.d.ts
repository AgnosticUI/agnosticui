import { default as React } from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-toggle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                label?: string;
                checked?: boolean;
                size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
                variant?: 'default' | 'success' | 'warning' | 'danger';
                disabled?: boolean;
                readonly?: boolean;
                'labelledby'?: string;
                'describedby'?: string;
                name?: string;
                value?: string;
            }, HTMLElement>;
        }
    }
}
interface ReactToggleProps {
    label?: string;
    checked?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
    readonly?: boolean;
    labelledBy?: string;
    describedBy?: string;
    name?: string;
    value?: string;
    onChange?: (detail: {
        checked: boolean;
        name: string;
        value: string;
    }) => void;
    className?: string;
    id?: string;
}
export declare const ReactToggle: React.FC<ReactToggleProps>;
export {};
//# sourceMappingURL=ReactToggle.d.ts.map