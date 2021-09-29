(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "@storybook/addon-actions", "uuid", "../Input"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ErrorAndHelpText = exports.Textareas = exports.AllInputs = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    // eslint-disable-next-line import/no-extraneous-dependencies
    var addon_actions_1 = require("@storybook/addon-actions");
    var uuid_1 = require("uuid");
    var Input_1 = require("../Input");
    var actionsData = {
        blur: (0, addon_actions_1.action)('blur'),
        change: (0, addon_actions_1.action)('change'),
        focus: (0, addon_actions_1.action)('focus'),
    };
    exports.default = {
        title: 'AG—React/Input',
        component: Input_1.Input,
        on: (0, tslib_1.__assign)({}, actionsData),
    };
    var AllInputs = function () { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Default input", onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Inline input", isInline: true, onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Rounded input", isRounded: true, onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Underlined input", isUnderlined: true, onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Underlined with background input", isUnderlined: true, isUnderlinedWithBackground: true, onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Large input", size: "large", onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Small input", size: "small", onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Disabled", isDisabled: true }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), hasLeftAddon: true, addOnLeft: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", { children: "L" }, void 0) }, void 0), hasRightAddon: true, addOnRight: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", { children: "R" }, void 0) }, void 0), label: "Input with addons" }, void 0)] }, void 0)); };
    exports.AllInputs = AllInputs;
    var Textareas = function () { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Textarea", type: "textarea", onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Textarea small", type: "textarea", size: "small", rows: 10, cols: 5, onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur') }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Textarea large", type: "textarea", size: "large", onChange: (0, addon_actions_1.action)('change'), onFocus: (0, addon_actions_1.action)('focus'), onBlur: (0, addon_actions_1.action)('blur'), cols: 5, rows: 10 }, void 0)] }, void 0)); };
    exports.Textareas = Textareas;
    var ErrorAndHelpText = function () { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Help text input", helpText: "Some useful help text." }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Invalid input", invalidText: "This field has errors.", isInvalid: true }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { size: "small", uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Invalid small input", invalidText: "This field has errors.", isInvalid: true }, void 0), (0, jsx_runtime_1.jsx)(Input_1.Input, { size: "large", uniqueId: "myid-" + (0, uuid_1.v4)(), label: "Invalid large input", invalidText: "This field has errors.", isInvalid: true }, void 0)] }, void 0)); };
    exports.ErrorAndHelpText = ErrorAndHelpText;
});
//# sourceMappingURL=Input.stories.js.map