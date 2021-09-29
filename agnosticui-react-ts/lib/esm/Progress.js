import { jsx as _jsx } from "react/jsx-runtime";
import styles from './progress.module.css';
export var Progress = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b, max = _a.max, _c = _a.css, css = _c === void 0 ? '' : _c;
    var klasses = [styles.progressBar, css ? "" + css : ''];
    var classes = klasses.filter(function (klass) { return klass.length; }).join(' ');
    return _jsx("progress", { className: classes, value: value, max: max }, void 0);
};
//# sourceMappingURL=Progress.js.map