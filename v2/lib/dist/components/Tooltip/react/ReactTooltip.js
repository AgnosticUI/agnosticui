import { j as p } from "../../../jsx-runtime-OVHDjVDe.js";
import { forwardRef as u, useRef as h, useImperativeHandle as m, useEffect as f } from "react";
const v = u(({ children: s, content: a, placement: l, trigger: c, onShow: o, onHide: r }, d) => {
  const e = h(null);
  return m(d, () => ({
    show: () => e.current?.show(),
    hide: () => e.current?.hide(),
    toggle: () => e.current?.toggle()
  })), f(() => {
    (async () => {
      try {
        await import("../core/_Tooltip.js");
      } catch {
      }
    })();
    const n = () => o?.(), i = () => r?.(), t = e.current;
    return t?.addEventListener("show", n), t?.addEventListener("hide", i), () => {
      t?.removeEventListener("show", n), t?.removeEventListener("hide", i);
    };
  }, [o, r]), /* @__PURE__ */ p.jsx(
    "ag-tooltip",
    {
      ref: e,
      content: String(a),
      placement: l,
      trigger: c,
      children: s
    }
  );
});
v.displayName = "Tooltip";
export {
  v as Tooltip
};
