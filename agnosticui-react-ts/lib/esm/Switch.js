import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './switch.module.css';
export var Switch = function (_a) {
    var id = _a.id, label = _a.label, _b = _a.labelPosition, labelPosition = _b === void 0 ? 'left' : _b, _c = _a.size, size = _c === void 0 ? '' : _c, _d = _a.isChecked, isChecked = _d === void 0 ? false : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.isBordered, isBordered = _f === void 0 ? false : _f, _g = _a.isAction, isAction = _g === void 0 ? false : _g, onChange = _a.onChange;
    var _h = useState(isChecked), checked = _h[0], setChecked = _h[1];
    var switchSpan = function () {
        var klasses = [
            styles.switch,
            isBordered ? styles['switch-border'] : '',
            isAction ? styles['switch-action'] : '',
            size ? styles["switch-" + size] : '',
        ];
        return klasses.filter(function (klass) { return klass.length; }).join(' ');
    };
    var switchContainer = function () {
        var klasses = [
            styles['switch-container'],
            labelPosition === 'right' ? styles['switch-right'] : '',
            isDisabled ? styles.disabled : '',
        ];
        return klasses.filter(function (klass) { return klass.length; }).join(' ');
    };
    var switchLabel = function () { return styles['switch-label']; };
    var switchInput = function () { return styles['switch-input']; };
    var handleClick = function (evt) {
        var el = evt.target;
        if (el.getAttribute('aria-checked') === 'true') {
            el.setAttribute('aria-checked', 'false');
            setChecked(false);
        }
        else {
            el.setAttribute('aria-checked', 'true');
            setChecked(true);
        }
    };
    var handleKeypress = function (evt) {
        var keyCode = evt.keyCode || evt.which;
        if (keyCode === 13) {
            evt.preventDefault();
            var target = evt.target;
            target.click();
        }
    };
    return (_jsxs("label", __assign({ className: switchContainer(), htmlFor: id }, { children: [labelPosition === 'left' && _jsx("span", __assign({ className: switchLabel() }, { children: label }), void 0), _jsx("input", { type: "checkbox", className: switchInput(), id: id, checked: checked, disabled: isDisabled, onChange: onChange, onClick: handleClick, onKeyPress: handleKeypress, role: "switch" }, void 0), _jsx("span", { className: switchSpan(), "aria-hidden": "true" }, void 0), labelPosition === 'right' && _jsx("span", __assign({ className: switchLabel() }, { children: label }), void 0)] }), void 0));
};
//# sourceMappingURL=Switch.js.map