import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  SKINS,
  applySkin,
  applyTheme,
  restorePrefs,
} from '../../../../skins/skin-switcher-core.js';

// Restore on load
restorePrefs();

@customElement('skin-switcher')
export class SkinSwitcher extends LitElement {
  @state() private _open = false;
  @state() private _skin = localStorage.getItem('ag-skin') || '';
  @state() private _dark = document.documentElement.getAttribute('data-theme') === 'dark';

  private _onClickOutside = (e: MouseEvent) => {
    if (!this._open) return;

    // Check if click is outside the component entirely
    const path = e.composedPath();
    if (!path.includes(this)) {
      this._open = false;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('mousedown', this._onClickOutside);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('mousedown', this._onClickOutside);
  }

  private _setSkin(id: string) {
    this._skin = id;
    applySkin(id);
  }

  private _setTheme(dark: boolean) {
    this._dark = dark;
    applyTheme(dark);
  }

  render() {
    return html`
      ${this._open ? html`
        <div class="skin-panel">
          <div class="skin-panel-section">
            <div class="skin-panel-label">Theme</div>
            <div class="skin-panel-themes">
              <button class="skin-theme-btn ${!this._dark ? 'active' : ''}" @click=${() => this._setTheme(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                Light
              </button>
              <button class="skin-theme-btn ${this._dark ? 'active' : ''}" @click=${() => this._setTheme(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                Dark
              </button>
            </div>
          </div>
          <div class="skin-panel-section">
            <div class="skin-panel-label">Skin</div>
            ${SKINS.map(s => html`
              <button class="skin-option ${this._skin === s.id ? 'active' : ''}" @click=${() => this._setSkin(s.id)}>
                <span class="skin-option-radio"></span>
                <span class="skin-option-label">${s.label}</span>
                <span class="skin-option-swatch" style="background:${s.swatch}"></span>
              </button>
            `)}
          </div>
        </div>
      ` : ''}
      <button class="skin-fab" @click=${() => { this._open = !this._open; }} aria-label="Toggle skin switcher">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12" r="0.5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"/>
        </svg>
      </button>
    `;
  }

  static styles = css`
    :host {
      display: contents;
    }

    .skin-fab {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 9999;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid var(--ag-border, #e0e0e0);
      background: var(--ag-background-primary, #ffffff);
      color: var(--ag-text-secondary, #666);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--ag-shadow-lg, 0 4px 16px -2px rgba(0, 0, 0, 0.12));
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .skin-fab:hover {
      transform: scale(1.08);
      box-shadow: var(--ag-shadow-xl, 0 8px 24px -4px rgba(0, 0, 0, 0.16));
    }

    .skin-fab:active {
      transform: scale(0.96);
    }

    .skin-fab svg {
      width: 22px;
      height: 22px;
      pointer-events: none;
    }

    .skin-panel {
      position: fixed;
      bottom: 5rem;
      right: 1.5rem;
      z-index: 9999;
      width: 240px;
      background: var(--ag-background-primary, #ffffff);
      border: 1px solid var(--ag-border, #e0e0e0);
      border-radius: var(--ag-radius-md, 0.5rem);
      box-shadow: var(--ag-shadow-xl, 0 8px 24px -4px rgba(0, 0, 0, 0.16));
      padding: 0;
      overflow: hidden;
      animation: skin-panel-in 0.15s ease-out;
    }

    @keyframes skin-panel-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .skin-panel-section {
      padding: 0.75rem 1rem;
    }

    .skin-panel-section + .skin-panel-section {
      border-top: 1px solid var(--ag-border, #e0e0e0);
    }

    .skin-panel-label {
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ag-text-secondary, #666);
      margin: 0 0 0.5rem 0;
    }

    .skin-panel-themes {
      display: flex;
      gap: 0.5rem;
    }

    .skin-theme-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.375rem;
      padding: 0.375rem 0.5rem;
      border: 1px solid var(--ag-border, #e0e0e0);
      border-radius: var(--ag-radius-sm, 0.25rem);
      background: transparent;
      color: var(--ag-text-secondary, #666);
      font-size: 0.8125rem;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
    }

    .skin-theme-btn:hover {
      background: var(--ag-background-secondary, #f5f5f5);
    }

    .skin-theme-btn.active {
      background: var(--ag-primary-background, #e8f0fe);
      border-color: var(--ag-primary, #297aff);
      color: var(--ag-primary, #297aff);
      font-weight: 600;
    }

    .skin-theme-btn svg {
      width: 14px;
      height: 14px;
      pointer-events: none;
    }

    .skin-option {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      width: 100%;
      padding: 0.4375rem 0.25rem;
      border: none;
      background: transparent;
      color: var(--ag-text-primary, #1a1a1a);
      font-size: 0.8125rem;
      font-family: inherit;
      cursor: pointer;
      border-radius: var(--ag-radius-sm, 0.25rem);
      transition: background 0.15s;
    }

    .skin-option:hover {
      background: var(--ag-background-secondary, #f5f5f5);
    }

    .skin-option.active {
      font-weight: 600;
      color: var(--ag-primary, #297aff);
    }

    .skin-option-radio {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid var(--ag-border, #ccc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .skin-option.active .skin-option-radio {
      border-color: var(--ag-primary, #297aff);
    }

    .skin-option.active .skin-option-radio::after {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ag-primary, #297aff);
    }

    .skin-option-label {
      flex: 1;
      text-align: left;
    }

    .skin-option-swatch {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      flex-shrink: 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'skin-switcher': SkinSwitcher;
  }
}
