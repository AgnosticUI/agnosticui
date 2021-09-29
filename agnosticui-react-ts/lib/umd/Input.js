(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "./input.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Input = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var input_module_css_1 = (0, tslib_1.__importDefault)(require("./input.module.css"));
    var Input = function (_a) {
        var uniqueId = _a.uniqueId, label = _a.label, _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.labelCss, labelCss = _c === void 0 ? '' : _c, _d = _a.placeholder, placeholder = _d === void 0 ? '' : _d, _e = _a.helpText, helpText = _e === void 0 ? '' : _e, _f = _a.invalidText, invalidText = _f === void 0 ? '' : _f, _g = _a.addOnLeft, addOnLeft = _g === void 0 ? '' : _g, _h = _a.addOnRight, addOnRight = _h === void 0 ? '' : _h, _j = _a.hasLeftAddon, hasLeftAddon = _j === void 0 ? false : _j, _k = _a.hasRightAddon, hasRightAddon = _k === void 0 ? false : _k, _l = _a.inputCss, inputCss = _l === void 0 ? '' : _l, _m = _a.isInvalid, isInvalid = _m === void 0 ? false : _m, _o = _a.isRounded, isRounded = _o === void 0 ? false : _o, _p = _a.isDisabled, isDisabled = _p === void 0 ? false : _p, _q = _a.isInline, isInline = _q === void 0 ? false : _q, _r = _a.isSkinned, isSkinned = _r === void 0 ? true : _r, _s = _a.isUnderlined, isUnderlined = _s === void 0 ? false : _s, _t = _a.isUnderlinedWithBackground, isUnderlinedWithBackground = _t === void 0 ? false : _t, _u = _a.defaultValue, defaultValue = _u === void 0 ? '' : _u, _v = _a.type, type = _v === void 0 ? 'text' : _v, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, rows = _a.rows, cols = _a.cols, rest = (0, tslib_1.__rest)(_a, ["uniqueId", "label", "size", "labelCss", "placeholder", "helpText", "invalidText", "addOnLeft", "addOnRight", "hasLeftAddon", "hasRightAddon", "inputCss", "isInvalid", "isRounded", "isDisabled", "isInline", "isSkinned", "isUnderlined", "isUnderlinedWithBackground", "defaultValue", "type", "onChange", "onFocus", "onBlur", "rows", "cols"]);
        var capitalize = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };
        var inputClasses = [
            isSkinned ? input_module_css_1.default.input : input_module_css_1.default.inputBase,
            isRounded ? input_module_css_1.default.rounded : '',
            isUnderlined ? input_module_css_1.default.underlined : '',
            isDisabled ? input_module_css_1.default.disabled : '',
            isInline ? input_module_css_1.default.inputInline : '',
            hasLeftAddon ? input_module_css_1.default.inputHasLeftAddon : '',
            hasRightAddon ? input_module_css_1.default.inputHasRightAddon : '',
            isInvalid ? input_module_css_1.default.invalid : '',
            isUnderlinedWithBackground ? input_module_css_1.default.underlinedWithBackground : '',
            inputCss ? "" + inputCss : '',
            size ? input_module_css_1.default["input" + capitalize(size)] : '',
        ];
        var inputClassesJoined = inputClasses
            .filter(function (klass) { return (klass ? klass.length : null); })
            .join(' ');
        var labelClasses = [
            input_module_css_1.default.label,
            isInvalid ? input_module_css_1.default.labelError : '',
            isInline ? input_module_css_1.default.labelInline : '',
            size ? input_module_css_1.default["label" + capitalize(size)] : '',
            labelCss,
        ];
        var labelClassesJoined = labelClasses.filter(function (klass) { return klass.length; }).join(' ');
        var invalidClasses = size ? input_module_css_1.default["fieldError" + capitalize(size)] : input_module_css_1.default.fieldError;
        var helpClasses = size ? input_module_css_1.default["fieldHelp" + capitalize(size)] : input_module_css_1.default.fieldHelp;
        var addonContainerClasses = input_module_css_1.default.inputAddonContainer;
        var renderInput = function () { return ((0, jsx_runtime_1.jsx)("input", (0, tslib_1.__assign)({ id: uniqueId, name: uniqueId, defaultValue: defaultValue, type: type, disabled: isDisabled, className: inputClassesJoined, placeholder: placeholder, onChange: onChange, onFocus: onFocus, onBlur: onBlur }, rest), void 0)); };
        var renderAddonsOrInputs = function () {
            if (hasLeftAddon || hasRightAddon) {
                return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: addonContainerClasses }, { children: [addOnLeft && (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: input_module_css_1.default.leftAddon }, { children: addOnLeft }), void 0), renderInput(), addOnRight && (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: input_module_css_1.default.rightAddon }, { children: addOnRight }), void 0)] }), void 0));
            }
            return renderInput();
        };
        return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "width-full" }, { children: [(0, jsx_runtime_1.jsx)("label", (0, tslib_1.__assign)({ className: labelClassesJoined, htmlFor: uniqueId }, { children: label }), void 0), type === 'textarea' ? ((0, jsx_runtime_1.jsx)("textarea", { id: uniqueId, name: uniqueId, placeholder: placeholder, defaultValue: defaultValue, className: inputClassesJoined, disabled: isDisabled, onChange: onChange, onFocus: onFocus, onBlur: onBlur, rows: rows, cols: cols }, void 0)) : (renderAddonsOrInputs()), isInvalid && ((0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ role: "status", "aria-live": "polite", className: invalidClasses }, { children: invalidText }), void 0)), helpText && (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: helpClasses }, { children: helpText }), void 0)] }), void 0));
    };
    exports.Input = Input;
});
//# sourceMappingURL=Input.js.map