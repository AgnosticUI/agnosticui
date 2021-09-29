(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "@storybook/addon-actions", "../Switch"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.All = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    // eslint-disable-next-line import/no-extraneous-dependencies
    var addon_actions_1 = require("@storybook/addon-actions");
    var Switch_1 = require("../Switch");
    var actionsData = {
        change: (0, addon_actions_1.action)('change'),
    };
    exports.default = {
        title: 'AG—React/Switch',
        component: Switch_1.Switch,
        on: (0, tslib_1.__assign)({}, actionsData),
    };
    var All = function () { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "1", label: "Switch small", size: "small", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "3", label: "Switch default", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "4", label: "Switch large", size: "large", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "5", label: "Switch prechecked", size: "large", isChecked: true, onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "6", label: "Switch disabled", size: "large", isChecked: true, isDisabled: true }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "7", label: "Switch action", size: "large", isAction: true, onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "8", label: "Switch bordered", size: "large", isBordered: true, onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "9", label: "Switch bordered action", size: "large", isAction: true, isBordered: true, onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "10", label: "Switch label on right", labelPosition: "right", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "11", label: "Switch right bordered", labelPosition: "right", isBordered: true, onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "12", label: "Switch right action", labelPosition: "right", isAction: true, onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "13", label: "Switch right action bordered", labelPosition: "right", isAction: true, isBordered: true, onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "14", label: "Switch right action bordered disabled", isDisabled: true, labelPosition: "right", isAction: true, isBordered: true }, void 0)] }, void 0)); };
    exports.All = All;
});
//# sourceMappingURL=Switch.stories.js.map