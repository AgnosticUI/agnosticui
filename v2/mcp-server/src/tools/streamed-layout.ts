import { fromJsonSchema } from "@modelcontextprotocol/server";
import AjvModule from "ajv";
import * as fs from "node:fs";
import * as path from "node:path";
import { ServerContext } from "../server/create-server.js";
import { StreamedLayoutRequest } from "../types/index.js";

// Resolve ESM default export compatibility
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

        // Instantiate isolated compiler targeting Draft-07 parity matrices
        const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
        const validate = ajv.compile(schema);

        const runtimeErrors: string[] = [];
        const developerHints: string[] = [];

        // Pass 1: Individual Structural Node Field Auditing
        for (const node of nodes) {
          const valid = validate(node);
          if (!valid && validate.errors) {
            validate.errors.forEach((err: any) => {
              runtimeErrors.push(`Node [ID: ${node.id} (${node.component})]: ${err.instancePath || ""} ${err.message}`);
            });
          }
        }

        // Pass 2: Topological Hierarchy Validation (Checking for Dead References)
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
