(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "react", "./switch.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Switch = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var react_1 = require("react");
    var switch_module_css_1 = (0, tslib_1.__importDefault)(require("./switch.module.css"));
    var Switch = function (_a) {
        var id = _a.id, label = _a.label, _b = _a.labelPosition, labelPosition = _b === void 0 ? 'left' : _b, _c = _a.size, size = _c === void 0 ? '' : _c, _d = _a.isChecked, isChecked = _d === void 0 ? false : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.isBordered, isBordered = _f === void 0 ? false : _f, _g = _a.isAction, isAction = _g === void 0 ? false : _g, onChange = _a.onChange;
        var _h = (0, react_1.useState)(isChecked), checked = _h[0], setChecked = _h[1];
        var switchSpan = function () {
            var klasses = [
                switch_module_css_1.default.switch,
                isBordered ? switch_module_css_1.default['switch-border'] : '',
                isAction ? switch_module_css_1.default['switch-action'] : '',
                size ? switch_module_css_1.default["switch-" + size] : '',
            ];
            return klasses.filter(function (klass) { return klass.length; }).join(' ');
        };
        var switchContainer = function () {
            var klasses = [
                switch_module_css_1.default['switch-container'],
                labelPosition === 'right' ? switch_module_css_1.default['switch-right'] : '',
                isDisabled ? switch_module_css_1.default.disabled : '',
            ];
            return klasses.filter(function (klass) { return klass.length; }).join(' ');
        };
        var switchLabel = function () { return switch_module_css_1.default['switch-label']; };
        var switchInput = function () { return switch_module_css_1.default['switch-input']; };
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
        return ((0, jsx_runtime_1.jsxs)("label", (0, tslib_1.__assign)({ className: switchContainer(), htmlFor: id }, { children: [labelPosition === 'left' && (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: switchLabel() }, { children: label }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: switchInput(), id: id, checked: checked, disabled: isDisabled, onChange: onChange, onClick: handleClick, onKeyPress: handleKeypress, role: "switch" }, void 0), (0, jsx_runtime_1.jsx)("span", { className: switchSpan(), "aria-hidden": "true" }, void 0), labelPosition === 'right' && (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: switchLabel() }, { children: label }), void 0)] }), void 0));
    };
    exports.Switch = Switch;
});
//# sourceMappingURL=Switch.js.map