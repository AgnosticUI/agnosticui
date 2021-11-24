import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styles from './header.module.css';
export var HeaderNav = function (_a) {
    var _b = _a.css, css = _b === void 0 ? '' : _b, children = _a.children;
    var klasses = [styles.headerNav, css ? "" + css : ''];
    var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
    return (_jsx("nav", { children: _jsx("ul", __assign({ className: classes }, { children: children }), void 0) }, void 0));
};
export var HeaderNavItem = function (_a) {
    var _b = _a.css, css = _b === void 0 ? '' : _b, children = _a.children;
    var klasses = [styles.headerNavItem, css ? "" + css : ''];
    var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
    return _jsx("li", __assign({ className: classes }, { children: children }), void 0);
};
export var Header = function (_a) {
    var _b = _a.css, css = _b === void 0 ? '' : _b, _c = _a.isSticky, isSticky = _c === void 0 ? false : _c, _d = _a.isSkinned, isSkinned = _d === void 0 ? true : _d, _e = _a.isHeaderContentStart, isHeaderContentStart = _e === void 0 ? false : _e, _f = _a.isHeaderContentEnd, isHeaderContentEnd = _f === void 0 ? false : _f, children = _a.children;
    var klasses = [
        isSkinned ? styles.header : styles.headerBase,
        isHeaderContentStart ? styles.headerContentStart : '',
        isHeaderContentEnd ? styles.headerContentEnd : '',
        isSticky ? styles.sticky : '',
        css ? "" + css : '',
    ];
    var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
    return (_jsx("header", __assign({ className: classes }, { children: _jsx("div", __assign({ className: styles.headerContent }, { children: children }), void 0) }), void 0));
};
//# sourceMappingURL=Header.js.map