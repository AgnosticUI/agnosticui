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
export var All = function () { return (_jsxs(_Fragment, { children: [_jsx(ChoiceInput, { uniqueId: "1", type: "checkbox", options: reusableOptions, legendLabel: "Checkbox legend", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "2", isDisabled: true, type: "checkbox", options: reusableOptions, legendLabel: "Checkbox disabled", onChange: action('change') }, void 0), _jsx(ChoiceInput, { uniqueId: "3", disabledOptions: disabledOptions, type: "checkbox", options: reusableOptions, legendLabel: "Checkbox specific options disabled", onChange: action('change') }, void 0)] }, void 0)); };
//# sourceMappingURL=ChoiceInput.stories.js.map