# Model Context Protocol (MCP) Server

**AgnosticUI MCP Server** is a local workflow context engine that implements the open **Model Context Protocol (MCP)** specification. It bridges framework-agnostic design artifacts, Style Dictionary token registers, and Lit components directly into local AI-native coding environments.

By exposing these systems directly over standard input/output channels, an LLM shifts from blind guessing to zero-drift code generation—completely eliminating prop hallucinations and styling drift during software workflows.

::: tip Early access
The MCP Server is new and evolving. The server architecture is stable enough to test and build with locally, but not yet published to npm. Feedback welcome via [GitHub issues](https://github.com/AgnosticUI/agnosticui/issues).
:::

---

## Exposed Tool Capabilities

The background process provides four core tool capabilities to host AI applications:

| Tool Name                  | Operational Intent                 | What it Returns                                                                                                   |
| -------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `get_component_schema`     | Resolves public element signatures | Precise slots, observed attributes, and framework-appropriate import syntax statements.                           |
| `generate_streamed_layout` | Pre-flight SDUI graph validator    | A multi-pass topological audit block exposing structural errors or dangling parent-child reference pointers.      |
| `get_design_tokens`        | Style Dictionary primitivization   | Natively resolved nested token objects (colors, spacing sizing grids, radii variables, motion).                   |
| `resolve_skin_properties`  | Artistic theme sheet tracker       | A key-value store mapping explicit custom property variables (`--ag-*`) modified by specialized visual sub-skins. |

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
│ │ Tool Registry          │ │ Schema Validation Engine   │              │
│ │ (get_component_schema) │ │ (AJV / JSON Schema)        │              │
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
│ │                                                                      │
│ ├── agnosticui.config.json ├── v2/lib/custom-elements.json             │
│ └── theme-registry/dist/   └── v2/skins/                               │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Data Freshness & Synchronization

To guarantee that the server never serves stale properties, the tool endpoints ingest the live project variables directly from your repository workspace root.

### Manifest Synchronization Pipeline

The critical component metadata file located at `v2/lib/custom-elements.json` captures every public attribute and component wrapper restriction. This is automatically kept up-to-date via an AST morphing compilation pipeline tied to a hard automated CI gate check (`npm run check-codegen`), stopping any configuration drift before code gets generated.

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

# Compile code deltas and launch an offline multi-turn conversation playground with Qwen 1.5B
npm run test:local

# Compile code changes and dynamically run the sandbox loop against Llama 3.2
npm run test:local:watch
```

When you trigger `npm run test:local`, your terminal manages the full tool loop transaction cleanly without internet dependencies:

1. It reads your project's anchor `agnosticui.config.json` profile file.
2. It structures and passes the JSON-Schema parameters to **Ollama**.
3. The compact local model determines which capability it needs, handles markdown block clean-ups, and executes the underlying server code paths to inspect and output your actual design system variables.
