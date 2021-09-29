import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '../Button';
// We can override some of the boilerplate button styles by passing the `css` prop.
import styles from './TabButtonCustom.module.css';
export var TabButtonCustom = function (_a) {
    var _b = _a.css, css = _b === void 0 ? '' : _b, _c = _a.index, index = _c === void 0 ? 0 : _c, _d = _a.selectedTab, selectedTab = _d === void 0 ? 0 : _d, onClick = _a.onClick, children = _a.children;
    return (_jsx(Button, __assign({ isBordered: true, onClick: function () { return onClick && onClick(index); }, role: "tab", "aria-selected": selectedTab === index, css: "\n      " + styles.customTabButton + " " + styles.active + " " + (css || '') + "\n    " }, { children: children }), "" + index));
};
//# sourceMappingURL=TabButtonCustomExample.js.map