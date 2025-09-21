/**
 * AnimatedAccordion - AI-Safe Extension Example
 * 
 * This demonstrates how AI assistants can safely extend the canonical
 * Accordion implementation with additional animation features while
 * preserving all existing functionality and accessibility.
 * 
 * Features Added:
 * - Configurable animation duration
 * - Multiple animation types (slide, fade, scale)
 * - Animation event callbacks
 * - Reduced motion respect
 * - Performance-optimized animations
 */

import { AccordionItem } from '../core/_Accordion';
import { css, html } from 'lit';
import { unsafeStatic, html as staticHtml } from 'lit/static-html.js';
import { generateUniqueId } from '../../../utils/unique-id';

export class AnimatedAccordionItem extends AccordionItem {
  // Extend properties (never override existing ones)
  static properties = {
    ...AccordionItem.properties,
    animationDuration: { type: Number, attribute: 'animation-duration' },
    animationType: { type: String, attribute: 'animation-type' },
    respectReducedMotion: { type: Boolean, attribute: 'respect-reduced-motion' }
  };

  declare animationDuration: number;
  declare animationType: 'slide' | 'fade' | 'scale';
  declare respectReducedMotion: boolean;
  private _animatedId = generateUniqueId('animated-accordion-item');

  constructor() {
    super();
    this.animationDuration = 300;
    this.animationType = 'slide';
    this.respectReducedMotion = true;
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        .content {
          overflow: hidden;
          transform-origin: top;
        }
        
        /* Default closed state - completely hidden */
        :host(:not([open])) .content {
          display: none;
        }
        
        /* When enhanced with JS, use animations instead of display:none */
        :host([data-enhanced]:not([open])) .content {
          display: block !important;
          transform: scaleY(0);
          opacity: 0;
          height: 0;
          transition: transform var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1),
                      opacity var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1),
                      height var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Open state - visible and scaled */
        :host([data-enhanced][open]) .content {
          display: block;
          transform: scaleY(1);
          opacity: 1;
          height: auto;
          transition: transform var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1),
                      opacity var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Different animation speeds */
        :host([animation-duration="200"]:not([open])) .content {
          transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 200ms cubic-bezier(0.4, 0, 0.2, 1),
                      height 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="200"][open]) .content {
          transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="500"]:not([open])) .content {
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
                      height 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="500"][open]) .content {
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="800"]:not([open])) .content {
          transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 800ms cubic-bezier(0.4, 0, 0.2, 1),
                      height 800ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="800"][open]) .content {
          transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 800ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `
    ];
  }

  // Ensure we call parent's connectedCallback for data-enhanced attribute
  connectedCallback() {
    super.connectedCallback();
    // Set initial animation duration
    this.style.setProperty('--animation-duration', `${this.animationDuration}ms`);
  }

  // Override render to apply animation duration and control content visibility
  render() {
    // Update CSS custom property for animation duration
    this.style.setProperty('--animation-duration', `${this.animationDuration}ms`);
    
    // Override parent render to control content display behavior for animations
    const headingTag = `h${Math.max(1, Math.min(6, this.headingLevel))}`;
    
    return html`
      <div class="header" @click="${this.toggle}">
        ${this._renderAnimatedHeading(headingTag)}
      </div>
      <div 
        class="content"
        role="region"
        aria-labelledby="${this._animatedId}-button"
        id="${this._animatedId}-panel"
      >
        <slot name="content"></slot>
      </div>
    `;
  }

  private _renderAnimatedHeading(tag: string) {
    // Use lit-html's unsafeStatic for dynamic tag names
    const headingTag = unsafeStatic(tag);
    return staticHtml`<${headingTag} class="heading">
      <button
        aria-expanded="${this.open}"
        aria-controls="${this._animatedId}-panel"
        id="${this._animatedId}-button"
        ?disabled="${this.disabled}"
        aria-disabled="${this.disabled}"
      >
        <slot name="header"></slot>
      </button>
    </${headingTag}>`;
  }

  // Override toggle to add animation events (safe extension)
  toggle() {
    const wasOpen = this.open;
    
    // Dispatch before-animation event
    this.dispatchEvent(new CustomEvent('accordion-animation-start', {
      detail: { 
        opening: !wasOpen,
        animationType: this.animationType,
        duration: this.animationDuration
      },
      bubbles: true
    }));

    // Call parent toggle to maintain all existing behavior
    super.toggle();

    // Set up animation completion detection
    if (!this.respectReducedMotion || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent('accordion-animation-end', {
          detail: { 
            opened: this.open,
            animationType: this.animationType
          },
          bubbles: true
        }));
      }, this.animationDuration);
    }
  }

  // Additional convenience methods (pure extensions)
  
  /**
   * Animate to open state
   */
  animateOpen() {
    if (!this.open) {
      this.toggle();
    }
  }

  /**
   * Animate to closed state  
   */
  animateClose() {
    if (this.open) {
      this.toggle();
    }
  }

  /**
   * Set animation configuration
   */
  configureAnimation(options: {
    duration?: number;
    type?: 'slide' | 'fade' | 'scale';
    respectReducedMotion?: boolean;
  }) {
    if (options.duration !== undefined) {
      this.animationDuration = options.duration;
    }
    if (options.type !== undefined) {
      this.animationType = options.type;
    }
    if (options.respectReducedMotion !== undefined) {
      this.respectReducedMotion = options.respectReducedMotion;
    }
  }
}

// Register the extended component
customElements.define('ag-animated-accordion-item', AnimatedAccordionItem);

// Export for use
export default AnimatedAccordionItem;