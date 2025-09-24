import { m as e } from "../../../vue-test-utils.esm-bundler-BAMH7UOt.js";
import { _ as n } from "../../../VueIconButton.vue_vue_type_script_setup_true_lang-Vb7eySE-.js";
import { v as r, d as l, b as p, a as u, i as a, g as i } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const m = r.spyOn(console, "log").mockImplementation(() => {
});
l("VueIconButton Wrapper", () => {
  let t;
  p(() => {
    m.mockClear();
  }), u(() => {
    t && t.unmount(), document.body.innerHTML = "";
  }), l("Basic Rendering", () => {
    a("should render without errors", async () => {
      t = e(n, {
        props: {
          label: "Close dialog"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0), i(t.exists()).toBe(!0);
    }), a("should pass required label prop", async () => {
      t = e(n, {
        props: {
          label: "Menu button"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0), i(t.html()).toContain("ag-icon-button");
    }), a("should accept icon props", async () => {
      t = e(n, {
        props: {
          label: "Menu",
          icon: "hamburger",
          unicode: "☰"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0), i(t.html()).toContain("ag-icon-button");
    });
  }), l("Props Configuration", () => {
    a("should accept size prop", async () => {
      t = e(n, {
        props: {
          label: "Test",
          size: "lg"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0);
    }), a("should accept variant prop", async () => {
      t = e(n, {
        props: {
          label: "Test",
          variant: "primary"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0);
    }), a("should accept disabled prop", async () => {
      t = e(n, {
        props: {
          label: "Test",
          disabled: !0
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0);
    });
  }), l("ARIA Properties", () => {
    a("should handle ariaLabel prop", async () => {
      t = e(n, {
        props: {
          label: "Original",
          ariaLabel: "Accessible label"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0);
    }), a("should handle aria-describedby prop", async () => {
      t = e(n, {
        props: {
          label: "Help",
          ariaDescribedby: "help-text"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0), i(s.attributes("aria-describedby")).toBe("help-text");
    });
  }), l("Slot Content", () => {
    a("should render slotted content", async () => {
      t = e(n, {
        props: {
          label: "Custom icon"
        },
        slots: {
          default: '<svg data-testid="custom-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>'
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (c) => c.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0);
      const o = t.find("svg");
      i(o.exists()).toBe(!0);
    });
  }), l("TypeScript Props", () => {
    a("should accept all valid size values", () => {
      ["xs", "sm", "md", "lg", "xl"].forEach((o) => {
        i(() => {
          e(n, {
            props: {
              label: "Test",
              size: o
            },
            global: {
              config: {
                compilerOptions: {
                  isCustomElement: (c) => c.startsWith("ag-")
                }
              }
            }
          });
        }).not.toThrow();
      });
    }), a("should accept all valid variant values", () => {
      ["primary", "secondary", "ghost", "danger"].forEach((o) => {
        i(() => {
          e(n, {
            props: {
              label: "Test",
              variant: o
            },
            global: {
              config: {
                compilerOptions: {
                  isCustomElement: (c) => c.startsWith("ag-")
                }
              }
            }
          });
        }).not.toThrow();
      });
    });
  }), l("Event Handling", () => {
    a("should setup event listeners", async () => {
      t = e(n, {
        props: {
          label: "Click me"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      }), await t.vm.$nextTick();
      const s = t.find("ag-icon-button");
      i(s.exists()).toBe(!0), i(t.html()).toContain("ag-icon-button");
    });
  });
});
