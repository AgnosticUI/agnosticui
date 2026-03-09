/**
 * Skin Switcher — shared framework-agnostic logic.
 *
 * Imported by each framework's SkinSwitcher component (React, Vue, Lit).
 * Contains the SKINS list, DOM helpers, and localStorage persistence.
 */

import { SKINS_CSS } from './skins-css-data.js';

export const SKINS = [
  // Default anchor
  { id: '', label: 'Default', swatch: '#297aff' },
  // Reds / pinks (~330–10°)
  { id: 'rose-blush', label: 'Rose Blush', swatch: '#e11d73' },
  // Oranges / terracottas (~10–40°)
  { id: 'terra-soft', label: 'Terra Soft', swatch: '#ff6a3e' },
  { id: 'claymorphic', label: 'Claymorphic', swatch: '#c96442' },
  { id: 'autumn-slate', label: 'Autumn Slate', swatch: '#d2691e' },
  { id: 'coffee-espresso', label: 'Coffee Espresso', swatch: '#6f4e37' },
  // Yellows (~40–65°)
  { id: 'retro-brutalist', label: 'Retro Brutalist', swatch: '#ffdb33' },
  // Greens (~90–160°)
  { id: 'sage', label: 'Sage', swatch: '#5f8a6e' },
  { id: 'deep-forest', label: 'Deep Forest', swatch: '#1f514c' },
  // Cyans / teals (~165–195°)
  { id: 'neons-on-black', label: 'Neons On Black', swatch: '#00ffff' },
  { id: 'mo-neobrut', label: 'Mo-Neobrut', swatch: '#00bcd4' },
  { id: 'muted-minimal', label: 'Muted Minimal', swatch: '#4a90a4' },
  // Blues / indigos (~210–260°)
  { id: 'high-contrast', label: 'High Contrast', swatch: '#0050d8' },
  { id: 'glassmorphism', label: 'Glassmorphism', swatch: '#6366f1' },
  // Neutrals / achromatics
  { id: 'monochromatic', label: 'Monochromatic', swatch: '#000000' },
  { id: 'black-cream', label: 'Black Cream', swatch: '#1a1a1a' },
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

/** Copy both light + dark CSS for a skin to clipboard. Returns true on success. */
export async function copySkinCSS(skinId) {
  const entry = SKINS_CSS[skinId];
  if (!entry) return false;
  const parts = [];
  if (entry.light) parts.push(`/* ── Light mode ── */\n${entry.light}`);
  if (entry.dark) parts.push(`/* ── Dark mode ── */\n${entry.dark}`);
  try {
    await navigator.clipboard.writeText(parts.join('\n\n'));
    return true;
  } catch {
    return false;
  }
}

/** Apply persisted custom CSS vars from localStorage via a style tag (preserves light/dark blocks). */
export function restoreCustomCSS() {
  const saved = localStorage.getItem('ag-custom-css');
  if (!saved) return;
  let tag = document.getElementById('ag-custom-theme');
  if (!tag) {
    tag = document.createElement('style');
    tag.id = 'ag-custom-theme';
    document.head.appendChild(tag);
  }
  tag.textContent = saved;
}

/** Restore skin + theme preferences from localStorage. Call once on load. */
export function restorePrefs() {
  const skin = localStorage.getItem('ag-skin');
  if (skin) applySkin(skin);
  const theme = localStorage.getItem('ag-theme');
  if (theme === 'dark') applyTheme(true);
  restoreCustomCSS();
}
