export interface AccordionSection {
  id: string;
  expanded: boolean;
}

export interface AccordionState {
  sections: AccordionSection[];
}

export const createAccordion = (ids: string[]): AccordionState => ({
  sections: ids.map(id => ({ id, expanded: false })),
});

export const toggleSection = (state: AccordionState, id: string): AccordionState => ({
  sections: state.sections.map(section =>
    section.id === id
      ? { ...section, expanded: !section.expanded }
      : section
  ),
});
