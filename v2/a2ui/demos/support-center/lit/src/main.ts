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
import {
  createElement,
  Check,
  CircleSlash2,
  Code2,
  Copy,
  Moon,
  RotateCcw,
  Sun,
} from 'lucide';
import { MessageProcessor } from '@a2ui/web_core/v1_0';
import { A2uiSurface, type LitComponentApi } from '@a2ui/lit';
import {
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  runSurfaceValidation,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-lit';

import 'agnosticui-core/alert';
import 'agnosticui-core/button';
import 'agnosticui-core/icon-button';
import 'agnosticui-core/input';
import 'agnosticui-core/kbd';
import 'agnosticui-core/radio';
import 'agnosticui-core/skeleton-loader';
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
} from '../../shared/support-scenarios.js';
import { advanceAgentRoundTrip } from '../../shared/agent-roundtrip.js';
import {
  generateLiveA2uiSurface,
  generateLocalA2uiSurface,
  getGeminiSessionUsage,
  MAX_SESSION_CALLS,
} from '../../shared/live-gemini.js';

import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  expandToGranularStream,
  playProgressiveA2uiStream,
  type StreamPhase,
  type StreamPlaybackHandle,
} from '../../shared/stream-player.js';
import {
  diffDataModelSnapshots,
  renderHighlightedJsonHtml,
} from '../../shared/data-model-diff.js';

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

const COPY_ICON = createElement(Copy, {
  width: 14,
  height: 14,
  'aria-hidden': 'true',
});

