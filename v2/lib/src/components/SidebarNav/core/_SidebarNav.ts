import { css, LitElement, html, type CSSResultGroup } from 'lit';

export class AgSidebarNav extends LitElement {
  static hostAttributes = {
    aria: {
      role: 'list',
    },
    class: 'ag-sidebar-nav',
    part: 'ag-sidebar-nav',
    'aria-label': "Sidebar Navigation Menu",
  };

  static styles = [
    css`
      :host {
        padding: 0;
        margin: 0;
      }
    `,
  ] as CSSResultGroup;  

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
