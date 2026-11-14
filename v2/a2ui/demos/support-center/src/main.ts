import { MessageProcessor } from '@a2ui/web_core/v1_0';
import { A2uiSurface, type LitComponentApi } from '@a2ui/lit';
import {
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  runSurfaceValidation,
  createMockA2uiStream,
} from '@agnosticui/a2ui-lit';
import { SKINS, applySkin, applyTheme, restorePrefs } from '../../../../skins/skin-switcher-core.js';
import { SUPPORT_SCENARIOS, type SupportScenario } from './fixtures/support-scenarios.js';
import 'agnosticui-core/styles/tokens.css';
import 'agnosticui-core/styles/tokens-dark.css';
import '../../../../skins/skins-bundle.css';
import './studio.css';

registerAgnosticUICatalog();
restorePrefs();

const scenarioSelect = document.getElementById('scenario-select') as HTMLSelectElement;
const replayBtn = document.getElementById('replay-btn') as HTMLButtonElement;
const validateBtn = document.getElementById('validate-btn') as HTMLButtonElement;
const darkToggle = document.getElementById('dark-toggle') as HTMLButtonElement;
const skinGrid = document.getElementById('skin-grid') as HTMLDivElement;
const activeSkinLabel = document.getElementById('active-skin-label') as HTMLSpanElement;
const promptBanner = document.getElementById('prompt-banner') as HTMLDivElement;
const surfaceMount = document.getElementById('surface-mount') as HTMLDivElement;
const dataModelInspector = document.getElementById('datamodel-inspector') as HTMLPreElement;
const eventLog = document.getElementById('event-log') as HTMLPreElement;

let activeSurfaceEl: A2uiSurface | null = null;
let inspectorTimer: number | null = null;

function logEvent(message: string, detail?: unknown): void {
  const stamp = new Date().toLocaleTimeString();
  const extra = detail !== undefined ? `\n${JSON.stringify(detail, null, 2)}` : '';
  eventLog.textContent = `[${stamp}] ${message}${extra}\n\n${eventLog.textContent}`;
}

function renderSkinButtons(): void {
  const currentSkin = localStorage.getItem('ag-skin') ?? '';
  skinGrid.innerHTML = '';

  for (const skin of SKINS) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'skin-btn';
    btn.setAttribute('aria-pressed', String(skin.id === currentSkin));
    btn.innerHTML = `<span class="swatch" style="background:${skin.swatch}"></span><span>${skin.label}</span>`;
    btn.addEventListener('click', () => {
      applySkin(skin.id);
      activeSkinLabel.textContent = skin.label;
      for (const sibling of skinGrid.querySelectorAll('.skin-btn')) {
        sibling.setAttribute('aria-pressed', 'false');
      }
      btn.setAttribute('aria-pressed', 'true');
      logEvent(`Applied skin: ${skin.label}`);
    });
    if (skin.id === currentSkin) {
      activeSkinLabel.textContent = skin.label;
    }
    skinGrid.appendChild(btn);
  }
}

async function playScenario(scenario: SupportScenario, delayMs = 0): Promise<void> {
  if (inspectorTimer !== null) {
    window.clearInterval(inspectorTimer);
  }

  surfaceMount.innerHTML = '';
  promptBanner.innerHTML = `<strong>Prompt:</strong> ${scenario.prompt}`;

  const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
  const surfaceEl = new A2uiSurface();
  surfaceEl.setAttribute('data-surface-id', 'support_surface');
  surfaceMount.appendChild(surfaceEl);
  activeSurfaceEl = surfaceEl;

  // Listen for A2UI surface action events and run FACE validation before dispatch
  surfaceEl.addEventListener('a2uiaction', (evt: Event) => {
    const detail = (evt as CustomEvent).detail;
    const isValid = runSurfaceValidation(surfaceEl, true);
    if (!isValid) {
      logEvent('Blocked action: FACE validation failed on required fields');
      return;
    }
    logEvent('FACE validation passed -> Dispatched A2UI Action', detail);
  });

  logEvent(`Streaming scenario: ${scenario.title}`);
  for await (const msg of createMockA2uiStream(scenario.messages, delayMs)) {
    processor.processMessages([msg as never]);
    const model = processor.model.getSurface('support_surface');
    if (model && surfaceEl.surface !== model) {
      surfaceEl.surface = model;
    }
    if (model) {
      dataModelInspector.textContent = JSON.stringify(model.dataModel.get('/'), null, 2);
    }
  }

  // Keep live DataModel inspector synced as user types into two-way @path inputs
  inspectorTimer = window.setInterval(() => {
    const model = processor.model.getSurface('support_surface');
    if (model) {
      dataModelInspector.textContent = JSON.stringify(model.dataModel.get('/'), null, 2);
    }
  }, 250);
}

for (const scenario of SUPPORT_SCENARIOS) {
  const opt = document.createElement('option');
  opt.value = scenario.id;
  opt.textContent = scenario.title;
  scenarioSelect.appendChild(opt);
}

scenarioSelect.addEventListener('change', () => {
  const selected = SUPPORT_SCENARIOS.find((s) => s.id === scenarioSelect.value) ?? SUPPORT_SCENARIOS[0];
  void playScenario(selected, 0);
});

replayBtn.addEventListener('click', () => {
  const selected = SUPPORT_SCENARIOS.find((s) => s.id === scenarioSelect.value) ?? SUPPORT_SCENARIOS[0];
  void playScenario(selected, 120);
});

validateBtn.addEventListener('click', () => {
  if (!activeSurfaceEl) return;
  const valid = runSurfaceValidation(activeSurfaceEl, true);
  logEvent(valid ? 'Manual FACE Check: ALL VALID' : 'Manual FACE Check: INVALID FIELDS HIGHLIGHTED');
});

darkToggle.addEventListener('click', () => {
  const nextDark = document.documentElement.getAttribute('data-theme') !== 'dark';
  applyTheme(nextDark);
  logEvent(`Theme mode: ${nextDark ? 'Dark' : 'Light'}`);
});

renderSkinButtons();
void playScenario(SUPPORT_SCENARIOS[0], 0);
