import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '../Button';
export default {
    title: 'AG—React/ButtonIcons',
    component: Button,
};
var SampleSvgIcon = function () {
    return (_jsxs("svg", __assign({ className: "btn-icon", role: "img", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" }, { children: [_jsx("desc", { children: "Example icon graphic" }, void 0), _jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02\n  5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7\n  1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81\n  0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16\n  5.06 14.08 4 12 4z" }, void 0)] }), void 0));
};
export var ButtonIcons = function () { return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsxs(Button, __assign({ mode: "primary" }, { children: [_jsx(SampleSvgIcon, {}, void 0), "Icon Left"] }), void 0) }, void 0), _jsx("div", __assign({ style: { marginTop: 16 } }, { children: _jsxs(Button, __assign({ mode: "primary" }, { children: ["Icon Right", _jsx(SampleSvgIcon, {}, void 0)] }), void 0) }), void 0)] }, void 0)); };
//# sourceMappingURL=ButtonIcon.stories.js.map