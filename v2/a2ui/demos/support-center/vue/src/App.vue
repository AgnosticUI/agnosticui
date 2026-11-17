<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
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

restorePrefs();

const STUDIO_SKINS = [
  { id: 'evergreen', label: 'Evergreen', swatch: '#00a87f' },
  ...SKINS,
];

const SESSION_KEY_STORAGE = 'ag-a2ui-gemini-key';

const initialSkin = localStorage.getItem('ag-skin') ?? 'evergreen';
applySkin(initialSkin);

const activeSkinId = ref<string>(initialSkin);
const isDark = ref<boolean>(
  document.documentElement.getAttribute('data-theme') === 'dark',
);
const inspectorOpen = ref(false);
const actionCount = ref(0);
const dataModelJson = ref('{}');
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
const logEvent = (message: string, detail?: unknown) => {
  const stamp = new Date().toLocaleTimeString();
  const extra =
    detail !== undefined ? `\n${JSON.stringify(detail, null, 2)}` : '';
  eventLogText.value = `[${stamp}] ${message}${extra}\n\n${eventLogText.value}`;
};

const {
  surface,
  surfaceRef,
  processMessages,
  streamMessages,
  resetSurface,
  getDataModel,
} = useA2uiSurface({
  surfaceId: 'support_surface',
  validateOnAction: true,
  onAction: (detail) => {
    actionCount.value += 1;
    logEvent('FACE validation passed -> Dispatched A2UI Action', detail);

    const confirmMsgs = buildActionConfirmationMessages(activeMessages, detail);
    processMessages(confirmMsgs);
    dataModelJson.value = JSON.stringify(getDataModel(), null, 2);
  },
});

const runStream = async (
  messages: A2uiWireMessage[],
  delayMs: number,
  streamLabel: string,
) => {
  activeMessages = messages;
  resetSurface();
  logEvent(`Streaming surface: ${streamLabel}`);
  await streamMessages(messages, delayMs);
  dataModelJson.value = JSON.stringify(getDataModel(), null, 2);
};

let pollTimer: number | null = null;

onMounted(() => {
  void runStream(EMPTY_STATE_SURFACE_MESSAGES, 0, 'Idle Empty State');
  pollTimer = window.setInterval(() => {
    dataModelJson.value = JSON.stringify(getDataModel(), null, 2);
  }, 250);
});

onUnmounted(() => {
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
  logEvent(`Applied skin: ${skin.label}`);
};

const handleDarkToggle = (detail: { checked: boolean }) => {
  const nextDark = Boolean(detail?.checked);
  isDark.value = nextDark;
  applyTheme(nextDark);
  logEvent(`Theme mode: ${nextDark ? 'Dark' : 'Light'}`);
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
      await runStream(result.messages, 60, 'Local A2UI v1.0 Compiler');
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
      60,
      `Live Gemini (${result.callsUsed}/${result.maxCalls} quota)`,
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    liveErrorText.value = msg;
    geminiCallsUsed.value = getGeminiSessionUsage().used;
    logEvent(`Compiler error: ${msg}`);
  } finally {
    isGeneratingLive.value = false;
  }
};
</script>
<template>
  <div class="studio-shell">
    <header class="studio-header">
      <div class="studio-title-group">
        <h1>Ag × A2UI</h1>
        <span class="protocol-pill">v1.0 Spec • Vue 3</span>
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
                  :label-text="`Live Gemini (${geminiCallsUsed}/${MAX_SESSION_CALLS})`"
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
                class="prompt-chip"
                @click="void handleGeneratePrompt(chip.prompt)"
              >
                {{ chip.label }}
              </button>
            </div>
          </div>

          <VueAlert v-if="liveErrorText" variant="danger" bordered-left>
            {{ liveErrorText }}
          </VueAlert>

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
          </div>
          <pre class="json-viewer">{{ dataModelJson }}</pre>
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
