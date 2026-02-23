import { LitElement, html, css } from 'lit'
import { state } from 'lit/decorators.js'
import './components/ag/Header/core/Header'
import './components/ag/Breadcrumb/core/Breadcrumb'
import './components/ag/Avatar/core/Avatar'
import './components/ag/SelectionButtonGroup/core/SelectionButtonGroup'
import './components/ag/SelectionButton/core/SelectionButton'
import './panels/simple-panel'
import './panels/gridjs-panel'
import './panels/tanstack-panel'
import { products } from './data/products'
import type { BreadcrumbItem } from './components/ag/Breadcrumb/core/Breadcrumb'
import type { SelectionButtonChangeEventDetail } from './components/ag/SelectionButtonGroup/core/SelectionButtonGroup'

type PanelView = 'simple' | 'gridjs' | 'tanstack'

export class InventoryApp extends LitElement {
  // Light DOM so global app.css shell styles (.app-main, .page-title-row, etc.) apply
  override createRenderRoot() { return this }

  @state() private activePanel: PanelView = 'simple'

  private readonly breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Inventory', current: true },
  ]

  private handlePanelChange(e: Event) {
    const detail = (e as CustomEvent<SelectionButtonChangeEventDetail>).detail
    this.activePanel = detail.value as PanelView
  }

  override render() {
    return html`
      <ag-header content-justify="between">
        <span slot="logo" style="font-weight:700;font-size:1.125rem;color:var(--ag-primary)">AgnosticUI</span>
        <ag-avatar text="AB" variant="info"></ag-avatar>
      </ag-header>

      <main class="app-main">
        <ag-breadcrumb .items="${this.breadcrumbItems}" type="slash"></ag-breadcrumb>

        <div class="page-title-row">
          <h1 class="page-title">Inventory</h1>
          <div class="view-as-row">
            <span class="view-as-label">View as:</span>
            <ag-selection-button-group
              type="radio"
              name="panel-view"
              .legendHidden="${true}"
              legend="View as"
              shape="rounded"
              value="${this.activePanel}"
              @selection-change="${this.handlePanelChange}"
            >
              <ag-selection-button value="simple" label="Simple">Simple</ag-selection-button>
              <ag-selection-button value="gridjs" label="Grid.js">Grid.js</ag-selection-button>
              <ag-selection-button value="tanstack" label="TanStack">TanStack</ag-selection-button>
            </ag-selection-button-group>
          </div>
        </div>

        ${this.activePanel === 'simple'
          ? html`<simple-panel .products="${products}"></simple-panel>`
          : this.activePanel === 'gridjs'
          ? html`<gridjs-panel .products="${products}"></gridjs-panel>`
          : html`<tanstack-panel .products="${products}"></tanstack-panel>`
        }
      </main>
    `
  }
}

if (!customElements.get('inventory-app')) {
  customElements.define('inventory-app', InventoryApp)
}
