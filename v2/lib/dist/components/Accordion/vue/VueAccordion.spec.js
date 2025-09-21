import { m as i } from "../../../vue-test-utils.esm-bundler-BAMH7UOt.js";
import { _ as d } from "../../../VueAccordion.vue_vue_type_script_setup_true_lang-UYdN7JZm.js";
import { _ as r } from "../../../VueAccordionItem.vue_vue_type_script_setup_true_lang-Dl_3k2Ug.js";
import { _ as l } from "../../../VueAccordionHeader.vue_vue_type_script_setup_true_lang-DpqsrLdr.js";
import { _ as m } from "../../../VueAccordionContent.vue_vue_type_script_setup_true_lang-CoCVRQJg.js";
import { v as p, d as a, b as g, a as u, i as s, g as e } from "../../../vi.bdSIJ99Y-kNDF-H_t.js";
const v = p.spyOn(console, "log").mockImplementation(() => {
});
a("VueAccordion Wrapper Suite", () => {
  g(() => {
    v.mockClear();
  }), u(() => {
    document.body.innerHTML = "";
  }), a("VueAccordion (Group Container)", () => {
    a("Basic Rendering", () => {
      s("should render without errors", async () => {
        const t = i(d, {
          slots: {
            default: "<div>Test Accordion Group</div>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (n) => n.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick(), e(t.exists()).toBe(!0);
        const o = t.find("ag-accordion");
        e(o.exists()).toBe(!0);
      }), s("should render children content", async () => {
        const t = i(d, {
          slots: {
            default: "<div>Accordion Group Content</div>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (o) => o.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick(), e(t.text()).toContain("Accordion Group Content");
      });
    });
  }), a("VueAccordionItem", () => {
    a("Basic Rendering", () => {
      s("should render without errors", async () => {
        const t = i(r, {
          slots: {
            default: "<div>Test Accordion Item</div>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (n) => n.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick(), e(t.exists()).toBe(!0);
        const o = t.find("ag-accordion-item");
        e(o.exists()).toBe(!0);
      }), s("should render children content", async () => {
        const t = i(r, {
          slots: {
            default: "<span>Accordion Item Content</span>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (o) => o.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick(), e(t.text()).toContain("Accordion Item Content");
      });
    }), a("Props Pass-Through", () => {
      s("should pass open prop to web component", async () => {
        const t = i(r, {
          props: {
            open: !0
          },
          slots: {
            default: "<div>Open Accordion Item</div>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (c) => c.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick();
        const o = t.find("ag-accordion-item");
        e(o.exists()).toBe(!0);
        const n = o.element;
        e(n.open).toBe(!0);
      }), s("should pass disabled prop to web component", async () => {
        const t = i(r, {
          props: {
            disabled: !0
          },
          slots: {
            default: "<div>Disabled Accordion Item</div>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (c) => c.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick();
        const o = t.find("ag-accordion-item");
        e(o.exists()).toBe(!0);
        const n = o.element;
        e(n.disabled).toBe(!0);
      }), s("should pass headingLevel prop to web component", async () => {
        const t = i(r, {
          props: {
            headingLevel: 2
          },
          slots: {
            default: "<div>Heading Level 2 Item</div>"
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
        const o = t.find("ag-accordion-item");
        e(o.exists()).toBe(!0), e(o.attributes("heading-level")).toBe("2");
      }), s("should use default prop values correctly", async () => {
        const t = i(r, {
          slots: {
            default: "<div>Default Props Item</div>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (c) => c.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick();
        const o = t.find("ag-accordion-item");
        e(o.exists()).toBe(!0);
        const n = o.element;
        e(n.open).toBe(!1), e(n.disabled).toBe(!1), e(o.attributes("heading-level")).toBe("3");
      });
    }), a("Event Handling", () => {
      s("should handle toggle events", async () => {
        const t = i(r, {
          slots: {
            default: "<div>Toggle Me</div>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (c) => c.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick();
        const o = t.find("ag-accordion-item");
        e(o.exists()).toBe(!0);
        const n = new CustomEvent("toggle", {
          detail: { open: !0 }
        });
        o.element.dispatchEvent(n), await t.vm.$nextTick(), e(t.emitted()).toHaveProperty("toggle"), e(t.emitted("toggle")).toHaveLength(1), e(t.emitted("toggle")?.[0]).toEqual([{ open: !0 }]);
      }), s("should handle toggle events with different states", async () => {
        const t = i(r, {
          props: {
            open: !0
          },
          slots: {
            default: "<div>Toggle State Test</div>"
          },
          global: {
            config: {
              compilerOptions: {
                isCustomElement: (c) => c.startsWith("ag-")
              }
            }
          }
        });
        await t.vm.$nextTick();
        const o = t.find("ag-accordion-item");
        e(o.exists()).toBe(!0);
        const n = new CustomEvent("toggle", {
          detail: { open: !1 }
        });
        o.element.dispatchEvent(n), await t.vm.$nextTick(), e(t.emitted()).toHaveProperty("toggle"), e(t.emitted("toggle")).toHaveLength(1), e(t.emitted("toggle")?.[0]).toEqual([{ open: !1 }]);
      });
    });
  }), a("VueAccordionHeader", () => {
    s("should render header content in slot", async () => {
      const t = i(l, {
        slots: {
          default: "Header Content"
        }
      });
      await t.vm.$nextTick(), e(t.exists()).toBe(!0), e(t.text()).toContain("Header Content");
      const o = t.find('span[slot="header"]');
      e(o.exists()).toBe(!0);
    });
  }), a("VueAccordionContent", () => {
    s("should render content in slot", async () => {
      const t = i(m, {
        slots: {
          default: "Content Body"
        }
      });
      await t.vm.$nextTick(), e(t.exists()).toBe(!0), e(t.text()).toContain("Content Body");
      const o = t.find('div[slot="content"]');
      e(o.exists()).toBe(!0);
    });
  }), a("Integration", () => {
    s("should work together as a complete accordion", async () => {
      const t = i({
        template: `
          <VueAccordion>
            <VueAccordionItem :open="false" :heading-level="2">
              <VueAccordionHeader>First Item Header</VueAccordionHeader>
              <VueAccordionContent>First Item Content</VueAccordionContent>
            </VueAccordionItem>
            <VueAccordionItem :open="true" :heading-level="2">
              <VueAccordionHeader>Second Item Header</VueAccordionHeader>
              <VueAccordionContent>Second Item Content</VueAccordionContent>
            </VueAccordionItem>
          </VueAccordion>
        `,
        components: {
          VueAccordion: d,
          VueAccordionItem: r,
          VueAccordionHeader: l,
          VueAccordionContent: m
        }
      }, {
        global: {
          config: {
            compilerOptions: {
              isCustomElement: (o) => o.startsWith("ag-")
            }
          }
        }
      });
      await t.vm.$nextTick(), e(t.find("ag-accordion").exists()).toBe(!0), e(t.findAll("ag-accordion-item")).toHaveLength(2), e(t.findAll('span[slot="header"]')).toHaveLength(2), e(t.findAll('div[slot="content"]')).toHaveLength(2), e(t.text()).toContain("First Item Header"), e(t.text()).toContain("First Item Content"), e(t.text()).toContain("Second Item Header"), e(t.text()).toContain("Second Item Content");
    });
  });
});
