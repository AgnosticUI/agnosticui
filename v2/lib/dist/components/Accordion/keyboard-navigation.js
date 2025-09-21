const s = (o) => Array.from(o.children).filter(
  (n) => "disabled" in n && "focus" in n && typeof n.focus == "function" && !n.disabled
), i = (o, n) => {
  const t = o, e = s(n);
  if (e.length === 0) return;
  const { key: d, accordionItem: a } = t.detail, r = e.indexOf(a);
  if (r === -1) return;
  let c = r;
  switch (d) {
    case "ArrowDown":
      c = (r + 1) % e.length;
      break;
    case "ArrowUp":
      c = (r - 1 + e.length) % e.length;
      break;
    case "Home":
      c = 0;
      break;
    case "End":
      c = e.length - 1;
      break;
    default:
      return;
  }
  c !== r && e[c].focus();
}, l = (o) => {
  o.addEventListener("accordion-keydown", (n) => i(n, o));
};
export {
  l as addKeyboardNavigation,
  s as getAccordionItems,
  i as handleAccordionKeydown
};
