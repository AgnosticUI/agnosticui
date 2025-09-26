import { LitElement } from 'lit';

export type MenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
export declare class MenuSeparator extends LitElement {
    constructor();
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
}
export declare class MenuItem extends LitElement {
    value: string;
    disabled: boolean;
    href: string;
    target: string;
    constructor();
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
    private _handleClick;
}
export declare class Menu extends LitElement {
    open: boolean;
    placement: MenuPlacement;
    ariaLabel: string;
    ariaLabelledBy: string;
    protected _menuItems: MenuItem[];
    protected _focusedIndex: number;
    constructor();
    firstUpdated(): void;
    updated(changedProperties: Map<string, unknown>): void;
    connectedCallback(): void;
    get menuItems(): MenuItem[];
    set focusedIndex(index: number);
    private _updateMenuItems;
    private _updateFocus;
    private _handleKeyDown;
    private _handleItemClick;
    private _closeMenu;
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
}
export declare class MenuButton extends LitElement {
    disabled: boolean;
    ariaLabel: string;
    private _menuOpen;
    private _menu;
    constructor();
    firstUpdated(): void;
    disconnectedCallback(): void;
    private _handleButtonClick;
    private _handleButtonKeyDown;
    private _toggleMenu;
    private _openMenu;
    private _closeMenu;
    private _handleMenuClose;
    private _handleMenuSelect;
    private _handleOutsideClick;
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
    private _updateMenuReference;
}
declare global {
    interface HTMLElementTagNameMap {
        'ag-menu-button': MenuButton;
        'ag-menu': Menu;
        'ag-menu-item': MenuItem;
        'ag-menu-separator': MenuSeparator;
    }
}
//# sourceMappingURL=_Menu.d.ts.map