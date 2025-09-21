import { useState as n } from "react";
import { createAccordion as s, toggleSection as g } from "../helpers/accordion-state.js";
const l = (t) => {
  const [o, e] = n(s(t));
  return { state: o, toggle: (r) => {
    e((c) => g(c, r));
  } };
};
export {
  l as useAccordion
};
