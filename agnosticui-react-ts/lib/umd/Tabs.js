(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "react", "./tabs.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tabs = exports.TabButton = exports.TabPanel = exports.TabHeader = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var react_1 = require("react");
    var tabs_module_css_1 = (0, tslib_1.__importDefault)(require("./tabs.module.css"));
    var TabHeader = function (_a) {
        var _b = _a.isBorderless, isBorderless = _b === void 0 ? false : _b, children = _a.children;
        return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: tabs_module_css_1.default.tabList + " " + (isBorderless ? tabs_module_css_1.default.tabListBorderless : ''), role: "tablist", "aria-label": "Tabs" }, { children: children }), void 0));
    };
    exports.TabHeader = TabHeader;
    var TabPanel = function (_a) {
        var title = _a.title, children = _a.children;
        return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: tabs_module_css_1.default.pane, "aria-label": title, role: "tabpanel" }, { children: children }), void 0));
    };
    exports.TabPanel = TabPanel;
    var TabButton = function (_a) {
        var _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.isBorderless, isBorderless = _c === void 0 ? false : _c, _d = _a.index, index = _d === void 0 ? 0 : _d, _e = _a.selectedTab, selectedTab = _e === void 0 ? 0 : _e, onClick = _a.onClick, children = _a.children;
        var tabButtonClasses = function (isActive) {
            var klasses = [
                tabs_module_css_1.default.tabItem,
                tabs_module_css_1.default.tabButton,
                isActive ? tabs_module_css_1.default.active : '',
                isBorderless ? tabs_module_css_1.default.tabButtonBorderless : '',
                size === 'large' ? tabs_module_css_1.default.tabButtonLarge : '',
                size === 'jumbo' ? tabs_module_css_1.default.tabButtonJumbo : '',
            ];
            return klasses.filter(function (klass) { return klass.length; }).join(' ');
        };
        return ((0, jsx_runtime_1.jsx)("button", (0, tslib_1.__assign)({ onClick: function () { return onClick && onClick(index); }, className: tabButtonClasses(selectedTab === index), role: "tab", "aria-selected": selectedTab === index }, { children: children }), "" + index));
    };
    exports.TabButton = TabButton;
    var Tabs = function (_a) {
        var _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.isBorderless, isBorderless = _c === void 0 ? false : _c, tabButtons = _a.tabButtons, tabPanels = _a.tabPanels;
        var _d = (0, react_1.useState)(0), selectedTab = _d[0], setSelectedTab = _d[1];
        var selectTab = (0, react_1.useCallback)(function (index) {
            setSelectedTab(index);
        }, [setSelectedTab]);
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.TabHeader, (0, tslib_1.__assign)({ isBorderless: isBorderless }, { children: tabButtons.map(function (btn, i) { return (0, react_1.cloneElement)(btn, {
                        key: i,
                        title: btn.props.title,
                        size: size,
                        isBorderless: isBorderless,
                        index: i,
                        selectedTab: selectedTab,
                        onClick: selectTab,
                        children: btn.props.children,
                    }, btn.props.children); }) }), void 0), tabPanels[selectedTab]] }, void 0));
    };
    exports.Tabs = Tabs;
});
//# sourceMappingURL=Tabs.js.map