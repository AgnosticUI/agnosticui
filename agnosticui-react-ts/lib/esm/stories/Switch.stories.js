import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Switch } from '../Switch';
var actionsData = {
    change: action('change'),
};
export default {
    title: 'AG—React/Switch',
    component: Switch,
    on: __assign({}, actionsData),
};
export var All = function () { return (_jsxs(_Fragment, { children: [_jsx(Switch, { id: "1", label: "Switch small", size: "small", onChange: action('change') }, void 0), _jsx(Switch, { id: "3", label: "Switch default", onChange: action('change') }, void 0), _jsx(Switch, { id: "4", label: "Switch large", size: "large", onChange: action('change') }, void 0), _jsx(Switch, { id: "5", label: "Switch prechecked", size: "large", isChecked: true, onChange: action('change') }, void 0), _jsx(Switch, { id: "6", label: "Switch disabled", size: "large", isChecked: true, isDisabled: true }, void 0), _jsx(Switch, { id: "7", label: "Switch action", size: "large", isAction: true, onChange: action('change') }, void 0), _jsx(Switch, { id: "8", label: "Switch bordered", size: "large", isBordered: true, onChange: action('change') }, void 0), _jsx(Switch, { id: "9", label: "Switch bordered action", size: "large", isAction: true, isBordered: true, onChange: action('change') }, void 0), _jsx(Switch, { id: "10", label: "Switch label on right", labelPosition: "right", onChange: action('change') }, void 0), _jsx(Switch, { id: "11", label: "Switch right bordered", labelPosition: "right", isBordered: true, onChange: action('change') }, void 0), _jsx(Switch, { id: "12", label: "Switch right action", labelPosition: "right", isAction: true, onChange: action('change') }, void 0), _jsx(Switch, { id: "13", label: "Switch right action bordered", labelPosition: "right", isAction: true, isBordered: true, onChange: action('change') }, void 0), _jsx(Switch, { id: "14", label: "Switch right action bordered disabled", isDisabled: true, labelPosition: "right", isAction: true, isBordered: true }, void 0)] }, void 0)); };
//# sourceMappingURL=Switch.stories.js.map