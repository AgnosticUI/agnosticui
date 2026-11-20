# @agnosticui/mcp-server

The **AgnosticUI MCP Server** implements the open **Model Context Protocol (MCP)** standard to bridge framework-agnostic design systems, token registries, and **A2UI `v1.0`** generative UI validation rules directly into agentic environments (such as Claude Code, Cursor, and Copilot).

---

## 1. Core System Capabilities & Tool Handshakes

The server exposes specialized JSON-RPC capabilities over standard input/output (stdio) channels to prevent property hallucinations during software workflows:

1. **`get_component_schema`**: Returns precise public attributes, slots, events, and framework wrapper imports by analyzing the workspace's metadata manifest.
2. **`generate_streamed_layout`**: Pre-flight A2UI `v1.0` wire stream and adjacency-list graph validator backed by `v2/a2ui/catalog/agnosticui-catalog.json` (`https://agnosticui.com/a2ui/v1/catalog.json`). Validates protocol version (`"1.0"`), `catalogId`, UAX #31 component IDs, component props/`@path` bindings, duplicate IDs, dead child pointers, DFS cycles, and `root` reachability.
3. **`get_design_tokens`**: Exposes `--ag-<prop>` variables directly from compiled Style Dictionary dictionaries.
4. **`resolve_skin_properties`**: Supplies overrides for artistic visuals and visual sub-themes.

---

## 2. Technical Ingestion Mapping & Data Synchronization

To ensure zero-drift context parameters, the server hooks directly into local user workspace artifacts.

### 2.1 Manifest & A2UI v1.0 Catalog Freshness

- **`v2/lib/custom-elements.json`**: Maps class signatures and public slots for `get_component_schema`.
- **`v2/a2ui/catalog/agnosticui-catalog.json`**: Generated deterministically via `ts-morph` (`npm run generate` in `v2/a2ui/catalog`) and verified against drift with `npm run check`.
- **Monitored Synchronization Paths:**
  ```yaml
  paths:
    - "v2/lib/src/components/**"
    - "v2/a2ui/catalog/**"
    - "v2/a2ui/renderers/**"
  ```

---

## 3. Local Installation & Configuration Lifecycle

This server is built using modern **MCP SDK v2** standalone architectures, decoupled runtime environments, and TypeScript compilation setups.

### 3.1 Initial Hydration Loop

```bash
# Ingest modern core transport layers and JSON Schema validators
npm install @modelcontextprotocol/server ajv ollama

# Pull development environment tools
npm install -D typescript@latest vitest@latest tsx@latest @types/node@latest
```

### 3.2 Local Integration Configuration Profile

To link the built server process directly to your choice of local coding assistants, add the absolute directory configuration details to your host settings (e.g., inside your user `.mcp.json` or Cursor developer layout):

```json
{
  "mcpServers": {
    "agnosticui-mcp": {
      "command": "node",
      "args": ["dist/index.js"],
      "cwd": "/absolute/path/to/your/repository/v2/mcp-server"
    }
  }
}
```
---

## 4. Operational Task Automation (`package.json`)

Execute the following orchestration scripts from the `v2/mcp-server/` package boundary to govern testing, compiling, or local sandbox executions:

### 4.1 Production Compilation & Baseline Validation

- `npm run clean`: Removes `./dist` build artifacts.
- `npm run build`: Compiles TypeScript source files into ESM modules inside `./dist/`.
- `npm run typecheck`: Type-checks the server with `tsc --noEmit`.
- `npm run start`: Boots the standalone server (`node dist/index.js`) over `stdio`.
- `npm run dev`: Hot-reloads the server over `stdio` using `tsx watch`.

### 4.2 Programmatic Verification Testing

- `npm run test`: Executes the complete Vitest suite in single-run mode.
- `npm run test:verbose`: Runs the Vitest suite with `AGNOSTICUI_VERBOSE=true`, streaming diagnostics to `stderr`.
- `npm run test:watch`: Runs Vitest in continuous watch mode.

> [!TIP]
> **Troubleshooting Native Binding Errors (`rolldown` / `wasm32`)**
>
> If running `npm run test` throws a startup crash regarding missing native bindings (e.g., `Cannot find module '@rolldown/binding...'`), refresh native dependencies for your current CPU architecture:
>
> ```bash
> rm -rf node_modules package-lock.json && npm install
> ```

### 4.3 Offline Local Model Playground Loops

- `npm run test:local`: Compiles `./dist` and launches an offline multi-turn tool-calling test harness with `qwen2.5-coder:1.5b`.
- `npm run test:local:watch`: Compiles current changes and runs the sandbox loop against `llama3.2:latest`.

> [!TIP]
> **Troubleshooting Design Tokens Not Built Locally**
>
> ```shell
> cd ../theme-registry/ && npm run build && cd ../mcp-server && npm run test:local
> ```
