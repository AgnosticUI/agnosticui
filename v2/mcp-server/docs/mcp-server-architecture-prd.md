# PRODUCT REQUIREMENTS DOCUMENT (PRD)

Location: `v2/mcp-server/docs/mcp-server-architecture-prd.md`

## AgnosticUI Model Context Protocol (MCP) Server

**Document Version:** 1.0.0  
**Status:** Approved / Specification Phase

---

## PREREQUISITE CONTEXT BOOTSTRAPPING PROTOCOL (LLM INSTRUCTION)

> **CRITICAL INSTRUCTION FOR THE AI ASSISTANT / LLM:**
> Do not attempt to write code, design boilerplate files, or execute any step of Section 4 upon reading this document for the first time. You lack the structural context of the local workspace.
>
> As your **very first action**, you are required to issue an immediate stop and politely request the user to upload or provide the text contents of the following **four critical repository files** to anchor your syntax, path resolutions, definitions, and types:

1. **`v2/sdui/schema/agnosticui-schema.json`** — Necessary to ingest the exact `anyOf` draft-07 JSON Schema arrays for the validation core tool.
2. **`v2/lib/custom-elements.json`** — Necessary to read the verified custom element manifest layout so you understand module exports and attributes.
3. **`v2/theme-registry/package.json`** — Necessary to understand the current compilation behaviors and layout outputs of the Style Dictionary build steps.
4. **`tree.txt` (or the root workspace folder layout diagram)** — Crucial to verify relative path resolution distances (e.g., matching parent or sibling paths such as `../skins/` or `../lib/`) across isolated package boundaries.

_Note for the user: If you need to generate a fresh `tree.txt`, execute the following command from your repository root before uploading: `$ tree -L 3 -I node_modules -I dist -I graphics -I *.tgz v2/ > tree.txt`_

> **Do not skip this step. Halt processing and wait for these file inputs before proceeding to any optimization tasks.**

---

## 1. Executive Summary & Operational Architecture

### 1.1 Objective & Vision

The **AgnosticUI MCP Server** (`mcp-server-agnosticui`) bridges the gap between static framework-agnostic design artifacts and real-time agentic software workflows. This server implements the open **Model Context Protocol (MCP)** standard to turn AgnosticUI’s token registers, schema-driven layout definitions, and Lit component blueprints into an interactive context runtime layer.

By exposing these systems directly to agentic environments (such as Claude Code, Cursor, and Copilot), the model moves away from blind guessing and API hallucinations. Instead, it gains the ability to dynamically look up props, inject token-accurate CSS properties (`--ag-<prop>`), and validate flat server-driven UI graphs before writing a single line of application code to the user's workspace.

### 1.2 System Topology

The server operates as a standalone Node.js/TypeScript background process executing over standard input/output (stdio) channels, interacting natively with host applications (AI Coding Assistants) and the local workspace environment using JSON-RPC communication envelopes.

```text
┌──────────────────────────────┐
│ AI Assistant / Coding Host   │
│ (Claude Code, Cursor, etc.)  │
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
                                       │ (Local I/O Access)
                                       ▼
┌────────────────────────────────────────────────────────────────────────┐
│ LOCAL USER WORKSPACE                                                   │
│ │                                                                      │
│ ├── agnosticui.config.json ├── src/components/ag/                      │
│ └── theme-registry/tokens/ └── sdui/schema/                            │
└────────────────────────────────────────────────────────────────────────┘
```

### 1.3 Core Operational Architecture & Lifecycles

The server governs three structural lifecycles during an agentic session:

**Lifecycle: Handshake & Configuration Discovery**

```text
┌────────────────────────┐                 ┌────────────────────────┐
│   Host AI Assistant    │                 │  AgnosticUI MCP Server │
└───────────┬────────────┘                 └───────────┬────────────┘
            │                                          │
            │  1. Spawn Server Process (stdio)         │
            ├──────────────────────────────────────>   │
            │                                          │
            │  2. JSON-RPC 'initialize' Handshake      │
            │<──────────────────────────────────────   │
            │                                          │
            │  3. Scanning target process.cwd()        │
            │       Is 'agnosticui.config.json' there? │
            │                                          │
            │       ├── [YES]: Map Paths & Framework   │
            │       └── [NO]: Throw Error -32603       │
            │           ("run npx agnosticui-cli init")│
            │                                          │
```

