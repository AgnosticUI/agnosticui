# AgnosticUI SDUI + LLM Demo

A local-only demo that replaces hardcoded fixtures with real LLM streaming. Type a UI description, and watch `AgDynamicRenderer` populate node-by-node as the model responds.

**Never deployed** — runs on your machine only. Two setup options:

---

## Option 1: Anthropic API

```bash
cp .env.example .env
# Uncomment and fill in VITE_ANTHROPIC_API_KEY in .env
npm install
npm run dev
```

Uses `claude-sonnet-4-6`. Requires a paid Anthropic API key.

---

## Option 2: Local LLM via Ollama (free, no API key)

Install [Ollama](https://ollama.com), then pull a model:

```bash
ollama pull mistral
# or: ollama pull llama3, qwen2.5, etc.
```

```bash
cp .env.example .env
# Uncomment VITE_LOCAL_LLM_BASE_URL and VITE_LOCAL_LLM_MODEL in .env
# e.g.: VITE_LOCAL_LLM_BASE_URL=http://localhost:11434/v1
#        VITE_LOCAL_LLM_MODEL=mistral
npm install
npm run dev
```

**LM Studio** works the same way — point `VITE_LOCAL_LLM_BASE_URL` at `http://localhost:1234/v1`.

If neither `VITE_ANTHROPIC_API_KEY` nor a local endpoint is configured, the app logs a warning and attempts `http://localhost:11434/v1` with model `mistral`.

---

## How it works

1. Your prompt + `SYSTEM_PROMPT.md` are sent to the model (Anthropic SDK or OpenAI-compatible client)
2. The response streams as text; `llm-stream.ts` extracts complete JSON objects using brace-depth tracking
3. Each extracted object is validated against `AgNodeSchema` (Zod) and yielded immediately
4. `LlmOutput` appends each valid node to `AgDynamicRenderer` in real time

The node array panel (collapsible, auto-closes after 8s) shows the raw JSON driving the render.

## SYSTEM_PROMPT.md

Edit `SYSTEM_PROMPT.md` to change what components the LLM can use, add new examples, or adjust output format. The file is imported at build time via Vite's `?raw` import.

## Model quality

Models at roughly 7B parameters and above (e.g. `mistral`, `llama3`, `qwen2.5`) follow the schema instructions reliably and produce consistent output. Smaller models may still work but will produce variable results — inconsistent JSON structure, dropped properties, or slower token generation. The demo includes structural post-processing to handle common small-model deviations, but a capable model gives the best experience.

## Actions

Buttons with `on_click` aliases will trigger a browser `alert` showing the alias name. In a real app you would map those aliases to application logic (navigation, API calls, etc.).
