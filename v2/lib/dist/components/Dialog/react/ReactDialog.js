import { j as r } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as D, useEffect as P } from "react";
import "../core/_dialog.js";
const b = () => Promise.all([
  customElements.whenDefined("ag-dialog")
]), y = ({
  open: o = !1,
  heading: p,
  description: g,
  closeOnEscape: m = !0,
  closeOnBackdrop: v = !0,
  showCloseButton: f = !1,
  onDialogOpen: s,
  onDialogClose: a,
  onDialogCancel: i,
  children: E,
  className: h,
  id: L,
  ...x
}) => {
  const n = D(null);
  return P(() => {
    const j = async () => {
      if (await b(), !n.current) return;
      const e = n.current, c = (t) => {
        t.stopPropagation(), s?.();
      }, d = (t) => {
        t.stopPropagation(), a?.();
      }, u = (t) => {
        t.stopPropagation(), i?.();
      };
      return e.addEventListener("dialog-open", c), e.addEventListener("dialog-close", d), e.addEventListener("dialog-cancel", u), () => {
        e.removeEventListener("dialog-open", c), e.removeEventListener("dialog-close", d), e.removeEventListener("dialog-cancel", u);
      };
    };
    let l;
    return j().then((e) => {
      l = e;
    }), () => l?.();
  }, [s, a, i]), /* @__PURE__ */ r.jsx(
    "ag-dialog",
    {
      ref: n,
      open: o || void 0,
      heading: p,
      description: g,
      "close-on-escape": m,
      "close-on-backdrop": v,
      "show-close-button": f,
      className: h,
      id: L,
      ...x,
      children: E
    }
  );
}, C = ({ children: o }) => /* @__PURE__ */ r.jsx("div", { slot: "header", children: o }), F = ({ children: o }) => /* @__PURE__ */ r.jsx("div", { slot: "footer", children: o });
export {
  F as DialogFooter,
  C as DialogHeader,
  y as ReactDialog
};
