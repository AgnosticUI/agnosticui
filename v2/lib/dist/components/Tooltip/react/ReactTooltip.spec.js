import { j as o } from "../../../jsx-runtime-OVHDjVDe.js";
import { r as s, w as c, s as g } from "../../../react.esm-B6WeHI3c.js";
import u from "react";
import { Tooltip as i } from "./ReactTooltip.js";
import { v as l, d, b as w, a as y, i as r, g as e } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const T = l.spyOn(console, "log").mockImplementation(() => {
});
d("ReactTooltip Wrapper", () => {
  w(() => {
    T.mockClear();
  }), y(() => {
    document.body.innerHTML = "";
  }), d("Basic Rendering", () => {
    r("should render without errors", async () => {
      s(
        /* @__PURE__ */ o.jsx(i, { content: "Test tooltip", children: /* @__PURE__ */ o.jsx("button", { children: "Test Button" }) })
      ), await c(() => {
        const t = document.querySelector("ag-tooltip");
        e(t).toBeInTheDocument();
      });
    }), r("should render children content", async () => {
      s(
        /* @__PURE__ */ o.jsx(i, { content: "Tooltip text", children: /* @__PURE__ */ o.jsx("span", { children: "Trigger Element" }) })
      ), await c(() => {
        const t = g.getByText("Trigger Element");
        e(t).toBeInTheDocument();
      });
    }), r("should pass content prop to web component", async () => {
      s(
        /* @__PURE__ */ o.jsx(i, { content: "Test tooltip content", children: /* @__PURE__ */ o.jsx("button", { children: "Hover me" }) })
      ), await c(() => {
        const t = document.querySelector("ag-tooltip");
        e(t).toBeInTheDocument(), e(t.getAttribute("content")).toBe("Test tooltip content");
      });
    });
  }), d("Props Pass-Through", () => {
    r("should pass placement prop to web component", async () => {
      s(
        /* @__PURE__ */ o.jsx(i, { content: "Tooltip", placement: "bottom", children: /* @__PURE__ */ o.jsx("button", { children: "Button" }) })
      ), await c(() => {
        const t = document.querySelector("ag-tooltip");
        e(t.getAttribute("placement")).toBe("bottom");
      });
    }), r("should pass trigger prop to web component", async () => {
      s(
        /* @__PURE__ */ o.jsx(i, { content: "Tooltip", trigger: "click", children: /* @__PURE__ */ o.jsx("button", { children: "Button" }) })
      ), await c(() => {
        const t = document.querySelector("ag-tooltip");
        e(t.getAttribute("trigger")).toBe("click");
      });
    });
  }), d("Event Handling", () => {
    r("should handle show events", async () => {
      const t = l.fn();
      s(
        /* @__PURE__ */ o.jsx(i, { content: "Test", onShow: t, children: /* @__PURE__ */ o.jsx("button", { children: "Button" }) })
      ), await c(() => {
        const p = document.querySelector("ag-tooltip");
        e(p).toBeInTheDocument();
      });
      const n = document.querySelector("ag-tooltip"), a = new CustomEvent("show");
      n.dispatchEvent(a), await c(() => {
        e(t).toHaveBeenCalledTimes(1);
      });
    }), r("should handle hide events", async () => {
      const t = l.fn();
      s(
        /* @__PURE__ */ o.jsx(i, { content: "Test", onHide: t, children: /* @__PURE__ */ o.jsx("button", { children: "Button" }) })
      ), await c(() => {
        const p = document.querySelector("ag-tooltip");
        e(p).toBeInTheDocument();
      });
      const n = document.querySelector("ag-tooltip"), a = new CustomEvent("hide");
      n.dispatchEvent(a), await c(() => {
        e(t).toHaveBeenCalled();
      });
    });
  }), d("Imperative API", () => {
    r("should provide show, hide, and toggle methods via ref", async () => {
      const t = u.createRef();
      s(
        /* @__PURE__ */ o.jsx(i, { ref: t, content: "Test", children: /* @__PURE__ */ o.jsx("button", { children: "Button" }) })
      ), await c(() => {
        const n = document.querySelector("ag-tooltip");
        e(n).toBeInTheDocument();
      }), e(t.current).toBeTruthy(), e(typeof t.current?.show).toBe("function"), e(typeof t.current?.hide).toBe("function"), e(typeof t.current?.toggle).toBe("function");
    }), r("should call web component methods when using imperative API", async () => {
      const t = u.createRef();
      s(
        /* @__PURE__ */ o.jsx(i, { ref: t, content: "Test", children: /* @__PURE__ */ o.jsx("button", { children: "Button" }) })
      ), await c(() => {
        const m = document.querySelector("ag-tooltip");
        e(m).toBeInTheDocument();
      });
      const n = document.querySelector("ag-tooltip");
      n.show || (n.show = l.fn()), n.hide || (n.hide = l.fn()), n.toggle || (n.toggle = l.fn());
      const a = l.spyOn(n, "show"), p = l.spyOn(n, "hide"), h = l.spyOn(n, "toggle");
      t.current?.show(), e(a).toHaveBeenCalledTimes(1), t.current?.hide(), e(p).toHaveBeenCalledTimes(1), t.current?.toggle(), e(h).toHaveBeenCalledTimes(1);
    });
  });
});
