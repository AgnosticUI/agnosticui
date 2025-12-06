/**
 * AgnosticUI v2 AvatarGroup - Canonical Implementation
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * AvatarGroup component for displaying multiple avatars in an overlapping layout.
 * Should be used as a wrapper for multiple ag-avatar elements.
 */

import { LitElement, html, css } from 'lit';

/**
 * Container component for grouping multiple Avatar components
 * 
 * @slot - Default slot for avatar elements
 * @csspart ag-avatar-group - The main avatar group container element
 * 
 * @example
 * ```html
 * <ag-avatar-group>
 *   <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
 *   <ag-avatar text="RL" variant="info" size="lg"></ag-avatar>
 *   <ag-avatar img-src="..." size="lg"></ag-avatar>
 * </ag-avatar-group>
 * ```
 * 
 * Note: To add borders for visual separation when avatars overlap, style the
 * avatar's internal parts using CSS:
 * ```css
 * ag-avatar-group ag-avatar::part(ag-avatar) {
 *   border: 2px solid white;
 * }
 * ```
 */
export class AvatarGroup extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
    }

    .avatar-group {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* Overlap avatars except the first one */
    ::slotted(ag-avatar:not(:first-child)) {
      margin-inline-start: calc(-1 * 0.625rem);
    }

    /* Optional: Add z-index stacking so later avatars appear on top when hovered */
    ::slotted(ag-avatar) {
      transition: transform 0.2s ease;
      position: relative;
    }

    ::slotted(ag-avatar:hover) {
      transform: translateY(-2px);
      z-index: 10;
    }
  `;

  render() {
    return html`
      <div class="avatar-group" part="ag-avatar-group">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('ag-avatar-group')) {
  customElements.define('ag-avatar-group', AvatarGroup);
}
