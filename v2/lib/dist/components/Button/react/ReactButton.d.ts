import { default as React } from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                type?: 'button' | 'submit' | 'reset';
                disabled?: boolean;
                loading?: boolean;
                toggle?: boolean;
                pressed?: boolean;
                'aria-label'?: string;
                'aria-describedby'?: string;
            }, HTMLElement>;
        }
    }
}
interface ReactButtonProps {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    toggle?: boolean;
    pressed?: boolean;
    ariaLabel?: string;
    ariaDescribedby?: string;
    onClick?: (event: Event) => void;
    onToggle?: (detail: {
        pressed: boolean;
    }) => void;
    children?: React.ReactNode;
    className?: string;
    id?: string;
}
export declare const ReactButton: React.FC<ReactButtonProps>;
export {};
//# sourceMappingURL=ReactButton.d.ts.map