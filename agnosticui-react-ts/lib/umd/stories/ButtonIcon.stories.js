(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "../Button"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ButtonIcons = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var Button_1 = require("../Button");
    exports.default = {
        title: 'AG—React/ButtonIcons',
        component: Button_1.Button,
    };
    var SampleSvgIcon = function () {
        return ((0, jsx_runtime_1.jsxs)("svg", (0, tslib_1.__assign)({ className: "btn-icon", role: "img", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" }, { children: [(0, jsx_runtime_1.jsx)("desc", { children: "Example icon graphic" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02\n  5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7\n  1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81\n  0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16\n  5.06 14.08 4 12 4z" }, void 0)] }), void 0));
    };
    var ButtonIcons = function () { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(Button_1.Button, (0, tslib_1.__assign)({ mode: "primary" }, { children: [(0, jsx_runtime_1.jsx)(SampleSvgIcon, {}, void 0), "Icon Left"] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { marginTop: 16 } }, { children: (0, jsx_runtime_1.jsxs)(Button_1.Button, (0, tslib_1.__assign)({ mode: "primary" }, { children: ["Icon Right", (0, jsx_runtime_1.jsx)(SampleSvgIcon, {}, void 0)] }), void 0) }), void 0)] }, void 0)); };
    exports.ButtonIcons = ButtonIcons;
});
//# sourceMappingURL=ButtonIcon.stories.js.map