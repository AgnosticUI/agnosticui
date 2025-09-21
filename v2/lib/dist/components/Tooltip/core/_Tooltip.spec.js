import { Tooltip as p } from "./_Tooltip.js";
import { j as c } from "../../../index-CaXWYOAP.js";
import { g as o, d as i, b as u, a as h, i as a, v as d } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
o.extend(c.toHaveNoViolations);
i("Tooltip - Comprehensive Tests", () => {
  let r;
  u(() => {
    r = document.createElement("div"), document.body.appendChild(r);
  }), h(() => {
    r.innerHTML = "";
  });
  const n = async (t = {}, e = "Trigger") => {
    const s = new p(), l = document.createElement("button");
    return l.textContent = e, s.appendChild(l), Object.assign(s, t), r.appendChild(s), await s.updateComplete, { tooltip: s, trigger: l };
  };
  i("Accessibility", () => {
    a("should be fully accessible with no violations", async () => {
      const { tooltip: t } = await n({ content: "Hello" }), e = await c.axe(t);
      o(e).toHaveNoViolations();
    });
  }), i("ARIA and Attributes", () => {
    a("should apply correct ARIA attributes on initialization", async () => {
      const { tooltip: t, trigger: e } = await n({ content: "Hello" }), s = t.shadowRoot?.querySelector("#tooltip");
      o(s?.getAttribute("role")).toBe("tooltip"), o(e.getAttribute("aria-describedby")).toBe("tooltip");
    }), a("should be hidden from assistive technology when closed", async () => {
      const { tooltip: t } = await n({ content: "Hello" }), e = t.shadowRoot?.querySelector("#tooltip");
      o(window.getComputedStyle(e).display).toBe("none");
    });
  }), i("Properties", () => {
    a("should have correct default properties", async () => {
      const { tooltip: t } = await n();
      o(t.content).toBe(""), o(t.placement).toBe("top"), o(t.distance).toBe(8), o(t.skidding).toBe(0), o(t.trigger).toBe("hover focus");
    }), a("should accept and reflect new property values", async () => {
      const { tooltip: t } = await n({
        content: "New Content",
        placement: "bottom",
        distance: 10,
        skidding: 5,
        trigger: "click"
      });
      o(t.content).toBe("New Content"), o(t.placement).toBe("bottom"), o(t.distance).toBe(10), o(t.skidding).toBe(5), o(t.trigger).toBe("click");
    });
  }), i("Interactions", () => {
    a("should show on hover and hide on mouseleave", async () => {
      const { tooltip: t } = await n({ trigger: "hover" });
      t.dispatchEvent(new MouseEvent("mouseenter")), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!0), t.dispatchEvent(new MouseEvent("mouseleave")), await new Promise((e) => setTimeout(e, 150)), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!1);
    }), a("should show on focus and hide on blur", async () => {
      const { tooltip: t, trigger: e } = await n({ trigger: "focus" });
      e.dispatchEvent(new FocusEvent("focus", { bubbles: !0 })), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!0), e.dispatchEvent(new FocusEvent("blur", { bubbles: !0 })), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!1);
    }), a("should toggle on click", async () => {
      const { tooltip: t, trigger: e } = await n({ trigger: "click" });
      e.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!0), e.dispatchEvent(new MouseEvent("click", { bubbles: !0 })), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!1);
    }), a("should dismiss with Escape key", async () => {
      const { tooltip: t } = await n();
      t.show(), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!0), document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!1);
    }), a("should persist when hovering from trigger to tooltip (WCAG)", async () => {
      const { tooltip: t } = await n({ trigger: "hover" }), e = t.shadowRoot?.querySelector("#tooltip");
      t.dispatchEvent(new MouseEvent("mouseenter")), await t.updateComplete, o(e?.hasAttribute("data-show")).toBe(!0), t.dispatchEvent(new MouseEvent("mouseleave")), e?.dispatchEvent(new MouseEvent("mouseenter")), await new Promise((s) => setTimeout(s, 150)), await t.updateComplete, o(e?.hasAttribute("data-show")).toBe(!0), e?.dispatchEvent(new MouseEvent("mouseleave")), await new Promise((s) => setTimeout(s, 150)), await t.updateComplete, o(e?.hasAttribute("data-show")).toBe(!1);
    }), a.todo("should show on long press for touch interaction"), a.todo("should dismiss on tap outside for touch interaction");
  }), i("Focus Management", () => {
    a("should not give focus to the tooltip panel itself", async () => {
      const { tooltip: t, trigger: e } = await n({ trigger: "focus" });
      e.focus(), await t.updateComplete, o(t.shadowRoot?.activeElement).not.toBe(t.shadowRoot?.querySelector("#tooltip")), o(document.activeElement).toBe(e);
    });
  }), i("API Methods and Events", () => {
    a("should show and hide programmatically via methods", async () => {
      const { tooltip: t } = await n();
      t.show(), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!0), t.hide(), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!1);
    }), a("should dispatch show and hide events", async () => {
      const { tooltip: t } = await n(), e = d.fn(), s = d.fn();
      t.addEventListener("show", e), t.addEventListener("hide", s), t.show(), await t.updateComplete, o(e).toHaveBeenCalledTimes(1), t.hide(), await t.updateComplete, o(s).toHaveBeenCalledTimes(1);
    });
  }), i("Slots and Content", () => {
    a("should render content from the content property", async () => {
      const { tooltip: t } = await n({ content: "Property Content" }), e = t.shadowRoot?.querySelector('slot[name="content"]'), s = e.assignedNodes();
      o(s.length).toBe(0), o(e.textContent).toContain("Property Content");
    }), a("should prioritize slotted content over the content property", async () => {
      const { tooltip: t } = await n({ content: "Property Content" }), e = document.createElement("span");
      e.setAttribute("slot", "content"), e.textContent = "Slotted Content", t.appendChild(e), await t.updateComplete;
      const l = (t.shadowRoot?.querySelector('slot[name="content"]')).assignedElements();
      o(l[0]).toBe(e), o(l[0].textContent).toBe("Slotted Content");
    });
  }), i("Edge Cases", () => {
    a("should not show when disabled property is true", async () => {
      const { tooltip: t, trigger: e } = await n({ disabled: !0 });
      e.dispatchEvent(new MouseEvent("mouseenter")), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!1), e.focus(), await t.updateComplete, o(t.shadowRoot?.querySelector("#tooltip")?.hasAttribute("data-show")).toBe(!1);
    });
  });
});
