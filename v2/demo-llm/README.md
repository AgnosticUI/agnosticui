# AgnosticUI SDUI + LLM Demo

A local-only demo that replaces hardcoded fixtures with real Anthropic API streaming. Type a UI description, and watch `AgDynamicRenderer` populate node-by-node as Claude responds.

**Never deployed** — runs on your machine with your own API key.

## Setup

```bash
cp .env.example .env
# Edit .env and paste your Anthropic API key
npm install
npm run dev
```

Then open http://localhost:5173.

## How it works

1. Your prompt + `SYSTEM_PROMPT.md` are sent to `claude-sonnet-4-6` via the Anthropic SDK
2. The response streams as text; `llm-stream.ts` extracts complete JSON objects using brace-depth tracking
3. Each extracted object is validated against `AgNodeSchema` (Zod) and yielded immediately
4. `LlmOutput` appends each valid node to `AgDynamicRenderer` in real time

The node array panel (collapsible, auto-closes after 8s) shows the raw JSON driving the render.

## SYSTEM_PROMPT.md

Edit `SYSTEM_PROMPT.md` to change what components the LLM can use, add new examples, or adjust output format. The file is imported at build time via Vite's `?raw` import.

## Actions

Buttons with `on_click` aliases will trigger a browser `alert` showing the alias name. In a real app you would map those aliases to application logic (navigation, API calls, etc.).
