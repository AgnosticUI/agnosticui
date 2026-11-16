/**
 * @file streamed-layout.ts
 * @description A2UI v1.0 Pre-Flight Wire Stream & Adjacency-List Graph Validation Engine
 *
 * PURPOSE & LLM UTILITY:
 * Acts as a pre-flight structural shield for A2UI v1.0 generative UI payloads.
 * Before streaming wire messages to <a2ui-surface> or writing code to disk, the LLM
 * passes either an A2UI v1.0 `messages` stream (`createSurface`, `updateComponents`,
 * `updateDataModel`) or a flat `nodes` component adjacency list here to verify:
 *   1. Protocol envelope (`version: "1.0"`) & resolvable `catalogId` (`https://agnosticui.com/a2ui/v1/catalog.json`)
 *   2. UAX #31 component ID syntax (`^[A-Za-z_][A-Za-z0-9_]*$`, no hyphens)
 *   3. Component prop & `@path` conformance against `v2/a2ui/catalog/agnosticui-catalog.json`
 *   4. Topological integrity: duplicate IDs, missing child pointers, DFS cycles, and `root` reachability
 *
 * WHAT IT RETURNS (Happy Path JSON Payload):
 * {
 *   "valid": true,
 *   "catalogId": "https://agnosticui.com/a2ui/v1/catalog.json",
 *   "componentCount": 4,
 *   "errors": [],
 *   "hints": []
 * }
 */
import { fromJsonSchema } from "@modelcontextprotocol/server";
import AjvModule from "ajv";
import * as fs from "node:fs";
import * as path from "node:path";
import { ServerContext } from "../server/create-server.js";
import { AgNode, StreamedLayoutRequest } from "../types/index.js";

const Ajv = (AjvModule as any).default || AjvModule;

/** Canonical versioned A2UI v1.0 catalog URI for AgnosticUI. */
export const EXPECTED_CATALOG_ID = "https://agnosticui.com/a2ui/v1/catalog.json";

/** UAX #31 identifier regex required by A2UI v1.0 component IDs (letters, digits, underscores only). */
const UAX31_ID_REGEX = /^[A-Za-z_][A-Za-z0-9_]*$/;

/**
 * Shared A2UI v1.0 `common_types.json` definitions referenced by `$ref` inside
 * `v2/a2ui/catalog/agnosticui-catalog.json`.
 */
const COMMON_TYPES_SCHEMA = {
  $id: "common_types.json",
  $defs: {
    PathBinding: {
      type: "object",
      properties: {
        "@path": { type: "string", minLength: 1 },
      },
      required: ["@path"],
      additionalProperties: false,
    },
    DynamicString: {
      anyOf: [
        { type: "string" },
        { $ref: "#/$defs/PathBinding" },
      ],
    },
    DynamicBoolean: {
      anyOf: [
        { type: "boolean" },
        { $ref: "#/$defs/PathBinding" },
      ],
    },
    DynamicNumber: {
      anyOf: [
        { type: "number" },
        { $ref: "#/$defs/PathBinding" },
      ],
    },
    ChildList: {
      type: "array",
      items: { type: "string" },
    },
    Action: {
      type: "object",
      additionalProperties: true,
    },
  },
};

