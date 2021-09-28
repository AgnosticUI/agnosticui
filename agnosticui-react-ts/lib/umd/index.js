(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Button", "./Card", "./ChoiceInput", "./Header"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderNavItem = exports.HeaderNav = exports.Header = exports.ChoiceInput = exports.Card = exports.ButtonGroup = exports.Button = void 0;
    var Button_1 = require("./Button");
    Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
    Object.defineProperty(exports, "ButtonGroup", { enumerable: true, get: function () { return Button_1.ButtonGroup; } });
    var Card_1 = require("./Card");
    Object.defineProperty(exports, "Card", { enumerable: true, get: function () { return Card_1.Card; } });
    var ChoiceInput_1 = require("./ChoiceInput");
    Object.defineProperty(exports, "ChoiceInput", { enumerable: true, get: function () { return ChoiceInput_1.ChoiceInput; } });
    var Header_1 = require("./Header");
    Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.Header; } });
    Object.defineProperty(exports, "HeaderNav", { enumerable: true, get: function () { return Header_1.HeaderNav; } });
    Object.defineProperty(exports, "HeaderNavItem", { enumerable: true, get: function () { return Header_1.HeaderNavItem; } });
});
//# sourceMappingURL=index.js.map