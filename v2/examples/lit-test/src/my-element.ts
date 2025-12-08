import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
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


    // Debug the menu
    const menuButton = this.shadowRoot?.querySelector('#my-menu') as any;
    console.log('Menu button found:', menuButton);
    
    if (menuButton) {
      const menu = menuButton.querySelector('ag-menu') as any;
      console.log('Menu found:', menu);
      
      if (menu) {
        const items = menu.querySelectorAll('ag-menu-item');
        console.log('MenuButton found menu element:', menuButton._menu);
        console.log('Menu items found:', items.length);
        
        // Watch for property changes on the menu
        menuButton.addEventListener('menu-open', (e: any) => {
          console.log('=== MENU OPEN EVENT ===');
          console.log('Event detail:', e.detail);
          
          // Check menu state after a brief delay
          setTimeout(() => {
            console.log('Menu.open property:', menu.open);
            console.log('Menu has hidden attr:', menu.hasAttribute('hidden'));
            console.log('Menu display style:', window.getComputedStyle(menu).display);
            console.log('Menu visibility:', window.getComputedStyle(menu).visibility);
            console.log('Menu position:', window.getComputedStyle(menu).position);
            console.log('Menu z-index:', window.getComputedStyle(menu).zIndex);
            
            // Check menu bounding box
            const rect = menu.getBoundingClientRect();
            console.log('Menu position (top, left):', rect.top, rect.left);
            console.log('Menu size (width, height):', rect.width, rect.height);
            
            // Check if menuButton has _menuOpen state
            console.log('MenuButton._menuOpen:', menuButton._menuOpen);
            console.log('MenuButton._menu:', menuButton._menu);
          }, 100);
        });
      }
    }
  }


  render() {
    return html`
      <ag-header sticky>
        <a href="/" slot="logo" style="color: var(--ag-primary-text);">Brand</a>
        <nav>Navigation</nav>
      </ag-header>
      <h1>Kitchen Sink :-)</h1>
      <ag-stack gap="1rem">
        <h2>Stack</h2>
        <div>Stacked Item 1.</div>
        <div>Stacked Item 2.</div>
        <div>Stacked Item 3.</div>
      </ag-stack>
      <ag-card class="card">Card</ag-card>
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
        <ag-alert type="primary" rounded borderedLeft>
          primary alert
        </ag-alert>
        <ag-alert type="info" rounded borderedLeft>
          info alert
        </ag-alert>
        <ag-alert type="success" rounded borderedLeft>
          success alert
        </ag-alert>
        <ag-alert type="warning" rounded borderedLeft>
          warning alert
        </ag-alert>
        <ag-alert type="error" rounded borderedLeft>
          error alert
        </ag-alert>
        <ag-alert type="danger" rounded borderedLeft>
          danger alert
        </ag-alert>
        <ag-alert type="monochrome" rounded borderedLeft>
          monochrome alert
        </ag-alert>
      </ag-flex-row>
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
    }
    @media (min-width: 768px) {
      .responsive {
        --flex-direction: row;
        --flex-gap: var(--ag-space-4);
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
