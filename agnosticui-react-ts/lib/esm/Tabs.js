import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, useCallback, useState } from 'react';
import styles from './tabs.module.css';
export var TabHeader = function (_a) {
    var _b = _a.isBorderless, isBorderless = _b === void 0 ? false : _b, children = _a.children;
    return (_jsx("div", __assign({ className: styles.tabList + " " + (isBorderless ? styles.tabListBorderless : ''), role: "tablist", "aria-label": "Tabs" }, { children: children }), void 0));
};
export var TabPanel = function (_a) {
    var title = _a.title, children = _a.children;
    return (_jsx("div", __assign({ className: styles.pane, "aria-label": title, role: "tabpanel" }, { children: children }), void 0));
};
export var TabButton = function (_a) {
    var _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.isBorderless, isBorderless = _c === void 0 ? false : _c, _d = _a.index, index = _d === void 0 ? 0 : _d, _e = _a.selectedTab, selectedTab = _e === void 0 ? 0 : _e, onClick = _a.onClick, children = _a.children;
    var tabButtonClasses = function (isActive) {
        var klasses = [
            styles.tabItem,
            styles.tabButton,
            isActive ? styles.active : '',
            isBorderless ? styles.tabButtonBorderless : '',
            size === 'large' ? styles.tabButtonLarge : '',
            size === 'jumbo' ? styles.tabButtonJumbo : '',
        ];
        return klasses.filter(function (klass) { return klass.length; }).join(' ');
    };
    return (_jsx("button", __assign({ onClick: function () { return onClick && onClick(index); }, className: tabButtonClasses(selectedTab === index), role: "tab", "aria-selected": selectedTab === index }, { children: children }), "" + index));
};
export var Tabs = function (_a) {
    var _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.isBorderless, isBorderless = _c === void 0 ? false : _c, tabButtons = _a.tabButtons, tabPanels = _a.tabPanels;
    var _d = useState(0), selectedTab = _d[0], setSelectedTab = _d[1];
    var selectTab = useCallback(function (index) {
        setSelectedTab(index);
    }, [setSelectedTab]);
    return (_jsxs(_Fragment, { children: [_jsx(TabHeader, __assign({ isBorderless: isBorderless }, { children: tabButtons.map(function (btn, i) { return cloneElement(btn, {
                    key: i,
                    title: btn.props.title,
                    size: size,
                    isBorderless: isBorderless,
                    index: i,
                    selectedTab: selectedTab,
                    onClick: selectTab,
                    children: btn.props.children,
                }, btn.props.children); }) }), void 0), tabPanels[selectedTab]] }, void 0));
};
//# sourceMappingURL=Tabs.js.map