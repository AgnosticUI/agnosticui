import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { generateUniqueId } from '../../../utils/unique-id.js';

export type TabsActivation = 'manual' | 'automatic';
export type TabsOrientation = 'horizontal' | 'vertical';

// Child components defined inline
@customElement('ag-tab')
export class Tab extends LitElement {
  @property({ type: String })
  declare panel: string;

  constructor() {
    super();
    this.panel = '';
    // Set host element role
    this.setAttribute('role', 'tab');
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--ag-tabs-bg, transparent);
      border: none;
      color: var(--ag-tabs-text, #6b7280);
      cursor: pointer;
      font: inherit;
      padding: 0.5rem 1rem;
      border-radius: 0;
      border-bottom: 2px solid transparent;
      text-decoration: none;
    }

    :host(:hover) {
      background: var(--ag-tabs-bg-hover, #f9fafb);
      color: var(--ag-tabs-text-hover, #374151);
    }

    :host([aria-selected="true"]) {
      color: var(--ag-tabs-text-active, #111827);
      border-bottom-color: var(--ag-tabs-border-active, #2563eb);
    }

    :host(:focus-visible) {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('ag-tab-panel')
export class TabPanel extends LitElement {
  constructor() {
    super();
    // Set host element role and default attributes
    this.setAttribute('role', 'tabpanel');
    this.setAttribute('tabindex', '0');
  }

  static styles = css`
    :host {
      display: block;
      padding: var(--ag-tabs-panel-padding, 1rem);
    }

    :host([hidden]) {
      display: none;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

@customElement('ag-tabs')
export class Tabs extends LitElement {
  @property({ type: String })
  declare activation: TabsActivation;

  @property({ type: Number, attribute: 'active-tab' })
  declare activeTab: number;

  @property({ type: String })
  declare orientation: TabsOrientation;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: String, attribute: 'aria-labelledby' })
  declare ariaLabelledBy: string;

  @state()
  private declare _tabs: Tab[];

  @state()
  private declare _panels: TabPanel[];

  constructor() {
    super();
    this.activation = 'manual';
    this.activeTab = 0;
    this.orientation = 'horizontal';
    this.ariaLabel = '';
    this.ariaLabelledBy = '';
    this._tabs = [];
    this._panels = [];
  }

  firstUpdated() {
    // Use a microtask to ensure child elements are ready
    Promise.resolve().then(() => {
      this._updateTabsAndPanels();
    });
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('activeTab')) {
      // Use a microtask to ensure child elements are ready
      Promise.resolve().then(() => {
        this._updateTabsAndPanels();
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();

    // Listen for slot changes to update tabs when children are added
    this.addEventListener('slotchange', () => {
      Promise.resolve().then(() => {
        this._updateTabsAndPanels();
      });
    });
  }

  private _updateTabsAndPanels() {
    // Get all tabs and panels from slots
    this._tabs = Array.from(this.querySelectorAll('ag-tab')) as Tab[];
    this._panels = Array.from(this.querySelectorAll('ag-tab-panel')) as TabPanel[];

    // Set up IDs and relationships
    this._tabs.forEach((tab, index) => {
      const tabId = tab.id || `tab-${generateUniqueId()}`;
      const panelId = tab.panel || this._panels[index]?.id || `panel-${generateUniqueId()}`;

      // Set tab attributes directly on the host element
      tab.setAttribute('id', tabId);
      tab.setAttribute('aria-controls', panelId);
      tab.setAttribute('aria-selected', index === this.activeTab ? 'true' : 'false');
      tab.setAttribute('tabindex', index === this.activeTab ? '0' : '-1');

      // Set corresponding panel attributes if it exists
      if (this._panels[index]) {
        this._panels[index].setAttribute('id', panelId);
        this._panels[index].setAttribute('aria-labelledby', tabId);
        if (index !== this.activeTab) {
          this._panels[index].setAttribute('hidden', '');
        } else {
          this._panels[index].removeAttribute('hidden');
        }
      }
    });
  }

  static styles = css`
    :host {
      display: block;
    }

    .tabs-container {
      display: flex;
    }

    .tabs-container[data-orientation="vertical"] {
      flex-direction: row;
    }

    .tabs-container[data-orientation="horizontal"] {
      flex-direction: column;
    }

    [role="tablist"] {
      display: flex;
      gap: var(--ag-tabs-spacing, 0.5rem);
    }

    [role="tablist"][aria-orientation="horizontal"] {
      flex-direction: row;
      border-bottom: 1px solid var(--ag-tabs-border, #e5e7eb);
    }

    [role="tablist"][aria-orientation="vertical"] {
      flex-direction: column;
      border-right: 1px solid var(--ag-tabs-border, #e5e7eb);
      min-width: 200px;
    }

    .tab-panels {
      flex: 1;
    }

    ::slotted(ag-tab-panel[hidden]) {
      display: none;
    }
  `;

  render() {
    return html`
      <div class="tabs-container" data-orientation=${this.orientation}>
        <div
          role="tablist"
          aria-orientation=${this.orientation}
          aria-label=${this.ariaLabel || ''}
          aria-labelledby=${this.ariaLabelledBy || ''}
        >
          <slot name="tab"></slot>
        </div>
        <div class="tab-panels">
          <slot name="panel"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-tabs': Tabs;
    'ag-tab': Tab;
    'ag-tab-panel': TabPanel;
  }
}