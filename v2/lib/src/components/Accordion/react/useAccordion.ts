import { useState } from "react";
import type {
  AccordionState,
} from "../helpers/accordion-state";
import {
  createAccordion,
  toggleSection,
} from "../helpers/accordion-state";

export const useAccordion = (ids: string[]) => {
  const [state, setState] = useState<AccordionState>(createAccordion(ids));

  const toggle = (id: string) => {
    setState((prev: AccordionState) => toggleSection(prev, id));
  };

  return { state, toggle };
};
