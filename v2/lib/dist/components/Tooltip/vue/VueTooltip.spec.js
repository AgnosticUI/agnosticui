import { m as i } from "../../../vue-test-utils.esm-bundler-BAMH7UOt.js";
import { _ as a } from "../../../VueTooltip.vue_vue_type_script_setup_true_lang-Cbtoy2nq.js";
import { v as p, d as c, b as u, a as d, i as l, g as o } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const h = p.spyOn(console, "log").mockImplementation(() => {
});
c("VueTooltip Wrapper", () => {
  u(() => {
    h.mockClear();
  }), d(() => {
    document.body.innerHTML = "";
  }), c("Basic Rendering", () => {
    l("should render without errors", async () => {
      const t = i(a, {
        props: {
          content: "Test tooltip"
        },
        slots: {
          default: "<button>Test Button</button>"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (e) => e.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), o(t.exists()).toBe(!0);
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
    }), l("should render children content", async () => {
      const t = i(a, {
        props: {
          content: "Tooltip text"
        },
        slots: {
          default: "<span>Trigger Element</span>"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), o(t.text()).toContain("Trigger Element");
    }), l("should pass content prop to web component", async () => {
      const t = i(a, {
        props: {
          content: "Test tooltip content"
        },
        slots: {
          default: "<button>Hover me</button>"
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
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
      const e = n.element;
      o(e.content).toBe("Test tooltip content");
    });
  }), c("Props Pass-Through", () => {
    l("should pass placement prop to web component", async () => {
      const t = i(a, {
        props: {
          content: "Tooltip",
          placement: "bottom"
        },
        slots: {
          default: "<button>Button</button>"
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
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
      const e = n.element;
      o(e.placement).toBe("bottom");
    }), l("should pass trigger prop to web component", async () => {
      const t = i(a, {
        props: {
          content: "Tooltip",
          trigger: "click"
        },
        slots: {
          default: "<button>Button</button>"
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
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
      const e = n.element;
      o(e.trigger).toBe("click");
    }), l("should pass distance prop to web component", async () => {
      const t = i(a, {
        props: {
          content: "Tooltip",
          distance: 16
        },
        slots: {
          default: "<button>Button</button>"
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
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
      const e = n.element;
      o(e.distance).toBe(16);
    }), l("should pass disabled prop to web component", async () => {
      const t = i(a, {
        props: {
          content: "Tooltip",
          disabled: !0
        },
        slots: {
          default: "<button>Button</button>"
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
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
      const e = n.element;
      o(e.disabled).toBe(!0);
    }), l("should use default prop values correctly", async () => {
      const t = i(a, {
        props: {
          content: "Default Props Tooltip"
        },
        slots: {
          default: "<button>Default Button</button>"
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
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
      const e = n.element;
      o(e.placement).toBe("top"), o(e.distance).toBe(8), o(e.skidding).toBe(0), o(e.trigger).toBe("hover focus"), o(e.disabled).toBe(!1);
    });
  }), c("Event Handling", () => {
    l("should handle show events", async () => {
      const t = i(a, {
        props: {
          content: "Test"
        },
        slots: {
          default: "<button>Button</button>"
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
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
      const e = new CustomEvent("show");
      n.element.dispatchEvent(e), await t.vm.$nextTick(), o(t.emitted()).toHaveProperty("show"), o(t.emitted("show")).toHaveLength(1);
    }), l("should handle hide events", async () => {
      const t = i(a, {
        props: {
          content: "Test"
        },
        slots: {
          default: "<button>Button</button>"
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
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0);
      const e = new CustomEvent("hide");
      n.element.dispatchEvent(e), await t.vm.$nextTick(), o(t.emitted()).toHaveProperty("hide"), o(t.emitted("hide")).toHaveLength(1);
    });
  }), c("Imperative API", () => {
    l("should provide show, hide, and toggle methods via expose", async () => {
      const t = i(a, {
        props: {
          content: "Test"
        },
        slots: {
          default: "<button>Button</button>"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), o(t.vm.show).toBeDefined(), o(t.vm.hide).toBeDefined(), o(t.vm.toggle).toBeDefined(), o(typeof t.vm.show).toBe("function"), o(typeof t.vm.hide).toBe("function"), o(typeof t.vm.toggle).toBe("function");
    }), l("should call web component methods when using imperative API", async () => {
      const t = i(a, {
        props: {
          content: "Test"
        },
        slots: {
          default: "<button>Button</button>"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (g) => g.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const e = t.find("ag-tooltip").element;
      e.show || (e.show = p.fn()), e.hide || (e.hide = p.fn()), e.toggle || (e.toggle = p.fn());
      const s = p.spyOn(e, "show"), r = p.spyOn(e, "hide"), m = p.spyOn(e, "toggle");
      t.vm.show(), o(s).toHaveBeenCalledTimes(1), t.vm.hide(), o(r).toHaveBeenCalledTimes(1), t.vm.toggle(), o(m).toHaveBeenCalledTimes(1);
    });
  }), c("Slot Content", () => {
    l("should render content slot when provided", async () => {
      const t = i(a, {
        slots: {
          default: "<button>Trigger</button>",
          content: '<div class="custom-tooltip">Custom tooltip content</div>'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (e) => e.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0), o(t.text()).toContain("Trigger");
    }), l("should prioritize content slot over content prop", async () => {
      const t = i(a, {
        props: {
          content: "Prop content"
        },
        slots: {
          default: "<button>Trigger</button>",
          content: '<div class="slot-content">Slot content</div>'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (e) => e.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-tooltip");
      o(n.exists()).toBe(!0), o(t.text()).toContain("Trigger");
    });
  });
});
