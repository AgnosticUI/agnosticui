import { css, LitElement, html, type CSSResultGroup } from 'lit';

export class AgSidebarNavItem extends LitElement {
  static hostAttributes = {
    aria: {
      role: 'listitem',
    },
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
    `,
  ] as CSSResultGroup;  

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
