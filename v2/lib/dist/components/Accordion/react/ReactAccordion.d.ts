import { default as React } from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'ag-accordion-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                open?: boolean;
                'heading-level'?: number;
                disabled?: boolean;
            }, HTMLElement>;
        }
    }
}
interface AccordionProps {
    children?: React.ReactNode;
}
interface AccordionItemProps {
    open?: boolean;
    onToggle?: (detail: {
        open: boolean;
    }) => void;
    children?: React.ReactNode;
}
interface ItemHeaderProps {
    children?: React.ReactNode;
}
interface ItemContentProps {
    children?: React.ReactNode;
}
export declare const ReactAccordion: React.FC<AccordionProps>;
export declare const AccordionItem: React.FC<AccordionItemProps>;
export declare const ItemHeader: React.FC<ItemHeaderProps>;
export declare const ItemContent: React.FC<ItemContentProps>;
export {};
//# sourceMappingURL=ReactAccordion.d.ts.map