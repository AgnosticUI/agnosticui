import { css, LitElement, html, type CSSResultGroup } from 'lit';
import { NAV_SUBLINK_STYLES } from '../../../styles/nav-sublink-styles';

export class AgSidebarNavPopoverSubmenu extends LitElement {
  static hostAttributes = {
    class: 'ag-sidebar-nav-popover-submenu',
    part: 'ag-sidebar-nav-popover-submenu',
  }
  static styles = [
    NAV_SUBLINK_STYLES,
  ] as CSSResultGroup;

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
