# @agnosticui/mcp-server

The **AgnosticUI MCP Server** implements the open **Model Context Protocol (MCP)** standard to bridge framework-agnostic design systems, token registries, and Server-Driven UI (SDUI) validation rules directly into agentic environments (such as Claude Code, Cursor, and Copilot).

---

## 1. Core System Capabilities & Tool Handshakes

The server exposes specialized JSON-RPC capabilities over standard input/output (stdio) channels to prevent properties hallucination during software workflows:

1. **`get_component_schema`**: Returns precise public attributes, slots, events, and framework wrapper imports by analyzing the workspace's metadata manifest.
2. **`generate_streamed_layout`**: Continuous graph-level validation that executes a multi-pass topological audit using a Draft-07 compiled AJV validator to catch dead children references before layouts are committed.
3. **`get_design_tokens`** _(Pending Phase 4.3)_: Exposes `--ag-<prop>` variables directly from compiled Style Dictionary dictionaries.
4. **`resolve_skin_properties`** _(Pending Phase 4.3)_: Supplies overrides for artistic visuals and visual sub-themes.

---

## 2. Technical Ingestion Mapping & Data Synchronization

To ensure zero-drift context parameters, the server hooks directly into local user workspace artifacts.

### 2.1 Manifest Freshness (`custom-elements.json`)

The critical component metadata file located at `v2/lib/custom-elements.json` maps out class signatures and public slots. This file is kept automatically fresh via a **`ts-morph` AST extraction pipeline** bound directly to a continuous integration (CI) gate.

If an engineer or agent modifies properties anywhere within the core library directories, the **`Check codegen drift`** pipeline hooks intercept the delta.

- **Workflow Definition Path:** `.github/workflows/check-codegen.yml`
- **Monitored Synchronization Triggers:**
  ```yaml
  paths:
    - "v2/lib/src/components/**"
    - "v2/sdui/schema/**"
    - "v2/sdui/renderers/**"
  ```

If code structures diverge from compiled manifest definitions, the CI pipeline dry-run gates halt modifications immediately to enforce strict data parity.

---

## 3. Local Installation & Development Workflow

This server is built using modern **MCP SDK v2** standalone architectures, decoupled runtime environments, and TypeScript 6 compilation setups.

### 3.1 Initial Hydration Loop

Dependencies are fetched dynamically via pure CLI invocation scripts to intercept local environment constraints safely:

```bash
# Ingest modern core transport layers and Draft-07 validators
npm install @modelcontextprotocol/server ajv

# Pull absolute latest development environment tools
npm install -D typescript@latest vitest@latest tsx@latest @types/node@latest
```

### 3.2 Available Target Execution Tasks

Execute scripts from the `v2/mcp-server/` directory:

- `npm run typecheck`: Evaluates absolute boundary targets strictly via `tsc --noEmit`.
- `npm run dev`: Hot-reloads the server instance immediately over standard I/O channels using `tsx watch`.
- `npm run test`: Executes continuous automation test suites via `vitest`.
