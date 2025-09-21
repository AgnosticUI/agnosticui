import { j as n } from "../../../jsx-runtime-OVHDjVDe.js";
import { r as a, w as o, f as b } from "../../../react.esm-B6WeHI3c.js";
import "react";
import { ReactButton as s } from "./ReactButton.js";
import { v as d, d as r, b as g, a as m, i as c, g as e } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const p = d.spyOn(console, "log").mockImplementation(() => {
});
r("ReactButton Wrapper", () => {
  g(() => {
    p.mockClear();
  }), m(() => {
    document.body.innerHTML = "";
  }), r("Basic Rendering", () => {
    c("should render without errors", async () => {
      a(/* @__PURE__ */ n.jsx(s, { children: "Test Button" })), await o(() => {
        const t = document.querySelector("ag-button");
        e(t).toBeInTheDocument();
      });
    }), c("should render children content", async () => {
      a(/* @__PURE__ */ n.jsx(s, { children: "Click Me" })), await o(() => {
        const t = document.querySelector("ag-button");
        e(t).toHaveTextContent("Click Me");
      });
    });
  }), r("Props Pass-Through", () => {
    c("should pass type prop to web component", async () => {
      a(/* @__PURE__ */ n.jsx(s, { type: "submit", children: "Submit" })), await o(() => {
        const t = document.querySelector("ag-button");
        e(t.type).toBe("submit");
      });
    }), c("should pass disabled prop to web component", async () => {
      a(/* @__PURE__ */ n.jsx(s, { disabled: !0, children: "Disabled" })), await o(() => {
        const t = document.querySelector("ag-button");
        e(t.disabled).toBe(!0);
      });
    }), c("should pass loading prop to web component", async () => {
      a(/* @__PURE__ */ n.jsx(s, { loading: !0, children: "Loading" })), await o(() => {
        const t = document.querySelector("ag-button");
        e(t.loading).toBe(!0);
      });
    }), c("should pass toggle and pressed props to web component", async () => {
      a(/* @__PURE__ */ n.jsx(s, { toggle: !0, pressed: !0, children: "Toggle" })), await o(() => {
        const t = document.querySelector("ag-button");
        e(t.toggle).toBe(!0), e(t.pressed).toBe(!0);
      });
    }), c("should pass ARIA attributes to web component", async () => {
      a(
        /* @__PURE__ */ n.jsx(
          s,
          {
            ariaLabel: "Close dialog",
            ariaDescribedby: "help-text",
            children: "Close"
          }
        )
      ), await o(() => {
        const t = document.querySelector("ag-button");
        e(t).toHaveAttribute("aria-label", "Close dialog"), e(t).toHaveAttribute("aria-describedby", "help-text");
      });
    });
  }), r("Event Handling", () => {
    c("should handle click events", async () => {
      const t = d.fn();
      a(/* @__PURE__ */ n.jsx(s, { onClick: t, children: "Click Me" })), await o(() => {
        const u = document.querySelector("ag-button");
        e(u).toBeInTheDocument();
      });
      const l = document.querySelector("ag-button");
      b.click(l), await o(() => {
        e(t).toHaveBeenCalledTimes(1);
      });
    }), c("should handle toggle events", async () => {
      const t = d.fn();
      a(/* @__PURE__ */ n.jsx(s, { toggle: !0, onToggle: t, children: "Toggle" })), await o(() => {
        const i = document.querySelector("ag-button");
        e(i).toBeInTheDocument();
      });
      const l = document.querySelector("ag-button"), u = new CustomEvent("toggle", {
        detail: { pressed: !0 }
      });
      l.dispatchEvent(u), await o(() => {
        e(t).toHaveBeenCalledWith({ pressed: !0 });
      });
    }), c("should handle className and id props", async () => {
      a(
        /* @__PURE__ */ n.jsx(s, { className: "custom-class", id: "my-button", children: "Styled Button" })
      ), await o(() => {
        const t = document.querySelector("ag-button");
        e(t).toHaveClass("custom-class"), e(t).toHaveAttribute("id", "my-button");
      });
    });
  });
});
