import { default as React } from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-dialog': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                open?: boolean;
                heading?: string;
                description?: string;
                'close-on-escape'?: boolean;
                'close-on-backdrop'?: boolean;
                'show-close-button'?: boolean;
            }, HTMLElement>;
        }
    }
}
interface ReactDialogProps {
    open?: boolean;
    heading?: string;
    description?: string;
    closeOnEscape?: boolean;
    closeOnBackdrop?: boolean;
    showCloseButton?: boolean;
    onDialogOpen?: () => void;
    onDialogClose?: () => void;
    onDialogCancel?: () => void;
    children?: React.ReactNode;
    className?: string;
    id?: string;
}
export declare const ReactDialog: React.FC<ReactDialogProps>;
interface DialogHeaderProps {
    children?: React.ReactNode;
}
interface DialogFooterProps {
    children?: React.ReactNode;
}
export declare const DialogHeader: React.FC<DialogHeaderProps>;
export declare const DialogFooter: React.FC<DialogFooterProps>;
export {};
//# sourceMappingURL=ReactDialog.d.ts.map