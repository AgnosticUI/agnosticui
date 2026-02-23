import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators.js'
import { Grid, html as gridHtml } from 'gridjs'
import '../components/ag/Alert/core/Alert'
import type { Product } from '../data/products'

export class GridJsPanel extends LitElement {
  // Light DOM: bridge CSS lives in global app.css which now reaches this component
  override createRenderRoot() { return this }

  @property({ type: Array }) products: Product[] = []

  private grid: Grid | null = null

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

  override render() {
    return html`
      <div style="margin-bottom: var(--ag-space-4)">
        <ag-alert variant="info">
          Grid.js renders its own search, sort, and pagination controls. AgnosticUI
          provides the application shell — <code>--ag-*</code> tokens are bridged to
          Grid.js's stylesheet via targeted CSS class overrides.
        </ag-alert>
      </div>
      <div id="grid-container"></div>
    `
  }

  override firstUpdated() {
    const container = this.renderRoot.querySelector('#grid-container') as HTMLElement
    this.grid = new Grid({
      columns: this.columns,
      data: this.products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
      sort: true,
      search: true,
      pagination: { limit: 10 },
    }).render(container)
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('products') && this.grid) {
      this.grid.updateConfig({
        data: this.products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
      }).forceRender()
    }
  }
}

if (!customElements.get('gridjs-panel')) {
  customElements.define('gridjs-panel', GridJsPanel)
}
