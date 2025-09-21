import { LitElement } from 'lit';

interface AccordionItemElement extends HTMLElement {
    disabled: boolean;
    focus(): void;
}
export declare class AccordionGroup extends LitElement {
    constructor();
    get accordions(): AccordionItemElement[];
    handleAccordionKeydown: (e: Event) => void;
    render(): import('lit').TemplateResult<1>;
}
export {};
//# sourceMappingURL=AccordionGroup.d.ts.map