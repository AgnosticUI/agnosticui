import { LitElement } from 'lit';

/**
 * AgInput - Foundation input component (starting minimal)
 *
 * Starting with basic label + input functionality, will build up incrementally
 */
export declare class AgInput extends LitElement {
    static styles: import('lit').CSSResult;
    private _inputId;
    /**
     * Label Architecture - Flexible but Accessible by Default
     */
    label: string;
    labelHidden: boolean;
    noLabel: boolean;
    ariaLabel: string;
    labelledBy: string;
    /**
     * Input properties
     */
    type: string;
    value: string;
    /**
     * Textarea-specific properties (when type="textarea")
     */
    rows: number;
    cols: number;
    /**
     * v1 Parity - Size Variants
     */
    size: 'small' | 'default' | 'large';
    /**
     * v1 Parity - Styling Variants
     */
    isRounded: boolean;
    isUnderlined: boolean;
    isUnderlinedWithBackground: boolean;
    isInline: boolean;
    /**
     * v1 Parity - Addon Support
     */
    hasLeftAddon: boolean;
    hasRightAddon: boolean;
    /**
     * Validation & State
     */
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    invalid: boolean;
    errorMessage: string;
    helpText: string;
    constructor();
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ag-input': AgInput;
    }
}
//# sourceMappingURL=_Input.d.ts.map