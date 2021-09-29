(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "react/jsx-runtime", "./progress.module.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Progress = void 0;
    var tslib_1 = require("tslib");
    var jsx_runtime_1 = require("react/jsx-runtime");
    var progress_module_css_1 = (0, tslib_1.__importDefault)(require("./progress.module.css"));
    var Progress = function (_a) {
        var _b = _a.value, value = _b === void 0 ? 0 : _b, max = _a.max, _c = _a.css, css = _c === void 0 ? '' : _c;
        var klasses = [progress_module_css_1.default.progressBar, css ? "" + css : ''];
        var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
        return (0, jsx_runtime_1.jsx)("progress", { className: classes, value: value, max: max }, void 0);
    };
    exports.Progress = Progress;
});
//# sourceMappingURL=Progress.js.map