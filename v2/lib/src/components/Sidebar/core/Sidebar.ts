import { AgSidebar } from './_Sidebar.js';

// Manual registration (following DEVELOPMENT_GUIDE.md)
if (!customElements.get('ag-sidebar')) {
  customElements.define('ag-sidebar', AgSidebar);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-sidebar': AgSidebar;
  }
}

export * from './_Sidebar.js';
