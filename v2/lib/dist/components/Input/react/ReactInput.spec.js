import { j as a } from "../../../jsx-runtime-OVHDjVDe.js";
import { r as o, w as n, s as p } from "../../../react.esm-B6WeHI3c.js";
import "react";
import { ReactInput as u } from "./ReactInput.js";
import { v as d, d as c, b as h, a as b, i as s, g as t } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const m = d.spyOn(console, "log").mockImplementation(() => {
});
c("ReactInput Wrapper", () => {
  h(() => {
    m.mockClear();
  }), b(() => {
    document.body.innerHTML = "";
  }), c("Basic Rendering", () => {
    s("should render without errors", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Test Input" })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e).toBeInTheDocument();
      });
    }), s("should render with label", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Username" })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e).toBeInTheDocument(), t(e.hasAttribute("label") || e.label === "Username").toBe(!0);
      });
    }), s("should render with children content", async () => {
      o(
        /* @__PURE__ */ a.jsx(u, { label: "Input", children: /* @__PURE__ */ a.jsx("span", { children: "Additional content" }) })
      ), await n(() => {
        const e = p.getByText("Additional content");
        t(e).toBeInTheDocument();
      });
    });
  }), c("Props Pass-Through", () => {
    s("should pass type prop to web component", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Email", type: "email" })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e).toBeInTheDocument(), t(e.hasAttribute("type") || e.type === "email").toBe(!0);
      });
    }), s("should pass value prop to web component", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Input", value: "test value" })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e).toBeInTheDocument(), t(e.hasAttribute("value") || e.value === "test value").toBe(!0);
      });
    }), s("should pass placeholder prop to web component", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Input", placeholder: "Enter text..." })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.getAttribute("placeholder")).toBe("Enter text...");
      });
    }), s("should pass size prop to web component", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Input", size: "large" })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.getAttribute("size")).toBe("large");
      });
    }), s("should pass boolean props to web component", async () => {
      o(
        /* @__PURE__ */ a.jsx(
          u,
          {
            label: "Input",
            required: !0,
            disabled: !0,
            readonly: !0,
            invalid: !0,
            isRounded: !0,
            isUnderlined: !0
          }
        )
      ), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.hasAttribute("required")).toBe(!0), t(e.hasAttribute("disabled")).toBe(!0), t(e.hasAttribute("readonly")).toBe(!0), t(e.hasAttribute("invalid")).toBe(!0), t(e.hasAttribute("is-rounded")).toBe(!0), t(e.hasAttribute("is-underlined")).toBe(!0);
      });
    }), s("should pass ARIA attributes to web component", async () => {
      o(
        /* @__PURE__ */ a.jsx(
          u,
          {
            label: "Input",
            ariaLabel: "Custom input label",
            labelledBy: "custom-label-id"
          }
        )
      ), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.getAttribute("aria-label")).toBe("Custom input label"), t(e.getAttribute("labelled-by")).toBe("custom-label-id");
      });
    }), s("should pass error and help text props to web component", async () => {
      o(
        /* @__PURE__ */ a.jsx(
          u,
          {
            label: "Input",
            errorMessage: "Field is required",
            helpText: "Enter your username"
          }
        )
      ), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.getAttribute("error-message")).toBe("Field is required"), t(e.getAttribute("help-text")).toBe("Enter your username");
      });
    }), s("should pass textarea-specific props to web component", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Comments", type: "textarea", rows: 8, cols: 60 })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e).toBeInTheDocument(), t(e.hasAttribute("type") || e.type === "textarea").toBe(!0), t(e.hasAttribute("rows") || e.rows === 8).toBe(!0), t(e.hasAttribute("cols") || e.cols === 60).toBe(!0);
      });
    });
  }), c("Event Handling", () => {
    s("should handle input events", async () => {
      const e = d.fn();
      o(/* @__PURE__ */ a.jsx(u, { label: "Input", onInput: e })), await n(() => {
        const i = document.querySelector("ag-input");
        t(i).toBeInTheDocument();
      });
      const r = document.querySelector("ag-input"), l = new Event("input");
      r.dispatchEvent(l), await n(() => {
        t(e).toHaveBeenCalledTimes(1);
      });
    }), s("should handle change events", async () => {
      const e = d.fn();
      o(/* @__PURE__ */ a.jsx(u, { label: "Input", onChange: e })), await n(() => {
        const i = document.querySelector("ag-input");
        t(i).toBeInTheDocument();
      });
      const r = document.querySelector("ag-input"), l = new Event("change");
      r.dispatchEvent(l), await n(() => {
        t(e).toHaveBeenCalledTimes(1);
      });
    }), s("should handle focus events", async () => {
      const e = d.fn();
      o(/* @__PURE__ */ a.jsx(u, { label: "Input", onFocus: e })), await n(() => {
        const i = document.querySelector("ag-input");
        t(i).toBeInTheDocument();
      });
      const r = document.querySelector("ag-input"), l = new Event("focus");
      r.dispatchEvent(l), await n(() => {
        t(e).toHaveBeenCalledTimes(1);
      });
    }), s("should handle blur events", async () => {
      const e = d.fn();
      o(/* @__PURE__ */ a.jsx(u, { label: "Input", onBlur: e })), await n(() => {
        const i = document.querySelector("ag-input");
        t(i).toBeInTheDocument();
      });
      const r = document.querySelector("ag-input"), l = new Event("blur");
      r.dispatchEvent(l), await n(() => {
        t(e).toHaveBeenCalledTimes(1);
      });
    });
  }), c("Label Variants", () => {
    s("should handle hidden label", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Hidden", labelHidden: !0 })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.hasAttribute("label-hidden")).toBe(!0);
      });
    }), s("should handle no label mode", async () => {
      o(/* @__PURE__ */ a.jsx(u, { ariaLabel: "No visible label", noLabel: !0 })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.hasAttribute("no-label")).toBe(!0);
      });
    });
  }), c("Styling Variants", () => {
    s("should handle inline styling", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Inline", isInline: !0 })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.hasAttribute("is-inline")).toBe(!0);
      });
    }), s("should handle addon states", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "With Addons", hasLeftAddon: !0, hasRightAddon: !0 })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.hasAttribute("has-left-addon")).toBe(!0), t(e.hasAttribute("has-right-addon")).toBe(!0);
      });
    }), s("should handle underlined variants", async () => {
      o(/* @__PURE__ */ a.jsx(u, { label: "Underlined", isUnderlined: !0, isUnderlinedWithBackground: !0 })), await n(() => {
        const e = document.querySelector("ag-input");
        t(e.hasAttribute("is-underlined")).toBe(!0), t(e.hasAttribute("is-underlined-with-background")).toBe(!0);
      });
    });
  });
});
