import { describe, it, expect, beforeEach } from 'vitest';
import {
  A2uiSurface,
  MessageProcessor,
  AgnosticUICatalog,
  registerAgnosticUICatalog,
  runSurfaceValidation,
  createMockA2uiStream,
  type LitComponentApi,
  type A2uiWireMessage,
} from './index.js';
import {
  EMPTY_STATE_SURFACE_MESSAGES,
  QUICK_PROMPT_CHIPS,
  SUPPORT_SCENARIOS,
  buildActionConfirmationMessages,
} from '../../../demos/support-center/shared/support-scenarios.js';
import { generateLocalA2uiSurface } from '../../../demos/support-center/shared/live-gemini.js';

async function settleTree(node: Node): Promise<void> {
  const el = node as HTMLElement & { updateComplete?: Promise<boolean> };
  if (el.updateComplete) {
    await el.updateComplete;
  }
  if (el.shadowRoot) {
    await settleTree(el.shadowRoot);
  }
  for (const child of Array.from(node.childNodes)) {
    await settleTree(child);
  }
}

async function mountSurfaceMessages(
  messages: A2uiWireMessage[],
  surfaceId = 'support_surface',
) {
  const processor = new MessageProcessor<LitComponentApi>([AgnosticUICatalog]);
  for await (const msg of createMockA2uiStream(messages, 0)) {
    processor.processMessages([msg as never]);
  }

  const surfaceModel = processor.model.getSurface(surfaceId);
  expect(surfaceModel).toBeDefined();

  const surfaceEl = new A2uiSurface();
  surfaceEl.setAttribute('data-surface-id', surfaceId);
  document.body.appendChild(surfaceEl);
  surfaceEl.surface = surfaceModel;

  await settleTree(surfaceEl);
  await new Promise((r) => setTimeout(r, 0));
  await settleTree(surfaceEl);

  return { processor, surfaceModel: surfaceModel!, surfaceEl };
}

describe('Support Center Studio End-to-End Smoke Suite', () => {
  beforeEach(() => {
    registerAgnosticUICatalog();
    document.body.innerHTML = '';
  });

  it('boots cleanly into the idle AgEmptyState surface', async () => {
    const { surfaceEl } = await mountSurfaceMessages(EMPTY_STATE_SURFACE_MESSAGES);

    const emptyState = surfaceEl.querySelector('ag-empty-state');
    expect(emptyState).not.toBeNull();
    expect(
      emptyState?.getAttribute('title') ??
        (emptyState as HTMLElement & { title?: string })?.title,
    ).toContain('Ready to Stream an A2UI v1.0 Surface');
  });

  it('compiles and streams all quick prompt chips into 2-turn AgMessageBubble threads', async () => {
    expect(QUICK_PROMPT_CHIPS.length).toBeGreaterThanOrEqual(4);

    for (const chip of QUICK_PROMPT_CHIPS) {
      document.body.innerHTML = '';
      const compiled = await generateLocalA2uiSurface(chip.prompt);
      expect(compiled.messages.length).toBeGreaterThanOrEqual(3);

      const { surfaceEl } = await mountSurfaceMessages(compiled.messages);
      const bubbles = Array.from(surfaceEl.querySelectorAll('ag-message-bubble'));
      expect(bubbles.length).toBe(2);
      expect(bubbles.at(0)?.getAttribute('from')).toBe('me');
      expect(bubbles.at(1)?.getAttribute('from')).toBe('them');
    }
  });
  it('mounts Enterprise SLA & Credit Cap chip with AgBreadcrumb, AgSlider, AgIntlFormatter, and AgMark', async () => {
    const slaChip = QUICK_PROMPT_CHIPS.find((c) =>
      c.label.includes('Enterprise SLA'),
    );
    expect(slaChip).toBeDefined();

    const compiled = await generateLocalA2uiSurface(slaChip!.prompt);
    const { surfaceModel, surfaceEl } = await mountSurfaceMessages(compiled.messages);

    expect(surfaceEl.querySelector('ag-breadcrumb')).not.toBeNull();
    expect(surfaceEl.querySelector('ag-intl-formatter')).not.toBeNull();
    expect(surfaceEl.querySelector('ag-mark')).not.toBeNull();

    const slider = surfaceEl.querySelector('ag-slider');
    expect(slider).not.toBeNull();
    expect(surfaceModel.dataModel.get('/policy/maxCredit')).toBe(1500);

    slider!.dispatchEvent(
      new CustomEvent('change', { detail: { value: 3250 }, bubbles: true }),
    );
    await settleTree(surfaceEl);

    expect(surfaceModel.dataModel.get('/policy/maxCredit')).toBe(3250);
  });

  it('mounts High-Intent Caller Spike with AgBreadcrumb and AgPagination two-way page binding', async () => {
    const spikeChip = QUICK_PROMPT_CHIPS.find(
      (c) =>
        c.label.toLowerCase().includes('caller') ||
        c.prompt.toLowerCase().includes('surge'),
    );
    expect(spikeChip).toBeDefined();

    const compiled = await generateLocalA2uiSurface(spikeChip!.prompt);
    const { surfaceModel, surfaceEl } = await mountSurfaceMessages(compiled.messages);

    expect(surfaceEl.querySelector('ag-breadcrumb')).not.toBeNull();
    const pagination = surfaceEl.querySelector('ag-pagination');
    expect(pagination).not.toBeNull();
    expect(surfaceModel.dataModel.get('/queue/page')).toBe(1);
    expect(surfaceModel.dataModel.get('/queue/totalPages')).toBe(3);

    pagination!.dispatchEvent(
      new CustomEvent('page-change', { detail: { page: 2 }, bubbles: true }),
    );
    await settleTree(surfaceEl);

    expect(surfaceModel.dataModel.get('/queue/page')).toBe(2);
  });

  it('enforces FACE validation and appends 4-turn confirmation bubbles on submit', async () => {
    const scenario = SUPPORT_SCENARIOS.at(0);
    expect(scenario).toBeDefined();

    const { processor, surfaceEl } = await mountSurfaceMessages(scenario!.messages);

    const emailInput = surfaceEl.querySelector('ag-input') as HTMLElement & {
      reportValidity?: () => boolean;
      checkValidity?: () => boolean;
    };
    expect(emailInput).not.toBeNull();

    emailInput.reportValidity = () => false;
    emailInput.checkValidity = () => false;
    expect(runSurfaceValidation(surfaceEl, true)).toBe(false);

    emailInput.reportValidity = () => true;
    emailInput.checkValidity = () => true;
    expect(runSurfaceValidation(surfaceEl, true)).toBe(true);

    const confirmationMessages = buildActionConfirmationMessages(scenario!.messages, {
      name: 'launch_campaign_routing',
      sourceComponentId: 'submit_btn',
      context: { ownerEmail: 'jordan.taylor@brand.io' },
    });

    for await (const msg of createMockA2uiStream(confirmationMessages, 0)) {
      processor.processMessages([msg as never]);
    }
    await settleTree(surfaceEl);
    await new Promise((r) => setTimeout(r, 0));
    await settleTree(surfaceEl);

    const bubbles = Array.from(surfaceEl.querySelectorAll('ag-message-bubble'));
    expect(bubbles.length).toBe(4);
    expect(bubbles.at(2)?.getAttribute('from')).toBe('me');
    expect(bubbles.at(3)?.getAttribute('from')).toBe('them');
    expect(surfaceEl.textContent).toContain('jordan.taylor@brand.io');
  });
});
