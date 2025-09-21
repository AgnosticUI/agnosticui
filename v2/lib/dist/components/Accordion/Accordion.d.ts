import { Accordion as CanonicalAccordion, AccordionItem as CanonicalAccordionItem } from './core/_Accordion';

export { CanonicalAccordion, CanonicalAccordionItem };
export declare class Accordion extends CanonicalAccordion {
    /**
     * AI Extension Point: Version tracking
     * This ensures compatibility across AgnosticUI upgrades
     */
    static readonly version = "2.0.0-experimental";
    static readonly canonicalVersion = "2.0.0-stable";
    /**
     * AI Extension Point: Feature flags
     * Safe way to add experimental features without breaking existing code
     */
    static readonly features: {
        animations: boolean;
        themes: boolean;
        persistence: boolean;
        analytics: boolean;
    };
    connectedCallback(): void;
}
export declare class AccordionItem extends CanonicalAccordionItem {
    static readonly version = "2.0.0-experimental";
    static readonly canonicalVersion = "2.0.0-stable";
    static readonly features: {
        animations: boolean;
        themes: boolean;
        persistence: boolean;
        analytics: boolean;
    };
    connectedCallback(): void;
    /**
     * AI Extension Point: Upgrade compatibility layer
     * This method can be used to migrate old API calls to new ones
     */
    protected _handleLegacyAPI(): void;
}
/**
 * AI Extension Points: Safe customization patterns
 *
 * These patterns allow AI assistants to safely extend functionality:
 */
export declare const AccordionPresets: {
    minimal: () => {};
    animated: () => {};
    themed: (theme: string) => {
        _themeHint: string;
    };
};
export declare const AccordionUtils: {
    /**
     * Batch control multiple accordions
     */
    expandAll: (container: Element) => void;
    collapseAll: (container: Element) => void;
    /**
     * Get all accordion states
     */
    getStates: (container: Element) => {
        element: Element & Record<"open", unknown> & Record<"disabled", unknown>;
        open: boolean;
        disabled: boolean;
    }[];
};
export interface AccordionExtension {
    name: string;
    version: string;
    enhance: (accordion: AccordionItem) => void;
}
export declare const AccordionExtensions: Map<string, AccordionExtension>;
/**
 * Safely register an AI extension
 */
export declare function registerExtension(extension: AccordionExtension): void;
/**
 * Apply all registered extensions to an accordion
 */
export declare function applyExtensions(accordion: AccordionItem): void;
export { MinimalAccordion } from './styled/index.js';
/**
 * AI Enhancement Hooks
 *
 * These patterns enable AI assistants to extend functionality:
 *
 * 1. Style System Extensions:
 *    - Add CSS custom property support
 *    - Implement theme token bindings
 *    - Create variant class systems
 *
 * 2. Behavior Extensions:
 *    - Add animation hooks
 *    - Implement event system extensions
 *    - Create interaction pattern variants
 *
 * 3. API Extensions:
 *    - Add convenience methods
 *    - Implement derived state properties
 *    - Create composition helpers
 */
//# sourceMappingURL=Accordion.d.ts.map