import { default as React } from 'react';
import { BreadcrumbItem } from '../core/_Breadcrumb';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-breadcrumb': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                items?: BreadcrumbItem[];
                type?: 'default' | 'slash' | 'bullet' | 'arrow';
                'aria-label'?: string;
            }, HTMLElement>;
        }
    }
}
interface ReactBreadcrumbProps {
    items: BreadcrumbItem[];
    type?: 'default' | 'slash' | 'bullet' | 'arrow';
    ariaLabel?: string;
    onBreadcrumbClick?: (detail: {
        item: BreadcrumbItem;
        index: number;
        event: MouseEvent;
    }) => void;
    className?: string;
    id?: string;
}
export declare const ReactBreadcrumb: React.FC<ReactBreadcrumbProps>;
export {};
//# sourceMappingURL=ReactBreadcrumb.d.ts.map