1. **Handshake:** The host agent spawns the server process and executes the `initialize` handshake, trading protocol version constraints and capabilities.
2. **Configuration Discovery:** The server scans the target workspace for an `agnosticui.config.json` profile. If present, it maps local framework targets (React, Vue, Lit) and absolute paths to component target directories.
3. **Token Bootstrapping:** The server reads the compiled Style Dictionary outputs (`dist/tokens.json`) to stage valid token registers into internal memory caches for fast, zero-latency tool response windows.

##### Error Strategy

**Lifecycle: Token Cache Bootstrapping**

```text
┌────────────────────────┐              ┌────────────────────────┐
│  theme-registry/dist/  │              │  Server Memory Cache   │
└───────────┬────────────┘              └───────────┬────────────┘
            │                                       │
            │  1. Scan for compiled 'tokens.json'   │
            ├──────────────────────────────────────>│
            │                                       │
            │       ├── [FOUND]: Stage primitives into zero-latency RAM
            │       │   (colors, sizes, motion, shadows)
            │       │
            │       └── [MISSING]: Throw Error instructively
            │           ("run `npm run build` inside theme-registry")
```

If the server fails to discover `agnosticui.config.json` or the compiled Style Dictionary outputs (`dist/tokens.json`), it means the project has not completed the prerequisite initialization steps. Rather than crashing silently, the server stops the transaction and raises a highly instructive JSON-RPC error block.

• **Missing `agnosticui.config.json`:** The server returns protocol error code -32603 (Internal Error) with the explicit prompt:"AgnosticUI Configuration Error: `agnosticui.config.json` not found. Please initialize your workspace environment by running: npx agnosticui-cli init."

• **Missing `dist/tokens.json`:** The server proceeds but flags tool degradation, instructing the developer or agent:"AgnosticUI Token Error: Style Dictionary compilation output missing. Please generate your token assets by running: `npm run build` inside your theme-registry package boundary."

#### B. Component Schema Resolution Lifecycle

**Lifecycle: Component Schema Resolution Lifecycle**

```text
┌────────────────────────┐              ┌────────────────────────┐
│   Host AI Assistant    │              │  get_component_schema  │
└───────────┬────────────┘              └───────────┬────────────┘
            │                                       │
            │  1. Call get_component_schema(name)   │
            ├──────────────────────────────────────>│
            │                                       │ 2. Parse source AST inside
            │                                       │    'custom-elements.json'
            │                                       │    extract slots & exports
            │                                       │
            │  3. Emit structured JSON props record │
            │<──────────────────────────────────────┤
            │  (Enforces spread rules if React)     │
            │                                       │
```

1. **Dynamic Tool Query:** When an agent attempts to scaffold or refactor an interface element, it calls `get_component_schema(component_name)`.
2. **AST Parsing:** The server reads the verified `custom-elements.json` or local template manifest files, extracting public slots, observed attributes, CSS properties, and framework-specific wrapper APIs.
3. **Payload Delivery:** The server wraps the metadata in a strict MCP text content envelope, ensuring the agent uses exact parameter types and respects internal attributes (e.g., `noUndefinedProps` boundaries) instead of hallucinating properties.

#### C. Schema-Driven UI (SDUI) Generation Lifecycle

**Lifecycle: Schema-Driven UI (SDUI) Generation**

```text
┌────────────────────────┐              ┌────────────────────────┐
│   Host AI Assistant    │              │ generate_streamed_layout│
└───────────┬────────────┘              └───────────┬────────────┘
            │                                       │
            │  1. Pass flat array graph (AgNode[])  │
            ├──────────────────────────────────────>│
            │                                       │ 2. Compile Draft-07 validator
            │                                       │    via 'agnosticui-schema.json'
            │                                       │
            │                                       │ 3. PASS 1: Validate node fields
            │                                       │ 4. PASS 2: Detect dead children
            │                                       │
            │  5. Return valid: boolean + hints []  │
            │<──────────────────────────────────────┤
```

