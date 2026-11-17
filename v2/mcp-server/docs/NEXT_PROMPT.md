# AgnosticUI MCP Server — Session Handoff Context & Next Steps

## 1. Where We Left Off & Current State

We have implemented and validated all four core tools for the **AgnosticUI MCP Server** inside `v2/mcp-server/`, compliant with **MCP SDK v2** (`@modelcontextprotocol/server`) and **A2UI `v1.0`**:

### Current Verified Capabilities:

1. **`get_component_schema`**: Reads `v2/lib/custom-elements.json` dynamically relative to `agnosticui.config.json` to resolve component parameters, slots, attributes, and framework import paths.
2. **`generate_streamed_layout`**: Validates A2UI `v1.0` wire message streams (`messages`) and flat component adjacency lists (`nodes`) against `v2/a2ui/catalog/agnosticui-catalog.json` (`https://agnosticui.com`), checking protocol version (`"1.0"`), `catalogId`, UAX #31 component IDs, component prop/`@path` conformance, duplicate IDs, dead child pointers, DFS cycles, and `root` reachability.
3. **`get_design_tokens`**: Maps `--ag-*` design variables out of `theme-registry/dist/tokens.json` (with fallback to `theme-registry/tokens/<category>.json`).
4. **`resolve_skin_properties`**: Extracts `--ag-*` CSS custom property overrides from `v2/skins/<skin>/skin.css` or `skin-dark.css`.
5. **Telemetry & Verification Suite**: Safe `stderr` debug logging (`context.debugLog`) and **10/10 passing Vitest integration tests** (`npm test`).

---

## 2. Essential Context Files Checklist

- `v2/mcp-server/package.json` — MCP SDK v2 dependencies, Vitest, and `test:local` scripts.
- `v2/mcp-server/tsconfig.json` — Enforces NodeNext module resolution.
- `v2/mcp-server/agnosticui.config.json` — Local workspace path configuration.
- `v2/mcp-server/src/types/index.ts` — Shared request/wire interfaces (`A2uiWireMessage`, `AgNode`, `StreamedLayoutRequest`).
- `v2/mcp-server/src/index.ts` — Stdio transport entrypoint.
- `v2/mcp-server/src/server/create-server.ts` — Workspace config discovery factory.
- `v2/mcp-server/src/server/register-tools.ts` — Unified tool registration aggregator.
- `v2/mcp-server/src/tools/get-components.ts` — Component metadata scanner.
- `v2/mcp-server/src/tools/streamed-layout.ts` — A2UI `v1.0` pre-flight wire stream & graph validator.
- `v2/mcp-server/src/tools/design-tokens.ts` — Style Dictionary token lookup tool.
- `v2/mcp-server/src/tools/skin-properties.ts` — Skin CSS custom property resolver.
- `v2/mcp-server/tests/mcp-server.test.ts` — 10 unmocked integration test specs.
