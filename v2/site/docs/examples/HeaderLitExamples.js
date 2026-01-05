import { LitElement, html } from "lit";
import "agnosticui-core/header";

export class HeaderLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        /* CSS Shadow Parts customization examples */
        .custom-header-gradient::part(ag-header) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-bottom: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .custom-header-border::part(ag-header) {
          background: var(--ag-background-secondary);
          border-bottom: 3px solid var(--ag-primary);
          box-shadow: none;
        }
      </style>

      <section class="ag-header-examples">
        <div class="mbe4">
          <h2>Basic Header</h2>
          <p class="mbs2 mbe3">
            A simple header with logo and navigation. On mobile, content stacks vertically. On
            desktop (≥960px), it displays horizontally.
          </p>
        </div>
        <div class="mbe4">
          <ag-header>
            <a
              slot="logo"
              href="#"
              style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
            >
              AgnosticUI
            </a>
            <nav>
              <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                <li>
                  <a href="#home" style="text-decoration: none; color: inherit;">Home</a>
                </li>
                <li>
                  <a href="#about" style="text-decoration: none; color: inherit;">About</a>
                </li>
                <li>
                  <a href="#contact" style="text-decoration: none; color: inherit;">Contact</a>
                </li>
              </ul>
            </nav>
          </ag-header>
        </div>

        <div class="mbe4">
          <h2>Header with Logo Image</h2>
        </div>
        <div class="mbe4">
          <ag-header>
            <a
              slot="logo"
              href="#"
              style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                style="color: var(--vp-c-brand-1);"
              >
                <circle cx="16" cy="16" r="14" fill="var(--ag-primary)" />
                <text x="16" y="22" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
                  A
                </text>
              </svg>
              <span style="font-weight: 700; font-size: 1.25rem;">MyApp</span>
            </a>
            <nav>
              <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
                <li>
                  <a href="#dashboard" style="text-decoration: none; color: inherit;">Dashboard</a>
                </li>
                <li>
                  <a href="#settings" style="text-decoration: none; color: inherit;">Settings</a>
                </li>
                <li>
                  <a href="#profile" style="text-decoration: none; color: inherit;">Profile</a>
                </li>
              </ul>
            </nav>
          </ag-header>
        </div>

        <div class="mbe4">
          <h2>Content Justification</h2>
          <p class="mbs2 mbe3">
            Control how content is aligned within the header using the
            <code>contentJustify</code> prop.
          </p>
        </div>
        <div class="mbe4">
          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">
              Justify: Between (Default)
            </h3>
            <ag-header contentJustify="between">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav>
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Start</h3>
            <ag-header contentJustify="start">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: End</h3>
            <ag-header contentJustify="end">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Center</h3>
            <ag-header contentJustify="center">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav style="margin-left: 2rem;">
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Justify: Around</h3>
            <ag-header contentJustify="around">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: inherit; font-weight: 600;"
              >
                Logo
              </a>
              <nav>
                <a href="#nav" style="text-decoration: none; color: inherit;">Navigation</a>
              </nav>
            </ag-header>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sticky Header</h2>
          <p class="mbs2 mbe3">
            Sticky headers remain visible at the top of the viewport when scrolling. Scroll down in
            the demo below to see it in action.
          </p>
        </div>
        <div
          class="mbe4"
          style="border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); overflow: hidden;"
        >
          <div style="height: 300px; overflow-y: scroll;">
            <ag-header sticky>
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
              >
                Sticky Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#section1" style="text-decoration: none; color: inherit;">Section 1</a>
                  </li>
                  <li>
                    <a href="#section2" style="text-decoration: none; color: inherit;">Section 2</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
            <div style="padding: 2rem;">
              <h3 id="section1">Section 1</h3>
              <p style="margin-bottom: 200px;">
                Scroll down to see the sticky behavior. The header stays at the top.
              </p>
              <h3 id="section2">Section 2</h3>
              <p style="margin-bottom: 200px;">
                The header remains visible as you scroll through content.
              </p>
              <p>End of scrollable content.</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the header's appearance without affecting its
            internal structure.
          </p>
        </div>
        <div class="mbe4">
          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Gradient Background</h3>
            <ag-header class="custom-header-gradient">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: white; font-weight: 700; font-size: 1.25rem;"
              >
                Gradient Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#home" style="text-decoration: none; color: white;">Home</a>
                  </li>
                  <li>
                    <a href="#about" style="text-decoration: none; color: white;">About</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
          </div>

          <div class="mbe3">
            <h3 class="mbe2" style="font-size: 1rem; font-weight: 600;">Custom Border</h3>
            <ag-header class="custom-header-border">
              <a
                slot="logo"
                href="#"
                style="text-decoration: none; color: var(--vp-c-brand-1); font-weight: 700; font-size: 1.25rem;"
              >
                Bordered Header
              </a>
              <nav>
                <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
                  <li>
                    <a href="#home" style="text-decoration: none; color: inherit;">Home</a>
                  </li>
                  <li>
                    <a href="#about" style="text-decoration: none; color: inherit;">About</a>
                  </li>
                </ul>
              </nav>
            </ag-header>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("header-lit-examples", HeaderLitExamples);