1. **Intent Extraction:** The agent translates user goals into flat node structures and issues a `generate_streamed_layout` payload.
2. **Schema Compilation:** The server passes the payload through an isolated `AJV` validation block explicitly configured to parse Draft-07 rules against `agnosticui-schema.json`.
3. **AST Transformation:** If valid, the engine computes component trees, resolving design tokens and validating tree topologies against structural layout guidelines, then responds with structural nodes ready for consumption by local renderer layers.

---

## 2. Comprehensive MCP Tool Planning Specifications

The operational surface area is strictly limited to four core capabilities. These tools translate code contracts, schema integrity, tokens, and skins into machine-interpretable primitives.

### 2.1 Tool 1: `get_component_schema`

- **Functional Intent:** Returns precise public attributes, slots, events, and framework wrapper imports for any component in the registry. It eliminates hallucinated component props by checking constraints natively against your `custom-elements.json` manifest.
- **Input Schema Requirements:** Expects a single required parameter `component_name` parsed as a string literal.
- **Operational Execution Logic:**
  1. Intercepts the request and references the `modules` block inside the cached `custom-elements.json`.
  2. Maps the structural properties, attribute enums, and underlying default constraints.
  3. Formats custom parameter metadata flagging properties requiring explicit conditional spread guardrails (`noUndefinedProps`) to prevent attribute removal inside React runtime targets.
  4. Builds the correct framework-specific import statement based on the project's active configuration (e.g., `ReactAgInput` vs. `VueInput`).
- **Response Payload Structure:** Emits a clean JSON structure itemizing `import_patterns`, valid attributes list, allowed type string enums, and explicit `noUndefinedProps` attribute constraints.

### 2.2 Tool 2: `generate_streamed_layout`

- **Functional Intent:** Performs continuous graph-level validation checks on incoming flat arrays (`AgNode[]`) generated by the model before they get piped to local files.
- **Input Schema Requirements:** Expects an array of nodes containing standard structural objects with at least an `id` and a `component` discriminator.
- **Operational Execution Logic:**
  1. Instantiates the `AJV` compiler using an explicit Draft-07 verification wrapper against your source `agnosticui-schema.json`.
  2. Runs an initial pass to verify single-node property constraints and strict fields (rejecting undocumented parameters via `additionalProperties: false`).
  3. Executes a second topological validation pass matching the flat array ID-ref layout model. It verifies that every entry listed inside container `children` strings accurately resolves to a sibling node present in the list, preventing dead child references.
- **Response Payload Structure:** Emits a Boolean `valid` marker alongside a highly descriptive `errors` array tracking node violations and actionable developer `hints` if the validation loop fails.

### 2.3 Tool 2.3: `get_design_tokens`

- **Functional Intent:** Exposes `--ag-<prop>` naming parameters directly from your Style Dictionary definitions, guaranteeing that models apply real theme tokens instead of guessing CSS hex colors or pixel variables.
- **Input Schema Requirements:** Expects a category selector mapping strictly to recognized token structures (e.g., `colors`, `sizes`, `radii`, `motion`, `shadow`, `focus`, `z-index`).
- **Operational Execution Logic:**
  1. Intersects the chosen target with the compiled nested dictionary output at `dist/tokens.json`.
  2. Parses structural custom properties and maps token parameters to their output values.
  3. Caches values in a localized category map.
- **Response Payload Structure:** Returns an object mapping the functional design tokens directly to their underlying CSS custom properties.

### 2.4 Tool 4: `resolve_skin_properties`

- **Functional Intent:** Supplies target token declarations for specialized stylistic themes found within your `skins/` workspace (e.g., cyberpunk, retro-brutalist, glassmorphism).
- **Input Schema Requirements:** Expects a `skin_name` string matched with a `theme_mode` selector tracking light or dark variations.
- **Operational Execution Logic:**
  1. Intersects the chosen theme target with options defined across the `v2/skins/` layout directories.
  2. Pulls explicit CSS variable overrides and structural properties out of `skin.css` and `skin-dark.css`.
  3. Exposes the custom component modifications so the model can construct layouts tailored to that specific art direction.
