import { Grid } from 'gridjs-react'
import { html } from 'gridjs'
import { ReactAlert } from '../components/ag/Alert/react/ReactAlert'
import type { Product } from '../data/products'

const columns = [
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
      html(`<span class="status-cell status-cell--${cell}">${cell}</span>`),
  },
]

export function GridJsPanel({ products }: { products: Product[] }) {
  const data = products.map(p => [p.name, p.category, p.price, p.stock, p.status])

  return (
    <div>
      <div style={{ marginBottom: 'var(--ag-space-4)' }}>
        <ReactAlert variant="info">
          Grid.js renders its own search, sort, and pagination controls. AgnosticUI
          provides the application shell — <code>--ag-*</code> tokens are bridged to
          Grid.js's stylesheet via targeted CSS class overrides.
        </ReactAlert>
      </div>

      <Grid
        columns={columns}
        data={data}
        sort
        search
        pagination={{ limit: 10 }}
      />
    </div>
  )
}
