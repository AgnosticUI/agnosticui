import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './components/ag/Accordion/core/Accordion';
import './components/ag/Alert/core/Alert';
import './components/ag/Avatar/core/Avatar';
import './components/ag/Badge/core/Badge';
import './components/ag/Button/core/Button';
import './components/ag/Card/core/Card';
import './components/ag/Divider/core/Divider';
import './components/ag/Flex/core';
import './components/ag/Image/core/Image';
import './components/ag/Tag/core/Tag';
import './components/ag/VisuallyHidden/core/VisuallyHidden';
import './components/ag/AspectRatio/core/AspectRatio';
import './components/ag/BadgeFx/core/BadgeFx';
import './components/ag/Breadcrumb/core/Breadcrumb';
import './components/ag/ButtonFx/core/ButtonFx';
import './components/ag/Checkbox/core/Checkbox';
import './components/ag/Collapsible/core/Collapsible';
import './components/ag/Combobox/core/Combobox';
import type { ComboboxOption, ComboboxChangeEvent } from './components/ag/Combobox/core/Combobox';
import './components/ag/CopyButton/core/CopyButton';
import './components/ag/Dialog/core/Dialog';
import './components/ag/Drawer/core/Drawer';
import './components/ag/EmptyState/core/EmptyState';
import './components/ag/IconButtonFx/core/IconButtonFx';
import './components/ag/IconButton/core/IconButton';
import './components/ag/Fieldset/core/Fieldset';
import './components/ag/Header/core/Header';
import './components/ag/Input/core/Input';
import './components/ag/IntlFormatter/core/IntlFormatter';
import './components/ag/Kbd/core/Kbd';
import './components/ag/Link/core/Link';
import './components/ag/Loader/core/Loader';
import './components/ag/Mark/core/Mark';
import './components/ag/Menu/core/Menu';
import './components/ag/MessageBubble/core/MessageBubble';
import './components/ag/Pagination/core/Pagination';
import './components/ag/Popover/core/Popover';
import './components/ag/Progress/core/Progress';
import './components/ag/ProgressRing/core/ProgressRing';
import './components/ag/Radio/core/Radio';
import './components/ag/Rating/core/Rating';
import './components/ag/ScrollProgress/core/ScrollProgress';
import './components/ag/ScrollToButton/core/ScrollToButton';
import './components/ag/Sidebar/core/Sidebar';
import './components/ag/SidebarNav/core/SidebarNav';
import './components/ag/Select/core/Select';
import './components/ag/SkeletonLoader/core/SkeletonLoader';
import './components/ag/Slider/core/Slider';
import './components/ag/Spinner/core/Spinner';
import './components/ag/Tabs/core/Tabs';
import './components/ag/Timeline/core/Timeline';
import './components/ag/Toast/core/Toast';
import './components/ag/Toggle/core/Toggle';
import './components/ag/Tooltip/core/Tooltip';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  handleBreadcrumbClick(event: CustomEvent) {
    console.log('Breadcrumb clicked:', event.detail);
  }
  @state()
  private stateOptions: ComboboxOption[] = [
    { value: 'ca', label: 'California' },
    { value: 'co', label: 'Colorado' },
    { value: 'ct', label: 'Connecticut' },
    { value: 'fl', label: 'Florida' },
    { value: 'ny', label: 'New York' },
  ];

  @state()
  private selectedState = '';

  private handleChange(event: ComboboxChangeEvent) {
    console.log('Selected:', event.detail.value);
    this.selectedState = event.detail.value as string;
  }

  firstUpdated() {
    // Query within the shadow DOM
    const dialog = this.shadowRoot?.querySelector('#my-dialog') as any;
    const openButton = this.shadowRoot?.querySelector('#open-dialog');
    openButton?.addEventListener('click', () => {
      if (dialog) {
        dialog.open = true;
      }
    });
    dialog?.addEventListener('dialog-close', () => {
      dialog.open = false;
      console.log('Dialog closed');
    });
    dialog?.addEventListener('dialog-cancel', () => {
      dialog.open = false;
      console.log('Dialog cancelled');
    });
    // Same for drawer
    const drawer = this.shadowRoot?.querySelector('#start-drawer') as any;
    const openDrawer = this.shadowRoot?.querySelector('#open-start');
    openDrawer?.addEventListener('click', () => {
      if (drawer) {
        drawer.open = true;
      }
    });

    // Input event handlers
    const emailInput = this.shadowRoot?.querySelector('#email-input') as any;
    const usernameInput = this.shadowRoot?.querySelector('#username-input') as any;
    const messageInput = this.shadowRoot?.querySelector('#message-input') as any;
    const priceInput = this.shadowRoot?.querySelector('#price-input') as any;

    emailInput?.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      console.log('Email:', target.value);
    });

    usernameInput?.addEventListener('blur', (e: Event) => {
      const target = e.target as any;
      if (!target.value) {
        usernameInput.invalid = true;
      } else {
        usernameInput.invalid = false;
      }
    });

    messageInput?.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      console.log('Message length:', target.value.length);
    });

    priceInput?.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      console.log('Hourly rate: $', target.value);
    });

    // Toast button event handlers
    const toastButtons = [
      { buttonId: 'toast-top-start-btn', toastId: 'toast-top-start' },
      { buttonId: 'toast-top-end-btn', toastId: 'toast-top-end' },
      { buttonId: 'toast-bottom-start-btn', toastId: 'toast-bottom-start' },
      { buttonId: 'toast-bottom-end-btn', toastId: 'toast-bottom-end' }
    ];

    toastButtons.forEach(({ buttonId, toastId }) => {
      const button = this.shadowRoot?.querySelector(`#${buttonId}`);
      const toast = this.shadowRoot?.querySelector(`#${toastId}`) as any;
      button?.addEventListener('click', () => {
        if (toast) {
          toast.open = true;
        }
      });
    });

    // Toggle event handlers
    const notificationsToggle = this.shadowRoot?.querySelector('#toggle-notifications');
    notificationsToggle?.addEventListener('toggle-change', (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('Notifications:', customEvent.detail.checked);
    });

    const darkModeToggle = this.shadowRoot?.querySelector('#toggle-dark-mode');
    darkModeToggle?.addEventListener('toggle-change', (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('Dark mode:', customEvent.detail.checked);
    });

    // Debug the menu
    // const menuButton = this.shadowRoot?.querySelector('#my-menu') as any;
    // console.log('Menu button found:', menuButton);
    
    // if (menuButton) {
    //   const menu = menuButton.querySelector('ag-menu') as any;
    //   console.log('Menu found:', menu);
      
    //   if (menu) {
    //     const items = menu.querySelectorAll('ag-menu-item');
    //     console.log('MenuButton found menu element:', menuButton._menu);
    //     console.log('Menu items found:', items.length);
        
    //     // Watch for property changes on the menu
    //     menuButton.addEventListener('menu-open', (e: any) => {
    //       console.log('=== MENU OPEN EVENT ===');
    //       console.log('Event detail:', e.detail);
          
    //       // Check menu state after a brief delay
    //       setTimeout(() => {
    //         console.log('Menu.open property:', menu.open);
    //         console.log('Menu has hidden attr:', menu.hasAttribute('hidden'));
    //         console.log('Menu display style:', window.getComputedStyle(menu).display);
    //         console.log('Menu visibility:', window.getComputedStyle(menu).visibility);
    //         console.log('Menu position:', window.getComputedStyle(menu).position);
    //         console.log('Menu z-index:', window.getComputedStyle(menu).zIndex);
            
    //         // Check menu bounding box
    //         const rect = menu.getBoundingClientRect();
    //         console.log('Menu position (top, left):', rect.top, rect.left);
    //         console.log('Menu size (width, height):', rect.width, rect.height);
            
    //         // Check if menuButton has _menuOpen state
    //         console.log('MenuButton._menuOpen:', menuButton._menuOpen);
    //         console.log('MenuButton._menu:', menuButton._menu);
    //       }, 100);
    //     });
    //   }
    // }
    // const progress = this.shadowRoot?.querySelector('ag-progress') as any;
    // console.log('Progress hasUpdated:', progress.hasUpdated);
    // console.log('Progress isUpdatePending:', progress.isUpdatePending);
    // console.log('Progress updateComplete:', progress.updateComplete);

    // // Wait for the component to finish updating
    // progress.updateComplete.then(() => {
    //   const progressBar = progress.shadowRoot?.querySelector('progress');
    //   const rect = progressBar.getBoundingClientRect();
    //   console.log('Progress dimensions:', {
    //     width: rect.width,
    //     height: rect.height,
    //     top: rect.top,
    //     left: rect.left
    //   });
    //   const styles = window.getComputedStyle(progressBar);
    //   console.log('Progress computed styles:', {
    //     display: styles.display,
    //     width: styles.width,
    //     height: styles.height,
    //     backgroundColor: styles.backgroundColor,
    //     visibility: styles.visibility
    //   });
    // });
  }


  render() {
    return html`
      <div style="position: fixed; bottom: 1rem; right: 1rem;">
        <ag-scroll-progress mode="dot-trail" dots="5"></ag-scroll-progress>
      </div>
      <ag-scroll-to-button label="Back to Top" showLabel scrollThreshold="300"></ag-scroll-to-button>
      <ag-header sticky>
        <a href="/" slot="logo" style="color: var(--ag-primary-text);">Brand</a>
        <nav>Navigation</nav>
      </ag-header>
      <h1>Kitchen Sink :-)</h1>
      <ag-flex-row class="responsive">
        <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border); border-radius: 0.5rem; overflow: hidden; width: 100%;">
          <ag-sidebar show-mobile-toggle show-header-toggle variant="bordered" collapsed>
            <h2 slot="ag-header-start" style="margin: 0; font-size: 1.125rem; font-weight: 600;">
              My App
            </h2>

            <ag-sidebar-nav>
              <ag-sidebar-nav-item>
                <button type="button" class="nav-button active" aria-current="page">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span class="nav-label">Dashboard</span>
                </button>
              </ag-sidebar-nav-item>

              <ag-sidebar-nav-item>
                <button type="button" class="nav-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span class="nav-label">Projects</span>
                </button>
              </ag-sidebar-nav-item>

              <ag-sidebar-nav-item>
                <button type="button" class="nav-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span class="nav-label">Team</span>
                </button>
              </ag-sidebar-nav-item>

              <ag-sidebar-nav-item>
                <button type="button" class="nav-button nav-button-expanded" aria-expanded="false">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span class="nav-label">Settings</span>
                  <span class="chevron">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                </button>

                <!-- Popover for COLLAPSED mode -->
                <ag-popover class="nav-button-collapsed" placement="right-start" trigger-type="click" distance="8" arrow .showHeader=${false}>
                  <button slot="trigger" type="button" class="nav-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="nav-label">Settings</span>
                    <span class="collapsed-indicator">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <ag-sidebar-nav-popover-submenu slot="content" class="popover-submenu">
                    <a href="#" class="nav-sublink">Profile</a>
                    <a href="#" class="nav-sublink">Billing</a>
                    <a href="#" class="nav-sublink">Security</a>
                    <a href="#" class="nav-sublink">Preferences</a>
                  </ag-sidebar-nav-popover-submenu>
                </ag-popover>

                <!-- Inline submenu for EXPANDED mode -->
                <ag-sidebar-nav-submenu>
                  <a href="#" class="nav-sublink">Profile</a>
                  <a href="#" class="nav-sublink">Billing</a>
                  <a href="#" class="nav-sublink">Security</a>
                  <a href="#" class="nav-sublink">Preferences</a>
                </ag-sidebar-nav-submenu>
              </ag-sidebar-nav-item>
            </ag-sidebar-nav>

            <div slot="ag-footer" style="font-size: 0.875rem; color: var(--ag-text-secondary);">
              © 2024 Company
            </div>
          </ag-sidebar>

          <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background-primary);">
            <h2 style="margin-top: 0;">Sidebar Demo</h2>
            <p>Click the header toggle button to expand/collapse the sidebar.</p>
            <ul style="text-align: left;">
              <li><strong>Collapsed mode:</strong> Icon-only rail. Click Settings icon to see submenu in popover.</li>
              <li><strong>Expanded mode:</strong> Full labels visible. Click Settings to see chevron rotate and inline submenu.</li>
            </ul>
          </main>
        </div>
      </ag-flex-row>
      <ag-stack gap="1rem">
        <h2>Stack</h2>
        <div>Stacked Item 1.</div>
        <div>Stacked Item 2.</div>
        <div>Stacked Item 3.</div>
      </ag-stack>
      <ag-stack gap="1rem">
        <ag-button id="toast-top-start-btn" variant="primary">
          Top Start
        </ag-button>
        <ag-toast id="toast-top-start" position="top-start">
          Toast at top-start
        </ag-toast>

        <ag-button id="toast-top-end-btn" variant="primary">
          Top End
        </ag-button>
        <ag-toast id="toast-top-end" position="top-end">
          Toast at top-end (default)
        </ag-toast>

        <ag-button id="toast-bottom-start-btn" variant="primary">
          Bottom Start
        </ag-button>
        <ag-toast id="toast-bottom-start" position="bottom-start">
          Toast at bottom-start
        </ag-toast>

        <ag-button id="toast-bottom-end-btn" variant="primary">
          Bottom End
        </ag-button>
        <ag-toast id="toast-bottom-end" position="bottom-end">
          Toast at bottom-end
        </ag-toast>
      </ag-stack>
      <ag-card class="card">Card</ag-card>
      <div class="full-width">
        <ag-spinner style="--spinner-color: var(--ag-primary);" size="small"></ag-spinner>
        <ag-spinner></ag-spinner>
        <ag-spinner style="--spinner-color: var(--ag-warning);" size="large"></ag-spinner>
        <ag-spinner style="--spinner-color: var(--ag-danger);" size="xlarge"></ag-spinner>
      </div>
      <ag-flex-row class="responsive">
        <ag-select label="Greatest Tennis Player" name="Tennis players">
          <option value="">- Select a player -</option>
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="novak">Novak Djokovic</option>
          <option value="rafa">Rafael Nadal</option>
        </ag-select>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-timeline orientation="horizontal">
          <ag-timeline-item>
            <div slot="ag-start">2023-01-01</div>
            <div slot="ag-marker">
              <ag-icon type="success" size="18">
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </ag-icon>
            </div>
            <div slot="ag-end">Step 1 Completed</div>
          </ag-timeline-item>
          <ag-timeline-item>
            <div slot="ag-start">2023-02-01</div>
            <div slot="ag-marker">
              <ag-icon type="info" size="18">
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </ag-icon>
            </div>
            <div slot="ag-end">Step 2 In Progress</div>
          </ag-timeline-item>
          <ag-timeline-item>
            <div slot="ag-start">2023-03-01</div>
            <div slot="ag-marker">
              <ag-icon type="warning" size="18">
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </ag-icon>
            </div>
            <div slot="ag-end">Step 3 Failed</div>
          </ag-timeline-item>
        </ag-timeline>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-tabs id="my-tabs" aria-label="Basic tabs example">
          <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
          <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
          <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
          <ag-tab-panel slot="panel" panel="panel-1">
            <p>Content for Tab 1</p>
          </ag-tab-panel>
          <ag-tab-panel slot="panel" panel="panel-2">
            <p>Content for Tab 2</p>
          </ag-tab-panel>
          <ag-tab-panel slot="panel" panel="panel-3">
            <p>Content for Tab 3</p>
    </ag-tab-panel>
  </ag-tabs>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <div class="full-width">
          <ag-slider id="slider1" label="Slider" min="0" max="100" step="1" value="50"></ag-slider>
          <ag-slider id="slider2" dual label="Slider" min="0" max="1000" step="1" value="[200,800]"></ag-slider>
        </div>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-fieldset legend="Personal Information" style="width: 100%;">
          <ag-radio name="gender" value="male">Male</ag-radio>
          <ag-radio name="gender" value="female">Female</ag-radio>
          <ag-radio name="gender" value="other">Other</ag-radio>
        </ag-fieldset>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-skeleton-loader variant="rectangular" width="100px" height="40px"></ag-skeleton-loader>
        <ag-skeleton-loader variant="rounded" width="100px" height="40px"></ag-skeleton-loader>
        <ag-skeleton-loader variant="circular" width="40px" height="40px"></ag-skeleton-loader>
        <ag-skeleton-loader variant="circular" width="60px" height="60px"></ag-skeleton-loader>
        <ag-skeleton-loader variant="text" width="200px"></ag-skeleton-loader>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-progress-ring value=${75}></ag-progress-ring>
        <ag-progress-ring value=${50} max=${100} variant="success"></ag-progress-ring>
        <ag-progress-ring value=${25} max=${100} size="large" variant="danger"></ag-progress-ring>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-rating value="4"></ag-rating>
        <ag-rating value="2.5" precision="half" size="large"></ag-rating>
        <ag-rating value="4" size="small" variant="success"></ag-rating>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-toggle id="toggle-notifications" label="Enable notifications"></ag-toggle>
        <ag-toggle id="toggle-dark-mode" label="Dark mode" size="lg"></ag-toggle>
        <ag-toggle label="Success variant" variant="success" checked></ag-toggle>
        <ag-toggle label="Danger variant" variant="danger" checked></ag-toggle>
      </ag-flex-row>
      <div class="full-width" style="display: flex; justify-content: center; align-items: center; min-height: 300px; position: relative;">
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; grid-template-rows: 1fr auto 1fr; gap: 3rem; place-items: center;">
          <!-- 12 o'clock - Top -->
          <div style="grid-column: 2; grid-row: 1;">
            <ag-tooltip content="12 o'clock - Top" placement="top">
              <ag-button variant="primary">🕛 Top</ag-button>
            </ag-tooltip>
          </div>

          <!-- 3 o'clock - Right -->
          <div style="grid-column: 3; grid-row: 2;">
            <ag-tooltip content="3 o'clock - Right" placement="right">
              <ag-button variant="primary">🕒 Right</ag-button>
            </ag-tooltip>
          </div>

          <!-- Center clock face -->
          <div style="grid-column: 2; grid-row: 2; width: 120px; height: 120px; border: 3px solid var(--ag-border); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
            🕐
          </div>

          <!-- 6 o'clock - Bottom -->
          <div style="grid-column: 2; grid-row: 3;">
            <ag-tooltip content="6 o'clock - Bottom" placement="bottom">
              <ag-button variant="primary">🕕 Bottom</ag-button>
            </ag-tooltip>
          </div>

          <!-- 9 o'clock - Left -->
          <div style="grid-column: 1; grid-row: 2;">
            <ag-tooltip content="9 o'clock - Left" placement="left">
              <ag-button variant="primary">🕘 Left</ag-button>
            </ag-tooltip>
          </div>
        </div>
      </div>
      <ag-flex-row class="responsive">
        <ag-progress .value=${50} .max=${100} .label=${"Loading..."}></ag-progress>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-popover trigger-type="hover">
          <ag-button variant="primary" bordered slot="trigger">Hover Me</ag-button>
          <span slot="title">Hover Popover</span>
          <div slot="content">
            <p>This popover opens on hover.</p>
          </div>
        </ag-popover>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-pagination current="5" total-pages="10" first-last-navigation></ag-pagination>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-loader size="small"></ag-loader>
        <ag-loader></ag-loader>
        <ag-loader size="large"></ag-loader>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <p>This is <ag-mark variant="success">Success</ag-mark> and this is <ag-mark variant="error">Error</ag-mark></p>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <div style="position: relative">
          <ag-menu-button id="my-menu" menu-variant="chevron" size="md">
            Menu
            <ag-menu slot="menu" aria-label="Action menu">
              <ag-menu-item value="edit">Edit</ag-menu-item>
              <ag-menu-item value="copy">Copy</ag-menu-item>
              <ag-menu-item value="move">Move</ag-menu-item>
              <ag-menu-item value="share">Share</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="delete">Delete</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <ag-message-bubble
          from="them"
          message="Hey, are we still on for lunch?"
          author="Sarah"
          time="11:30 AM"
        ></ag-message-bubble>
        <ag-message-bubble
          from="me"
          message="Yes! Where should we go?"
          author="Me"
          time="11:32 AM"
        ></ag-message-bubble>
        <ag-message-bubble
          from="them"
          message="How about that new Italian place?"
          author="Sarah"
          time="11:33 AM"
        ></ag-message-bubble>
        <ag-message-bubble
          from="me"
          message="Sounds perfect. See you there at 12:30."
          author="Me"
          time="11:35 AM"
        ></ag-message-bubble>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <ag-kbd>Ctrl</ag-kbd>
        <ag-kbd>Alt</ag-kbd>
        <ag-kbd>Shift</ag-kbd>
        <ag-kbd>Cmd</ag-kbd>
        <ag-kbd>Enter</ag-kbd>
        <ag-kbd>⌘</ag-kbd>
        <ag-kbd>⌥</ag-kbd>
        <ag-kbd>⇧</ag-kbd>
        <ag-kbd>⌃</ag-kbd>
        <ag-kbd
            size="sm"
          >⌘</ag-kbd>
          <ag-kbd
            size="sm"
          >⌥</ag-kbd>
          <ag-kbd
            size="sm"
          >⇧</ag-kbd>
          <ag-kbd size="sm">⌃</ag-kbd>
          <ag-kbd
            size="lg"
          >⌘</ag-kbd>
          <ag-kbd
            size="lg"
          >⌥</ag-kbd>
          <ag-kbd
            size="lg"
          >⇧</ag-kbd>
          <ag-kbd size="lg">⌃</ag-kbd>
          <ag-kbd
            background
            variant="primary"
          >⌘</ag-kbd>
          <ag-kbd
            background
            variant="info"
          >⌥</ag-kbd>
          <ag-kbd
            background
            variant="warning"
          >⇧</ag-kbd>
          <ag-kbd
            background
            variant="success"
          >⌃</ag-kbd>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-fieldset legend="Personal Information" style="width: 100%;">
          <ag-input
            id="email-input"
            label="Email"
            type="email"
            placeholder="you@example.com"
            help-text="We'll never share your email"
          ></ag-input>

          <ag-input
            id="username-input"
            label="Username"
            required
            error-message="Username is required"
            help-text="Choose a unique username"
          ></ag-input>

          <ag-input
            id="message-input"
            label="Message"
            type="textarea"
            rows="4"
            placeholder="Tell us about yourself..."
          ></ag-input>

          <ag-input
            id="price-input"
            label="Hourly Rate"
            type="number"
            placeholder="0.00"
          >
            <span slot="addon-left">$</span>
          </ag-input>

          <ag-input
            label="Website"
            rounded
            placeholder="https://example.com"
          ></ag-input>
        </ag-fieldset>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-icon-button label="Settings">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
          </svg>
        </ag-icon-button>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-icon-button-fx
          fx="pulse"
          fx-ease="spring-md"
          variant="primary"
          label="Like"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </ag-icon-button-fx>

        <ag-icon-button-fx
          fx="glow"
          fx-ease="spring-sm"
          variant="secondary"
          label="Star"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </ag-icon-button-fx>

        <ag-icon-button-fx
          fx="ripple"
          fx-ease="spring-lg"
          variant="tertiary"
          label="Settings"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
          </svg>
        </ag-icon-button-fx>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-empty-state
          title="No team members"
          subtitle="Invite people to collaborate on this project"
        >
          <div slot="actions">
            <ag-button variant="primary" size="sm" shape="rounded">
              Invite Members
            </ag-button>
            <ag-button variant="secondary" size="sm" shape="rounded">
              Learn More
            </ag-button>
          </div>
        </ag-empty-state>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-button shape="rounded" bordered variant="primary" id="open-dialog">Open Dialog</ag-button>
        <ag-dialog
          id="my-dialog"
          heading="Dialog Title"
          description="This is a dialog description"
        >
          <p>This is the dialog content.</p>
        </ag-dialog>

        <ag-dialog id="custom-dialog">
          <div slot="header">
            <h2 style="margin: 0;">Custom Header</h2>
          </div>
          <p>Dialog with custom header and footer.</p>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <ag-button>Cancel</ag-button>
            <ag-button>Confirm</ag-button>
          </div>
        </ag-dialog>

        <ag-dialog
          heading="Dialog with Close Button"
          show-close-button
        >
          <p>This dialog includes a close button.</p>
        </ag-dialog>
        <ag-button variant="primary" shape="rounded" id="open-start">Open Navigation Drawer</ag-button>
        <ag-drawer
          id="start-drawer"
          position="start"
          heading="Navigation"
          show-close-button
        >
          <nav>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 0.5rem 0;"><a href="#">Dashboard</a></li>
              <li style="padding: 0.5rem 0;"><a href="#">Projects</a></li>
              <li style="padding: 0.5rem 0;"><a href="#">Settings</a></li>
            </ul>
          </nav>
        </ag-drawer>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-checkbox
          name="example"
          value="1"
          label-text="I agree to the terms and conditions"
        >
        </ag-checkbox>
        <ag-checkbox
          name="example"
          value="2"
          label-text="Subscribe to newsletter"
          checked
        >
        </ag-checkbox>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-combobox
          .options=${this.stateOptions}
          .value=${this.selectedState}
          label="Select State"
          placeholder="Choose a state..."
          @change=${this.handleChange}
        ></ag-combobox>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-copy-button
          text="Copy this text"
          variant="primary"
        />  
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-collapsible
          title="Collapsible"
          variant="primary"
        >
          Collapsible content
        </ag-collapsible> 
        <ag-collapsible
        bordered
        use-x
      >
          <template #summary>
            <span>X Indicator - Rotates from upside-down plus to X</span>
          </template>
          <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
        </ag-collapsible>

        <ag-collapsible
          bordered
          use-minus
        >
          <template #summary>
            <span>Plus/Minus - Swaps icons</span>
          </template>
          <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
        </ag-collapsible>

        <ag-collapsible
          bordered
          no-indicator
        >
          <template #summary>
            <span>No Indicator - Completely hidden</span>
          </template>
          <p>No indicator is shown at all.</p>
        </ag-collapsible>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <ag-button variant="primary">Primary Button</ag-button>
        <ag-button variant="warning">Warning Button</ag-button>
        <ag-button variant="secondary">Secondary Button</ag-button>
        <ag-button variant="success">Success Button</ag-button>
        <ag-button variant="danger">Danger Button</ag-button>
        <ag-button variant="danger" bordered>Bordered</ag-button>
        <ag-button variant="danger" bordered shape="rounded">Bordered Round</ag-button>
        <ag-button variant="danger" bordered shape="capsule">Capsule</ag-button>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <ag-link href="/home">Go to Home</ag-link>
        <ag-link href="/success" variant="success">Success Link</ag-link>
        <ag-link href="https://example.com" external>External Link</ag-link>
        <ag-link href="/action" isButton variant="primary">Button Link</ag-link>
        <ag-link href="/action" isButton buttonSize="lg" buttonShape="capsule">
        Large Capsule Button</ag-link>
        <ag-link href="/action" isButton buttonBordered variant="primary">Bordered Button</ag-link>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <ag-badge variant="primary">Primary</ag-badge>
        <ag-badge variant="success">Success</ag-badge>
        <ag-badge variant="warning">Warning</ag-badge>
        <ag-badge variant="danger">Danger</ag-badge>
        <ag-badge variant="neutral">Neutral</ag-badge>
        <ag-badge variant="info">Info</ag-badge>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <ag-badge-fx fx="bounce" fx-speed="md"> Badge Text </ag-badge-fx>
        <ag-badge-fx fx="bounce" variant="success">Bounce</ag-badge-fx>
        <ag-badge-fx fx="pulse" variant="info">Pulse</ag-badge-fx>
        <ag-badge-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="monochrome">Jelly</ag-badge-fx>
        <ag-badge-fx fx="shimmer" fx-speed="xl" variant="danger">Shimmer</ag-badge-fx>
        <ag-badge-fx fx="glow" variant="primary">Glow</ag-badge-fx>
        <ag-badge-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</ag-badge-fx>
        <ag-badge-fx fx="ripple" variant="info">Ripple</ag-badge-fx>
        <ag-badge-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</ag-badge-fx>
        <ag-badge-fx fx="press-pop" variant="default" interactive>Press Pop</ag-badge-fx>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-button-fx
          fx="bounce"
          fx-ease="spring-md"
          title="Bounce"
          variant="primary"
          shape="rounded"
        >
          Bounce
        </ag-button-fx>
        <ag-button-fx
          fx="pulse"
          fx-ease="spring-md"
          title="Pulse"
          variant="success"
          shape="rounded"
        >
          Pulse
        </ag-button-fx>
        <ag-button-fx
          fx="jelly"
          fx-ease="spring-lg"
          fx-speed="lg"
          title="Jelly button"
          variant="warning"
          shape="rounded"
        >
          Jelly
        </ag-button-fx>
        <ag-button-fx
          fx="grow"
          fx-ease="spring-md"
          title="Grow button"
          variant="primary"
          shape="rounded"
        >
          Grow
        </ag-button-fx>
        <ag-button-fx
          fx="shrink"
          fx-ease="spring-md"
          title="Shrink button"
          variant="secondary"
          shape="rounded"
        >
          Shrink
        </ag-button-fx>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-button-fx
          fx="press-pop"
          fx-ease="spring-sm"
          title="Press Pop"
          variant="primary"
          shape="rounded"
        >
          Press Pop
        </ag-button-fx>
        <ag-button-fx
          fx="press-shadow"
          variant="warning"
          title="Press Shadow"
          shape="rounded"
        >
          Press Shadow
        </ag-button-fx>
      </ag-flex-row>
      <ag-flex-row class="responsive" wrap="wrap">
        <ag-alert variant="primary" rounded borderedLeft>
          primary alert
        </ag-alert>
        <ag-alert variant="info" rounded borderedLeft>
          info alert
        </ag-alert>
        <ag-alert variant="success" rounded borderedLeft>
          success alert
        </ag-alert>
        <ag-alert variant="warning" rounded borderedLeft>
          warning alert
        </ag-alert>
        <ag-alert variant="error" rounded borderedLeft>
          error alert
        </ag-alert>
        <ag-alert variant="danger" rounded borderedLeft>
          danger alert
        </ag-alert>
        <ag-alert variant="monochrome" rounded borderedLeft>
          monochrome alert
        </ag-alert>
      </ag-flex-row>

      <!-- Accordion -->
      <h2 style="margin-top: 2rem; margin-bottom: 1rem;">Accordion</h2>
      <ag-accordion>
        <ag-accordion-item>
          <span slot="header">What is AgnosticUI?</span>
          <div slot="content">
            <p style="margin: 0.5rem 0;">
              AgnosticUI is a component library that works across React, Vue, and Lit frameworks.
              It uses web components with open shadow DOM to provide framework-agnostic components.
            </p>
          </div>
        </ag-accordion-item>

        <ag-accordion-item>
          <span slot="header">How does it work?</span>
          <div slot="content">
            <p style="margin: 0.5rem 0;">
              Components are built with Lit web components and then wrapped with framework-specific
              wrappers for React and Vue. This allows you to use the same components across different
              projects with different frameworks.
            </p>
          </div>
        </ag-accordion-item>

        <ag-accordion-item>
          <span slot="header">What are the benefits?</span>
          <div slot="content">
            <p style="margin: 0.5rem 0;">
              Benefits include framework flexibility, consistent design across projects, reduced
              maintenance burden, and the ability to share components between teams using different
              frameworks.
            </p>
          </div>
        </ag-accordion-item>
      </ag-accordion>

      <ag-flex-row class="responsive">
        <ag-tag variant="primary" shape="pill">
          Primary Tag
        </ag-tag>
        <ag-tag variant="success" shape="pill" uppercase>
          Active
          <ag-visually-hidden>Active Task</ag-visually-hidden>
        </ag-tag>
        <ag-tag variant="error" shape="pill" uppercase>
          Error
        </ag-tag>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-avatar-group>
          <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="DC" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="EF" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="GH" variant="info" size="lg"></ag-avatar>
        </ag-avatar-group>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-aspect-ratio width="16" height="9">
          <ag-image
            class="responsive-image-container"
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800"
            alt="A beautiful landscape."
          ></ag-image>
        </ag-aspect-ratio>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="USD"
          lang="en-US"
        ></ag-intl-formatter>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="USD"
          lang="fr-FR"
        ></ag-intl-formatter>
        <ag-intl-formatter
          type="currency"
          value="1234.56"
          currency="EUR"
          lang="de-DE"
        ></ag-intl-formatter>
        <ag-intl-formatter
          type="date"
          value="2022-01-01"
          dateStyle="long"
          lang="en-US"
        ></ag-intl-formatter>
        <ag-intl-formatter
          type="date"
          value="2022-01-01"
          dateStyle="long"
          lang="de-DE"
        ></ag-intl-formatter>
        <ag-intl-formatter
          type="percent"
          value="0.75"
          lang="en-US"
        ></ag-intl-formatter>
        <ag-intl-formatter
          type="number"
          value="1234.56"
          lang="en-US"
        ></ag-intl-formatter>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-breadcrumb
          .items=${[
            { label: 'Home', href: '/' },
            { label: 'Library', href: '/library' },
            { label: 'Data', href: '/data' },
            { label: 'Files', href: '/files' },
            { label: 'Current', current: true }
          ]}
          type="default"
          primary
          ariaLabel="Breadcrumb"
          @breadcrumb-click="handleBreadcrumbClick"
        ></ag-breadcrumb>
      </ag-flex-row>
      <slot></slot>
    `
  }

  static styles = css`
    :host {
      display: flex;
      gap: var(--ag-space-4);
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      flex-direction: column;
    }
    .card {
      margin-block: var(--ag-space-8);
    }
    .responsive {
      --flex-direction: column;
      --flex-gap: var(--ag-space-2);
      width: 100%;
    }
    .full-width {
      width: 100%;
    }
    @media (min-width: 768px) {
      .responsive {
        --flex-direction: row;
        --flex-gap: var(--ag-space-4);
      }
    }

    /* Sidebar nav button styles */
    .nav-button {
      display: flex;
      align-items: center;
      gap: var(--ag-space-3);
      position: relative;
      padding: var(--ag-space-2) var(--ag-space-3);
      border: none;
      background: none;
      cursor: pointer;
      width: 100%;
      text-align: left;
      border-radius: var(--ag-radius-sm);
      transition: background var(--ag-fx-duration-sm);
      color: inherit;
    }

    .nav-button svg {
      flex-shrink: 0;
    }

    .nav-button:hover {
      background: var(--ag-background-secondary);
    }

    .nav-button.active {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
      font-weight: 500;
    }

    .nav-button .nav-label {
      flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: opacity var(--ag-sidebar-transition-duration, 200ms) var(--ag-sidebar-transition-easing, ease-in-out);
    }

    /* Chevron rotation */
    .nav-button .chevron {
      transition: transform var(--ag-fx-duration-md);
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    .nav-button[aria-expanded="true"] .chevron {
      transform: rotate(90deg);
    }

    /* Collapsed indicator for collapsed mode submenus */
    .nav-button .collapsed-indicator {
      display: none;
      position: absolute;
      bottom: -1px;
      right: -1px;
      width: var(--ag-space-3);
      height: var(--ag-space-3);
    }

    .nav-button .collapsed-indicator svg {
      color: var(--ag-text-secondary);
      transform: rotate(315deg);
    }

    /* Collapsed state */
    ag-sidebar[collapsed] .nav-button {
      width: auto;
      padding: var(--ag-space-2);
      justify-content: center;
    }

    ag-sidebar[collapsed] .nav-button .nav-label,
    ag-sidebar[collapsed] .nav-button .chevron {
      opacity: 0;
      pointer-events: none;
      display: none;
    }

    ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
      display: block;
    }

    /* Submenu styles */
    .nav-sublink {
      display: block;
      padding: var(--ag-space-2) var(--ag-space-3);
      margin-block-end: var(--ag-space-1);
      color: inherit;
      text-decoration: none;
      border-radius: var(--ag-radius-sm);
      transition: background var(--ag-fx-duration-sm);
    }

    .nav-sublink:hover {
      background: var(--ag-background-secondary);
    }

    .nav-sublink.active {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
      font-weight: 500;
    }

    /* Visibility rules for expanded vs collapsed mode */
    ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
    ag-sidebar:not([collapsed]) ag-popover,
    ag-sidebar[collapsed] .nav-button-expanded,
    ag-sidebar:not([collapsed]) .nav-button-collapsed {
      display: none !important;
    }

    /* Fix popover centering in collapsed mode */
    ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
      display: block !important;
    }

    /* Popover content padding */
    .nav-button-collapsed::part(ag-popover-body) {
      padding: var(--ag-space-1);
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