- **Response Payload Structure:** Returns an object mapping structural web component tags to their exact skin variable rules and structural appearance variations.

---

## 3. Testing Strategy & Continuous Integration (CI) Alignment

To guarantee protocol stability and prevent architectural drift, the `mcp-server` workspace implements a strict automated validation strategy. This layer hooks directly into AgnosticUI's existing mock datasets and validation mechanisms.

### 3.1 Architectural Test Matrix

The testing harness will split testing concerns into two distinct domains inside `v2/mcp-server/test/`:

#### A. Unit & Protocol Schema Validation

- **Target:** Testing structural JSON-RPC packet inputs and individual tool tool-call definitions.
- **Parity Controls:** Utilizes `vitest` to verify that tool schemas generated dynamically by the server match the Zod validation objects precisely.
- **Test Criteria:** Enforces that invalid arguments sent to any tool (such as an unknown category in `get_design_tokens`) immediately fail on the client side with type-error records before hitting internal application layers.

#### B. Graph Parity & Fixture Bank Integration

- **Target:** Testing the end-to-end operational processing lifecycle of `generate_streamed_layout`.
- **Parity Controls:** Rather than mocking fake UI structures, the test runner imports the absolute source files located at `v2/sdui/demo/src/fixtures/index.ts` (`fixtureBank`).
- **Test Criteria:** Asserts that passing any of the 16 stable production workflow types (e.g., login form, contact form) to the server's validation tool resolves with a positive `valid: true` response payload.

### 3.2 Automated CI Gate Integrations

The server's lifecycle metrics are bound directly to your existing GitHub Actions workflows via two pipeline extensions:

```text
[GitHub Actions Trigger]
     │
     ├──► Workflows: check-codegen.yml / validate-fixtures.yml
     │
     ├──► Pipeline Phase 1: Dry-Run Codegen Verification
     │    └── Run: npm run check-codegen (Verifies schema.ts / custom-elements.json stability)
     │
     └──► Pipeline Phase 2: New MCP Server Suite Execution
          └── Run: npm test --prefix v2/mcp-server (Executes Vitest over the stdio packet handlers)
```

#### Gate 1: Codegen Synchronization Verification

- **Workflow Hook:** `.github/workflows/check-codegen.yml`
- **Dependency Block:** Triggers automatically on any modifications to `v2/lib/src/components/**` or `v2/sdui/schema/**`.
- **Execution Strategy:** Because `get_component_schema` directly ingests the `custom-elements.json` file generated by your `ts-morph` pipeline, the server depends on zero-drift code generation. The CI gate verifies that the underlying metadata files are completely up-to-date before running server test scripts.

#### Gate 2: Protocol Integrity Verification

- **Workflow Hook:** `.github/workflows/validate-fixtures.yml`
- **Execution Strategy:** Appends a workspace test script execution loop: `npm test --prefix v2/mcp-server`. This ensures any new component configurations or schema tightening added to the core library does not break the server's protocol response contracts. If a response structure breaks a fixture contract, the build halts immediately.

---

## 4. Comprehensive Step-by-Step Implementation Plan (Cookbook Model)

This section maps out the micro-phased instantiation sequence for the AgnosticUI MCP Server workspace layer. Each step is treated as an isolated checkpoint, allowing the developer to verify structural and execution boundaries before proceeding to the next layer. All TypeScript structures must align explicitly with the Tier-1 open-source standard libraries and transport rules defined in the Official Model Context Protocol SDKs Matrix.

### Phase 4.1: Workspace Blueprint & Compilation Handshake

#### Step 1: Package Identity & Dependency Hydration

- **Goal:** Instantiate isolated package workspace boundaries inside the core `v2/` hierarchy without causing dependency conflicts across legacy packages.
- **Action Strategy:**
  - Create the target server directory at `v2/mcp-server/`.
  - Scaffold a modern Node.js initialization document (`package.json`) explicitly defining the module environment format as pure ECMAScript Modules (`"type": "module"`).
  - Target the corporate scope nomenclature `@agnosticui/mcp-server`.
  - Bind development and execution scripts to align with typical monorepo lifecycles (`build`, `start`, `dev`).
