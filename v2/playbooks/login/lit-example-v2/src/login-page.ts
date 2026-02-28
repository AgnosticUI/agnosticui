import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Import AgnosticUI web components
import './components/ag/Button/core/Button';
import './components/ag/Input/core/Input';
import './components/ag/Card/core/Card';
import './components/ag/Link/core/Link';
import './components/ag/Checkbox/core/Checkbox';
import './components/ag/Divider/core/Divider';
import './skin-switcher';

// Inline SVG icons (Lucide doesn't work directly in Lit)
const mailIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;

const lockIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

@customElement('login-page')
export class LoginPage extends LitElement {
  @state() private email = '';
  @state() private password = '';
  @state() private rememberMe = false;
  @state() private dark = document.documentElement.getAttribute('data-theme') === 'dark';

  private toggleTheme() {
    this.dark = !this.dark;
    document.documentElement.setAttribute('data-theme', this.dark ? 'dark' : '');
    localStorage.setItem('ag-theme', this.dark ? 'dark' : '');
  }

  static styles = css`
    *, *::before, *::after {
      box-sizing: border-box;
    }

    :host {
      display: block;
      min-height: 100vh;
    }

    /* ==========================================================================
       Login Page — Gradient Background + Geometric Shapes
       ========================================================================== */

    .login-page {
      min-height: 100vh;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, var(--ag-blue-500) 0%, var(--ag-primary) 55%, var(--ag-blue-800) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--ag-space-4);
    }

    /* Geometric background shapes */
    .bg-shape {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      pointer-events: none;
    }
    .bg-shape--1 { width: 480px; height: 480px; top: -120px; left: -160px; }
    .bg-shape--2 { width: 320px; height: 320px; bottom: -80px; right: -100px; }
    .bg-shape--3 { width: 200px; height: 200px; top: 40%; right: 12%; }
    .bg-shape--4 { width: 140px; height: 140px; bottom: 20%; left: 8%; }

    /* ==========================================================================
       Floating Login Card — visible on all breakpoints
       ========================================================================== */

    .login-card {
      background: var(--ag-background-primary);
      border-radius: var(--ag-radius-md);
      box-shadow:
        0 4px 14px rgba(0, 0, 0, 0.18),
        0 10px 40px rgba(0, 0, 0, 0.14);
      max-width: 375px;
      width: 100%;
      padding: var(--ag-space-8);
      position: relative;
      z-index: 1;
      color: var(--ag-text-primary);
    }

    @media (min-width: 640px) {
      .login-card {
        max-width: 425px;
      }
    }

    /* ==========================================================================
       Logo — centered
       ========================================================================== */

    .login-logo {
      display: flex;
      justify-content: center;
      margin-bottom: var(--ag-space-6);
    }

    .login-logo img {
      height: var(--ag-space-6);
      width: auto;
    }

    /* ==========================================================================
       Title & Subtitle
       ========================================================================== */

    .login-title {
      font-family: 'Merriweather', serif;
      font-size: var(--ag-font-size-2x);
      font-weight: 400;
      margin: 0 0 var(--ag-space-2) 0;
      color: var(--ag-text-primary);
      text-align: center;
    }

    .login-subtitle {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
      text-align: center;
      margin: 0 0 var(--ag-space-6) 0;
    }

    /* ==========================================================================
       SSO Buttons — side-by-side row ABOVE credential fields
       ========================================================================== */

    .sso-buttons {
      display: flex;
      gap: var(--ag-space-3);
      margin-bottom: var(--ag-space-6);
    }

    .sso-buttons > * {
      flex: 1;
    }

    .social-icon {
      width: var(--ag-space-4);
      height: var(--ag-space-4);
      margin-right: var(--ag-space-2);
      vertical-align: middle;
    }

    /* ==========================================================================
       Divider
       ========================================================================== */

    ag-divider {
      margin-bottom: var(--ag-space-6);
    }

    /* ==========================================================================
       Form Fields
       ========================================================================== */

    .form-field {
      margin-bottom: var(--ag-space-6);
    }

    .form-field ag-input {
      display: block;
      width: 100%;
    }

    .input-icon {
      display: flex;
      align-items: center;
      color: var(--ag-text-secondary);
    }

    /* ==========================================================================
       Auxiliary Row
       ========================================================================== */

    .auxiliary-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--ag-space-2);
      margin-bottom: var(--ag-space-6);
    }

    /* ==========================================================================
       Login Button
       ========================================================================== */

    .login-button {
      width: 100%;
      margin-bottom: var(--ag-space-6);
    }

    /* ==========================================================================
       Footer
       ========================================================================== */

    .login-footer {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-primary);
      text-align: center;
      margin: 0;
    }

    /* ==========================================================================
       Header — dark mode toggle
       ========================================================================== */

    .login-header {
      position: fixed;
      top: 0;
      right: 0;
      padding: var(--ag-space-3) var(--ag-space-4);
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .theme-toggle svg {
      pointer-events: none;
    }
  `;

  private handleEmailInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.email = input.value;
  }

  private handlePasswordInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.password = input.value;
  }

  render() {
    const sunIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    const moonIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

    return html`
      <div class="login-page">
        <header class="login-header">
          <button
            class="theme-toggle"
            @click=${() => this.toggleTheme()}
            aria-label=${this.dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            ${this.dark ? sunIcon : moonIcon}
          </button>
        </header>

        <span class="bg-shape bg-shape--1"></span>
        <span class="bg-shape bg-shape--2"></span>
        <span class="bg-shape bg-shape--3"></span>
        <span class="bg-shape bg-shape--4"></span>

        <div class="login-card">
          <form @submit=${(e: Event) => e.preventDefault()}>
            <div class="login-logo">
              <img src=${this.dark ? '/logo-dark-mode.svg' : '/logo.svg'} alt="Logo" />
            </div>

            <h1 class="login-title">Welcome back!</h1>
            <p class="login-subtitle">Please enter your details to login.</p>

            <!-- SSO Buttons — side-by-side, above credential fields -->
            <div class="sso-buttons">
              <ag-button full-width bordered shape="rounded">
                <img src="/google-icon.svg" alt="" class="social-icon" />
                Google
              </ag-button>
              <ag-button full-width bordered shape="rounded">
                <img src="/facebook-icon.svg" alt="" class="social-icon" />
                Facebook
              </ag-button>
            </div>

            <ag-divider>or</ag-divider>

            <div class="form-field">
              <ag-input
                label="Email"
                type="email"
                rounded
                placeholder="Enter your email"
                .value=${this.email}
                @input=${this.handleEmailInput}
              >
                <span slot="addon-left" class="input-icon">${mailIcon}</span>
              </ag-input>
            </div>

            <div class="form-field">
              <ag-input
                label="Password"
                type="password"
                rounded
                placeholder="Enter your password"
                .value=${this.password}
                @input=${this.handlePasswordInput}
              >
                <span slot="addon-left" class="input-icon">${lockIcon}</span>
              </ag-input>
            </div>

            <div class="auxiliary-row">
              <ag-checkbox
                .checked=${this.rememberMe}
                @change=${() => (this.rememberMe = !this.rememberMe)}
              >
                Remember me
              </ag-checkbox>
              <ag-link href="#" variant="monochrome">Forgot password?</ag-link>
            </div>

            <div class="login-button">
              <ag-button full-width type="submit" variant="monochrome" shape="rounded">
                Log In
              </ag-button>
            </div>

            <p class="login-footer">
              Don't have an account?
              <ag-link href="#" variant="primary">Sign up</ag-link>
            </p>
          </form>
        </div>

        <skin-switcher></skin-switcher>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'login-page': LoginPage;
  }
}
