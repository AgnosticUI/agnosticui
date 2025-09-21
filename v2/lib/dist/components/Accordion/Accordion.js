import { Accordion as c, AccordionItem as s } from "./core/_Accordion.js";
import "lit";
import { MinimalAccordion as h } from "./styled/MinimalAccordion.js";
class t extends c {
  /**
   * AI Extension Point: Version tracking
   * This ensures compatibility across AgnosticUI upgrades
   */
  static version = "2.0.0-experimental";
  static canonicalVersion = "2.0.0-stable";
  /**
   * AI Extension Point: Feature flags
   * Safe way to add experimental features without breaking existing code
   */
  static features = {
    animations: !1,
    themes: !1,
    persistence: !1,
    analytics: !1
  };
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("data-agnostic-version", t.version), this.setAttribute("data-canonical-version", t.canonicalVersion);
  }
}
class o extends s {
  static version = "2.0.0-experimental";
  static canonicalVersion = "2.0.0-stable";
  static features = {
    animations: !1,
    themes: !1,
    persistence: !1,
    analytics: !1
  };
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("data-agnostic-version", o.version), this.setAttribute("data-canonical-version", o.canonicalVersion);
  }
  /**
   * AI Extension Point: Upgrade compatibility layer
   * This method can be used to migrate old API calls to new ones
   */
  _handleLegacyAPI() {
  }
}
customElements.define("ag-accordion-experimental", t);
customElements.define("ag-accordion-item-experimental", o);
const d = {
  minimal: () => ({
    // Minimal configuration
  }),
  animated: () => ({
    // Animated configuration  
  }),
  themed: (n) => ({
    // Themed configuration - theme parameter available for future use
    _themeHint: n
    // Store theme hint for future implementation
  })
}, m = {
  /**
   * Batch control multiple accordions
   */
  expandAll: (n) => {
    n.querySelectorAll("ag-accordion-item").forEach((e) => {
      "open" in e && (e.open = !0);
    });
  },
  collapseAll: (n) => {
    n.querySelectorAll("ag-accordion-item").forEach((e) => {
      "open" in e && (e.open = !1);
    });
  },
  /**
   * Get all accordion states
   */
  getStates: (n) => Array.from(n.querySelectorAll("ag-accordion-item")).filter((e) => "open" in e && "disabled" in e).map((e) => {
    const a = e;
    return {
      element: e,
      open: a.open,
      disabled: a.disabled
    };
  })
}, i = /* @__PURE__ */ new Map();
function p(n) {
  i.set(n.name, n);
}
function f(n) {
  i.forEach((e) => {
    try {
      e.enhance(n);
    } catch (a) {
      console.warn(`Extension ${e.name} failed to apply:`, a);
    }
  });
}
export {
  t as Accordion,
  i as AccordionExtensions,
  o as AccordionItem,
  d as AccordionPresets,
  m as AccordionUtils,
  c as CanonicalAccordion,
  s as CanonicalAccordionItem,
  h as MinimalAccordion,
  f as applyExtensions,
  p as registerExtension
};
