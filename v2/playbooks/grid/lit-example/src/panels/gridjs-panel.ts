import { LitElement, html } from 'lit'
import { property, state } from 'lit/decorators.js'
import { Grid, html as gridHtml } from 'gridjs'
import '../components/ag/Input/core/Input'
import '../components/ag/Pagination/core/Pagination'
import type { Product } from '../data/products'

const PAGE_SIZE = 10

export class GridJsPanel extends LitElement {
  // Light DOM: bridge CSS lives in global app.css which now reaches this component
  override createRenderRoot() { return this }

  @property({ type: Array }) products: Product[] = []

  @state() private currentPage = 1
  @state() private totalRows = 0

  private grid: Grid | null = null
  private observer: MutationObserver | null = null
  private rafId = 0

  private get totalPages() {
    const rows = this.totalRows || this.products.length
    return Math.max(1, Math.ceil(rows / PAGE_SIZE))
  }

  private get columns() {
    return [
      { name: 'Name' },
      { name: 'Category' },
      {
        name: 'Price',
        formatter: (cell: unknown) => `$${Number(cell).toFixed(2)}`,
      },
      { name: 'Stock' },
      {
        name: 'Status',
        formatter: (cell: unknown) =>
          gridHtml(`<span class="status-cell status-cell--${cell}">${cell}</span>`),
      },
    ]
  }

  // Read current page + total rows from Grid.js's hidden pagination DOM
  private syncFromDom(container: HTMLElement) {
    const bolds = container.querySelectorAll('.gridjs-summary b')
    if (bolds.length >= 3) {
      const n = parseInt(bolds[2].textContent || '0', 10)
      if (!isNaN(n) && n >= 0) this.totalRows = n
    }
    const activeBtn = container.querySelector<HTMLElement>(
      '.gridjs-pages button[aria-selected="true"], .gridjs-pages button.gridjs-currentPage'
    )
    if (activeBtn) {
      const p = parseInt(activeBtn.textContent?.trim() || '1', 10)
      if (!isNaN(p) && p > 0) this.currentPage = p
    }
  }

  override firstUpdated() {
    const container = this.querySelector('#grid-container') as HTMLElement

    this.grid = new Grid({
      columns: this.columns,
      data: this.products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
      sort: true,
      search: true,
      pagination: { limit: PAGE_SIZE },
    }).render(container)

    this.observer = new MutationObserver(() => {
      cancelAnimationFrame(this.rafId)
      this.rafId = requestAnimationFrame(() => this.syncFromDom(container))
    })
    this.observer.observe(container, { childList: true, subtree: true })
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('products') && this.grid) {
      this.grid.updateConfig({
        data: this.products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
      }).forceRender()
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback()
    cancelAnimationFrame(this.rafId)
    this.observer?.disconnect()
    this.grid?.destroy()
  }

  private handleSearch(e: Event) {
    const val = (e.target as HTMLInputElement).value
    this.grid?.updateConfig({ search: { keyword: val } }).forceRender()
  }

  private handlePageChange(e: CustomEvent) {
    const page = e.detail.page as number
    this.grid?.updateConfig({
      pagination: { limit: PAGE_SIZE, page: page - 1 },
    }).forceRender()
    // currentPage syncs via MutationObserver after Grid.js re-renders
  }

  override render() {
    return html`
      <div>
        <div class="search-bar" style="margin-bottom: var(--ag-space-4)">
          <ag-input
            type="search"
            placeholder="Search…"
            rounded
            @input="${this.handleSearch}"
          ></ag-input>
        </div>

        <div id="grid-container"></div>

        <div style="margin-top: var(--ag-space-4)">
          <ag-pagination
            .current="${this.currentPage}"
            .totalPages="${this.totalPages}"
            @page-change="${this.handlePageChange}"
          ></ag-pagination>
        </div>
      </div>
    `
  }
}

if (!customElements.get('gridjs-panel')) {
  customElements.define('gridjs-panel', GridJsPanel)
}
