import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import type { AgNode } from '@agnosticui/schema';
import { AgNodeSchema } from '@agnosticui/schema';

const ANTHROPIC_MODEL = 'claude-sonnet-4-6';
const MAX_TOKENS = 4096;

/**
 * Extract all complete top-level JSON objects from a string.
 * Uses brace-depth tracking; handles nested objects and quoted strings
 * correctly so braces inside string values are ignored.
 */
function extractObjects(text: string): string[] {
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

function yieldValidNodes(objects: string[], yielded: number, emit: (node: AgNode) => void): number {
  for (let i = yielded; i < objects.length; i++) {
    try {
      const parsed = JSON.parse(objects[i]);
      const result = AgNodeSchema.safeParse(parsed);
      if (result.success) emit(result.data as AgNode);
    } catch { /* skip malformed object */ }
    yielded++;
  }
  return yielded;
}

async function* streamViaAnthropic(
  userPrompt: string,
  systemPrompt: string,
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
  });

  for await (const event of stream) {
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

  const stream = await client.chat.completions.create({
    model,
    stream: true,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
  });

  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content ?? '';
    if (!delta) continue;
    fullText += delta;
    const objects = extractObjects(fullText);
    yielded = yieldValidNodes(objects, yielded, (node) => pending.push(node));
    while (pending.length > 0) yield pending.shift()!;
  }
}

export async function* streamLlmNodes(
  userPrompt: string,
  systemPrompt: string,
): AsyncGenerator<AgNode> {
  if (import.meta.env.VITE_ANTHROPIC_API_KEY) {
    yield* streamViaAnthropic(userPrompt, systemPrompt);
  } else {
    const baseURL = import.meta.env.VITE_LOCAL_LLM_BASE_URL ?? 'http://localhost:11434/v1';
    const model = import.meta.env.VITE_LOCAL_LLM_MODEL ?? 'mistral';
    if (!import.meta.env.VITE_LOCAL_LLM_BASE_URL) {
      console.info(`[llm-stream] No VITE_ANTHROPIC_API_KEY found. Trying local Ollama at ${baseURL} with model "${model}".`);
    }
    yield* streamViaOllama(userPrompt, systemPrompt);
  }
}
