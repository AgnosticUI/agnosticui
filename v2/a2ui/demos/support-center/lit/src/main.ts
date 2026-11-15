/**
 * @file main.ts
 * @description Declarative Lit studio (<ag-a2ui-studio>) showcasing AgnosticUI's
 * A2UI v1.0 catalog across 21+ runtime skins (including Invoca Brand), Light/Dark
 * modes, live @path DataModel inspection, FACE form validation, and Local vs.
 * Live Gemini 3.8 Flash prompt compilation.
 */

import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import '../../../../../skins/skins-bundle.css';
import '../../shared/studio.css';
import '../../shared/invoca-skin.css';

import { LitElement, html } from 'lit';
import { createElement, CircleSlash2 } from 'lucide';
import { MessageProcessor } from '@a2ui/web_core/v1_0';
import { A2uiSurface, type LitComponentApi } from '@a2ui/lit';
import {
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  runSurfaceValidation,
  createMockA2uiStream,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-lit';

import 'agnosticui-core/alert';
import 'agnosticui-core/button';
import 'agnosticui-core/icon-button';
import 'agnosticui-core/input';
import 'agnosticui-core/radio';
import 'agnosticui-core/select';
import 'agnosticui-core/toggle';

import {
  SKINS,
  applySkin,
  applyTheme,
  restorePrefs,
} from '../../../../../skins/skin-switcher-core.js';
import {
  buildActionConfirmationMessages,
  SUPPORT_SCENARIOS,
  type SupportScenario,
} from '../../shared/support-scenarios.js';
import {
  generateLiveA2uiSurface,
  generateLocalA2uiSurface,
  getGeminiSessionUsage,
  MAX_SESSION_CALLS,
} from '../../shared/live-gemini.js';

registerAgnosticUICatalog();
restorePrefs();

const STUDIO_SKINS = [
  { id: 'invoca', label: 'Invoca Brand', swatch: '#1d4ed8' },
  ...SKINS,
];

const CLEAR_ICON = createElement(CircleSlash2, {
  width: 16,
  height: 16,
  'aria-hidden': 'true',
});

const SESSION_KEY_STORAGE = 'ag-a2ui-gemini-key';

export class AgA2uiStudio extends LitElement {
  static override properties = {
    selectedScenarioId: { state: true },
    activeSkinId: { state: true },
    isDark: { state: true },
    dataModelJson: { state: true },
    eventLogText: { state: true },
    activePromptBanner: { state: true },
    compilerMode: { state: true },
    geminiApiKey: { state: true },
    livePromptText: { state: true },
    isGeneratingLive: { state: true },
    geminiCallsUsed: { state: true },
    liveErrorText: { state: true },
  };

  override createRenderRoot() {
    return this;
  }

  private declare selectedScenarioId: string;
  private declare activeSkinId: string;
  private declare isDark: boolean;
  private declare dataModelJson: string;
  private declare eventLogText: string;
  private declare activePromptBanner: string;
  private declare compilerMode: 'local' | 'live';
  private declare geminiApiKey: string;
  private declare livePromptText: string;
  private declare isGeneratingLive: boolean;
  private declare geminiCallsUsed: number;
  private declare liveErrorText: string;

  private activeSurfaceEl: A2uiSurface | null = null;
  private inspectorTimer: number | null = null;

  constructor() {
    super();
    const initial = SUPPORT_SCENARIOS.at(0)!;
    this.selectedScenarioId = initial.id;
    this.activePromptBanner = initial.prompt;
    this.activeSkinId = localStorage.getItem('ag-skin') ?? 'invoca';
    applySkin(this.activeSkinId);
    this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    this.dataModelJson = '{}';
    this.eventLogText = 'Ready.';
    this.compilerMode = 'local';
    this.geminiApiKey = sessionStorage.getItem(SESSION_KEY_STORAGE) ?? '';
    this.livePromptText =
      'Create a P1 webhook incident alert card with on-call acknowledgement button.';
    this.isGeneratingLive = false;
    this.geminiCallsUsed = getGeminiSessionUsage().used;
    this.liveErrorText = '';
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

  private handleCompilerModeChange(mode: 'local' | 'live'): void {
    this.compilerMode = mode;
    this.liveErrorText = '';
    this.logEvent(
      mode === 'local'
        ? 'Compiler mode: Local Deterministic (Offline)'
        : 'Compiler mode: Live Gemini 3.8 Flash',
    );
  }

  private readInputValue(selector: string, fallback: string): string {
    const host = this.querySelector(selector) as
      | (HTMLElement & { value?: string })
      | null;
    if (typeof host?.value === 'string' && host.value.length > 0) {
      return host.value;
    }
    const inner = host?.shadowRoot?.querySelector('input')?.value;
    if (typeof inner === 'string' && inner.length > 0) {
      return inner;
    }
    return fallback;
  }

  private handleApiKeyInput(e: Event): void {
    const val =
      (e as CustomEvent<{ value?: string }>).detail?.value ??
      (e.target as HTMLInputElement).value ??
      this.readInputValue('#gemini-key-input', '');
    this.geminiApiKey = val;
    sessionStorage.setItem(SESSION_KEY_STORAGE, val);
  }

  private handleLivePromptInput(e: Event): void {
    const val =
      (e as CustomEvent<{ value?: string }>).detail?.value ??
      (e.target as HTMLInputElement).value ??
      this.readInputValue('#live-prompt-input', '');
    this.livePromptText = val;
  }

  private async handleGeneratePrompt(): Promise<void> {
    if (this.isGeneratingLive) return;

    const resolvedPrompt = this.readInputValue(
      '#live-prompt-input',
      this.livePromptText,
    );
    this.livePromptText = resolvedPrompt;
    this.liveErrorText = '';
    this.isGeneratingLive = true;

    try {
      if (this.compilerMode === 'local') {
        const result = await generateLocalA2uiSurface(resolvedPrompt);
        this.activePromptBanner = `[Local Compiler • ${result.latencyMs}ms] ${resolvedPrompt}`;
        await this.renderWireMessages(
          result.messages,
          60,
          'Local A2UI v1.0 Compiler',
        );
        return;
      }

      const resolvedKey = this.readInputValue(
        '#gemini-key-input',
        this.geminiApiKey,
      );
      this.geminiApiKey = resolvedKey;
      if (resolvedKey) {
        sessionStorage.setItem(SESSION_KEY_STORAGE, resolvedKey);
      }

      this.logEvent('Calling Gemini 3.8 Flash for live A2UI v1.0 surface...');
      const result = await generateLiveA2uiSurface(resolvedKey, resolvedPrompt);
      this.geminiCallsUsed = result.callsUsed;
      this.activePromptBanner = `[Live Gemini • ${result.latencyMs}ms] ${resolvedPrompt}`;
      await this.renderWireMessages(
        result.messages,
        60,
        `Live Gemini (${result.callsUsed}/${result.maxCalls} quota)`,
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      this.liveErrorText = msg;
      this.geminiCallsUsed = getGeminiSessionUsage().used;
      this.logEvent(`Compiler error: ${msg}`);
    } finally {
      this.isGeneratingLive = false;
    }
  }

    private async playScenario(
    scenario: SupportScenario,
    delayMs = 0,
  ): Promise<void> {
    this.activePromptBanner = scenario.prompt;
    await this.renderWireMessages(scenario.messages, delayMs, scenario.title);
  }

  private async renderWireMessages(
    messages: A2uiWireMessage[],
    delayMs: number,
    streamLabel: string,
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

     processor.model.onAction.subscribe((action) => {
      const detail = action as unknown as Record<string, unknown>;
      const isValid = runSurfaceValidation(surfaceEl, true);
      if (!isValid) {
        this.logEvent(
          'Blocked action: FACE validation failed on required fields',
        );
        return;
      }
      this.logEvent('FACE validation passed -> Dispatched A2UI Action', detail);

      const confirmMsgs = buildActionConfirmationMessages(messages, detail);
      for (const cMsg of confirmMsgs) {
        processor.processMessages([cMsg as never]);
      }
      const nextModel = processor.model.getSurface('support_surface');
      if (nextModel) {
        surfaceEl.surface = nextModel;
        surfaceEl.requestUpdate();
        this.dataModelJson = this.serializeDataModel(nextModel);
      }
    });

    this.logEvent(`Streaming surface: ${streamLabel}`);
    for await (const msg of createMockA2uiStream(messages, delayMs)) {
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
      STUDIO_SKINS.find((s) => s.id === this.activeSkinId)?.label ?? 'Invoca Brand';
    const isLocal = this.compilerMode === 'local';

    return html`
      <div class="studio-shell">
        <header class="studio-header">
          <div class="studio-title-group">
            <h1>AgnosticUI × A2UI v1.0</h1>
            <p class="studio-subtitle">
              Same A2UI JSON payload • 21+ runtime skins • FACE validation
            </p>
          </div>

          <div class="studio-controls">
            <ag-select
              label="Offline A2UI Fixture"
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
              <h2>Runtime Skin (22 Themes)</h2>
              <span class="active-skin-badge">${activeSkinLabel}</span>
            </div>

            <div class="skin-grid">
              ${STUDIO_SKINS.map((skin) => {
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
            <div class="live-prompt-card">
              <div class="live-prompt-top">
                <span class="live-prompt-title">
                  Prompt-to-A2UI Surface Compiler
                </span>

                <div class="compiler-mode-radios">
                  <ag-radio
                    name="compiler-mode"
                    value="local"
                    labelText="Local UI (Instant)"
                    .checked=${isLocal}
                    @change=${() => this.handleCompilerModeChange('local')}
                  ></ag-radio>

                  <ag-radio
                    name="compiler-mode"
                    value="live"
                    labelText="Live Gemini (${this.geminiCallsUsed}/${MAX_SESSION_CALLS})"
                    .checked=${!isLocal}
                    @change=${() => this.handleCompilerModeChange('live')}
                  ></ag-radio>
                </div>
              </div>

              <div class="live-prompt-bar ${isLocal ? 'is-local' : ''}">
                ${isLocal
                  ? ''
                  : html`
                      <ag-input
                        id="gemini-key-input"
                        label="AI Studio Key (Session Only)"
                        type="password"
                        placeholder="AQ... or AIza..."
                        .value=${this.geminiApiKey}
                        @input=${this.handleApiKeyInput}
                        @change=${this.handleApiKeyInput}
                      ></ag-input>
                    `}

                <ag-input
                  id="live-prompt-input"
                  label=${isLocal
                    ? 'Prompt (Compiled Locally to A2UI v1.0)'
                    : 'Prompt (Compiled via Gemini 3.8 Flash)'}
                  placeholder="Describe a support form or incident alert card..."
                  .value=${this.livePromptText}
                  @input=${this.handleLivePromptInput}
                  @change=${this.handleLivePromptInput}
                ></ag-input>

                <ag-button
                  variant="primary"
                  size="md"
                  shape="rounded"
                  .disabled=${this.isGeneratingLive}
                  @click=${() => void this.handleGeneratePrompt()}
                >
                  ${this.isGeneratingLive
                    ? 'Compiling...'
                    : isLocal
                      ? 'Generate Local UI'
                      : 'Generate Live UI'}
                </ag-button>
              </div>
            </div>

            ${this.liveErrorText
              ? html`<ag-alert variant="danger" borderedLeft>
                  ${this.liveErrorText}
                </ag-alert>`
              : ''}

            <div class="prompt-banner">
              <strong>Active Prompt:</strong> ${this.activePromptBanner}
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
