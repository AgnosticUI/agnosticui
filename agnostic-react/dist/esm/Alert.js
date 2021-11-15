import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './alert.module.css';
export var Alert = function (_a) {
    var _b = _a.isRounded, isRounded = _b === void 0 ? false : _b, _c = _a.isBorderAll, isBorderAll = _c === void 0 ? false : _c, _d = _a.isBorderLeft, isBorderLeft = _d === void 0 ? false : _d, _e = _a.isBorderRight, isBorderRight = _e === void 0 ? false : _e, _f = _a.isBorderTop, isBorderTop = _f === void 0 ? false : _f, _g = _a.isBorderBottom, isBorderBottom = _g === void 0 ? false : _g, _h = _a.isBlockEnd, isBlockEnd = _h === void 0 ? false : _h, _j = _a.type, type = _j === void 0 ? '' : _j, children = _a.children;
    // Type might be empty string so we only capitalize if it's truthy
    var typeCapitalized = type ? "" + type.slice(0, 1).toUpperCase() + type.slice(1) : '';
    var alertClasses = [
        styles.alert,
        type ? styles["alert" + typeCapitalized] : '',
        isBorderAll ? styles.alertBorderAll : '',
        isBorderLeft ? styles.alertBorderLeft : '',
        isBorderRight ? styles.alertBorderRight : '',
        isBorderTop ? styles.alertBorderTop : '',
        isBorderBottom ? styles.alertBorderBottom : '',
        isBlockEnd ? styles.alertBlockEnd : '',
        isRounded ? styles.alertRounded : '',
    ]
        .filter(function (cls) { return cls; })
        .join(' ');
    var svgClasses = type
        ? [styles["alert" + typeCapitalized + "Icon"], styles.alertIcon].join(' ')
        : styles.alertIcon;
    return (_jsxs("div", __assign({ className: alertClasses, role: "alert" }, { children: [_jsxs("svg", __assign({ className: svgClasses, xmlns: "http://www.w3.org/2000/svg", height: "24", viewBox: "0 0 24 24", width: "24" }, { children: [_jsx("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0), _jsx("path", { fill: "currentColor", d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }, void 0)] }), void 0), children] }), void 0));
};
//# sourceMappingURL=Alert.js.map