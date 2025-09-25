import { m as n } from "../../../vue-test-utils.esm-bundler-BAMH7UOt.js";
import { _ as i } from "../../../VueDialog.vue_vue_type_script_setup_true_lang-BMKhYRa9.js";
import { _ as g } from "../../../VueDialogHeader.vue_vue_type_script_setup_true_lang-DZbWL7Oh.js";
import { _ as p } from "../../../VueDialogFooter.vue_vue_type_script_setup_true_lang-DrDSmoX_.js";
import { v as m, d as r, b as d, a as u, i as l, g as o } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const f = m.spyOn(console, "log").mockImplementation(() => {
});
r("VueDialog Wrapper", () => {
  d(() => {
    f.mockClear();
  }), u(() => {
    document.body.innerHTML = "";
  }), r("Basic Rendering", () => {
    l("should render without errors", async () => {
      const t = n(i, {
        slots: {
          default: "Dialog Content"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (a) => a.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), o(t.exists()).toBe(!0);
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0);
    }), l("should render children content", async () => {
      const t = n(i, {
        slots: {
          default: "Dialog Content"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (e) => e.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), o(t.text()).toContain("Dialog Content");
    }), l("should not be open by default", async () => {
      const t = n(i, {
        slots: {
          default: "Dialog Content"
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
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0);
      const a = e.element;
      o(a.open).toBe(!1);
    });
  }), r("Props Pass-Through", () => {
    l("should pass open prop to web component", async () => {
      const t = n(i, {
        props: {
          open: !0
        },
        slots: {
          default: "Dialog Content"
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
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0);
      const a = e.element;
      o(a.open).toBe(!0);
    }), l("should pass heading prop to web component", async () => {
      const t = n(i, {
        props: {
          heading: "Test Dialog"
        },
        slots: {
          default: "Dialog Content"
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
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0);
      const a = e.element;
      o(a.heading).toBe("Test Dialog");
    }), l("should pass description prop to web component", async () => {
      const t = n(i, {
        props: {
          description: "Test description"
        },
        slots: {
          default: "Dialog Content"
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
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0);
      const a = e.element;
      o(a.description).toBe("Test description");
    }), l("should pass boolean props to web component", async () => {
      await customElements.whenDefined("ag-dialog");
      const t = n(i, {
        props: {
          closeOnEscape: !1,
          closeOnBackdrop: !1,
          showCloseButton: !0
        },
        slots: {
          default: "Dialog Content"
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
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0), await new Promise((s) => setTimeout(s, 300));
      const a = e.element;
      if (a.updateComplete)
        try {
          await Promise.race([
            a.updateComplete,
            new Promise((s, c) => setTimeout(() => c(new Error("updateComplete timeout")), 1e3))
          ]);
        } catch (s) {
          console.warn("updateComplete timed out:", s);
        }
      o(a.closeOnEscape).toBe(!1), o(a.closeOnBackdrop).toBe(!1), o(a.showCloseButton).toBe(!0);
    }, 8e3);
  }), r("Event Handling", () => {
    l("should handle dialog-open events", async () => {
      const t = n(i, {
        slots: {
          default: "Dialog Content"
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
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0);
      const a = new CustomEvent("dialog-open", { bubbles: !0 });
      e.element.dispatchEvent(a), await t.vm.$nextTick(), o(t.emitted()).toHaveProperty("dialog-open"), o(t.emitted("dialog-open")).toHaveLength(1);
    }), l("should handle dialog-close events", async () => {
      const t = n(i, {
        slots: {
          default: "Dialog Content"
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
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0);
      const a = new CustomEvent("dialog-close", { bubbles: !0 });
      e.element.dispatchEvent(a), await t.vm.$nextTick(), o(t.emitted()).toHaveProperty("dialog-close"), o(t.emitted("dialog-close")).toHaveLength(1);
    }), l("should handle dialog-cancel events", async () => {
      const t = n(i, {
        slots: {
          default: "Dialog Content"
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
      const e = t.find("ag-dialog");
      o(e.exists()).toBe(!0);
      const a = new CustomEvent("dialog-cancel", { bubbles: !0 });
      e.element.dispatchEvent(a), await t.vm.$nextTick(), o(t.emitted()).toHaveProperty("dialog-cancel"), o(t.emitted("dialog-cancel")).toHaveLength(1);
    });
  }), r("Slot Components", () => {
    l("should render VueDialogHeader with slot attribute", async () => {
      const t = n(i, {
        slots: {
          default: `
            <VueDialogHeader>Custom Header</VueDialogHeader>
          `
        },
        global: {
          components: {
            VueDialogHeader: g
          },
          config: {
            compilerOptions: {
              isCustomElement: (a) => a.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find('[slot="header"]');
      o(e.exists()).toBe(!0), o(e.text()).toContain("Custom Header");
    }), l("should render VueDialogFooter with slot attribute", async () => {
      const t = n(i, {
        slots: {
          default: `
            Dialog Content
            <VueDialogFooter>Custom Footer</VueDialogFooter>
          `
        },
        global: {
          components: {
            VueDialogFooter: p
          },
          config: {
            compilerOptions: {
              isCustomElement: (a) => a.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find('[slot="footer"]');
      o(e.exists()).toBe(!0), o(e.text()).toContain("Custom Footer");
    });
  });
});
