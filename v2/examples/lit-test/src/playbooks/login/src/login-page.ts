import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Import web components
import './components/ag/Button/core/Button';
import './components/ag/Input/core/Input';
import './components/ag/Card/core/Card';
import './components/ag/Image/core/Image';
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

  // Background image sources for responsive loading
  private bgSources = [
    { srcset: '/login-bg.jpg', media: '(min-width: 768px)' }
  ];

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .login-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ==========================================================================
       Login Form Styles
       ========================================================================== */

    .login-form {
      max-width: 375px;
      margin: 0 auto;
      padding: var(--ag-space-6);
    }

    .login-logo {
      margin-bottom: var(--ag-space-6);
    }

    .login-logo img {
      height: var(--ag-space-9);
      width: auto;
    }

    .login-title {
      font-family: 'Merriweather', serif;
      font-size: var(--ag-font-size-2x);
      font-weight: 400;
      margin: 0 0 var(--ag-space-4) 0;
      color: var(--ag-text-primary);
    }

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

    /* Auxiliary Row */
    .auxiliary-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--ag-space-2);
      margin-bottom: var(--ag-space-6);
    }

    /* Full-width login button */
    .login-button {
      width: 100%;
      margin-bottom: var(--ag-space-6);
    }

    ag-divider {
      margin-bottom: var(--ag-space-6);
    }

    /* Social Buttons - stacked full-width */
    .social-buttons {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--ag-space-14);
    }

    .social-button {
      margin-block-end: var(--ag-space-3);
    }

    .social-button:last-child {
      margin-block-end: 0;
    }

    .social-icon {
      width: var(--ag-space-4);
      height: var(--ag-space-4);
      margin-right: var(--ag-space-2);
      vertical-align: middle;
    }

    .login-footer {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-primary);
      text-align: center;
      margin: 0;
    }

    /* ==========================================================================
       Mobile Layout (< 768px)
       ========================================================================== */

    .login-card-wrapper,
    .login-column-right,
    .tablet-background {
      display: none;
    }

    .login-form-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: var(--ag-space-4);
    }

    .login-column-left {
      flex: 1;
      background: var(--ag-background-primary);
    }

    /* ==========================================================================
       Tablet Layout (768px - 1199px)
       ========================================================================== */

    @media (min-width: 768px) and (max-width: 1199px) {
      .login-page {
        position: relative;
      }

      .tablet-background {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
      }

      .tablet-background ag-image {
        width: 100%;
        height: 100%;
      }

      .login-form-wrapper {
        display: none;
      }

      .login-card-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: var(--ag-space-6);
        position: relative;
        z-index: 1;
      }

      .login-column-left {
        background: transparent;
      }

      .login-card {
        background: var(--ag-background-primary);
        border-radius: var(--ag-radius-md);
        box-shadow:
          0 4px 14px rgba(0, 0, 0, 0.15),
          0 10px 40px rgba(0, 0, 0, 0.1);
        max-width: 375px;
        width: 100%;
      }

      .login-card ag-card {
        background: var(--ag-background-primary);
      }
    }

    /* ==========================================================================
       Desktop Layout (>= 1200px)
       ========================================================================== */

    @media (min-width: 1200px) {
      .login-page {
        display: grid;
        grid-template-columns: 2fr 3fr;
        min-height: 100vh;
      }

      .tablet-background,
      .login-card-wrapper {
        display: none;
      }

      .login-form-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: var(--ag-space-6);
      }

      .login-column-left {
        background: var(--ag-background-primary);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .login-column-right {
        display: block;
        overflow: hidden;
        height: 100vh;
      }

      .login-column-right ag-image {
        display: block;
        width: 100%;
        height: 100%;
      }
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

  private renderForm() {
    return html`
      <form class="login-form" @submit=${(e: Event) => e.preventDefault()}>
        <div class="login-logo">
          <img src="/logo.svg" alt="Logo" />
        </div>

        <h1 class="login-title">Welcome back!</h1>

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
            @change=${() => this.rememberMe = !this.rememberMe}
          >
            Remember me
          </ag-checkbox>
          <ag-link href="#" variant="monochrome">Forgot password?</ag-link>
        </div>

        <div class="login-button">
          <ag-button full-width type="submit" variant="monochrome" shape="rounded">
            Login
          </ag-button>
        </div>

        <ag-divider>or</ag-divider>

        <div class="social-buttons">
          <div class="social-button">
            <ag-button full-width bordered shape="rounded">
              <img src="/facebook-icon.svg" alt="" class="social-icon" />
              Facebook
            </ag-button>
          </div>
          <div class="social-button">
            <ag-button full-width bordered shape="rounded">
              <img src="/google-icon.svg" alt="" class="social-icon" />
              Google
            </ag-button>
          </div>
        </div>

        <p class="login-footer">
          Don't have an account? <ag-link href="#" variant="primary">Sign up</ag-link>
        </p>
      </form>
    `;
  }

  render() {
    return html`
      <div class="login-page">
        <!-- Mobile: Form only on white background -->
        <div class="login-form-wrapper">
          <div class="login-column-left">
            ${this.renderForm()}
          </div>
        </div>

        <!-- Tablet: Card floating on background image -->
        <div class="login-card-wrapper">
          <div class="login-card">
            <ag-card rounded="md">
              ${this.renderForm()}
            </ag-card>
          </div>
        </div>

        <!-- Right Column - Background Image (desktop only) -->
        <div class="login-column-right">
          <ag-image
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt=""
            .sources=${this.bgSources}
            fit="cover"
          ></ag-image>
        </div>

        <!-- Full-screen background for tablet -->
        <div class="tablet-background">
          <ag-image
            src="/login-bg.jpg"
            alt=""
            fit="cover"
          ></ag-image>
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
