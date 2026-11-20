/**
 * Skin Switcher — shared framework-agnostic logic.
 *
 * Imported by each framework's SkinSwitcher component (React, Vue, Lit).
 * Contains the SKINS list, DOM helpers, and localStorage persistence.
 */

import { SKINS_CSS } from './skins-css-data.js';

export const SKINS = [
  { id: 'evergreen', label: 'Evergreen', swatch: '#00a87f' },
  { id: '', label: 'Default', swatch: '#297aff' },
  { id: 'deep-forest', label: 'Deep Forest', swatch: '#1f514c' },
  { id: 'claymorphic', label: 'Claymorphic', swatch: '#c96442' },
  { id: 'mo-neobrut', label: 'Mo-Neobrut', swatch: '#00bcd4' },
  { id: 'coffee-espresso', label: 'Coffee Espresso', swatch: '#6f4e37' },
  { id: 'monochromatic', label: 'Monochromatic', swatch: '#000000' },
  { id: 'paper', label: 'Paper', swatch: '#433422' },
  { id: 'solarized', label: 'Solarized', swatch: '#2aa198' },
  { id: 'tokyo-ink', label: 'Tokyo Ink', swatch: '#c92a38' },
  { id: 'nordic-aurora', label: 'Nordic Aurora', swatch: '#0f766e' },
  { id: 'swiss-grid', label: 'Swiss Grid', swatch: '#e03600' },
  { id: 'velvet-plum', label: 'Velvet Plum', swatch: '#881337' },
  { id: 'copper-patina', label: 'Copper Patina', swatch: '#1b6b63' },
  { id: 'warm-vellum', label: 'Warm Vellum', swatch: '#2c2a26' },
  { id: 'press-crimson', label: 'Press Crimson', swatch: '#b81d24' },
  { id: 'coral-harbor', label: 'Coral Harbor', swatch: '#e03e52' },
  { id: 'neon-obsidian', label: 'Neon Obsidian', swatch: '#5200ff' },
  { id: 'ivory-cobalt', label: 'Ivory Cobalt', swatch: '#0b5fff' },
  { id: 'obsidian-minimal', label: 'Obsidian Minimal', swatch: '#171717' },
  { id: 'slate-azure', label: 'Slate Azure', swatch: '#0369a1' },
  { id: 'terracotta-clay', label: 'Terracotta Clay', swatch: '#c2410c' },
  { id: 'emerald-vault', label: 'Emerald Vault', swatch: '#047857' },
  { id: 'indigo-dusk', label: 'Indigo Dusk', swatch: '#4338ca' },
  { id: 'golden-amber', label: 'Golden Amber', swatch: '#b45309' },
  { id: 'rosewood-ink', label: 'Rosewood Ink', swatch: '#9f1239' },
  { id: 'pebble-cerulean', label: 'Pebble Cerulean', swatch: '#1a73e8' },
  { id: 'olive-moss', label: 'Olive Moss', swatch: '#4d6629' },
  { id: 'mulberry-slate', label: 'Mulberry Slate', swatch: '#86198f' },
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
