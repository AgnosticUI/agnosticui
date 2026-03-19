import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import '../../skins/skins-bundle.css';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
