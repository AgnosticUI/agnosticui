import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styles from './close.module.css';
export var Close = function (_a) {
    var _b = _a.size, size = _b === void 0 ? '' : _b;
    // Type might be empty string so we only capitalize if it's truthy
    var sizeCapitalized = size ? "" + size.slice(0, 1).toUpperCase() + size.slice(1) : '';
    var closeClasses = [styles.closeButton, size ? styles["closeButton" + sizeCapitalized] : '']
        .filter(function (cls) { return cls; })
        .join(' ');
    return (_jsx("button", __assign({ className: closeClasses, "aria-label": "Close" }, { children: _jsx("svg", __assign({ className: styles.close, viewBox: "0 0 24 24", "aria-hidden": "true" }, { children: _jsx("path", { fill: "currentColor", d: "M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z" }, void 0) }), void 0) }), void 0));
};
//# sourceMappingURL=Close.js.map