import { css, LitElement, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';

export class AgSidebarNavSubmenu extends LitElement {
  static hostAttributes = {
    // aria: {
    //   role: 'list',
    // },
    class: 'ag-sidebar-nav-submenu',
    part: 'ag-sidebar-nav-submenu',
    'aria-label': "Sidebar Navigation Menu",
  };

  @property({ type: Boolean, reflect: true })
  open = false;

  static styles = [
    css`
      :host {
        display: none;
        margin-left: 0.875rem;
        border-left: 1px solid var(--ag-border-subtle);
        padding-left: 0.625rem;
        margin-block-start: var(--ag-space-1);
        margin-block-end: var(--ag-space-1);
      }

      :host([open]) {
        display: block;
      }

      ::slotted(.nav-sublink) {
        display: block;
        padding: var(--ag-space-2);
        border-radius: var(--ag-radius-sm);
        text-decoration: none;
        color: var(--ag-text-primary);
        font-size: var(--ag-font-size-sm);
        transition: background 0.15s;
      }
      ::slotted(.nav-sublink:hover) {
        background: var(--ag-background-secondary);
      }
      ::slotted(.nav-sublink.active) {
        background: var(--ag-primary-background);
        color: var(--ag-primary-text);
        font-weight: 500;
      }
    `,
  ] as CSSResultGroup;

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
