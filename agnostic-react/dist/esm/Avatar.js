import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './avatar.module.css';
export var AvatarGroup = function (_a) {
    var children = _a.children;
    return (_jsx("div", __assign({ className: styles.avatarGroup }, { children: children }), void 0));
};
export var Avatar = function (_a) {
    var _b = _a.isRounded, isRounded = _b === void 0 ? false : _b, _c = _a.isSquare, isSquare = _c === void 0 ? false : _c, _d = _a.isTransparent, isTransparent = _d === void 0 ? false : _d, _e = _a.type, type = _e === void 0 ? '' : _e, _f = _a.size, size = _f === void 0 ? '' : _f, text = _a.text, imgUrl = _a.imgUrl, children = _a.children;
    // Type might be empty string so we only capitalize if it's truthy
    var typeCapitalized = type ? "" + type.slice(0, 1).toUpperCase() + type.slice(1) : '';
    var sizeCapitalized = size ? "" + size.slice(0, 1).toUpperCase() + size.slice(1) : '';
    var avatarClasses = [
        styles.avatar,
        isRounded ? styles.avatarRounded : '',
        isTransparent ? styles.avatarTransparent : '',
        isSquare ? styles.avatarSquare : '',
        type ? styles["avatar" + typeCapitalized] : '',
        size ? styles["avatar" + sizeCapitalized] : '',
    ]
        .filter(function (cls) { return cls; })
        .join(' ');
    // Use an empty alt attribute for any image that is decorative or not necessary
    // for understanding the content of the page.
    return (_jsxs("span", __assign({ className: avatarClasses, "data-text": text || null }, { children: [imgUrl && _jsx("img", { src: imgUrl, className: styles.avatarImage, alt: "" }, void 0), children] }), void 0));
};
//# sourceMappingURL=Avatar.js.map