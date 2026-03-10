/**
 * M4 — LLM smoke test for the SDUI system prompt + tool definition.
 *
 * Sends the render_ui tool definition from SYSTEM_PROMPT.md to Claude,
 * asks for a simple contact form UI, then validates every returned node
 * against the @agnosticui/schema to confirm no hallucinated props and
 * correct structural output.
 *
 * Usage (live — requires an API key from console.anthropic.com):
 *   ANTHROPIC_API_KEY=sk-... npx tsx m4-llm-test.ts
 *   ANTHROPIC_API_KEY=sk-... npm run m4
 *
 * Note: Claude Pro / Claude Code OAuth credentials do NOT work here.
 * The Anthropic API requires a separate API key (free tier available at
 * console.anthropic.com — no paid plan required for low-volume testing).
 *
 * Usage (dry run — validates a representative expected payload, no network needed):
 *   npx tsx m4-llm-test.ts --dry-run
 *   npm run m4:dry
 */

import { validate } from './src/validate.js';
import type { AgNode } from './src/types.js';

const isDryRun = process.argv.includes('--dry-run');

/** The render_ui tool definition from SYSTEM_PROMPT.md */
const renderUiTool = {
  name: 'render_ui',
  description: 'Emit AgnosticUI component nodes to render a UI. Output only valid nodes from the v1 registry.',
  input_schema: {
    type: 'object' as const,
    properties: {
      nodes: {
        type: 'array',
        description: 'Flat list of AgnosticUI component nodes. Use children arrays to express nesting.',
        items: {
          type: 'object',
          required: ['id', 'component'],
          properties: {
            id:        { type: 'string', description: 'Unique node identifier' },
            component: {
              type: 'string',
              enum: ['AgButton', 'AgCard', 'AgInput', 'AgSelect', 'AgCheckbox', 'AgToggle'],
              description: 'Component type — must be one of the v1 registry values',
            },
            label:        { type: 'string' },
            labelText:    { type: 'string', description: 'AgCheckbox only' },
            variant:      { type: 'string' },
            size:         { type: 'string' },
            type:         { type: 'string' },
            name:         { type: 'string' },
            value:        { type: 'string' },
            placeholder:  { type: 'string' },
            checked:      { type: 'boolean' },
            disabled:     { type: 'boolean' },
            required:     { type: 'boolean' },
            invalid:      { type: 'boolean' },
            errorMessage: { type: 'string' },
            helpText:     { type: 'string' },
            shadow:       { type: 'boolean', description: 'AgCard only' },
            animated:     { type: 'boolean', description: 'AgCard only' },
            stacked:      { type: 'boolean', description: 'AgCard only' },
            rounded:      { type: 'string', description: 'AgCard: sm|md|lg' },
            children:     { type: 'array', items: { type: 'string' } },
            on_click:     { type: 'string', description: 'Action alias string' },
            on_change:    { type: 'string', description: 'Action alias string' },
          },
        },
      },
    },
    required: ['nodes'],
  },
};

const systemPrompt = `You are a UI composer for AgnosticUI.
Output only valid AgnosticUI JSON nodes via the render_ui tool.

Rules:
- component must be one of: AgButton, AgCard, AgInput, AgSelect, AgCheckbox, AgToggle
- Every node requires a unique id string
- Props must match the schema exactly (e.g. variant="primary" for AgButton, not variant="blue")
- on_click and on_change are string action aliases only — NEVER executable code or expressions
- Use children arrays of id strings to express nesting (e.g. buttons inside a card)
- Omit props you don't need — all are optional except id and component`;

const userPrompt = 'Build a contact form with a name field, an email field, a checkbox to agree to terms, and a primary submit button. Wrap everything in a shadowed card.';

/**
 * Representative payload that a correctly-prompted LLM should produce.
 * Used by --dry-run to verify schema validation without a live API call.
 */
const expectedNodes: AgNode[] = [
  { id: 'name-input',    component: 'AgInput',    name: 'name',  label: 'Full Name', type: 'text',  required: true },
  { id: 'email-input',   component: 'AgInput',    name: 'email', label: 'Email',     type: 'email', required: true },
  { id: 'agree-chk',     component: 'AgCheckbox', name: 'agree', labelText: 'I agree to the terms', required: true, on_change: 'TOGGLE_AGREE' },
  { id: 'submit-btn',    component: 'AgButton',   label: 'Submit', variant: 'primary', type: 'submit', on_click: 'SUBMIT_FORM' },
  { id: 'contact-card',  component: 'AgCard',     shadow: true, rounded: 'md',
    children: ['name-input', 'email-input', 'agree-chk', 'submit-btn'] },
];

function printResults(nodes: unknown[], source: string): void {
  console.log(`M4 LLM Smoke Test [${source}]\n` + '='.repeat(50));
  console.log(`Prompt: "${userPrompt}"\n`);
  console.log(`${nodes.length} node(s) to validate:\n`);

  let allValid = true;
  for (const node of nodes) {
    const result = validate(node);
    const anyNode = node as Record<string, unknown>;
    const label = `[${anyNode.id ?? '?'} / ${anyNode.component ?? '?'}]`;

    if (result.success) {
      console.log(`  PASS ${label}`);
    } else {
      console.log(`  FAIL ${label}`);
      for (const err of result.errors) {
        console.log(`       - ${err}`);
      }
      allValid = false;
    }
  }

  console.log('\n' + '='.repeat(50));

  if (allValid && nodes.length > 0) {
    console.log('M4 RESULT: ALL NODES VALID — schema validation confirmed');
  } else if (nodes.length === 0) {
    console.error('M4 RESULT: FAIL — zero nodes returned');
    process.exit(1);
  } else {
    console.error('M4 RESULT: FAIL — one or more nodes failed schema validation');
    process.exit(1);
  }
}

async function runLive(): Promise<void> {
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: systemPrompt,
    tools: [renderUiTool],
    tool_choice: { type: 'any' },
    messages: [{ role: 'user', content: userPrompt }],
  });

  const toolUse = response.content.find(
    (block): block is import('@anthropic-ai/sdk').ToolUseBlock =>
      block.type === 'tool_use' && block.name === 'render_ui',
  );

  if (!toolUse) {
    console.error('FAIL: No render_ui tool call in response');
    process.exit(1);
  }

  const input = toolUse.input as { nodes: unknown[] };
  printResults(input.nodes ?? [], 'live — claude-sonnet-4-6');
}

async function runDryRun(): Promise<void> {
  printResults(expectedNodes, 'dry-run — expected payload');
}

if (isDryRun) {
  runDryRun().catch(err => {
    console.error('Error:', err instanceof Error ? err.message : err);
    process.exit(1);
  });
} else {
  runLive().catch(err => {
    console.error('Error:', err instanceof Error ? err.message : err);
    process.exit(1);
  });
}
