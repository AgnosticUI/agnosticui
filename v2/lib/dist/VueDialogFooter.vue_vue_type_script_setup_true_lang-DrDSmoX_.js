import { defineComponent as o, createElementBlock as t, openBlock as r, renderSlot as n } from "vue";
const s = { slot: "footer" }, a = /* @__PURE__ */ o({
  __name: "VueDialogFooter",
  setup(_) {
    return (e, c) => (r(), t("div", s, [
      n(e.$slots, "default")
    ]));
  }
});
export {
  a as _
};
