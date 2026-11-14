/**
 * @file live-gemini.ts
 * @description Optional client-side Google AI Studio (Gemini 2.5 Flash) generator
 * for the AgnosticUI x A2UI v1.0 Support Center Studio.
 *
 * WHY THIS EXISTS:
 * - Keeps the offline Mock Stream fixtures as the zero-risk default while letting
 *   presenters demonstrate live natural-language-to-AgnosticUI generation on demand.
 * - Enforces a strict per-session call cap (MAX_SESSION_CALLS = 5) to protect
 *   free-tier Google AI Studio daily quotas.
 * - Normalizes wire envelopes to A2UI v1.0 and validates UAX #31 component IDs
 *   before passing messages to @a2ui/web_core's MessageProcessor.
 */

import {
  AGNOSTICUI_CATALOG_ID,
  type A2uiWireMessage,
} from '@agnosticui/a2ui-lit';

export interface LiveGeminiResult {
  messages: A2uiWireMessage[];
  latencyMs: number;
  callsUsed: number;
  maxCalls: number;
}

export const GEMINI_MODEL = 'gemini-3.8-flash';
export const MAX_SESSION_CALLS = 5;

const UAX31_ID_PATTERN = /^[A-Za-z_][A-Za-z0-9_]*$/;
let sessionCallCount = 0;

export function getGeminiSessionUsage(): { used: number; max: number } {
  return { used: sessionCallCount, max: MAX_SESSION_CALLS };
}

const SYSTEM_INSTRUCTION = `
You are an A2UI v1.0 generative UI compiler targeting the AgnosticUI catalog.
Return ONLY a valid JSON array of 3 A2UI v1.0 wire messages:
1. {"version":"1.0","createSurface":{"surfaceId":"support_surface","catalogId":"${AGNOSTICUI_CATALOG_ID}"}}
2. {"version":"1.0","updateComponents":{"surfaceId":"support_surface","components":[...]}}
3. {"version":"1.0","updateDataModel":{"surfaceId":"support_surface","path":"/","value":{...}}}

STRICT RULES:
- Root component MUST have "id": "root" and "component": "AgCard" with "shadow": true, "stacked": true.
- Every component "id" MUST match /^[A-Za-z_][A-Za-z0-9_]*$/ (letters, digits, underscores ONLY—NO hyphens!).
- Available components & key props:
  - AgCard: { id, component: "AgCard", variant?: "success"|"info"|"warning"|"error", shadow?: boolean, stacked?: boolean, children: string[] }
  - AgText: { id, component: "AgText", el?: "h2"|"h3"|"p"|"span", text: string | {"@path": string} }
  - AgBadge: { id, component: "AgBadge", variant?: "default"|"info"|"success"|"warning"|"danger", value: string }
  - AgAlert: { id, component: "AgAlert", variant?: "info"|"success"|"warning"|"danger", borderedLeft?: boolean, children: string[] }
  - AgFieldset: { id, component: "AgFieldset", legend?: string, bordered?: boolean, children: string[] }
  - AgInput: { id, component: "AgInput", label: string, type?: "text"|"email"|"number", placeholder?: string, required?: boolean, value: {"@path": string} }
  - AgCheckbox: { id, component: "AgCheckbox", labelText: string, checked: {"@path": string} }
  - AgSelect: { id, component: "AgSelect", label: string, name: string, value: {"@path": string} }
  - AgDivider: { id, component: "AgDivider" }
  - AgButton: { id, component: "AgButton", variant?: "primary"|"secondary", size?: "sm"|"md"|"lg", label: string, action?: {"event": {"name": string, "context"?: Record<string, unknown>}} }
- Bind interactive inputs to "/form/<field>" paths and initialize "/form" inside updateDataModel.
`.trim();

/**
 * Validates and normalizes raw parsed JSON from Gemini into A2UI v1.0 wire messages.
 * Ensures every envelope pins version "1.0", targets "support_surface", and uses
 * UAX #31-compliant component IDs so @a2ui/web_core never throws on hyphenated IDs.
 */
