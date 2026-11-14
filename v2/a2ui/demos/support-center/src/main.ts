import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import '../../../../skins/skins-bundle.css';
import './studio.css';

import { LitElement, html } from 'lit';
import { createElement, CircleSlash2 } from 'lucide';
import { MessageProcessor } from '@a2ui/web_core/v1_0';
import { A2uiSurface, type LitComponentApi } from '@a2ui/lit';
import {
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  runSurfaceValidation,
  createMockA2uiStream,
} from '@agnosticui/a2ui-lit';

import 'agnosticui-core/alert';
import 'agnosticui-core/button';
import 'agnosticui-core/icon-button';
import 'agnosticui-core/select';
import 'agnosticui-core/toggle';

import {
  SKINS,
  applySkin,
  applyTheme,
  restorePrefs,
} from '../../../../skins/skin-switcher-core.js';
import {
  SUPPORT_SCENARIOS,
  type SupportScenario,
} from './fixtures/support-scenarios.js';

registerAgnosticUICatalog();
restorePrefs();

const CLEAR_ICON = createElement(CircleSlash2, {
  width: 16,
  height: 16,
  'aria-hidden': 'true',
});

export class AgA2uiStudio extends LitElement {
  static override properties = {
    selectedScenarioId: { state: true },
    activeSkinId: { state: true },
    isDark: { state: true },
    dataModelJson: { state: true },
    eventLogText: { state: true },
  };

  override createRenderRoot() {
    return this;
  }

  private declare selectedScenarioId: string;
  private declare activeSkinId: string;
  private declare isDark: boolean;
  private declare dataModelJson: string;
  private declare eventLogText: string;

  private activeSurfaceEl: A2uiSurface | null = null;
  private inspectorTimer: number | null = null;

  constructor() {
    super();
    this.selectedScenarioId = SUPPORT_SCENARIOS.at(0)!.id;
    this.activeSkinId = localStorage.getItem('ag-skin') ?? '';
    this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    this.dataModelJson = '{}';
    this.eventLogText = 'Ready.';
  }

