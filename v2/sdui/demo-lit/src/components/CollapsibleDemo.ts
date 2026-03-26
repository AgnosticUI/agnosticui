import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import '@agnosticui/render-lit';
import type { AgNode } from '@agnosticui/schema';
import { collapsibleFixture } from '../../../demo/src/fixtures/collapsible-demo';
import { streamFixture } from '../../../demo/src/lib/stream';

export class CollapsibleDemo extends LitElement {
  static styles = css`
    :host { display: block; }

    ag-dynamic-renderer {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-4, 1rem);
    }
  `;

  @property({ type: Number }) seed = 0;
  @state() private nodes: AgNode[] = [];
  private cancelStream: (() => void) | null = null;

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
    SLIDER_CHANGE: (payload: unknown) => {
      const { value } = payload as { id: string; value: number };
      this.nodes = this.nodes.map(n =>
        n.id === 'slider-value' ? { ...n, text: `Count: ${value}` } as AgNode : n
      );
    },
  };

  private async runStream() {
    if (this.cancelStream) this.cancelStream();
    let cancelled = false;
    this.cancelStream = () => { cancelled = true; };
    this.nodes = [];
    for await (const node of streamFixture(collapsibleFixture)) {
      if (cancelled) break;
      this.nodes = [...this.nodes, node];
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.runStream();
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('seed') && changed.get('seed') !== undefined) {
      this.runStream();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.cancelStream) this.cancelStream();
  }

  render() {
    return html`<ag-dynamic-renderer .nodes=${this.nodes} .actions=${this.actions}></ag-dynamic-renderer>`;
  }
}

customElements.define('ag-collapsible-demo', CollapsibleDemo);
