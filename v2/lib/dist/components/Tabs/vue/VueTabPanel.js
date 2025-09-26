import { defineComponent as o, createElementBlock as t, openBlock as n, mergeProps as r, renderSlot as a } from "vue";
const s = ["id"], i = /* @__PURE__ */ o({
  __name: "VueTabPanel",
  props: {
    id: {}
  },
  setup(p) {
    return (e, l) => (n(), t("ag-tab-panel", r({
      slot: "panel",
      id: e.id
    }, e.$attrs), [
      a(e.$slots, "default")
    ], 16, s));
  }
});
export {
  i as default
};
