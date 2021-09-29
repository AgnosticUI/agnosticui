(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "react", "uuid", "./choice-input.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChoiceInput = exports.Choice = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var react_1 = require("react");
    var uuid_1 = require("uuid");
    var choice_input_module_css_1 = (0, tslib_1.__importDefault)(require("./choice-input.module.css"));
    var Choice = function (_a) {
        var id = _a.id, name = _a.name, value = _a.value, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.classes, classes = _c === void 0 ? '' : _c, _d = _a.type, type = _d === void 0 ? 'checkbox' : _d, _e = _a.checked, checked = _e === void 0 ? false : _e, onChange = _a.onChange;
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", (0, tslib_1.__assign)({ className: "screenreader-only", htmlFor: id }, { children: "Choice input " + name }), void 0), (0, jsx_runtime_1.jsx)("input", { id: id, className: classes, type: type, name: name, value: value, checked: checked, onChange: onChange, disabled: disabled }, void 0)] }, void 0));
    };
    exports.Choice = Choice;
    var ChoiceInput = function (_a) {
        var uniqueId = _a.uniqueId, _b = _a.isInline, isInline = _b === void 0 ? false : _b, legendLabel = _a.legendLabel, _c = _a.isFieldset, isFieldset = _c === void 0 ? true : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, options = _a.options, _e = _a.disabledOptions, disabledOptions = _e === void 0 ? [] : _e, _f = _a.checkedOptions, checkedOptions = _f === void 0 ? [] : _f, _g = _a.size, size = _g === void 0 ? '' : _g, _h = _a.type, type = _h === void 0 ? 'checkbox' : _h, onChange = _a.onChange;
        var precheckedOptions = Array.from(checkedOptions);
        var _j = (0, react_1.useState)(precheckedOptions), checked = _j[0], setChecked = _j[1];
        var handleChange = function (e) {
            var element = e.currentTarget;
            var value = element.value;
            if (type === 'checkbox') {
                var checkedItemsUpdated = void 0;
                if (checked.includes(value)) {
                    checkedItemsUpdated = checked.filter(function (item) { return item !== value; });
                    setChecked(checkedItemsUpdated);
                }
                else {
                    checkedItemsUpdated = (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], checked, true), [value], false);
                    setChecked(checkedItemsUpdated);
                    // Since useState is async we use the value directly here
                }
                if (onChange) {
                    onChange(checkedItemsUpdated);
                }
                // Type is radio. We ignore if they're trying to check the currently
                // checked radio
            }
            else if (!checked.includes(value)) {
                // Since you can only have one checked radio at a time, we simply
                // set to the new radio to be checked
                setChecked([value]);
                if (onChange) {
                    onChange([value]);
                }
            }
        };
        var legendClasses = function () {
            var klasses = [
                choice_input_module_css_1.default[type + "-legend"],
                // .screenreader-only is expected to be globally available via common.min.css
                isFieldset === false ? 'screenreader-only' : null,
            ];
            return klasses.join(' ');
        };
        var labelClasses = function () {
            var klasses = [
                type ? choice_input_module_css_1.default[type + "-label-wrap"] : '',
                isInline ? choice_input_module_css_1.default[type + "-label-wrap-inline"] : '',
            ];
            klasses = klasses.filter(function (klass) { return klass.length; });
            return klasses.join(' ');
        };
        var labelSpanClasses = function () {
            var klasses = [
                type ? choice_input_module_css_1.default[type + "-label"] : '',
                size ? choice_input_module_css_1.default[type + "-label-" + size] : '',
            ];
            klasses = klasses.filter(function (klass) { return klass.length; });
            return klasses.join(' ');
        };
        var fieldsetClasses = function () {
            var klasses = [
                type ? choice_input_module_css_1.default[type + "-group"] : '',
                // we only add the fieldset class for large (not small) e.g. radio|checkbox-group-large
                size === 'large' ? choice_input_module_css_1.default[type + "-group-" + size] : '',
                isFieldset === false ? choice_input_module_css_1.default[type + "-group-hidden"] : '',
            ];
            klasses = klasses.filter(function (klass) { return klass.length; });
            return klasses.join(' ');
        };
        var inputClasses = function () {
            var inputKlasses = [
                type ? choice_input_module_css_1.default["" + type] : '',
                size ? choice_input_module_css_1.default[type + "-" + size] : '',
                isDisabled ? 'disabled' : '',
            ];
            inputKlasses = inputKlasses.filter(function (klass) { return klass.length; });
            return inputKlasses.join(' ');
        };
        return ((0, jsx_runtime_1.jsxs)("fieldset", (0, tslib_1.__assign)({ className: fieldsetClasses() }, { children: [(0, jsx_runtime_1.jsx)("legend", (0, tslib_1.__assign)({ className: legendClasses() }, { children: legendLabel }), void 0), options.map(function (_a, i) {
                    var name = _a.name, value = _a.value, label = _a.label;
                    return ((0, jsx_runtime_1.jsxs)("label", (0, tslib_1.__assign)({ htmlFor: uniqueId + "-" + name + "-" + i, className: labelClasses() }, { children: [(0, jsx_runtime_1.jsx)(exports.Choice, { id: uniqueId + "-" + name + "-" + i, classes: inputClasses(), type: type, name: name, value: value, "aria-hidden": "true", disabled: isDisabled || disabledOptions.includes(value), checked: checked.includes(value), onChange: handleChange }, void 0), (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: labelSpanClasses() }, { children: label }), void 0)] }), (0, uuid_1.v4)()));
                })] }), void 0));
    };
    exports.ChoiceInput = ChoiceInput;
});
//# sourceMappingURL=ChoiceInput.js.map