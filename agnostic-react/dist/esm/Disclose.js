import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './disclose.module.css';
export var Disclose = function (_a) {
    var title = _a.title, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, _c = _a.isBackground, isBackground = _c === void 0 ? false : _c, children = _a.children;
    var detailsClasses = [styles.disclose, isBackground ? styles.discloseBg : '']
        .filter(function (cl) { return cl; })
        .join(' ');
    return (_jsxs("details", __assign({ className: detailsClasses, open: isOpen }, { children: [_jsx("summary", __assign({ className: styles.discloseTitle }, { children: title }), void 0), _jsx("div", __assign({ className: styles.disclosePanel }, { children: children }), void 0)] }), void 0));
};
//# sourceMappingURL=Disclose.js.map