  override firstUpdated(): void {
    void this.playScenario(this.currentScenario, 0);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.inspectorTimer !== null) {
      window.clearInterval(this.inspectorTimer);
    }
  }

  private get currentScenario(): SupportScenario {
    return (
      SUPPORT_SCENARIOS.find((s) => s.id === this.selectedScenarioId) ??
      SUPPORT_SCENARIOS.at(0)!
    );
  }

  private serializeDataModel(model: {
    dataModel: { get: (path: string) => unknown };
  }): string {
    const rootData = model.dataModel.get('') ?? model.dataModel.get('/') ?? {};
    return JSON.stringify(rootData, null, 2);
  }

  private logEvent(message: string, detail?: unknown): void {
    const stamp = new Date().toLocaleTimeString();
    const extra =
      detail !== undefined ? `\n${JSON.stringify(detail, null, 2)}` : '';
    this.eventLogText = `[${stamp}] ${message}${extra}\n\n${this.eventLogText}`;
  }

  private handleClearLog(): void {
    this.eventLogText = 'Log cleared.';
  }

  private handleSelectSkin(skin: { id: string; label: string }): void {
    applySkin(skin.id);
    this.activeSkinId = skin.id;
    this.logEvent(`Applied skin: ${skin.label}`);
  }

  private handleScenarioChange(e: Event): void {
    const nextId = (e as CustomEvent<{ value?: string }>).detail?.value;
    if (nextId) {
      this.selectedScenarioId = nextId;
      void this.playScenario(this.currentScenario, 0);
    }
  }

  private handleDarkToggle(e: Event): void {
    const nextDark = Boolean(
      (e as CustomEvent<{ checked?: boolean }>).detail?.checked,
    );
    this.isDark = nextDark;
    applyTheme(nextDark);
    this.logEvent(`Theme mode: ${nextDark ? 'Dark' : 'Light'}`);
  }

  private handleRunFaceCheck(): void {
    if (!this.activeSurfaceEl) return;
    const valid = runSurfaceValidation(this.activeSurfaceEl, true);
    this.logEvent(
      valid
        ? 'Manual FACE Check: ALL VALID'
        : 'Manual FACE Check: INVALID FIELDS HIGHLIGHTED',
    );
  }

  private async playScenario(
    scenario: SupportScenario,
    delayMs = 0,
  ): Promise<void> {
    if (this.inspectorTimer !== null) {
      window.clearInterval(this.inspectorTimer);
    }

    const mount = this.querySelector('#surface-mount');
    if (!mount) return;
    mount.innerHTML = '';

    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
    const surfaceEl = new A2uiSurface();
    surfaceEl.setAttribute('data-surface-id', 'support_surface');
    mount.appendChild(surfaceEl);
    this.activeSurfaceEl = surfaceEl;

    surfaceEl.addEventListener('a2uiaction', (evt: Event) => {
      const detail = (evt as CustomEvent).detail;
      const isValid = runSurfaceValidation(surfaceEl, true);
      if (!isValid) {
        this.logEvent(
          'Blocked action: FACE validation failed on required fields',
        );
        return;
      }
      this.logEvent('FACE validation passed -> Dispatched A2UI Action', detail);
    });

    this.logEvent(`Streaming scenario: ${scenario.title}`);
    for await (const msg of createMockA2uiStream(scenario.messages, delayMs)) {
      processor.processMessages([msg as never]);
      const model = processor.model.getSurface('support_surface');
      if (model && surfaceEl.surface !== model) {
        surfaceEl.surface = model;
      }
      if (model) {
        this.dataModelJson = this.serializeDataModel(model);
      }
    }

    this.inspectorTimer = window.setInterval(() => {
      const model = processor.model.getSurface('support_surface');
      if (model) {
        this.dataModelJson = this.serializeDataModel(model);
      }
    }, 250);
  }

  override render() {
    const activeSkinLabel =
      SKINS.find((s) => s.id === this.activeSkinId)?.label ?? 'Default';

    return html`
      <div class="studio-shell">
        <header class="studio-header">
          <div class="studio-title-group">
            <h1>AgnosticUI × A2UI v1.0</h1>
            <p class="studio-subtitle">
              Same A2UI JSON payload • 21 runtime skins • FACE validation
            </p>
          </div>

          <div class="studio-controls">
            <ag-select
              label="A2UI v1.0 Stream Fixture"
              name="scenario"
              .value=${this.selectedScenarioId}
              @change=${this.handleScenarioChange}
            >
              ${SUPPORT_SCENARIOS.map(
                (s) => html`<option value=${s.id}>${s.title}</option>`,
              )}
            </ag-select>

            <ag-button
              variant="primary"
              size="sm"
              shape="rounded"
              @click=${() => void this.playScenario(this.currentScenario, 120)}
            >
              Replay Stream (120ms)
            </ag-button>

            <ag-button
              variant="secondary"
              size="sm"
              shape="rounded"
              bordered
              @click=${this.handleRunFaceCheck}
            >
              Run FACE Check
            </ag-button>

            <div class="theme-toggle-group">
              <span>Dark Mode</span>
              <ag-toggle
                label="Dark Mode"
                .checked=${this.isDark}
                @toggle-change=${this.handleDarkToggle}
              ></ag-toggle>
            </div>
          </div>
        </header>

        <div class="studio-workspace">
          <aside class="studio-sidebar">
            <div class="sidebar-header">
              <h2>Runtime Skin (21 Themes)</h2>
              <span class="active-skin-badge">${activeSkinLabel}</span>
            </div>

            <div class="skin-grid">
              ${SKINS.map((skin) => {
                const isSelected = skin.id === this.activeSkinId;
                return html`
                  <ag-button
                    size="sm"
                    shape="rounded"
                    full-width
                    variant="primary"
                    .bordered=${!isSelected}
                    @click=${() => this.handleSelectSkin(skin)}
                  >
                    <span class="skin-btn-inner">
                      <span
                        class="swatch"
                        style="background:${skin.swatch}"
                      ></span>
                      <span>${skin.label}</span>
                    </span>
                  </ag-button>
                `;
              })}
            </div>
          </aside>

          <main class="studio-stage">
            <div class="prompt-banner">
              <strong>Prompt:</strong> ${this.currentScenario.prompt}
            </div>
            <div id="surface-mount"></div>
          </main>

          <aside class="studio-inspector">
            <section class="inspector-panel">
              <div class="panel-header">
                <h3>Live A2UI DataModel (@path)</h3>
              </div>
              <pre class="json-viewer">${this.dataModelJson}</pre>
            </section>

            <section class="inspector-panel">
              <div class="panel-header">
                <h3>Action &amp; FACE Event Log</h3>
                <ag-icon-button
                  label="Clear event log"
                  size="sm"
                  variant="ghost"
                  @click=${this.handleClearLog}
                >
                  ${CLEAR_ICON}
                </ag-icon-button>
              </div>
              <pre class="event-log">${this.eventLogText}</pre>
            </section>
          </aside>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('ag-a2ui-studio')) {
  customElements.define('ag-a2ui-studio', AgA2uiStudio);
}
