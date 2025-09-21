import { AccordionGroup as m } from "./AccordionGroup.js";
import { AccordionItem as l } from "../Accordion/core/_Accordion.js";
import { d as u, b as p, a as w, i, g as a } from "../../vi.bdSIJ99Y-kNDF-H_t.js";
u("AccordionGroup", () => {
  let s, c;
  p(() => {
    s = document.createElement("iframe"), document.body.appendChild(s), c = s.contentDocument, s.contentWindow.customElements.define("ag-accordion", m), s.contentWindow.customElements.define("ag-accordion-item", l);
  }), w(() => {
    s.remove();
  });
  const d = async (n) => {
    const o = c.createElement("ag-accordion");
    c.body.appendChild(o);
    for (let t = 0; t < n; t++) {
      const r = c.createElement("ag-accordion-item");
      o.appendChild(r);
    }
    await o.updateComplete;
    const e = Array.from(o.querySelectorAll("ag-accordion-item"));
    for (const t of e)
      await t.updateComplete;
    return { group: o, accordions: e };
  };
  i("should move focus down on ArrowDown key", async () => {
    const { group: n, accordions: o } = await d(3), e = o[0];
    e.focus(), e.dispatchEvent(new CustomEvent("accordion-keydown", {
      detail: { key: "ArrowDown", accordionItem: e },
      bubbles: !0
    })), await n.updateComplete;
    const t = o.indexOf(c.activeElement);
    a(t).toBe(1), a(c.activeElement.shadowRoot.activeElement?.tagName).toBe("BUTTON");
  }), i("should move focus up on ArrowUp key", async () => {
    const { group: n, accordions: o } = await d(3), e = o[1];
    e.focus(), e.dispatchEvent(new CustomEvent("accordion-keydown", {
      detail: { key: "ArrowUp", accordionItem: e },
      bubbles: !0
    })), await n.updateComplete;
    const t = o.indexOf(c.activeElement);
    a(t).toBe(0), a(c.activeElement.shadowRoot.activeElement?.tagName).toBe("BUTTON");
  }), i("should move focus to the last item on End key", async () => {
    const { group: n, accordions: o } = await d(3), e = o[0];
    e.focus(), e.dispatchEvent(new CustomEvent("accordion-keydown", {
      detail: { key: "End", accordionItem: e },
      bubbles: !0
    })), await n.updateComplete;
    const t = o.indexOf(c.activeElement);
    a(t).toBe(2), a(c.activeElement.shadowRoot.activeElement?.tagName).toBe("BUTTON");
  }), i("should move focus to the first item on Home key", async () => {
    const { group: n, accordions: o } = await d(3), e = o[2];
    e.focus(), e.dispatchEvent(new CustomEvent("accordion-keydown", {
      detail: { key: "Home", accordionItem: e },
      bubbles: !0
    })), await n.updateComplete;
    const t = o.indexOf(c.activeElement);
    a(t).toBe(0), a(c.activeElement.shadowRoot.activeElement?.tagName).toBe("BUTTON");
  }), i("should wrap focus from last to first on ArrowDown", async () => {
    const { group: n, accordions: o } = await d(3), e = o[2];
    e.focus(), e.dispatchEvent(new CustomEvent("accordion-keydown", {
      detail: { key: "ArrowDown", accordionItem: e },
      bubbles: !0
    })), await n.updateComplete;
    const t = o.indexOf(c.activeElement);
    a(t).toBe(0), a(c.activeElement.shadowRoot.activeElement?.tagName).toBe("BUTTON");
  }), i("should wrap focus from first to last on ArrowUp", async () => {
    const { group: n, accordions: o } = await d(3), e = o[0];
    e.focus(), e.dispatchEvent(new CustomEvent("accordion-keydown", {
      detail: { key: "ArrowUp", accordionItem: e },
      bubbles: !0
    })), await n.updateComplete;
    const t = o.indexOf(c.activeElement);
    a(t).toBe(2), a(c.activeElement.shadowRoot.activeElement?.tagName).toBe("BUTTON");
  }), i("should handle dynamically added accordion items", async () => {
    const { group: n } = await d(2), o = c.createElement("ag-accordion-item");
    n.appendChild(o), await o.updateComplete;
    const e = Array.from(n.querySelectorAll("ag-accordion-item"));
    a(e.length).toBe(3);
    const t = e[2];
    t.focus(), t.dispatchEvent(new CustomEvent("accordion-keydown", {
      detail: { key: "ArrowDown", accordionItem: t },
      bubbles: !0
    })), await n.updateComplete;
    const r = e.indexOf(c.activeElement);
    a(r).toBe(0);
  });
});
