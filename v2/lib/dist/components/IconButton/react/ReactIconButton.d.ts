import { default as React } from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-icon-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                label: string;
                icon?: string;
                unicode?: string;
                size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
                variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
                type?: 'button' | 'submit' | 'reset';
                disabled?: boolean;
                pressed?: boolean;
                loading?: boolean;
                'aria-label'?: string;
                'aria-describedby'?: string;
            }, HTMLElement>;
        }
    }
}
interface ReactIconButtonProps {
    /** Required accessible name for the button */
    label: string;
    /** Icon identifier or name (for icon systems) */
    icon?: string;
    /** Unicode symbol for simple icons (×, ☰, etc.) */
    unicode?: string;
    /** Button size variant */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Visual variant */
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    /** Button type */
    type?: 'button' | 'submit' | 'reset';
    /** Disabled state */
    disabled?: boolean;
    /** Pressed state for toggle buttons */
    pressed?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Additional ARIA label (will override label prop) */
    ariaLabel?: string;
    /** ARIA described by reference */
    ariaDescribedby?: string;
    /** Click event handler */
    onClick?: (event: Event) => void;
    /** Keyboard activation event handler */
    onActivate?: (detail: {
        label: string;
        pressed: boolean;
        originalEvent: KeyboardEvent;
    }) => void;
    /** Slotted icon content */
    children?: React.ReactNode;
    /** CSS class name */
    className?: string;
    /** Element ID */
    id?: string;
}
export declare const ReactIconButton: React.FC<ReactIconButtonProps>;
export {};
//# sourceMappingURL=ReactIconButton.d.ts.map