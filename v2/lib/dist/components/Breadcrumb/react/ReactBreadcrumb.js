import { j as p } from "../../../jsx-runtime-OVHDjVDe.js";
import { useRef as E, useEffect as a } from "react";
import "../core/_Breadcrumb.js";
const v = () => Promise.all([
  customElements.whenDefined("ag-breadcrumb")
]), L = ({
  items: t,
  type: s = "default",
  ariaLabel: i = "Breadcrumb",
  onBreadcrumbClick: n,
  className: m,
  id: o,
  ...l
}) => {
  const e = E(null);
  return a(() => {
    const d = async () => {
      if (await v(), !e.current) return;
      const r = e.current, u = (b) => {
        const f = b.detail;
        n?.(f);
      };
      return r.addEventListener("breadcrumb-click", u), () => {
        r.removeEventListener("breadcrumb-click", u);
      };
    };
    let c;
    return d().then((r) => {
      c = r;
    }), () => c?.();
  }, [n]), a(() => {
    e.current && (e.current.items = t);
  }, [t]), /* @__PURE__ */ p.jsx(
    "ag-breadcrumb",
    {
      ref: e,
      type: s,
      "aria-label": i,
      className: m,
      id: o,
      ...l
    }
  );
};
export {
  L as ReactBreadcrumb
};
