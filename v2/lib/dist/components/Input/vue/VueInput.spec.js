import { m as a } from "../../../vue-test-utils.esm-bundler-BAMH7UOt.js";
import { _ as i } from "../../../VueInput.vue_vue_type_script_setup_true_lang-CtU3KK2e.js";
import { v as r, d as p, b as u, a as c, i as l, g as e } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const m = r.spyOn(console, "log").mockImplementation(() => {
});
p("VueInput Wrapper", () => {
  u(() => {
    m.mockClear();
  }), c(() => {
    document.body.innerHTML = "";
  }), p("Basic Rendering", () => {
    l("should render without errors", async () => {
      const t = a(i, {
        props: {
          label: "Test Input"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (s) => s.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), e(t.exists()).toBe(!0);
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
    }), l("should render with label prop", async () => {
      const t = a(i, {
        props: {
          label: "Username"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.label).toBe("Username");
    }), l("should render children content", async () => {
      const t = a(i, {
        props: {
          label: "Input with content"
        },
        slots: {
          default: "<span>Additional content</span>"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), e(t.text()).toContain("Additional content");
    });
  }), p("Props Pass-Through", () => {
    l("should pass type prop to web component", async () => {
      const t = a(i, {
        props: {
          label: "Email",
          type: "email"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.type).toBe("email");
    }), l("should pass value prop to web component", async () => {
      const t = a(i, {
        props: {
          label: "Input",
          value: "test value"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.value).toBe("test value");
    }), l("should pass placeholder prop to web component", async () => {
      const t = a(i, {
        props: {
          label: "Input",
          placeholder: "Enter text..."
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
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0), e(n.attributes("placeholder")).toBe("Enter text...");
    }), l("should pass size prop to web component", async () => {
      const t = a(i, {
        props: {
          label: "Large Input",
          size: "large"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.size).toBe("large");
    }), l("should pass disabled prop to web component", async () => {
      const t = a(i, {
        props: {
          label: "Disabled Input",
          disabled: !0
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.disabled).toBe(!0);
    }), l("should pass required prop to web component", async () => {
      const t = a(i, {
        props: {
          label: "Required Input",
          required: !0
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.required).toBe(!0);
    }), l("should pass textarea props to web component", async () => {
      const t = a(i, {
        props: {
          label: "Textarea",
          type: "textarea",
          rows: 6,
          cols: 80
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.type).toBe("textarea"), e(s.rows).toBe(6), e(s.cols).toBe(80);
    }), l("should use default prop values correctly", async () => {
      const t = a(i, {
        props: {
          label: "Default Props Input"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.type).toBe("text"), e(s.size).toBe("default"), e(s.disabled).toBe(!1), e(s.required).toBe(!1), e(n.attributes("is-rounded")).toBeUndefined(), e(s.rows).toBe(4), e(s.cols).toBe(50);
    });
  }), p("Styling Variants", () => {
    l("should pass styling variant props to web component", async () => {
      const t = a(i, {
        props: {
          label: "Styled Input",
          isRounded: !0,
          isUnderlined: !0,
          isInline: !0
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.isRounded).toBe(!0), e(s.isUnderlined).toBe(!0), e(s.isInline).toBe(!0);
    }), l("should pass addon props to web component", async () => {
      const t = a(i, {
        props: {
          label: "Input with Addons",
          hasLeftAddon: !0,
          hasRightAddon: !0
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.hasLeftAddon).toBe(!0), e(s.hasRightAddon).toBe(!0);
    });
  }), p("Validation and Error Handling", () => {
    l("should pass validation props to web component", async () => {
      const t = a(i, {
        props: {
          label: "Validation Input",
          invalid: !0,
          errorMessage: "This field is required",
          helpText: "Please enter a valid value"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.invalid).toBe(!0), e(s.errorMessage).toBe("This field is required"), e(s.helpText).toBe("Please enter a valid value");
    }), l("should pass readonly prop to web component", async () => {
      const t = a(i, {
        props: {
          label: "Readonly Input",
          readonly: !0,
          value: "Cannot edit this"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.readonly).toBe(!0);
    });
  }), p("Event Handling", () => {
    l("should handle input events", async () => {
      const t = a(i, {
        props: {
          label: "Test Input"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = new Event("input", { bubbles: !0 });
      n.element.dispatchEvent(s), await t.vm.$nextTick(), e(t.emitted()).toHaveProperty("input"), e(t.emitted("input")).toHaveLength(1);
    }), l("should handle change events", async () => {
      const t = a(i, {
        props: {
          label: "Test Input"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = new Event("change", { bubbles: !0 });
      n.element.dispatchEvent(s), await t.vm.$nextTick(), e(t.emitted()).toHaveProperty("change"), e(t.emitted("change")).toHaveLength(1);
    }), l("should handle focus events", async () => {
      const t = a(i, {
        props: {
          label: "Test Input"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = new Event("focus", { bubbles: !0 });
      n.element.dispatchEvent(s), await t.vm.$nextTick(), e(t.emitted()).toHaveProperty("focus"), e(t.emitted("focus")).toHaveLength(1);
    }), l("should handle blur events", async () => {
      const t = a(i, {
        props: {
          label: "Test Input"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = new Event("blur", { bubbles: !0 });
      n.element.dispatchEvent(s), await t.vm.$nextTick(), e(t.emitted()).toHaveProperty("blur"), e(t.emitted("blur")).toHaveLength(1);
    });
  }), p("Imperative API", () => {
    l("should provide focus, blur, and select methods via expose", async () => {
      const t = a(i, {
        props: {
          label: "Test Input"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (n) => n.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), e(t.vm.focus).toBeDefined(), e(t.vm.blur).toBeDefined(), e(t.vm.select).toBeDefined(), e(typeof t.vm.focus).toBe("function"), e(typeof t.vm.blur).toBe("function"), e(typeof t.vm.select).toBe("function");
    }), l("should call underlying input methods when using imperative API", async () => {
      const t = a(i, {
        props: {
          label: "Test Input"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input"), s = {
        focus: r.fn(),
        blur: r.fn(),
        select: r.fn()
      };
      Object.defineProperty(n.element, "shadowRoot", {
        value: {
          querySelector: r.fn().mockReturnValue(s)
        },
        configurable: !0
      }), t.vm.focus(), e(s.focus).toHaveBeenCalledTimes(1), t.vm.blur(), e(s.blur).toHaveBeenCalledTimes(1), t.vm.select(), e(s.select).toHaveBeenCalledTimes(1);
    });
  }), p("Label Variants", () => {
    l("should handle label visibility variants", async () => {
      const t = a(i, {
        props: {
          label: "Hidden Label Input",
          labelHidden: !0
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.labelHidden).toBe(!0);
    }), l("should handle no label variant", async () => {
      const t = a(i, {
        props: {
          noLabel: !0,
          ariaLabel: "Accessible input without visible label"
        },
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick();
      const n = t.find("ag-input");
      e(n.exists()).toBe(!0);
      const s = n.element;
      e(s.noLabel).toBe(!0), e(s.ariaLabel).toBe("Accessible input without visible label");
    });
  });
});
