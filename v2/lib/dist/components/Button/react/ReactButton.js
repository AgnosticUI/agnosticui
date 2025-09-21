import { j as g } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as j, useEffect as R } from "react";
import "../core/_Button.js";
const k = () => Promise.all([
  customElements.whenDefined("ag-button")
]), B = ({
  type: c = "button",
  disabled: d = !1,
  loading: u = !1,
  toggle: t = !1,
  pressed: f = !1,
  ariaLabel: m,
  ariaDescribedby: v,
  onClick: s,
  onToggle: i,
  children: b,
  className: p,
  id: E,
  ...L
}) => {
  const n = j(null);
  return R(() => {
    const h = async () => {
      if (await k(), !n.current) return;
      const e = n.current, a = (r) => {
        s?.(r);
      }, l = (r) => {
        const x = r.detail;
        i?.(x);
      };
      return e.addEventListener("click", a), t && e.addEventListener("toggle", l), () => {
        e.removeEventListener("click", a), t && e.removeEventListener("toggle", l);
      };
    };
    let o;
    return h().then((e) => {
      o = e;
    }), () => o?.();
  }, [s, i, t]), /* @__PURE__ */ g.jsx(
    "ag-button",
    {
      ref: n,
      type: c,
      disabled: d || void 0,
      loading: u || void 0,
      toggle: t || void 0,
      pressed: f || void 0,
      "aria-label": m,
      "aria-describedby": v,
      className: p,
      id: E,
      ...L,
      children: b
    }
  );
};
export {
  B as ReactButton
};
