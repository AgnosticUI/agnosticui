import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import '@agnosticui/render-lit';
import 'agnosticui-core/collapsible';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import type { AgNode } from '@agnosticui/schema';
import { AG_FACE_SELECTOR } from '@agnosticui/schema';
import { pickVariation, confirmFixtures, workflowActions } from '../../../demo/src/fixtures/index';
import { streamFixture } from '../../../demo/src/lib/stream';

const PANEL_AUTO_CLOSE_MS = 8000;

export class StreamingOutput extends LitElement {
  static styles = css`
    :host { display: block; }

    ag-checkbox {
      display: block;
    }

    ag-input,
    ag-checkbox,
    ag-toggle,
    ag-divider,
    ag-link,
    ag-badge {
      display: block;
      margin-block-end: var(--ag-space-4, 1rem);
    }

    ag-button + ag-button {
      margin-block-start: var(--ag-space-4, 1rem);
    }

    ag-alert {
      display: block;
      margin-block-end: var(--ag-space-4, 1rem);
    }

    ag-selection-button-group {
      display: block;
      margin-block-end: var(--ag-space-4, 1rem);
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

  @property() workflow = 'contact-form';
  @property({ type: Number }) seed = 0;

  @state() private nodes: AgNode[] = [];
  @state() private actions: Record<string, () => void> = {};
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

  private async runStream(fixture: AgNode[]) {
    if (this.cancelStream) this.cancelStream();
    let cancelled = false;
    this.cancelStream = () => { cancelled = true; };
    this.nodes = [];
    for await (const node of streamFixture(fixture)) {
      if (cancelled) break;
      this.nodes = [...this.nodes, node];
    }
  }

  // ag-dynamic-renderer uses createRenderRoot(){return this} so its children
  // are in its own light DOM, directly queryable from the shadow root of this element.
  private _validateForm(): boolean {
    const renderer = this.renderRoot.querySelector('ag-dynamic-renderer');
    if (!renderer) return true;
    const elements = renderer.querySelectorAll(AG_FACE_SELECTOR);
    let valid = true;
    elements.forEach(el => {
      if (typeof (el as HTMLInputElement).reportValidity === 'function') {
        if (!(el as HTMLInputElement).reportValidity()) valid = false;
      }
    });
    return valid;
  }

  private buildActions(workflow: string): Record<string, () => void> {
    const aliases = workflowActions[workflow] ?? {};
    const map: Record<string, () => void> = {};
    for (const [alias, confirmKey] of Object.entries(aliases)) {
      map[alias] = () => {
        if (!this._validateForm()) return;
        const fixture = confirmFixtures[confirmKey];
        if (fixture) { this.openPanel(); this.runStream(fixture); }
      };
    }
    return map;
  }

  private startWorkflow(workflow: string) {
    this.openPanel();
    this.actions = this.buildActions(workflow);
    this.runStream(pickVariation(workflow));
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('workflow') || changed.has('seed')) {
      this.startWorkflow(this.workflow);
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.startWorkflow(this.workflow);
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

customElements.define('ag-streaming-output', StreamingOutput);
