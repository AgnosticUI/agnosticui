import "./_Toggle.js";
import { d as r, b as i, a as b, i as o, g as a, v as c } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
r("AgToggle", () => {
  let e;
  i(() => {
    e = document.createElement("ag-toggle"), e.label = "Test toggle", document.body.appendChild(e);
  }), b(() => {
    e && e.parentNode && e.parentNode.removeChild(e);
  }), r("Component Creation and Basic Structure", () => {
    o("should create and render as semantic button element", async () => {
      e.label = "Enable notifications", await e.updateComplete;
      const t = e.shadowRoot?.querySelector("button");
      a(t).toBeTruthy(), a(t?.tagName).toBe("BUTTON");
    }), o("should render with proper shadow DOM structure", async () => {
      e.label = "Test toggle", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = e.shadowRoot.querySelector(".ag-toggle__track"), l = e.shadowRoot.querySelector(".ag-toggle__handle");
      a(t).toBeTruthy(), a(s).toBeTruthy(), a(l).toBeTruthy(), a(s.contains(l)).toBe(!0);
    }), o("should set default properties correctly", async () => {
      e.label = "Test toggle", await e.updateComplete, a(e.size).toBe("md"), a(e.variant).toBe("default"), a(e.checked).toBe(!1), a(e.disabled).toBe(!1), a(e.readonly).toBe(!1);
    }), o("should apply correct CSS classes based on properties", async () => {
      e.label = "Test toggle", e.size = "lg", e.variant = "success", e.checked = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.classList.contains("ag-toggle")).toBe(!0), a(t.classList.contains("ag-toggle--lg")).toBe(!0), a(t.classList.contains("ag-toggle--success")).toBe(!0);
    }), o("should warn when label is missing", async () => {
      const t = c.spyOn(console, "warn").mockImplementation(() => {
      }), s = document.createElement("ag-toggle");
      document.body.appendChild(s), await s.updateComplete, a(t).toHaveBeenCalledWith(
        a.stringContaining("AgToggle: label property is required for accessibility")
      ), t.mockRestore(), document.body.removeChild(s);
    }), o("should use provided label as aria-label", async () => {
      e.label = "Enable dark mode", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("aria-label")).toBe("Enable dark mode");
    }), o("should support labelledBy for external labeling", async () => {
      e.labelledBy = "external-label", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("aria-labelledby")).toBe("external-label"), a(t.hasAttribute("aria-label")).toBe(!1);
    }), o("should support describedBy for additional description", async () => {
      e.label = "Test toggle", e.describedBy = "toggle-description", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("aria-describedby")).toBe("toggle-description");
    });
  }), r("ARIA Attributes and Accessibility", () => {
    o("should have correct WAI-ARIA Switch pattern implementation", async () => {
      e.label = "Enable notifications", e.checked = !1, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("role")).toBe("switch"), a(t.getAttribute("aria-checked")).toBe("false"), e.checked = !0, await e.updateComplete, a(t.getAttribute("aria-checked")).toBe("true");
    }), o("should provide proper accessible name via aria-label", async () => {
      e.label = "Enable dark mode", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("aria-label")).toBe("Enable dark mode"), a(t.hasAttribute("aria-labelledby")).toBe(!1);
    }), o("should use aria-labelledby when labelledBy is provided", async () => {
      e.labelledBy = "toggle-label-id", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("aria-labelledby")).toBe("toggle-label-id"), a(t.hasAttribute("aria-label")).toBe(!1);
    }), o("should support aria-describedby for additional description", async () => {
      e.label = "Test toggle", e.describedBy = "toggle-description-id", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("aria-describedby")).toBe("toggle-description-id");
    }), o("should have correct tabindex for keyboard navigation", async () => {
      e.label = "Test toggle", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.tabIndex).toBe(0);
    }), o("should be excluded from tab order when disabled", async () => {
      e.label = "Test toggle", e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.hasAttribute("disabled")).toBe(!0);
    }), o("should provide screen reader state indication", async () => {
      e.label = "Test toggle", e.checked = !1, await e.updateComplete;
      const t = e.shadowRoot.querySelector(".visually-hidden");
      a(t).toBeTruthy(), a(t.textContent?.trim()).toBe("Off"), e.checked = !0, await e.updateComplete, a(t.textContent?.trim()).toBe("On");
    }), o("should maintain aria-checked sync with checked property", async () => {
      e.label = "Test toggle", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      e.checked = !0, await e.updateComplete, a(t.getAttribute("aria-checked")).toBe("true"), e.checked = !1, await e.updateComplete, a(t.getAttribute("aria-checked")).toBe("false");
    }), o("should have minimum touch target size for accessibility", async () => {
      e.label = "Test toggle", e.size = "xs", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = window.getComputedStyle(t);
      a(s.minWidth).toBe("44px"), a(s.minHeight).toBe("44px");
    }), o("should support high contrast mode with proper focus indicators", async () => {
      e.label = "Test toggle", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      t.dispatchEvent(new FocusEvent("focus")), a(t.tagName).toBe("BUTTON"), a(t.getAttribute("role")).toBe("switch");
    });
  }), r("State Management and Events", () => {
    o("should toggle checked state when clicked", async () => {
      e.label = "Test toggle", e.checked = !1, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      t.click(), await e.updateComplete, a(e.checked).toBe(!0), a(t.getAttribute("aria-checked")).toBe("true");
    }), o("should dispatch toggle-change event when state changes", async () => {
      e.label = "Event test", e.checked = !1, await e.updateComplete;
      const t = c.fn();
      e.addEventListener("toggle-change", t), e.shadowRoot.querySelector("button").click(), await e.updateComplete, a(t).toHaveBeenCalledOnce(), a(t.mock.calls[0][0]).toBeInstanceOf(CustomEvent);
      const l = t.mock.calls[0][0];
      a(l.detail.checked).toBe(!0), a(l.detail.value).toBe(e.value || ""), a(l.bubbles).toBe(!0);
    }), o("should include form name and value in event detail", async () => {
      e.label = "Form test", e.name = "testToggle", e.value = "yes", e.checked = !1, await e.updateComplete;
      const t = c.fn();
      e.addEventListener("toggle-change", t), e.shadowRoot.querySelector("button").click(), await e.updateComplete;
      const l = t.mock.calls[0][0];
      a(l.detail.name).toBe("testToggle"), a(l.detail.value).toBe("yes");
    }), o("should not change state when disabled", async () => {
      e.label = "Disabled test", e.checked = !1, e.disabled = !0, await e.updateComplete;
      const t = c.fn();
      e.addEventListener("toggle-change", t), e.shadowRoot.querySelector("button").click(), await e.updateComplete, a(e.checked).toBe(!1), a(t).not.toHaveBeenCalled();
    }), o("should not change state when readonly", async () => {
      e.label = "Readonly test", e.checked = !1, e.readonly = !0, await e.updateComplete;
      const t = c.fn();
      e.addEventListener("toggle-change", t), e.shadowRoot.querySelector("button").click(), await e.updateComplete, a(e.checked).toBe(!1), a(t).not.toHaveBeenCalled();
    }), o("should allow programmatic state changes", async () => {
      e.label = "Programmatic test", e.checked = !1, await e.updateComplete, e.checked = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("aria-checked")).toBe("true"), e.checked = !1, await e.updateComplete, a(t.getAttribute("aria-checked")).toBe("false");
    }), o("should maintain checked state through re-renders", async () => {
      e.label = "Persistence test", e.checked = !0, await e.updateComplete, e.size = "lg", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.getAttribute("aria-checked")).toBe("true"), a(e.checked).toBe(!0);
    }), o("should update screen reader text based on state", async () => {
      e.label = "Screen reader test", e.checked = !1, await e.updateComplete;
      const t = e.shadowRoot.querySelector(".visually-hidden");
      a(t.textContent?.trim()).toBe("Off"), e.checked = !0, await e.updateComplete, a(t.textContent?.trim()).toBe("On");
    }), o("should support initial checked state", async () => {
      const t = document.createElement("ag-toggle");
      t.label = "Initially checked", t.checked = !0, document.body.appendChild(t), await t.updateComplete;
      const s = t.shadowRoot.querySelector("button");
      a(s.getAttribute("aria-checked")).toBe("true"), a(t.checked).toBe(!0), document.body.removeChild(t);
    });
  }), r("Keyboard Interactions", () => {
    o("should toggle when Space key is pressed", async () => {
      e.label = "Keyboard test", e.checked = !1, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = new KeyboardEvent("keydown", {
        key: " ",
        bubbles: !0,
        cancelable: !0
      });
      t.dispatchEvent(s), await e.updateComplete, a(e.checked).toBe(!0), a(t.getAttribute("aria-checked")).toBe("true");
    }), o("should toggle when Enter key is pressed", async () => {
      e.label = "Enter test", e.checked = !1, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: !0,
        cancelable: !0
      });
      t.dispatchEvent(s), await e.updateComplete, a(e.checked).toBe(!0), a(t.getAttribute("aria-checked")).toBe("true");
    }), o("should not toggle when other keys are pressed", async () => {
      e.label = "Other keys test", e.checked = !1, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = ["ArrowUp", "ArrowDown", "Tab", "Escape", "a", "1", "Home", "End"];
      for (const l of s) {
        const n = new KeyboardEvent("keydown", {
          key: l,
          bubbles: !0,
          cancelable: !0
        });
        t.dispatchEvent(n), await e.updateComplete, a(e.checked).toBe(!1);
      }
    }), o("should prevent default behavior on Space and Enter keys", async () => {
      e.label = "Prevent default test", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = new KeyboardEvent("keydown", {
        key: " ",
        bubbles: !0,
        cancelable: !0
      }), l = c.spyOn(s, "preventDefault");
      t.dispatchEvent(s), a(l).toHaveBeenCalled();
      const n = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: !0,
        cancelable: !0
      }), d = c.spyOn(n, "preventDefault");
      t.dispatchEvent(n), a(d).toHaveBeenCalled();
    }), o("should not toggle when disabled and keyboard is used", async () => {
      e.label = "Disabled keyboard test", e.checked = !1, e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = new KeyboardEvent("keydown", {
        key: " ",
        bubbles: !0,
        cancelable: !0
      });
      t.dispatchEvent(s), await e.updateComplete, a(e.checked).toBe(!1);
    }), o("should not toggle when readonly and keyboard is used", async () => {
      e.label = "Readonly keyboard test", e.checked = !1, e.readonly = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: !0,
        cancelable: !0
      });
      t.dispatchEvent(s), await e.updateComplete, a(e.checked).toBe(!1);
    }), o("should dispatch events for keyboard activation", async () => {
      e.label = "Keyboard event test", e.checked = !1, await e.updateComplete;
      const t = c.fn();
      e.addEventListener("toggle-change", t);
      const s = e.shadowRoot.querySelector("button"), l = new KeyboardEvent("keydown", {
        key: " ",
        bubbles: !0,
        cancelable: !0
      });
      s.dispatchEvent(l), await e.updateComplete, a(t).toHaveBeenCalledOnce(), a(e.checked).toBe(!0);
    }), o("should be focusable via keyboard navigation", async () => {
      e.label = "Focus test", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.tabIndex).toBe(0), a(t.hasAttribute("disabled")).toBe(!1), t.focus(), a(document.activeElement).toBe(e);
    }), o("should not be focusable when disabled", async () => {
      e.label = "Disabled focus test", e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.hasAttribute("disabled")).toBe(!0);
    });
  }), r("Size Variants and Visual States", () => {
    o("should apply size variant CSS classes correctly", async () => {
      e.label = "Size test";
      const t = ["xs", "sm", "md", "lg", "xl"];
      for (const s of t) {
        e.size = s, await e.updateComplete;
        const l = e.shadowRoot.querySelector("button");
        a(l.classList.contains(`ag-toggle--${s}`)).toBe(!0), a(e.getAttribute("size")).toBe(s);
      }
    }), o("should apply variant CSS classes correctly", async () => {
      e.label = "Variant test";
      const t = ["default", "success", "warning", "danger"];
      for (const s of t) {
        e.variant = s, await e.updateComplete;
        const l = e.shadowRoot.querySelector("button");
        a(l.classList.contains(`ag-toggle--${s}`)).toBe(!0), a(e.getAttribute("variant")).toBe(s);
      }
    }), o("should apply disabled state styling", async () => {
      e.label = "Disabled styling test", e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.hasAttribute("disabled")).toBe(!0), a(e.hasAttribute("disabled")).toBe(!0);
    }), o("should apply checked state styling via attribute", async () => {
      e.label = "Checked styling test", e.checked = !1, await e.updateComplete, a(e.hasAttribute("checked")).toBe(!1), e.checked = !0, await e.updateComplete, a(e.hasAttribute("checked")).toBe(!0);
    }), o("should apply readonly state styling via attribute", async () => {
      e.label = "Readonly styling test", e.readonly = !0, await e.updateComplete, a(e.hasAttribute("readonly")).toBe(!0);
    }), o("should have correct CSS custom property structure", async () => {
      e.label = "CSS properties test", e.size = "lg", e.variant = "success", e.checked = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button"), s = e.shadowRoot.querySelector(".ag-toggle__track"), l = e.shadowRoot.querySelector(".ag-toggle__handle");
      a(t.classList.contains("ag-toggle")).toBe(!0), a(t.classList.contains("ag-toggle--lg")).toBe(!0), a(t.classList.contains("ag-toggle--success")).toBe(!0), a(s.classList.contains("ag-toggle__track")).toBe(!0), a(l.classList.contains("ag-toggle__handle")).toBe(!0);
    }), o("should support combining size and variant classes", async () => {
      e.label = "Combined classes test", e.size = "xl", e.variant = "danger", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.classList.contains("ag-toggle")).toBe(!0), a(t.classList.contains("ag-toggle--xl")).toBe(!0), a(t.classList.contains("ag-toggle--danger")).toBe(!0), a(e.getAttribute("size")).toBe("xl"), a(e.getAttribute("variant")).toBe("danger");
    }), o("should maintain consistent button structure across all variants", async () => {
      e.label = "Structure consistency test";
      const t = ["default", "success", "warning", "danger"];
      for (const s of t) {
        e.variant = s, await e.updateComplete;
        const l = e.shadowRoot.querySelector("button"), n = e.shadowRoot.querySelector(".ag-toggle__track"), d = e.shadowRoot.querySelector(".ag-toggle__handle"), u = e.shadowRoot.querySelector(".visually-hidden");
        a(l).toBeTruthy(), a(n).toBeTruthy(), a(d).toBeTruthy(), a(u).toBeTruthy(), a(n.contains(d)).toBe(!0), a(l.contains(n)).toBe(!0), a(l.contains(u)).toBe(!0);
      }
    }), o("should reflect boolean properties as attributes for CSS styling", async () => {
      e.label = "Attribute reflection test", e.checked = !0, await e.updateComplete, a(e.hasAttribute("checked")).toBe(!0), e.checked = !1, await e.updateComplete, a(e.hasAttribute("checked")).toBe(!1), e.disabled = !0, await e.updateComplete, a(e.hasAttribute("disabled")).toBe(!0), e.disabled = !1, await e.updateComplete, a(e.hasAttribute("disabled")).toBe(!1), e.readonly = !0, await e.updateComplete, a(e.hasAttribute("readonly")).toBe(!0), e.readonly = !1, await e.updateComplete, a(e.hasAttribute("readonly")).toBe(!1);
    }), o("should provide semantic token integration points", async () => {
      e.label = "Semantic tokens test", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      a(t.classList.contains("ag-toggle")).toBe(!0), a(e.shadowRoot.adoptedStyleSheets).toBeDefined(), a(t.classList.contains("ag-toggle")).toBe(!0), a(e.shadowRoot.querySelector(".ag-toggle__track")).toBeTruthy(), a(e.shadowRoot.querySelector(".ag-toggle__handle")).toBeTruthy();
    });
  });
});
