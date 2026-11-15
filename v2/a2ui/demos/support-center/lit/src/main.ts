/**
 * @file main.ts
 * @description Declarative Lit studio (<ag-a2ui-studio>) showcasing AgnosticUI's
 * A2UI v1.0 catalog across 22 runtime skins (including Evergreen), Light/Dark
 * modes, live @path DataModel inspection, FACE form validation, and Local vs.
 * Live Gemini 3.8 Flash prompt compilation.
 */

import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import '../../../../../skins/skins-bundle.css';
import '../../shared/studio.css';
import '../../shared/evergreen-skin.css';

import { LitElement, html } from 'lit';
import { createElement, CircleSlash2, Code2, Moon, Sun } from 'lucide';
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
import 'agnosticui-core/toggle';

import {
  SKINS,
  applySkin,
  applyTheme,
  restorePrefs,
} from '../../../../../skins/skin-switcher-core.js';
import {
  EMPTY_STATE_SURFACE_MESSAGES,
  QUICK_PROMPT_CHIPS,
  buildActionConfirmationMessages,
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
  { id: 'evergreen', label: 'Evergreen', swatch: '#00a87f' },
  ...SKINS,
];

const CLEAR_ICON = createElement(CircleSlash2, {
  width: 15,
  height: 15,
  'aria-hidden': 'true',
});

const INSPECTOR_ICON = createElement(Code2, {
  width: 15,
  height: 15,
  'aria-hidden': 'true',
});

const MOON_ICON = createElement(Moon, {
  width: 15,
  height: 15,
  'aria-hidden': 'true',
});

const SUN_ICON = createElement(Sun, {
  width: 15,
  height: 15,
  'aria-hidden': 'true',
});

const SESSION_KEY_STORAGE = 'ag-a2ui-gemini-key';

export class AgA2uiStudio extends LitElement {
  static override properties = {
    activeSkinId: { state: true },
    isDark: { state: true },
    inspectorOpen: { state: true },
    actionCount: { state: true },
    dataModelJson: { state: true },
    eventLogText: { state: true },
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

  private declare activeSkinId: string;
  private declare isDark: boolean;
  private declare inspectorOpen: boolean;
  private declare actionCount: number;
  private declare dataModelJson: string;
  private declare eventLogText: string;
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
    this.activeSkinId = localStorage.getItem('ag-skin') ?? 'evergreen';
    applySkin(this.activeSkinId);
    this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    this.inspectorOpen = false;
    this.actionCount = 0;
    this.dataModelJson = '{}';
    this.eventLogText = 'Ready.';
    this.compilerMode = 'local';
    this.geminiApiKey = sessionStorage.getItem(SESSION_KEY_STORAGE) ?? '';
    this.livePromptText = QUICK_PROMPT_CHIPS[0].prompt;
    this.isGeneratingLive = false;
    this.geminiCallsUsed = getGeminiSessionUsage().used;
    this.liveErrorText = '';
  }
  override firstUpdated(): void {
    void this.renderWireMessages(
      EMPTY_STATE_SURFACE_MESSAGES,
      0,
      'Idle Empty State',
    );
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.inspectorTimer !== null) {
      window.clearInterval(this.inspectorTimer);
    }
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
    this.actionCount = 0;
    this.eventLogText = 'Log cleared.';
  }

  private handleSelectSkin(skin: { id: string; label: string }): void {
    applySkin(skin.id);
    this.activeSkinId = skin.id;
    this.logEvent(`Applied skin: ${skin.label}`);
  }

  private handleDarkToggle(e: Event): void {
    const nextDark = Boolean(
      (e as CustomEvent<{ checked?: boolean }>).detail?.checked,
    );
    this.isDark = nextDark;
    applyTheme(nextDark);
    this.logEvent(`Theme mode: ${nextDark ? 'Dark' : 'Light'}`);
  }

  private handleSelectChip(prompt: string): void {
    this.livePromptText = prompt;
    void this.handleGeneratePrompt(prompt);
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

  private async handleGeneratePrompt(overridePrompt?: string): Promise<void> {
    if (this.isGeneratingLive) return;

    const resolvedPrompt =
      overridePrompt ??
      this.readInputValue('#live-prompt-input', this.livePromptText);
    this.livePromptText = resolvedPrompt;
    this.liveErrorText = '';
    this.isGeneratingLive = true;

    try {
      if (this.compilerMode === 'local') {
        const result = await generateLocalA2uiSurface(resolvedPrompt);
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
      this.actionCount += 1;
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
      STUDIO_SKINS.find((s) => s.id === this.activeSkinId)?.label ?? 'Evergreen';
    const isLocal = this.compilerMode === 'local';

    return html`
      <div class="studio-shell">
        <header class="studio-header">
          <div class="studio-title-group">
            <h1>Ag × A2UI</h1>
            <span class="protocol-pill">v1.0 Spec</span>
          </div>

          <div class="studio-controls">
            <ag-button
              size="sm"
              shape="rounded"
              variant="secondary"
              .bordered=${!this.inspectorOpen}
              @click=${() => {
                this.inspectorOpen = !this.inspectorOpen;
              }}
            >
              <span class="inspector-toggle-inner">
                ${INSPECTOR_ICON}
                <span>Inspector</span>
                ${this.actionCount > 0
                  ? html`<span class="inspector-count-dot"
                      >${this.actionCount}</span
                    >`
                  : ''}
              </span>
            </ag-button>

            <div class="theme-toggle-group">
              ${this.isDark ? MOON_ICON : SUN_ICON}
              <ag-toggle
                label="Dark Mode"
                label-hidden
                title="Toggle Dark Mode"
                .checked=${this.isDark}
                @toggle-change=${this.handleDarkToggle}
              ></ag-toggle>
            </div>
          </div>
        </header>

        <div
          class="studio-workspace ${this.inspectorOpen ? 'has-inspector' : ''}"
        >
          <aside class="studio-sidebar">
            <div class="sidebar-header">
              <h2>Runtime Skin</h2>
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
            <div class="stage-container">
              <div class="live-prompt-card">
                <div class="live-prompt-top">
                  <span class="live-prompt-title">
                    Agent Prompt Composer
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
                    label="Describe the agent workflow or support UI"
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
                    ${this.isGeneratingLive ? 'Compiling...' : 'Generate UI'}
                  </ag-button>
                </div>

                <div class="prompt-chips-row">
                  <span class="prompt-chips-label">Try:</span>
                  ${QUICK_PROMPT_CHIPS.map(
                    (chip) => html`
                      <button
                        type="button"
                        class="prompt-chip"
                        @click=${() => this.handleSelectChip(chip.prompt)}
                      >
                        ${chip.label}
                      </button>
                    `,
                  )}
                </div>
              </div>

              ${this.liveErrorText
                ? html`<ag-alert variant="danger" borderedLeft>
                    ${this.liveErrorText}
                  </ag-alert>`
                : ''}

              <div id="surface-mount"></div>
            </div>
          </main>

          ${this.inspectorOpen
            ? html`
                <aside class="studio-inspector">
                  <section class="inspector-panel">
                    <div class="panel-header">
                      <h3>Live DataModel (@path)</h3>
                    </div>
                    <pre class="json-viewer">${this.dataModelJson}</pre>
                  </section>

                  <section class="inspector-panel">
                    <div class="panel-header">
                      <h3>Action &amp; FACE Log</h3>
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
              `
            : ''}
        </div>
      </div>
    `;
  }
}

if (!customElements.get('ag-a2ui-studio')) {
  customElements.define('ag-a2ui-studio', AgA2uiStudio);
}
