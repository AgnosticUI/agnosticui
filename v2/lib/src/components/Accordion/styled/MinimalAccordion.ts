/**
 * Minimal Accordion - Chakra UI / DaisyUI-Inspired Style Wrapper
 *
 * A styled wrapper around the base ag-accordion that applies
 * ultra-clean minimal design with chevron icons, system fonts,
 * and subtle interactions.
 */

import { LitElement, html, css } from 'lit';
import { addKeyboardNavigation } from '../keyboard-navigation';

const minimalStyles = css`
  :host {
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  }

  .minimal-accordion-wrapper {
    border-radius: 8px;
    /* Remove overflow: hidden to prevent focus ring clipping */
  }

  /* Style slotted accordion items */
  ::slotted(ag-accordion-item) {
    background: #ffffff;
    margin-bottom: 0;
    border-radius: 0;
    box-shadow: none;
    transition: background-color 150ms ease;
    /* Remove overflow: hidden to allow focus rings to be visible */
    border: none;
    border-bottom: 1px solid #e5e7eb;
  }

  ::slotted(ag-accordion-item:last-child) {
    border-bottom: none;
  }

  ::slotted(ag-accordion-item:hover) {
    background: #f9fafb;
  }

  ::slotted(ag-accordion-item[open]) {
    background: #ffffff;
  }

  /* Style the accordion header button */
  ::slotted(ag-accordion-item)::part(accordion-header) {
    padding: 16px 20px;
    background: transparent;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #111827;
    cursor: pointer;
    display: block;
    transition: background-color 150ms ease, color 150ms ease;
    border: none;
    width: 100%;
    text-align: left;
    border-radius: 0;
  }

  ::slotted(ag-accordion-item)::part(accordion-header):hover {
    background: transparent;
    color: #374151;
  }

  ::slotted(ag-accordion-item)::part(accordion-header):focus-visible {
    outline: 2px solid var(--agnostic-focus, #2563eb);
    outline-offset: 2px;
    transition: outline 0.2s ease;
    background: #f3f4f6;
  }

  /* Style the accordion content */
  ::slotted(ag-accordion-item)::part(accordion-content) {
    padding: 0 20px 20px 20px;
    background: transparent;
    color: #374151;
    font-size: 14px;
    line-height: 1.5;
    border-top: 1px solid #e5e7eb;
    border-radius: 0;
  }

  /* Set CSS custom properties for chevron styling */
  :host {
    --chevron-size: 20px;
    --chevron-color: #6b7280;
    --chevron-rotation-closed: 0deg;
    --chevron-rotation-open: 180deg;
    --chevron-transition: transform 200ms ease;
  }

  /* Style the accordion header wrapper */
  ::slotted(ag-accordion-item)::part(accordion-header-wrapper) {
    margin: 0;
    padding: 0;
    border-radius: 0;
  }

  /* Style the accordion heading */
  ::slotted(ag-accordion-item)::part(accordion-heading) {
    margin: 0;
    padding: 0;
  }

  /* Accessibility adaptations for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    ::slotted(ag-accordion-item) {
      transition: background-color 100ms ease;
    }

    ::slotted(ag-accordion-item)::part(accordion-header) {
      transition: background-color 100ms ease, color 100ms ease;
    }
  }

  /* High contrast adaptations */
  @media (prefers-contrast: high) {
    ::slotted(ag-accordion-item) {
      border-bottom: 2px solid #000000;
    }

    ::slotted(ag-accordion-item)::part(accordion-header):focus-visible {
      outline: 3px solid var(--agnostic-focus, #000000);
    }
  }

  /* Dark theme support with proper priority: data-theme overrides prefers-color-scheme */
  :host-context([data-theme="dark"]) ::slotted(ag-accordion-item),
  :host-context(:root[data-theme="dark"]) ::slotted(ag-accordion-item) {
    background: #1f2937;
    border-bottom-color: #374151;
  }

  :host-context([data-theme="dark"]) ::slotted(ag-accordion-item:hover),
  :host-context(:root[data-theme="dark"]) ::slotted(ag-accordion-item:hover) {
    background: #374151;
  }

  :host-context([data-theme="dark"]) ::slotted(ag-accordion-item)::part(accordion-header),
  :host-context(:root[data-theme="dark"]) ::slotted(ag-accordion-item)::part(accordion-header) {
    color: #f9fafb;
  }

  :host-context([data-theme="dark"]) ::slotted(ag-accordion-item)::part(accordion-header):hover,
  :host-context(:root[data-theme="dark"]) ::slotted(ag-accordion-item)::part(accordion-header):hover {
    color: #e5e7eb;
  }

  :host-context([data-theme="dark"]) ::slotted(ag-accordion-item)::part(accordion-content),
  :host-context(:root[data-theme="dark"]) ::slotted(ag-accordion-item)::part(accordion-content) {
    color: #d1d5db;
    border-top-color: #374151;
  }

  :host-context([data-theme="dark"]) ::slotted(ag-accordion-item)::part(accordion-header):focus-visible,
  :host-context(:root[data-theme="dark"]) ::slotted(ag-accordion-item)::part(accordion-header):focus-visible {
    background: #374151;
  }

  /* Fallback to system preference only if no data-theme is set */
  @media (prefers-color-scheme: dark) {
    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item) {
      background: #1f2937;
      border-bottom-color: #374151;
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item:hover) {
      background: #374151;
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item)::part(accordion-header) {
      color: #f9fafb;
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item)::part(accordion-header):hover {
      color: #e5e7eb;
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item)::part(accordion-content) {
      color: #d1d5db;
      border-top-color: #374151;
    }

    :host-context(:root:not([data-theme])) ::slotted(ag-accordion-item)::part(accordion-header):focus-visible {
      background: #374151;
    }
  }
`;

// Inject chevron styles immediately to prevent FOUC
const injectChevronStyles = () => {
  const styleId = 'minimal-accordion-chevron-styles';
  if (!document.head.querySelector(`#${styleId}`)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      minimal-accordion [slot="header"] {
        display: flex;
        align-items: center;
      }

      minimal-accordion .chevron-icon {
        width: 20px;
        height: 20px;
        color: #6b7280;
        transform: rotate(0deg);
        transition: transform 200ms ease;
        flex-shrink: 0;
        margin-left: auto;
      }

      minimal-accordion ag-accordion-item[open] .chevron-icon {
        transform: rotate(180deg);
      }

      /* Dark theme chevron styles with proper priority */
      [data-theme="dark"] minimal-accordion .chevron-icon,
      :root[data-theme="dark"] minimal-accordion .chevron-icon {
        color: #9ca3af;
      }

      /* Fallback to system preference only if no data-theme is set */
      @media (prefers-color-scheme: dark) {
        :root:not([data-theme]) minimal-accordion .chevron-icon {
          color: #9ca3af;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

// Inject styles immediately when module loads
injectChevronStyles();

export class MinimalAccordion extends LitElement {
  static styles = [minimalStyles];

  constructor() {
    super();
    // Add keyboard navigation
    addKeyboardNavigation(this);
    // Ensure chevron styles are injected
    injectChevronStyles();
  }

  render() {
    return html`
      <div class="minimal-accordion-wrapper">
        <slot></slot>
      </div>
    `;
  }
}

// Register the custom element
if (!customElements.get('minimal-accordion')) {
  customElements.define('minimal-accordion', MinimalAccordion);
}