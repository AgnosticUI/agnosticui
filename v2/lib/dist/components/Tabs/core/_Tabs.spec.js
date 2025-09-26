import "./_Tabs.js";
import { d as b, b as o, a as p, i as l, g as e } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
b("Tabs - Component Initialization", () => {
  let a;
  o(() => {
    a = document.createElement("ag-tabs"), document.body.appendChild(a);
  }), p(() => {
    document.body.removeChild(a);
  }), l("should render with default properties", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, e(a).toBeDefined(), e(a.activation).toBe("manual"), e(a.activeTab).toBe(0), e(a.orientation).toBe("horizontal");
  }), l("should render with custom properties", async () => {
    a.activation = "automatic", a.activeTab = 1, a.orientation = "vertical", await a.updateComplete, e(a.activation).toBe("automatic"), e(a.activeTab).toBe(1), e(a.orientation).toBe("vertical");
  }), l("should create tablist with proper ARIA role", async () => {
    await a.updateComplete;
    const t = a.shadowRoot?.querySelector('[role="tablist"]');
    e(t).toBeDefined(), e(t?.getAttribute("role")).toBe("tablist");
  }), l("should render tabs with proper slot content", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">First Tab</ag-tab>
      <ag-tab slot="tab" panel="panel2">Second Tab</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">First Content</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Second Content</ag-tab-panel>
    `, await a.updateComplete;
    const t = a.querySelectorAll("ag-tab");
    e(t).toHaveLength(2);
    const n = a.querySelectorAll("ag-tab-panel");
    e(n).toHaveLength(2);
  }), l("should handle empty tabs gracefully", async () => {
    await a.updateComplete, e(a).toBeDefined(), e(a.activation).toBe("manual"), e(a.activeTab).toBe(0);
  });
});
b("Tabs - ARIA Compliance", () => {
  let a;
  o(() => {
    a = document.createElement("ag-tabs"), document.body.appendChild(a);
  }), p(() => {
    document.body.removeChild(a);
  }), l("should implement required ARIA roles correctly", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete;
    const t = a.shadowRoot?.querySelector('[role="tablist"]');
    e(t).toBeDefined(), e(t?.getAttribute("role")).toBe("tablist"), a.querySelectorAll("ag-tab").forEach((i) => {
      e(i.getAttribute("role")).toBe("tab");
    }), a.querySelectorAll("ag-tab-panel").forEach((i) => {
      e(i.getAttribute("role")).toBe("tabpanel");
    });
  }), l("should manage aria-selected state correctly", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete;
    const t = a.querySelectorAll("ag-tab"), n = a.querySelectorAll("ag-tab-panel");
    e(t).toHaveLength(2), e(n).toHaveLength(2), a._updateTabsAndPanels(), e(t[0].getAttribute("aria-selected")).toBe("true"), e(t[1].getAttribute("aria-selected")).toBe("false");
  }), l("should establish proper tab-panel associations with aria-controls", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete;
    const t = a.querySelectorAll("ag-tab"), n = a.querySelectorAll("ag-tab-panel");
    e(t).toHaveLength(2), e(n).toHaveLength(2), a._updateTabsAndPanels(), e(t[0].getAttribute("aria-controls")).toBe("panel1"), e(t[1].getAttribute("aria-controls")).toBe("panel2"), e(n[0].getAttribute("aria-labelledby")).toBe(t[0].id), e(n[1].getAttribute("aria-labelledby")).toBe(t[1].id);
  }), l("should implement roving tabindex pattern", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete;
    const t = a.querySelectorAll("ag-tab");
    e(t).toHaveLength(2), a._updateTabsAndPanels(), e(t[0].getAttribute("tabindex")).toBe("0"), e(t[1].getAttribute("tabindex")).toBe("-1");
  }), l("should hide inactive panels with hidden attribute", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete;
    const t = a.querySelectorAll("ag-tab-panel");
    a._updateTabsAndPanels(), e(t[0].hasAttribute("hidden")).toBe(!1), e(t[1].hasAttribute("hidden")).toBe(!0);
  }), l('should make panels focusable with tabindex="0"', async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a.querySelectorAll("ag-tab-panel").forEach((n) => {
      e(n.getAttribute("tabindex")).toBe("0");
    });
  }), l("should set aria-orientation based on orientation prop", async () => {
    a.orientation = "vertical", await a.updateComplete;
    const t = a.shadowRoot?.querySelector('[role="tablist"]');
    e(t?.getAttribute("aria-orientation")).toBe("vertical"), a.orientation = "horizontal", await a.updateComplete, e(t?.getAttribute("aria-orientation")).toBe("horizontal");
  }), l("should support aria-label and aria-labelledby on tablist", async () => {
    a.ariaLabel = "Main navigation", await a.updateComplete;
    const t = a.shadowRoot?.querySelector('[role="tablist"]');
    e(t?.getAttribute("aria-label")).toBe("Main navigation"), a.ariaLabel = "", a.ariaLabelledBy = "nav-heading", await a.updateComplete, e(t?.getAttribute("aria-labelledby")).toBe("nav-heading");
  });
});
b("Tabs - Keyboard Navigation", () => {
  let a;
  o(() => {
    a = document.createElement("ag-tabs"), document.body.appendChild(a);
  }), p(() => {
    document.body.removeChild(a);
  }), l("should handle arrow key navigation between tabs", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab"), n = new KeyboardEvent("keydown", {
      key: "ArrowRight",
      bubbles: !0
    });
    t[0].dispatchEvent(n), await a.updateComplete, e(t[0].getAttribute("tabindex")).toBe("-1"), e(t[1].getAttribute("tabindex")).toBe("0"), e(a.activeTab).toBe(0);
  }), l("should handle Home key to move to first tab", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
    `, a.activeTab = 2, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab"), n = new KeyboardEvent("keydown", {
      key: "Home",
      bubbles: !0
    });
    t[2].dispatchEvent(n), await a.updateComplete, e(t[0].getAttribute("tabindex")).toBe("0"), e(t[1].getAttribute("tabindex")).toBe("-1"), e(t[2].getAttribute("tabindex")).toBe("-1");
  }), l("should handle End key to move to last tab", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab"), n = new KeyboardEvent("keydown", {
      key: "End",
      bubbles: !0
    });
    t[0].dispatchEvent(n), await a.updateComplete, e(t[0].getAttribute("tabindex")).toBe("-1"), e(t[1].getAttribute("tabindex")).toBe("-1"), e(t[2].getAttribute("tabindex")).toBe("0");
  }), l("should activate tab with Space key in manual mode", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab");
    a._setFocusedTab(1);
    const n = new KeyboardEvent("keydown", {
      key: " ",
      bubbles: !0
    });
    t[1].dispatchEvent(n), await a.updateComplete, e(a.activeTab).toBe(1), e(t[1].getAttribute("aria-selected")).toBe("true");
  }), l("should activate tab with Enter key in manual mode", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab");
    a._setFocusedTab(1);
    const n = new KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: !0
    });
    t[1].dispatchEvent(n), await a.updateComplete, e(a.activeTab).toBe(1), e(t[1].getAttribute("aria-selected")).toBe("true");
  }), l("should activate tab immediately on arrow keys in automatic mode", async () => {
    a.activation = "automatic", a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab"), n = new KeyboardEvent("keydown", {
      key: "ArrowRight",
      bubbles: !0
    });
    t[0].dispatchEvent(n), await a.updateComplete, e(a.activeTab).toBe(1), e(t[1].getAttribute("aria-selected")).toBe("true");
  }), l("should handle vertical orientation arrow keys", async () => {
    a.orientation = "vertical", a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab"), n = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      bubbles: !0
    });
    t[0].dispatchEvent(n), await a.updateComplete, e(t[0].getAttribute("tabindex")).toBe("-1"), e(t[1].getAttribute("tabindex")).toBe("0");
  });
});
b("Tabs - Tab Interaction", () => {
  let a;
  o(() => {
    a = document.createElement("ag-tabs"), document.body.appendChild(a);
  }), p(() => {
    document.body.removeChild(a);
  }), l("should activate tab on click", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab");
    t[1].click(), await a.updateComplete, e(a.activeTab).toBe(1), e(t[1].getAttribute("aria-selected")).toBe("true"), e(t[1].getAttribute("tabindex")).toBe("0"), e(t[0].getAttribute("tabindex")).toBe("-1");
  }), l("should switch panel visibility on tab activation", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab"), n = a.querySelectorAll("ag-tab-panel");
    e(n[0].hasAttribute("hidden")).toBe(!1), e(n[1].hasAttribute("hidden")).toBe(!0), t[1].click(), await a.updateComplete, e(n[0].hasAttribute("hidden")).toBe(!0), e(n[1].hasAttribute("hidden")).toBe(!1);
  }), l("should handle programmatic activeTab changes", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab slot="tab" panel="panel3">Tab 3</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel3">Content 3</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab"), n = a.querySelectorAll("ag-tab-panel");
    a.activeTab = 2, await a.updateComplete, e(t[2].getAttribute("aria-selected")).toBe("true"), e(t[2].getAttribute("tabindex")).toBe("0"), e(t[0].getAttribute("tabindex")).toBe("-1"), e(t[1].getAttribute("tabindex")).toBe("-1"), e(n[0].hasAttribute("hidden")).toBe(!0), e(n[1].hasAttribute("hidden")).toBe(!0), e(n[2].hasAttribute("hidden")).toBe(!1);
  }), l("should handle disabled state gracefully", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2" disabled>Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab");
    t[1].setAttribute("disabled", ""), t[1].setAttribute("aria-disabled", "true"), t[1].click(), await a.updateComplete, e(a.activeTab).toBe(0), e(t[0].getAttribute("aria-selected")).toBe("true"), e(t[1].getAttribute("aria-selected")).toBe("false");
  }), l("should emit tab change events", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels();
    let t = null;
    a.addEventListener("tab-change", (s) => {
      t = s.detail;
    }), a.querySelectorAll("ag-tab")[1].click(), await a.updateComplete, e(t).toBeTruthy(), e(t.activeTab).toBe(1), e(t.previousTab).toBe(0);
  }), l("should handle edge case with no panels", async () => {
    a.innerHTML = `
      <ag-tab slot="tab" panel="panel1">Tab 1</ag-tab>
      <ag-tab slot="tab" panel="panel2">Tab 2</ag-tab>
    `, await a.updateComplete, a._updateTabsAndPanels();
    const t = a.querySelectorAll("ag-tab");
    t[1].click(), await a.updateComplete, e(a.activeTab).toBe(1), e(t[1].getAttribute("aria-selected")).toBe("true");
  }), l("should handle edge case with no tabs", async () => {
    a.innerHTML = `
      <ag-tab-panel slot="panel" id="panel1">Content 1</ag-tab-panel>
      <ag-tab-panel slot="panel" id="panel2">Content 2</ag-tab-panel>
    `, await a.updateComplete, a._updateTabsAndPanels(), e(a.activeTab).toBe(0), e(a.querySelectorAll("ag-tab")).toHaveLength(0);
  });
});
