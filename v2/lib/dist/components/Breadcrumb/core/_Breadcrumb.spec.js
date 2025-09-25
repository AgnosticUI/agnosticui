import "./_Breadcrumb.js";
import { d as n, b as u, a as i, i as r, g as t, v as c } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
n("AgBreadcrumb", () => {
  let e;
  u(() => {
    e = document.createElement("ag-breadcrumb");
    const a = [
      { label: "Home", href: "/" },
      { label: "Test Page", current: !0 }
    ];
    e.items = a, document.body.appendChild(e);
  }), i(() => {
    e && e.parentNode && e.parentNode.removeChild(e);
  }), n("Component Creation and Basic Structure", () => {
    r("should create and render as semantic nav element", async () => {
      await e.updateComplete;
      const a = e.shadowRoot?.querySelector("nav");
      t(a).toBeTruthy(), t(a?.tagName).toBe("NAV");
    }), r("should render with proper WAI-ARIA breadcrumb structure", async () => {
      await e.updateComplete;
      const a = e.shadowRoot.querySelector("nav"), o = e.shadowRoot.querySelector("ol"), l = e.shadowRoot.querySelectorAll("li");
      t(a).toBeTruthy(), t(o).toBeTruthy(), t(l.length).toBe(2), t(a.contains(o)).toBe(!0);
    }), r("should set default properties correctly", async () => {
      await e.updateComplete, t(e.type).toBe("default"), t(e.ariaLabel).toBe("Breadcrumb"), t(e.items).toEqual([
        { label: "Home", href: "/" },
        { label: "Test Page", current: !0 }
      ]);
    }), r("should render empty when no items provided", async () => {
      e.items = [], await e.updateComplete;
      const a = e.shadowRoot?.querySelector("nav");
      t(a).toBeFalsy();
    }), r("should apply correct CSS classes to structure", async () => {
      await e.updateComplete;
      const a = e.shadowRoot.querySelector("nav"), o = e.shadowRoot.querySelector("ol"), l = e.shadowRoot.querySelectorAll("li");
      t(a.classList.contains("ag-breadcrumb")).toBe(!0), t(o.classList.contains("ag-breadcrumb__list")).toBe(!0), l.forEach((s) => {
        t(s.classList.contains("ag-breadcrumb__item")).toBe(!0);
      });
    });
  }), n("ARIA Attributes and Accessibility", () => {
    r("should have correct WAI-ARIA Breadcrumb pattern implementation", async () => {
      await e.updateComplete;
      const a = e.shadowRoot.querySelector("nav");
      t(a.getAttribute("aria-label")).toBe("Breadcrumb");
    }), r("should support custom aria-label", async () => {
      e.ariaLabel = "Custom breadcrumb navigation", await e.updateComplete;
      const a = e.shadowRoot.querySelector("nav");
      t(a.getAttribute("aria-label")).toBe("Custom breadcrumb navigation");
    }), r('should mark current page with aria-current="page"', async () => {
      e.items = [
        { label: "Home", href: "/" },
        { label: "Category", href: "/category" },
        { label: "Current Page", current: !0 }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll("a"), o = Array.from(a).find((l) => l.getAttribute("aria-current") === "page");
      t(o).toBeTruthy(), t(o.textContent?.trim()).toBe("Current Page");
    }), r("should mark last item as current page when no explicit current flag", async () => {
      e.items = [
        { label: "Home", href: "/" },
        { label: "Category", href: "/category" },
        { label: "Final Page", href: "/final" }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll("a"), o = a[a.length - 1];
      t(o.getAttribute("aria-current")).toBe("page"), t(o.textContent?.trim()).toBe("Final Page");
    }), r("should handle single item breadcrumb", async () => {
      e.items = [{ label: "Home", current: !0 }], await e.updateComplete;
      const a = e.shadowRoot.querySelector("nav"), o = e.shadowRoot.querySelectorAll("li"), l = e.shadowRoot.querySelector('[aria-current="page"]');
      t(a).toBeTruthy(), t(o.length).toBe(1), t(l).toBeTruthy(), t(l.textContent?.trim()).toBe("Home");
    }), r("should use ordered list for semantic structure", async () => {
      await e.updateComplete;
      const a = e.shadowRoot.querySelector("ol"), o = e.shadowRoot.querySelector("ul");
      t(a).toBeTruthy(), t(o).toBeFalsy();
    }), r("should have proper focus management for links", async () => {
      e.items = [
        { label: "Home", href: "/" },
        { label: "Category", href: "/category" },
        { label: "Current", current: !0 }
      ], await e.updateComplete, e.shadowRoot.querySelectorAll("a").forEach((o) => {
        t(o.getAttribute("tabindex")).not.toBe("-1");
      });
    });
  }), n("Separator Variants and Visual States", () => {
    r("should apply default separator (chevron)", async () => {
      e.type = "default", e.items = [
        { label: "Home", href: "/" },
        { label: "Current", current: !0 }
      ], await e.updateComplete, t(e.type).toBe("default");
    }), r("should apply slash separator type", async () => {
      e.type = "slash", await e.updateComplete, t(e.getAttribute("type")).toBe("slash");
    }), r("should apply bullet separator type", async () => {
      e.type = "bullet", await e.updateComplete, t(e.getAttribute("type")).toBe("bullet");
    }), r("should apply arrow separator type", async () => {
      e.type = "arrow", await e.updateComplete, t(e.getAttribute("type")).toBe("arrow");
    }), r("should reflect type attribute for CSS styling", async () => {
      e.type = "slash", await e.updateComplete, t(e.hasAttribute("type")).toBe(!0), t(e.getAttribute("type")).toBe("slash");
    }), r("should handle different item configurations", async () => {
      e.items = [
        { label: "Home", href: "/" },
        { label: "Category" },
        // No href
        { label: "Current", href: "/current", current: !0 }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll("li"), o = e.shadowRoot.querySelectorAll("a"), l = e.shadowRoot.querySelector(".ag-breadcrumb__text");
      t(a.length).toBe(3), t(o.length).toBe(2), t(l).toBeTruthy();
    });
  }), n("Event Handling", () => {
    r("should dispatch breadcrumb-click event when item is clicked", async () => {
      const a = c.fn();
      e.addEventListener("breadcrumb-click", a), e.items = [
        { label: "Home", href: "/" },
        { label: "Category", href: "/category" }
      ], await e.updateComplete, e.shadowRoot.querySelector("a").click(), t(a).toHaveBeenCalledTimes(1);
      const l = a.mock.calls[0][0].detail;
      t(l.item).toEqual({ label: "Home", href: "/" }), t(l.index).toBe(0), t(l.event).toBeInstanceOf(MouseEvent);
    }), r("should dispatch event for current page clicks", async () => {
      const a = c.fn();
      e.addEventListener("breadcrumb-click", a), e.items = [
        { label: "Home", href: "/" },
        { label: "Current", href: "/current", current: !0 }
      ], await e.updateComplete, e.shadowRoot.querySelector('[aria-current="page"]').click(), t(a).toHaveBeenCalledTimes(1);
      const l = a.mock.calls[0][0].detail;
      t(l.item.label).toBe("Current"), t(l.index).toBe(1);
    }), r("should bubble and compose events correctly", async () => {
      const a = c.fn();
      document.addEventListener("breadcrumb-click", a), await e.updateComplete, e.shadowRoot.querySelector("a").click(), t(a).toHaveBeenCalledTimes(1), document.removeEventListener("breadcrumb-click", a);
    });
  }), n("Item Rendering and Link Behavior", () => {
    r("should render links for items with href", async () => {
      e.items = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Current Page", current: !0 }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll("a");
      t(a.length).toBe(3), t(a[0].getAttribute("href")).toBe("/"), t(a[1].getAttribute("href")).toBe("/products"), t(a[2].getAttribute("aria-current")).toBe("page");
    }), r("should render text span for items without href (except current)", async () => {
      e.items = [
        { label: "Home", href: "/" },
        { label: "Category" },
        // No href, not current
        { label: "Current", current: !0 }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll("a"), o = e.shadowRoot.querySelector(".ag-breadcrumb__text");
      t(a.length).toBe(2), t(o).toBeTruthy(), t(o.textContent?.trim()).toBe("Category");
    }), r("should handle mixed item types correctly", async () => {
      e.items = [
        { label: "Home", href: "/" },
        { label: "Section" },
        // No href
        { label: "Category", href: "/category" },
        { label: "Current Page", href: "/current", current: !0 }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll("li"), o = e.shadowRoot.querySelectorAll("a"), l = e.shadowRoot.querySelectorAll(".ag-breadcrumb__text"), s = e.shadowRoot.querySelector('[aria-current="page"]');
      t(a.length).toBe(4), t(o.length).toBe(3), t(l.length).toBe(1), t(s).toBeTruthy();
    });
  }), n("Property Updates and Reactivity", () => {
    r("should update when items array changes", async () => {
      e.items = [{ label: "Initial", current: !0 }], await e.updateComplete;
      let a = e.shadowRoot.querySelectorAll("li");
      t(a.length).toBe(1), e.items = [
        { label: "Home", href: "/" },
        { label: "Page 1", href: "/page1" },
        { label: "Current", current: !0 }
      ], await e.updateComplete, a = e.shadowRoot.querySelectorAll("li"), t(a.length).toBe(3);
    }), r("should update separator when type changes", async () => {
      e.type = "default", await e.updateComplete, t(e.getAttribute("type")).toBe("default"), e.type = "slash", await e.updateComplete, t(e.getAttribute("type")).toBe("slash");
    }), r("should update aria-label when changed", async () => {
      e.ariaLabel = "Initial label", await e.updateComplete;
      let a = e.shadowRoot.querySelector("nav");
      t(a.getAttribute("aria-label")).toBe("Initial label"), e.ariaLabel = "Updated breadcrumb navigation", await e.updateComplete, a = e.shadowRoot.querySelector("nav"), t(a.getAttribute("aria-label")).toBe("Updated breadcrumb navigation");
    });
  }), n("CSS Architecture and Styling", () => {
    r("should provide semantic token integration points", async () => {
      await e.updateComplete;
      const a = e.shadowRoot.querySelector("nav"), o = e.shadowRoot.querySelector("ol");
      t(a.classList.contains("ag-breadcrumb")).toBe(!0), t(o.classList.contains("ag-breadcrumb__list")).toBe(!0);
    }), r("should maintain consistent structure across all item types", async () => {
      e.items = [
        { label: "Link Item", href: "/link" },
        { label: "Text Item" },
        { label: "Current Item", current: !0 }
      ], await e.updateComplete, e.shadowRoot.querySelectorAll(".ag-breadcrumb__item").forEach((o) => {
        t(o.tagName).toBe("LI"), t(o.classList.contains("ag-breadcrumb__item")).toBe(!0);
      });
    }), r("should apply appropriate CSS classes to links and text", async () => {
      e.items = [
        { label: "Link", href: "/link" },
        { label: "Text" },
        { label: "Current", current: !0 }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll(".ag-breadcrumb__link"), o = e.shadowRoot.querySelector(".ag-breadcrumb__text"), l = e.shadowRoot.querySelector('[aria-current="page"]');
      t(a.length).toBe(2), t(o).toBeTruthy(), t(l.classList.contains("ag-breadcrumb__link")).toBe(!0);
    });
  }), n("Edge Cases and Error Handling", () => {
    r("should handle empty items array gracefully", async () => {
      e.items = [], await e.updateComplete;
      const a = e.shadowRoot?.querySelector("nav");
      t(a).toBeFalsy();
    }), r("should handle null or undefined items", async () => {
      e.items = null, await e.updateComplete;
      const a = e.shadowRoot?.querySelector("nav");
      t(a).toBeFalsy();
    }), r("should handle items with empty labels", async () => {
      e.items = [
        { label: "", href: "/" },
        { label: "Valid", current: !0 }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll("li");
      t(a.length).toBe(2);
      const o = a[0].querySelector("a");
      t(o.textContent?.trim()).toBe("");
    }), r("should handle complex item configurations", async () => {
      e.items = [
        { label: "Home", href: "/" },
        { label: "Category", href: "/category" },
        { label: "Subcategory" },
        // No href
        { label: "Product", href: "/product" },
        { label: "Current Product", href: "/product/123", current: !0 }
      ], await e.updateComplete;
      const a = e.shadowRoot.querySelectorAll("li"), o = e.shadowRoot.querySelectorAll("a"), l = e.shadowRoot.querySelectorAll(".ag-breadcrumb__text"), s = e.shadowRoot.querySelector('[aria-current="page"]');
      t(a.length).toBe(5), t(o.length).toBe(4), t(l.length).toBe(1), t(s.textContent?.trim()).toBe("Current Product");
    });
  });
});
