import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import '@agnosticui/render-lit';
import type { AgNode } from '@agnosticui/schema';
import { pickVariation } from '../../../demo/src/fixtures/index';
import { streamFixture } from '../../../demo/src/lib/stream';

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
  `;

  @property() workflow = 'contact-form';
  @property({ type: Number }) seed = 0;

  @state() private nodes: AgNode[] = [];

  private cancelStream: (() => void) | null = null;

  private async startStream(workflow: string) {
    if (this.cancelStream) this.cancelStream();
    let cancelled = false;
    this.cancelStream = () => { cancelled = true; };
    this.nodes = [];
    const fixture = pickVariation(workflow);
    for await (const node of streamFixture(fixture)) {
      if (cancelled) break;
      this.nodes = [...this.nodes, node];
    }
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('workflow') || changed.has('seed')) {
      this.startStream(this.workflow);
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.startStream(this.workflow);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.cancelStream) this.cancelStream();
  }

  render() {
    return html`<ag-dynamic-renderer .nodes=${this.nodes}></ag-dynamic-renderer>`;
  }
}

customElements.define('ag-streaming-output', StreamingOutput);
