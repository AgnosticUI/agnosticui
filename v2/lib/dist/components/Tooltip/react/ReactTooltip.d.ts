import { default as React } from 'react';
import { Tooltip as TooltipWC } from '../core/_Tooltip';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-tooltip': React.DetailedHTMLProps<React.HTMLAttributes<TooltipWC> & {
                content?: string;
                placement?: 'top' | 'bottom' | 'left' | 'right';
                trigger?: string;
                distance?: number;
                skidding?: number;
                disabled?: boolean;
            }, TooltipWC>;
        }
    }
}
interface TooltipProps {
    content: React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    trigger?: string;
    children: React.ReactElement;
    onShow?: () => void;
    onHide?: () => void;
}
export interface TooltipHandle {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<TooltipHandle>>;
export {};
//# sourceMappingURL=ReactTooltip.d.ts.map