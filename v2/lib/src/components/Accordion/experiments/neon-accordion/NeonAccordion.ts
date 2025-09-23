/**
 * Neon Accordion - Retro Synthwave Style Wrapper
 *
 * A simple styled wrapper around the base ag-accordion that applies
 * dramatic neon/synthwave visual styling. Just imports the base components
 * and wraps them with the neon styling.
 */

import { LitElement, html } from 'lit';
import { neonStyles } from './neon-styles';
import { addKeyboardNavigation } from '../keyboard-navigation';

export class NeonAccordion extends LitElement {
  static styles = [neonStyles];

  constructor() {
    super();
    // Add keyboard navigation
    addKeyboardNavigation(this);
  }

  render() {
    return html`
      <div class="neon-accordion-wrapper">
        <slot></slot>
      </div>
    `;
  }
}

// Register the custom element
if (!customElements.get('neon-accordion')) {
  customElements.define('neon-accordion', NeonAccordion);
}