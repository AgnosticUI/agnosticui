export interface AccordionItemElement extends HTMLElement {
    disabled: boolean;
    focus(): void;
}
export declare const getAccordionItems: (container: Element) => AccordionItemElement[];
export declare const handleAccordionKeydown: (e: Event, container: Element) => void;
export declare const addKeyboardNavigation: (element: Element) => void;
//# sourceMappingURL=keyboard-navigation.d.ts.map