import { j as u } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as h, useEffect as v } from "react";
import "../core/_Tabs.js";
const x = () => Promise.all([
  customElements.whenDefined("ag-tabs"),
  customElements.whenDefined("ag-tab"),
  customElements.whenDefined("ag-tab-panel")
]), R = ({
  activation: n = "manual",
  activeTab: e = 0,
  orientation: s = "horizontal",
  ariaLabel: r,
  ariaLabelledBy: a,
  onTabChange: o,
  children: d,
  className: f,
  id: m,
  ...b
}) => {
  const l = h(null);
  return v(() => {
    const p = async () => {
      if (await x(), !l.current) return;
      const t = l.current;
      n !== void 0 && (t.activation = n), e !== void 0 && (t.activeTab = e), s !== void 0 && (t.orientation = s), r !== void 0 && (t.ariaLabel = r), a !== void 0 && (t.ariaLabelledBy = a);
      const c = (E) => {
        const g = E.detail;
        o?.(g);
      };
      return t.addEventListener("tab-change", c), () => {
        t.removeEventListener("tab-change", c);
      };
    };
    let i;
    return p().then((t) => {
      i = t;
    }), () => i?.();
  }, [o, n, e, s, r, a]), /* @__PURE__ */ u.jsx(
    "ag-tabs",
    {
      ref: l,
      activation: n,
      "active-tab": e,
      orientation: s,
      "aria-label": r,
      "aria-labelledby": a,
      className: f,
      id: m,
      ...b,
      children: d
    }
  );
}, P = ({
  panel: n,
  disabled: e = !1,
  children: s,
  className: r,
  id: a,
  ...o
}) => /* @__PURE__ */ u.jsx(
  "ag-tab",
  {
    slot: "tab",
    panel: n,
    disabled: e || void 0,
    "aria-disabled": e ? "true" : void 0,
    className: r,
    id: a,
    ...o,
    children: s
  }
), z = ({
  id: n,
  children: e,
  className: s,
  ...r
}) => /* @__PURE__ */ u.jsx(
  "ag-tab-panel",
  {
    slot: "panel",
    id: n,
    className: s,
    ...r,
    children: e
  }
);
export {
  R as ReactTabs,
  P as Tab,
  z as TabPanel
};
