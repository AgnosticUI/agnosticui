import { LitElement, html } from 'lit';
import 'agnosticui-core/menu';

export class MenuLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      lastEvent: { type: String, state: true },
      lastSelectedValue: { type: String, state: true },
      isMobile: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.lastEvent = null;
    this.lastSelectedValue = null;
    this.isMobile = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.checkMobile.bind(this));
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  handleMenuOpen(e) {
    const selectedInfo = this.lastSelectedValue ? `, selected: ${this.lastSelectedValue}` : '';
    this.lastEvent = `menu-open (open: ${e.detail.open}${selectedInfo})`;
  }

  handleMenuClose(e) {
    const selectedInfo = this.lastSelectedValue ? `, selected: ${this.lastSelectedValue}` : '';
    this.lastEvent = `menu-close (open: ${e.detail.open}${selectedInfo})`;
  }

  handleMenuSelect(e) {
    this.lastSelectedValue = e.detail.value;
    this.lastEvent = `menu-select (value: ${e.detail.value})`;
  }

  render() {
    return html`
      <style>
        /* Responsive styles */
        @media (max-width: 767px) {
          .desktop-only-items {
            display: none;
          }
        }
        @media (min-width: 768px) {
          .mobile-only-items {
            display: none;
          }
        }

        /* Dynamic icon styles */
        .dynamic-icon-menu .menu-icon,
        .dynamic-icon-menu .close-icon {
          transition: opacity var(--ag-motion-medium) ease-in-out;
        }
        .dynamic-icon-menu[data-menu-open="false"] .close-icon {
          opacity: 0;
          pointer-events: none;
          position: absolute;
        }
        .dynamic-icon-menu[data-menu-open="true"] .menu-icon {
          opacity: 0;
          pointer-events: none;
          position: absolute;
        }

        /* Custom menu styles */
        .custom-menu-button ag-button::part(ag-button) {
          background-color: #4a5568;
          color: white;
          border: 2px solid #2d3748;
          border-radius: 8px;
        }
        .custom-menu-button .label {
          font-weight: bold;
        }
        .custom-menu-button .chevron-icon {
          color: #a0aec0;
        }
        .custom-menu-button ag-menu::part(ag-menu) {
          background-color: #2d3748;
          border: 1px solid #4a5568;
          border-radius: 8px;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button) {
          color: white;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):focus,
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):hover {
          color: black;
        }
      </style>

      <section>
        <div class="mbe4">
          <h2>Basic Menu</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Menu options">
            Menu
            <ag-menu slot="menu">
              <ag-menu-item value="edit">Edit</ag-menu-item>
              <ag-menu-item value="copy">Copy</ag-menu-item>
              <ag-menu-item value="paste">Paste</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="delete">Delete</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu Alignment</h2>
          <p class="mbe4">
            The <code>menu-align</code> prop controls horizontal alignment. Use <code>menu-align="right"</code> when the menu button is near the right edge of the viewport.
          </p>
        </div>
        <div class="stacked mbe4">
          <div class="flex items-center" style="gap: 1rem; justify-content: space-between;">
            <ag-menu-button menu-align="left" menu-aria-label="Left-aligned menu">
              Left Aligned
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <ag-menu-button menu-align="right" menu-aria-label="Right-aligned menu">
              Right Aligned
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Menu with Links</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Navigation menu">
            Navigation
            <ag-menu slot="menu">
              <ag-menu-item value="home" href="#home">Home</ag-menu-item>
              <ag-menu-item value="about" href="#about">About</ag-menu-item>
              <ag-menu-item value="contact" href="#contact">Contact</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="external" href="https://example.com" target="_blank">
                External Link
              </ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Disabled Button</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button disabled menu-aria-label="Disabled menu">
            Disabled Menu
            <ag-menu slot="menu">
              <ag-menu-item value="item1">Item 1</ag-menu-item>
              <ag-menu-item value="item2">Item 2</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Disabled Items</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Menu with disabled items">
            Mixed States
            <ag-menu slot="menu">
              <ag-menu-item value="enabled1">Enabled Item</ag-menu-item>
              <ag-menu-item value="disabled1" disabled>Disabled Item</ag-menu-item>
              <ag-menu-item value="enabled2">Another Enabled</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="disabled2" disabled>Another Disabled</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Complex Menu (File Menu)</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="File menu">
            File
            <ag-menu slot="menu">
              <ag-menu-item value="new">New</ag-menu-item>
              <ag-menu-item value="open">Open...</ag-menu-item>
              <ag-menu-item value="recent">Open Recent</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="save">Save</ag-menu-item>
              <ag-menu-item value="save-as">Save As...</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="export">Export</ag-menu-item>
              <ag-menu-item value="import">Import</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="print">Print</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="close">Close</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Sections</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="User menu">
            <div class="flex-inline items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              User Menu
            </div>
            <ag-menu slot="menu">
              <ag-menu-item value="profile">Profile</ag-menu-item>
              <ag-menu-item value="settings">Settings</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="help">Help</ag-menu-item>
              <ag-menu-item value="feedback">Send Feedback</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="logout">Logout</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Icon Button</h2>
          <p class="mbe4">
            The following examples show using an icon as the trigger. The <code>menu-variant="icon"</code> removes the chevron and provides a minimal button container for the icon. You can also use an icon with the default chevron trigger as we see on the right.
          </p>
        </div>
        <div class="mbe4">
          <h3>Large</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
        <div class="mbe4">
          <h3>Medium</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost size="sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button size="sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
        <div class="mbe4">
          <h3>Small</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost size="x-sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button size="x-sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Monochrome Variant</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Monochrome menu" button-variant="monochrome">
            Monochrome Menu
            <ag-menu slot="menu">
              <ag-menu-item value="option1" variant="monochrome">Option 1</ag-menu-item>
              <ag-menu-item value="option2" variant="monochrome" selected>Option 2 (Selected)</ag-menu-item>
              <ag-menu-item value="option3" variant="monochrome">Option 3</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div class="stacked mbe4">
          <div class="flex-inline items-center" style="gap: 10px;">
            <ag-menu-button
              menu-aria-label="Event testing menu"
              @menu-open=${this.handleMenuOpen}
              @menu-close=${this.handleMenuClose}
              @menu-select=${this.handleMenuSelect}
            >
              Event Test
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            ${this.lastEvent ? html`<p>Last event: <strong>${this.lastEvent}</strong></p>` : ''}
          </div>
        </div>

        <div class="mbe4">
          <h2>Menu Types: Navigation vs Selection</h2>
          <p class="mbe4">
            The <code>type</code> prop controls selection behavior. Use <code>type="default"</code> (the default) for navigation menus where selection is transient, and <code>type="single-select"</code> for menus where selection should persist (like filters or sorting).
          </p>
        </div>
        <div class="stacked mbe4">
          <div class="flex items-start" style="gap: 2rem; flex-wrap: wrap;">
            <div>
              <h3 class="mbe4">Navigation Menu (type="default")</h3>
              <p class="mbe4">
                Selection clears when menu closes. Use for navigation and actions.
              </p>
              <ag-menu-button menu-aria-label="User navigation">
                User Menu
                <ag-menu slot="menu">
                  <ag-menu-item value="profile">Profile</ag-menu-item>
                  <ag-menu-item value="settings">Settings</ag-menu-item>
                  <ag-menu-separator></ag-menu-separator>
                  <ag-menu-item value="logout">Logout</ag-menu-item>
                </ag-menu>
              </ag-menu-button>
            </div>

            <div>
              <h3 class="mbe4">Selection Menu (type="single-select")</h3>
              <p class="mbe4">
                Selection persists when menu closes. Use for filters, sorting, etc.
              </p>
              <ag-menu-button menu-type="single-select" selected-value="date" menu-aria-label="Sort options">
                Sort by
                <ag-menu slot="menu">
                  <ag-menu-item value="date">Date</ag-menu-item>
                  <ag-menu-item value="name">Name</ag-menu-item>
                  <ag-menu-item value="size">Size</ag-menu-item>
                </ag-menu>
              </ag-menu-button>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Additional Gutter</h2>
          <p class="mbe4">
            The <code>additional-gutter</code> prop adds extra vertical spacing beyond the trigger button's height when positioning the menu. This is useful when the menu button is within a taller container (like a header) and you need the menu to clear that container.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">This menu has <code>additional-gutter="20px"</code></p>
            <ag-menu-button menu-variant="chevron" additional-gutter="20px" menu-aria-label="Menu with additional gutter">
              Menu with Extra Gutter
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Responsive Hidden Items (checkHiddenItems)</h2>
          <p class="mbe4">
            The <code>check-hidden-items</code> prop enables the menu to skip items that are hidden via CSS (like responsive media queries). This is useful when you wrap menu items in responsive containers but want keyboard navigation to work correctly.
          </p>
          <p class="mbe4">
            <strong>Performance Note:</strong> Enabling this feature checks computed styles on every keyboard navigation, which has a performance cost. Only enable it if you're using CSS-based hiding. For better performance, prefer conditional rendering instead.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">
              <strong>Try resizing your browser:</strong> Desktop items are hidden on mobile (&lt;768px), mobile items are hidden on desktop. Keyboard navigation skips hidden items.
            </p>
            <ag-menu-button check-hidden-items menu-aria-label="Responsive menu">
              Responsive Menu
              <ag-menu slot="menu">
                <div class="desktop-only-items">
                  <ag-menu-item value="desktop1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 1
                  </ag-menu-item>
                  <ag-menu-item value="desktop2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 2
                  </ag-menu-item>
                </div>
                <div class="mobile-only-items">
                  <ag-menu-item value="mobile1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 1
                  </ag-menu-item>
                  <ag-menu-item value="mobile2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 2
                  </ag-menu-item>
                </div>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="always">Always Visible</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Recommended: Conditional Rendering (Better Performance)</h2>
          <p class="mbe4">
            Instead of using <code>check-hidden-items</code>, you can achieve the same result with better performance by using conditional rendering. This removes hidden items from the DOM entirely.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">
              <strong>Current viewport:</strong> ${this.isMobile ? 'Mobile' : 'Desktop'}
            </p>
            <ag-menu-button menu-aria-label="Conditional menu">
              Conditional Menu
              <ag-menu slot="menu">
                ${!this.isMobile ? html`
                  <ag-menu-item value="desktop1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 1
                  </ag-menu-item>
                  <ag-menu-item value="desktop2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 2
                  </ag-menu-item>
                ` : ''}
                ${this.isMobile ? html`
                  <ag-menu-item value="mobile1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 1
                  </ag-menu-item>
                  <ag-menu-item value="mobile2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 2
                  </ag-menu-item>
                ` : ''}
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="always">Always Visible</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('menu-lit-examples', MenuLitExamples);