- **Dependency Specification Baseline:**
  - _Production:_ Bind the official Tier-1 `@modelcontextprotocol/sdk` framework layer as detailed in the Official Client/Server Lifecycle Setup Guide alongside high-performance Draft-07 compliant `ajv` structural validators.
  - _Development:_ Inject strict typescript processors alongside standard `@types/node` definition arrays to guarantee compiler parsing stability.
- **Execution Directives:**
  - Execute localized dependency synchronization commands inside the newly isolated directory: `npm install`
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Ask the developer to execute a structural dry-run verification. Have them share any path duplication anomalies or workspace dependency hoist errors generated inside the monorepo lockfile.
  - _Interactive Prompt:_ "STOP: Have you successfully generated the package file and resolved the node dependency graph without workspace lockfile collision errors?"

#### Step 2: TypeScript Compiler Configuration & Module Boundaries

- **Goal:** Configure compilation guardrails that respect the asynchronous standard input/output stream targets used by the Model Context Protocol.
- **Action Strategy:**
  - Scaffold a strict compiler parameter file (`tsconfig.json`) inside the server subdirectory root.
  - Force the target output array to compile under modern Node ECMAScript parameters (`"target": "ES2022"`, `"module": "NodeNext"`).
  - Explicitly map path resolution rules to parse imports via standard system rules (`"moduleResolution": "NodeNext"`).
  - Enforce global strict compilation safety rules (`"strict": true`, `"forceConsistentCasingInFileNames": true`).
- **Execution Directives:**
  - Initialize code structure directories by mapping out the secondary file tree: `mkdir -p src/tools`
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Have the user run a local baseline validation sweep using the TypeScript compiler flag (`npx tsc --noEmit`) to verify that the newly established configuration file coordinates flawlessly with the parent monorepo configurations.
  - _Interactive Prompt:_ "STOP: Does running the type checker loop return clean, error-free diagnostics against the initialization layout?"

### Phase 4.2: Infrastructure Scaffolding & Dynamic Discovery

#### Step 3: Global System Architecture Type Systems

- **Goal:** Instantiate core structural types to prevent data format confusion across the MCP tools.
- **Action Strategy:**
  - Create the global type boundaries file at `v2/mcp-server/src/types.ts`.
  - Map explicit definitions for the workspace profile schema containing the target framework strings (`"react"`, `"vue"`, or `"lit"`) and path strings (`paths.components`).
  - Outline standard flat structural node schemas (`AgNode`) ensuring that required fields (`id`, `component`) are typed strictly as strings.
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Request that the developer execute a structural type validation step to confirm the model definitions explicitly match the structural nodes defined in your downstream JSON schema.
  - _Interactive Prompt:_ "STOP: Are the architectural types locked down and synchronized with the structure requirements outlined in Phase 1?"

#### Step 4: Core Server Engine & JSON-RPC Lifecycle Registration

- **Goal:** Boot up the primary server transport layer and establish fallback directory scanning sweeps for local configuration files.
- **Action Strategy:**
  - Create the main process orchestration file at `v2/mcp-server/src/index.ts`.
  - Instantiate a clean Server instance using the target identifier parameters (`mcp-server-agnosticui`) following the official MCP Server Conceptual Architecture.
  - Implement a graceful cascading search routine to search for `agnosticui.config.json` profiles, checking `process.cwd()` before ascending to investigate parent sibling directory targets.
  - Connect the running process execution stream to the standard initialization transport pipeline using the `StdioServerTransport` layer as outlined in the Official MCP stdio Transport Specification.
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Instruct the developer to execute a localized compilation command loop (`npm run build`) to ensure the server bootstrap file compiles without module type export errors.
  - _Interactive Prompt:_ "STOP: Does the index orchestration block compile smoothly into the local output distribution directory?"

### Phase 4.3: Granular Tool Execution Handshakes

#### Step 5: `get_component_schema` Integration Pattern Tooling

