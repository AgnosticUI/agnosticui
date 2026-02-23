// Skin swap demo: importing brutalist-light.css after ag-tokens.css
// reskins this entire panel — no component code changes needed.

import { useState, useMemo, useRef } from 'react'
import { Pencil, ChevronUp, ChevronDown } from 'lucide-react'
import { ReactInput } from '../components/ag/Input/react/ReactInput'
import { ReactTag } from '../components/ag/Tag/react/ReactTag'
import { ReactIconButton } from '../components/ag/IconButton/react/ReactIconButton'
import { ReactToast } from '../components/ag/Toast/react/ReactToast'
import { ReactEmptyState } from '../components/ag/EmptyState/react/ReactEmptyState'
import { ReactPagination } from '../components/ag/Pagination/react/ReactPagination'
import type { TagVariant } from '../components/ag/Tag/core/_Tag'
import type { Product } from '../data/products'

type SortCol = 'name' | 'category' | 'price' | 'stock' | 'status' | null
type SortDir = 'asc' | 'desc' | null

const PAGE_SIZE = 10

function statusVariant(status: Product['status']): TagVariant {
  if (status === 'active') return 'success'
  if (status === 'low-stock') return 'warning'
  return ''
}

export function SimplePanel({ products }: { products: Product[] }) {
  const [search, setSearch] = useState('')
  const [sortCol, setSortCol] = useState<SortCol>(null)
  const [sortDir, setSortDir] = useState<SortDir>(null)
  const [page, setPage] = useState(1)
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleSearch(e: Event) {
    setSearch((e.target as HTMLInputElement).value)
    setPage(1)
  }

  function handleSort(col: SortCol) {
    if (sortCol !== col) {
      setSortCol(col)
      setSortDir('asc')
    } else if (sortDir === 'asc') {
      setSortDir('desc')
    } else if (sortDir === 'desc') {
      setSortCol(null)
      setSortDir(null)
    }
  }

  function showToast(msg: string) {
    setToastMsg(msg)
    setToastOpen(true)
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToastOpen(false), 3000)
  }

  const filtered = useMemo(() => {
    const term = search.toLowerCase()
    return products.filter(p => p.name.toLowerCase().includes(term))
  }, [products, search])

  const sorted = useMemo(() => {
    if (!sortCol || !sortDir) return filtered
    return [...filtered].sort((a, b) => {
      const av = a[sortCol]
      const bv = b[sortCol]
      if (av < bv) return sortDir === 'asc' ? -1 : 1
      if (av > bv) return sortDir === 'asc' ? 1 : -1
      return 0
    })
  }, [filtered, sortCol, sortDir])

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
  const pageRows = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function SortIcon({ col }: { col: SortCol }) {
    if (sortCol !== col) return null
    return sortDir === 'asc'
      ? <ChevronUp size={14} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--ag-primary)' }} />
      : <ChevronDown size={14} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--ag-primary)' }} />
  }

  return (
    <div>
      <div className="search-bar">
        <ReactInput
          type="search"
          placeholder="Search products…"
          value={search}
          onInput={handleSearch}
        />
      </div>

      {pageRows.length === 0 ? (
        <ReactEmptyState
          title="No products found."
          subtitle="Try a different search term."
        />
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="ag-table ag-table--hoverable ag-table--striped" style={{ width: '100%' }}>
            <caption className="visually-hidden">Product inventory</caption>
            <thead>
              <tr>
                <th onClick={() => handleSort('name')} style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }}>
                  Name <SortIcon col="name" />
                </th>
                <th className="col-category" onClick={() => handleSort('category')} style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }}>
                  Category <SortIcon col="category" />
                </th>
                <th onClick={() => handleSort('price')} style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }}>
                  Price <SortIcon col="price" />
                </th>
                <th onClick={() => handleSort('stock')} style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }}>
                  Stock <SortIcon col="stock" />
                </th>
                <th onClick={() => handleSort('status')} style={{ cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap' }}>
                  Status <SortIcon col="status" />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.map(p => (
                <tr key={p.id}>
                  <td data-label="Name">{p.name}</td>
                  <td className="col-category" data-label="Category">{p.category}</td>
                  <td data-label="Price">${p.price.toFixed(2)}</td>
                  <td data-label="Stock">{p.stock}</td>
                  <td data-label="Status">
                    <ReactTag variant={statusVariant(p.status)}>
                      {p.status}
                    </ReactTag>
                  </td>
                  <td data-label="Actions">
                    <ReactIconButton
                      label={`Edit ${p.name}`}
                      onIconButtonClick={() => showToast(`Editing: ${p.name}`)}
                    >
                      <Pencil size={16} />
                    </ReactIconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ marginTop: 'var(--ag-space-4)' }}>
        <ReactPagination
          current={page}
          totalPages={totalPages}
          onPageChange={(e: CustomEvent) => setPage(e.detail.page)}
        />
      </div>

      <ReactToast
        open={toastOpen}
        type="success"
        position="top-end"
        showCloseButton
        onToastClose={() => setToastOpen(false)}
      >
        {toastMsg}
      </ReactToast>
    </div>
  )
}
