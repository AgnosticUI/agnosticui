import { Tooltip as CanonicalTooltip } from './core/_Tooltip.js';

/**
 * Experimental Tooltip component that extends the canonical implementation
 *
 * This version can be safely modified by AI assistants while maintaining
 * the core functionality and accessibility features from the canonical base.
 *
 * @example
 * ```html
 * <ag-tooltip content="Helpful information">
 *   <button>Hover me</button>
 * </ag-tooltip>
 * ```
 */
export declare class Tooltip extends CanonicalTooltip {
    static styles: import('lit').CSSResult;
    /**
     * Extended functionality can be added here while preserving
     * the canonical implementation's core behavior
     */
    animationDuration: number;
    constructor();
    /**
     * Override render to add experimental features
     * while delegating core functionality to canonical base
     */
    render(): import('lit').TemplateResult<1>;
    /**
     * Example: Enhanced show method with custom animation timing
     * (can be safely modified by AI assistants)
     */
    connectedCallback(): void;
}
export default Tooltip;
//# sourceMappingURL=Tooltip.d.ts.map