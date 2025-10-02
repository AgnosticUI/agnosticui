/**
 * AgnosticUI v2 Accordion - AI-Extensible Version
 * 
 * This is the experimental, AI-modifiable version of the Accordion component.
 * It imports and extends the canonical implementation from _Accordion.ts
 * 
 * Version: 2.0.0-experimental
 * Canonical Version: 2.0.0-stable
 * Last Sync: 2025-09-08
 * 
 * Upgrade Safety:
 * - This file can be safely modified by AI assistants
 * - All changes are additive - never removes canonical functionality
 * - Automatically inherits canonical upgrades without breaking changes
 * - User customizations are preserved across AgnosticUI version updates
 * 
 * Architecture:
 * - _Accordion.ts: Immutable canonical implementation (upgrade-safe)
 * - Accordion.ts: This file - experimental interface (user-modifiable)
 * - extensions/: Additional AI-generated enhancements
 * - styled/: Pre-styled component variants
 * - Design tokens: Customize via --ag-* CSS custom properties
 */

// Import canonical implementation - this import is upgrade-safe
import { 
  Accordion as CanonicalAccordion, 
  AccordionItem as CanonicalAccordionItem 
} from './core/_Accordion';

// Import type definitions from Lit for proper typing
import { LitElement } from 'lit';

// Also export canonical classes for direct use
export { CanonicalAccordion, CanonicalAccordionItem };

// Create extensible interfaces that inherit canonical behavior
export class Accordion extends CanonicalAccordion {
  /**
   * AI Extension Point: Version tracking
   * This ensures compatibility across AgnosticUI upgrades
   */
  static readonly version = '2.0.0-experimental';
  static readonly canonicalVersion = '2.0.0-stable';
  
  /**
   * AI Extension Point: Feature flags
   * Safe way to add experimental features without breaking existing code
   */
  static readonly features = {
    animations: false,
    themes: false, 
    persistence: false,
    analytics: false
  };

  connectedCallback() {
    super.connectedCallback();
    
    // AI Extension Point: Add version metadata for debugging
    this.setAttribute('data-agnostic-version', Accordion.version);
    this.setAttribute('data-canonical-version', Accordion.canonicalVersion);
  }
}

export class AccordionItem extends CanonicalAccordionItem {
  static readonly version = '2.0.0-experimental';
  static readonly canonicalVersion = '2.0.0-stable';
  
  static readonly features = {
    animations: false,
    themes: false,
    persistence: false,
    analytics: false
  };

  connectedCallback() {
    super.connectedCallback();
    
    // AI Extension Point: Version tracking
    this.setAttribute('data-agnostic-version', AccordionItem.version);
    this.setAttribute('data-canonical-version', AccordionItem.canonicalVersion);
  }

  /**
   * AI Extension Point: Upgrade compatibility layer
   * This method can be used to migrate old API calls to new ones
   */
  protected _handleLegacyAPI() {
    // Future: Handle any breaking changes in canonical API
    // by providing backward compatibility here
    // Currently no legacy API to handle
    return;
  }
}

// Register experimental versions with their own tag names
// Type assertion is safe here because Accordion extends LitElement which extends HTMLElement
customElements.define('ag-accordion-experimental', Accordion as typeof LitElement);
customElements.define('ag-accordion-item-experimental', AccordionItem as typeof LitElement);

/**
 * AI Extension Points: Safe customization patterns
 * 
 * These patterns allow AI assistants to safely extend functionality:
 */

// 1. Configuration presets
export const AccordionPresets = {
  minimal: () => ({
    // Minimal configuration
  }),
  
  animated: () => ({
    // Animated configuration  
  }),
  
  themed: (theme: string) => ({
    // Themed configuration - theme parameter available for future use
    _themeHint: theme // Store theme hint for future implementation
  })
};

// 2. Utility functions for common operations
export const AccordionUtils = {
  /**
   * Batch control multiple accordions
   */
  expandAll: (container: Element) => {
    container.querySelectorAll('ag-accordion-item').forEach(item => {
      if ('open' in item) {
        (item as CanonicalAccordionItem).open = true;
      }
    });
  },

  collapseAll: (container: Element) => {
    container.querySelectorAll('ag-accordion-item').forEach(item => {
      if ('open' in item) {
        (item as CanonicalAccordionItem).open = false;
      }
    });
  },

  /**
   * Get all accordion states
   */
  getStates: (container: Element) => {
    return Array.from(container.querySelectorAll('ag-accordion-item'))
      .filter(item => 'open' in item && 'disabled' in item)
      .map(item => {
        const accordionItem = item as CanonicalAccordionItem;
        return {
          element: item,
          open: accordionItem.open,
          disabled: accordionItem.disabled
        };
      });
  }
};

// 3. Type definitions for AI extensions
export interface AccordionExtension {
  name: string;
  version: string;
  enhance: (accordion: AccordionItem) => void;
}

// 4. Extension registry for managing AI-added features
export const AccordionExtensions = new Map<string, AccordionExtension>();

/**
 * Safely register an AI extension
 */
export function registerExtension(extension: AccordionExtension) {
  AccordionExtensions.set(extension.name, extension);
}

/**
 * Apply all registered extensions to an accordion
 */
export function applyExtensions(accordion: AccordionItem) {
  AccordionExtensions.forEach(extension => {
    try {
      extension.enhance(accordion);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(`Extension ${extension.name} failed to apply:`, error);
    }
  });
}

// Export self-contained styled components
export { MinimalAccordion } from './styled/index.js';

// Re-export for compatibility
// This allows the same import patterns while providing AI extensibility

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

// Example AI extension patterns (commented out - activate as needed):
/*

// 1. Extended AccordionItem with Animation Support
export class AnimatedAccordionItem extends AccordionItem {
  static properties = {
    ...AccordionItem.properties,
    animationDuration: { type: Number, attribute: 'animation-duration' },
    animationType: { type: String, attribute: 'animation-type' }
  };

  declare animationDuration: number;
  declare animationType: string;

  constructor() {
    super();
    this.animationDuration = 300;
    this.animationType = 'ease-out';
  }

  // Override toggle to add animation
  toggle() {
    // Add animation logic here
    super.toggle();
  }
}

// 2. Extended AccordionItem with Theme Support
export class ThemedAccordionItem extends AccordionItem {
  static styles = [
    AccordionItem.styles,
    css`
      :host {
        --accordion-bg: var(--theme-surface, #fff);
        --accordion-border: var(--theme-border, #e2e8f0);
        --accordion-text: var(--theme-text, #1a202c);
      }
      .header {
        background: var(--accordion-bg);
        border: 1px solid var(--accordion-border);
        color: var(--accordion-text);
      }
    `
  ];
}

// 3. Convenience API Extensions
export function createAccordionGroup(items: Array<{header: string, content: string}>) {
  // Helper to programmatically create accordion groups
  return items.map(item => {
    const accordionItem = document.createElement('ag-accordion-item');
    accordionItem.innerHTML = `
      <span slot="header">${item.header}</span>
      <div slot="content">${item.content}</div>
    `;
    return accordionItem;
  });
}

// 4. State Management Extensions
export class StatefulAccordionItem extends AccordionItem {
  // Add localStorage persistence
  // Add external state synchronization
  // Add controlled/uncontrolled mode support
}

*/