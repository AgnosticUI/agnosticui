import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import 'agnosticui-core/header';
import './components/WorkflowPicker';
import './components/StreamingOutput';
import './components/AdaptiveOutput';
import './components/CollapsibleDemo';
import './SkinSwitcher';

const ADAPTIVE_WORKFLOW = 'adaptive-questionnaire';
const COLLAPSIBLE_WORKFLOW = 'collapsible-demo';

export class AgSduiDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .demo-layout {
      max-width: 900px;
      margin: 0 auto;
      margin-block-start: var(--ag-space-8, 2rem);
      padding: 0 1.5rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .demo-brand {
      text-decoration: none;
      color: inherit;
      font-weight: 700;
      font-size: 1.25rem;
    }

    .demo-nav-label {
      font-size: 0.9rem;
      color: var(--ag-text-muted, #666);
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
      color: var(--ag-text-muted, #666);
    }

    .demo-picker-section label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ag-text-muted, #666);
      margin-bottom: 0.75rem;
    }

    .demo-output-body {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-4, 1rem);
      min-height: 120px;
    }

  `;

  @state() private workflow = 'contact-form';
  @state() private seed = 0;

  private get isAdaptive() {
    return this.workflow === ADAPTIVE_WORKFLOW;
  }

  private get isCollapsible() {
    return this.workflow === COLLAPSIBLE_WORKFLOW;
  }

  private handleSelect(e: Event) {
    this.workflow = (e as CustomEvent<string>).detail;
    this.seed = 0;
  }

  private handleRegenerate() {
    this.seed += 1;
  }

  render() {
    return html`
      <ag-header>
        <a href="/" slot="logo" class="demo-brand">AgnosticUI SDUI</a>
        <nav aria-label="Demo navigation">
          <span class="demo-nav-label">Schema-Driven UI Demo (Lit)</span>
        </nav>
      </ag-header>
      <div class="demo-layout">
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
            <ag-button shape="rounded" @click=${this.handleRegenerate}>
              ${this.isAdaptive ? 'Restart' : 'Regenerate'}
            </ag-button>
          </div>
          <div class="demo-output-body">
            ${this.isAdaptive
              ? html`<ag-adaptive-output></ag-adaptive-output>`
              : this.isCollapsible
                ? html`<ag-collapsible-demo .seed=${this.seed}></ag-collapsible-demo>`
                : html`<ag-streaming-output
                    .workflow=${this.workflow}
                    .seed=${this.seed}
                  ></ag-streaming-output>`}
          </div>
        </section>
      </div>
      <skin-switcher></skin-switcher>
    `;
  }
}

customElements.define('ag-sdui-demo', AgSduiDemo);
