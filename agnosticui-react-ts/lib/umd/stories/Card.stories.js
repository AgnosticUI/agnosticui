(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "../Card"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.All = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var Card_1 = require("../Card");
    exports.default = {
        title: 'AG—React/Card',
        component: Card_1.Card,
    };
    var All = function () { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Card_1.Card, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Default" }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Card" }), void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(Card_1.Card, (0, tslib_1.__assign)({ isStacked: true }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Stacked" }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Card" }), void 0)] }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Card_1.Card, (0, tslib_1.__assign)({ isAnimated: true, isStacked: true }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Animated & Stacked" }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Card" }), void 0)] }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Card_1.Card, (0, tslib_1.__assign)({ isSkinned: false }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Base Card" }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "No Skin" }), void 0)] }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Card_1.Card, (0, tslib_1.__assign)({ css: "foo-bar" }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Custom CSS Class" }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Inspect to see foo-bar" }), void 0)] }, void 0) }), void 0)] }, void 0)); };
    exports.All = All;
});
//# sourceMappingURL=Card.stories.js.map