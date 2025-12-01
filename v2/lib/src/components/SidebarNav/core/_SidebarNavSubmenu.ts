import { css, LitElement, html, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { NAV_SUBLINK_STYLES } from '../../../styles/nav-sublink-styles';

export class AgSidebarNavSubmenu extends LitElement {
  static hostAttributes = {
    class: 'ag-sidebar-nav-submenu',
    part: 'ag-sidebar-nav-submenu',
    'aria-label': "Sidebar Navigation Menu",
  };

  @property({ type: Boolean, reflect: true })
  open = false;

  static styles = [
    NAV_SUBLINK_STYLES,
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
    `,
  ] as CSSResultGroup;

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
