(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "../Header"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderSticky = exports.HeaderUnskinned = exports.HeaderAndNav = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var Header_1 = require("../Header");
    exports.default = {
        title: 'AG—React/Header',
        component: Header_1.Header,
    };
    var HeaderAndNav = function () { return ((0, jsx_runtime_1.jsxs)(Header_1.Header, (0, tslib_1.__assign)({ css: "custom-global-css-class" }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "LOGO" }), void 0), (0, jsx_runtime_1.jsxs)(Header_1.HeaderNav, { children: [(0, jsx_runtime_1.jsx)(Header_1.HeaderNavItem, { children: (0, jsx_runtime_1.jsx)("a", (0, tslib_1.__assign)({ style: { color: '#333333', textDecoration: 'none' }, href: "www.google.com" }, { children: "Home" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(Header_1.HeaderNavItem, { children: (0, jsx_runtime_1.jsx)("a", (0, tslib_1.__assign)({ style: { color: '#333333', textDecoration: 'none' }, href: "www.yahoo.com" }, { children: "Services" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(Header_1.HeaderNavItem, { children: (0, jsx_runtime_1.jsx)("a", (0, tslib_1.__assign)({ style: { color: '#333333', textDecoration: 'none' }, href: "www.aol.com" }, { children: "About" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(Header_1.HeaderNavItem, { children: (0, jsx_runtime_1.jsx)("a", (0, tslib_1.__assign)({ style: { color: '#333333', textDecoration: 'none' }, href: "www.bing.com" }, { children: "Contact" }), void 0) }, void 0)] }, void 0)] }), void 0)); };
    exports.HeaderAndNav = HeaderAndNav;
    var HeaderUnskinned = function () { return ((0, jsx_runtime_1.jsx)(Header_1.Header, (0, tslib_1.__assign)({ isSkinned: true }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "NO-Skinz" }), void 0), (0, jsx_runtime_1.jsx)(Header_1.HeaderNav, { children: (0, jsx_runtime_1.jsx)(Header_1.HeaderNavItem, { children: (0, jsx_runtime_1.jsx)("a", (0, tslib_1.__assign)({ style: { color: '#333333', textDecoration: 'none' }, href: "www.google.com" }, { children: "Not Skinned" }), void 0) }, void 0) }, void 0)] }, void 0) }), void 0)); };
    exports.HeaderUnskinned = HeaderUnskinned;
    var HeaderSticky = function () { return ((0, jsx_runtime_1.jsx)(Header_1.Header, (0, tslib_1.__assign)({ isSticky: true }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { padding: 24 } }, { children: "Logo" }), void 0), (0, jsx_runtime_1.jsx)(Header_1.HeaderNav, { children: (0, jsx_runtime_1.jsx)(Header_1.HeaderNavItem, { children: (0, jsx_runtime_1.jsx)("a", (0, tslib_1.__assign)({ style: { color: '#333333', textDecoration: 'none' }, href: "www.google.com" }, { children: "Sticky" }), void 0) }, void 0) }, void 0)] }, void 0) }), void 0)); };
    exports.HeaderSticky = HeaderSticky;
});
//# sourceMappingURL=Header.stories.js.map