import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './breadcrumb.module.css';
export var Breadcrumb = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'slash' : _b, routes = _a.routes;
    // Type might be empty string so we only capitalize if it's truthy
    var typeCapitalized = type ? "" + type.slice(0, 1).toUpperCase() + type.slice(1) : '';
    var breadcrumbClasses = [styles.breadcrumb, type ? styles["breadcrumb" + typeCapitalized] : '']
        .filter(function (cls) { return cls; })
        .join(' ');
    var isLast = function (crRoutes, idx) { return idx === crRoutes.length - 1; };
    var crumbClasses = function (isLastCrumb) { return [styles.breadcrumbItem, isLastCrumb ? styles.active : ''].filter(function (c) { return c; }).join(' '); };
    return (_jsx("nav", __assign({ "aria-label": "breadcrumbs" }, { children: _jsx("ol", __assign({ className: breadcrumbClasses }, { children: routes.map(function (route, i) { return (
            // eslint-disable-next-line react/no-array-index-key
            _jsx("li", __assign({ className: crumbClasses(isLast(routes, i)) }, { children: i !== routes.length - 1 && route.url ? (_jsx("a", __assign({ href: route.url }, { children: route.label }), void 0)) : (_jsx(_Fragment, { children: route.label }, void 0)) }), i)); }) }), void 0) }), void 0));
};
//# sourceMappingURL=Breadcrumb.js.map