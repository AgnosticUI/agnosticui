/**
 * @file demos-smoke.spec.ts
 * @description End-to-end smoke test suite for the Support Center Studio shared pipeline
 * (idle AgEmptyState boot, prompt chip compilation & streaming, FACE validation, and
 * 4-turn AgMessageBubble confirmation across Lit, React, and Vue demos).
 */

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

  it('compiles and streams all 3 quick prompt chips into 2-turn AgMessageBubble threads', async () => {
    expect(QUICK_PROMPT_CHIPS).toHaveLength(3);

    for (const chip of QUICK_PROMPT_CHIPS) {
      document.body.innerHTML = '';
      const compiled = await generateLocalA2uiSurface(chip.prompt);
      expect(compiled.messages.length).toBeGreaterThanOrEqual(3);

      const { surfaceEl } = await mountSurfaceMessages(compiled.messages);
      const bubbles = surfaceEl.querySelectorAll('ag-message-bubble');
      expect(bubbles.length).toBe(2);
      expect(bubbles[0]?.getAttribute('from')).toBe('me');
      expect(bubbles[1]?.getAttribute('from')).toBe('them');
    }
  });

  it('enforces FACE validation and appends 4-turn confirmation bubbles on submit', async () => {
    const scenario = SUPPORT_SCENARIOS[0];
    expect(scenario).toBeDefined();

    const { processor, surfaceEl } = await mountSurfaceMessages(scenario.messages);

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

    const confirmationMessages = buildActionConfirmationMessages(scenario.messages, {
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

    const bubbles = surfaceEl.querySelectorAll('ag-message-bubble');
    expect(bubbles.length).toBe(4);
    expect(bubbles[2]?.getAttribute('from')).toBe('me');
    expect(bubbles[3]?.getAttribute('from')).toBe('them');
    expect(surfaceEl.textContent).toContain('jordan.taylor@brand.io');
  });
});