function normalizeAndValidateMessages(raw: unknown): A2uiWireMessage[] {
  if (!Array.isArray(raw) || raw.length === 0) {
    throw new Error('Gemini response was not a non-empty A2UI message array.');
  }

  return raw.map((entry, idx) => {
    if (typeof entry !== 'object' || entry === null) {
      throw new Error(`Wire message at index ${idx} is not an object.`);
    }

    // Explicitly type as Record<string, unknown> so property checks satisfy TS strict mode.
    const msg: Record<string, unknown> = {
      ...(entry as Record<string, unknown>),
      version: '1.0',
    };

    const rawUpdate = msg.updateComponents;
    if (typeof rawUpdate === 'object' && rawUpdate !== null) {
      const uc = rawUpdate as {
        surfaceId?: string;
        components?: Array<Record<string, unknown>>;
      };
      uc.surfaceId = 'support_surface';

      if (!Array.isArray(uc.components) || uc.components.length === 0) {
        throw new Error('updateComponents.components must be a non-empty array.');
      }

      for (const comp of uc.components) {
        const id = String(comp.id ?? '');
        if (!UAX31_ID_PATTERN.test(id)) {
          throw new Error(
            `Invalid UAX #31 component id "${id}" (use underscores, no hyphens).`,
          );
        }
      }
    }

    return msg as unknown as A2uiWireMessage;
  });
}

/**
 * Calls Google AI Studio's Gemini 2.5 Flash REST endpoint to compile a natural-language
 * support prompt into a validated A2UI v1.0 wire message stream.
 */
export async function generateLiveA2uiSurface(
  apiKey: string,
  userPrompt: string,
): Promise<LiveGeminiResult> {
  const trimmedKey = apiKey.trim();
  const trimmedPrompt = userPrompt.trim();

  if (!trimmedKey) {
    throw new Error('Please paste your Google AI Studio API key first.');
  }
  if (!trimmedPrompt) {
    throw new Error('Please enter a support UI prompt to generate.');
  }
  if (sessionCallCount >= MAX_SESSION_CALLS) {
    throw new Error(
      `Session quota guard reached (${MAX_SESSION_CALLS}/${MAX_SESSION_CALLS} calls). Refresh page to reset.`,
    );
  }

  sessionCallCount += 1;
  const startedAt = performance.now();
  const endpoint =
    'https://generativelanguage.googleapis.com/v1beta/models/' +
    GEMINI_MODEL +
    ':generateContent';

  console.info(
    `[live-gemini] Request ${sessionCallCount}/${MAX_SESSION_CALLS} -> ${GEMINI_MODEL}`,
  );

  const response = await fetch(endpoint, {
    method: 'POST',
    signal: AbortSignal.timeout(15000),
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': trimmedKey,
    },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
      contents: [{ role: 'user', parts: [{ text: trimmedPrompt }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json',
        thinkingConfig: { thinkingBudget: 0 },
      },
    }),
  });


  if (!response.ok) {
    if (response.status === 503) {
      sessionCallCount = Math.max(0, sessionCallCount - 1);
      throw new Error(
        'Gemini 3.8 Flash free-tier is temporarily busy (503). Retry in a moment or use the instant Offline A2UI Fixtures.',
      );
    }
    const errBody = await response.text();
    throw new Error(`Gemini API ${response.status}: ${errBody.slice(0, 220)}`);
  }

  const payload = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const rawText =
    payload.candidates?.at(0)?.content?.parts?.at(0)?.text ?? '';
  const parsed = JSON.parse(rawText) as unknown;
  const messages = normalizeAndValidateMessages(parsed);
  const latencyMs = Math.round(performance.now() - startedAt);

  console.info(
    `[live-gemini] Compiled ${messages.length} A2UI v1.0 messages in ${latencyMs}ms`,
  );

  return {
    messages,
    latencyMs,
    callsUsed: sessionCallCount,
    maxCalls: MAX_SESSION_CALLS,
  };
}
