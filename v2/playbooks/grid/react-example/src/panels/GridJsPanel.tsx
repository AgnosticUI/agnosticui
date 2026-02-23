import { useEffect, useRef, useState } from 'react'
import { Grid, html } from 'gridjs'
import { ReactAlert } from '../components/ag/Alert/react/ReactAlert'
import { ReactPagination } from '../components/ag/Pagination/react/ReactPagination'
import type { Product } from '../data/products'

const PAGE_SIZE = 10

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
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<Grid | null>(null)
  const observerRef = useRef<MutationObserver | null>(null)
  const rafRef = useRef(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalRows, setTotalRows] = useState(products.length)

  const totalPages = Math.max(1, Math.ceil(totalRows / PAGE_SIZE))

  // Read current page + total rows from Grid.js's hidden pagination DOM
  function syncFromDom(container: HTMLElement) {
    const bolds = container.querySelectorAll('.gridjs-summary b')
    if (bolds.length >= 3) {
      const n = parseInt(bolds[2].textContent || '0', 10)
      if (!isNaN(n) && n >= 0) setTotalRows(n)
    }
    const activeBtn = container.querySelector<HTMLElement>(
      '.gridjs-pages button[aria-selected="true"], .gridjs-pages button.gridjs-currentPage'
    )
    if (activeBtn) {
      const p = parseInt(activeBtn.textContent?.trim() || '1', 10)
      if (!isNaN(p) && p > 0) setCurrentPage(p)
    }
  }

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    gridRef.current = new Grid({
      columns,
      data: products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
      sort: true,
      search: true,
      pagination: { limit: PAGE_SIZE },
    }).render(container)

    observerRef.current = new MutationObserver(() => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => syncFromDom(container))
    })
    observerRef.current.observe(container, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafRef.current)
      observerRef.current?.disconnect()
      gridRef.current?.destroy()
    }
  }, [])

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.updateConfig({
        data: products.map(p => [p.name, p.category, p.price, p.stock, p.status]),
      }).forceRender()
    }
  }, [products])

  function handlePageChange(e: CustomEvent) {
    const page = e.detail.page as number
    gridRef.current?.updateConfig({
      pagination: { limit: PAGE_SIZE, page: page - 1 },
    }).forceRender()
    // currentPage syncs via MutationObserver after Grid.js re-renders
  }

  return (
    <div>
      <div style={{ marginBottom: 'var(--ag-space-4)' }}>
        <ReactAlert variant="info">
          Grid.js renders its own search and sort controls. AgnosticUI provides the
          application shell — <code>--ag-*</code> tokens are bridged to Grid.js's
          stylesheet via targeted CSS class overrides. Pagination is handled by
          AgnosticUI's <code>ag-pagination</code>.
        </ReactAlert>
      </div>

      <div ref={containerRef} />

      <div style={{ marginTop: 'var(--ag-space-4)' }}>
        <ReactPagination
          current={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
