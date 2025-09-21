const n = (d) => ({
  sections: d.map((a) => ({ id: a, expanded: !1 }))
}), o = (d, a) => ({
  sections: d.sections.map(
    (e) => e.id === a ? { ...e, expanded: !e.expanded } : e
  )
});
export {
  n as createAccordion,
  o as toggleSection
};
