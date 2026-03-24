import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import '@agnosticui/render-lit';
import 'agnosticui-core/collapsible';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import type { AgNode } from '@agnosticui/schema';
import { step1Nodes, getNextNodes } from '../../../demo/src/fixtures/adaptive-questionnaire';
import { streamFixture } from '../../../demo/src/lib/stream';

const PANEL_AUTO_CLOSE_MS = 8000;

type ValidationError = { failingId: string; errorText: AgNode; errorAlert: AgNode };

function buildValidationErrors(nodeList: AgNode[], ans: Record<string, unknown>): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const n of nodeList) {
    const raw = n as unknown as Record<string, unknown>;
    const val = ans[n.id];
    const label = String(raw['label'] || raw['legend'] || 'This field');
    let message: string | null = null;
    if (raw['required'] && (val === undefined || val === '')) {
      message = `${label} is required`;
    } else {
      const max = raw['max'] as string | undefined;
      if (max && typeof val === 'string' && val > max) {
        message = `${label} cannot be a future date`;
      }
      const min = raw['min'] as string | undefined;
      if (!message && min && typeof val === 'string' && val < min) {
        message = `${label} cannot be a past date`;
      }
    }
    if (message) {
      errors.push({
        failingId: n.id,
        errorText: { id: `${n.id}-error-text`, component: 'AgText', text: message } as AgNode,
        errorAlert: { id: `${n.id}-error-alert`, component: 'AgAlert', variant: 'danger', bordered: true, rounded: true, children: [`${n.id}-error-text`] } as AgNode,
      });
    }
  }
  return errors;
}

function injectValidationErrors(nodeList: AgNode[], errors: ValidationError[]): AgNode[] {
  const errorMap = new Map(errors.map(e => [e.failingId, e]));
  return nodeList.reduce<AgNode[]>((acc, n) => {
    acc.push(n);
    const err = errorMap.get(n.id);
    if (err) {
      acc.push(err.errorText);
      acc.push(err.errorAlert);
    }
    return acc;
  }, []);
}

export class AdaptiveOutput extends LitElement {
  static styles = css`
    :host { display: block; }

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

  @state() private nodes: AgNode[] = [];
  @state() private answers: Record<string, unknown> = {};
  @state() private panelOpen = false;

  private history: AgNode[][] = [];
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

  // Lit renderer dispatches { id, value } as the payload to each action.
  private readonly actions: Record<string, (payload?: unknown) => void> = {
    ANSWER_CHANGE: (payload: unknown) => {
      const { id, value } = payload as { id: string; value: unknown };
      this.answers = { ...this.answers, [id]: value };
      const groupNode = this.nodes.find(n => n.id === id &&
        (n.component === 'AgSelectionButtonGroup' || n.component === 'AgSelectionCardGroup'));
      const groupChildren = groupNode
        ? ((groupNode as unknown as Record<string, unknown>)['children'] as string[] ?? [])
        : [];
      this.nodes = this.nodes
        .filter(n => n.id !== `${id}-error-text` && n.id !== `${id}-error-alert`)
        .map(n => {
          if (n.id === id && (n.component === 'AgSelectionButtonGroup' || n.component === 'AgSelectionCardGroup')) {
            return { ...n, value: value as string } as AgNode;
          }
          if (groupChildren.includes(n.id) && (n.component === 'AgSelectionButton' || n.component === 'AgSelectionCard')) {
            const btnRaw = n as unknown as Record<string, unknown>;
            return { ...n, checked: btnRaw['value'] === value } as AgNode;
          }
          return n;
        });
    },

    NEXT_STEP: () => {
      const errors = buildValidationErrors(this.nodes, this.answers);
      if (errors.length > 0) { this.nodes = injectValidationErrors(this.nodes, errors); return; }
      const next = getNextNodes(this.answers);
      this.history = [...this.history, this.nodes];
      this.openPanel();
      this.nodes = next;
    },

    PREV_STEP: () => {
      const prev = this.history[this.history.length - 1];
      if (!prev) return;
      this.history = this.history.slice(0, -1);
      this.nodes = prev;
    },

    SUBMIT: () => {
      const errors = buildValidationErrors(this.nodes, this.answers);
      if (errors.length > 0) { this.nodes = injectValidationErrors(this.nodes, errors); return; }
      const next = getNextNodes(this.answers);
      this.openPanel();
      this.nodes = next;
    },

    RESTART: () => {
      this.answers = {};
      this.history = [];
      this.openPanel();
      this.runStream(step1Nodes);
    },
  };

  override connectedCallback() {
    super.connectedCallback();
    this.openPanel();
    this.runStream(step1Nodes);
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
        <span slot="summary">Accumulated answers</span>
        <pre class="node-panel-pre">${JSON.stringify(this.answers, null, 2)}</pre>
      </ag-collapsible>
      <ag-dynamic-renderer .nodes=${this.nodes} .actions=${this.actions}></ag-dynamic-renderer>
    `;
  }
}

customElements.define('ag-adaptive-output', AdaptiveOutput);
