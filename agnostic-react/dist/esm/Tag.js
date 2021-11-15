import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styles from './tag.module.css';
export var Tag = function (_a) {
    var _b = _a.isUppercase, isUppercase = _b === void 0 ? false : _b, _c = _a.type, type = _c === void 0 ? '' : _c, _d = _a.shape, shape = _d === void 0 ? '' : _d, children = _a.children;
    // Type might be empty string so we only capitalize if it's truthy
    var typeCapitalized = type ? "" + type.slice(0, 1).toUpperCase() + type.slice(1) : '';
    var shapeCapitalized = shape ? "" + shape.slice(0, 1).toUpperCase() + shape.slice(1) : '';
    var tagClasses = [
        styles.tag,
        type ? styles["tag" + typeCapitalized] : '',
        shape ? styles["tag" + shapeCapitalized] : '',
        isUppercase ? styles.tagUpper : '',
    ]
        .filter(function (cls) { return cls; })
        .join(' ');
    return _jsx("span", __assign({ className: tagClasses }, { children: children }), void 0);
};
//# sourceMappingURL=Tag.js.map