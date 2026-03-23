import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import type { AgNode } from '@agnosticui/schema';
import { AgNodeSchema } from '@agnosticui/schema';

const ANTHROPIC_MODEL = 'claude-sonnet-4-6';
const MAX_TOKENS = 4096;

/**
 * Strip markdown code fences that small models emit despite instructions.
 * Removes lines like ```json, ```, ``` json etc. so extractObjects sees
 * only the raw JSON content.
 */
function stripCodeFences(text: string): string {
  return text.replace(/^```[a-z]*\n?/gm, '').replace(/^```\s*$/gm, '');
}

/**
 * Extract all complete top-level JSON objects from a string.
 * Uses brace-depth tracking; handles nested objects and quoted strings
 * correctly so braces inside string values are ignored.
 */
function extractObjects(text: string): string[] {
  text = stripCodeFences(text);
  const objects: string[] = [];
  let depth = 0;
  let start = -1;
  let inString = false;
  let escape = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (escape) { escape = false; continue; }
    if (ch === '\\' && inString) { escape = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (inString) continue;

    if (ch === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && start !== -1) {
        objects.push(text.slice(start, i + 1));
        start = -1;
      }
    }
  }

  return objects;
}

/**
 * Recursively flatten a potentially nested node object into an array of
 * flat nodes. Small models often nest objects inside `children` or `items`
 * instead of using ID strings as the schema requires. This extracts all
 * nested nodes depth-first so they can each be validated individually.
 */
function flattenNode(raw: Record<string, unknown>): Record<string, unknown>[] {
  const result: Record<string, unknown>[] = [];
  const childProps = ['children', 'items'];
  const flat: Record<string, unknown> = { ...raw };

  for (const prop of childProps) {
    const arr = raw[prop];
    if (!Array.isArray(arr)) continue;

    const ids: string[] = [];
    for (const item of arr) {
      if (typeof item === 'string') {
        ids.push(item);
      } else if (typeof item === 'object' && item !== null && 'id' in item) {
        const nested = flattenNode(item as Record<string, unknown>);
        result.push(...nested);
        ids.push(String((item as Record<string, unknown>).id));
      }
    }
    flat[prop] = ids;
  }

  result.push(flat);
  return result;
}

function yieldValidNodes(objects: string[], yielded: number, emit: (node: AgNode) => void): number {
  for (let i = yielded; i < objects.length; i++) {
    try {
      const parsed = JSON.parse(objects[i]);
      const candidates = flattenNode(parsed);
      for (const candidate of candidates) {
        const result = AgNodeSchema.safeParse(candidate);
        if (result.success) emit(result.data as AgNode);
      }
    } catch { /* skip malformed object */ }
    yielded++;
  }
  return yielded;
}

async function* streamViaAnthropic(
  userPrompt: string,
  systemPrompt: string,
  signal?: AbortSignal,
): AsyncGenerator<AgNode> {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });

  let fullText = '';
  let yielded = 0;
  const pending: AgNode[] = [];

  const stream = client.messages.stream({
    model: ANTHROPIC_MODEL,
    max_tokens: MAX_TOKENS,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  }, { signal });

  for await (const event of stream) {
    if (signal?.aborted) break;
    if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
      fullText += event.delta.text;
      const objects = extractObjects(fullText);
      yielded = yieldValidNodes(objects, yielded, (node) => pending.push(node));
      while (pending.length > 0) yield pending.shift()!;
    }
  }
}

async function* streamViaOllama(
  userPrompt: string,
  systemPrompt: string,
  signal?: AbortSignal,
): AsyncGenerator<AgNode> {
  const baseURL = import.meta.env.VITE_LOCAL_LLM_BASE_URL ?? 'http://localhost:11434/v1';
  const model = import.meta.env.VITE_LOCAL_LLM_MODEL ?? 'mistral';

  const client = new OpenAI({
    baseURL,
    apiKey: 'ollama', // required by the OpenAI SDK but unused by Ollama/LM Studio
    dangerouslyAllowBrowser: true,
  });

  let fullText = '';
  let yielded = 0;
  const pending: AgNode[] = [];

  console.debug('[llm-stream] connecting to', baseURL, 'model:', model);
  const stream = await client.chat.completions.create({
    model,
    stream: true,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
  }, { signal });

  console.debug('[llm-stream] stream opened, waiting for chunks...');
  let chunkCount = 0;
  for await (const chunk of stream) {
    if (signal?.aborted) break;
    const delta = chunk.choices[0]?.delta?.content ?? '';
    chunkCount++;
    if (chunkCount <= 5 || chunkCount % 20 === 0) {
      console.debug(`[llm-stream] chunk #${chunkCount}:`, JSON.stringify(delta));
    }
    if (!delta) continue;
    fullText += delta;
    const objects = extractObjects(fullText);
    yielded = yieldValidNodes(objects, yielded, (node) => {
      console.debug('[llm-stream] valid node yielded:', node.component, node.id);
      pending.push(node);
    });
    while (pending.length > 0) yield pending.shift()!;
  }
  console.debug('[llm-stream] stream complete. total chunks:', chunkCount, 'fullText length:', fullText.length);
  console.debug('[llm-stream] raw output:\n', fullText);
}

export async function* streamLlmNodes(
  userPrompt: string,
  systemPrompt: string,
  signal?: AbortSignal,
): AsyncGenerator<AgNode> {
  if (import.meta.env.VITE_ANTHROPIC_API_KEY) {
    yield* streamViaAnthropic(userPrompt, systemPrompt, signal);
  } else {
    const baseURL = import.meta.env.VITE_LOCAL_LLM_BASE_URL ?? 'http://localhost:11434/v1';
    const model = import.meta.env.VITE_LOCAL_LLM_MODEL ?? 'mistral';
    if (!import.meta.env.VITE_LOCAL_LLM_BASE_URL) {
      console.info(`[llm-stream] No VITE_ANTHROPIC_API_KEY found. Trying local Ollama at ${baseURL} with model "${model}".`);
    }
    yield* streamViaOllama(userPrompt, systemPrompt, signal);
  }
}
