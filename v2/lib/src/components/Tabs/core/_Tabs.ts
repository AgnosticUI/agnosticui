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

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  constructor() {
    super();
    this.panel = '';
    this.disabled = false;
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

    /* Disabled state styles */
    :host([disabled]),
    :host([aria-disabled="true"]) {
      opacity: var(--ag-opacity-disabled, 0.6);
      cursor: not-allowed;
      pointer-events: none;
    }

    :host([disabled]:hover),
    :host([aria-disabled="true"]:hover) {
      background: var(--ag-tabs-bg, transparent);
      color: var(--ag-tabs-text, #6b7280);
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

  @state()
  private declare _focusedTab: number;

  constructor() {
    super();
    this.activation = 'manual';
    this.activeTab = 0;
    this.orientation = 'horizontal';
    this.ariaLabel = '';
    this.ariaLabelledBy = '';
    this._tabs = [];
    this._panels = [];
    this._focusedTab = 0;
  }

  firstUpdated() {
    // Use a microtask to ensure child elements are ready
    Promise.resolve().then(() => {
      this._updateTabsAndPanels();
    });
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('activeTab')) {
      // Sync focused tab with active tab
      this._focusedTab = this.activeTab;
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

    // Add keyboard navigation event listeners
    this.addEventListener('keydown', this._handleKeyDown.bind(this));
    this.addEventListener('click', this._handleClick.bind(this));
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
      tab.setAttribute('tabindex', index === this._focusedTab ? '0' : '-1');

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

  private _handleKeyDown(event: KeyboardEvent) {
    if (!this._tabs.length) return;

    const { key } = event;
    const isHorizontal = this.orientation === 'horizontal';

    let newFocusedTab = this._focusedTab;
    let shouldActivate = false;

    switch (key) {
      case 'ArrowRight':
        if (isHorizontal) {
          newFocusedTab = (this._focusedTab + 1) % this._tabs.length;
          shouldActivate = this.activation === 'automatic';
          event.preventDefault();
        }
        break;
      case 'ArrowLeft':
        if (isHorizontal) {
          newFocusedTab = this._focusedTab === 0 ? this._tabs.length - 1 : this._focusedTab - 1;
          shouldActivate = this.activation === 'automatic';
          event.preventDefault();
        }
        break;
      case 'ArrowDown':
        if (!isHorizontal) {
          newFocusedTab = (this._focusedTab + 1) % this._tabs.length;
          shouldActivate = this.activation === 'automatic';
          event.preventDefault();
        }
        break;
      case 'ArrowUp':
        if (!isHorizontal) {
          newFocusedTab = this._focusedTab === 0 ? this._tabs.length - 1 : this._focusedTab - 1;
          shouldActivate = this.activation === 'automatic';
          event.preventDefault();
        }
        break;
      case 'Home':
        newFocusedTab = 0;
        shouldActivate = this.activation === 'automatic';
        event.preventDefault();
        break;
      case 'End':
        newFocusedTab = this._tabs.length - 1;
        shouldActivate = this.activation === 'automatic';
        event.preventDefault();
        break;
      case ' ':
      case 'Enter':
        if (this.activation === 'manual') {
          this._activateTab(this._focusedTab);
          event.preventDefault();
        }
        break;
    }

    if (newFocusedTab !== this._focusedTab) {
      this._setFocusedTab(newFocusedTab);
      if (shouldActivate) {
        this._activateTab(newFocusedTab);
      }
    }
  }

  private _handleClick(event: Event) {
    console.log('🔍 Tab click handler called, target:', event.target);
    // Find the actual ag-tab element, even if clicking on child elements
    let clickedTab = event.target as Element;

    // Traverse up the DOM tree to find the ag-tab element
    while (clickedTab && clickedTab.tagName !== 'AG-TAB') {
      clickedTab = clickedTab.parentElement as Element;
      // Safety check to avoid infinite loop
      if (clickedTab === this) break;
    }

    if (clickedTab && clickedTab.tagName === 'AG-TAB') {
      const tab = clickedTab as Tab;
      console.log('✅ Found ag-tab element:', tab, 'activation mode:', this.activation);

      // Check if tab is disabled
      if (tab.hasAttribute('disabled') || tab.getAttribute('aria-disabled') === 'true') {
        console.log('❌ Tab is disabled, skipping');
        return;
      }

      const tabIndex = this._tabs.indexOf(tab);
      console.log('📍 Tab index:', tabIndex, 'current active:', this.activeTab);
      if (tabIndex >= 0) {
        console.log('🎯 Calling _activateTab for index:', tabIndex);
        this._activateTab(tabIndex);
      }
    } else {
      console.log('❌ No ag-tab element found, clicked element:', clickedTab?.tagName);
    }
  }

  private _setFocusedTab(index: number) {
    if (index >= 0 && index < this._tabs.length) {
      this._focusedTab = index;
      this._updateTabsAndPanels();
      this._tabs[index].focus();
    }
  }

  private _activateTab(index: number) {
    if (index >= 0 && index < this._tabs.length) {
      const previousTab = this.activeTab;

      // Check if the tab is disabled
      const tab = this._tabs[index];
      if (tab.hasAttribute('disabled') || tab.getAttribute('aria-disabled') === 'true') {
        return;
      }

      this._setFocusedTab(index);

      if (previousTab !== index) {
        this.activeTab = index;

        // Dispatch custom event
        this.dispatchEvent(new CustomEvent('tab-change', {
          detail: {
            activeTab: index,
            previousTab: previousTab
          },
          bubbles: true
        }));
      }
    }
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