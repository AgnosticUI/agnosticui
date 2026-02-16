/**
 * Skin Switcher — shared framework-agnostic logic.
 *
 * Imported by each framework's SkinSwitcher component (React, Vue, Lit).
 * Contains the SKINS list, DOM helpers, and localStorage persistence.
 */

export const SKINS = [
  { id: '', label: 'Default', swatch: '#297aff' },
  { id: 'deep-forest', label: 'Deep Forest', swatch: '#1f514c' },
  { id: 'terra-soft', label: 'Terra Soft', swatch: '#ff6a3e' },
  { id: 'claymorphic', label: 'Claymorphic', swatch: '#c96442' },
  { id: 'retro-brutalist', label: 'Retro Brutalist', swatch: '#ffdb33' },
  { id: 'monochromatic', label: 'Monochromatic', swatch: '#000000' },
  { id: 'muted-minimal', label: 'Muted Minimal', swatch: '#4a90a4' },
  { id: 'autumn-slate', label: 'Autumn Slate', swatch: '#d2691e' },
  { id: 'mo-neobrut', label: 'Mo-Neobrut', swatch: '#00bcd4' },
  { id: 'black-cream', label: 'Black Cream', swatch: '#1a1a1a' },
  { id: 'neons-on-black', label: 'Neons On Black', swatch: '#00ffff' },
  { id: 'glassmorphism', label: 'Glassmorphism', swatch: '#6366f1' },
  { id: 'rose-blush', label: 'Rose Blush', swatch: '#e11d73' },
  { id: 'high-contrast', label: 'High Contrast', swatch: '#0050d8' },
  { id: 'coffee-espresso', label: 'Coffee Espresso', swatch: '#6f4e37' },
  { id: 'sage', label: 'Sage', swatch: '#5f8a6e' },
];

/** Apply a skin class to <html> and persist to localStorage. */
export function applySkin(skinId) {
  const html = document.documentElement;
  html.className = html.className.replace(/\bag-skin-[\w-]+\b/g, '').trim();
  if (skinId) html.classList.add(`ag-skin-${skinId}`);
  localStorage.setItem('ag-skin', skinId);
}

/** Apply or remove the dark-mode data attribute and persist. */
export function applyTheme(dark) {
  if (dark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem('ag-theme', dark ? 'dark' : 'light');
}

/** Restore skin + theme preferences from localStorage. Call once on load. */
export function restorePrefs() {
  const skin = localStorage.getItem('ag-skin');
  if (skin) applySkin(skin);
  const theme = localStorage.getItem('ag-theme');
  if (theme === 'dark') applyTheme(true);
}
