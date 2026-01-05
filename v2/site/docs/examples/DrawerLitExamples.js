import { LitElement, html } from 'lit';
import 'agnosticui-core/drawer';
import 'agnosticui-core/button';

export class DrawerLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.isStartDrawerOpen = false;
    this.isEndDrawerOpen = false;
    this.isTopDrawerOpen = false;
    this.isBottomDrawerOpen = false;
    this.isCustomDrawerOpen = false;
  }

  firstUpdated() {
    // Set up event listeners for drawer close events
    this.querySelectorAll('ag-drawer').forEach((drawer) => {
      drawer.addEventListener('drawer-close', (e) => {
        const drawerId = e.target.id;
        this.handleDrawerClose(drawerId);
      });
    });
  }

  handleDrawerClose(drawerId) {
    switch (drawerId) {
      case 'start-drawer':
        this.isStartDrawerOpen = false;
        break;
      case 'end-drawer':
        this.isEndDrawerOpen = false;
        break;
      case 'top-drawer':
        this.isTopDrawerOpen = false;
        break;
      case 'bottom-drawer':
        this.isBottomDrawerOpen = false;
        break;
      case 'custom-drawer':
        this.isCustomDrawerOpen = false;
        break;
    }
    this.requestUpdate();
  }

  showStartDrawer() {
    this.isStartDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#start-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  showEndDrawer() {
    this.isEndDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#end-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  showTopDrawer() {
    this.isTopDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#top-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  showBottomDrawer() {
    this.isBottomDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#bottom-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  showCustomDrawer() {
    this.isCustomDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#custom-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  render() {
    return html`
      <section>
        <!-- Drawer from Start (Left) -->
        <div class="mbe4">
          <h2>Drawer from Start (Left)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showStartDrawer}>Open Start Drawer</ag-button>
          <ag-drawer
            id="start-drawer"
            position="start"
            heading="Navigation"
            show-close-button
          >
            <nav>
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0;"><a href="#" @click=${(e) => e.preventDefault()}>Dashboard</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=${(e) => e.preventDefault()}>Projects</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=${(e) => e.preventDefault()}>Team</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=${(e) => e.preventDefault()}>Settings</a></li>
              </ul>
            </nav>
          </ag-drawer>
        </div>

        <!-- Drawer from End (Right) -->
        <div class="mbe4">
          <h2>Drawer from End (Right)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showEndDrawer}>Open End Drawer</ag-button>
          <ag-drawer
            id="end-drawer"
            position="end"
            heading="Settings"
            show-close-button
          >
            <div>
              <h4 style="margin-top: 0;">Preferences</h4>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Enable notifications
              </label>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Dark mode
              </label>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Auto-save
              </label>
            </div>
            <div slot="footer">
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=${() => {
                  const drawer = this.querySelector('#end-drawer');
                  if (drawer) drawer.open = false;
                }}>Cancel</ag-button>
                <ag-button
                  variant="primary"
                  @click=${() => {
                    const drawer = this.querySelector('#end-drawer');
                    if (drawer) drawer.open = false;
                  }}
                >Save</ag-button>
              </div>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer from Top -->
        <div class="mbe4">
          <h2>Drawer from Top</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showTopDrawer}>Open Top Drawer</ag-button>
          <ag-drawer
            id="top-drawer"
            position="top"
            heading="Notifications"
            show-close-button
          >
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
                <strong>New message</strong>
                <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
                  You have a new message from Sarah
                </p>
              </div>
              <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
                <strong>Update available</strong>
                <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
                  A new version is ready to install
                </p>
              </div>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer from Bottom -->
        <div class="mbe4">
          <h2>Drawer from Bottom</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showBottomDrawer}>Open Bottom Drawer</ag-button>
          <ag-drawer
            id="bottom-drawer"
            position="bottom"
            heading="Quick Actions"
            show-close-button
          >
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  New Item
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  Upload
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  Share
                </div>
              </ag-button>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer with Custom Content -->
        <div class="mbe4">
          <h2>Drawer with Custom Content</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showCustomDrawer}>Open Filter Drawer</ag-button>
          <ag-drawer
            id="custom-drawer"
            position="end"
            show-close-button
          >
            <div slot="header">
              <h2 style="margin: 0; font-size: var(--ag-font-size-lg);">
                <div class="flex-inline items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  Filters
                </div>
              </h2>
            </div>
            <div>
              <div style="margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0;">Category</h4>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Electronics
                </label>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Clothing
                </label>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Books
                </label>
              </div>
              <div style="margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0;">Price Range</h4>
                <input type="range" min="0" max="1000" style="width: 100%;" />
              </div>
            </div>
            <div slot="footer">
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=${() => {
                  const drawer = this.querySelector('#custom-drawer');
                  if (drawer) drawer.open = false;
                }}>Clear</ag-button>
                <ag-button
                  variant="primary"
                  @click=${() => {
                    const drawer = this.querySelector('#custom-drawer');
                    if (drawer) drawer.open = false;
                  }}
                >Apply Filters</ag-button>
              </div>
            </div>
          </ag-drawer>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('drawer-lit-examples', DrawerLitExamples);
