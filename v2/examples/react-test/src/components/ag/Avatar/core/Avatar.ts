import { Avatar } from './_Avatar';
import { AvatarGroup } from './AvatarGroup';

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
export * from './_Avatar';
export { AvatarGroup } from './AvatarGroup';
