import { LitElement } from 'lit';

export declare class AgnosticDialog extends LitElement {
    open: boolean;
    heading: string;
    description: string;
    closeOnEscape: boolean;
    closeOnBackdrop: boolean;
    showCloseButton: boolean;
    private _previouslyFocusedElement;
    constructor();
    private _handleKeydown;
    private _handleBackdropClick;
    private _handleCloseButtonClick;
    private _getFocusableElements;
    private _setInitialFocus;
    private _restoreFocus;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: Map<string, unknown>): void;
    private _preventBackgroundScroll;
    private _restoreBackgroundScroll;
    updated(changedProperties: Map<string, unknown>): void;
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
}
//# sourceMappingURL=_dialog.d.ts.map