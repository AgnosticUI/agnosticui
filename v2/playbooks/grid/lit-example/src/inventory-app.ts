import { LitElement, html, css } from 'lit'
import { state } from 'lit/decorators.js'

const sunIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
const moonIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
import './components/ag/Header/core/Header'
import './components/ag/Breadcrumb/core/Breadcrumb'
import './components/ag/Avatar/core/Avatar'
import './components/ag/SelectionButtonGroup/core/SelectionButtonGroup'
import './components/ag/SelectionButton/core/SelectionButton'
import './panels/simple-panel'
import './panels/gridjs-panel'
import './panels/tanstack-panel'
import './skin-switcher'
import { products } from './data/products'
import type { BreadcrumbItem } from './components/ag/Breadcrumb/core/Breadcrumb'
import type { SelectionButtonChangeEventDetail } from './components/ag/SelectionButtonGroup/core/SelectionButtonGroup'

type PanelView = 'simple' | 'gridjs' | 'tanstack'

export class InventoryApp extends LitElement {
  // Light DOM so global app.css shell styles (.app-main, .page-title-row, etc.) apply
  override createRenderRoot() { return this }

  @state() private activePanel: PanelView = 'simple'
  @state() private _isDark = document.documentElement.getAttribute('data-theme') === 'dark'

  private _toggleTheme() {
    const html = document.documentElement
    const dark = html.getAttribute('data-theme') === 'dark'
    if (dark) { html.removeAttribute('data-theme'); this._isDark = false }
    else { html.setAttribute('data-theme', 'dark'); this._isDark = true }
  }

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
      <skin-switcher></skin-switcher>
      <ag-header content-justify="between">
        <span slot="logo" style="font-weight:700;font-size:1.125rem;color:var(--ag-primary)">AgnosticUI</span>
        <button class="theme-toggle" aria-label="Toggle theme" @click=${() => this._toggleTheme()}>
          ${this._isDark ? sunIcon : moonIcon}
        </button>
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
