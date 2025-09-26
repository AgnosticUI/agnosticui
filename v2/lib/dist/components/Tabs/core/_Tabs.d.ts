import { LitElement } from 'lit';

export type TabsActivation = 'manual' | 'automatic';
export type TabsOrientation = 'horizontal' | 'vertical';
export declare class Tab extends LitElement {
    panel: string;
    constructor();
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
}
export declare class TabPanel extends LitElement {
    constructor();
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
}
export declare class Tabs extends LitElement {
    activation: TabsActivation;
    activeTab: number;
    orientation: TabsOrientation;
    ariaLabel: string;
    ariaLabelledBy: string;
    private _tabs;
    private _panels;
    private _focusedTab;
    constructor();
    firstUpdated(): void;
    updated(changedProperties: Map<string, any>): void;
    connectedCallback(): void;
    private _updateTabsAndPanels;
    private _handleKeyDown;
    private _handleClick;
    private _setFocusedTab;
    private _activateTab;
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ag-tabs': Tabs;
        'ag-tab': Tab;
        'ag-tab-panel': TabPanel;
    }
}
//# sourceMappingURL=_Tabs.d.ts.map