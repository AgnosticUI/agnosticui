# Model Context Protocol (MCP) Server

**AgnosticUI MCP Server** is a local workflow context engine that implements the open **Model Context Protocol (MCP)** specification. It bridges framework-agnostic design artifacts, Style Dictionary token registers, and **A2UI `v1.0`** catalog schemas directly into local AI-native coding environments.

By exposing these systems directly over standard input/output channels, an LLM shifts from blind guessing to zero-drift code generation—completely eliminating prop hallucinations and styling drift during software workflows.

::: tip Early access
The MCP Server is new and evolving. The server architecture is stable enough to test and build with locally, but not yet published to npm. Feedback welcome via [GitHub issues](https://github.com).
:::

---

## Exposed Tool Capabilities

The background process provides four core tool capabilities to host AI applications:

| Tool Name                  | Operational Intent                 | What it Returns                                                                                                                                                              |
| -------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `get_component_schema`     | Resolves public element signatures | Precise slots, observed attributes, and framework-appropriate import syntax statements.                                                                                      |
| `generate_streamed_layout` | Pre-flight A2UI `v1.0` validator   | Validates A2UI `v1.0` wire streams (`messages`) and adjacency lists (`nodes`) for `catalogId`, UAX #31 IDs, prop schemas, dead child pointers, cycles, and `root` reachability. |
| `get_design_tokens`        | Style Dictionary primitivization   | Natively resolved nested token objects (colors, spacing sizing grids, radii variables, motion).                                                                              |
| `resolve_skin_properties`  | Artistic theme sheet tracker       | A key-value store mapping explicit custom property variables (`--ag-*`) modified by specialized visual sub-skins.                                                            |

::: tip Local and Private
The server runs entirely on your local machine. Combined with local LLM runners like Ollama, you can execute tool-calling workflows, look up design tokens, and analyze component structures 100% offline with zero external cloud subscriptions.
:::

---

## Architectural Workflow

The background process connects smoothly to host environments or testing scripts using JSON-RPC communication envelopes over standard `stdio` text streams:

```text
┌──────────────────────────────┐
│   Host Local AI Assistant    │
│ (Claude Code, Ollama Harness)│
└──────────────▲───────────────┘
               │ (JSON-RPC over stdio)
               ▼
┌────────────────────────────────────────────────────────────────────────┐
│ AGNOSTICUI MCP SERVER                                                  │
│                                                                        │
│ ┌────────────────────────┐ ┌────────────────────────────┐              │
│ │ Tool Registry          │ │ A2UI v1.0 Schema Validator │              │
│ │ (get_component_schema) │ │ (AJV / agnosticui-catalog) │              │
│ └───────────┬────────────┘ └─────────────┬──────────────┘              │
│             │                            │                             │
│             ▼                            ▼                             │
│ ┌────────────────────────┐ ┌────────────────────────────┐              │
│ │ Token Resolution Core  │ │ Workspace Context Discovery│              │
│ │ (Style Dictionary)     │ │ (agnosticui.config.json)   │              │
│ └────────────────────────┘ └────────────────────────────┘              │
└──────────────────────────────────────▲─────────────────────────────────┘
                                       │ (Local File System I/O)
                                       ▼
┌────────────────────────────────────────────────────────────────────────┐
│ LOCAL USER REPOSITORY WORKSPACE                                        │
│                                                                        │
│ ├── agnosticui.config.json ├── v2/lib/custom-elements.json             │
│ └── theme-registry/dist/   └── v2/a2ui/catalog/agnosticui-catalog.json │
└────────────────────────────────────────────────────────────────────────┘
```
---

## Data Freshness & Synchronization

`generate_streamed_layout` validates incoming A2UI `v1.0` wire streams (`createSurface`, `updateComponents`, `updateDataModel`) and flat component graphs directly against `v2/a2ui/catalog/agnosticui-catalog.json` (`https://agnosticui.com`).

### Manifest & Catalog Synchronization Pipeline

- **`v2/lib/custom-elements.json`**: Captures every public attribute and slot for `get_component_schema`.
- **`v2/a2ui/catalog/agnosticui-catalog.json`**: Generated deterministically via `ts-morph` (`npm run generate` in `v2/a2ui/catalog`) and verified against drift with `npm run check` (`check-codegen.ts`).

---

## Local Development Playground

A localized, offline test harness is bundled inside the server directory to quickly verify tool execution streams using small, lightweight models.

### Task Automation Shorthand Commands

Execute the following automated scripts from the `v2/mcp-server/` directory to manage compiling, testing, or offline conversation evaluation loops:

```bash
# Evaluate TypeScript boundaries strictly without compiling code assets
npm run typecheck

# Run continuous programmatic Vitest integration suites
npm run test
```

### Prerequisites for Local Sandbox Executions

Before running localized tool testing scripts (`npm run test:local`), you must install and start the Ollama service on your local environment:

1. Download the executable bundle directly from [ollama.com](https://ollama.com).
2. Start the desktop client background process.
3. Pre-pull the required models from your terminal layout window using the following commands:
   ```bash
   ollama pull qwen2.5-coder:1.5b
   ollama pull llama3.2:latest
   ```

```bash
# Compile code deltas and launch an offline multi-turn conversation playground with Qwen 1.5B
npm run test:local

# Compile code changes and dynamically run the sandbox loop against Llama 3.2
npm run test:local:watch
```

When you trigger `npm run test:local`, your terminal manages the full tool loop transaction cleanly without internet dependencies:

1. It reads your project's anchor `agnosticui.config.json` profile file.
2. It structures and passes the JSON-Schema parameters to **Ollama**.
3. The compact local model determines which capability it needs, handles markdown block clean-ups, and executes the underlying server code paths to inspect and output your actual design system variables.
