import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './input.module.css';
export var Input = function (_a) {
    var id = _a.id, label = _a.label, _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.labelCss, labelCss = _c === void 0 ? '' : _c, _d = _a.placeholder, placeholder = _d === void 0 ? '' : _d, _e = _a.helpText, helpText = _e === void 0 ? '' : _e, _f = _a.invalidText, invalidText = _f === void 0 ? '' : _f, _g = _a.addOnLeft, addOnLeft = _g === void 0 ? '' : _g, _h = _a.addOnRight, addOnRight = _h === void 0 ? '' : _h, _j = _a.hasLeftAddon, hasLeftAddon = _j === void 0 ? false : _j, _k = _a.hasRightAddon, hasRightAddon = _k === void 0 ? false : _k, _l = _a.css, css = _l === void 0 ? '' : _l, _m = _a.isInvalid, isInvalid = _m === void 0 ? false : _m, _o = _a.isRounded, isRounded = _o === void 0 ? false : _o, _p = _a.isDisabled, isDisabled = _p === void 0 ? false : _p, _q = _a.isInline, isInline = _q === void 0 ? false : _q, _r = _a.isSkinned, isSkinned = _r === void 0 ? true : _r, _s = _a.isUnderlined, isUnderlined = _s === void 0 ? false : _s, _t = _a.isUnderlinedWithBackground, isUnderlinedWithBackground = _t === void 0 ? false : _t, _u = _a.defaultValue, defaultValue = _u === void 0 ? '' : _u, _v = _a.type, type = _v === void 0 ? 'text' : _v, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, rows = _a.rows, cols = _a.cols, rest = __rest(_a, ["id", "label", "size", "labelCss", "placeholder", "helpText", "invalidText", "addOnLeft", "addOnRight", "hasLeftAddon", "hasRightAddon", "css", "isInvalid", "isRounded", "isDisabled", "isInline", "isSkinned", "isUnderlined", "isUnderlinedWithBackground", "defaultValue", "type", "onChange", "onFocus", "onBlur", "rows", "cols"]);
    var capitalize = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };
    var inputClasses = [
        isSkinned ? styles.input : styles.inputBase,
        isRounded ? styles.rounded : '',
        isUnderlined ? styles.underlined : '',
        isDisabled ? styles.disabled : '',
        isInline ? styles.inputInline : '',
        hasLeftAddon ? styles.inputHasLeftAddon : '',
        hasRightAddon ? styles.inputHasRightAddon : '',
        isInvalid ? styles.invalid : '',
        isUnderlinedWithBackground ? styles.underlinedWithBackground : '',
        css ? "" + css : '',
        size ? styles["input" + capitalize(size)] : '',
    ];
    var inputClassesJoined = inputClasses
        .filter(function (klass) { return (klass ? klass.length : null); })
        .join(' ');
    var labelClasses = [
        styles.label,
        isInvalid ? styles.labelError : '',
        isInline ? styles.labelInline : '',
        size ? styles["label" + capitalize(size)] : '',
        labelCss,
    ];
    var labelClassesJoined = labelClasses.filter(function (klass) { return klass.length; }).join(' ');
    var invalidClasses = size ? styles["fieldError" + capitalize(size)] : styles.fieldError;
    var helpClasses = size ? styles["fieldHelp" + capitalize(size)] : styles.fieldHelp;
    var addonContainerClasses = styles.inputAddonContainer;
    var renderInput = function () { return (_jsx("input", __assign({ id: id, name: id, defaultValue: defaultValue, type: type, disabled: isDisabled, className: inputClassesJoined, placeholder: placeholder, onChange: onChange, onFocus: onFocus, onBlur: onBlur }, rest), void 0)); };
    var renderAddonsOrInputs = function () {
        if (hasLeftAddon || hasRightAddon) {
            return (_jsxs("div", __assign({ className: addonContainerClasses }, { children: [addOnLeft && _jsx("div", __assign({ className: styles.leftAddon }, { children: addOnLeft }), void 0), renderInput(), addOnRight && _jsx("div", __assign({ className: styles.rightAddon }, { children: addOnRight }), void 0)] }), void 0));
        }
        return renderInput();
    };
    return (_jsxs("div", __assign({ className: "w-100" }, { children: [_jsx("label", __assign({ className: labelClassesJoined, htmlFor: id }, { children: label }), void 0), type === 'textarea' ? (_jsx("textarea", { id: id, name: id, placeholder: placeholder, defaultValue: defaultValue, className: inputClassesJoined, disabled: isDisabled, onChange: onChange, onFocus: onFocus, onBlur: onBlur, rows: rows, cols: cols }, void 0)) : (renderAddonsOrInputs()), isInvalid && (_jsx("span", __assign({ role: "status", "aria-live": "polite", className: invalidClasses }, { children: invalidText }), void 0)), helpText && _jsx("span", __assign({ className: helpClasses }, { children: helpText }), void 0)] }), void 0));
};
//# sourceMappingURL=Input.js.map