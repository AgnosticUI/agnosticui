import { LitElement } from 'lit';

/**
 * Canonical version information for upgrade tracking
 */
export declare const ACCORDION_CANONICAL_VERSION = "2.0.0-stable";
export declare const ACCORDION_API_VERSION = "2.0";
export declare const ACCORDION_LAST_UPDATED = "2025-09-08";
export declare class Accordion extends LitElement {
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
}
export declare class AccordionItem extends LitElement {
    static properties: {
        open: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        headingLevel: {
            type: NumberConstructor;
            attribute: string;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    open: boolean;
    headingLevel: number;
    disabled: boolean;
    private _id;
    constructor();
    connectedCallback(): void;
    static styles: import('lit').CSSResult[];
    render(): import('lit').TemplateResult<1>;
    private _renderHeading;
    toggle(): void;
    /**
     * Focus the accordion's button (for programmatic focus management)
     */
    focus(): void;
    /**
     * Get the button element (for external focus management)
     */
    get buttonElement(): HTMLButtonElement | null;
    /**
     * Handle keyboard interactions for individual accordion items
     */
    private _handleKeydown;
}
//# sourceMappingURL=_Accordion.d.ts.map