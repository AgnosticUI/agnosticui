(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "../Tabs", "./TabButtonCustomExample", "./TabButtonCustom.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomSVGTabButtons = exports.CustomButtonsExample = exports.Borderless = exports.Jumbo = exports.Large = exports.Default = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var Tabs_1 = require("../Tabs");
    var TabButtonCustomExample_1 = require("./TabButtonCustomExample");
    var TabButtonCustom_module_css_1 = (0, tslib_1.__importDefault)(require("./TabButtonCustom.module.css"));
    exports.default = {
        title: 'AG—React/Tabs',
        component: Tabs_1.Tabs,
    };
    var buttons = [
        (0, jsx_runtime_1.jsx)(Tabs_1.TabButton, { children: "Tab 1" }, 1),
        (0, jsx_runtime_1.jsx)(Tabs_1.TabButton, { children: "Tab 2" }, 2),
        (0, jsx_runtime_1.jsx)(Tabs_1.TabButton, { children: "Tab 3" }, 3),
    ];
    var panels = [
        (0, jsx_runtime_1.jsx)(Tabs_1.TabPanel, (0, tslib_1.__assign)({ title: "Tab 1" }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Tab 1 content" }, void 0) }), 1),
        (0, jsx_runtime_1.jsx)(Tabs_1.TabPanel, (0, tslib_1.__assign)({ title: "Tab 2" }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Tab 2 content" }, void 0) }), 2),
        (0, jsx_runtime_1.jsx)(Tabs_1.TabPanel, (0, tslib_1.__assign)({ title: "Tab 3" }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Tab 3 content" }, void 0) }), 3),
    ];
    var Default = function () { return (0, jsx_runtime_1.jsx)(Tabs_1.Tabs, { tabButtons: buttons, tabPanels: panels }, void 0); };
    exports.Default = Default;
    var Large = function () { return (0, jsx_runtime_1.jsx)(Tabs_1.Tabs, { size: "large", tabButtons: buttons, tabPanels: panels }, void 0); };
    exports.Large = Large;
    var Jumbo = function () { return (0, jsx_runtime_1.jsx)(Tabs_1.Tabs, { size: "jumbo", tabButtons: buttons, tabPanels: panels }, void 0); };
    exports.Jumbo = Jumbo;
    var Borderless = function () { return ((0, jsx_runtime_1.jsx)(Tabs_1.Tabs, { size: "large", isBorderless: true, tabButtons: buttons, tabPanels: panels }, void 0)); };
    exports.Borderless = Borderless;
    var customButtons = [
        (0, jsx_runtime_1.jsx)(TabButtonCustomExample_1.TabButtonCustom, { children: "Tab 1" }, 1),
        (0, jsx_runtime_1.jsx)(TabButtonCustomExample_1.TabButtonCustom, { children: "Tab 2" }, 2),
        (0, jsx_runtime_1.jsx)(TabButtonCustomExample_1.TabButtonCustom, { children: "Tab 3" }, 3),
    ];
    var CustomButtonsExample = function () { return ((0, jsx_runtime_1.jsx)(Tabs_1.Tabs, { isBorderless: true, tabButtons: customButtons, tabPanels: panels }, void 0)); };
    exports.CustomButtonsExample = CustomButtonsExample;
    var customExpandedButtons = [
        (0, jsx_runtime_1.jsx)(TabButtonCustomExample_1.TabButtonCustom, (0, tslib_1.__assign)({ index: 1, css: TabButtonCustom_module_css_1.default.reactButton }, { children: (0, jsx_runtime_1.jsx)("svg", (0, tslib_1.__assign)({ width: "96", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 841.9 595.3" }, { children: (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "#61DAFB" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "420.9", cy: "296.5", r: "45.7" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M520.5 78.1z" }, void 0)] }), void 0) }), void 0) }), 1),
        (0, jsx_runtime_1.jsx)(TabButtonCustomExample_1.TabButtonCustom, (0, tslib_1.__assign)({ index: 2, css: TabButtonCustom_module_css_1.default.vueButton }, { children: (0, jsx_runtime_1.jsxs)("svg", (0, tslib_1.__assign)({ width: "54", viewBox: "0 0 261.76 226.69", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z", fill: "#41b883" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z", fill: "#34495e" }, void 0)] }), void 0) }), 2),
        (0, jsx_runtime_1.jsx)(TabButtonCustomExample_1.TabButtonCustom, (0, tslib_1.__assign)({ index: 3, css: TabButtonCustom_module_css_1.default.angularButton }, { children: (0, jsx_runtime_1.jsxs)("svg", (0, tslib_1.__assign)({ width: "68", viewBox: "0 0 250 250" }, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#dd0031", d: "M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#c3002f", d: "M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z", fill: "#fff" }, void 0)] }), void 0) }), 3),
        (0, jsx_runtime_1.jsx)(TabButtonCustomExample_1.TabButtonCustom, (0, tslib_1.__assign)({ index: 4, css: TabButtonCustom_module_css_1.default.svelteButton }, { children: (0, jsx_runtime_1.jsxs)("svg", (0, tslib_1.__assign)({ width: "48", viewBox: "0 0 98.1 118" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5", fill: "#ff3e00" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5", fill: "#fff" }, void 0)] }), void 0) }), 4),
    ];
    var customPanels = (0, tslib_1.__spreadArray)([], panels, true);
    customPanels.push((0, jsx_runtime_1.jsx)(Tabs_1.TabPanel, (0, tslib_1.__assign)({ title: "Tab 4" }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Tab 4 content" }, void 0) }), 4));
    // styles={{ height: '100%' }}
    var CustomSVGTabButtons = function () { return ((0, jsx_runtime_1.jsx)(Tabs_1.Tabs, { isBorderless: true, tabButtons: customExpandedButtons, tabPanels: customPanels }, void 0)); };
    exports.CustomSVGTabButtons = CustomSVGTabButtons;
});
//# sourceMappingURL=Tabs.stories.js.map