- **Goal:** Wire up the first tool endpoint to resolve public slot definitions and export patterns for individual elements.
- **Action Strategy:**
  - Create the tool engine at `v2/mcp-server/src/tools/componentSchema.ts`.
  - Outline safe lookups that read the absolute manifest paths (`v2/lib/custom-elements.json`).
  - Formulate string matching mechanisms that inspect the manifest's modules block to find component entries matching the client input parameters.
  - Build logic that injects custom, framework-accurate dependency injection layouts based on the current active configuration profile (e.g. mapping `AgInput` to `ReactInput` imports), adhering strictly to the schema structure mandates outlined in the Official MCP Tools Protocol Schema Reference.
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Request that the developer inspect how their active workspace project generates its component signatures within the custom elements layout file.
  - _Interactive Prompt:_ "STOP: Is the file format parsing correctly, and does it recognize component signatures like VueAccordion or ReactInput cleanly?"

#### Step 6: `generate_streamed_layout` Graph Validation Engine

- **Goal:** Wire up the schema validation tool endpoint using structural schema graphs compiled through the isolated compiler.
- **Action Strategy:**
  - Create the layout engine file at `v2/mcp-server/src/tools/streamedLayout.ts`.
  - Feed the local workspace asset definitions (`v2/sdui/schema/agnosticui-schema.json`) into an isolated Ajv execution block.
  - Design a multi-pass validation loop: Pass 1 executes schema property matching loops against each single node; Pass 2 inspects container properties (`children`) to catch dead reference pointers, ensuring that wrapped elements match the properties mapping logic loops across downstream sibling nodes.
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Confirm that the validation processing tool catches format errors by reviewing the schema file constraints against a standard input example.
  - _Interactive Prompt:_ "STOP: Is the validation engine successfully catching data anomalies and dead children nodes when running a structural check loop?"

#### Step 7: `get_design_tokens` Parameter Dictionary Mapping

- **Goal:** Establish a tool boundary that maps abstract component skin properties directly to real theme tokens.
- **Action Strategy:**
  - Create the token resolution tool at `v2/mcp-server/src/tools/designTokens.ts`.
  - Establish a dual-path lookup fallbacks routine: it checks the primary Style Dictionary compilation outputs (`v2/theme-registry/dist/tokens.json`) before falling back to individual token configuration files if the project hasn't been built yet.
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Ensure the system safely pulls styling properties (like colors or sizes) directly from the selected token sub-files.
  - _Interactive Prompt:_ "STOP: Does the category lookup route locate your design tokens and translate them into usable custom property names?"

#### Step 8: `resolve_skin_properties` Theme Sheet Parser

- **Goal:** Formulate the final tool endpoint to extract custom modifications from stylistic visual skins.
- **Action Strategy:**
  - Create the skin file parser at `v2/mcp-server/src/tools/skinProperties.ts`.
  - Build path mapping handlers that look into individual variation directories under `v2/skins/`.
  - Design a light, high-speed string scanner that parses custom property override definitions out of native `skin.css` and `skin-dark.css` documents.
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Ask the developer to execute a global compile command loop across all newly generated files. Validate that the runtime outputs match all execution guidelines established in your Testing Strategy.
  - _Interactive Prompt:_ "STOP: Do all four tool handler modules compile perfectly into your target distribution folder, and are they ready for integrated automation tests?"

### Phase 4.4: Local IDE Environment Hook (Handshake Execution)

#### Step 9: Live IDE Agent Environment Integration

- **Goal:** Wire up the compiled background server directly into local AI coding tools (Claude Code, Cursor, or Copilot) to confirm zero-latency communication over standard I/O channels.
- **Action Strategy:**
  - Configure the host assistant configuration file (e.g. updating the local `.mcp.json` or global developer settings profiles).
  - Define the execution runtime target command path pointing to the absolute path of the built distribution folder or link it using the server binary mapping script (`node v2/mcp-server/dist/index.js`).
- **Debugging Reference Architecture:**
  - Utilize the protocol diagnostics suites detailed in the Official Model Context Protocol Inspector & Debugging Suite to run validation passes on initialization packets and prevent transport hang problems.
- **🛑 LLM Checkpoint & Validation Gate:**
  - _Verification Request:_ Have the user start up a clean coding terminal assistant session. Execute a standard tool discovery check loop (`mcp list-tools`) to confirm that all four tool capabilities appear on the host client.
  - _Interactive Prompt:_ "FINAL CHECKPOINT: Has your host assistant successfully established a standard JSON-RPC handshake connection over stdio, and does it list all four active AgnosticUI tools?"

