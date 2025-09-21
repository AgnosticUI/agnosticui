import { defineComponent as o, createElementBlock as t, openBlock as n, renderSlot as r } from "vue";
const s = { slot: "header" }, p = /* @__PURE__ */ o({
  __name: "VueAccordionHeader",
  setup(c) {
    return (e, _) => (n(), t("span", s, [
      r(e.$slots, "default")
    ]));
  }
});
export {
  p as _
};
