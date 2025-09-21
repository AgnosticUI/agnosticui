import { defineComponent as o, createElementBlock as t, openBlock as n, renderSlot as r } from "vue";
const c = { slot: "content" }, p = /* @__PURE__ */ o({
  __name: "VueAccordionContent",
  setup(s) {
    return (e, _) => (n(), t("div", c, [
      r(e.$slots, "default")
    ]));
  }
});
export {
  p as _
};
