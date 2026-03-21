import Anthropic from '@anthropic-ai/sdk';
import type { AgNode } from '@agnosticui/schema';
import { AgNodeSchema } from '@agnosticui/schema';

const MODEL = 'claude-sonnet-4-6';
const MAX_TOKENS = 4096;

/**
 * Extract all complete top-level JSON objects from a string.
 * Uses brace-depth tracking; handles nested objects correctly for
 * typical LLM output (does not handle braces inside string values,
 * which is acceptable for this demo since component props rarely
 * contain literal braces).
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

export async function* streamLlmNodes(
  userPrompt: string,
  systemPrompt: string,
): AsyncGenerator<AgNode> {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('VITE_ANTHROPIC_API_KEY is not set. Copy .env.example to .env and add your key.');

  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });

  let fullText = '';
  let yielded = 0;

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  });

  for await (const event of stream) {
    if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
      fullText += event.delta.text;

      const objects = extractObjects(fullText);
      for (let i = yielded; i < objects.length; i++) {
        try {
          const parsed = JSON.parse(objects[i]);
          const result = AgNodeSchema.safeParse(parsed);
          if (result.success) yield result.data as AgNode;
        } catch { /* skip malformed object */ }
        yielded++;
      }
    }
  }
}
