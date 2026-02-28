import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { ReactHeader } from './components/ag/Header/react/ReactHeader'
import { ReactBreadcrumb } from './components/ag/Breadcrumb/react/ReactBreadcrumb'
import { ReactAvatar } from './components/ag/Avatar/react/ReactAvatar'
import { ReactSpinner } from './components/ag/Spinner/react/ReactSpinner'
import { SkinSwitcher } from './SkinSwitcher'
import { products } from './data/products'
import { TanstackPanel } from './panels/TanstackPanel'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  )

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(t)
  }, [])

  function toggleTheme() {
    const html = document.documentElement
    const dark = html.getAttribute('data-theme') === 'dark'
    if (dark) { html.removeAttribute('data-theme'); setIsDark(false) }
    else { html.setAttribute('data-theme', 'dark'); setIsDark(true) }
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Inventory', current: true },
  ]

  return (
    <>
      <SkinSwitcher />
      <ReactHeader contentJustify="between">
        <span slot="logo" style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--ag-primary)' }}>
          AgnosticUI
        </span>
        <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <ReactAvatar text="AB" variant="info" />
      </ReactHeader>

      <main className="app-main">
        <ReactBreadcrumb items={breadcrumbItems} type="slash" />

        <div className="page-title-row">
          <h1 className="page-title">Inventory</h1>
        </div>

        {isLoading ? (
          <div className="page-loading">
            <ReactSpinner size="large" aria-label="Loading inventory…" />
          </div>
        ) : (
          <TanstackPanel products={products} />
        )}
      </main>
    </>
  )
}
