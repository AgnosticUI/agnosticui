import { m as a } from "../../../vue-test-utils.esm-bundler-BAMH7UOt.js";
import { _ as i } from "../../../VueButton.vue_vue_type_script_setup_true_lang-B2cqyhlX.js";
import { v as c, d as r, b as u, a as p, i as l, g as o } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const g = c.spyOn(console, "log").mockImplementation(() => {
});
r("VueButton Wrapper", () => {
  u(() => {
    g.mockClear();
  }), p(() => {
    document.body.innerHTML = "";
  }), r("Basic Rendering", () => {
    l("should render without errors", async () => {
      const t = a(i, {
        slots: {
          default: "Test Button"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (s) => s.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), o(t.exists()).toBe(!0);
      const e = t.find("ag-button");
      o(e.exists()).toBe(!0);
    }), l("should render children content", async () => {
      const t = a(i, {
        slots: {
          default: "Click Me"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (e) => e.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), o(t.text()).toContain("Click Me");
    });
  }), r("Props Pass-Through", () => {
    l("should pass type prop to web component", async () => {
      const t = a(i, {
        props: {
          type: "submit"
        },
        slots: {
          default: "Submit Button"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find("ag-button");
      o(e.exists()).toBe(!0);
      const s = e.element;
      o(s.type).toBe("submit");
    }), l("should pass disabled prop to web component", async () => {
      const t = a(i, {
        props: {
          disabled: !0
        },
        slots: {
          default: "Disabled Button"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find("ag-button");
      o(e.exists()).toBe(!0);
      const s = e.element;
      o(s.disabled).toBe(!0);
    }), l("should pass loading prop to web component", async () => {
      const t = a(i, {
        props: {
          loading: !0
        },
        slots: {
          default: "Loading Button"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find("ag-button");
      o(e.exists()).toBe(!0);
      const s = e.element;
      o(s.loading).toBe(!0);
    }), l("should pass toggle and pressed props to web component", async () => {
      const t = a(i, {
        props: {
          toggle: !0,
          pressed: !0
        },
        slots: {
          default: "Toggle Button"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find("ag-button");
      o(e.exists()).toBe(!0);
      const s = e.element;
      o(s.toggle).toBe(!0), o(s.pressed).toBe(!0);
    }), l("should pass ARIA attributes to web component", async () => {
      const t = a(i, {
        props: {
          ariaLabel: "Custom button label",
          ariaDescribedby: "help-text"
        },
        slots: {
          default: "Accessible Button"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (s) => s.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find("ag-button");
      o(e.exists()).toBe(!0), o(e.attributes("aria-label")).toBe("Custom button label"), o(e.attributes("aria-describedby")).toBe("help-text");
    });
  }), r("Event Handling", () => {
    l("should handle click events", async () => {
      const t = a(i, {
        slots: {
          default: "Click Me"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find("ag-button");
      o(e.exists()).toBe(!0);
      const s = new Event("click");
      e.element.dispatchEvent(s), await t.vm.$nextTick(), o(t.emitted()).toHaveProperty("click"), o(t.emitted("click")).toHaveLength(1);
    }), l("should handle toggle events", async () => {
      const t = a(i, {
        props: {
          toggle: !0
        },
        slots: {
          default: "Toggle Me"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find("ag-button");
      o(e.exists()).toBe(!0);
      const s = new CustomEvent("toggle", {
        detail: { pressed: !0 }
      });
      e.element.dispatchEvent(s), await t.vm.$nextTick(), o(t.emitted()).toHaveProperty("toggle"), o(t.emitted("toggle")).toHaveLength(1), o(t.emitted("toggle")?.[0]).toEqual([{ pressed: !0 }]);
    });
  });
});
