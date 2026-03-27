import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import '@agnosticui/render-lit';
import 'agnosticui-core/collapsible';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import type { AgNode } from '@agnosticui/schema';
import { collapsibleFixture } from '../../../demo/src/fixtures/collapsible-demo';
import { streamFixture } from '../../../demo/src/lib/stream';

const PANEL_AUTO_CLOSE_MS = 8000;

export class CollapsibleDemo extends LitElement {
  static styles = css`
    :host { display: block; }

    ag-dynamic-renderer {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-4, 1rem);
    }

    ag-collapsible.node-panel {
      display: block;
      border: 1px solid var(--ag-border, #e5e7eb);
      border-radius: 6px;
      overflow: hidden;
      margin-block-end: 1rem;
    }

    ag-collapsible.node-panel::part(ag-collapsible-summary) {
      padding: 0.4rem 0.75rem;
      background: var(--ag-background-secondary, #f3f4f6);
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--ag-text-muted, #666);
      font-family: monospace;
    }

    ag-collapsible.node-panel::part(ag-collapsible-indicator) {
      color: var(--ag-text-muted, #666);
    }

    ag-collapsible.node-panel::part(ag-collapsible-content) {
      padding: 0;
      border-top: 1px solid var(--ag-border, #e5e7eb);
      max-height: 320px;
      overflow-y: auto;
    }

    .node-panel-pre {
      margin: 0;
      padding: 0.75rem;
      font-family: monospace;
      font-size: 0.72rem;
      line-height: 1.5;
      color: var(--ag-text-primary, #111);
      background: var(--ag-background-primary, #fff);
      white-space: pre-wrap;
      word-break: break-all;
    }
  `;

  @property({ type: Number }) seed = 0;
  @state() private nodes: AgNode[] = [];
  @state() private panelOpen = false;
  private cancelStream: (() => void) | null = null;
  private fadeTimer: ReturnType<typeof setTimeout> | null = null;

  private openPanel() {
    this.panelOpen = true;
    if (this.fadeTimer) clearTimeout(this.fadeTimer);
    this.fadeTimer = setTimeout(() => { this.panelOpen = false; }, PANEL_AUTO_CLOSE_MS);
  }

  private _onCollapsibleToggle(e: CollapsibleToggleEvent) {
    const nowOpen = e.detail.open;
    this.panelOpen = nowOpen;
    if (nowOpen) {
      if (this.fadeTimer) clearTimeout(this.fadeTimer);
      this.fadeTimer = setTimeout(() => { this.panelOpen = false; }, PANEL_AUTO_CLOSE_MS);
    } else {
      if (this.fadeTimer) clearTimeout(this.fadeTimer);
    }
  }

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
    this.openPanel();
    this.runStream();
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('seed') && changed.get('seed') !== undefined) {
      this.openPanel();
      this.runStream();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.cancelStream) this.cancelStream();
    if (this.fadeTimer) clearTimeout(this.fadeTimer);
  }

  render() {
    return html`
      <ag-collapsible
        class="node-panel"
        .open=${this.panelOpen}
        .onToggle=${(e: CollapsibleToggleEvent) => this._onCollapsibleToggle(e)}
      >
        <span slot="summary">Node array</span>
        <pre class="node-panel-pre">${JSON.stringify(this.nodes, null, 2)}</pre>
      </ag-collapsible>
      <ag-dynamic-renderer .nodes=${this.nodes} .actions=${this.actions}></ag-dynamic-renderer>
    `;
  }
}

customElements.define('ag-collapsible-demo', CollapsibleDemo);
