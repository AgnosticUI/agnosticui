import { AgnosticDialog as p } from "./_dialog.js";
import { j as m } from "../../../index-CaXWYOAP.js";
import { g as t, d, b as h, a as w, i as a, v as r } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
t.extend(m.toHaveNoViolations);
d("AgnosticDialog", () => {
  let e;
  h(() => {
    e = new p(), document.body.appendChild(e);
  }), w(() => {
    document.body.removeChild(e);
  }), d("Basic Rendering", () => {
    a("should render with basic properties", async () => {
      t(e).toBeDefined(), t(e.tagName.toLowerCase()).toBe("agnostic-dialog"), t(e.open).toBe(!1), t(e.heading).toBe(""), t(e.closeOnEscape).toBe(!0), t(e.closeOnBackdrop).toBe(!0);
    }), a('should have role="dialog"', async () => {
      await e.updateComplete;
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      t(o).toBeTruthy(), t(o?.getAttribute("role")).toBe("dialog");
    }), a('should have aria-modal="true"', async () => {
      await e.updateComplete;
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      t(o?.getAttribute("aria-modal")).toBe("true");
    }), a("should be hidden by default", async () => {
      await e.updateComplete, t(e.open).toBe(!1), t(e.hasAttribute("open")).toBe(!1), t(e.open).toBe(!1), t(e.hasAttribute("open")).toBe(!1);
    });
  }), d("ARIA Attributes", () => {
    a("should have aria-labelledby when heading prop is provided", async () => {
      e.heading = "Test Dialog Title", await e.updateComplete;
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      t(o?.getAttribute("aria-labelledby")).toBe("dialog-heading");
      const n = e.shadowRoot?.querySelector("#dialog-heading");
      t(n).toBeTruthy(), t(n?.textContent).toBe("Test Dialog Title");
    }), a("should have aria-label when heading prop is not provided", async () => {
      t(e.heading).toBe(""), await e.updateComplete;
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      t(o?.getAttribute("aria-label")).toBe("Dialog"), t(o?.hasAttribute("aria-labelledby")).toBe(!1);
    }), a("should have aria-describedby when description is provided", async () => {
      e.description = "This dialog provides important information", await e.updateComplete;
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      t(o?.getAttribute("aria-describedby")).toBe("dialog-description");
      const n = e.shadowRoot?.querySelector("#dialog-description");
      t(n).toBeTruthy(), t(n?.textContent).toBe("This dialog provides important information");
    }), a("should update ARIA attributes when props change", async () => {
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      await e.updateComplete, t(o?.getAttribute("aria-label")).toBe("Dialog"), t(o?.hasAttribute("aria-labelledby")).toBe(!1), e.heading = "Dynamic Heading", await e.updateComplete, t(o?.hasAttribute("aria-label")).toBe(!1), t(o?.getAttribute("aria-labelledby")).toBe("dialog-heading"), e.heading = "", await e.updateComplete, t(o?.getAttribute("aria-label")).toBe("Dialog"), t(o?.hasAttribute("aria-labelledby")).toBe(!1), e.description = "New description", await e.updateComplete, t(o?.getAttribute("aria-describedby")).toBe("dialog-description"), e.description = "", await e.updateComplete, t(o?.hasAttribute("aria-describedby")).toBe(!1);
    });
  }), d("Visibility and State Management", () => {
    a("should show when open prop is true", async () => {
      e.open = !0, await e.updateComplete, t(e.hasAttribute("open")).toBe(!0), t(e.open).toBe(!0);
    }), a("should hide when open prop is false", async () => {
      e.open = !0, await e.updateComplete, t(e.open).toBe(!0), e.open = !1, await e.updateComplete, t(e.hasAttribute("open")).toBe(!1), t(e.open).toBe(!1);
    }), a("should dispatch dialog-open event when opened", async () => {
      const o = r.fn();
      e.addEventListener("dialog-open", o), e.open = !0, await e.updateComplete, t(o).toHaveBeenCalledTimes(1);
    }), a("should dispatch dialog-close event when closed", async () => {
      const o = r.fn();
      e.addEventListener("dialog-close", o), e.open = !0, await e.updateComplete, e.open = !1, await e.updateComplete, t(o).toHaveBeenCalledTimes(1);
    });
  }), d("Keyboard Interaction", () => {
    a("should close on Escape key when closeOnEscape is true", async () => {
      e.open = !0, e.closeOnEscape = !0, await e.updateComplete, t(e.open).toBe(!0);
      const o = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(o), await e.updateComplete, t(e.open).toBe(!1);
    }), a("should not close on Escape key when closeOnEscape is false", async () => {
      e.open = !0, e.closeOnEscape = !1, await e.updateComplete, t(e.open).toBe(!0);
      const o = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(o), await e.updateComplete, t(e.open).toBe(!0);
    }), a("should dispatch dialog-cancel event on Escape key", async () => {
      const o = r.fn();
      e.addEventListener("dialog-cancel", o), e.open = !0, e.closeOnEscape = !0, await e.updateComplete;
      const n = new KeyboardEvent("keydown", { key: "Escape" });
      document.dispatchEvent(n), await e.updateComplete, t(o).toHaveBeenCalledTimes(1);
    }), a("should trap Tab focus within dialog", async () => {
    }), a("should trap Shift+Tab focus within dialog", async () => {
    });
  }), d("Focus Management", () => {
    a("should move focus to first focusable element when opened", async () => {
      const o = document.createElement("button");
      o.textContent = "Close", e.appendChild(o);
      const n = document.createElement("button");
      document.body.appendChild(n), n.focus(), t(document.activeElement).toBe(n), e.open = !0, await e.updateComplete, await new Promise((l) => setTimeout(l, 10)), t(document.activeElement).toBe(o), document.body.removeChild(n);
    }), a("should return focus to trigger element when closed", async () => {
      const o = document.createElement("button");
      o.textContent = "Open Dialog", document.body.appendChild(o), o.focus(), t(document.activeElement).toBe(o), e.open = !0, await e.updateComplete, await new Promise((n) => setTimeout(n, 10)), e.open = !1, await e.updateComplete, t(document.activeElement).toBe(o), document.body.removeChild(o);
    }), a("should handle focus when no focusable elements exist", async () => {
      e.open = !0, await e.updateComplete, await new Promise((n) => setTimeout(n, 10));
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      t(o?.getAttribute("tabindex")).toBe("-1"), t(document.activeElement).toBe(e), t(e.shadowRoot?.activeElement).toBe(o);
    }), a("should maintain focus within dialog boundaries", async () => {
      const o = document.createElement("button");
      o.textContent = "Button 1";
      const n = document.createElement("button");
      n.textContent = "Button 2", e.appendChild(o), e.appendChild(n), e.open = !0, await e.updateComplete, await new Promise((i) => setTimeout(i, 10)), t(document.activeElement).toBe(o);
      const l = document.activeElement, s = e.shadowRoot?.querySelector(".dialog-container");
      t(s?.contains(l) || e.contains(l)).toBe(!0);
    });
  }), d("Backdrop Interaction", () => {
    a("should close on backdrop click when closeOnBackdrop is true", async () => {
      e.open = !0, e.closeOnBackdrop = !0, await e.updateComplete, t(e.open).toBe(!0);
      const o = e.shadowRoot?.querySelector(".dialog-backdrop");
      t(o).toBeTruthy(), o?.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await e.updateComplete, t(e.open).toBe(!1);
    }), a("should not close on backdrop click when closeOnBackdrop is false", async () => {
      e.open = !0, e.closeOnBackdrop = !1, await e.updateComplete, t(e.open).toBe(!0);
      const o = e.shadowRoot?.querySelector(".dialog-backdrop");
      t(o).toBeTruthy(), o?.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await e.updateComplete, t(e.open).toBe(!0);
    }), a("should not close on content area click", async () => {
      e.open = !0, e.closeOnBackdrop = !0, await e.updateComplete, t(e.open).toBe(!0);
      const o = e.shadowRoot?.querySelector(".dialog-container");
      t(o).toBeTruthy(), o?.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await e.updateComplete, t(e.open).toBe(!0);
    }), a("should dispatch dialog-cancel event on backdrop click", async () => {
      const o = r.fn();
      e.addEventListener("dialog-cancel", o), e.open = !0, e.closeOnBackdrop = !0, await e.updateComplete, e.shadowRoot?.querySelector(".dialog-backdrop")?.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await e.updateComplete, t(o).toHaveBeenCalledTimes(1);
    });
  }), d("Content and Slots", () => {
    a("should render default slot content", async () => {
      const o = document.createElement("p");
      o.textContent = "Dialog content goes here", e.appendChild(o), await e.updateComplete;
      const n = e.shadowRoot?.querySelector("slot:not([name])");
      t(n).toBeTruthy();
      const l = n.assignedElements();
      t(l.length).toBe(1), t(l[0]).toBe(o), t(l[0].textContent).toBe("Dialog content goes here");
    }), a("should render header slot content", async () => {
      const o = document.createElement("h1");
      o.setAttribute("slot", "header"), o.textContent = "Custom Header", e.appendChild(o), await e.updateComplete;
      const n = e.shadowRoot?.querySelector('slot[name="header"]');
      t(n).toBeTruthy();
      const l = n.assignedElements();
      t(l.length).toBe(1), t(l[0]).toBe(o), t(l[0].textContent).toBe("Custom Header");
    }), a("should render footer slot content", async () => {
      const o = document.createElement("div");
      o.setAttribute("slot", "footer");
      const n = document.createElement("button");
      n.textContent = "Cancel";
      const l = document.createElement("button");
      l.textContent = "OK", o.appendChild(n), o.appendChild(l), e.appendChild(o), await e.updateComplete;
      const s = e.shadowRoot?.querySelector('slot[name="footer"]');
      t(s).toBeTruthy();
      const i = s.assignedElements();
      t(i.length).toBe(1), t(i[0]).toBe(o), t(i[0].children.length).toBe(2);
    }), a("should update content when slots change", async () => {
      const o = document.createElement("p");
      o.textContent = "Initial content", e.appendChild(o), await e.updateComplete;
      const n = e.shadowRoot?.querySelector("slot:not([name])");
      let l = n.assignedElements();
      t(l.length).toBe(1), t(l[0].textContent).toBe("Initial content");
      const s = document.createElement("span");
      s.textContent = "New content", e.appendChild(s), await e.updateComplete, l = n.assignedElements(), t(l.length).toBe(2), t(l[1].textContent).toBe("New content"), e.removeChild(o), await e.updateComplete, l = n.assignedElements(), t(l.length).toBe(1), t(l[0].textContent).toBe("New content");
    });
  }), d("Close Button", () => {
    a("should render close button when showCloseButton is true", async () => {
      e.showCloseButton = !0, await e.updateComplete;
      const o = e.shadowRoot?.querySelector(".dialog-close-button");
      t(o).toBeTruthy(), t(o?.tagName.toLowerCase()).toBe("button"), t(o?.textContent?.trim()).toBe("×");
    }), a("should not render close button when showCloseButton is false", async () => {
      e.showCloseButton = !1, await e.updateComplete;
      const o = e.shadowRoot?.querySelector(".dialog-close-button");
      t(o).toBeNull();
    }), a("should close dialog when close button is clicked", async () => {
      e.open = !0, e.showCloseButton = !0, await e.updateComplete, t(e.open).toBe(!0);
      const o = e.shadowRoot?.querySelector(".dialog-close-button");
      t(o).toBeTruthy(), o.click(), await e.updateComplete, t(e.open).toBe(!1);
    }), a("should have proper ARIA label for close button", async () => {
      e.showCloseButton = !0, await e.updateComplete;
      const o = e.shadowRoot?.querySelector(".dialog-close-button");
      t(o?.getAttribute("aria-label")).toBe("Close dialog"), t(o?.getAttribute("type")).toBe("button");
    });
  }), d("CSS Classes and Styling", () => {
    a("should apply base CSS classes", async () => {
      await e.updateComplete;
      const o = e.shadowRoot?.querySelector(".dialog-backdrop"), n = e.shadowRoot?.querySelector(".dialog-container"), l = e.shadowRoot?.querySelector(".dialog-header"), s = e.shadowRoot?.querySelector(".dialog-content"), i = e.shadowRoot?.querySelector(".dialog-footer");
      t(o).toBeTruthy(), t(n).toBeTruthy(), t(l).toBeTruthy(), t(s).toBeTruthy(), t(i).toBeTruthy(), t(o?.classList.contains("dialog-backdrop")).toBe(!0), t(n?.classList.contains("dialog-container")).toBe(!0), t(l?.classList.contains("dialog-header")).toBe(!0), t(s?.classList.contains("dialog-content")).toBe(!0), t(i?.classList.contains("dialog-footer")).toBe(!0);
    }), a("should apply open state classes when visible", async () => {
      t(e.open).toBe(!1), t(e.hasAttribute("open")).toBe(!1), e.open = !0, await e.updateComplete, t(e.open).toBe(!0), t(e.hasAttribute("open")).toBe(!0), t(e.getAttribute("open")).toBe("");
    }), a("should apply closed state classes when hidden", async () => {
      e.open = !0, await e.updateComplete, t(e.hasAttribute("open")).toBe(!0), e.open = !1, await e.updateComplete, t(e.open).toBe(!1), t(e.hasAttribute("open")).toBe(!1);
    }), a("should support custom CSS classes", async () => {
      e.classList.add("custom-dialog-class"), await e.updateComplete, t(e.classList.contains("custom-dialog-class")).toBe(!0);
      const o = e.shadowRoot?.querySelector(".dialog-backdrop");
      t(o?.classList.contains("dialog-backdrop")).toBe(!0);
    });
  }), d("Modal Behavior", () => {
    h(() => {
      document.body.style.overflow = "", document.body.removeAttribute("data-dialog-scroll-locked"), document.body.removeAttribute("data-dialog-original-overflow"), document.body.removeAttribute("data-dialog-count");
    }), a("should prevent background scrolling when open", async () => {
      t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!1), t(document.body.style.overflow).toBe(""), e.open = !0, await e.updateComplete, t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!0), t(document.body.style.overflow).toBe("hidden"), t(document.body.hasAttribute("data-dialog-original-overflow")).toBe(!0);
    }), a("should restore background scrolling when closed", async () => {
      document.body.style.overflow = "auto", e.open = !0, await e.updateComplete, t(document.body.style.overflow).toBe("hidden"), e.open = !1, await e.updateComplete, t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!1), t(document.body.hasAttribute("data-dialog-original-overflow")).toBe(!1), t(document.body.style.overflow).toBe("auto");
    }), a("should handle multiple dialogs appropriately", async () => {
      const o = new p();
      document.body.appendChild(o), e.open = !0, await e.updateComplete, t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!0), o.open = !0, await o.updateComplete, t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!0), e.open = !1, await e.updateComplete, t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!0), o.open = !1, await o.updateComplete, t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!1), document.body.removeChild(o);
    });
  }), d("Accessibility Integration", () => {
    a("should pass axe accessibility tests", async () => {
      e.heading = "Confirmation Dialog", e.description = "Are you sure you want to proceed?";
      const o = document.createElement("button");
      o.textContent = "Confirm", e.appendChild(o), e.open = !0, await e.updateComplete;
      const n = await m.axe(e);
      t(n).toHaveNoViolations();
    }), a("should announce dialog opening to screen readers", async () => {
      e.heading = "Important Dialog", e.open = !0, await e.updateComplete;
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      t(o?.getAttribute("role")).toBe("dialog"), t(o?.getAttribute("aria-modal")).toBe("true"), t(o?.getAttribute("aria-labelledby")).toBe("dialog-heading");
      const n = e.shadowRoot?.querySelector("#dialog-heading");
      t(n?.textContent).toBe("Important Dialog");
    }), a("should announce dialog closing to screen readers", async () => {
      e.description = "This dialog has been closed", e.open = !0, await e.updateComplete;
      const o = e.shadowRoot?.querySelector('[role="dialog"]');
      t(o?.getAttribute("aria-describedby")).toBe("dialog-description"), e.open = !1, await e.updateComplete, t(e.hasAttribute("open")).toBe(!1), t(e.open).toBe(!1);
    });
  }), d("Edge Cases and Error Handling", () => {
    a("should handle missing trigger element gracefully", async () => {
      document.activeElement?.blur?.(), e.open = !0, await e.updateComplete, await new Promise((o) => setTimeout(o, 10)), e.open = !1, await e.updateComplete, t(e.open).toBe(!1);
    }), a("should handle rapid open/close operations", async () => {
      e.open = !0, e.open = !1, e.open = !0, e.open = !1, e.open = !0, await e.updateComplete, t(e.open).toBe(!0), t(e.hasAttribute("open")).toBe(!0), t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!0), e.open = !1, await e.updateComplete, t(e.open).toBe(!1), t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!1);
    }), a("should clean up event listeners on disconnect", async () => {
      e.open = !0, await e.updateComplete, t(e.open).toBe(!0), t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!0);
      const o = e.parentElement;
      t(o).toBeTruthy(), o?.removeChild(e), t(document.body.hasAttribute("data-dialog-scroll-locked")).toBe(!1);
      const n = e.open;
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })), t(e.open).toBe(n), document.body.appendChild(e);
    });
  }), d("Advanced Accessibility Patterns (A11y-Dialog Inspired)", () => {
    a("should support focus trapping with trapTabKey pattern", async () => {
      const o = document.createElement("button");
      o.textContent = "First Button", o.id = "first-button";
      const n = document.createElement("input");
      n.type = "text", n.id = "middle-input";
      const l = document.createElement("button");
      l.textContent = "Last Button", l.id = "last-button", e.appendChild(o), e.appendChild(n), e.appendChild(l), e.open = !0, await e.updateComplete, await new Promise((c) => setTimeout(c, 0)), o.focus(), t(document.activeElement).toBe(o), n.focus(), t(document.activeElement).toBe(n), l.focus(), t(document.activeElement).toBe(l);
      const s = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: !0,
        cancelable: !0
      });
      document.dispatchEvent(s), await e.updateComplete, t(document.activeElement).toBe(o), o.focus();
      const i = new KeyboardEvent("keydown", {
        key: "Tab",
        shiftKey: !0,
        bubbles: !0,
        cancelable: !0
      });
      document.dispatchEvent(i), await e.updateComplete, t(document.activeElement).toBe(l);
    }), a("should handle focus trap edge cases", async () => {
      const o = document.createElement("span");
      o.textContent = "Just text content", e.appendChild(o), e.open = !0, await e.updateComplete, await new Promise((g) => setTimeout(g, 0));
      const n = e.shadowRoot?.querySelector('[role="dialog"]');
      t(n?.getAttribute("tabindex")).toBe("-1");
      const l = document.activeElement;
      t(l === e || l === document.body).toBe(!0);
      const s = document.activeElement, i = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: !0,
        cancelable: !0
      });
      document.dispatchEvent(i), t(document.activeElement).toBe(s), e.innerHTML = "", e.showCloseButton = !0;
      const c = document.createElement("button");
      c.textContent = "Slotted Button", e.appendChild(c), await e.updateComplete;
      const u = e.shadowRoot?.querySelector(".dialog-close-button");
      t(u).toBeTruthy(), u.focus();
      const b = e.shadowRoot;
      t(b?.contains(u)).toBe(!0), c.focus(), t(e.contains(c)).toBe(!0), t(u.getAttribute("type")).toBe("button"), t(c.tagName.toLowerCase()).toBe("button");
      const y = new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: !0,
        cancelable: !0
      });
      document.dispatchEvent(y), await e.updateComplete, t(u).toBeTruthy(), t(c).toBeTruthy();
    }), a("should support nested dialog scenarios", async () => {
    }), a("should allow event prevention for custom behavior", async () => {
    }), a("should support dynamic role switching", async () => {
    }), a("should manage aria-hidden for background content", async () => {
    }), a("should handle Shadow DOM boundary focus management", async () => {
    }), a("should support ignore focus trap mechanisms", async () => {
    });
  });
});
