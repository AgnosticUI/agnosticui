export interface AccordionSection {
    id: string;
    expanded: boolean;
}
export interface AccordionState {
    sections: AccordionSection[];
}
export declare const createAccordion: (ids: string[]) => AccordionState;
export declare const toggleSection: (state: AccordionState, id: string) => AccordionState;
//# sourceMappingURL=accordion-state.d.ts.map