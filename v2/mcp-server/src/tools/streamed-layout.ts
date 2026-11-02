/**
 * @file streamed-layout.ts
 * @description Server-Driven UI (SDUI) Graph Validation Engine
 * 
 * PURPOSE & LLM UTILITY:
 * This tool acts as a pre-flight structural shield for nested layout graphs. 
 * Before writing code adjustments or structural modifications to disk, the LLM passes 
 * its flat component node configurations here to verify that the entire interface is 
 * safe, semantic, and coherent.
 * 
 * WHAT IT RETURNS (Happy Path JSON Payload):
 * {
 *   "valid": true,
 *   "errors": [],
 *   "hints": []
 * }
 * The LLM reads the 'valid' flag to confirm layout safety. If 'valid' is false, the 
 * LLM uses the 'errors' text array to point out precise field errors or dead layout elements, 
 * and reads the 'hints' array to safely reconstruct broken parent-child node pointers.
 */
import { fromJsonSchema } from "@modelcontextprotocol/server";
import AjvModule from "ajv";
import * as fs from "node:fs";
import * as path from "node:path";
import { ServerContext } from "../server/create-server.js";
import { StreamedLayoutRequest } from "../types/index.js";

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
      context.debugLog(`Executing generate_streamed_layout loop across node frames. Node count: ${nodes?.length}`);
      
      const v2Root = path.resolve(context.config.paths.components, "../../../");
      const schemaPath = path.join(v2Root, "sdui", "schema", "agnosticui-schema.json");
      context.debugLog(`Resolving Draft-07 JSON Schema absolute target vector: ${schemaPath}`);

      if (!fs.existsSync(schemaPath)) {
        context.debugLog(`CRITICAL: Dynamic validator engine schema template absent.`);
        return {
          content: [{ type: "text", text: `Error: JSON Schema core definitions file missing at target path: ${schemaPath}` }],
          isError: true,
        };
      }

      try {
        const rawSchema = fs.readFileSync(schemaPath, "utf-8");
        const schema = JSON.parse(rawSchema);

        const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
        const validate = ajv.compile(schema);

        const runtimeErrors: string[] = [];
        const developerHints: string[] = [];

        for (const node of nodes) {
          const valid = validate(node);
          if (!valid && validate.errors) {
            validate.errors.forEach((err: any) => {
              runtimeErrors.push(`Node [ID: ${node.id} (${node.component})]: ${err.instancePath || ""} ${err.message}`);
            });
          }
        }

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

        const evaluationFrame = {
          valid: runtimeErrors.length === 0,
          errors_detected_count: runtimeErrors.length,
          errors: runtimeErrors,
          hints: developerHints
        };

        context.debugLog(`Graph processing analysis frame complete. Evaluation matrix generated.`, evaluationFrame);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                valid: evaluationFrame.valid,
                errors: evaluationFrame.errors,
                hints: evaluationFrame.hints,
              }, null, 2),
            },
          ],
        };
      } catch (error) {
        context.debugLog(`Dynamic evaluation anomaly intercept occurred inside AJV compiler execution trace.`);
        return {
          content: [{ type: "text", text: `Validation compiler loop anomaly: ${error instanceof Error ? error.message : String(error)}` }],
          isError: true,
        };
      }
    }
  );
}
