import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { cloneElement, useCallback, useRef, useState, createRef, } from 'react';
import styles from './tabs.module.css';
export var TabList = function (_a) {
    var _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.selectedTab, selectedTab = _c === void 0 ? 0 : _c, _d = _a.disabledOptions, disabledOptions = _d === void 0 ? [] : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.isBorderless, isBorderless = _f === void 0 ? false : _f, _g = _a.isVerticalOrientation, isVerticalOrientation = _g === void 0 ? false : _g, selectTab = _a.selectTab, isSkinned = _a.isSkinned, tabButtons = _a.tabButtons;
    var tabRefs = useRef(tabButtons.map(function () { return createRef(); }));
    var focusTab = useCallback(function (index, direction) {
        /**
         * direction is optional because we only need that when we're arrow navigating.
         * If they've hit ENTER|SPACE we're focusing the current item. If HOME focus(0).
         * If END focus(tabButtons.length - 1)...and so on.
         */
        var i = index;
        if (direction === 'asc') {
            i += 1;
        }
        else if (direction === 'desc') {
            i -= 1;
        }
        // Circular navigation
        //
        // If we've went beyond "start" circle around to last
        if (i < 0) {
            i = tabButtons.length - 1;
        }
        else if (i >= tabButtons.length) {
            // We've went beyond "last" so circle around to first
            i = 0;
        }
        var nextTab = tabRefs.current[i].current;
        if (nextTab) {
            // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
            // only if we've been supplied a `direction`. Otherwise, nothing left to do.
            if (nextTab.disabled && direction) {
                // Retry with new `i` index going in same direction
                focusTab(i, direction);
            }
            else {
                // Nominal case is to just focs next tab :)
                nextTab.focus();
            }
        }
    }, [tabButtons]);
    var handleKeyDown = function (ev, index) {
        switch (ev.key) {
            case 'Up': // These first cases are IEEdge :(
            case 'ArrowUp':
                if (isVerticalOrientation) {
                    focusTab(index, 'desc');
                }
                break;
            case 'Down':
            case 'ArrowDown':
                if (isVerticalOrientation) {
                    focusTab(index, 'asc');
                }
                break;
            case 'Left':
            case 'ArrowLeft':
                if (!isVerticalOrientation) {
                    focusTab(index, 'desc');
                }
                break;
            case 'Right':
            case 'ArrowRight':
                if (!isVerticalOrientation) {
                    focusTab(index, 'asc');
                }
                break;
            case 'Home':
            case 'ArrowHome':
                focusTab(0);
                break;
            case 'End':
            case 'ArrowEnd':
                focusTab(tabButtons.length - 1);
                break;
            case 'Enter':
            case 'Space':
                focusTab(index);
                selectTab(index);
                break;
            default:
                return;
        }
        ev.preventDefault();
    };
    return (_jsx("div", __assign({ className: (isSkinned ? styles.tabList : styles.tabListBase) + " " + (isBorderless ? styles.tabListBorderless : ''), role: "tablist", "aria-orientation": isVerticalOrientation ? 'vertical' : 'horizontal' }, { children: tabButtons.map(function (btn, i) { return cloneElement(btn, {
            key: i,
            title: btn.props.title,
            size: size,
            isBorderless: isBorderless,
            isDisabled: isDisabled,
            disabledOptions: disabledOptions,
            isSkinned: isSkinned,
            index: i,
            role: 'tab',
            selectedTab: selectedTab,
            ref: tabRefs.current[i],
            onClick: selectTab,
            onKeyDown: function (ev) { return handleKeyDown(ev, i); },
            children: btn.props.children,
        }, btn.props.children); }) }), void 0));
};
/**
 * Note that a TabButton must be a direct descendent of TabList to comply with aria role
 * rules as it is required for them to be structured as: tablist (parent) > tab (child).
 */
export var TabButton = React.forwardRef(function (_a, tabRef) {
    var _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.isBorderless, isBorderless = _c === void 0 ? false : _c, isSkinned = _a.isSkinned, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.disabledOptions, disabledOptions = _e === void 0 ? [] : _e, _f = _a.index, index = _f === void 0 ? 0 : _f, _g = _a.selectedTab, selectedTab = _g === void 0 ? 0 : _g, onClick = _a.onClick, onKeyDown = _a.onKeyDown, controlsPanelId = _a.controlsPanelId, children = _a.children;
    var tabButtonClasses = function (isActive) {
        var klasses = [
            styles.tabItem,
            isSkinned ? styles.tabButton : styles.tabButtonBase,
            isActive ? styles.active : '',
            isBorderless ? styles.tabButtonBorderless : '',
            size === 'large' ? styles.tabButtonLarge : '',
            size === 'xlarge' ? styles.tabButtonxlarge : '',
        ];
        return klasses.filter(function (klass) { return klass.length; }).join(' ');
    };
    return (_jsx("button", __assign({ onClick: function () { return onClick && onClick(index); }, ref: tabRef, onKeyDown: onKeyDown, className: tabButtonClasses(selectedTab === index), disabled: isDisabled || disabledOptions.includes(index), role: "tab", "aria-controls": controlsPanelId, tabIndex: selectedTab === index ? 0 : -1, "aria-selected": selectedTab === index }, { children: children }), "" + index));
});
export var TabPanel = function (_a) {
    var id = _a.id, _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, children = _a.children;
    return (_jsx("div", __assign({ id: id, role: "tabpanel", hidden: !isSelected, tabIndex: 0 }, { children: children }), void 0));
};
export var Tabs = function (_a) {
    var _b = _a.size, size = _b === void 0 ? '' : _b, _c = _a.isBorderless, isBorderless = _c === void 0 ? false : _c, _d = _a.disabledOptions, disabledOptions = _d === void 0 ? [] : _d, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.isSkinned, isSkinned = _f === void 0 ? true : _f, _g = _a.isVerticalOrientation, isVerticalOrientation = _g === void 0 ? false : _g, tabButtons = _a.tabButtons, tabPanels = _a.tabPanels;
    var _h = useState(0), selectedTab = _h[0], setSelectedTab = _h[1];
    var selectTab = useCallback(function (index) {
        setSelectedTab(index);
    }, [setSelectedTab]);
    var baseStyles = function () { return styles.tabs + " " + (isVerticalOrientation ? styles.tabsVertical : ''); };
    return (_jsxs("div", __assign({ className: baseStyles() }, { children: [_jsx(TabList, { isVerticalOrientation: isVerticalOrientation, isBorderless: isBorderless, isSkinned: isSkinned, size: size, isDisabled: isDisabled, disabledOptions: disabledOptions, tabButtons: tabButtons, selectedTab: selectedTab, selectTab: selectTab }, void 0), cloneElement(tabPanels[selectedTab], {
                isSelected: true,
            })] }), void 0));
};
//# sourceMappingURL=Tabs.js.map