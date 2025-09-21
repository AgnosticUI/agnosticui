import { defineComponent as u, ref as r, onMounted as f, onUnmounted as p, createElementBlock as v, openBlock as h, mergeProps as b, renderSlot as y } from "vue";
import "./components/Input/core/_Input.js";
const c = ["label", "aria-label", "labelled-by", "type", "value", "placeholder", "rows", "cols", "size", "error-message", "help-text", "label-hidden", "no-label", "is-rounded", "is-underlined", "is-underlined-with-background", "is-inline", "has-left-addon", "has-right-addon", "required", "disabled", "readonly", "invalid"], k = /* @__PURE__ */ u({
  __name: "VueInput",
  props: {
    label: { default: "" },
    labelHidden: { type: Boolean, default: !1 },
    noLabel: { type: Boolean, default: !1 },
    ariaLabel: { default: "" },
    labelledBy: { default: "" },
    type: { default: "text" },
    value: { default: "" },
    placeholder: { default: "" },
    rows: { default: 4 },
    cols: { default: 50 },
    size: { default: "default" },
    isRounded: { type: Boolean, default: !1 },
    isUnderlined: { type: Boolean, default: !1 },
    isUnderlinedWithBackground: { type: Boolean, default: !1 },
    isInline: { type: Boolean, default: !1 },
    hasLeftAddon: { type: Boolean, default: !1 },
    hasRightAddon: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    errorMessage: { default: "" },
    helpText: { default: "" }
  },
  emits: ["change", "input", "focus", "blur"],
  setup(m, { expose: i, emit: s }) {
    const a = s, l = r(), n = (e) => {
      a("change", e);
    }, d = (e) => {
      a("input", e);
    }, o = (e) => {
      a("focus", e);
    }, t = (e) => {
      a("blur", e);
    };
    return i({
      focus: () => {
        l.value?.shadowRoot?.querySelector("input, textarea")?.focus();
      },
      blur: () => {
        l.value?.shadowRoot?.querySelector("input, textarea")?.blur();
      },
      select: () => {
        l.value?.shadowRoot?.querySelector("input, textarea")?.select();
      }
    }), f(async () => {
      await customElements.whenDefined("ag-input"), l.value && (l.value.addEventListener("change", n), l.value.addEventListener("input", d), l.value.addEventListener("focus", o), l.value.addEventListener("blur", t));
    }), p(() => {
      l.value && (l.value.removeEventListener("change", n), l.value.removeEventListener("input", d), l.value.removeEventListener("focus", o), l.value.removeEventListener("blur", t));
    }), (e, L) => (h(), v("ag-input", b({
      ref_key: "inputRef",
      ref: l,
      label: e.label,
      "aria-label": e.ariaLabel,
      "labelled-by": e.labelledBy,
      type: e.type,
      value: e.value,
      placeholder: e.placeholder,
      rows: e.rows,
      cols: e.cols,
      size: e.size,
      "error-message": e.errorMessage,
      "help-text": e.helpText,
      "label-hidden": e.labelHidden || void 0,
      "no-label": e.noLabel || void 0,
      "is-rounded": e.isRounded || void 0,
      "is-underlined": e.isUnderlined || void 0,
      "is-underlined-with-background": e.isUnderlinedWithBackground || void 0,
      "is-inline": e.isInline || void 0,
      "has-left-addon": e.hasLeftAddon || void 0,
      "has-right-addon": e.hasRightAddon || void 0,
      required: e.required || void 0,
      disabled: e.disabled || void 0,
      readonly: e.readonly || void 0,
      invalid: e.invalid || void 0
    }, e.$attrs), [
      y(e.$slots, "default")
    ], 16, c));
  }
});
export {
  k as _
};
