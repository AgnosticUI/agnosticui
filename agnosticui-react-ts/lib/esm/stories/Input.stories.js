import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../Input';
var actionsData = {
    blur: action('blur'),
    change: action('change'),
    focus: action('focus'),
};
export default {
    title: 'AG—React/Input',
    component: Input,
    on: __assign({}, actionsData),
};
export var AllInputs = function () { return (_jsxs(_Fragment, { children: [_jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Default input", onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Inline input", isInline: true, onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Rounded input", isRounded: true, onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Underlined input", isUnderlined: true, onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Underlined with background input", isUnderlined: true, isUnderlinedWithBackground: true, onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Large input", size: "large", onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Small input", size: "small", onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Disabled", isDisabled: true }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), hasLeftAddon: true, addOnLeft: _jsx("div", { children: _jsx("span", { children: "L" }, void 0) }, void 0), hasRightAddon: true, addOnRight: _jsx("div", { children: _jsx("span", { children: "R" }, void 0) }, void 0), label: "Input with addons" }, void 0)] }, void 0)); };
export var Textareas = function () { return (_jsxs(_Fragment, { children: [_jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Textarea", type: "textarea", onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Textarea small", type: "textarea", size: "small", rows: 10, cols: 5, onChange: action('change'), onFocus: action('focus'), onBlur: action('blur') }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Textarea large", type: "textarea", size: "large", onChange: action('change'), onFocus: action('focus'), onBlur: action('blur'), cols: 5, rows: 10 }, void 0)] }, void 0)); };
export var ErrorAndHelpText = function () { return (_jsxs(_Fragment, { children: [_jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Help text input", helpText: "Some useful help text." }, void 0), _jsx(Input, { uniqueId: "myid-" + uuidv4(), label: "Invalid input", invalidText: "This field has errors.", isInvalid: true }, void 0), _jsx(Input, { size: "small", uniqueId: "myid-" + uuidv4(), label: "Invalid small input", invalidText: "This field has errors.", isInvalid: true }, void 0), _jsx(Input, { size: "large", uniqueId: "myid-" + uuidv4(), label: "Invalid large input", invalidText: "This field has errors.", isInvalid: true }, void 0)] }, void 0)); };
//# sourceMappingURL=Input.stories.js.map