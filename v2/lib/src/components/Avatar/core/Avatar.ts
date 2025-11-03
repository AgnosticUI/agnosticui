import { Avatar } from './_Avatar.js';
import { AvatarGroup } from '../../AvatarGroup/AvatarGroup.js';

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

// Export everything from implementation
export * from './_Avatar.js';
export { AvatarGroup } from '../../AvatarGroup/AvatarGroup.js';
