(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "./header.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Header = exports.HeaderNavItem = exports.HeaderNav = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var header_module_css_1 = (0, tslib_1.__importDefault)(require("./header.module.css"));
    var HeaderNav = function (_a) {
        var _b = _a.css, css = _b === void 0 ? '' : _b, children = _a.children;
        var klasses = [header_module_css_1.default.headerNav, css ? "" + css : ''];
        var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
        return ((0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsx)("ul", (0, tslib_1.__assign)({ className: classes }, { children: children }), void 0) }, void 0));
    };
    exports.HeaderNav = HeaderNav;
    var HeaderNavItem = function (_a) {
        var _b = _a.css, css = _b === void 0 ? '' : _b, children = _a.children;
        var klasses = [header_module_css_1.default.headerNavItem, css ? "" + css : ''];
        var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
        return (0, jsx_runtime_1.jsx)("li", (0, tslib_1.__assign)({ className: classes }, { children: children }), void 0);
    };
    exports.HeaderNavItem = HeaderNavItem;
    var Header = function (_a) {
        var _b = _a.css, css = _b === void 0 ? '' : _b, _c = _a.isSticky, isSticky = _c === void 0 ? false : _c, _d = _a.isSkinned, isSkinned = _d === void 0 ? true : _d, children = _a.children;
        var klasses = [
            isSkinned ? header_module_css_1.default.header : header_module_css_1.default.headerBase,
            isSticky ? header_module_css_1.default.sticky : '',
            css ? "" + css : '',
        ];
        var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
        return ((0, jsx_runtime_1.jsx)("header", (0, tslib_1.__assign)({ className: classes }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: header_module_css_1.default.headerContent }, { children: children }), void 0) }), void 0));
    };
    exports.Header = Header;
});
//# sourceMappingURL=Header.js.map