import { j as d } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as h, useEffect as P } from "react";
import "../core/_dialog.js";
const b = () => Promise.all([
  customElements.whenDefined("ag-dialog")
]), H = ({
  open: t = !1,
  heading: m,
  description: p,
  closeOnEscape: o = !0,
  closeOnBackdrop: n = !0,
  showCloseButton: i = !1,
  onDialogOpen: s,
  onDialogClose: l,
  onDialogCancel: v,
  children: E,
  className: L,
  id: x,
  ...j
}) => {
  const a = h(null);
  return P(() => {
    const D = async () => {
      if (await b(), !a.current) return;
      const e = a.current;
      o !== void 0 && (e.closeOnEscape = o), n !== void 0 && (e.closeOnBackdrop = n), i !== void 0 && (e.showCloseButton = i);
      const u = (r) => {
        r.stopPropagation(), s?.();
      }, c = (r) => {
        r.stopPropagation(), l?.();
      }, f = (r) => {
        r.stopPropagation(), v?.();
      };
      return e.addEventListener("dialog-open", u), e.addEventListener("dialog-close", c), e.addEventListener("dialog-cancel", f), () => {
        e.removeEventListener("dialog-open", u), e.removeEventListener("dialog-close", c), e.removeEventListener("dialog-cancel", f);
      };
    };
    let g;
    return D().then((e) => {
      g = e;
    }), () => g?.();
  }, [s, l, v, o, n, i]), /* @__PURE__ */ d.jsx(
    "ag-dialog",
    {
      ref: a,
      open: t || void 0,
      heading: m,
      description: p,
      "close-on-escape": o === void 0 ? void 0 : o,
      "close-on-backdrop": n === void 0 ? void 0 : n,
      "show-close-button": i === void 0 ? void 0 : i,
      className: L,
      id: x,
      ...j,
      children: E
    }
  );
}, W = ({ children: t }) => /* @__PURE__ */ d.jsx("div", { slot: "header", children: t }), q = ({ children: t }) => /* @__PURE__ */ d.jsx("div", { slot: "footer", children: t });
export {
  q as DialogFooter,
  W as DialogHeader,
  H as ReactDialog
};
