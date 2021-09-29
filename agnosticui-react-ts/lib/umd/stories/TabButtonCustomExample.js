(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "../Button", "./TabButtonCustom.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TabButtonCustom = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var Button_1 = require("../Button");
    // We can override some of the boilerplate button styles by passing the `css` prop.
    var TabButtonCustom_module_css_1 = (0, tslib_1.__importDefault)(require("./TabButtonCustom.module.css"));
    var TabButtonCustom = function (_a) {
        var _b = _a.css, css = _b === void 0 ? '' : _b, _c = _a.index, index = _c === void 0 ? 0 : _c, _d = _a.selectedTab, selectedTab = _d === void 0 ? 0 : _d, onClick = _a.onClick, children = _a.children;
        return ((0, jsx_runtime_1.jsx)(Button_1.Button, (0, tslib_1.__assign)({ isBordered: true, onClick: function () { return onClick && onClick(index); }, role: "tab", "aria-selected": selectedTab === index, css: "\n      " + TabButtonCustom_module_css_1.default.customTabButton + " " + TabButtonCustom_module_css_1.default.active + " " + (css || '') + "\n    " }, { children: children }), "" + index));
    };
    exports.TabButtonCustom = TabButtonCustom;
});
//# sourceMappingURL=TabButtonCustomExample.js.map