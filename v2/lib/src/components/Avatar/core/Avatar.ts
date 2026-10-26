/**
 * AgnosticUI v2 Avatar Registry Barrel
 * Coordinates custom element registration for both individual avatars and groupings.
 */

import { Avatar } from './_Avatar.js';
import { AvatarGroup } from './_AvatarGroup.js';

if (!customElements.get('ag-avatar')) {
  customElements.define('ag-avatar', Avatar);
}

if (!customElements.get('ag-avatar-group')) {
  customElements.define('ag-avatar-group', AvatarGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-avatar': Avatar;
    'ag-avatar-group': AvatarGroup;
  }
}

// Export cleanly from internal implementations
export * from './_Avatar.js';
export * from './_AvatarGroup.js';