const COMPONENT_ITEM_SCHEMA = {
  type: "object",
  properties: {
    id: { type: "string" },
    component: { type: "string" },
    children: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: ["id", "component"],
  additionalProperties: true,
};

export function registerStreamedLayoutTool(context: ServerContext): void {
  context.server.registerTool(
    "generate_streamed_layout",
    {
      description:
        "Validates A2UI v1.0 wire message streams (`messages`) or flat component adjacency lists (`nodes`) against `v2/a2ui/catalog/agnosticui-catalog.json`, checking protocol version, catalogId, UAX #31 IDs, prop schemas, dead child pointers, cycles, and `root` reachability.",
      inputSchema: fromJsonSchema<StreamedLayoutRequest>({
        type: "object",
        properties: {
          messages: {
            type: "array",
            description:
              "A2UI v1.0 wire message stream (`createSurface`, `updateComponents`, `updateDataModel`).",
            items: {
              type: "object",
              properties: {
                version: { type: "string" },
                createSurface: {
                  type: "object",
                  properties: {
                    surfaceId: { type: "string" },
                    catalogId: { type: "string" },
                  },
                  additionalProperties: true,
                },
                updateComponents: {
                  type: "object",
                  properties: {
                    surfaceId: { type: "string" },
                    components: {
                      type: "array",
                      items: COMPONENT_ITEM_SCHEMA,
                    },
                  },
                  additionalProperties: true,
                },
                updateDataModel: {
                  type: "object",
                  properties: {
                    surfaceId: { type: "string" },
                    path: { type: "string" },
                  },
                  additionalProperties: true,
                },
                deleteSurface: {
                  type: "object",
                  properties: {
                    surfaceId: { type: "string" },
                  },
                  additionalProperties: true,
                },
              },
              additionalProperties: true,
            },
          },
          nodes: {
            type: "array",
            description:
              "Flat array of A2UI v1.0 component definitions (`{ id, component, children?, ...props }`).",
            items: COMPONENT_ITEM_SCHEMA,
          },
        },
      }),
    },
    async ({ messages, nodes }) => {
      context.debugLog(
        `Executing generate_streamed_layout A2UI v1.0 pre-flight validation. Messages: ${messages?.length ?? 0}, Nodes: ${nodes?.length ?? 0}`,
      );

      const v2Root = path.resolve(context.config.paths.components, "../../../");
      const catalogPath = path.join(v2Root, "a2ui", "catalog", "agnosticui-catalog.json");
      context.debugLog(`Resolving A2UI v1.0 catalog schema at: ${catalogPath}`);

      if (!fs.existsSync(catalogPath)) {
        context.debugLog(`CRITICAL: A2UI v1.0 catalog schema missing at ${catalogPath}`);
        return {
          content: [
            {
              type: "text",
              text: `Error: A2UI v1.0 catalog schema file missing at target path: ${catalogPath}`,
            },
          ],
          isError: true,
        };
      }

      try {
        const rawCatalog = fs.readFileSync(catalogPath, "utf-8");
        const catalog = JSON.parse(rawCatalog) as {
          protocolVersion?: string;
          catalogId?: string;
          components?: Record<string, Record<string, unknown>>;
        };

        const catalogComponents = catalog.components ?? {};
        const runtimeErrors: string[] = [];
        const developerHints: string[] = [];
        const collectedNodes: AgNode[] = [];
        const isStreamMode = Array.isArray(messages);

        if (!isStreamMode && !Array.isArray(nodes)) {
          runtimeErrors.push(
            "Input Error: Provide either `messages` (A2UI v1.0 wire stream) or `nodes` (flat component adjacency list).",
          );
        }
        // 1. A2UI v1.0 Wire Envelope & Surface Lifecycle Pass (when `messages` is provided)
        if (isStreamMode) {
          if (messages.length === 0) {
            runtimeErrors.push("Protocol Error: `messages` stream must contain at least one A2UI v1.0 message.");
          }

          const declaredSurfaces = new Set<string>();

          messages.forEach((msg, idx) => {
            if (msg.version !== "1.0") {
              runtimeErrors.push(
                `Protocol Error [message[${idx}]]: Expected "version": "1.0", received ${JSON.stringify(msg.version)}.`,
              );
            }

            if (msg.createSurface) {
              const { surfaceId, catalogId } = msg.createSurface;
              if (!surfaceId || typeof surfaceId !== "string") {
                runtimeErrors.push(`Protocol Error [message[${idx}].createSurface]: Missing valid "surfaceId".`);
              } else {
                declaredSurfaces.add(surfaceId);
              }

              if (catalogId !== EXPECTED_CATALOG_ID) {
                runtimeErrors.push(
                  `Protocol Error [message[${idx}].createSurface]: Invalid catalogId '${catalogId}'. Expected '${EXPECTED_CATALOG_ID}'.`,
                );
                developerHints.push(`Set createSurface.catalogId to "${EXPECTED_CATALOG_ID}".`);
              }
            }

            if (msg.updateComponents) {
              const { surfaceId, components } = msg.updateComponents;
              if (declaredSurfaces.size > 0 && !declaredSurfaces.has(surfaceId)) {
                runtimeErrors.push(
                  `Protocol Error [message[${idx}].updateComponents]: References undeclared surfaceId '${surfaceId}'.`,
                );
              }
              if (!Array.isArray(components)) {
                runtimeErrors.push(
                  `Protocol Error [message[${idx}].updateComponents]: "components" must be an array.`,
                );
              } else {
                collectedNodes.push(...components);
              }
            }

            if (msg.updateDataModel) {
              const { surfaceId } = msg.updateDataModel;
              if (declaredSurfaces.size > 0 && !declaredSurfaces.has(surfaceId)) {
                runtimeErrors.push(
                  `Protocol Error [message[${idx}].updateDataModel]: References undeclared surfaceId '${surfaceId}'.`,
                );
              }
            }
          });
        }

        if (Array.isArray(nodes)) {
          collectedNodes.push(...nodes);
        }

        // 2. Compile Per-Component AJV Validators from `agnosticui-catalog.json`
        const ajv = new Ajv({ allErrors: true, allowUnionTypes: true, strict: false });
        ajv.addSchema(COMMON_TYPES_SCHEMA);
        const compiledValidators = new Map<string, any>();

        for (const [compName, compSchema] of Object.entries(catalogComponents)) {
          compiledValidators.set(compName, ajv.compile(compSchema));
        }

        // 3. UAX #31 ID & Component Schema Conformance Pass
        for (const node of collectedNodes) {
          if (!node.id || !UAX31_ID_REGEX.test(node.id)) {
            const suggested = typeof node.id === "string" ? node.id.replace(/[^A-Za-z0-9_]/g, "_") : "root";
            runtimeErrors.push(
              `UAX #31 ID Error: Component ID '${node.id}' contains invalid characters (hyphens/spaces are forbidden in A2UI v1.0).`,
            );
            developerHints.push(
              `Rename component ID '${node.id}' to '${suggested}' (letters, digits, and underscores only).`,
            );
          }

          const validator = compiledValidators.get(node.component);
          if (!validator) {
            runtimeErrors.push(
              `Catalog Error [ID: ${node.id}]: Unknown component '${node.component}' is not in AgnosticUI A2UI v1.0 catalog.`,
            );
            developerHints.push(
              `Allowed components: ${Object.keys(catalogComponents).join(", ")}.`,
            );
            continue;
          }

          // Catalog component schemas validate `{ component, ...props }` without `id`
          const { id: _omitId, ...componentPayload } = node;
          const isValidProps = validator(componentPayload);
          if (!isValidProps && validator.errors) {
            for (const err of validator.errors) {
              runtimeErrors.push(
                `Schema Error [ID: ${node.id} (${node.component})]: ${err.instancePath || ""} ${err.message}`,
              );
            }
          }
        }

        // 4. Duplicate Component ID Check
        const observedIds = new Set<string>();
        for (const node of collectedNodes) {
          if (node.id) {
            if (observedIds.has(node.id)) {
              runtimeErrors.push(
                `Topological Error: Duplicate component ID detected in A2UI surface graph: '${node.id}'.`,
              );
            }
            observedIds.add(node.id);
          }
        }

        // 5. Topological Reference Pass (Dead / missing child IDs)
        const nodeMap = new Map(collectedNodes.map((n) => [n.id, n]));
        for (const node of collectedNodes) {
          if (Array.isArray(node.children)) {
            for (const childId of node.children) {
              if (!nodeMap.has(childId)) {
                runtimeErrors.push(
                  `Topological Error: Component '${node.id}' references a missing or dead child ID: '${childId}'.`,
                );
                developerHints.push(
                  `Ensure every ID in '${node.id}.children' matches a declared component id in updateComponents.`,
                );
              }
            }
          }
        }

        // 6. Cycle Detection Pass via Depth-First Search (DFS)
        const visiting = new Set<string>();
        const visited = new Set<string>();

        function checkCyclesDfs(nodeId: string): boolean {
          visiting.add(nodeId);
          const current = nodeMap.get(nodeId);

          if (Array.isArray(current?.children)) {
            for (const childId of current.children) {
              if (visiting.has(childId)) {
                runtimeErrors.push(
                  `Topological Error: Cyclic rendering loop detected traversing branch containing component ID: '${childId}'.`,
                );
                return true;
              }
              if (!visited.has(childId) && nodeMap.has(childId)) {
                if (checkCyclesDfs(childId)) return true;
              }
            }
          }

          visiting.delete(nodeId);
          visited.add(nodeId);
          return false;
        }

        for (const node of collectedNodes) {
          if (node.id && !visited.has(node.id)) {
            if (checkCyclesDfs(node.id)) break;
          }
        }

        // 7. Root Reachability Pass (BFS from "root")
        if (collectedNodes.length > 0) {
          if (!nodeMap.has("root")) {
            if (isStreamMode) {
              runtimeErrors.push(
                `Topological Error: A2UI surface stream is missing a required 'root' entry component.`,
              );
              developerHints.push(`Include a top-level layout component with "id": "root".`);
            }
          } else {
            const reachable = new Set<string>();
            const queue: string[] = ["root"];
            while (queue.length > 0) {
              const currentId = queue.shift()!;
              if (reachable.has(currentId)) continue;
              reachable.add(currentId);
              const current = nodeMap.get(currentId);
              if (Array.isArray(current?.children)) {
                for (const childId of current.children) {
                  if (nodeMap.has(childId) && !reachable.has(childId)) {
                    queue.push(childId);
                  }
                }
              }
            }

            for (const node of collectedNodes) {
              if (node.id && !reachable.has(node.id)) {
                runtimeErrors.push(
                  `Topological Error: Orphaned component '${node.id}' (${node.component}) is unreachable from 'root'.`,
                );
                developerHints.push(
                  `Reference '${node.id}' inside a container's "children" array connected to 'root', or remove it.`,
                );
              }
            }
          }
        }

        const uniqueHints = Array.from(new Set(developerHints));
        const evaluationFrame = {
          valid: runtimeErrors.length === 0,
          catalogId: catalog.catalogId ?? EXPECTED_CATALOG_ID,
          componentCount: collectedNodes.length,
          errors: runtimeErrors,
          hints: uniqueHints,
        };

        context.debugLog(
          `A2UI v1.0 pre-flight validation complete. Valid: ${evaluationFrame.valid}, Errors: ${runtimeErrors.length}`,
          evaluationFrame,
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(evaluationFrame, null, 2),
            },
          ],
        };
      } catch (error) {
        context.debugLog(`A2UI v1.0 validation compiler anomaly inside AJV execution trace.`);
        return {
          content: [
            {
              type: "text",
              text: `Validation compiler loop anomaly: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );
}
