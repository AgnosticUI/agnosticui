/**
 * AgnosticUI v2 Tooltip - Experimental Interface
 *
 * 🔄 EXPERIMENTAL VERSION 🔄
 *
 * This file provides the experimental interface for the Tooltip component.
 * It extends the canonical _Tooltip.ts implementation, allowing for safe
 * AI-driven modifications and customizations while maintaining upgrade safety.
 *
 * Based on the WAI-ARIA Authoring Practices Guide (APG) for tooltips.
 * https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
 */

import { css } from 'lit';
import { property } from 'lit/decorators.js';
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
export class Tooltip extends CanonicalTooltip {
  static styles = css`
    ${CanonicalTooltip.styles}
    /* Experimental styling can be added here */
    /* Core functionality remains in canonical implementation */
  `;

  /**
   * Extended functionality can be added here while preserving
   * the canonical implementation's core behavior
   */

  // Example: Custom animation timing (can be modified by AI)
  @property({ type: Number })
  declare animationDuration: number;

  constructor() {
    super();
    this.animationDuration = 150;
  }

  /**
   * Override render to add experimental features
   * while delegating core functionality to canonical base
   */
  render() {
    // Delegate to canonical implementation
    return super.render();
  }

  /**
   * Example: Enhanced show method with custom animation timing
   * (can be safely modified by AI assistants)
   */
  override connectedCallback() {
    super.connectedCallback();

    // Custom animation timing setup
    this.updateComplete.then(() => {
      const tooltip = this.shadowRoot?.getElementById('tooltip');
      if (tooltip) {
        tooltip.style.transition = `opacity ${this.animationDuration}ms ease-in-out`;
      }
    });
  }
}

// Register the experimental component with guard to prevent duplicate registration
if (!customElements.get('ag-tooltip')) {
  customElements.define('ag-tooltip', Tooltip);
}

// Export for consumption
export default Tooltip;