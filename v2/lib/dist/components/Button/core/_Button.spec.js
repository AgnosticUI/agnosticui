import "./_Button.js";
import { d as n, b as r, a as c, i as a, g as o, v as u } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
n("AgButton", () => {
  let t;
  r(() => {
    t = document.createElement("ag-button"), t.textContent = "Test Button", document.body.appendChild(t);
  }), c(() => {
    t && t.parentNode && t.parentNode.removeChild(t);
  }), n("Basic Functionality", () => {
    a("should render with default properties", async () => {
      o(t).toBeDefined(), o(t.tagName.toLowerCase()).toBe("ag-button"), await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e).toBeDefined(), o(t.textContent?.trim()).toBe("Test Button");
    }), a("should have button role implicitly", async () => {
      await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("role")).toBeNull(), o(e?.tagName.toLowerCase()).toBe("button");
    }), a('should have default type="button"', async () => {
      await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("type")).toBe("button");
    });
  }), n("Button Types", () => {
    a('should support type="submit"', async () => {
      t.type = "submit", await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("type")).to.equal("submit");
    }), a('should support type="reset"', async () => {
      t.type = "reset", await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("type")).to.equal("reset");
    });
  }), n("Keyboard Interaction", () => {
    a("should activate on Space key", async () => {
      const e = u.fn();
      t.addEventListener("click", e);
      const s = t.shadowRoot?.querySelector("button"), l = new KeyboardEvent("keydown", {
        key: " ",
        code: "Space",
        bubbles: !0
      });
      s?.dispatchEvent(l), o(s?.tabIndex).to.equal(0);
    }), a("should activate on Enter key", async () => {
      const e = u.fn();
      t.addEventListener("click", e);
      const s = t.shadowRoot?.querySelector("button"), l = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        bubbles: !0
      });
      s?.dispatchEvent(l), o(s?.tabIndex).to.equal(0);
    }), a("should be focusable with Tab", async () => {
      const e = t.shadowRoot?.querySelector("button");
      o(e?.tabIndex).to.equal(0), e?.focus(), o(document.activeElement).to.equal(t);
    });
  }), n("Visual States", () => {
    a("should handle disabled state", async () => {
      t.disabled = !0, await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.disabled).to.be.true, o(e?.getAttribute("aria-disabled")).to.equal("true");
    }), a("should handle loading state", async () => {
      t.loading = !0, await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.disabled).to.be.true, o(e?.getAttribute("aria-busy")).to.equal("true");
    }), a("should not be disabled when loading is false", async () => {
      t.loading = !1, await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.disabled).to.be.false, o(e?.hasAttribute("aria-busy")).to.be.false;
    });
  }), n("Toggle Functionality", () => {
    r(async () => {
      t.toggle = !0, await t.updateComplete;
    }), a("should support toggle mode", async () => {
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("aria-pressed")).to.equal("false");
    }), a("should update aria-pressed when pressed changes", async () => {
      t.pressed = !0, await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("aria-pressed")).to.equal("true");
    }), a("should toggle pressed state on click", async () => {
      const e = t.shadowRoot?.querySelector("button");
      o(t.pressed).to.be.false, e?.click(), await t.updateComplete, o(t.pressed).to.be.true, o(e?.getAttribute("aria-pressed")).to.equal("true");
    }), a("should dispatch toggle event", async () => {
      const e = u.fn();
      t.addEventListener("toggle", e), t.shadowRoot?.querySelector("button")?.click(), await t.updateComplete, o(e).toHaveBeenCalledOnce(), o(e.mock.calls[0][0].detail).toEqual({ pressed: !0 });
    });
  }), n("ARIA Support", () => {
    a("should support aria-label", async () => {
      t.ariaLabel = "Custom Label", await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("aria-label")).to.equal("Custom Label");
    }), a("should support aria-describedby", async () => {
      t.ariaDescribedby = "description-id", await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("aria-describedby")).to.equal("description-id");
    }), a("should have accessible name from text content", async () => {
      const s = t.shadowRoot?.querySelector("button")?.querySelector("slot");
      o(s).to.exist, o(t.textContent?.trim()).to.equal("Test Button");
    });
  }), n("Component Variants", () => {
    a("should support variant attribute", async () => {
      t.variant = "primary", await t.updateComplete, o(t.variant).to.equal("primary"), o(t.getAttribute("variant")).to.equal("primary");
    }), a("should support size attribute", async () => {
      t.size = "lg", await t.updateComplete, o(t.size).to.equal("lg"), o(t.getAttribute("size")).to.equal("lg");
    }), a("should default to medium size", async () => {
      o(t.size).to.equal("md");
    });
  }), n("Event Handling", () => {
    a("should dispatch click events", async () => {
      const e = u.fn();
      t.addEventListener("click", e), t.shadowRoot?.querySelector("button")?.click(), o(e).toHaveBeenCalledOnce();
    }), a("should dispatch focus events", async () => {
      const e = u.fn();
      t.addEventListener("focus", e), t.shadowRoot?.querySelector("button")?.focus(), o(e).toHaveBeenCalledOnce();
    }), a("should dispatch blur events", async () => {
      const e = u.fn();
      t.addEventListener("blur", e);
      const s = t.shadowRoot?.querySelector("button");
      s?.focus(), s?.blur(), o(e).toHaveBeenCalledOnce();
    }), a("should not dispatch events when disabled", async () => {
      t.disabled = !0, await t.updateComplete;
      const e = u.fn();
      t.addEventListener("click", e), t.shadowRoot?.querySelector("button")?.click(), o(e).not.toHaveBeenCalled();
    });
  }), n("Form Integration", () => {
    a('should work with forms when type="submit"', async () => {
      t.type = "submit", await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("type")).to.equal("submit"), o(e?.type).to.equal("submit");
    }), a('should work with forms when type="reset"', async () => {
      t.type = "reset", await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("type")).to.equal("reset"), o(e?.type).to.equal("reset");
    });
  }), n("Accessibility Compliance", () => {
    a("should have proper semantic structure", async () => {
      const e = t.shadowRoot?.querySelector("button");
      o(e?.tagName.toLowerCase()).to.equal("button"), o(e?.getAttribute("role")).to.be.null, o(e?.tabIndex).to.equal(0);
    }), a("should communicate disabled state to assistive technologies", async () => {
      t.disabled = !0, await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.disabled).to.be.true, o(e?.getAttribute("aria-disabled")).to.equal("true");
    }), a("should communicate loading state to assistive technologies", async () => {
      t.loading = !0, await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("aria-busy")).to.equal("true");
    }), a("should communicate toggle state to assistive technologies", async () => {
      t.toggle = !0, t.pressed = !0, await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.getAttribute("aria-pressed")).to.equal("true");
    }), a("should have focus indicators", async () => {
      t.shadowRoot?.querySelector("button")?.focus(), o(document.activeElement).to.equal(t);
    });
  }), n("Performance", () => {
    a("should update efficiently", async () => {
      const e = u.spyOn(t, "requestUpdate");
      t.variant = "secondary", t.size = "lg", t.disabled = !0, await t.updateComplete, o(e).toHaveBeenCalled();
    }), a("should cleanup event listeners", async () => {
      const e = t.shadowRoot?.querySelector("button");
      o(e).to.exist, t.remove();
    });
  }), n("Focus Management", () => {
    a("should have focus() method that delegates to internal button", async () => {
      await t.updateComplete, o(typeof t.focus).toBe("function");
      const e = t.shadowRoot?.querySelector("button"), s = u.spyOn(e, "focus");
      t.focus(), o(s).toHaveBeenCalledOnce();
    }), a("should have blur() method that delegates to internal button", async () => {
      await t.updateComplete, o(typeof t.blur).toBe("function");
      const e = t.shadowRoot?.querySelector("button"), s = u.spyOn(e, "blur");
      t.blur(), o(s).toHaveBeenCalledOnce();
    }), a("should handle focus() gracefully when shadowRoot is not available", () => {
      const e = document.createElement("ag-button");
      o(() => e.focus()).not.toThrow();
    }), a("should handle blur() gracefully when shadowRoot is not available", () => {
      const e = document.createElement("ag-button");
      o(() => e.blur()).not.toThrow();
    }), a("should be focusable for keyboard navigation", async () => {
      await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e).toBeDefined(), o(e?.tabIndex).not.toBe(-1);
      const s = u.spyOn(e, "focus");
      t.focus(), o(s).toHaveBeenCalledOnce();
    }), a("should not be focusable when disabled", async () => {
      t.disabled = !0, await t.updateComplete;
      const e = t.shadowRoot?.querySelector("button");
      o(e?.disabled).toBe(!0), t.focus(), o(document.activeElement).not.toBe(e);
    });
  });
});
