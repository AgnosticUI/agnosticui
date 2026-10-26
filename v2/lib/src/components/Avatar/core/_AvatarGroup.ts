/**
 * AgnosticUI v2 AvatarGroup - Canonical Implementation
 *
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 *
 * AvatarGroup component for displaying multiple avatars in an overlapping layout.
 * Should be used as a wrapper for multiple ag-avatar elements.
 */

import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './avatar-group-structure.module.css';
import structuralStylesText from './avatar-group-structure.module.css?inline';

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
  // Treat inline text extracted from CSS Modules as a secure, compile-time static token
  static styles = css`
    ${unsafeCSS(structuralStylesText || '')}

    :host {
      display: inline-flex;
    }

    .avatar-group,
    :global(.ag-avatar-group) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* Enforce slot containment bounds cleanly across shadow roots */
    ::slotted(ag-avatar:not(:first-child)),
    ::slotted(.ag-avatar:not(:first-child)) {
      margin-inline-start: calc(-1 * 0.625rem) !important;
    }

    ::slotted(ag-avatar),
    ::slotted(.ag-avatar) {
      transition: transform 0.2s ease;
      position: relative;
    }

    ::slotted(ag-avatar:hover),
    ::slotted(.ag-avatar:hover) {
      transform: translateY(-2px);
      z-index: 10;
    }
  `;

  render() {
    // Section 9 Dual-Class Token Lifecycle Solution: Emits both unhashed namespaced classes
    // and layout modular properties side-by-side onto elements to pass pre-hydration checks.
    const classes = [
      'ag-avatar-group',
      styles.avatarGroupWrapper
    ].filter(Boolean).join(' ');

    return html`
      <div class="${classes}" part="ag-avatar-group">
        <slot></slot>
      </div>
    `;
  }
}
