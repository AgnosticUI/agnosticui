import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styles from './icon.module.css';
export var Icon = function (_a) {
    var _b = _a.isSkinned, isSkinned = _b === void 0 ? true : _b, _c = _a.type, type = _c === void 0 ? '' : _c, _d = _a.size, size = _d === void 0 ? '18' : _d, children = _a.children;
    // Type might be empty string so we only capitalize if it's truthy
    var typeCapitalized = type ? "" + type.slice(0, 1).toUpperCase() + type.slice(1) : '';
    var iconClasses = [
        isSkinned ? styles.icon : styles.iconBase,
        type ? styles["icon" + typeCapitalized] : '',
        size ? styles["icon" + size] : '',
    ]
        .filter(function (cls) { return cls; })
        .join(' ');
    return _jsx("span", __assign({ className: iconClasses }, { children: children }), void 0);
};
//# sourceMappingURL=Icon.js.map