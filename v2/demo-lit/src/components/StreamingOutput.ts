import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import '@agnosticui/render-lit';
import type { AgNode } from '@agnosticui/schema';
import { pickVariation, confirmFixtures, workflowActions } from '../../../demo/src/fixtures/index';
import { streamFixture } from '../../../demo/src/lib/stream';

// Only these aliases require form validation before advancing to step 2.
const FORM_ACTIONS = new Set(['SUBMIT_FORM', 'SUBMIT_LOGIN']);

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
  @state() private actions: Record<string, () => void> = {};

  private cancelStream: (() => void) | null = null;

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
    const elements = renderer.querySelectorAll('ag-input, ag-checkbox, ag-toggle');
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
        if (FORM_ACTIONS.has(alias) && !this._validateForm()) return;
        const fixture = confirmFixtures[confirmKey];
        if (fixture) this.runStream(fixture);
      };
    }
    return map;
  }

  private startWorkflow(workflow: string) {
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
  }

  render() {
    return html`<ag-dynamic-renderer .nodes=${this.nodes} .actions=${this.actions}></ag-dynamic-renderer>`;
  }
}

customElements.define('ag-streaming-output', StreamingOutput);
