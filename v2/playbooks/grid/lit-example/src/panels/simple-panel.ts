// Skin swap demo: importing brutalist-light.css after ag-tokens.css
// reskins this entire panel — no component code changes needed.

import { LitElement, html, css, nothing } from 'lit'
import { property, state } from 'lit/decorators.js'
import '../components/ag/Input/core/Input'
import '../components/ag/Tag/core/Tag'
import '../components/ag/IconButton/core/IconButton'
import '../components/ag/Toast/core/Toast'
import '../components/ag/EmptyState/core/EmptyState'
import '../components/ag/Pagination/core/Pagination'
import type { Product } from '../data/products'

type SortCol = 'name' | 'category' | 'price' | 'stock' | 'status' | null
type SortDir = 'asc' | 'desc' | null

const PAGE_SIZE = 10

const pencilIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
</svg>`

const chevronUp = html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>`
const chevronDown = html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`

export class SimplePanel extends LitElement {
  static override styles = css`:host { display: block; }`

  @property({ type: Array }) products: Product[] = []

  @state() private search = ''
  @state() private sortCol: SortCol = null
  @state() private sortDir: SortDir = null
  @state() private page = 1
  @state() private toastOpen = false
  @state() private toastMsg = ''

  private toastTimer: ReturnType<typeof setTimeout> | null = null

  private statusVariant(status: Product['status']) {
    if (status === 'active') return 'success'
    if (status === 'low-stock') return 'warning'
    return ''
  }

  private handleSearch(e: Event) {
    this.search = (e.target as HTMLInputElement).value
    this.page = 1
  }

  private handleSort(col: SortCol) {
    if (this.sortCol !== col) {
      this.sortCol = col
      this.sortDir = 'asc'
    } else if (this.sortDir === 'asc') {
      this.sortDir = 'desc'
    } else {
      this.sortCol = null
      this.sortDir = null
    }
  }

  private showToast(msg: string) {
    this.toastMsg = msg
    this.toastOpen = true
    if (this.toastTimer) clearTimeout(this.toastTimer)
    this.toastTimer = setTimeout(() => { this.toastOpen = false }, 3000)
  }

  private get filtered() {
    const term = this.search.toLowerCase()
    return this.products.filter(p => p.name.toLowerCase().includes(term))
  }

  private get sorted() {
    const { sortCol, sortDir } = this
    if (!sortCol || !sortDir) return this.filtered
    return [...this.filtered].sort((a, b) => {
      const av = a[sortCol]
      const bv = b[sortCol]
      if (av < bv) return sortDir === 'asc' ? -1 : 1
      if (av > bv) return sortDir === 'asc' ? 1 : -1
      return 0
    })
  }

  private get totalPages() {
    return Math.max(1, Math.ceil(this.sorted.length / PAGE_SIZE))
  }

  private get pageRows() {
    return this.sorted.slice((this.page - 1) * PAGE_SIZE, this.page * PAGE_SIZE)
  }

  private sortIcon(col: SortCol) {
    if (this.sortCol !== col) return nothing
    return this.sortDir === 'asc' ? chevronUp : chevronDown
  }

  override render() {
    const { pageRows, totalPages } = this
    return html`
      <div>
        <div class="search-bar" style="margin-bottom: var(--ag-space-4)">
          <ag-input
            type="search"
            placeholder="Search products…"
            .value="${this.search}"
            @input="${this.handleSearch}"
          ></ag-input>
        </div>

        ${pageRows.length === 0 ? html`
          <ag-empty-state
            title="No products found."
            subtitle="Try a different search term."
          ></ag-empty-state>
        ` : html`
          <div style="overflow-x: auto">
            <table class="ag-table ag-table--hoverable ag-table--striped">
              <caption class="visually-hidden">Product inventory</caption>
              <thead>
                <tr>
                  <th @click="${() => this.handleSort('name')}" style="cursor:pointer;user-select:none;white-space:nowrap">
                    Name ${this.sortIcon('name')}
                  </th>
                  <th class="col-category" @click="${() => this.handleSort('category')}" style="cursor:pointer;user-select:none;white-space:nowrap">
                    Category ${this.sortIcon('category')}
                  </th>
                  <th @click="${() => this.handleSort('price')}" style="cursor:pointer;user-select:none;white-space:nowrap">
                    Price ${this.sortIcon('price')}
                  </th>
                  <th @click="${() => this.handleSort('stock')}" style="cursor:pointer;user-select:none;white-space:nowrap">
                    Stock ${this.sortIcon('stock')}
                  </th>
                  <th @click="${() => this.handleSort('status')}" style="cursor:pointer;user-select:none;white-space:nowrap">
                    Status ${this.sortIcon('status')}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${pageRows.map(p => html`
                  <tr>
                    <td data-label="Name">${p.name}</td>
                    <td class="col-category" data-label="Category">${p.category}</td>
                    <td data-label="Price">$${p.price.toFixed(2)}</td>
                    <td data-label="Stock">${p.stock}</td>
                    <td data-label="Status">
                      <ag-tag variant="${this.statusVariant(p.status)}">${p.status}</ag-tag>
                    </td>
                    <td data-label="Actions">
                      <ag-icon-button
                        label="Edit ${p.name}"
                        @icon-button-click="${() => this.showToast(`Editing: ${p.name}`)}"
                      >${pencilIcon}</ag-icon-button>
                    </td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        `}

        <div style="margin-top: var(--ag-space-4)">
          <ag-pagination
            .current="${this.page}"
            .totalPages="${totalPages}"
            @page-change="${(e: CustomEvent) => { this.page = e.detail.page }}"
          ></ag-pagination>
        </div>

        <ag-toast
          .open="${this.toastOpen}"
          type="success"
          position="top-end"
          .showCloseButton="${true}"
          @toast-close="${() => { this.toastOpen = false }}"
        >${this.toastMsg}</ag-toast>
      </div>
    `
  }
}

if (!customElements.get('simple-panel')) {
  customElements.define('simple-panel', SimplePanel)
}
