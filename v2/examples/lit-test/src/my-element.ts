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
  }


  render() {
    return html`
      <h1>Kitchen Sink :-)</h1>
      <ag-stack gap="1rem">
        <h2>Stack</h2>
        <div>Stacked Item 1.</div>
        <div>Stacked Item 2.</div>
        <div>Stacked Item 3.</div>
      </ag-stack>
      <ag-card class="card">Card</ag-card>
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
        <button id="open-dialog">Open Dialog</button>
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
            <button>Cancel</button>
            <button>Confirm</button>
          </div>
        </ag-dialog>

        <ag-dialog
          heading="Dialog with Close Button"
          show-close-button
        >
          <p>This dialog includes a close button.</p>
        </ag-dialog>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <button id="open-start">Open Navigation</button>
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
        />
        <ag-checkbox
          name="example"
          value="2"
          label-text="Subscribe to newsletter"
          checked
        />
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
      <ag-flex-row class="responsive">
        <ag-button variant="primary">Primary Button</ag-button>
        <ag-button variant="warning">Warning Button</ag-button>
        <ag-button variant="secondary">Secondary Button</ag-button>
        <ag-button variant="success">Success Button</ag-button>
        <ag-button variant="danger">Danger Button</ag-button>
        <ag-button variant="danger" bordered>Bordered</ag-button>
        <ag-button variant="danger" bordered shape="rounded">Bordered Round</ag-button>
        <ag-button variant="danger" bordered shape="capsule">Capsule</ag-button>
      </ag-flex-row>
      <ag-flex-row class="responsive">
        <ag-badge variant="primary">Primary</ag-badge>
        <ag-badge variant="success">Success</ag-badge>
        <ag-badge variant="warning">Warning</ag-badge>
        <ag-badge variant="danger">Danger</ag-badge>
        <ag-badge variant="neutral">Neutral</ag-badge>
        <ag-badge variant="info">Info</ag-badge>
      </ag-flex-row>
      <ag-flex-row class="responsive">
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
      <ag-flex-row class="responsive">
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
      display: grid;
      row-gap: var(--ag-space-4);
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
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
