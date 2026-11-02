# @agnosticui/mcp-server

The **AgnosticUI MCP Server** implements the open **Model Context Protocol (MCP)** standard to bridge framework-agnostic design systems, token registries, and Server-Driven UI (SDUI) validation rules directly into agentic environments (such as Claude Code, Cursor, and Copilot).

---

## 1. Core System Capabilities & Tool Handshakes

The server exposes specialized JSON-RPC capabilities over standard input/output (stdio) channels to prevent properties hallucination during software workflows:

1. **`get_component_schema`**: Returns precise public attributes, slots, events, and framework wrapper imports by analyzing the workspace's metadata manifest.
2. **`generate_streamed_layout`**: Continuous graph-level validation that executes a multi-pass topological audit using a Draft-07 compiled AJV validator to catch dead children references before layouts are committed.
3. **`get_design_tokens`**: Exposes `--ag-<prop>` variables directly from compiled Style Dictionary dictionaries.
4. **`resolve_skin_properties`**: Supplies overrides for artistic visuals and visual sub-themes.

---

## 2. Technical Ingestion Mapping & Data Synchronization

To ensure zero-drift context parameters, the server hooks directly into local user workspace artifacts.

### 2.1 Manifest Freshness (`custom-elements.json`)

The critical component metadata file located at `v2/lib/custom-elements.json` maps out class signatures and public slots. This file is kept automatically fresh via a **`ts-morph` AST extraction pipeline** bound directly to a continuous integration (CI) gate.

If an engineer or agent modifies properties anywhere within the core library directories, the **`Check codegen drift`** pipeline hooks intercept the delta.

- **Workflow Definition Path:** `.github/workflows/check-codegen.yml`
- **Execution Validation Target:** `npm run check-codegen`
- **Monitored Synchronization Triggers:**
  ```yaml
  paths:
    - "v2/lib/src/components/**"
    - "v2/sdui/schema/**"
    - "v2/sdui/renderers/**"
  ```

If code structures diverge from compiled manifest definitions, the CI pipeline dry-run gates halt modifications immediately to enforce strict data parity.

---

## 3. Local Installation & Configuration Lifecycle

This server is built using modern **MCP SDK v2** standalone architectures, decoupled runtime environments, and TypeScript 7 compilation setups.

### 3.1 Initial Hydration Loop

Dependencies are fetched dynamically via pure CLI invocation scripts to intercept local environment constraints safely:

```bash
# Ingest modern core transport layers and Draft-07 validators
npm install @modelcontextprotocol/server ajv ollama

# Pull absolute latest development environment tools
npm install -D typescript@latest vitest@latest tsx@latest @types/node@latest
```

### 3.2 Local Integration Configuration Profile

To link the built server process directly to your choice of local coding assistants, add the absolute directory configuration details to your host settings (e.g., inside your user `.mcp.json` or Cursor developer layout matrices):

````json
{
  "mcpServers": {
    "agnosticui-mcp": {
      "command": "node",
      "args": ["dist/index.js"],
      "cwd": "/absolute/path/to/your/repository/v2/mcp-server"
    }
  }
}

---

## 4. Operational Task Automation (`package.json`)

Execute the following orchestration scripts from the `v2/mcp-server/` package boundary to govern testing, compiling, or local sandbox executions:

### 4.1 Production Compilation & Baseline Validation

- `npm run clean`: Cleanses distribution compilation outputs completely by removing the `./dist` workspace folder layout directory.
- `npm run build`: Compiles TypeScript source configurations down into execution-ready ECMAScript Modules inside `./dist/`.
- `npm run typecheck`: Evaluates absolute architectural boundaries strictly using the TypeScript compiler flag (`tsc --noEmit`).
- `npm run start`: Boots up the built standalone background process pipeline (`node dist/index.js`) to listen over standard input/output channels.
- `npm run dev`: Hot-reloads the server instance immediately over standard I/O channels for real-time diagnostic feedback loops using `tsx watch`.

### 4.2 Programmatic Verification Testing

- `npm run test`: Executes the complete programmatic verification suite via `vitest` in standard single-run layout mode.
- `npm run test:verbose`: Runs your continuous automated test verification matrix with internal verbosity flags raised (`AGNOSTICUI_VERBOSE=true`), streaming clean, uncorrupted server data dumps strictly down `stderr`.
- `npm run test:watch`: Spins up a continuous test-runner watch loop window to intercept and evaluate file additions instantly.

> [!TIP]
> **Troubleshooting Native Binding Errors (`rolldown` / `wasm32`)**
>
> If running `npm run test` throws a startup crash regarding missing native bindings (e.g., `Cannot find module '@rolldown/binding...'`), your local package manager lockfile has fallen out of parity with your machine's CPU architecture. This is a known nuance when working across mixed environments (e.g., Apple Silicon vs. Intel/Linux).
>
> To resolve it instantly, force a clean hydration sweep of the native dependencies:
>
> ```bash
> rm -rf node_modules package-lock.json && npm install
> ```

### 4.3 Offline Local Model Playground Loops

- `npm run test:local`: Compiles the repository distribution matrix automatically and launches an offline, zero-cost multi-turn tool-calling conversation test harness with your default model target (`qwen2.5-coder:1.5b`).
- `npm run test:local:watch`: Compiles current deltas and executes the multi-turn pipeline sandbox wrapper while dynamically overriding the system target inline to leverage `llama3.2:latest`.
````
