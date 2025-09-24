import { AgIconButton as d } from "./_IconButton.js";
import { d as l, b as r, a as c, i as n, g as o, v as b } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
l("AgIconButton", () => {
  let e;
  r(() => {
    e = document.createElement("ag-icon-button"), document.body.appendChild(e);
  }), c(() => {
    e && e.parentNode && e.parentNode.removeChild(e);
  }), l("Basic Functionality", () => {
    n("should render with semantic button element", async () => {
      e.label = "Test button", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t).toBeTruthy(), o(t.tagName).toBe("BUTTON");
    }), n("should have accessible name via aria-label", async () => {
      e.label = "Close dialog", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.getAttribute("aria-label")).toBe("Close dialog");
    }), n("should warn when label is missing", async () => {
      const t = b.spyOn(console, "warn").mockImplementation(() => {
      });
      e.requestUpdate(), await e.updateComplete, o(t).toHaveBeenCalledWith(
        o.stringContaining("AgIconButton: label property is required for accessibility")
      ), t.mockRestore();
    }), n("should set default properties correctly", async () => {
      e.label = "Test", await e.updateComplete, o(e.size).toBe("md"), o(e.variant).toBe("ghost"), o(e.type).toBe("button"), o(e.disabled).toBe(!1), o(e.pressed).toBe(!1), o(e.loading).toBe(!1);
    });
  }), l("Icon Rendering", () => {
    n("should render unicode icon when provided", async () => {
      e.label = "Close", e.unicode = "×", await e.updateComplete;
      const t = e.shadowRoot.querySelector(".unicode-icon");
      o(t).toBeTruthy(), o(t.textContent).toBe("×"), o(t.getAttribute("aria-hidden")).toBe("true");
    }), n("should render icon identifier with placeholder SVG", async () => {
      e.label = "Menu", e.icon = "menu", await e.updateComplete;
      const t = e.shadowRoot.querySelector('[data-icon="menu"]');
      o(t).toBeTruthy(), o(t.getAttribute("aria-hidden")).toBe("true");
      const a = t.querySelector("svg");
      o(a).toBeTruthy(), o(a.getAttribute("focusable")).toBe("false"), o(a.getAttribute("aria-hidden")).toBe("true");
    }), n("should render slotted icon content", async () => {
      e.label = "Custom icon", e.innerHTML = '<svg slot="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>', await e.updateComplete;
      const t = e.querySelector('svg[slot="icon"]');
      o(t).toBeTruthy();
      const a = e.shadowRoot.querySelector(".icon");
      o(a.getAttribute("aria-hidden")).toBe("true");
    }), n("should prioritize slotted content over unicode and icon", async () => {
      e.label = "Test", e.unicode = "×", e.icon = "menu", e.innerHTML = '<span slot="icon">Custom</span>', await e.updateComplete;
      const t = e.querySelector('[slot="icon"]');
      o(t).toBeTruthy(), o(t.textContent).toBe("Custom");
      const a = e.shadowRoot.querySelector(".unicode-icon"), s = e.shadowRoot.querySelector("[data-icon]");
      o(a).toBeFalsy(), o(s).toBeFalsy();
    }), n("should prioritize unicode over icon identifier", async () => {
      e.label = "Test", e.unicode = "☰", e.icon = "menu", await e.updateComplete;
      const t = e.shadowRoot.querySelector(".unicode-icon");
      o(t).toBeTruthy(), o(t.textContent).toBe("☰");
      const a = e.shadowRoot.querySelector("[data-icon]");
      o(a).toBeFalsy();
    });
  }), l("Size Variants", () => {
    ["xs", "sm", "md", "lg", "xl"].forEach((a) => {
      n(`should apply size="${a}" attribute and styling`, async () => {
        e.label = "Test", e.size = a, await e.updateComplete, o(e.getAttribute("size")).toBe(a), o(e.size).toBe(a);
      });
    }), n("should have minimum touch target size for accessibility", async () => {
      e.label = "Test", e.size = "xs", await e.updateComplete;
      const a = e.shadowRoot.querySelector("button"), s = getComputedStyle(a), i = parseInt(s.minWidth), u = parseInt(s.minHeight);
      o(i).toBeGreaterThanOrEqual(44), o(u).toBeGreaterThanOrEqual(44);
    });
  }), l("Visual Variants", () => {
    ["primary", "secondary", "ghost", "danger"].forEach((a) => {
      n(`should apply variant="${a}" attribute`, async () => {
        e.label = "Test", e.variant = a, await e.updateComplete, o(e.getAttribute("variant")).toBe(a), o(e.variant).toBe(a);
      });
    });
  }), l("Button States", () => {
    n("should handle disabled state correctly", async () => {
      e.label = "Test", e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.disabled).toBe(!0), o(e.hasAttribute("disabled")).toBe(!0);
    }), n("should handle pressed state for toggle buttons", async () => {
      e.label = "Toggle", e.pressed = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.getAttribute("aria-pressed")).toBe("true"), o(e.hasAttribute("pressed")).toBe(!0);
    }), n("should handle loading state", async () => {
      e.label = "Save", e.loading = !0, await e.updateComplete, o(e.hasAttribute("loading")).toBe(!0), o(e.loading).toBe(!0);
    }), n("should render loading indicator when loading", async () => {
      e.label = "Save", e.loading = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector('svg[style*="animation"]');
      o(t).toBeTruthy(), o(t.getAttribute("aria-hidden")).toBe("true");
    });
  }), l("Keyboard Interaction", () => {
    n("should activate on Space key", async () => {
      e.label = "Test", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let a = !1, s = null;
      e.addEventListener("icon-button-activate", (u) => {
        a = !0, s = u.detail;
      });
      const i = new KeyboardEvent("keydown", { key: " " });
      t.dispatchEvent(i), o(a).toBe(!0), o(s.label).toBe("Test"), o(s.originalEvent.key).toBe(" ");
    }), n("should activate on Enter key", async () => {
      e.label = "Test", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let a = !1, s = null;
      e.addEventListener("icon-button-activate", (u) => {
        a = !0, s = u.detail;
      });
      const i = new KeyboardEvent("keydown", { key: "Enter" });
      t.dispatchEvent(i), o(a).toBe(!0), o(s.label).toBe("Test"), o(s.originalEvent.key).toBe("Enter");
    }), n("should not activate when disabled", async () => {
      e.label = "Test", e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let a = !1;
      e.addEventListener("icon-button-activate", () => {
        a = !0;
      });
      const s = new KeyboardEvent("keydown", { key: " " });
      t.dispatchEvent(s), o(a).toBe(!1);
    }), n("should not activate when loading", async () => {
      e.label = "Test", e.loading = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let a = !1;
      e.addEventListener("icon-button-activate", () => {
        a = !0;
      });
      const s = new KeyboardEvent("keydown", { key: "Enter" });
      t.dispatchEvent(s), o(a).toBe(!1);
    });
  }), l("Click Events", () => {
    n("should dispatch custom click event with details", async () => {
      e.label = "Test button", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let a = null;
      e.addEventListener("icon-button-click", (s) => {
        a = s.detail;
      }), t.click(), o(a.label).toBe("Test button"), o(a.pressed).toBe(!1), o(a.originalEvent).toBeInstanceOf(MouseEvent);
    }), n("should include pressed state in event details", async () => {
      e.label = "Toggle", e.pressed = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let a = null;
      e.addEventListener("icon-button-click", (s) => {
        a = s.detail;
      }), t.click(), o(a.pressed).toBe(!0);
    }), n("should prevent click when disabled", async () => {
      e.label = "Test", e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let a = !1;
      e.addEventListener("icon-button-click", () => {
        a = !0;
      }), t.click(), o(a).toBe(!1);
    }), n("should prevent click when loading", async () => {
      e.label = "Test", e.loading = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let a = !1;
      e.addEventListener("icon-button-click", () => {
        a = !0;
      }), t.click(), o(a).toBe(!1);
    });
  }), l("Accessibility", () => {
    n("should have proper ARIA attributes", async () => {
      e.label = "Menu button", e.pressed = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.getAttribute("aria-label")).toBe("Menu button"), o(t.getAttribute("aria-pressed")).toBe("true");
    }), n("should hide icon from screen readers", async () => {
      e.label = "Test", e.unicode = "×", await e.updateComplete;
      const t = e.shadowRoot.querySelector(".icon");
      o(t.getAttribute("aria-hidden")).toBe("true");
    }), n('should set focusable="false" on SVG icons', async () => {
      e.label = "Test", e.icon = "menu", await e.updateComplete;
      const t = e.shadowRoot.querySelector("svg");
      o(t.getAttribute("focusable")).toBe("false");
    }), n("should not be focusable when disabled", async () => {
      e.label = "Test", e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.disabled).toBe(!0);
    });
  }), l("Button Types", () => {
    n("should set button type correctly", async () => {
      e.label = "Submit", e.type = "submit", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.type).toBe("submit");
    }), n('should default to type="button"', async () => {
      e.label = "Test", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.type).toBe("button");
    });
  }), l("Custom Loading Slot", () => {
    n("should render custom loading content", async () => {
      e.label = "Save", e.loading = !0, e.innerHTML = '<span slot="loading">Custom loading...</span>', await e.updateComplete;
      const t = e.querySelector('[slot="loading"]');
      o(t).toBeTruthy(), o(t.textContent).toBe("Custom loading...");
    });
  }), l("Property Updates", () => {
    n("should react to label changes", async () => {
      e.label = "Initial", await e.updateComplete, e.label = "Updated", await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.getAttribute("aria-label")).toBe("Updated");
    }), n("should react to disabled state changes", async () => {
      e.label = "Test", await e.updateComplete, e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.disabled).toBe(!0);
    }), n("should react to pressed state changes", async () => {
      e.label = "Toggle", await e.updateComplete, e.pressed = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(t.getAttribute("aria-pressed")).toBe("true");
    });
  }), l("Semantic Token Integration", () => {
    n("should use semantic tokens for styling", async () => {
      e.label = "Test", await e.updateComplete;
      const t = d.styles.toString(), a = t.includes("--ag-") || t.includes("var(--ag-") || t.includes("var(--icon-button-");
      o(a).toBeTruthy();
    });
  });
});
