import { Tab, TabPanel, Tabs } from './_Tabs.js';

if (!customElements.get('ag-tab')) {
  customElements.define('ag-tab', Tab);
}

if (!customElements.get('ag-tab-panel')) {
  customElements.define('ag-tab-panel', TabPanel);
}

if (!customElements.get('ag-tabs')) {
  customElements.define('ag-tabs', Tabs);
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-tab': Tab;
    'ag-tab-panel': TabPanel;
    'ag-tabs': Tabs;
  }
}

export * from './_Tabs.js';
