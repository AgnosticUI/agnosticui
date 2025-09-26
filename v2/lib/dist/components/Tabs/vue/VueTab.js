import { defineComponent as a, createElementBlock as d, openBlock as o, mergeProps as l, renderSlot as s } from "vue";
const r = ["panel", "disabled", "aria-disabled"], p = /* @__PURE__ */ a({
  __name: "VueTab",
  props: {
    panel: {},
    disabled: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (o(), d("ag-tab", l({
      slot: "tab",
      panel: e.panel,
      disabled: e.disabled || void 0,
      "aria-disabled": e.disabled ? "true" : void 0
    }, e.$attrs), [
      s(e.$slots, "default")
    ], 16, r));
  }
});
export {
  p as default
};
