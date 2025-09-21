import { j as K } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as M, useEffect as N } from "react";
import "../core/_Input.js";
const O = () => Promise.all([
  customElements.whenDefined("ag-input")
]), U = ({
  label: c,
  labelHidden: m = !1,
  noLabel: p = !1,
  ariaLabel: h,
  labelledBy: v,
  type: E = "text",
  value: b,
  placeholder: L,
  rows: g = 4,
  cols: x = 50,
  size: j = "default",
  isRounded: w = !1,
  isUnderlined: R = !1,
  isUnderlinedWithBackground: y = !1,
  isInline: D = !1,
  hasLeftAddon: k = !1,
  hasRightAddon: C = !1,
  required: I = !1,
  disabled: P = !1,
  readonly: W = !1,
  invalid: q = !1,
  errorMessage: z,
  helpText: A,
  onChange: s,
  onInput: r,
  onFocus: a,
  onBlur: l,
  children: B,
  className: F,
  id: G,
  ...H
}) => {
  const t = M(null);
  return N(() => {
    const J = async () => {
      if (await O(), !t.current) return;
      const e = t.current, u = (n) => {
        s?.(n);
      }, d = (n) => {
        r?.(n);
      }, o = (n) => {
        a?.(n);
      }, f = (n) => {
        l?.(n);
      };
      return e.addEventListener("change", u), e.addEventListener("input", d), e.addEventListener("focus", o), e.addEventListener("blur", f), () => {
        e.removeEventListener("change", u), e.removeEventListener("input", d), e.removeEventListener("focus", o), e.removeEventListener("blur", f);
      };
    };
    let i;
    return J().then((e) => {
      i = e;
    }), () => i?.();
  }, [s, r, a, l]), /* @__PURE__ */ K.jsx(
    "ag-input",
    {
      ref: t,
      label: c,
      "label-hidden": m,
      "no-label": p,
      "aria-label": h,
      "labelled-by": v,
      type: E,
      value: b,
      placeholder: L,
      rows: g,
      cols: x,
      size: j,
      "is-rounded": w,
      "is-underlined": R,
      "is-underlined-with-background": y,
      "is-inline": D,
      "has-left-addon": k,
      "has-right-addon": C,
      required: I,
      disabled: P,
      readonly: W,
      invalid: q,
      "error-message": z,
      "help-text": A,
      className: F,
      id: G,
      ...H,
      children: B
    }
  );
};
export {
  U as ReactInput
};
