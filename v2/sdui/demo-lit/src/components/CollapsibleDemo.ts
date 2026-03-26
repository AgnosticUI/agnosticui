import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import '@agnosticui/render-lit';
import type { AgNode } from '@agnosticui/schema';
import { collapsibleFixture } from '../../../demo/src/fixtures/collapsible-demo';
import { streamFixture } from '../../../demo/src/lib/stream';

export class CollapsibleDemo extends LitElement {
  static styles = css`
    :host { display: block; }
  `;

  @state() private nodes: AgNode[] = [];
  private cancelled = false;

  private actions = {
    COLLAPSIBLE_TOGGLE: (payload: unknown) => {
      const { id, value } = payload as { id: string; value: boolean };
      this.nodes = this.nodes.map(n => {
        if (n.component !== 'AgCollapsible') return n;
        const raw = n as unknown as Record<string, unknown>;
        const newOpen = n.id === id ? value : (value ? false : raw['open'] as boolean);
        return { ...n, open: newOpen } as AgNode;
      });
    },
  };

  async connectedCallback() {
    super.connectedCallback();
    this.cancelled = false;
    this.nodes = [];
    for await (const node of streamFixture(collapsibleFixture)) {
      if (this.cancelled) break;
      this.nodes = [...this.nodes, node];
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cancelled = true;
  }

  render() {
    return html`<ag-dynamic-renderer .nodes=${this.nodes} .actions=${this.actions}></ag-dynamic-renderer>`;
  }
}

customElements.define('ag-collapsible-demo', CollapsibleDemo);
