/**
 * @file streamed-layout.ts
 * @description Server-Driven UI (SDUI) Graph Validation Engine
 * 
 * PURPOSE:
 * Provides a high-speed, structural validation gate for nested UI component graphs. 
 * It compiles your project's local Draft-07 'agnosticui-schema.json' via AJV to parse 
 * structural constraints against incoming code generation payloads.
 * 
 * WHY IT'S USEFUL:
 * When agentic assistants stream modifications to complex components, tree hierarchies 
 * can shift or break. This engine executes a multi-pass audit: Pass 1 verifies field-level 
 * properties match your rules, and Pass 2 tracks parent-child topologies to intercept 
 * dangling child reference strings or structural violations before they are written to disk.
 */

import { fromJsonSchema } from "@modelcontextprotocol/server";
import AjvModule from "ajv";
import * as fs from "node:fs";
import * as path from "node:path";
import { ServerContext } from "../server/create-server.js";
import { StreamedLayoutRequest } from "../types/index.js";

// Handle CommonJS default export interoperability for strict NodeNext ESM targets
const Ajv = (AjvModule as any).default || AjvModule;

export function registerStreamedLayoutTool(context: ServerContext): void {
  context.server.registerTool(
    "generate_streamed_layout",
    {
      description: "Performs continuous graph-level validation checks on incoming flat arrays (AgNode[]) using Draft-07 structural layouts.",
      inputSchema: fromJsonSchema<StreamedLayoutRequest>({
        type: "object",
        properties: {
          nodes: {
            type: "array",
            description: "Flat array collection of structural user interface graph nodes to compile.",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                component: { type: "string" },
                children: {
                  type: "array",
                  items: { type: "string" }
                }
              },
              required: ["id", "component"],
              additionalProperties: true
            }
          }
        },
        required: ["nodes"]
      })
    },
    async ({ nodes }) => {
      // 1. Locate the source AgnosticUI flat graph Draft-07 JSON Schema definition
      const schemaPath = path.join(context.workspaceRoot, "sdui", "schema", "agnosticui-schema.json");

      if (!fs.existsSync(schemaPath)) {
        return {
          content: [{ type: "text", text: `Error: JSON Schema core definitions file missing at target path: ${schemaPath}` }],
          isError: true,
        };
      }

      try {
        const rawSchema = fs.readFileSync(schemaPath, "utf-8");
        const schema = JSON.parse(rawSchema);

        // 2. Instantiate and compile an isolated AJV validator targeting Draft-07 rules
        const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
        const validate = ajv.compile(schema);

        const runtimeErrors: string[] = [];
        const developerHints: string[] = [];

        // PASS 1: Field-level constraint audit (Verify individual nodes match schema properties)
        for (const node of nodes) {
          const valid = validate(node);
          if (!valid && validate.errors) {
            validate.errors.forEach((err: any) => {
              runtimeErrors.push(`Node [ID: ${node.id} (${node.component})]: ${err.instancePath || ""} ${err.message}`);
            });
          }
        }

        // PASS 2: Topological relationship audit (Catch dangling child reference pointers)
        const nodeMap = new Map(nodes.map((n) => [n.id, n]));
        for (const node of nodes) {
          if (node.children && Array.isArray(node.children)) {
            for (const childId of node.children) {
              if (!nodeMap.has(childId)) {
                runtimeErrors.push(`Topological Error: Node '${node.id}' references a missing or dead child ID: '${childId}'.`);
                developerHints.push(`Ensure that nested children fields map strictly back to sibling node array elements present in the registry payload.`);
              }
            }
          }
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                valid: runtimeErrors.length === 0,
                errors: runtimeErrors,
                hints: developerHints,
              }, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: `Validation compiler loop anomaly: ${error instanceof Error ? error.message : String(error)}` }],
          isError: true,
        };
      }
    }
  );
}
