import { LitElement, html } from 'lit'
import { state } from 'lit/decorators.js'

const sunIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
const moonIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`

import './components/ag/Header/core/Header'
import './components/ag/Breadcrumb/core/Breadcrumb'
import './components/ag/Avatar/core/Avatar'
import './components/ag/Spinner/core/Spinner'
import './panels/tanstack-panel'
import './skin-switcher'
import { products } from './data/products'
import type { BreadcrumbItem } from './components/ag/Breadcrumb/core/Breadcrumb'

export class InventoryApp extends LitElement {
  // Light DOM so global app.css shell styles (.app-main, .page-title-row, etc.) apply
  override createRenderRoot() { return this }

  @state() private _isLoading = true
  @state() private _isDark = document.documentElement.getAttribute('data-theme') === 'dark'

  private _loadTimer: ReturnType<typeof setTimeout> | null = null

  override connectedCallback() {
    super.connectedCallback()
    this._loadTimer = setTimeout(() => { this._isLoading = false }, 1000)
  }

  override disconnectedCallback() {
    super.disconnectedCallback()
    if (this._loadTimer) clearTimeout(this._loadTimer)
  }

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
        </div>

        ${this._isLoading ? html`
          <div class="page-loading">
            <ag-spinner size="large" aria-label="Loading inventory…"></ag-spinner>
          </div>
        ` : html`
          <tanstack-panel .products="${products}"></tanstack-panel>
        `}
      </main>
    `
  }
}

if (!customElements.get('inventory-app')) {
  customElements.define('inventory-app', InventoryApp)
}
