import "./_Menu.js";
import { d as l, b as i, a as r, i as u, g as a } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
l("Menu - Component Initialization", () => {
  let e, t;
  i(() => {
    e = document.createElement("ag-menu-button"), t = document.createElement("ag-menu"), document.body.appendChild(e), document.body.appendChild(t);
  }), r(() => {
    document.body.removeChild(e), document.body.removeChild(t);
  }), u("should render MenuButton with default properties", async () => {
    await e.updateComplete, a(e).toBeDefined(), a(e.disabled).toBe(!1), a(e.ariaLabel).toBe("");
    const n = e.shadowRoot?.querySelector("button");
    a(n).toBeDefined(), a(n?.getAttribute("aria-haspopup")).toBe("menu"), a(n?.getAttribute("aria-expanded")).toBe("false");
  }), u("should render Menu with default properties", async () => {
    await t.updateComplete, a(t).toBeDefined(), a(t.open).toBe(!1), a(t.placement).toBe("bottom-start"), a(t.getAttribute("role")).toBe("menu"), a(t.getAttribute("aria-orientation")).toBe("vertical");
  }), u("should render MenuItem with default properties", async () => {
    const n = document.createElement("ag-menu-item");
    document.body.appendChild(n), await n.updateComplete, a(n).toBeDefined(), a(n.value).toBe(""), a(n.disabled).toBe(!1), a(n.href).toBe(""), a(n.getAttribute("role")).toBe("menuitem"), a(n.getAttribute("tabindex")).toBe("-1"), document.body.removeChild(n);
  }), u("should render MenuSeparator with proper role", async () => {
    const n = document.createElement("ag-menu-separator");
    document.body.appendChild(n), await n.updateComplete, a(n).toBeDefined(), a(n.getAttribute("role")).toBe("separator"), document.body.removeChild(n);
  }), u("should handle MenuButton with custom properties", async () => {
    e.disabled = !0, e.ariaLabel = "Custom menu button", await e.updateComplete, a(e.disabled).toBe(!0), a(e.ariaLabel).toBe("Custom menu button");
    const n = e.shadowRoot?.querySelector("button");
    a(n?.hasAttribute("disabled")).toBe(!0), a(n?.getAttribute("aria-label")).toBe("Custom menu button");
  }), u("should handle MenuItem with href as link", async () => {
    const n = document.createElement("ag-menu-item");
    n.href = "/test", n.target = "_blank", n.value = "test-link", document.body.appendChild(n), await n.updateComplete, a(n.href).toBe("/test"), a(n.target).toBe("_blank"), a(n.value).toBe("test-link");
    const o = n.shadowRoot?.querySelector("a");
    a(o).toBeDefined(), a(o?.getAttribute("href")).toBe("/test"), a(o?.getAttribute("target")).toBe("_blank"), document.body.removeChild(n);
  });
});
l("Menu - ARIA Compliance", () => {
  let e;
  i(() => {
    e = document.createElement("ag-menu-button"), document.body.appendChild(e);
  }), r(() => {
    document.body.removeChild(e);
  }), u("should implement required ARIA roles correctly", async () => {
    e.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="edit">Edit</ag-menu-item>
        <ag-menu-item value="copy">Copy</ag-menu-item>
        <ag-menu-separator></ag-menu-separator>
        <ag-menu-item value="delete">Delete</ag-menu-item>
      </ag-menu>
    `, await e.updateComplete;
    const t = e.shadowRoot?.querySelector("button");
    a(t?.getAttribute("aria-haspopup")).toBe("menu"), a(t?.getAttribute("aria-expanded")).toBe("false");
    const n = e.querySelector("ag-menu");
    a(n?.getAttribute("role")).toBe("menu"), a(n?.getAttribute("aria-orientation")).toBe("vertical"), e.querySelectorAll("ag-menu-item").forEach((d) => {
      a(d.getAttribute("role")).toBe("menuitem");
    });
    const m = e.querySelector("ag-menu-separator");
    a(m?.getAttribute("role")).toBe("separator");
  }), u("should manage aria-expanded state correctly", async () => {
    e.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="edit">Edit</ag-menu-item>
      </ag-menu>
    `, await e.updateComplete;
    const t = e.shadowRoot?.querySelector("button");
    a(t?.getAttribute("aria-expanded")).toBe("false"), e._openMenu(), await e.updateComplete, a(t?.getAttribute("aria-expanded")).toBe("true"), e._closeMenu(), await e.updateComplete, a(t?.getAttribute("aria-expanded")).toBe("false");
  }), u("should handle disabled states with aria-disabled", async () => {
    e.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="edit">Edit</ag-menu-item>
        <ag-menu-item value="copy" disabled>Copy</ag-menu-item>
      </ag-menu>
    `, await e.updateComplete;
    const t = e.querySelectorAll("ag-menu-item");
    a(t[0].hasAttribute("disabled")).toBe(!1), a(t[1].hasAttribute("disabled")).toBe(!0), a(t[1].disabled).toBe(!0);
  }), u("should implement roving tabindex pattern", async () => {
    const t = document.createElement("ag-menu");
    t.innerHTML = `
      <ag-menu-item value="item1">Item 1</ag-menu-item>
      <ag-menu-item value="item2">Item 2</ag-menu-item>
      <ag-menu-item value="item3">Item 3</ag-menu-item>
    `, document.body.appendChild(t), t.open = !0, await t.updateComplete, t._updateMenuItems();
    const n = t.querySelectorAll("ag-menu-item");
    a(n[0].getAttribute("tabindex")).toBe("0"), a(n[1].getAttribute("tabindex")).toBe("-1"), a(n[2].getAttribute("tabindex")).toBe("-1"), document.body.removeChild(t);
  }), u("should support aria-label and aria-labelledby on menu", async () => {
    const t = document.createElement("ag-menu");
    document.body.appendChild(t), t.ariaLabel = "Actions menu", await t.updateComplete, a(t.ariaLabel).toBe("Actions menu"), t.ariaLabel = "", t.ariaLabelledBy = "menu-button-1", await t.updateComplete, a(t.ariaLabelledBy).toBe("menu-button-1"), document.body.removeChild(t);
  }), u("should handle aria-orientation correctly", async () => {
    const t = document.createElement("ag-menu");
    document.body.appendChild(t), await t.updateComplete, a(t.getAttribute("aria-orientation")).toBe("vertical"), document.body.removeChild(t);
  });
});
l("Menu - Keyboard Navigation", () => {
  let e, t;
  i(() => {
    e = document.createElement("ag-menu-button"), e.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="item1">Item 1</ag-menu-item>
        <ag-menu-item value="item2">Item 2</ag-menu-item>
        <ag-menu-item value="item3">Item 3</ag-menu-item>
      </ag-menu>
    `, document.body.appendChild(e), t = e.querySelector("ag-menu");
  }), r(() => {
    document.body.removeChild(e);
  }), u("should open menu with Enter key on button", async () => {
    await e.updateComplete;
    const n = e.shadowRoot?.querySelector("button"), o = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: !0
    });
    n?.dispatchEvent(o), await e.updateComplete, a(e._menuOpen).toBe(!0), a(t?.open).toBe(!0);
  }), u("should open menu with Space key on button", async () => {
    await e.updateComplete;
    const n = e.shadowRoot?.querySelector("button"), o = new KeyboardEvent("keydown", {
      key: " ",
      bubbles: !0
    });
    n?.dispatchEvent(o), await e.updateComplete, a(e._menuOpen).toBe(!0), a(t?.open).toBe(!0);
  }), u("should open menu with Down Arrow and focus first item", async () => {
    await e.updateComplete;
    const n = e.shadowRoot?.querySelector("button"), o = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: !0
    });
    n?.dispatchEvent(o), await e.updateComplete, a(e._menuOpen).toBe(!0), a(t?.open).toBe(!0);
  }), u("should open menu with Up Arrow and focus last item", async () => {
    await e.updateComplete;
    const n = e.shadowRoot?.querySelector("button"), o = new KeyboardEvent("keydown", {
      key: "ArrowUp",
      bubbles: !0
    });
    n?.dispatchEvent(o), await e.updateComplete, a(e._menuOpen).toBe(!0), a(t?.open).toBe(!0);
  }), u("should navigate between menu items with arrow keys", async () => {
    e._openMenu(), await e.updateComplete, t._updateMenuItems();
    const n = t.querySelectorAll("ag-menu-item");
    a(n[0].getAttribute("tabindex")).toBe("0");
    const o = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: !0
    });
    t.dispatchEvent(o), await t.updateComplete, a(t._focusedIndex).toBe(1);
  }), u("should handle Home key to move to first item", async () => {
    e._openMenu(), await e.updateComplete, t._updateMenuItems(), t._focusedIndex = 2;
    const n = new KeyboardEvent("keydown", {
      key: "Home",
      bubbles: !0
    });
    t.dispatchEvent(n), await t.updateComplete, a(t._focusedIndex).toBe(0);
  }), u("should handle End key to move to last item", async () => {
    e._openMenu(), await e.updateComplete, t._updateMenuItems();
    const n = new KeyboardEvent("keydown", {
      key: "End",
      bubbles: !0
    });
    t.dispatchEvent(n), await t.updateComplete, a(t._focusedIndex).toBe(2);
  }), u("should activate menu item with Enter key", async () => {
    e._openMenu(), await e.updateComplete, t._updateMenuItems();
    let n = "";
    t.addEventListener("menu-select", (m) => {
      n = m.detail.value;
    }), await t.updateComplete;
    const o = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: !0
    });
    t.dispatchEvent(o), await t.updateComplete, a(n).toBe("item1");
  }), u("should close menu with Escape key", async () => {
    e._openMenu(), await e.updateComplete, a(e._menuOpen).toBe(!0);
    const n = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: !0
    });
    t.dispatchEvent(n), await e.updateComplete, a(e._menuOpen).toBe(!1);
  }), u("should close menu with Tab key", async () => {
    e._openMenu(), await e.updateComplete, a(e._menuOpen).toBe(!0);
    const n = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: !0
    });
    t.dispatchEvent(n), await e.updateComplete, a(e._menuOpen).toBe(!1);
  });
});
l("Menu - Menu Interaction", () => {
  let e, t;
  i(async () => {
    e = document.createElement("ag-menu-button"), e.innerHTML = `
      <span>Actions</span>
      <ag-menu slot="menu">
        <ag-menu-item value="edit">Edit</ag-menu-item>
        <ag-menu-item value="copy">Copy</ag-menu-item>
        <ag-menu-separator></ag-menu-separator>
        <ag-menu-item value="delete">Delete</ag-menu-item>
        <ag-menu-item value="disabled" disabled>Disabled Item</ag-menu-item>
      </ag-menu>
    `, document.body.appendChild(e), await e.updateComplete, t = e.querySelector("ag-menu"), await t?.updateComplete;
  }), r(() => {
    document.body.removeChild(e);
  }), u("should open menu on button click", async () => {
    await e.updateComplete, e._updateMenuReference();
    const n = e.shadowRoot?.querySelector("button");
    a(e._menuOpen).toBe(!1), n?.click(), await e.updateComplete, a(e._menuOpen).toBe(!0), a(t?.open).toBe(!0);
  }), u("should close menu when clicking outside", async () => {
    e._openMenu(), await e.updateComplete, a(e._menuOpen).toBe(!0);
    const n = document.createElement("div");
    document.body.appendChild(n);
    const o = new MouseEvent("click", { bubbles: !0 });
    n.dispatchEvent(o), await e.updateComplete, a(e._menuOpen).toBe(!1), document.body.removeChild(n);
  }), u("should select menu item on click", async () => {
    e._openMenu(), await e.updateComplete, t._updateMenuItems();
    let n = "";
    t.addEventListener("menu-select", (m) => {
      n = m.detail.value;
    }), t.querySelectorAll("ag-menu-item")[0].click(), await t.updateComplete, a(n).toBe("edit"), a(e._menuOpen).toBe(!1);
  }), u("should handle disabled menu item clicks", async () => {
    e._openMenu(), await e.updateComplete, t._updateMenuItems();
    let n = "";
    t.addEventListener("menu-select", (d) => {
      n = d.detail.value;
    });
    const m = t.querySelectorAll("ag-menu-item")[3];
    a(m.disabled).toBe(!0), m.click(), await t.updateComplete, a(n).toBe(""), a(e._menuOpen).toBe(!0);
  }), u("should emit menu-open and menu-close events", async () => {
    await e.updateComplete;
    let n = !1, o = !1;
    e.addEventListener("menu-open", () => {
      n = !0;
    }), e.addEventListener("menu-close", () => {
      o = !0;
    }), e._openMenu(), await e.updateComplete, a(n).toBe(!0), e._closeMenu(), await e.updateComplete, a(o).toBe(!0);
  }), u("should handle menu with href links", async () => {
    const n = document.createElement("ag-menu-button");
    n.innerHTML = `
      <span>Navigation</span>
      <ag-menu slot="menu">
        <ag-menu-item href="/home" value="home">Home</ag-menu-item>
        <ag-menu-item href="/about" value="about">About</ag-menu-item>
      </ag-menu>
    `, document.body.appendChild(n), n._openMenu(), await n.updateComplete;
    const o = n.querySelector("ag-menu");
    o._updateMenuItems();
    const d = o.querySelectorAll("ag-menu-item")[0];
    a(d.href).toBe("/home");
    const s = d.shadowRoot?.querySelector("a");
    a(s).toBeDefined(), a(s?.getAttribute("href")).toBe("/home"), document.body.removeChild(n);
  }), u("should handle empty menu gracefully", async () => {
    const n = document.createElement("ag-menu-button");
    n.innerHTML = `
      <span>Empty</span>
      <ag-menu slot="menu"></ag-menu>
    `, document.body.appendChild(n), n._openMenu(), await n.updateComplete;
    const o = n.querySelector("ag-menu");
    o._updateMenuItems(), a(o._menuItems.length).toBe(0);
    const m = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: !0
    });
    o.dispatchEvent(m), await o.updateComplete, a(o._focusedIndex).toBe(0), document.body.removeChild(n);
  }), u("should handle programmatic open/close state changes", async () => {
    await e.updateComplete, a(t.open).toBe(!1), a(t.hasAttribute("hidden")).toBe(!1), t.open = !0, await t.updateComplete, a(t.open).toBe(!0), t.open = !1, await t.updateComplete, a(t.open).toBe(!1);
  }), u("should maintain focus management during interactions", async () => {
    e._openMenu(), await e.updateComplete, t._updateMenuItems();
    const n = t.querySelectorAll("ag-menu-item");
    a(n[0].getAttribute("tabindex")).toBe("0"), a(n[1].getAttribute("tabindex")).toBe("-1");
    const o = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: !0
    });
    t.dispatchEvent(o), await t.updateComplete, a(t._focusedIndex).toBe(1);
  });
});
