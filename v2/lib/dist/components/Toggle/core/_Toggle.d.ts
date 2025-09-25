import { LitElement } from 'lit';

/**
 * AgToggle - Accessible binary toggle/switch component
 *
 * A semantic button element implementing the WAI-ARIA Switch pattern
 * for binary on/off state controls with comprehensive accessibility support.
 *
 * Features:
 * - WAI-ARIA Switch pattern compliance with role="switch"
 * - Semantic <button> element foundation
 * - Required accessible name via aria-label or aria-labelledby
 * - Keyboard navigation (Space/Enter activation)
 * - Almost headless styling approach
 * - Size variants with consistent proportions
 * - Form integration support
 */
export declare class AgToggle extends LitElement {
    static styles: import('lit').CSSResult;
    /**
     * Required accessible name for the toggle
     * This is critical for screen reader users
     */
    label: string;
    /**
     * Current checked state of the toggle
     */
    checked: boolean;
    /**
     * Toggle size variant
     */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Visual variant
     */
    variant: 'default' | 'success' | 'warning' | 'danger';
    /**
     * Disabled state
     */
    disabled: boolean;
    /**
     * Read-only state - visually interactive but doesn't change
     */
    readonly: boolean;
    /**
     * External element ID that labels this toggle
     */
    labelledBy: string;
    /**
     * External element ID that describes this toggle
     */
    describedBy: string;
    /**
     * Form integration - name attribute
     */
    name: string;
    /**
     * Form integration - value when checked
     */
    value: string;
    constructor();
    protected firstUpdated(): void;
    private _handleClick;
    private _handleKeydown;
    render(): import('lit').TemplateResult<1>;
}
//# sourceMappingURL=_Toggle.d.ts.map