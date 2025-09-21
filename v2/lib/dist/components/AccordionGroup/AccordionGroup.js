import { LitElement as d, html as i } from "lit";
class a extends d {
  constructor() {
    super(), this.addEventListener("accordion-keydown", this.handleAccordionKeydown);
  }
  get accordions() {
    return Array.from(this.children).filter((n) => "disabled" in n && "focus" in n && typeof n.focus == "function" && !n.disabled);
  }
  handleAccordionKeydown = (n) => {
    const c = n, e = this.accordions;
    if (e.length === 0) return;
    const { key: t, accordionItem: s } = c.detail, r = e.indexOf(s);
    if (r === -1) return;
    let o = r;
    switch (t) {
      case "ArrowDown":
        o = (r + 1) % e.length;
        break;
      case "ArrowUp":
        o = (r - 1 + e.length) % e.length;
        break;
      case "Home":
        o = 0;
        break;
      case "End":
        o = e.length - 1;
        break;
      default:
        return;
    }
    o !== r && e[o].focus();
  };
  render() {
    return i`<slot></slot>`;
  }
}
customElements.get("ag-accordion") || customElements.define("ag-accordion", a);
export {
  a as AccordionGroup
};
