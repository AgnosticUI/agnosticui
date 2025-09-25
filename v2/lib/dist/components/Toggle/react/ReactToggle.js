import { j as y } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as j, useEffect as L } from "react";
import "../core/_Toggle.js";
const R = () => Promise.all([
  customElements.whenDefined("ag-toggle")
]), k = ({
  label: s,
  checked: l = !1,
  size: a = "md",
  variant: c = "default",
  disabled: d = !1,
  readonly: i = !1,
  labelledBy: g,
  describedBy: u,
  name: f,
  value: m,
  onChange: n,
  className: p,
  id: v,
  ...E
}) => {
  const t = j(null);
  return L(() => {
    const b = async () => {
      if (await R(), !t.current) return;
      const e = t.current, o = (h) => {
        const x = h.detail;
        n?.(x);
      };
      return e.addEventListener("toggle-change", o), () => {
        e.removeEventListener("toggle-change", o);
      };
    };
    let r;
    return b().then((e) => {
      r = e;
    }), () => r?.();
  }, [n]), /* @__PURE__ */ y.jsx(
    "ag-toggle",
    {
      ref: t,
      label: s,
      checked: l || void 0,
      size: a,
      variant: c,
      disabled: d || void 0,
      readonly: i || void 0,
      labelledby: g,
      describedby: u,
      name: f,
      value: m,
      className: p,
      id: v,
      ...E
    }
  );
};
export {
  k as ReactToggle
};
