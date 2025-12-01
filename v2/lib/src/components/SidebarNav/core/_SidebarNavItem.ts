import { css, LitElement, html, type CSSResultGroup } from 'lit';
import { NAV_BUTTON_STYLES } from '../../../styles/nav-button-styles';

export class AgSidebarNavItem extends LitElement {
  static hostAttributes = {
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
        
      ${NAV_BUTTON_STYLES}
      /* Nav-specific additions (flat for consistency) */
      ::slotted(.nav-button) {
        justify-content: space-between; /* For chevrons */
      }
    `,
  ] as CSSResultGroup;  

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
