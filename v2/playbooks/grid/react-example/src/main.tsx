import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './components/ag/styles/skins-bundle.css'
import './components/ag/styles/skin-switcher.css'
import 'gridjs/dist/theme/mermaid.min.css'
import './App.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
