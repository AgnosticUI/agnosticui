import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type TabsActivation = 'manual' | 'automatic';
export type TabsOrientation = 'horizontal' | 'vertical';

@customElement('ag-tabs')
export class Tabs extends LitElement {
  @property({ type: String })
  declare activation: TabsActivation;

  @property({ type: Number, attribute: 'active-tab' })
  declare activeTab: number;

  @property({ type: String })
  declare orientation: TabsOrientation;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: String, attribute: 'aria-labelledby' })
  declare ariaLabelledBy: string;

  constructor() {
    super();
    this.activation = 'manual';
    this.activeTab = 0;
    this.orientation = 'horizontal';
    this.ariaLabel = '';
    this.ariaLabelledBy = '';
  }

  static styles = css`
    :host {
      display: block;
    }

    [role="tablist"] {
      display: flex;
    }

    [role="tablist"][aria-orientation="vertical"] {
      flex-direction: column;
    }

    ::slotted(ag-tab-panel[hidden]) {
      display: none;
    }
  `;

  render() {
    return html`
      <div
        role="tablist"
        aria-orientation=${this.orientation}
        aria-label=${this.ariaLabel || ''}
        aria-labelledby=${this.ariaLabelledBy || ''}
      >
        <slot name="tab"></slot>
      </div>
      <div class="tab-panels">
        <slot name="panel"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-tabs': Tabs;
  }
}