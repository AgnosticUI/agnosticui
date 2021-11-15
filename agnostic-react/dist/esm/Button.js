import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styles from './button.module.css';
export var Button = function (_a) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? '' : _c, _d = _a.isSkinned, isSkinned = _d === void 0 ? true : _d, _e = _a.isBordered, isBordered = _e === void 0 ? false : _e, _f = _a.isRounded, isRounded = _f === void 0 ? false : _f, _g = _a.isCircle, isCircle = _g === void 0 ? false : _g, _h = _a.isDisabled, isDisabled = _h === void 0 ? false : _h, _j = _a.isRaised, isRaised = _j === void 0 ? false : _j, _k = _a.isBlock, isBlock = _k === void 0 ? false : _k, _l = _a.isBlank, isBlank = _l === void 0 ? false : _l, _m = _a.isLink, isLink = _m === void 0 ? false : _m, css = _a.css, _o = _a.type, type = _o === void 0 ? 'button' : _o, rest = __rest(_a, ["children", "mode", "size", "isSkinned", "isBordered", "isRounded", "isCircle", "isDisabled", "isRaised", "isBlock", "isBlank", "isLink", "css", "type"]);
    var klasses = [
        // By default, we provide both btn-base and btn-skin. However,
        // folks can opt-out by setting `isSkinned: false`, in which case
        // we will only include the base button styles so they can skin.
        isSkinned ? styles.btn : styles.btnBase,
        mode ? styles["" + mode] : '',
        size ? styles["" + size] : '',
        isBordered ? styles.bordered : '',
        isRounded ? styles.rounded : '',
        isCircle ? styles.circle : '',
        isDisabled ? styles.disabled : '',
        isRaised ? styles.raised : '',
        isBlock ? styles.block : '',
        isBlank ? styles.blank : '',
        isLink ? styles.link : '',
        css ? "" + css : '',
    ];
    var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
    return type === 'faux' ? (_jsx("div", __assign({ className: classes }, { children: children }), void 0)) : (_jsx("button", __assign({ type: type, className: classes, disabled: isDisabled }, rest, { children: children }), void 0));
};
export var ButtonGroup = function (_a) {
    var ariaLabel = _a.ariaLabel, children = _a.children, _b = _a.css, css = _b === void 0 ? '' : _b;
    var props = __assign({ className: styles.group + " " + css, role: 'group' }, (ariaLabel && { 'aria-label': ariaLabel }));
    return _jsx("div", __assign({}, props, { children: children }), void 0);
};
//# sourceMappingURL=Button.js.map