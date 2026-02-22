import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators.js'
import { Grid, html as gridHtml } from 'gridjs'
import '../components/ag/Alert/core/Alert'
import type { Product } from '../data/products'

export class GridJsPanel extends LitElement {
  /*
   * Grid.js injects into shadow DOM — bridge CSS must live here,
   * not in the global app.css, because shadow DOM encapsulates styles.
   */
  static override styles = css`
    :host { display: block; }

    .gridjs-wrapper {
      border: 1px solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      font-family: "Inter", sans-serif;
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
    }
    .gridjs-table {
      background-color: var(--ag-background-primary);
    }
    .gridjs-th {
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
      border-bottom: 2px solid var(--ag-border);
    }
    .gridjs-td {
      border-bottom: 1px solid var(--ag-border);
      background-color: var(--ag-background-primary);
    }
    .gridjs-search-input {
      border: 1px solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      font-family: inherit;
      font-size: inherit;
      padding: 0.375rem 0.75rem;
      background-color: var(--ag-background-primary);
      color: var(--ag-text-primary);
    }
    .gridjs-search-input:focus {
      outline: 3px solid var(--ag-primary);
      outline-offset: 2px;
    }
    .gridjs-pages button { color: var(--ag-primary); }
    .gridjs-pages button:hover { background-color: var(--ag-background-secondary); }
    .gridjs-pages button[disabled] { color: var(--ag-text-secondary); }

    .status-cell--active       { color: var(--ag-success-text); font-weight: 500; }
    .status-cell--low-stock    { color: var(--ag-warning-text); font-weight: 500; }
    .status-cell--discontinued { color: var(--ag-text-secondary); font-weight: 500; }
  `

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
