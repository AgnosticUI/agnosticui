import { css, LitElement, html, type CSSResultGroup } from 'lit';

export class AgSidebarNavItem extends LitElement {
  static hostAttributes = {
    // aria: {
    //   role: 'listitem',
    // },
    class: 'ag-sidebar-nav-item',
    part: 'ag-sidebar-nav-item',
  };

  static styles = [
    css`
      :host {
        padding: 0;
        margin: 0;
        margin-bottom: var(--ag-space-1);
      }
      ::slotted([slot="trigger"]),
      ::slotted(.nav-button) {
        width: 100%;
        padding: var(--ag-space-2);
        border: none;
        background: transparent;
        border-radius: var(--ag-border-radius-sm);
        cursor: pointer;
        text-align: left;
        font-size: var(--ag-font-size-sm);
        color: var(--ag-text-primary);
        display: flex;
        align-items: center;
        gap: var(--ag-space-2);
        transition: background var(--ag-motion-medium-fast);
        position: relative;
      }
      ::slotted([slot="trigger"]:hover),
      ::slotted(.nav-button:hover) {
        background: var(--ag-background-secondary);
      }
      ::slotted([aria-current="page"]),
      ::slotted(.nav-button.active) {
        background: var(--ag-primary-background);
        color: var(--ag-text-primary);
      }
    `,
  ] as CSSResultGroup;  

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
