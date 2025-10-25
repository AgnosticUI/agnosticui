import { Avatar } from './_Avatar.js';

if (!customElements.get('ag-avatar')) {
  customElements.define('ag-avatar', Avatar);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-avatar': Avatar;
  }
}

// Export everything from implementation
export * from './_Avatar.js';
