import { j as x } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as B, useEffect as D } from "react";
import "../core/_IconButton.js";
const S = () => Promise.all([
  customElements.whenDefined("ag-icon-button")
]), C = ({
  label: e,
  icon: m,
  unicode: v,
  size: f = "md",
  variant: E = "ghost",
  type: p = "button",
  disabled: b = !1,
  pressed: i = !1,
  loading: g = !1,
  ariaLabel: n,
  ariaDescribedby: k,
  onClick: r,
  onActivate: a,
  children: y,
  className: h,
  id: I,
  ...R
}) => {
  const c = B(null);
  return D(() => {
    const w = async () => {
      if (await S(), !c.current) return;
      const t = c.current, l = (o) => {
        console.log("ReactIconButton click:", {
          label: n || e,
          pressed: i,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          event: o.type
        }), r?.(o);
      }, d = (o) => {
        const s = o;
        console.log("ReactIconButton keyboard activate:", {
          label: n || e,
          key: s.detail.originalEvent?.key,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          detail: s.detail
        }), a?.(s.detail);
      };
      return t.addEventListener("icon-button-click", l), t.addEventListener("icon-button-activate", d), () => {
        t.removeEventListener("icon-button-click", l), t.removeEventListener("icon-button-activate", d);
      };
    };
    let u;
    return w().then((t) => {
      u = t;
    }), () => u?.();
  }, [r, a, e, n, i]), /* @__PURE__ */ x.jsx(
    "ag-icon-button",
    {
      ref: c,
      label: n || e,
      icon: m,
      unicode: v,
      size: f,
      variant: E,
      type: p,
      disabled: b || void 0,
      pressed: i || void 0,
      loading: g || void 0,
      "aria-describedby": k,
      className: h,
      id: I,
      ...R,
      children: y
    }
  );
};
export {
  C as ReactIconButton
};
