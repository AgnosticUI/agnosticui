/**
 * @file main.tsx
 * @description React 19 Support Center Studio showcasing @agnosticui/a2ui-react
 * (<AgA2uiSurface> + useA2uiSurface) with AgnosticUI's A2UI v1.0 catalog across
 * 29 runtime skins, Light/Dark modes, progressive JSONL
 * component streaming, live @path DataModel diff highlighting, FACE validation,
 * and Local vs. Live Gemini 3.8 Flash prompt compilation.
 */

import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import '../../../../../skins/skins-bundle.css';
import '../../shared/studio.css';

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { CircleSlash2, Code2, Moon, Sun } from 'lucide-react';
import {
  AgA2uiSurface,
  runSurfaceValidation,
  useA2uiSurface,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-react';
import { ReactAlert } from 'agnosticui-core/alert/react';
import { ReactButton } from 'agnosticui-core/button/react';
import { ReactIconButton } from 'agnosticui-core/icon-button/react';
import { ReactInput } from 'agnosticui-core/input/react';
import { ReactRadio } from 'agnosticui-core/radio/react';
import { ReactToggle } from 'agnosticui-core/toggle/react';

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
import {
  playProgressiveA2uiStream,
  type StreamPhase,
  type StreamPlaybackHandle,
} from '../../shared/stream-player.js';
import {
  diffDataModelSnapshots,
  renderHighlightedJsonHtml,
} from '../../shared/data-model-diff.js';

restorePrefs();

const STUDIO_SKINS = SKINS;

const SESSION_KEY_STORAGE = 'ag-a2ui-gemini-key';

function App() {
  const [activeSkinId, setActiveSkinId] = React.useState<string>(() => {
    const initialSkin = localStorage.getItem('ag-skin') ?? 'evergreen';
    applySkin(initialSkin);
    return initialSkin;
  });

  const [isDark, setIsDark] = React.useState<boolean>(
    () => document.documentElement.getAttribute('data-theme') === 'dark',
  );
  const [inspectorOpen, setInspectorOpen] = React.useState(false);
  const [actionCount, setActionCount] = React.useState(0);
  const [dataModelHtml, setDataModelHtml] = React.useState<string>(() =>
    renderHighlightedJsonHtml({}, new Map()),
  );
  const [changedPathCount, setChangedPathCount] = React.useState(0);
  const [streamPhase, setStreamPhase] = React.useState<StreamPhase>('complete');
  const [streamProgress, setStreamProgress] = React.useState({
    current: 0,
    total: 0,
  });
  const [eventLogText, setEventLogText] = React.useState('Ready.');
  const [compilerMode, setCompilerMode] = React.useState<'local' | 'live'>(
    'local',
  );
  const [geminiApiKey, setGeminiApiKey] = React.useState<string>(
    () => sessionStorage.getItem(SESSION_KEY_STORAGE) ?? '',
  );
  const [livePromptText, setLivePromptText] = React.useState<string>(
    () => QUICK_PROMPT_CHIPS[0].prompt,
  );
  const [isGeneratingLive, setIsGeneratingLive] = React.useState(false);
  const [geminiCallsUsed, setGeminiCallsUsed] = React.useState<number>(
    () => getGeminiSessionUsage().used,
  );
  const [liveErrorText, setLiveErrorText] = React.useState('');

  const activeMessagesRef = React.useRef<A2uiWireMessage[]>(
    EMPTY_STATE_SURFACE_MESSAGES,
  );
  const activeStreamRef = React.useRef<StreamPlaybackHandle | null>(null);
  const streamPhaseRef = React.useRef<StreamPhase>('complete');
  const lastSnapshotRef = React.useRef<unknown>({});
  const lastSerializedRef = React.useRef<string>('{}');

  const syncDataModelInspector = React.useCallback(
    (rawData: unknown, resetBaseline = false) => {
      const normalized = rawData ?? {};
      const serialized = JSON.stringify(normalized);
      if (!resetBaseline && serialized === lastSerializedRef.current) {
        return;
      }

      const nextSnapshot: unknown = JSON.parse(serialized);
      const changes = resetBaseline
        ? new Map()
        : diffDataModelSnapshots(lastSnapshotRef.current, nextSnapshot);

      lastSnapshotRef.current = nextSnapshot;
      lastSerializedRef.current = serialized;
      setChangedPathCount(changes.size);
      setDataModelHtml(renderHighlightedJsonHtml(nextSnapshot, changes));
    },
    [],
  );

  const logEvent = React.useCallback((message: string, detail?: unknown) => {
    const stamp = new Date().toLocaleTimeString();
    const extra =
      detail !== undefined ? '\n' + JSON.stringify(detail, null, 2) : '';
    setEventLogText(
      (prev) => '[' + stamp + '] ' + message + extra + '\n\n' + prev,
    );
  }, []);

  const surfaceApiRef = React.useRef<{
    processMessages: (msgs: A2uiWireMessage[]) => void;
    getDataModel: () => unknown;
    getSurfaceEl: () => HTMLElement | null;
  } | null>(null);

  const runStreamRef = React.useRef<
    ((msgs: A2uiWireMessage[], label: string, instant?: boolean) => Promise<void>) | null
  >(null);

  const handleSurfaceAction = React.useCallback(
    (detail: Record<string, unknown>) => {
      if (streamPhaseRef.current !== 'complete') {
        return;
      }

      const outcome = advanceAgentRoundTrip(activeMessagesRef.current, detail);

      if (outcome.kind === 'reset') {
        logEvent('Agent round-trip reset -> Restored Turn 1 surface');
        void runStreamRef.current?.(
          activeMessagesRef.current,
          'Turn 1 Surface (Reset)',
          true,
        );
        return;
      }

      const hostEl = surfaceApiRef.current?.getSurfaceEl() ?? null;

      if (outcome.kind === 'rejected') {
        surfaceApiRef.current?.processMessages(outcome.messages);
        if (hostEl) runSurfaceValidation(hostEl, true);
        logEvent('Blocked action: ' + outcome.reason);
        return;
      }

      if (outcome.kind === 'update_surface') {
        logEvent('Queue view updated (' + outcome.actionName + ')', detail);
        surfaceApiRef.current?.processMessages(outcome.messages);
        syncDataModelInspector(surfaceApiRef.current?.getDataModel() ?? {});
        return;
      }

      if (hostEl && !runSurfaceValidation(hostEl, true)) {
        logEvent('Blocked action: FACE validation failed on required fields');
        return;
      }

      setActionCount((c) => c + 1);
      logEvent(
        'FACE validation passed -> Turn ' +
          outcome.turn +
          ' (' +
          outcome.actionName +
          ')',
        detail,
      );

      surfaceApiRef.current?.processMessages(outcome.messages);
      const nextData = surfaceApiRef.current?.getDataModel() ?? {};
      syncDataModelInspector(nextData);
    },
    [logEvent, syncDataModelInspector],
  );

  const {
    surface,
    surfaceRef,
    processMessages,
    resetSurface,
    getDataModel,
  } = useA2uiSurface({
    surfaceId: 'support_surface',
    onAction: handleSurfaceAction,
    validateOnAction: false,
  });

  surfaceApiRef.current = {
    processMessages,
    getDataModel,
    getSurfaceEl: () => surfaceRef.current as HTMLElement | null,
  };

  const runStream = React.useCallback(
    async (
      messages: A2uiWireMessage[],
      streamLabel: string,
      instant = false,
    ) => {
      activeStreamRef.current?.cancel();
      activeMessagesRef.current = messages;
      resetSurface();
      syncDataModelInspector({}, true);
      setStreamProgress({ current: 0, total: 0 });
      logEvent('Streaming surface: ' + streamLabel);

      const handle = playProgressiveA2uiStream(
        messages,
        {
          onPhaseChange: (phase) => {
            streamPhaseRef.current = phase;
            setStreamPhase(phase);
          },
          onMessage: (msg, idx, total) => {
            setStreamProgress({ current: idx + 1, total });
            processMessages([msg]);
            syncDataModelInspector(getDataModel());
          },
        },
        instant
          ? { skeletonDelayMs: 0, typingDelayMs: 0, chunkDelayMs: 0, verbose: false }
          : { skeletonDelayMs: 140, typingDelayMs: 220, chunkDelayMs: 95, verbose: false },
      );

      activeStreamRef.current = handle;
      await handle.finished;
      syncDataModelInspector(getDataModel());
    },
    [
      resetSurface,
      processMessages,
      getDataModel,
      logEvent,
      syncDataModelInspector,
    ],
  );

  runStreamRef.current = runStream;
  React.useEffect(() => {
    void runStream(EMPTY_STATE_SURFACE_MESSAGES, 'Idle Empty State', true);
    return () => {
      activeStreamRef.current?.cancel();
    };
  }, [runStream]);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      syncDataModelInspector(getDataModel());
    }, 250);
    return () => window.clearInterval(timer);
  }, [getDataModel, syncDataModelInspector]);

  const handleSelectSkin = (skin: { id: string; label: string }) => {
    applySkin(skin.id);
    setActiveSkinId(skin.id);
    logEvent('Applied skin: ' + skin.label);
  };

  const handleDarkToggle = (e: CustomEvent<{ checked: boolean }>) => {
    const nextDark = Boolean(e.detail?.checked);
    setIsDark(nextDark);
    applyTheme(nextDark);
    logEvent('Theme mode: ' + (nextDark ? 'Dark' : 'Light'));
  };

  const handleGeneratePrompt = async (overridePrompt?: string) => {
    if (isGeneratingLive) return;

    const resolvedPrompt = (overridePrompt ?? livePromptText).trim();
    setLivePromptText(resolvedPrompt);
    setLiveErrorText('');
    setIsGeneratingLive(true);

    try {
      if (compilerMode === 'local') {
        const result = await generateLocalA2uiSurface(resolvedPrompt);
        await runStream(result.messages, 'Local A2UI v1.0 Compiler');
        return;
      }

      if (geminiApiKey) {
        sessionStorage.setItem(SESSION_KEY_STORAGE, geminiApiKey);
      }
      logEvent('Calling Gemini 3.8 Flash for live A2UI v1.0 surface...');
      const result = await generateLiveA2uiSurface(
        geminiApiKey,
        resolvedPrompt,
      );
      setGeminiCallsUsed(result.callsUsed);
      await runStream(
        result.messages,
        'Live Gemini (' + result.callsUsed + '/' + result.maxCalls + ' quota)',
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setLiveErrorText(msg);
      setGeminiCallsUsed(getGeminiSessionUsage().used);
      logEvent('Compiler error: ' + msg);
    } finally {
      setIsGeneratingLive(false);
    }
  };

  const activeSkinLabel =
    STUDIO_SKINS.find((s) => s.id === activeSkinId)?.label ?? 'Evergreen';
  const isLocal = compilerMode === 'local';

  return (
    <div className="studio-shell">
      <header className="studio-header">
        <div className="studio-title-group">
          <h1>Ag × A2UI</h1>
          <span className="protocol-pill">v1.0 Spec • React 19</span>
        </div>

        <div className="studio-controls">
          <ReactButton
            size="sm"
            shape="rounded"
            variant="secondary"
            bordered={!inspectorOpen}
            onClick={() => setInspectorOpen((open) => !open)}
          >
            <span className="inspector-toggle-inner">
              <Code2 size={15} aria-hidden="true" />
              <span>Inspector</span>
              {actionCount > 0 && (
                <span className="inspector-count-dot">{actionCount}</span>
              )}
            </span>
          </ReactButton>

          <div className="theme-toggle-group">
            {isDark ? (
              <Moon size={15} aria-hidden="true" />
            ) : (
              <Sun size={15} aria-hidden="true" />
            )}
            <ReactToggle
              label="Dark Mode"
              labelHidden
              checked={isDark}
              onToggleChange={handleDarkToggle}
            />
          </div>
        </div>
      </header>

      <div className={'studio-workspace ' + (inspectorOpen ? 'has-inspector' : '')}>
        <aside className="studio-sidebar">
          <div className="sidebar-header">
            <h2>Runtime Skin</h2>
            <span className="active-skin-badge">{activeSkinLabel}</span>
          </div>

          <div className="skin-grid">
            {STUDIO_SKINS.map((skin) => {
              const isSelected = skin.id === activeSkinId;
              return (
                <ReactButton
                  key={skin.id}
                  size="sm"
                  shape="rounded"
                  fullWidth
                  variant="primary"
                  bordered={!isSelected}
                  onClick={() => handleSelectSkin(skin)}
                >
                  <span className="skin-btn-inner">
                    <span
                      className="swatch"
                      style={{ background: skin.swatch }}
                    />
                    <span>{skin.label}</span>
                  </span>
                </ReactButton>
              );
            })}
          </div>
        </aside>

        <main className="studio-stage">
          <div className="stage-container">
            <div className="live-prompt-card">
              <div className="live-prompt-top">
                <span className="live-prompt-title">
                  Agent Prompt Composer
                </span>

                <div className="compiler-mode-radios">
                  <ReactRadio
                    name="compiler-mode"
                    value="local"
                    labelText="Local UI (Instant)"
                    checked={isLocal}
                    onChange={() => {
                      setCompilerMode('local');
                      setLiveErrorText('');
                    }}
                  />

                  <ReactRadio
                    name="compiler-mode"
                    value="live"
                    labelText={
                      'Live Gemini (' +
                      geminiCallsUsed +
                      '/' +
                      MAX_SESSION_CALLS +
                      ')'
                    }
                    checked={!isLocal}
                    onChange={() => {
                      setCompilerMode('live');
                      setLiveErrorText('');
                    }}
                  />
                </div>
              </div>

              <div className={'live-prompt-bar ' + (isLocal ? 'is-local' : '')}>
                {!isLocal && (
                  <ReactInput
                    label="AI Studio Key (Session Only)"
                    type="password"
                    placeholder="AQ... or AIza..."
                    value={geminiApiKey}
                    onInput={(e) => {
                      const val = (e.target as HTMLInputElement).value;
                      setGeminiApiKey(val);
                      sessionStorage.setItem(SESSION_KEY_STORAGE, val);
                    }}
                  />
                )}

                <ReactInput
                  label="Describe the agent workflow or support UI"
                  placeholder="Describe a campaign workflow or caller alert..."
                  value={livePromptText}
                  onInput={(e) => {
                    setLivePromptText((e.target as HTMLInputElement).value);
                  }}
                />

                <ReactButton
                  variant="primary"
                  size="md"
                  shape="rounded"
                  disabled={isGeneratingLive}
                  onClick={() => void handleGeneratePrompt()}
                >
                  {isGeneratingLive ? 'Compiling...' : 'Generate UI'}
                </ReactButton>
              </div>

              <div className="prompt-chips-row">
                <span className="prompt-chips-label">Try:</span>
                {QUICK_PROMPT_CHIPS.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    className="prompt-chip"
                    onClick={() => void handleGeneratePrompt(chip.prompt)}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {liveErrorText && (
              <ReactAlert variant="danger" borderedLeft>
                {liveErrorText}
              </ReactAlert>
            )}

            {streamPhase === 'skeleton' && (
              <div className="a2ui-stream-skeleton" aria-live="polite">
                <div className="a2ui-skeleton-bar a2ui-skeleton-bar--short" />
                <div className="a2ui-skeleton-bar a2ui-skeleton-bar--medium" />
                <div className="a2ui-skeleton-bar a2ui-skeleton-bar--tall" />
              </div>
            )}

            {streamPhase === 'typing' && (
              <div className="a2ui-agent-typing" aria-live="polite">
                <span className="a2ui-typing-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span>Agent is composing A2UI v1.0 surface...</span>
              </div>
            )}

            {streamPhase === 'streaming' && streamProgress.total > 0 && (
              <div className="a2ui-stream-status-bar" aria-live="polite">
                Streaming frame {streamProgress.current}/{streamProgress.total}...
              </div>
            )}

            <AgA2uiSurface
              ref={surfaceRef}
              surface={surface}
              data-surface-id="support_surface"
            />
          </div>
        </main>

        {inspectorOpen && (
          <aside className="studio-inspector">
            <section className="inspector-panel">
              <div className="panel-header">
                <h3>Live DataModel (@path)</h3>
                {changedPathCount > 0 && (
                  <span className="protocol-pill">
                    {changedPathCount} changed
                  </span>
                )}
              </div>
              <pre
                className="json-viewer"
                dangerouslySetInnerHTML={{ __html: dataModelHtml }}
              />
            </section>

            <section className="inspector-panel">
              <div className="panel-header">
                                <h3>Action &amp; FACE Log</h3>
                <ReactIconButton
                  label="Clear event log"
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setActionCount(0);
                    setEventLogText('Log cleared.');
                  }}
                >
                  <CircleSlash2 size={15} aria-hidden="true" />
                </ReactIconButton>
              </div>
              <pre className="event-log">{eventLogText}</pre>
            </section>
          </aside>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
