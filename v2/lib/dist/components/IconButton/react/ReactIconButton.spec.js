import { j as o } from "../../../jsx-runtime-OVHDjVDe.js";
import { r as c, w as l, f as u } from "../../../react.esm-B6WeHI3c.js";
import "react";
import { ReactIconButton as n } from "./ReactIconButton.js";
import { v as b, d as i, b as m, a as p, i as a, g as t } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const d = b.spyOn(console, "log").mockImplementation(() => {
});
i("ReactIconButton", () => {
  m(() => {
    d.mockClear();
  }), p(() => {
    document.body.innerHTML = "";
  }), i("Basic Rendering", () => {
    a("should render without errors", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Close dialog" })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e).toBeInTheDocument();
      });
    }), a("should pass label prop correctly", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Menu button" })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e.label).toBe("Menu button");
      });
    }), a("should pass icon props correctly", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Menu", icon: "hamburger", unicode: "☰" })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e.icon).toBe("hamburger"), t(e.unicode).toBe("☰");
      });
    });
  }), i("Props Pass-Through", () => {
    a("should pass size prop to web component", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Test", size: "lg" })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e.size).toBe("lg");
      });
    }), a("should pass variant prop to web component", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Test", variant: "primary" })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e.variant).toBe("primary");
      });
    }), a("should pass disabled prop to web component", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Test", disabled: !0 })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e.disabled).toBe(!0);
      });
    }), a("should pass pressed prop to web component", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Toggle", pressed: !0 })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e.pressed).toBe(!0);
      });
    }), a("should pass type prop to web component", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Submit", type: "submit" })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e.type).toBe("submit");
      });
    });
  }), i("ARIA Properties", () => {
    a("should use ariaLabel over label when provided", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Original", ariaLabel: "Accessible label" })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e.label).toBe("Accessible label");
      });
    }), a("should pass aria-describedby correctly", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Help", ariaDescribedby: "help-text" })), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e).toHaveAttribute("aria-describedby", "help-text");
      });
    });
  }), i("Event Handling", () => {
    a("should call onClick when web component is clicked", async () => {
      const e = b.fn();
      c(/* @__PURE__ */ o.jsx(n, { label: "Click me", onClick: e })), await l(() => {
        const r = document.querySelector("ag-icon-button");
        t(r).toBeInTheDocument();
      });
      const s = document.querySelector("ag-icon-button");
      u(s, new CustomEvent("icon-button-click", {
        detail: { label: "Click me", pressed: !1, originalEvent: new MouseEvent("click") }
      })), t(e).toHaveBeenCalledTimes(1);
    }), a("should call onActivate for keyboard events", async () => {
      const e = b.fn();
      c(/* @__PURE__ */ o.jsx(n, { label: "Test", onActivate: e })), await l(() => {
        const r = document.querySelector("ag-icon-button");
        t(r).toBeInTheDocument();
      });
      const s = document.querySelector("ag-icon-button");
      u(s, new CustomEvent("icon-button-activate", {
        detail: {
          label: "Test",
          pressed: !1,
          originalEvent: new KeyboardEvent("keydown", { key: " " })
        }
      })), t(e).toHaveBeenCalledTimes(1), t(e).toHaveBeenCalledWith(
        t.objectContaining({
          label: "Test",
          pressed: !1,
          originalEvent: t.any(KeyboardEvent)
        })
      );
    });
  }), i("Event Logging", () => {
    a("should log click events with details", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Test button" })), await l(() => {
        const s = document.querySelector("ag-icon-button");
        t(s).toBeInTheDocument();
      });
      const e = document.querySelector("ag-icon-button");
      u(e, new CustomEvent("icon-button-click", {
        detail: { label: "Test button", pressed: !1, originalEvent: new MouseEvent("click") }
      })), t(d).toHaveBeenCalledWith(
        "ReactIconButton click:",
        t.objectContaining({
          label: "Test button",
          pressed: !1,
          timestamp: t.any(String),
          event: "icon-button-click"
        })
      );
    }), a("should log keyboard activation events", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Keyboard test" })), await l(() => {
        const s = document.querySelector("ag-icon-button");
        t(s).toBeInTheDocument();
      });
      const e = document.querySelector("ag-icon-button");
      u(e, new CustomEvent("icon-button-activate", {
        detail: {
          label: "Keyboard test",
          pressed: !1,
          originalEvent: new KeyboardEvent("keydown", { key: " " })
        }
      })), t(d).toHaveBeenCalledWith(
        "ReactIconButton keyboard activate:",
        t.objectContaining({
          label: "Keyboard test",
          key: " ",
          timestamp: t.any(String),
          detail: t.any(Object)
        })
      );
    }), a("should prefer ariaLabel in logging", async () => {
      c(/* @__PURE__ */ o.jsx(n, { label: "Original", ariaLabel: "Accessible label" })), await l(() => {
        const s = document.querySelector("ag-icon-button");
        t(s).toBeInTheDocument();
      });
      const e = document.querySelector("ag-icon-button");
      u(e, new CustomEvent("icon-button-click", {
        detail: { label: "Accessible label", pressed: !1, originalEvent: new MouseEvent("click") }
      })), t(d).toHaveBeenCalledWith(
        "ReactIconButton click:",
        t.objectContaining({
          label: "Accessible label"
        })
      );
    });
  }), i("Children Content", () => {
    a("should render slotted icon content", async () => {
      c(
        /* @__PURE__ */ o.jsx(n, { label: "Custom icon", children: /* @__PURE__ */ o.jsx("svg", { "data-testid": "custom-icon", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "10" }) }) })
      ), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e).toBeInTheDocument(), t(e.querySelector("svg")).toBeInTheDocument();
      });
    }), a("should render custom loading content", async () => {
      c(
        /* @__PURE__ */ o.jsx(n, { label: "Save", loading: !0, children: /* @__PURE__ */ o.jsx("span", { slot: "loading", "data-testid": "custom-loading", children: "Saving..." }) })
      ), await l(() => {
        const e = document.querySelector("ag-icon-button");
        t(e).toBeInTheDocument(), t(e.loading).toBe(!0), t(e.querySelector('[data-testid="custom-loading"]')).toBeInTheDocument();
      });
    });
  }), i("TypeScript Props Validation", () => {
    a("should require label prop at compile time", () => {
      t((/* @__PURE__ */ o.jsx(n, { label: "Valid" })).props.label).toBe("Valid");
    }), a("should accept all valid size values", () => {
      ["xs", "sm", "md", "lg", "xl"].forEach((s) => {
        t((/* @__PURE__ */ o.jsx(n, { label: "Test", size: s })).props.size).toBe(s);
      });
    }), a("should accept all valid variant values", () => {
      ["primary", "secondary", "ghost", "danger"].forEach((s) => {
        t((/* @__PURE__ */ o.jsx(n, { label: "Test", variant: s })).props.variant).toBe(s);
      });
    });
  });
});
