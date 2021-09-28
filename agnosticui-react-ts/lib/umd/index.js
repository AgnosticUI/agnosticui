(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Button"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ButtonGroup = exports.Button = void 0;
    var Button_1 = require("./Button");
    Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
    Object.defineProperty(exports, "ButtonGroup", { enumerable: true, get: function () { return Button_1.ButtonGroup; } });
});
//# sourceMappingURL=index.js.map