---

## Appendix: Context Discovery & Technical Input Matrix

To prevent the Model Context Protocol server from processing arbitrary or detached assets, it enforces a strict workspace scanning and ingestion contract. This appendix establishes the exact local paths, file names, configuration keys, and fallback hooks the server traverses to build its internal tool-cache memory registers.

### A.1 Workspace Discovery Sequence

When the host assistant establishes a JSON-RPC session over standard input/output channels, the server initializes an active workspace discovery loop. This process strictly flows through the following three resolution tiers:

```text
[MCP Initialization Handshake]
              │
              ▼
      [Tier 1: Root Scan] ──────► Locate ./agnosticui.config.json
              │
         (If Missing)
              ▼
   [Tier 2: Sibling Check] ──► Locate ../agnosticui.config.json (v2/ Workspace Sibling)
              │
         (If Missing)
              ▼
 [Tier 3: Environment Fail] ─► Halt Initialization; Throw Protocol Error Code -32603
```

1. **Root Directory Scanning (Tier 1):** The server checks the immediate working directory (`process.cwd()`) for the presence of an `agnosticui.config.json` profile.
2. **Workspace Sibling Discovery (Tier 2):** If executed inside a nested subdirectory (e.g., executing manually from `v2/mcp-server/`), the server ascends one hierarchy level to locate the parent or sibling configuration matrix.
3. **Graceful Fail-Safe (Tier 3):** If no valid configuration file is discovered after traversing tiers 1 and 2, the server halts initialization and returns an MCP protocol execution error code (`-32603: Internal Error`), instructing the client to run `npx agnosticui-cli init` to bootstrap the workspace environment.

### A.2 Path Resolution Mapping Matrix

Once the workspace configuration profile is successfully parsed, the server dynamically binds to five primary repository targets to feed the active tool endpoints.

| Target Data Layer           | Target Location Path                    | Consuming Tool Endpoint    | Operational Parsing Logic                                                                                                                         |
| :-------------------------- | :-------------------------------------- | :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Workspace Configuration** | `agnosticui.config.json`                | Core Server Lifecycle      | Evaluates project parameters: framework targets (React, Vue, Lit), package version, and absolute source directory pointers (`paths.components`).  |
| **Component Signatures**    | `v2/lib/custom-elements.json`           | `get_component_schema`     | Iterates over the `modules` array to parse component names, underlying observed properties, explicit slots, and framework exports.                |
| **SDUI JSON Schema**        | `v2/sdui/schema/agnosticui-schema.json` | `generate_streamed_layout` | Compiles this draft-07 file directly into the `ajv` engine instance to handle high-speed structure validation loops.                              |
| **Global Design Tokens**    | `v2/theme-registry/dist/tokens.json`    | `get_design_tokens`        | Parses Style Dictionary's generated output array to expose valid color primitives, sizes, radii, shadows, and motion sheets.                      |
| **Theme Skin Sheets**       | `v2/skins/`                             | `resolve_skin_properties`  | Maps individual variant layouts (e.g., cyberpunk, retro-brutalist) by reading structural styles from native `skin.css` and `skin-dark.css` pairs. |

### A.3 Configuration Token Reference Protocol

The server depends heavily on keys set inside the native `agnosticui.config.json` file. Below are the key configuration structures the server maps directly into memory:

- **`framework`:** Explicitly dictates the string import injection behavior used by `get_component_schema`. If the variable resolves to `"react"`, the tool returns native React wrapper imports; if it resolves to `"vue"`, it formats the schema response payload to serve `.vue` template import rules.
- **`paths.components`:** Establishes the folder root path where components reside. The server wraps this property with standard system path resolution functions (`path.resolve()`) to extract clean, relative path targets for the model context layout.
- **`ai.contextPath`:** Tracks and logs previous context files written to the project (e.g., updating `CLAUDE.md` or `.cursor/rules/agnosticui.mdc`), providing a clean synchronization baseline across tool executions.
