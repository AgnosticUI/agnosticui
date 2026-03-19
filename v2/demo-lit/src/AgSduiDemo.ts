import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import './components/WorkflowPicker';
import './components/StreamingOutput';

export class AgSduiDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .demo-layout {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .demo-header {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .demo-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }

    .demo-subtitle {
      margin: 0;
      color: var(--ag-color-muted, #666);
      font-size: 0.95rem;
    }

    .demo-subtitle code {
      font-size: 0.85em;
      background: var(--ag-background-alt, #f4f4f5);
      padding: 0.1em 0.4em;
      border-radius: 4px;
    }

    .demo-picker-section {
      background: var(--ag-background-secondary, #f3f4f6);
      border: 1px solid var(--ag-border, #e5e7eb);
      border-radius: 8px;
      padding: 1.25rem;
    }

    .demo-output-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .demo-output-label {
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ag-color-muted, #666);
    }

    .demo-regenerate {
      font-size: 0.85rem;
      padding: 0.35rem 0.85rem;
      border: 1px solid var(--ag-border-color, #d1d5db);
      border-radius: 6px;
      background: transparent;
      cursor: pointer;
      color: inherit;
    }

    .demo-regenerate:hover {
      background: var(--ag-background-alt, #f4f4f5);
    }
  `;

  @state() private workflow = 'contact-form';
  @state() private seed = 0;

  private handleSelect(e: Event) {
    this.workflow = (e as CustomEvent<string>).detail;
    this.seed = 0;
  }

  private handleRegenerate() {
    this.seed += 1;
  }

  render() {
    return html`
      <div class="demo-layout">
        <header class="demo-header">
          <h1 class="demo-title">AgnosticUI — Schema-Driven UI Demo (Lit)</h1>
          <p class="demo-subtitle">
            Select a workflow below. The output renders from a validated
            <code>AgNode[]</code> graph with simulated streaming.
          </p>
        </header>

        <section class="demo-picker">
          <div class="demo-picker-section">
            <ag-workflow-picker
              @workflow-select=${this.handleSelect}
            ></ag-workflow-picker>
          </div>
        </section>

        <section class="demo-output">
          <div class="demo-output-header">
            <span class="demo-output-label">Generated output</span>
            <button class="demo-regenerate" @click=${this.handleRegenerate}>
              Regenerate
            </button>
          </div>
          <div class="demo-output-body">
            <ag-streaming-output
              .workflow=${this.workflow}
              .seed=${this.seed}
            ></ag-streaming-output>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('ag-sdui-demo', AgSduiDemo);
