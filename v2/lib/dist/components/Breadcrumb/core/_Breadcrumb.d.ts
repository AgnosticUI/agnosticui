import { LitElement } from 'lit';

/**
 * Breadcrumb item interface
 */
export interface BreadcrumbItem {
    /** Display text for the breadcrumb */
    label: string;
    /** URL for navigation (optional for current page) */
    href?: string;
    /** Marks the current page */
    current?: boolean;
}
/**
 * AgBreadcrumb - Accessible breadcrumb navigation component
 *
 * A semantic navigation element implementing the WAI-ARIA Breadcrumb pattern
 * for showing hierarchical page location with comprehensive accessibility support.
 *
 * Features:
 * - WAI-ARIA Breadcrumb pattern compliance with proper nav landmark
 * - Semantic ordered list structure
 * - Current page indication via aria-current="page"
 * - Multiple separator styles (default, slash, bullet, arrow)
 * - Almost headless styling approach
 * - Click event handling for navigation
 * - Form integration support
 */
export declare class AgBreadcrumb extends LitElement {
    static styles: import('lit').CSSResult;
    /**
     * Array of breadcrumb items to display
     */
    items: BreadcrumbItem[];
    /**
     * Separator style type
     */
    type: 'default' | 'slash' | 'bullet' | 'arrow';
    /**
     * Custom aria-label for the navigation landmark
     */
    ariaLabel: string;
    constructor();
    private _handleItemClick;
    private _renderBreadcrumbItem;
    render(): import('lit').TemplateResult<1>;
}
//# sourceMappingURL=_Breadcrumb.d.ts.map