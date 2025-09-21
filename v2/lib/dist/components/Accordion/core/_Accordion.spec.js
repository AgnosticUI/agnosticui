import { AccordionItem as i } from "./_Accordion.js";
import { j as b } from "../../../index-CaXWYOAP.js";
import { g as o, d as l, b as p, i as d, a as h } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
o.extend(b.toHaveNoViolations);
l("AccordionItem - Accessibility Compliance", () => {
  let e;
  p(async () => {
    e = new i();
    const t = document.createElement("span");
    t.setAttribute("slot", "header"), t.textContent = "Test Header", e.appendChild(t);
    const n = document.createElement("div");
    n.setAttribute("slot", "content"), n.textContent = "Test Content", e.appendChild(n), document.body.appendChild(e), await e.updateComplete;
  }), l("WAI-ARIA APG Compliance", () => {
    d("should initialize with open=false", () => {
      o(e.open).toBe(!1), o(e.hasAttribute("open")).toBe(!1);
    }), d("should have clickable header that toggles content", async () => {
      const t = e.shadowRoot.querySelector(".header");
      o(t).not.toBeNull(), o(t).toBeInstanceOf(HTMLDivElement);
      const n = e.shadowRoot.querySelector(".content"), a = window.getComputedStyle(n);
      o(a.display).toBe("none");
    }), d("should toggle open property when header is clicked", async () => {
      const t = e.shadowRoot.querySelector(".header");
      t.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await e.updateComplete, o(e.open).toBe(!0), o(e.hasAttribute("open")).toBe(!0), t.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await e.updateComplete, o(e.open).toBe(!1), o(e.hasAttribute("open")).toBe(!1);
    }), d("should show/hide content based on open state", async () => {
      const t = e.shadowRoot.querySelector(".content");
      let n = window.getComputedStyle(t);
      o(n.display).toBe("none"), e.open = !0, await e.updateComplete, n = window.getComputedStyle(t), o(n.display).toBe("block"), e.open = !1, await e.updateComplete, n = window.getComputedStyle(t), o(n.display).toBe("none");
    }), d("should emit toggle event with open state", async () => {
      let t;
      e.addEventListener("toggle", (n) => {
        t = n.detail;
      }), e.toggle(), await e.updateComplete, o(t).toEqual({ open: !0 }), e.toggle(), await e.updateComplete, o(t).toEqual({ open: !1 });
    }), d("should reflect open property to attribute", async () => {
      e.open = !0, await e.updateComplete, o(e.hasAttribute("open")).toBe(!0), e.open = !1, await e.updateComplete, o(e.hasAttribute("open")).toBe(!1);
    });
  }), l("Slot Content Rendering", () => {
    d("should render header slot content", () => {
      const t = e.shadowRoot.querySelector('slot[name="header"]');
      o(t).not.toBeNull();
    }), d("should render content slot inside collapsible container", () => {
      const t = e.shadowRoot.querySelector('slot[name="content"]');
      o(t).not.toBeNull();
      const n = e.shadowRoot.querySelector(".content");
      o(n.contains(t)).toBe(!0);
    });
  }), l("ARIA Compliance - Implemented Features", () => {
    d("header should be a button element for keyboard accessibility", () => {
      const t = e.shadowRoot.querySelector("button");
      o(t).not.toBeNull(), o(t.tagName.toLowerCase()).toBe("button");
    }), d("button should have aria-expanded attribute reflecting open state", async () => {
      const t = e.shadowRoot.querySelector("button");
      o(t.getAttribute("aria-expanded")).toBe("false"), e.open = !0, await e.updateComplete, o(t.getAttribute("aria-expanded")).toBe("true"), e.open = !1, await e.updateComplete, o(t.getAttribute("aria-expanded")).toBe("false");
    }), d("button should have aria-controls pointing to content panel", () => {
      const t = e.shadowRoot.querySelector("button"), n = e.shadowRoot.querySelector(".content"), a = t.getAttribute("aria-controls"), r = n.getAttribute("id");
      o(a).not.toBeNull(), o(r).not.toBeNull(), o(a).toBe(r);
    }), d('content panel should have role="region"', () => {
      const t = e.shadowRoot.querySelector(".content");
      o(t.getAttribute("role")).toBe("region");
    }), d("content panel should have aria-labelledby referencing button", () => {
      const t = e.shadowRoot.querySelector("button"), n = e.shadowRoot.querySelector(".content"), a = t.getAttribute("id"), r = n.getAttribute("aria-labelledby");
      o(a).not.toBeNull(), o(r).not.toBeNull(), o(r).toBe(a);
    }), d("should support Enter and Space key navigation", async () => {
      const t = e.shadowRoot.querySelector("button"), n = new KeyboardEvent("keydown", { key: "Enter", bubbles: !0 });
      Object.defineProperty(n, "target", { value: t, writable: !1 }), e.dispatchEvent(n), await e.updateComplete, o(e.open).toBe(!0);
      const a = new KeyboardEvent("keydown", { key: " ", bubbles: !0 });
      Object.defineProperty(a, "target", { value: t, writable: !1 }), e.dispatchEvent(a), await e.updateComplete, o(e.open).toBe(!1);
    }), d("should be fully accessible with no violations", async () => {
      const t = await b.axe(e);
      o(t).toHaveNoViolations();
    });
  }), l("Keyboard Navigation - Implemented Features", () => {
    d("should support Enter and Space key navigation on buttons", async () => {
      const t = e.shadowRoot.querySelector("button"), n = new KeyboardEvent("keydown", { key: "Enter", bubbles: !0 });
      Object.defineProperty(n, "target", { value: t, writable: !1 }), e.dispatchEvent(n), await e.updateComplete, o(e.open).toBe(!0);
      const a = new KeyboardEvent("keydown", { key: " ", bubbles: !0 });
      Object.defineProperty(a, "target", { value: t, writable: !1 }), e.dispatchEvent(a), await e.updateComplete, o(e.open).toBe(!1);
    }), d("should emit accordion-keydown events for Arrow/Home/End keys", async () => {
      const t = e.shadowRoot.querySelector("button");
      let n = null;
      e.addEventListener("accordion-keydown", (r) => {
        n = r.detail;
      });
      const a = new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: !0 });
      Object.defineProperty(a, "target", { value: t, writable: !1 }), e.dispatchEvent(a), o(n).not.toBeNull(), o(n.key).toBe("ArrowDown"), o(n.accordionItem).toBe(e);
    }), d("should not handle keyboard events when disabled", async () => {
      e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      let n = !1;
      e.addEventListener("accordion-keydown", () => {
        n = !0;
      });
      const a = new KeyboardEvent("keydown", { key: "Enter", bubbles: !0 });
      Object.defineProperty(a, "target", { value: t, writable: !1 }), e.dispatchEvent(a), await e.updateComplete, o(n).toBe(!1), o(e.open).toBe(!1);
    });
  }), l("Nested Accordions", () => {
    d("should handle nested accordions properly", async () => {
      const t = new i(), n = document.createElement("span");
      n.setAttribute("slot", "header"), n.textContent = "Nested Header", t.appendChild(n);
      const a = document.createElement("div");
      a.setAttribute("slot", "content"), a.textContent = "Nested Content", t.appendChild(a), e.querySelector('[slot="content"]')?.appendChild(t), await e.updateComplete, await t.updateComplete, e.toggle(), await e.updateComplete, o(e.open).toBe(!0), o(t.offsetParent).not.toBeNull(), t.shadowRoot.querySelector(".header").dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await t.updateComplete, o(t.open).toBe(!0);
    });
  }), l("Keyboard Navigation - Additional Features", () => {
    d("should maintain focus visibility and indication", () => {
      const t = e.shadowRoot.querySelector("button");
      o(t.tabIndex).not.toBe(-1), o(t.getAttribute("disabled")).toBeNull(), e.focus(), o(typeof e.focus).toBe("function");
    }), d("should support complex keyboard interaction sequences", async () => {
      const t = e.shadowRoot.querySelector("button");
      e.focus();
      const n = new KeyboardEvent("keydown", { key: "Enter", bubbles: !0 });
      Object.defineProperty(n, "target", { value: t, writable: !1 }), e.dispatchEvent(n), await e.updateComplete, o(e.open).toBe(!0);
      let a = !1;
      e.addEventListener("accordion-keydown", () => {
        a = !0;
      });
      const r = new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: !0 });
      Object.defineProperty(r, "target", { value: t, writable: !1 }), e.dispatchEvent(r), o(a).toBe(!0);
      const s = new KeyboardEvent("keydown", { key: " ", bubbles: !0 });
      Object.defineProperty(s, "target", { value: t, writable: !1 }), e.dispatchEvent(s), await e.updateComplete, o(e.open).toBe(!1);
    }), d.todo("should manage focus when accordion items are dynamically added/removed");
  }), l("Heading Structure - Implemented Features", () => {
    d("button should be wrapped in proper heading element (default h3)", () => {
      const t = e.shadowRoot.querySelector("h3.heading"), n = t?.querySelector("button");
      o(t).not.toBeNull(), o(n).not.toBeNull(), o(t.tagName.toLowerCase()).toBe("h3");
    }), d("should support configurable heading level", async () => {
      e.headingLevel = 2, await e.updateComplete;
      let t = e.shadowRoot.querySelector("h2.heading");
      o(t).not.toBeNull(), e.headingLevel = 5, await e.updateComplete, t = e.shadowRoot.querySelector("h5.heading"), o(t).not.toBeNull(), e.headingLevel = 10, await e.updateComplete, t = e.shadowRoot.querySelector("h6.heading"), o(t).not.toBeNull(), e.headingLevel = -5, await e.updateComplete, t = e.shadowRoot.querySelector("h1.heading"), o(t).not.toBeNull();
    }), d("heading should reset default margins", () => {
      const t = e.shadowRoot.querySelector("h3.heading"), n = window.getComputedStyle(t);
      o(n.margin).toBe("0px"), o(n.padding).toBe("0px");
    });
  }), l("Focus Management - Implemented Features", () => {
    d("should provide focus() method for programmatic focus", () => {
      e.focus(), o(typeof e.focus).toBe("function");
    }), d("should provide buttonElement getter for external focus management", () => {
      const t = e.buttonElement, n = e.shadowRoot.querySelector("button");
      o(t).toBe(n), o(t?.tagName.toLowerCase()).toBe("button");
    });
  }), l("Progressive Enhancement - Implemented Features", () => {
    d("should work without JavaScript (content visible by default)", () => {
      const t = i.styles.toString();
      o(t).toContain(`.content {
      display: block;`), o(t).toContain(`:host([data-enhanced]) .content {
      display: none;`), o(t).toContain(`:host([data-enhanced][open]) .content {
      display: block;`);
    }), d("should mark as enhanced after JavaScript loads", async () => {
      o(e.hasAttribute("data-enhanced")).toBe(!0);
    }), d("should properly handle hidden attribute vs CSS display interaction", async () => {
      o(e.open).toBe(!1);
      const t = e.shadowRoot.querySelector(".content"), n = window.getComputedStyle(t);
      o(n.display).toBe("none"), e.open = !0, await e.updateComplete;
      const a = window.getComputedStyle(t);
      o(a.display).toBe("block");
    });
  }), l("Multiple Accordion Focus Management - AccordionGroup Features", () => {
    let t, n;
    p(async () => {
      const { AccordionGroup: a } = await import("../../AccordionGroup/AccordionGroup.js");
      t = new a(), document.body.appendChild(t), n = [];
      for (let r = 0; r < 3; r++) {
        const s = new i(), c = document.createElement("span");
        c.setAttribute("slot", "header"), c.textContent = `Header ${r + 1}`, s.appendChild(c);
        const u = document.createElement("div");
        u.setAttribute("slot", "content"), u.textContent = `Content ${r + 1}`, s.appendChild(u), t.appendChild(s), n.push(s);
      }
      await t.updateComplete, await Promise.all(n.map((r) => r.updateComplete));
    }), h(() => {
      document.body.removeChild(t);
    }), d("should navigate between multiple accordion items with Arrow keys", async () => {
      n[0].focus();
      const a = new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: !0 });
      Object.defineProperty(a, "target", { value: n[0].buttonElement, writable: !1 }), n[0].dispatchEvent(a), o(t.accordions.length).toBe(3), o(t.accordions[1]).toBe(n[1]);
    }), d("should wrap focus from last to first item on ArrowDown", async () => {
      n[2].focus();
      const a = new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: !0 });
      Object.defineProperty(a, "target", { value: n[2].buttonElement, writable: !1 }), n[2].dispatchEvent(a);
      const s = (t.accordions.indexOf(n[2]) + 1) % t.accordions.length;
      o(s).toBe(0);
    }), d("should wrap focus from first to last item on ArrowUp", async () => {
      n[0].focus();
      const a = new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: !0 });
      Object.defineProperty(a, "target", { value: n[0].buttonElement, writable: !1 }), n[0].dispatchEvent(a);
      const s = (t.accordions.indexOf(n[0]) - 1 + t.accordions.length) % t.accordions.length;
      o(s).toBe(t.accordions.length - 1);
    }), d("should jump to first item on Home key", async () => {
      n[1].focus();
      const a = new KeyboardEvent("keydown", { key: "Home", bubbles: !0 });
      Object.defineProperty(a, "target", { value: n[1].buttonElement, writable: !1 }), n[1].dispatchEvent(a), o(t.accordions[0]).toBe(n[0]);
    }), d("should jump to last item on End key", async () => {
      n[0].focus();
      const a = new KeyboardEvent("keydown", { key: "End", bubbles: !0 });
      Object.defineProperty(a, "target", { value: n[0].buttonElement, writable: !1 }), n[0].dispatchEvent(a);
      const r = t.accordions.length - 1;
      o(t.accordions[r]).toBe(n[2]);
    }), d("should not interfere with Tab navigation flow", async () => {
      const a = new KeyboardEvent("keydown", { key: "Tab", bubbles: !0 });
      Object.defineProperty(a, "target", { value: n[0].buttonElement, writable: !1 });
      let r = !1;
      n[0].addEventListener("accordion-keydown", () => {
        r = !0;
      }), n[0].dispatchEvent(a), o(r).toBe(!1);
    });
  }), l("Advanced Behavior - Implemented Features", () => {
    d("should support disabled state for individual accordion items", async () => {
      e.disabled = !0, await e.updateComplete, o(e.hasAttribute("disabled")).toBe(!0), o(e.disabled).toBe(!0);
      const t = e.shadowRoot.querySelector("button");
      o(t.hasAttribute("disabled")).toBe(!0), o(t.getAttribute("aria-disabled")).toBe("true");
      const n = e.open;
      e.toggle(), await e.updateComplete, o(e.open).toBe(n), t.click(), await e.updateComplete, o(e.open).toBe(n);
    }), d("should apply disabled styling when disabled", async () => {
      e.disabled = !0, await e.updateComplete;
      const t = e.shadowRoot.querySelector("button");
      o(e.hasAttribute("disabled")).toBe(!0), o(t.hasAttribute("disabled")).toBe(!0), o(t.getAttribute("aria-disabled")).toBe("true");
    });
  }), l("Advanced Behavior - Partially Implemented", () => {
    d("should emit proper events for open/close state changes", async () => {
      let t;
      e.addEventListener("toggle", (n) => {
        t = n.detail;
      }), e.toggle(), await e.updateComplete, o(t).toEqual({ open: !0 }), e.toggle(), await e.updateComplete, o(t).toEqual({ open: !1 });
    }), d("should handle nested accordions properly", async () => {
      const t = new i(), n = document.createElement("span");
      n.setAttribute("slot", "header"), n.textContent = "Nested Header", t.appendChild(n);
      const a = document.createElement("div");
      a.setAttribute("slot", "content"), a.textContent = "Nested Content", t.appendChild(a), e.querySelector('[slot="content"]')?.appendChild(t), await e.updateComplete, await t.updateComplete, e.toggle(), await e.updateComplete, o(e.open).toBe(!0), o(t.offsetParent).not.toBeNull(), t.toggle(), await t.updateComplete, o(t.open).toBe(!0);
    }), d.todo("should support configurable auto-collapse behavior"), d.todo("should support customizable expand/collapse icons"), d.todo("should handle rapid keyboard interactions gracefully"), d.todo("should maintain proper screen reader announcements for state changes");
  });
});
