import { LitElement } from 'lit';

/**
 * AgButton - Foundation button component with APG compliance
 *
 * A semantic button element that supports multiple types and follows
 * WAI-ARIA APG button patterns for full accessibility compliance.
 *
 * Features:
 * - Semantic <button> element foundation
 * - Space/Enter keyboard activation (browser default)
 * - Multiple button types (button, submit, reset)
 * - Almost headless styling approach
 * - APG-compliant accessibility
 */
export declare class AgButton extends LitElement {
    static styles: import('lit').CSSResult;
    /**
     * Button type - determines behavior in forms
     */
    type: 'button' | 'submit' | 'reset';
    /**
     * Disabled state - button cannot be interacted with
     */
    disabled: boolean;
    /**
     * Loading state - button is disabled and shows busy indicator
     */
    loading: boolean;
    /**
     * Toggle mode - button acts as a toggle button with pressed state
     */
    toggle: boolean;
    /**
     * Pressed state - for toggle buttons
     */
    pressed: boolean;
    /**
     * ARIA label for accessibility
     */
    ariaLabel: string;
    /**
     * ARIA described-by for accessibility
     */
    ariaDescribedby: string;
    /**
     * Visual variant for styling hooks
     */
    variant: string;
    /**
     * Size variant for styling hooks
     */
    size: string;
    constructor();
    private _handleClick;
    private _handleFocus;
    private _handleBlur;
    render(): import('lit').TemplateResult<1>;
}
//# sourceMappingURL=_Button.d.ts.map