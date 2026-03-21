import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../../skins/skins-bundle.css';
import '../../skins/skin-switcher.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
