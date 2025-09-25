import { defineComponent as d, ref as p, onMounted as r, onUnmounted as u, watch as g, createElementBlock as v, openBlock as f, mergeProps as B, renderSlot as h } from "vue";
import "./components/Dialog/core/_dialog.js";
const E = ["open", "heading", "description", "close-on-escape", "close-on-backdrop", "show-close-button"], w = /* @__PURE__ */ d({
  __name: "VueDialog",
  props: {
    open: { type: Boolean, default: !1 },
    heading: {},
    description: {},
    closeOnEscape: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 },
    showCloseButton: { type: Boolean, default: !1 }
  },
  emits: ["dialog-open", "dialog-close", "dialog-cancel"],
  setup(c, { emit: i }) {
    const o = c, a = i, n = p(), s = (e) => {
      e.stopPropagation(), a("dialog-open");
    }, l = (e) => {
      e.stopPropagation(), a("dialog-close");
    }, t = (e) => {
      e.stopPropagation(), a("dialog-cancel");
    };
    return r(async () => {
      if (await customElements.whenDefined("ag-dialog"), !n.value) return;
      const e = n.value;
      o.closeOnEscape !== void 0 && (e.closeOnEscape = o.closeOnEscape), o.closeOnBackdrop !== void 0 && (e.closeOnBackdrop = o.closeOnBackdrop), o.showCloseButton !== void 0 && (e.showCloseButton = o.showCloseButton), n.value.addEventListener("dialog-open", s), n.value.addEventListener("dialog-close", l), n.value.addEventListener("dialog-cancel", t);
    }), u(() => {
      n.value && (n.value.removeEventListener("dialog-open", s), n.value.removeEventListener("dialog-close", l), n.value.removeEventListener("dialog-cancel", t));
    }), g([() => o.closeOnEscape, () => o.closeOnBackdrop, () => o.showCloseButton], () => {
      if (!n.value) return;
      const e = n.value;
      o.closeOnEscape !== void 0 && (e.closeOnEscape = o.closeOnEscape), o.closeOnBackdrop !== void 0 && (e.closeOnBackdrop = o.closeOnBackdrop), o.showCloseButton !== void 0 && (e.showCloseButton = o.showCloseButton);
    }), (e, O) => (f(), v("ag-dialog", B({
      ref_key: "dialogRef",
      ref: n,
      open: e.open || void 0,
      heading: e.heading,
      description: e.description,
      "close-on-escape": e.closeOnEscape,
      "close-on-backdrop": e.closeOnBackdrop,
      "show-close-button": e.showCloseButton
    }, e.$attrs), [
      h(e.$slots, "default")
    ], 16, E));
  }
});
export {
  w as _
};
