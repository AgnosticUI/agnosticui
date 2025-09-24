import { LitElement } from 'lit';

/**
 * AgIconButton - Accessible icon-only button component
 *
 * A semantic button element that displays only an icon with proper
 * accessibility labeling following Sara Soueidan's guidelines and
 * WAI-ARIA APG button patterns.
 *
 * Features:
 * - Semantic <button> element foundation
 * - Required accessible name via aria-label
 * - Multiple icon source support (SVG, Unicode, slots)
 * - Sara Soueidan accessibility compliance
 * - Almost headless styling approach
 * - APG-compliant keyboard interaction
 */
export declare class AgIconButton extends LitElement {
    static styles: import('lit').CSSResult;
    /**
     * Required accessible name for the button
     * This is critical for screen reader users
     */
    label: string;
    /**
     * Icon identifier or name (for icon systems)
     */
    icon: string;
    /**
     * Unicode symbol for simple icons (×, ☰, etc.)
     */
    unicode: string;
    /**
     * Button size variant
     */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Visual variant
     */
    variant: 'primary' | 'secondary' | 'ghost' | 'danger';
    /**
     * Disabled state
     */
    disabled: boolean;
    /**
     * Pressed state for toggle buttons
     */
    pressed: boolean;
    /**
     * Loading state
     */
    loading: boolean;
    /**
     * Button type
     */
    type: 'button' | 'submit' | 'reset';
    constructor();
    private _handleClick;
    private _handleKeyDown;
    /**
     * Renders the appropriate icon content
     */
    private _renderIcon;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ag-icon-button': AgIconButton;
    }
}
//# sourceMappingURL=_IconButton.d.ts.map