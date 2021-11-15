import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styles from './card.module.css';
export var Card = function (_a) {
    var _b = _a.isAnimated, isAnimated = _b === void 0 ? false : _b, _c = _a.isStacked, isStacked = _c === void 0 ? false : _c, _d = _a.isSkinned, isSkinned = _d === void 0 ? true : _d, _e = _a.css, css = _e === void 0 ? '' : _e, children = _a.children;
    var klasses = [
        isSkinned ? styles.card : styles.cardBase,
        isAnimated ? styles.cardAnimated : '',
        isStacked ? styles.cardStacked : '',
        css ? "" + css : '',
    ];
    var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
    return _jsx("div", __assign({ className: classes }, { children: children }), void 0);
};
//# sourceMappingURL=Card.js.map