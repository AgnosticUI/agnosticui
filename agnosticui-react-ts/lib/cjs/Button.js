"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = exports.Button = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var button_module_css_1 = (0, tslib_1.__importDefault)(require("./button.module.css"));
var Button = function (_a) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? '' : _c, _d = _a.isSkinned, isSkinned = _d === void 0 ? true : _d, _e = _a.isBordered, isBordered = _e === void 0 ? false : _e, _f = _a.isRounded, isRounded = _f === void 0 ? false : _f, _g = _a.isCircle, isCircle = _g === void 0 ? false : _g, _h = _a.isDisabled, isDisabled = _h === void 0 ? false : _h, _j = _a.isRaised, isRaised = _j === void 0 ? false : _j, _k = _a.isBlock, isBlock = _k === void 0 ? false : _k, _l = _a.isBlank, isBlank = _l === void 0 ? false : _l, css = _a.css, _m = _a.type, type = _m === void 0 ? 'button' : _m, rest = (0, tslib_1.__rest)(_a, ["children", "mode", "size", "isSkinned", "isBordered", "isRounded", "isCircle", "isDisabled", "isRaised", "isBlock", "isBlank", "css", "type"]);
    var klasses = [
        // By default, we provide both btn-base and btn-skin. However,
        // folks can opt-out by setting `isSkinned: false`, in which case
        // we will only include the base button styles so they can skin.
        isSkinned ? button_module_css_1.default.btn : button_module_css_1.default.btnBase,
        mode ? button_module_css_1.default["" + mode] : '',
        size ? button_module_css_1.default["" + size] : '',
        isBordered ? button_module_css_1.default.bordered : '',
        isRounded ? button_module_css_1.default.rounded : '',
        isCircle ? button_module_css_1.default.circle : '',
        isDisabled ? button_module_css_1.default.disabled : '',
        isRaised ? button_module_css_1.default.raised : '',
        isBlock ? button_module_css_1.default.block : '',
        isBlank ? button_module_css_1.default.blank : '',
        css ? "" + css : '',
    ];
    var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
    return type === 'faux' ? ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: classes }, { children: children }), void 0)) : ((0, jsx_runtime_1.jsx)("button", (0, tslib_1.__assign)({ type: type, className: classes, disabled: isDisabled }, rest, { children: children }), void 0));
};
exports.Button = Button;
var ButtonGroup = function (_a) {
    var ariaLabel = _a.ariaLabel, children = _a.children, css = _a.css;
    var props = (0, tslib_1.__assign)({ className: button_module_css_1.default.group + " " + (css ? css : ''), role: 'group' }, (ariaLabel && { 'aria-label': ariaLabel }));
    return (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({}, props, { children: children }), void 0);
};
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=Button.js.map