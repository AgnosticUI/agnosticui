(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "./card.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Card = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var card_module_css_1 = (0, tslib_1.__importDefault)(require("./card.module.css"));
    var Card = function (_a) {
        var _b = _a.isAnimated, isAnimated = _b === void 0 ? false : _b, _c = _a.isStacked, isStacked = _c === void 0 ? false : _c, _d = _a.isSkinned, isSkinned = _d === void 0 ? true : _d, _e = _a.css, css = _e === void 0 ? '' : _e, children = _a.children;
        var klasses = [
            isSkinned ? card_module_css_1.default.card : card_module_css_1.default.cardBase,
            isAnimated ? card_module_css_1.default.cardAnimated : '',
            isStacked ? card_module_css_1.default.cardStacked : '',
            css ? "" + css : '',
        ];
        var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
        return (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: classes }, { children: children }), void 0);
    };
    exports.Card = Card;
});
//# sourceMappingURL=Card.js.map