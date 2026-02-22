import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import 'gridjs/dist/theme/mermaid.min.css'
import './app.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
