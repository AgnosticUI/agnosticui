import { defineComponent as o, createElementBlock as t, openBlock as r, renderSlot as n } from "vue";
const s = { slot: "header" }, l = /* @__PURE__ */ o({
  __name: "VueDialogHeader",
  setup(_) {
    return (e, a) => (r(), t("div", s, [
      n(e.$slots, "default")
    ]));
  }
});
export {
  l as _
};