const CHECK_ICON = createElement(Check, {
  width: 14,
  height: 14,
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

const REPLAY_ICON = createElement(RotateCcw, {
  width: 13,
  height: 13,
  'aria-hidden': 'true',
});

const SESSION_KEY_STORAGE = 'ag-a2ui-gemini-key';

export class AgA2uiStudio extends LitElement {
  static override properties = {
    activeSkinId: { state: true },
    isDark: { state: true },
    inspectorOpen: { state: true },
    actionCount: { state: true },
    dataModelHtml: { state: true },
    changedPathCount: { state: true },
    copiedJsonl: { state: true },
    streamPhase: { state: true },
    streamProgress: { state: true },
    playbackSpeed: { state: true },
    hasReplayableStream: { state: true },
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
  private declare dataModelHtml: string;
  private declare changedPathCount: number;
  private declare copiedJsonl: boolean;
  private declare streamPhase: StreamPhase;
  private declare streamProgress: { current: number; total: number };
  private declare playbackSpeed: '1x' | '0.5x';
  private declare hasReplayableStream: boolean;
  private declare eventLogText: string;
  private declare compilerMode: 'local' | 'live';
  private declare geminiApiKey: string;
  private declare livePromptText: string;
  private declare isGeneratingLive: boolean;
  private declare geminiCallsUsed: number;
  private declare liveErrorText: string;

  private activeSurfaceEl: A2uiSurface | null = null;
  private inspectorTimer: number | null = null;
  private activeStreamHandle: StreamPlaybackHandle | null = null;
  private streamGeneration = 0;
  private lastDataSnapshot: unknown = {};
  private lastSerializedSnapshot = '{}';
  private lastPlayedMessages: A2uiWireMessage[] | null = null;
  private appliedSurfaceMessages: A2uiWireMessage[] | null = null;
  private lastPlayedLabel = '';

  constructor() {
    super();
    this.activeSkinId = localStorage.getItem('ag-skin') ?? 'evergreen';
    applySkin(this.activeSkinId);
    this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    this.inspectorOpen = false;
    this.actionCount = 0;
    this.dataModelHtml = renderHighlightedJsonHtml({}, new Map());
    this.changedPathCount = 0;
    this.copiedJsonl = false;
    this.streamPhase = 'complete';
    this.streamProgress = { current: 0, total: 0 };
    this.playbackSpeed = '1x';
    this.hasReplayableStream = false;
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
      'Idle Empty State',
      true,
    );
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.streamGeneration += 1;
    this.activeStreamHandle?.cancel();
    this.activeStreamHandle = null;
    if (this.inspectorTimer !== null) {
      window.clearInterval(this.inspectorTimer);
      this.inspectorTimer = null;
    }
  }

  private syncDataModelInspector(
    model: { dataModel: { get: (path: string) => unknown } },
    resetBaseline = false,
  ): void {
    const rawData = model.dataModel.get('') ?? model.dataModel.get('/') ?? {};
    const serialized = JSON.stringify(rawData);

    if (!resetBaseline && serialized === this.lastSerializedSnapshot) {
      return;
    }

    const nextSnapshot: unknown = JSON.parse(serialized);
    const changes = resetBaseline
      ? new Map()
      : diffDataModelSnapshots(this.lastDataSnapshot, nextSnapshot);

    this.lastDataSnapshot = nextSnapshot;
    this.lastSerializedSnapshot = serialized;
    this.changedPathCount = changes.size;
    this.dataModelHtml = renderHighlightedJsonHtml(nextSnapshot, changes);
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

  private async handleCopyJsonl(): Promise<void> {
    const sourceMessages: readonly A2uiWireMessage[] =
      this.appliedSurfaceMessages ?? EMPTY_STATE_SURFACE_MESSAGES;
    const granularFrames = expandToGranularStream(sourceMessages);
    const jsonl = granularFrames
      .map((msg: A2uiWireMessage) => JSON.stringify(msg))
      .join('\n');
    try {
      await navigator.clipboard.writeText(jsonl);
      this.copiedJsonl = true;
      this.logEvent(
        `Copied ${granularFrames.length} granular A2UI v1.0 JSONL frames to clipboard.`,
      );
      window.setTimeout(() => {
        this.copiedJsonl = false;
      }, 1800);
    } catch {
      this.logEvent('Clipboard write blocked by browser permissions.');
    }
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

  private handleTogglePlaybackSpeed(): void {
    this.playbackSpeed = this.playbackSpeed === '1x' ? '0.5x' : '1x';
    this.logEvent(
      `Stream pacing set to ${this.playbackSpeed === '0.5x' ? '0.5x Slow-Mo (Demo)' : '1x Standard'}`,
    );
    if (this.lastPlayedMessages) {
      void this.renderWireMessages(
        this.lastPlayedMessages,
        this.lastPlayedLabel,
        false,
      );
    }
  }

  private handleReplayStream(): void {
    if (!this.lastPlayedMessages) return;
    this.logEvent(`Replaying stream (${this.playbackSpeed})...`);
    void this.renderWireMessages(
      this.lastPlayedMessages,
      this.lastPlayedLabel,
      false,
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

  private handlePromptKeyDown(e: KeyboardEvent): void {
    if (e.isComposing) return;
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      void this.handleGeneratePrompt();
    }
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
        'Live Gemini (' + result.callsUsed + '/' + result.maxCalls + ' quota)',
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
    streamLabel: string,
    instant = false,
  ): Promise<void> {
    this.appliedSurfaceMessages = [...messages];
    if (!instant) {
      this.lastPlayedMessages = messages;
      this.lastPlayedLabel = streamLabel;
      this.hasReplayableStream = true;
    }

    const generation = ++this.streamGeneration;
    this.activeStreamHandle?.cancel();
    this.activeStreamHandle = null;
    if (this.inspectorTimer !== null) {
      window.clearInterval(this.inspectorTimer);
      this.inspectorTimer = null;
    }

    const mount = this.querySelector('#surface-mount');
    if (!mount) return;
    mount.innerHTML = '';

    this.lastDataSnapshot = {};
    this.lastSerializedSnapshot = '{}';
    this.changedPathCount = 0;
    this.dataModelHtml = renderHighlightedJsonHtml({}, new Map());

    const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
    const surfaceEl = new A2uiSurface();
    surfaceEl.setAttribute('data-surface-id', 'support_surface');
    mount.appendChild(surfaceEl);
    this.activeSurfaceEl = surfaceEl;

    processor.model.onAction.subscribe((action) => {
      if (
        generation !== this.streamGeneration ||
        this.streamPhase !== 'complete'
      ) {
        return;
      }

      const detail = action as unknown as Record<string, unknown>;
      const outcome = advanceAgentRoundTrip(messages, detail);

      if (outcome.kind === 'reset') {
        this.appliedSurfaceMessages = [...messages];
        this.logEvent('Agent round-trip reset -> Restored Turn 1 surface');
        void this.renderWireMessages(messages, streamLabel, true);
        return;
      }

      if (outcome.kind === 'rejected') {
        for (const nextMsg of outcome.messages) {
          processor.processMessages([nextMsg as never]);
        }
        runSurfaceValidation(surfaceEl, true);
        this.logEvent(
          'Blocked action: Approver email is required before publishing SLA policy',
        );
        return;
      }

      const isValid = runSurfaceValidation(surfaceEl, true);
      if (!isValid) {
        this.logEvent(
          'Blocked action: FACE validation failed on required fields',
        );
        return;
      }

      this.actionCount += 1;
      this.appliedSurfaceMessages = [
        ...(this.appliedSurfaceMessages ?? messages),
        ...outcome.messages,
      ];
      this.logEvent(
        'FACE validation passed -> Turn ' +
          outcome.turn +
          ' (' +
          outcome.actionName +
          ')',
        detail,
      );

      for (const nextMsg of outcome.messages) {
        processor.processMessages([nextMsg as never]);
      }
      const nextModel = processor.model.getSurface('support_surface');
      if (nextModel) {
        surfaceEl.surface = nextModel;
        surfaceEl.requestUpdate();
        this.syncDataModelInspector(nextModel);
      }
    });
    const speedMultiplier = this.playbackSpeed === '0.5x' ? 2.4 : 1;
    this.logEvent(
      `Streaming surface: ${streamLabel}${instant ? '' : ` (${this.playbackSpeed})`}`,
    );
    this.streamProgress = { current: 0, total: 0 };

    const handle = playProgressiveA2uiStream(
      messages,
      {
        onPhaseChange: (phase) => {
          if (generation === this.streamGeneration) {
            this.streamPhase = phase;
          }
        },
        onMessage: (msg, idx, total) => {
          if (generation !== this.streamGeneration) return;
          this.streamProgress = { current: idx + 1, total };
          processor.processMessages([msg as never]);
          const model = processor.model.getSurface('support_surface');
          if (model && surfaceEl.surface !== model) {
            surfaceEl.surface = model;
          }
          if (model) {
            this.syncDataModelInspector(model);
          }
        },
      },
      instant
        ? { skeletonDelayMs: 0, typingDelayMs: 0, chunkDelayMs: 0, verbose: false }
        : {
            skeletonDelayMs: Math.round(160 * speedMultiplier),
            typingDelayMs: Math.round(240 * speedMultiplier),
            chunkDelayMs: Math.round(105 * speedMultiplier),
            verbose: false,
          },
    );

    this.activeStreamHandle = handle;
    const completed = await handle.finished;

    if (
      !completed ||
      generation !== this.streamGeneration ||
      !this.isConnected
    ) {
      return;
    }

    this.inspectorTimer = window.setInterval(() => {
      if (generation !== this.streamGeneration || !this.isConnected) {
        if (this.inspectorTimer !== null) {
          window.clearInterval(this.inspectorTimer);
          this.inspectorTimer = null;
        }
        return;
      }
      const model = processor.model.getSurface('support_surface');
      if (model) {
        this.syncDataModelInspector(model);
      }
    }, 250);
  }

  private renderStreamFeedback() {
    if (this.streamPhase === 'skeleton') {
      return html`
        <div class="a2ui-stream-skeleton" aria-live="polite">
          <ag-skeleton-loader
            variant="rounded"
            width="42%"
            height="1rem"
          ></ag-skeleton-loader>
          <ag-skeleton-loader
            variant="text"
            width="74%"
            height="1rem"
          ></ag-skeleton-loader>
          <ag-skeleton-loader
            variant="rounded"
            width="100%"
            height="2.75rem"
          ></ag-skeleton-loader>
        </div>
      `;
    }

    if (this.streamPhase === 'typing') {
      return html`
        <div class="a2ui-agent-typing" aria-live="polite">
          <span class="a2ui-typing-dots" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
          <span>Agent is composing A2UI v1.0 surface...</span>
        </div>
      `;
    }

    if (this.streamPhase === 'streaming' && this.streamProgress.total > 0) {
      return html`
        <div class="a2ui-stream-status-bar" aria-live="polite">
          Streaming frame ${this.streamProgress.current}/${this.streamProgress.total}...
        </div>
      `;
    }

    return '';
  }

  override render() {
    const activeSkinLabel =
      STUDIO_SKINS.find((s) => s.id === this.activeSkinId)?.label ?? 'Evergreen';
    const isLocal = this.compilerMode === 'local';
    const workspaceClass = this.inspectorOpen
      ? 'studio-workspace has-inspector'
      : 'studio-workspace';
    const promptBarClass = isLocal
      ? 'live-prompt-bar is-local'
      : 'live-prompt-bar';
    const slowMoClass =
      this.playbackSpeed === '0.5x' ? 'pacing-pill is-slowmo' : 'pacing-pill';
    return html`
      <div class="studio-shell">
        <header class="studio-header">
          <div class="studio-title-group">
            <h1>Ag &times; A2UI</h1>
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

        <div class=${workspaceClass}>
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

                  <div class="composer-right-controls">
                    <div class="stream-pacing-group">
                      <button
                        type="button"
                        class=${slowMoClass}
                        title="Toggle between 1x standard and 0.5x slow-motion demo streaming"
                        @click=${() => this.handleTogglePlaybackSpeed()}
                      >
                        ${this.playbackSpeed === '0.5x' ? '0.5x Slow-Mo' : '1x Stream'}
                      </button>

                      ${this.hasReplayableStream
                        ? html`
                            <button
                              type="button"
                              class="pacing-pill"
                              title="Replay the current A2UI v1.0 stream"
                              @click=${() => this.handleReplayStream()}
                            >
                              ${REPLAY_ICON}
                              <span>Replay</span>
                            </button>
                          `
                        : ''}
                    </div>

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
                </div>

                <div class=${promptBarClass}>
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
                    @keydown=${this.handlePromptKeyDown}
                  ></ag-input>

                  <ag-button
                    variant="primary"
                    size="md"
                    shape="rounded"
                    .disabled=${this.isGeneratingLive}
                    @click=${() => void this.handleGeneratePrompt()}
                  >
                    <span class="generate-btn-inner">
                      <span>${this.isGeneratingLive ? 'Compiling...' : 'Generate UI'}</span>
                      <ag-kbd size="sm">&#8984; Enter</ag-kbd>
                    </span>
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
              ${this.renderStreamFeedback()}
              <div id="surface-mount"></div>
            </div>
          </main>

          ${this.inspectorOpen
            ? html`
                <aside class="studio-inspector">
                  <section class="inspector-panel">
                    <div class="panel-header">
                      <h3>Live DataModel (@path)</h3>
                      <ag-icon-button
                        label=${this.copiedJsonl ? 'Copied JSONL' : 'Copy A2UI JSONL payload'}
                        title=${this.copiedJsonl ? 'Copied JSONL!' : 'Copy A2UI v1.0 JSONL payload'}
                        size="sm"
                        variant="ghost"
                        @click=${() => void this.handleCopyJsonl()}
                      >
                        ${this.copiedJsonl ? CHECK_ICON : COPY_ICON}
                      </ag-icon-button>
                    </div>
                    <pre class="json-viewer">${unsafeHTML(this.dataModelHtml)}</pre>
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
