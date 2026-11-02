# AgnosticUI MCP Server — Session Handoff Context & Next Steps

## 1. Where We Left Off & Current State

We have successfully scaffolded and validated the core infrastructure for the **AgnosticUI MCP Server** inside `v2/mcp-server/`. The project is fully compliant with the modern, decoupled **MCP SDK v2** (`@modelcontextprotocol/server`) and handles strict NodeNext ECMAScript Module targets with TypeScript 6.

### Current Verified Capabilities:

1. **`get_component_schema`**: Fully functional. Reads `v2/lib/custom-elements.json` dynamically using absolute path mathematics relative to the config anchor point to resolve component parameters, slots, and attributes.
2. **`generate_streamed_layout`**: Fully functional. Integrates an isolated `AJV` Draft-07 validation compiler tracking `v2/sdui/schema/agnosticui-schema.json` to verify field constraints and catch missing child pointers.
3. **Telemetry & Logger**: A safe debug telemetry logger is integrated (`context.debugLog`) that writes purely to `stderr`, completely shielding the stdio JSON-RPC pipeline from corruption. Accessible via `npm run test:verbose`.
4. **Programmatic Verification Suite**: 3 out of 3 unmocked, non-conditional integration tests are passing perfectly via Vitest 5.x.

---

## 2. Essential Context Files Checklist

To restore 100% awareness in a new session, the following files must be referenced or provided:

- **Core Project Profiles:**
  - `v2/mcp-server/package.json` — Tracks the modern SDK v2 dependencies, TS 6 devDeps, and the custom `test:verbose` script hook.
  - `v2/mcp-server/tsconfig.json` — Enforces NodeNext resolutions and isolates ambient Node types.
  - `v2/mcp-server/agnosticui.config.json` — Local testing profile anchoring our relative paths loop.
  - `v2/mcp-server/README.md` — Documents the `check-codegen.yml` CI/CD manifest synchronization gates.
- **Server Codebase:**
  - `v2/mcp-server/src/types/index.ts` — Global system types (Svelte targets dropped).
  - `v2/mcp-server/src/index.ts` — Stdio transport pipeline entrypoint.
  - `v2/mcp-server/src/server/create-server.ts` — Cascading workspace configuration lookup factory.
  - `v2/mcp-server/src/server/register-tools.ts` — Unified registration aggregator.
  - `v2/mcp-server/src/tools/get-components.ts` — Component metadata scanner.
  - `v2/mcp-server/src/tools/streamed-layout.ts` — AJV multi-pass layout validator engine.
  - `v2/mcp-server/tests/mcp-server.test.ts` — Complete unmocked, non-conditional integration test specs.

---

## 3. Strict Next Steps Protocol (For the Incoming Assistant)

1. **Do not write redundant boilerplate.** Read the existing `src/tools/` implementations first to mirror the exact `fromJsonSchema` and `context.debugLog` design patterns.
2. **Implement Step 7 (`get_design_tokens`)**:
   - Create `v2/mcp-server/src/tools/design-tokens.ts`.
   - Map design variables out of `theme-registry/dist/tokens.json`, falling back to `theme-registry/tokens/category.json`.
   - Update the router in `register-tools.ts`.
   - Add a 4th deterministic unit test inside `tests/mcp-server.test.ts` matching the unmocked array content execution patterns.
3. **Implement Step 8 (`resolve_skin_properties`)**:
   - Create `v2/mcp-server/src/tools/skin-properties.ts`.
   - Extract custom variable overrides out of `v2/skins/skin-name/skin.css` or `skin-dark.css`.
