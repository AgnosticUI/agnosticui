(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "@storybook/addon-actions", "../ChoiceInput"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.All = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    // eslint-disable-next-line import/no-extraneous-dependencies
    var addon_actions_1 = require("@storybook/addon-actions");
    var ChoiceInput_1 = require("../ChoiceInput");
    var actionsData = {
        change: (0, addon_actions_1.action)('change'),
    };
    exports.default = {
        title: 'AG—React/ChoiceInput',
        component: ChoiceInput_1.ChoiceInput,
        on: (0, tslib_1.__assign)({}, actionsData),
    };
    var reusableOptions = [
        {
            name: 'frequency',
            value: 'daily',
            label: 'Daily',
        },
        {
            name: 'frequency',
            value: 'weekly',
            label: 'Weekly',
        },
        {
            name: 'frequency',
            value: 'monthly',
            label: 'Monthly',
        },
    ];
    var disabledOptions = ['weekly', 'monthly'];
    var All = function () { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "1", type: "checkbox", options: reusableOptions, legendLabel: "Checkbox legend", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "2", isDisabled: true, type: "checkbox", options: reusableOptions, legendLabel: "Checkbox disabled", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "3", disabledOptions: disabledOptions, type: "checkbox", options: reusableOptions, legendLabel: "Checkbox specific options disabled", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "4", type: "checkbox", isFieldset: false, options: reusableOptions, legendLabel: "Checkbox fieldset hidden", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "5", type: "checkbox", isInline: true, options: reusableOptions, legendLabel: "Checkbox inline", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "6", type: "checkbox", isInline: true, size: "small", options: reusableOptions, legendLabel: "Checkbox small", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "7", type: "checkbox", isInline: true, size: "large", options: reusableOptions, legendLabel: "Checkbox large", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "8", type: "checkbox", isInline: true, size: "large", checkedOptions: ['daily', 'weekly'], options: reusableOptions, legendLabel: "Checkbox prechecked options", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "9", type: "radio", options: reusableOptions, legendLabel: "Radio legend", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "10", isDisabled: true, type: "radio", options: reusableOptions, legendLabel: "Radio disabled", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "11", disabledOptions: ['two'], type: "radio", options: [
                    {
                        name: 'numbers',
                        value: 'one',
                        label: 'one',
                    },
                    {
                        name: 'numbers',
                        value: 'two',
                        label: 'two',
                    },
                    {
                        name: 'numbers',
                        value: 'three',
                        label: 'three',
                    },
                ], legendLabel: "Radio specific options disabled", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "12", type: "radio", isFieldset: false, options: [
                    {
                        name: 'es',
                        value: 'uno',
                        label: 'uno',
                    },
                    {
                        name: 'es',
                        value: 'dos',
                        label: 'dos',
                    },
                    {
                        name: 'es',
                        value: 'tres',
                        label: 'tres',
                    },
                ], legendLabel: "Radio fieldset hidden", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "13", type: "radio", isInline: true, options: [
                    {
                        name: 'colors',
                        value: 'blue',
                        label: 'Blue',
                    },
                    {
                        name: 'colors',
                        value: 'red',
                        label: 'Red',
                    },
                    {
                        name: 'colors',
                        value: 'silver',
                        label: 'Silver',
                    },
                ], legendLabel: "Radio inline", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "14", type: "radio", isInline: true, size: "small", options: [
                    {
                        name: 'shape',
                        value: 'square',
                        label: 'Square',
                    },
                    {
                        name: 'shape',
                        value: 'circle',
                        label: 'Circle',
                    },
                ], legendLabel: "Radio small", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "15", type: "radio", isInline: true, size: "large", options: [
                    {
                        name: 'bands',
                        value: 'bonjovi',
                        label: 'Bon Jovi',
                    },
                    {
                        name: 'bands',
                        value: 'stones',
                        label: 'Rolling Stones',
                    },
                    {
                        name: 'bands',
                        value: 'isleybros',
                        label: 'Isley Brothers',
                    },
                ], legendLabel: "Radio large", onChange: (0, addon_actions_1.action)('change') }, void 0), (0, jsx_runtime_1.jsx)(ChoiceInput_1.ChoiceInput, { uniqueId: "16", type: "radio", isInline: true, size: "large", checkedOptions: ['charlie'], options: [
                    {
                        name: 'solo',
                        value: 'stevie',
                        label: 'Stevie Wonder',
                    },
                    {
                        name: 'solo',
                        value: 'charlie',
                        label: 'Charlie Wilson',
                    },
                    {
                        name: 'solo',
                        value: 'whitney',
                        label: 'Whitney Houston',
                    },
                ], legendLabel: "Radio prechecked option", onChange: (0, addon_actions_1.action)('change') }, void 0)] }, void 0)); };
    exports.All = All;
});
//# sourceMappingURL=ChoiceInput.stories.js.map