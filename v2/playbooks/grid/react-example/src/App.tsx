import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { ReactHeader } from './components/ag/Header/react/ReactHeader'
import { ReactBreadcrumb } from './components/ag/Breadcrumb/react/ReactBreadcrumb'
import { ReactAvatar } from './components/ag/Avatar/react/ReactAvatar'
import { ReactSelectionButtonGroup } from './components/ag/SelectionButtonGroup/react/ReactSelectionButtonGroup'
import { ReactSelectionButton } from './components/ag/SelectionButton/react/ReactSelectionButton'
import { SkinSwitcher } from './SkinSwitcher'
import { products } from './data/products'
import { SimplePanel } from './panels/SimplePanel'
import { GridJsPanel } from './panels/GridJsPanel'
import { TanstackPanel } from './panels/TanstackPanel'

type PanelView = 'simple' | 'gridjs' | 'tanstack'

export default function App() {
  const [activePanel, setActivePanel] = useState<PanelView>('simple')
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  )

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

  function handlePanelChange(e: CustomEvent) {
    setActivePanel(e.detail.value as PanelView)
  }

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
          <div className="view-as-row">
            <span className="view-as-label">View as:</span>
            <ReactSelectionButtonGroup
              type="radio"
              name="panel-view"
              legendHidden
              legend="View as"
              shape="rounded"
              value={activePanel}
              onSelectionChange={handlePanelChange}
            >
              <ReactSelectionButton value="simple" label="Simple">Simple</ReactSelectionButton>
              <ReactSelectionButton value="gridjs" label="Grid.js">Grid.js</ReactSelectionButton>
              <ReactSelectionButton value="tanstack" label="TanStack">TanStack</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
        </div>

        {activePanel === 'simple' && <SimplePanel products={products} />}
        {activePanel === 'gridjs' && <GridJsPanel products={products} />}
        {activePanel === 'tanstack' && <TanstackPanel products={products} />}
      </main>
    </>
  )
}
