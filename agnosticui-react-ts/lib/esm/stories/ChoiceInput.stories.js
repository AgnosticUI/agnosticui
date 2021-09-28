import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { ChoiceInput } from '../ChoiceInput';
var actionsData = {
    change: action('change'),
};
export default {
    title: 'AG—React/ChoiceInput',
    component: ChoiceInput,
    on: __assign({}, actionsData),
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
export var All = function () { return (_jsxs(_Fragment, { children: [_jsx(ChoiceInput, { uniqueId: "1", type: "checkbox", options: reusableOptions, legendLabel: "Checkbox legend", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "2", isDisabled: true, type: "checkbox", options: reusableOptions, legendLabel: "Checkbox disabled", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "3", disabledOptions: disabledOptions, type: "checkbox", options: reusableOptions, legendLabel: "Checkbox specific options disabled", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "4", type: "checkbox", isFieldset: false, options: reusableOptions, legendLabel: "Checkbox fieldset hidden", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "5", type: "checkbox", isInline: true, options: reusableOptions, legendLabel: "Checkbox inline", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "6", type: "checkbox", isInline: true, size: "small", options: reusableOptions, legendLabel: "Checkbox small", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "7", type: "checkbox", isInline: true, size: "large", options: reusableOptions, legendLabel: "Checkbox large", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "8", type: "checkbox", isInline: true, size: "large", checkedOptions: ['daily', 'weekly'], options: reusableOptions, legendLabel: "Checkbox prechecked options", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "9", type: "radio", options: reusableOptions, legendLabel: "Radio legend", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "10", isDisabled: true, type: "radio", options: reusableOptions, legendLabel: "Radio disabled", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "11", disabledOptions: ['two'], type: "radio", options: [
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
            ], legendLabel: "Radio specific options disabled", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "12", type: "radio", isFieldset: false, options: [
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
            ], legendLabel: "Radio fieldset hidden", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "13", type: "radio", isInline: true, options: [
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
            ], legendLabel: "Radio inline", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "14", type: "radio", isInline: true, size: "small", options: [
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
            ], legendLabel: "Radio small", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "15", type: "radio", isInline: true, size: "large", options: [
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
            ], legendLabel: "Radio large", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "16", type: "radio", isInline: true, size: "large", checkedOptions: ['charlie'], options: [
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
            ], legendLabel: "Radio prechecked option", onChange: action('change') }, void 0)] }, void 0)); };
//# sourceMappingURL=ChoiceInput.stories.js.map