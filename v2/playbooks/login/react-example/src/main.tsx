import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// AgnosticUI CSS Tokens
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
