<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { CircleSlash2, Code2, Moon, Sun } from 'lucide-vue-next';
import {
  AgA2uiSurface,
  useA2uiSurface,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-vue';
import { VueAlert } from 'agnosticui-core/alert/vue';
import { VueButton } from 'agnosticui-core/button/vue';
import { VueIconButton } from 'agnosticui-core/icon-button/vue';
import { VueInput } from 'agnosticui-core/input/vue';
import { VueRadio } from 'agnosticui-core/radio/vue';
import { VueToggle } from 'agnosticui-core/toggle/vue';

import {
  SKINS,
  applySkin,
  applyTheme,
  getSavedSkinId,
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
import { createFollowScrollController } from '../../shared/follow-scroll.js';

restorePrefs();

const STUDIO_SKINS = SKINS;

const SESSION_KEY_STORAGE = 'ag-a2ui-gemini-key';

const initialSkin = getSavedSkinId('evergreen');
applySkin(initialSkin);

const activeSkinId = ref<string>(initialSkin);
const isDark = ref<boolean>(
  document.documentElement.getAttribute('data-theme') === 'dark',
);
const inspectorOpen = ref(false);
const actionCount = ref(0);
const dataModelHtml = ref<string>(renderHighlightedJsonHtml({}, new Map()));
const changedPathCount = ref(0);
const isAutoFollowing = ref(true);
const jsonViewerEl = ref<HTMLElement | null>(null);
const followScroll = createFollowScrollController();
const streamPhase = ref<StreamPhase>('complete');
const streamProgress = ref({ current: 0, total: 0 });
const eventLogText = ref('Ready.');
const compilerMode = ref<'local' | 'live'>('local');
const geminiApiKey = ref<string>(
  sessionStorage.getItem(SESSION_KEY_STORAGE) ?? '',
);
const livePromptText = ref<string>(QUICK_PROMPT_CHIPS.at(0)?.prompt ?? '');
const isGeneratingLive = ref(false);
const geminiCallsUsed = ref<number>(getGeminiSessionUsage().used);
const liveErrorText = ref('');

let activeMessages: A2uiWireMessage[] = EMPTY_STATE_SURFACE_MESSAGES;
let activeStreamHandle: StreamPlaybackHandle | null = null;
let lastSnapshot: unknown = {};
let lastSerialized = '{}';

const syncDataModelInspector = (rawData: unknown, resetBaseline = false) => {
  const normalized = rawData ?? {};
  const serialized = JSON.stringify(normalized);
  if (!resetBaseline && serialized === lastSerialized) {
    return;
  }

  const nextSnapshot: unknown = JSON.parse(serialized);
  const changes = resetBaseline
    ? new Map()
    : diffDataModelSnapshots(lastSnapshot, nextSnapshot);

  lastSnapshot = nextSnapshot;
  lastSerialized = serialized;
  changedPathCount.value = changes.size;
  dataModelHtml.value = renderHighlightedJsonHtml(nextSnapshot, changes);
};
const logEvent = (message: string, detail?: unknown) => {
  const stamp = new Date().toLocaleTimeString();
  const extra =
    detail !== undefined ? '\n' + JSON.stringify(detail, null, 2) : '';
  eventLogText.value =
    '[' + stamp + '] ' + message + extra + '\n\n' + eventLogText.value;
};

let runStreamRef: (
  messages: A2uiWireMessage[],
  streamLabel: string,
  instant?: boolean,
) => Promise<void>;

const {
  surface,
  surfaceRef,
  processMessages,
  resetSurface,
  getDataModel,
  validate,
} = useA2uiSurface({
  surfaceId: 'support_surface',
  validateOnAction: false,
  onAction: (detail) => {
    if (streamPhase.value !== 'complete') {
      return;
    }

    const outcome = advanceAgentRoundTrip(activeMessages, detail);

    if (outcome.kind === 'reset') {
      logEvent('Agent round-trip reset -> Restored Turn 1 surface');
      void runStreamRef(activeMessages, 'Turn 1 Surface (Reset)', true);
      return;
    }

    if (outcome.kind === 'rejected') {
      processMessages(outcome.messages);
      validate(true);
      logEvent('Blocked action: ' + outcome.reason);
      return;
    }

    if (outcome.kind === 'update_surface') {
      logEvent('Queue view updated (' + outcome.actionName + ')', detail);
      processMessages(outcome.messages);
      syncDataModelInspector(getDataModel());
      return;
    }

    if (!validate(true)) {
      logEvent('Blocked action: FACE validation failed on required fields');
      return;
    }

    actionCount.value += 1;
    logEvent(
      'FACE validation passed -> Turn ' +
        outcome.turn +
        ' (' +
        outcome.actionName +
        ')',
      detail,
    );

    processMessages(outcome.messages);
    syncDataModelInspector(getDataModel());
  },
});

const runStream = async (
  messages: A2uiWireMessage[],
  streamLabel: string,
  instant = false,
) => {
  activeStreamHandle?.cancel();
  activeMessages = messages;
  resetSurface();
  isAutoFollowing.value = followScroll.reset();
  syncDataModelInspector({}, true);
  streamProgress.value = { current: 0, total: 0 };
  logEvent('Streaming surface: ' + streamLabel);

  const handle = playProgressiveA2uiStream(
    messages,
    {
      onPhaseChange: (phase) => {
        streamPhase.value = phase;
      },
      onMessage: (msg, idx, total) => {
        streamProgress.value = { current: idx + 1, total };
        processMessages([msg]);
        syncDataModelInspector(getDataModel());
      },
    },
    instant
      ? { skeletonDelayMs: 0, typingDelayMs: 0, chunkDelayMs: 0, verbose: false }
      : { skeletonDelayMs: 140, typingDelayMs: 220, chunkDelayMs: 95, verbose: false },
  );

  activeStreamHandle = handle;
  await handle.finished;
  syncDataModelInspector(getDataModel());
};

runStreamRef = runStream;

watch(
  [dataModelHtml, inspectorOpen],
  ([, isOpen]) => {
    if (isOpen) {
      followScroll.sync(jsonViewerEl.value);
    }
  },
  { flush: 'post' },
);

const handleViewerScroll = (e: Event) => {
  isAutoFollowing.value = followScroll.onUserScroll(
    e.currentTarget as HTMLElement,
  );
};

const handleJumpToLatest = () => {
  isAutoFollowing.value = followScroll.reset();
  followScroll.sync(jsonViewerEl.value);
};

let pollTimer: number | null = null;

onMounted(() => {
  void runStream(EMPTY_STATE_SURFACE_MESSAGES, 'Idle Empty State', true);
  pollTimer = window.setInterval(() => {
    syncDataModelInspector(getDataModel());
  }, 250);
});

onUnmounted(() => {
  activeStreamHandle?.cancel();
  if (pollTimer !== null) {
    window.clearInterval(pollTimer);
  }
});

const activeSkinLabel = computed(
  () =>
    STUDIO_SKINS.find((s) => s.id === activeSkinId.value)?.label ?? 'Evergreen',
);

const isLocal = computed(() => compilerMode.value === 'local');

const handleSelectSkin = (skin: { id: string; label: string }) => {
  applySkin(skin.id);
  activeSkinId.value = skin.id;
  logEvent('Applied skin: ' + skin.label);
};

const handleDarkToggle = (detail: { checked: boolean }) => {
  const nextDark = Boolean(detail?.checked);
  isDark.value = nextDark;
  applyTheme(nextDark);
  logEvent('Theme mode: ' + (nextDark ? 'Dark' : 'Light'));
};

const handleApiKeyUpdate = (val: string) => {
  geminiApiKey.value = val;
  window.sessionStorage.setItem(SESSION_KEY_STORAGE, val);
};

const handleGeneratePrompt = async (overridePrompt?: string) => {
  if (isGeneratingLive.value) return;

  const resolvedPrompt = (overridePrompt ?? livePromptText.value).trim();
  livePromptText.value = resolvedPrompt;
  liveErrorText.value = '';
  isGeneratingLive.value = true;

  try {
    if (compilerMode.value === 'local') {
      const result = await generateLocalA2uiSurface(resolvedPrompt);
      await runStream(result.messages, 'Local A2UI v1.0 Compiler');
      return;
    }

    if (geminiApiKey.value) {
      window.sessionStorage.setItem(SESSION_KEY_STORAGE, geminiApiKey.value);
    }
    logEvent('Calling Gemini 3.8 Flash for live A2UI v1.0 surface...');
    const result = await generateLiveA2uiSurface(
      geminiApiKey.value,
      resolvedPrompt,
    );
    geminiCallsUsed.value = result.callsUsed;
    await runStream(
      result.messages,
      'Live Gemini (' + result.callsUsed + '/' + result.maxCalls + ' quota)',
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    liveErrorText.value = msg;
    geminiCallsUsed.value = getGeminiSessionUsage().used;
    logEvent('Compiler error: ' + msg);
  } finally {
    isGeneratingLive.value = false;
  }
};
</script>
<template>
  <div class="studio-shell">
    <header class="studio-header">
      <div class="studio-title-group">
        <h1>Ag &times; A2UI</h1>
        <span class="protocol-pill">v1.0 Spec &bull; Vue 3</span>
      </div>

      <div class="studio-controls">
        <VueButton
          size="sm"
          shape="rounded"
          variant="secondary"
          :bordered="!inspectorOpen"
          @click="inspectorOpen = !inspectorOpen"
        >
          <span class="inspector-toggle-inner">
            <Code2 :size="15" aria-hidden="true" />
            <span>Inspector</span>
            <span v-if="actionCount > 0" class="inspector-count-dot">{{
              actionCount
            }}</span>
          </span>
        </VueButton>

        <div class="theme-toggle-group">
          <Moon v-if="isDark" :size="15" aria-hidden="true" />
          <Sun v-else :size="15" aria-hidden="true" />
          <VueToggle
            label="Dark Mode"
            label-hidden
            :checked="isDark"
            @toggle-change="handleDarkToggle"
          />
        </div>
      </div>
    </header>

    <div :class="['studio-workspace', { 'has-inspector': inspectorOpen }]">
      <aside class="studio-sidebar">
        <div class="sidebar-header">
          <h2>Runtime Skin</h2>
          <span class="active-skin-badge">{{ activeSkinLabel }}</span>
        </div>

        <div class="skin-grid">
          <VueButton
            v-for="skin in STUDIO_SKINS"
            :key="skin.id"
            size="sm"
            shape="rounded"
            full-width
            variant="primary"
            :bordered="skin.id !== activeSkinId"
            @click="handleSelectSkin(skin)"
          >
            <span class="skin-btn-inner">
              <span class="swatch" :style="{ background: skin.swatch }" />
              <span>{{ skin.label }}</span>
            </span>
          </VueButton>
        </div>
      </aside>

      <main class="studio-stage">
        <div class="stage-container">
          <div class="live-prompt-card">
            <div class="live-prompt-top">
              <span class="live-prompt-title">Agent Prompt Composer</span>

              <div class="compiler-mode-radios">
                <VueRadio
                  name="compiler-mode"
                  value="local"
                  label-text="Local UI (Instant)"
                  :checked="isLocal"
                  @change="
                    () => {
                      compilerMode = 'local';
                      liveErrorText = '';
                    }
                  "
                />

                <VueRadio
                  name="compiler-mode"
                  value="live"
                  :label-text="
                    'Live Gemini (' +
                    geminiCallsUsed +
                    '/' +
                    MAX_SESSION_CALLS +
                    ')'
                  "
                  :checked="!isLocal"
                  @change="
                    () => {
                      compilerMode = 'live';
                      liveErrorText = '';
                    }
                  "
                />
              </div>
            </div>

            <div :class="['live-prompt-bar', { 'is-local': isLocal }]">
              <VueInput
                v-if="!isLocal"
                label="AI Studio Key (Session Only)"
                type="password"
                placeholder="AQ... or AIza..."
                :value="geminiApiKey"
                @update:value="handleApiKeyUpdate"
              />

              <VueInput
                label="Describe the agent workflow or support UI"
                placeholder="Describe a campaign workflow or caller alert..."
                :value="livePromptText"
                @update:value="
                  (val: string) => {
                    livePromptText = val;
                  }
                "
              />

              <VueButton
                variant="primary"
                size="md"
                shape="rounded"
                :disabled="isGeneratingLive"
                @click="void handleGeneratePrompt()"
              >
                {{ isGeneratingLive ? 'Compiling...' : 'Generate UI' }}
              </VueButton>
            </div>

            <div class="prompt-chips-row">
              <span class="prompt-chips-label">Try:</span>
              <button
                v-for="chip in QUICK_PROMPT_CHIPS"
                :key="chip.label"
                type="button"
                :class="['prompt-chip', { active: livePromptText.trim() === chip.prompt.trim() }]"
                :aria-pressed="livePromptText.trim() === chip.prompt.trim()"
                @click="void handleGeneratePrompt(chip.prompt)"
              >
                {{ chip.label }}
              </button>
            </div>
          </div>
          <VueAlert v-if="liveErrorText" variant="danger" bordered-left>
            {{ liveErrorText }}
          </VueAlert>

          <div
            v-if="streamPhase === 'skeleton'"
            class="a2ui-stream-skeleton"
            aria-live="polite"
          >
            <div class="a2ui-skeleton-bar a2ui-skeleton-bar--short" />
            <div class="a2ui-skeleton-bar a2ui-skeleton-bar--medium" />
            <div class="a2ui-skeleton-bar a2ui-skeleton-bar--tall" />
          </div>

          <div
            v-else-if="streamPhase === 'typing'"
            class="a2ui-agent-typing"
            aria-live="polite"
          >
            <span class="a2ui-typing-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>Agent is composing A2UI v1.0 surface...</span>
          </div>

          <div
            v-else-if="streamPhase === 'streaming' && streamProgress.total > 0"
            class="a2ui-stream-status-bar"
            aria-live="polite"
          >
            Streaming frame {{ streamProgress.current }}/{{ streamProgress.total }}...
          </div>

          <AgA2uiSurface
            ref="surfaceRef"
            :surface="surface"
            data-surface-id="support_surface"
          />
        </div>
      </main>

      <aside v-if="inspectorOpen" class="studio-inspector">
        <section class="inspector-panel">
          <div class="panel-header">
            <h3>Live DataModel (@path)</h3>
            <button
              v-if="!isAutoFollowing"
              type="button"
              class="follow-scroll-pill"
              title="Resume auto-scrolling to latest DataModel changes"
              @click="handleJumpToLatest"
            >
              &darr; Jump to latest
            </button>
            <span v-if="changedPathCount > 0" class="protocol-pill">
              {{ changedPathCount }} changed
            </span>
          </div>
          <pre
            ref="jsonViewerEl"
            class="json-viewer"
            @scroll="handleViewerScroll"
            v-html="dataModelHtml"
          />
        </section>

        <section class="inspector-panel">
          <div class="panel-header">
            <h3>Action &amp; FACE Log</h3>
            <VueIconButton
              label="Clear event log"
              size="sm"
              variant="ghost"
              @click="
                () => {
                  actionCount = 0;
                  eventLogText = 'Log cleared.';
                }
              "
            >
              <CircleSlash2 :size="15" aria-hidden="true" />
            </VueIconButton>
          </div>
          <pre class="event-log">{{ eventLogText }}</pre>
        </section>
      </aside>
    </div>
  </div>
</template>
