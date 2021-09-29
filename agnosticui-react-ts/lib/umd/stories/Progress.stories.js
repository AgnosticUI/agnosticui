(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react/jsx-runtime", "../Progress"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.All = void 0;
    var jsx_runtime_1 = require("react/jsx-runtime");
    var Progress_1 = require("../Progress");
    exports.default = {
        title: 'AG—React/Progress',
        component: Progress_1.Progress,
    };
    var All = function () { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Progress_1.Progress, { value: 30, max: 100 }, void 0), (0, jsx_runtime_1.jsx)(Progress_1.Progress, { value: 30, max: 100, css: "foo-bar" }, void 0), (0, jsx_runtime_1.jsx)(Progress_1.Progress, { value: 0, max: 100, css: "foo-bar" }, void 0), (0, jsx_runtime_1.jsx)(Progress_1.Progress, { value: 100, max: 100, css: "foo-bar" }, void 0)] }, void 0)); };
    exports.All = All;
});
//# sourceMappingURL=Progress.stories.js.map