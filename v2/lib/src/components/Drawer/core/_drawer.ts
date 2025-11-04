import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// Dialog is a self-Registering Custom Element that registers
// itself in the global CustomElementRegistry
import { AgnosticDialog } from "../../Dialog/core/_dialog";

// Event types
export type DrawerOpenEvent = CustomEvent<void>;
export type DrawerCloseEvent = CustomEvent<void>;
export type DrawerCancelEvent = CustomEvent<void>;

// Props interface following INTERFACE_STANDARDS.md
export interface DrawerProps {
  open?: boolean;
  heading?: string;
  description?: string;
  noCloseOnEscape?: boolean;
  noCloseOnBackdrop?: boolean;
  showCloseButton?: boolean;
  position?: 'start' | 'end' | 'top' | 'bottom';
  // Event handlers
  onDrawerOpen?: (event: DrawerOpenEvent) => void;
  onDrawerClose?: (event: DrawerCloseEvent) => void;
  onDrawerCancel?: (event: DrawerCancelEvent) => void;
}

@customElement('ag-drawer')
export class AgnosticDrawer extends LitElement implements DrawerProps {
  @property({ type: Boolean, reflect: true })
  declare open: boolean;

  @property({ type: String })
  declare heading: string;

  @property({ type: String })
  declare description: string;

  @property({ type: Boolean })
  declare noCloseOnEscape: boolean;

  @property({ type: Boolean })
  declare noCloseOnBackdrop: boolean;

  @property({ type: Boolean })
  declare showCloseButton: boolean;

  @property({ type: String, reflect: true, attribute: 'position' })
  declare position: 'start' | 'end' | 'top' | 'bottom';

  @property({ attribute: false })
  declare onDrawerOpen?: (event: DrawerOpenEvent) => void;

  @property({ attribute: false })
  declare onDrawerClose?: (event: DrawerCloseEvent) => void;

  @property({ attribute: false })
  declare onDrawerCancel?: (event: DrawerCancelEvent) => void;

  private _dialogElement?: AgnosticDialog;

  constructor() {
    super();
    this.open = false;
    this.heading = '';
    this.description = '';
    this.position = 'bottom';
    this.noCloseOnEscape = false;
    this.noCloseOnBackdrop = false;
    this.showCloseButton = false;
  }

  firstUpdated(changedProperties: Map<string, unknown>) {
    super.firstUpdated(changedProperties);
    this._dialogElement = this.shadowRoot?.querySelector('ag-dialog') as AgnosticDialog | undefined;

    // Set initial open state
    if (this._dialogElement) {
      this._dialogElement.open = this.open;

      // Set up event forwarding from Dialog events to Drawer events
      this._dialogElement.addEventListener('dialog-open', () => {
        const openEvent = new CustomEvent<void>('drawer-open', {
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(openEvent);
        this.onDrawerOpen?.(openEvent);
      });

      this._dialogElement.addEventListener('dialog-close', () => {
        const closeEvent = new CustomEvent<void>('drawer-close', {
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(closeEvent);
        this.onDrawerClose?.(closeEvent);
        // Sync state only if needed to avoid triggering another render cycle
        if (this.open) {
          this.open = false;
        }
      });

      this._dialogElement.addEventListener('dialog-cancel', () => {
        const cancelEvent = new CustomEvent<void>('drawer-cancel', {
          bubbles: true,
          composed: true,
        });
        this.dispatchEvent(cancelEvent);
        this.onDrawerCancel?.(cancelEvent);
        // Sync state only if needed to avoid triggering another render cycle
        if (this.open) {
          this.open = false;
        }
      });
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    // Manually sync open property changes to Dialog
    if (changedProperties.has('open') && this._dialogElement) {
      // Only update Dialog's open if Drawer's open actually changed
      if (this._dialogElement.open !== this.open) {
        this._dialogElement.open = this.open;
      }
    }
  }

  /*
  Property Bindings
  In Lit, the dot (.) prefix is used to create a property binding, which sets a JavaScript property on an element instead of an HTML attribute. This is a critical distinction because properties can hold any JavaScript data type, including objects, arrays, and booleans, while HTML attributes can only store strings.
  https://lit.dev/docs/v1/lit-html/template-reference/#binding-types
  https://vaadin.com/docs/latest/hilla/lit/components/create#binding-to-a-property
  */
  render() {
    return html`
      <ag-dialog
        .heading=${this.heading}
        .description=${this.description}
        .noCloseOnEscape=${this.noCloseOnEscape}
        .noCloseOnBackdrop=${this.noCloseOnBackdrop}
        .showCloseButton=${this.showCloseButton}
        .drawerPosition=${this.position}
      >
        <slot></slot>
      </ag-dialog>
    `;
  }

}
