import { AvatarGroup } from './_AvatarGroup.js';

if (!customElements.get('ag-avatar-group')) {
  customElements.define('ag-avatar-group', AvatarGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-avatar-group': AvatarGroup;
  }
}

// Export everything from implementation
export * from './_AvatarGroup.js';
