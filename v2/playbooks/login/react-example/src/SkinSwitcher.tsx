import { useState, useEffect, useRef, useCallback } from 'react';

const SKINS = [
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
];

const paletteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12" r="0.5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"/>
  </svg>
);

const sunIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);

const moonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

function applySkin(skinId: string) {
  const html = document.documentElement;
  // Remove all skin classes
  html.className = html.className.replace(/\bag-skin-[\w-]+\b/g, '').trim();
  if (skinId) {
    html.classList.add(`ag-skin-${skinId}`);
  }
  localStorage.setItem('ag-skin', skinId);
}

function applyTheme(dark: boolean) {
  if (dark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem('ag-theme', dark ? 'dark' : 'light');
}

// Restore on load
(function restorePrefs() {
  const skin = localStorage.getItem('ag-skin');
  if (skin) applySkin(skin);
  const theme = localStorage.getItem('ag-theme');
  if (theme === 'dark') applyTheme(true);
})();

export function SkinSwitcher() {
  const [open, setOpen] = useState(false);
  const [skin, setSkin] = useState(() => localStorage.getItem('ag-skin') || '');
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setOpen(o => !o), []);

  // Keyboard shortcut
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggle();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggle]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  function handleSkin(id: string) {
    setSkin(id);
    applySkin(id);
  }

  function handleTheme(isDark: boolean) {
    setDark(isDark);
    applyTheme(isDark);
  }

  const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.userAgent);

  return (
    <div ref={panelRef}>
      {open && (
        <div className="skin-panel">
          <div className="skin-panel-section">
            <div className="skin-panel-label">Theme</div>
            <div className="skin-panel-themes">
              <button
                className={`skin-theme-btn${!dark ? ' active' : ''}`}
                onClick={() => handleTheme(false)}
              >
                {sunIcon} Light
              </button>
              <button
                className={`skin-theme-btn${dark ? ' active' : ''}`}
                onClick={() => handleTheme(true)}
              >
                {moonIcon} Dark
              </button>
            </div>
          </div>
          <div className="skin-panel-section">
            <div className="skin-panel-label">Skin</div>
            {SKINS.map(s => (
              <button
                key={s.id}
                className={`skin-option${skin === s.id ? ' active' : ''}`}
                onClick={() => handleSkin(s.id)}
              >
                <span className="skin-option-radio" />
                <span className="skin-option-label">{s.label}</span>
                <span className="skin-option-swatch" style={{ background: s.swatch }} />
              </button>
            ))}
          </div>
          <div className="skin-panel-hint">
            <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> to toggle
          </div>
        </div>
      )}
      <button className="skin-fab" onClick={toggle} aria-label="Toggle skin switcher">
        {paletteIcon}
      </button>
    </div>
  );
}
