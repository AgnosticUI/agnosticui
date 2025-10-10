import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// Dialog is a self-Registering Custom Element that registers
// itself in the global CustomElementRegistry
import "../../Dialog/core/_dialog";

// Event types
export type DrawerCloseEvent = CustomEvent<void>;

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
  onClose?: (event: DrawerCloseEvent) => void;
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

  /*
  Property Bindings
  In Lit, the dot (.) prefix is used to create a property binding, which sets a JavaScript property on an element instead of an HTML attribute. This is a critical distinction because properties can hold any JavaScript data type, including objects, arrays, and booleans, while HTML attributes can only store strings.
  https://lit.dev/docs/v1/lit-html/template-reference/#binding-types
  https://vaadin.com/docs/latest/hilla/lit/components/create#binding-to-a-property
  */
  render() {
    return html`
      <ag-dialog
        @dialog-close=${this._handleDialogClose}
        .open=${this.open}
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

  private _handleDialogClose(e: Event) {
    e.stopPropagation();
    const closeEvent = new CustomEvent('close', {
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    this.dispatchEvent(closeEvent);

    if (!closeEvent.defaultPrevented) {
      this.open = false;
    }
  }
}
