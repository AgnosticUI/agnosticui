import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// Dialog is a self-Registering Custom Element that registers
// itself in the global CustomElementRegistry
import "../../Dialog/core/_dialog";

@customElement('ag-drawer')
export class AgnosticDrawer extends LitElement {
  @property({ type: Boolean, reflect: true })
  declare open: boolean;

  @property({ type: String })
  declare heading: String;

  @property({ type: String })
  declare description: string;

  @property({ type: Boolean })
  declare noCloseOnEscape;

  @property({ type: Boolean })
  declare noCloseOnBackdrop;

  @property({ type: Boolean })
  declare showCloseButton;

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
}
