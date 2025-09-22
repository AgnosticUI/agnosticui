import { j as t } from "../../../jsx-runtime-OVHDjVDe.js";
import { r as a, w as n } from "../../../react.esm-B6WeHI3c.js";
import "react";
import { ReactDialog as l, DialogHeader as u, DialogFooter as h } from "./ReactDialog.js";
import { v as g, d as r, b as m, a as p, i as s, g as o } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const C = g.spyOn(console, "log").mockImplementation(() => {
});
r("ReactDialog Wrapper", () => {
  m(() => {
    C.mockClear();
  }), p(() => {
    document.body.innerHTML = "";
  }), r("Basic Rendering", () => {
    s("should render without errors", async () => {
      a(/* @__PURE__ */ t.jsx(l, { children: "Dialog Content" })), await n(() => {
        const e = document.querySelector("ag-dialog");
        o(e).toBeInTheDocument();
      });
    }), s("should render children content", async () => {
      a(/* @__PURE__ */ t.jsx(l, { children: "Dialog Content" })), await n(() => {
        const e = document.querySelector("ag-dialog");
        o(e).toHaveTextContent("Dialog Content");
      });
    }), s("should not be open by default", async () => {
      a(/* @__PURE__ */ t.jsx(l, { children: "Dialog Content" })), await n(() => {
        const e = document.querySelector("ag-dialog");
        o(e.open).toBe(!1);
      });
    });
  }), r("Props Pass-Through", () => {
    s("should pass open prop to web component", async () => {
      a(/* @__PURE__ */ t.jsx(l, { open: !0, children: "Dialog Content" })), await n(() => {
        const e = document.querySelector("ag-dialog");
        o(e.open).toBe(!0);
      });
    }), s("should pass heading prop to web component", async () => {
      a(/* @__PURE__ */ t.jsx(l, { heading: "Test Dialog", children: "Dialog Content" })), await n(() => {
        const e = document.querySelector("ag-dialog");
        o(e.heading).toBe("Test Dialog");
      });
    }), s("should pass description prop to web component", async () => {
      a(/* @__PURE__ */ t.jsx(l, { description: "Test description", children: "Dialog Content" })), await n(() => {
        const e = document.querySelector("ag-dialog");
        o(e.description).toBe("Test description");
      });
    }), s("should pass boolean props to web component", async () => {
      a(
        /* @__PURE__ */ t.jsx(
          l,
          {
            closeOnEscape: !1,
            closeOnBackdrop: !1,
            showCloseButton: !0,
            children: "Dialog Content"
          }
        )
      ), await n(() => {
        const c = document.querySelector("ag-dialog");
        o(c).toBeInTheDocument();
      }), await new Promise((c) => setTimeout(c, 200));
      const e = document.querySelector("ag-dialog");
      e.updateComplete && await e.updateComplete, o(e.closeOnEscape).toBe(!1), o(e.closeOnBackdrop).toBe(!1), o(e.showCloseButton).toBe(!0);
    }), s("should handle className and id props", async () => {
      a(
        /* @__PURE__ */ t.jsx(l, { className: "custom-class", id: "my-dialog", children: "Dialog Content" })
      ), await n(() => {
        const e = document.querySelector("ag-dialog");
        o(e).toHaveClass("custom-class"), o(e).toHaveAttribute("id", "my-dialog");
      });
    });
  }), r("Event Handling", () => {
    s("should handle dialog-open events", async () => {
      const e = g.fn();
      a(/* @__PURE__ */ t.jsx(l, { onDialogOpen: e, children: "Dialog Content" })), await n(() => {
        const d = document.querySelector("ag-dialog");
        o(d).toBeInTheDocument();
      });
      const c = document.querySelector("ag-dialog"), i = new CustomEvent("dialog-open", { bubbles: !0 });
      c.dispatchEvent(i), await n(() => {
        o(e).toHaveBeenCalledTimes(1);
      });
    }), s("should handle dialog-close events", async () => {
      const e = g.fn();
      a(/* @__PURE__ */ t.jsx(l, { onDialogClose: e, children: "Dialog Content" })), await n(() => {
        const d = document.querySelector("ag-dialog");
        o(d).toBeInTheDocument();
      });
      const c = document.querySelector("ag-dialog"), i = new CustomEvent("dialog-close", { bubbles: !0 });
      c.dispatchEvent(i), await n(() => {
        o(e).toHaveBeenCalledTimes(1);
      });
    }), s("should handle dialog-cancel events", async () => {
      const e = g.fn();
      a(/* @__PURE__ */ t.jsx(l, { onDialogCancel: e, children: "Dialog Content" })), await n(() => {
        const d = document.querySelector("ag-dialog");
        o(d).toBeInTheDocument();
      });
      const c = document.querySelector("ag-dialog"), i = new CustomEvent("dialog-cancel", { bubbles: !0 });
      c.dispatchEvent(i), await n(() => {
        o(e).toHaveBeenCalledTimes(1);
      });
    });
  }), r("Slot Components", () => {
    s("should render DialogHeader with slot attribute", async () => {
      a(
        /* @__PURE__ */ t.jsxs(l, { children: [
          /* @__PURE__ */ t.jsx(u, { children: "Custom Header" }),
          "Dialog Content"
        ] })
      ), await n(() => {
        const e = document.querySelector('[slot="header"]');
        o(e).toBeInTheDocument(), o(e).toHaveTextContent("Custom Header");
      });
    }), s("should render DialogFooter with slot attribute", async () => {
      a(
        /* @__PURE__ */ t.jsxs(l, { children: [
          "Dialog Content",
          /* @__PURE__ */ t.jsx(h, { children: "Custom Footer" })
        ] })
      ), await n(() => {
        const e = document.querySelector('[slot="footer"]');
        o(e).toBeInTheDocument(), o(e).toHaveTextContent("Custom Footer");
      });
    }), s("should render both header and footer slots", async () => {
      a(
        /* @__PURE__ */ t.jsxs(l, { children: [
          /* @__PURE__ */ t.jsx(u, { children: "Header Content" }),
          "Main dialog content",
          /* @__PURE__ */ t.jsx(h, { children: "Footer Content" })
        ] })
      ), await n(() => {
        const e = document.querySelector('[slot="header"]'), c = document.querySelector('[slot="footer"]');
        o(e).toHaveTextContent("Header Content"), o(c).toHaveTextContent("Footer Content");
      });
    });
  });
});
