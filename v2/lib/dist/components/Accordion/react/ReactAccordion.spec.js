import { j as t } from "../../../jsx-runtime-OVHDjVDe.js";
import { r as c, w as n } from "../../../react.esm-B6WeHI3c.js";
import "react";
import { ReactAccordion as u, AccordionItem as a, ItemHeader as h, ItemContent as p } from "./ReactAccordion.js";
import { v as C, d as i, b as x, a as y, i as r, g as o } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const T = C.spyOn(console, "log").mockImplementation(() => {
});
i("ReactAccordion Wrappers", () => {
  x(() => {
    T.mockClear();
  }), y(() => {
    document.body.innerHTML = "";
  }), i("ReactAccordion Container", () => {
    r("should render without errors", async () => {
      c(/* @__PURE__ */ t.jsx(u, { children: "Test Content" })), await n(() => {
        const e = document.querySelector('div[role="region"][aria-label="Accordion"]');
        o(e).toBeInTheDocument();
      });
    }), r("should render children content", async () => {
      c(/* @__PURE__ */ t.jsx(u, { children: "Accordion Children" })), await n(() => {
        const e = document.querySelector('div[role="region"][aria-label="Accordion"]');
        o(e).toHaveTextContent("Accordion Children");
      });
    });
  }), i("AccordionItem Component", () => {
    r("should render without errors", async () => {
      c(/* @__PURE__ */ t.jsx(a, { children: "Item Content" })), await n(() => {
        const e = document.querySelector("ag-accordion-item");
        o(e).toBeInTheDocument();
      });
    }), r("should pass open prop to web component", async () => {
      c(/* @__PURE__ */ t.jsx(a, { open: !0, children: "Open Item" })), await n(() => {
        const e = document.querySelector("ag-accordion-item");
        o(e.open).toBe(!0);
      });
    }), r("should handle toggle events with stopPropagation", async () => {
      const e = C.fn();
      c(/* @__PURE__ */ t.jsx(a, { onToggle: e, children: "Test Item" })), await n(() => {
        const s = document.querySelector("ag-accordion-item");
        o(s).toBeInTheDocument();
      });
      const d = document.querySelector("ag-accordion-item");
      d.toggle(), await d.updateComplete, await n(() => {
        o(e).toHaveBeenCalledWith({ open: !0 });
      });
    }), r("should render children content", async () => {
      c(/* @__PURE__ */ t.jsx(a, { children: "Item Children" })), await n(() => {
        const e = document.querySelector("ag-accordion-item");
        o(e).toHaveTextContent("Item Children");
      });
    });
  }), i("ItemHeader Component", () => {
    r('should render as slot="header"', async () => {
      c(/* @__PURE__ */ t.jsx(h, { children: "Header Content" })), await n(() => {
        const e = document.querySelector('span[slot="header"]');
        o(e).toBeInTheDocument(), o(e).toHaveTextContent("Header Content");
      });
    });
  }), i("ItemContent Component", () => {
    r('should render as slot="content"', async () => {
      c(/* @__PURE__ */ t.jsx(p, { children: "Content Body" })), await n(() => {
        const e = document.querySelector('div[slot="content"]');
        o(e).toBeInTheDocument(), o(e).toHaveTextContent("Content Body");
      });
    });
  }), i("Full Accordion Integration", () => {
    r("should render complete accordion structure", async () => {
      const e = C.fn();
      c(
        /* @__PURE__ */ t.jsxs(u, { children: [
          /* @__PURE__ */ t.jsxs(a, { onToggle: e, children: [
            /* @__PURE__ */ t.jsx(h, { children: "Section 1" }),
            /* @__PURE__ */ t.jsx(p, { children: "Content for section 1" })
          ] }),
          /* @__PURE__ */ t.jsxs(a, { open: !0, children: [
            /* @__PURE__ */ t.jsx(h, { children: "Section 2" }),
            /* @__PURE__ */ t.jsx(p, { children: "Content for section 2" })
          ] })
        ] })
      ), await n(() => {
        const d = document.querySelector('div[role="region"][aria-label="Accordion"]'), s = document.querySelectorAll("ag-accordion-item"), l = document.querySelectorAll('span[slot="header"]'), m = document.querySelectorAll('div[slot="content"]');
        o(d).toBeInTheDocument(), o(s).toHaveLength(2), o(l).toHaveLength(2), o(m).toHaveLength(2), o(l[0]).toHaveTextContent("Section 1"), o(l[1]).toHaveTextContent("Section 2"), o(m[0]).toHaveTextContent("Content for section 1"), o(m[1]).toHaveTextContent("Content for section 2");
        const g = s[1];
        o(g.open).toBe(!0);
      });
    });
  });
});
