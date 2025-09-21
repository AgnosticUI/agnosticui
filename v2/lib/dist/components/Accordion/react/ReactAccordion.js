import { j as n } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as m, useEffect as d } from "react";
import "../core/_Accordion.js";
const p = () => Promise.all([
  customElements.whenDefined("ag-accordion-item")
]), E = ({
  children: e
}) => /* @__PURE__ */ n.jsx("div", { role: "region", "aria-label": "Accordion", children: e }), j = ({
  open: e = !1,
  onToggle: o,
  children: a
}) => {
  const r = m(null);
  return d(() => {
    const l = async () => {
      if (await p(), !r.current) return;
      const t = r.current, c = (i) => {
        i.stopPropagation();
        const u = i.detail;
        o?.(u);
      };
      return t.addEventListener("toggle", c), () => {
        t.removeEventListener("toggle", c);
      };
    };
    let s;
    return l().then((t) => {
      s = t;
    }), () => s?.();
  }, [o]), /* @__PURE__ */ n.jsx("ag-accordion-item", { ref: r, open: e, children: a });
}, v = ({ children: e }) => /* @__PURE__ */ n.jsx("span", { slot: "header", children: e }), h = ({ children: e }) => /* @__PURE__ */ n.jsx("div", { slot: "content", children: e });
export {
  j as AccordionItem,
  h as ItemContent,
  v as ItemHeader,
  E as ReactAccordion
};
