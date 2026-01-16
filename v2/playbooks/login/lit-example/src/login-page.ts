import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Import AgnosticUI web components
import './components/ag/Button/core/Button';
import './components/ag/Input/core/Input';
import './components/ag/Card/core/Card';
import './components/ag/Link/core/Link';
import './components/ag/Checkbox/core/Checkbox';
import './components/ag/Divider/core/Divider';

// Inline SVG icons (Mail and Lock from Lucide)
const mailIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
const lockIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

@customElement('login-page')
export class LoginPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    /* Base Layout */
    .login-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Login Form Styles */
    .login-form {
      max-width: 375px;
      margin: 0 auto;
      padding: var(--ag-space-6);
    }

    .login-logo {
      margin-bottom: var(--ag-space-6);
      text-align: center;
    }

    .login-logo img {
      height: 32px;
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

    /* Override input label and placeholder to 14px */
    ag-input::part(ag-input-label),
    ag-input::part(ag-input) {
      font-size: var(--ag-font-size-sm); /* 14px */
    }

    .auxiliary-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--ag-space-2);
      margin-bottom: var(--ag-space-6);
    }

    /* Override checkbox label font size and remove gap */
    ag-checkbox::part(ag-checkbox-label) {
      font-size: var(--ag-font-size-sm); /* 14px */
    }

    ag-checkbox::part(ag-checkbox-wrapper) {
      gap: 0;
    }

    /* Override link font size */
    .auxiliary-row ag-link {
      font-size: var(--ag-font-size-sm); /* 14px */
    }

    .login-button {
      width: 100%;
      margin-bottom: var(--ag-space-6);
    }

    .login-button ag-button {
      display: block;
      width: 100%;
    }

    .login-button ag-button::part(ag-button) {
      width: 100%;
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

    .social-button ag-button {
      display: block;
      width: 100%;
    }

    .social-button ag-button::part(ag-button) {
      width: 100%;
    }

    .social-icon {
      width: 16px;
      height: 16px;
      margin-right: var(--ag-space-2);
      vertical-align: middle;
    }

    .login-footer {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-primary);
      text-align: center;
      margin: 0;
    }

    /* Mobile Layout */
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

    /* Icon styling */
    .input-icon {
      display: flex;
      align-items: center;
      color: var(--ag-text-secondary);
    }

    .input-icon svg {
      width: 18px;
      height: 18px;
    }

    /* Tablet Layout */
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

      .tablet-background img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
    }

    /* Desktop Layout */
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
        min-height: 100vh;
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
      }

      .login-column-right picture {
        display: block;
        width: 100%;
        height: 100%;
      }

      .login-bg-image {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: center bottom;
      }
    }
  `;

  @state()
  private email = '';

  @state()
  private password = '';

  @state()
  private rememberMe = false;

  private handleSubmit(e: Event) {
    e.preventDefault();
    console.log('Login submitted:', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
  }

  private handleEmailInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.email = input.value;
  }

  private handlePasswordInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.password = input.value;
  }

  private handleCheckboxChange(e: Event) {
    const checkbox = e.target as HTMLInputElement;
    this.rememberMe = checkbox.checked;
  }

  private renderLoginForm() {
    return html`
      <form class="login-form" @submit=${this.handleSubmit}>
        <!-- Logo -->
        <div class="login-logo">
          <img src="/logo.svg" alt="AgnosticUI" />
        </div>

        <!-- Title -->
        <h1 class="login-title">Welcome back!</h1>

        <!-- Email Field -->
        <div class="form-field">
          <ag-input
            label="Email"
            type="email"
            placeholder="Enter your email"
            .value=${this.email}
            @input=${this.handleEmailInput}
          >
            <span slot="addon-left" class="input-icon">${mailIcon}</span>
          </ag-input>
        </div>

        <!-- Password Field -->
        <div class="form-field">
          <ag-input
            label="Password"
            type="password"
            placeholder="Enter your password"
            .value=${this.password}
            @input=${this.handlePasswordInput}
          >
            <span slot="addon-left" class="input-icon">${lockIcon}</span>
          </ag-input>
        </div>

        <!-- Auxiliary Row -->
        <div class="auxiliary-row">
          <ag-checkbox
            .checked=${this.rememberMe}
            @change=${this.handleCheckboxChange}
          >
            Remember me
          </ag-checkbox>
          <ag-link href="#" variant="monochrome">
            Forgot password?
          </ag-link>
        </div>

        <!-- Login Button -->
        <div class="login-button">
          <ag-button type="submit" variant="monochrome" shape="rounded">
            Login
          </ag-button>
        </div>

        <!-- Divider -->
        <ag-divider>or</ag-divider>

        <!-- Social Login Buttons -->
        <div class="social-buttons">
          <div class="social-button">
            <ag-button bordered shape="rounded">
              <img src="/facebook-icon.svg" alt="" class="social-icon" />
              Facebook
            </ag-button>
          </div>
          <div class="social-button">
            <ag-button bordered shape="rounded">
              <img src="/google-icon.svg" alt="" class="social-icon" />
              Google
            </ag-button>
          </div>
        </div>

        <!-- Footer -->
        <p class="login-footer">
          Don't have an account?
          <ag-link href="#" variant="primary">
            Sign up
          </ag-link>
        </p>
      </form>
    `;
  }

  render() {
    return html`
      <div class="login-page">
        <!-- Left Column -->
        <div class="login-column-left">
          <!-- Card wrapper for tablet -->
          <div class="login-card-wrapper">
            <ag-card class="login-card">
              ${this.renderLoginForm()}
            </ag-card>
          </div>

          <!-- Direct form for mobile and desktop -->
          <div class="login-form-wrapper">
            ${this.renderLoginForm()}
          </div>
        </div>

        <!-- Right Column - Desktop only -->
        <div class="login-column-right">
          <picture>
            <source media="(min-width: 768px)" srcset="/login-bg.jpg" />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              alt=""
              class="login-bg-image"
            />
          </picture>
        </div>

        <!-- Tablet background -->
        <div class="tablet-background">
          <img src="/login-bg.jpg" alt="" />
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'login-page': LoginPage;
  }
}
