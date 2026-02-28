import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SKINS,
  applySkin,
  applyTheme,
  restorePrefs,
  copySkinCSS,
} from '../../../../skins/skin-switcher-core.js';

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

const copyIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

// Restore on load
restorePrefs();

export function SkinSwitcher() {
  const [open, setOpen] = useState(false);
  const [skin, setSkin] = useState(() => localStorage.getItem('ag-skin') || '');
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setOpen(o => !o), []);

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

  async function handleCopy(e: React.MouseEvent, skinId: string) {
    e.stopPropagation();
    const ok = await copySkinCSS(skinId);
    if (ok) {
      setCopiedId(skinId);
      setTimeout(() => setCopiedId(null), 1500);
    }
  }

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
            {SKINS.map((s: any) => (
              <button
                key={s.id}
                className={`skin-option${skin === s.id ? ' active' : ''}`}
                onClick={() => handleSkin(s.id)}
              >
                <span className="skin-option-radio" />
                <span className="skin-option-label">{s.label}</span>
                <span className="skin-option-swatch" style={{ background: s.swatch }} />
                {s.id && (
                  <span
                    className="skin-option-copy"
                    role="button"
                    tabIndex={0}
                    title="Copy CSS"
                    onClick={(e) => handleCopy(e, s.id)}
                  >
                    {copiedId === s.id ? checkIcon : copyIcon}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      <button className="skin-fab" onClick={toggle} aria-label="Toggle skin switcher">
        {paletteIcon}
      </button>
    </div>
  );
}
