/**
 * @file design-tokens.ts
 * @description AgnosticUI Global Design Token Dictionary Resolver
 * 
 * PURPOSE & LLM UTILITY:
 * This tool exposes your project's Style Dictionary variable primitive registries 
 * directly to the model's active environment. When customizing HTML components, creating 
 * utility blocks, or modifying spacing rules, the LLM runs this tool to lookup valid 
 * token categories. This ensures the LLM applies real corporate variables instead of guessing 
 * hex values or pixel widths.
 * 
 * WHAT IT RETURNS (Happy Path JSON Payload):
 * {
 *   "category": "radii",
 *   "tokens": {
 *     "none": "0",
 *     "sm": "0.25rem",
 *     "md": "0.375rem",
 *     "lg": "1rem",
 *     "full": "9999px"
 *   }
 * }
 * The LLM reads the keys within 'tokens' to format perfect, theme-compliant custom css properties 
 * matching the exact target naming structures (e.g., transforming a "md" radius query directly 
 * into `--ag-radius-md`).
 */
import { fromJsonSchema } from "@modelcontextprotocol/server";
import * as fs from "node:fs";
import * as path from "node:path";
import { ServerContext } from "../server/create-server.js";
import { DesignTokensRequest } from "../types/index.js";

export function registerDesignTokensTool(context: ServerContext): void {
  context.server.registerTool(
    "get_design_tokens",
    {
      description: "Exposes --ag-<prop> properties directly from Style Dictionary definitions to guarantee variable accuracy.",
      inputSchema: fromJsonSchema<DesignTokensRequest>({
        type: "object",
        properties: {
          category: {
            type: "string",
            description: "Target token structure category.",
            enum: ["colors", "sizes", "radii", "motion", "shadow", "focus", "z-index"]
          }
        },
        required: ["category"]
      })
    },
    async ({ category }) => {
      context.debugLog(`Executing get_design_tokens category lookup for: "${category}"`);

      const v2Root = path.resolve(context.config.paths.components, "../../../");
      const primaryTokensPath = path.join(v2Root, "theme-registry", "dist", "tokens.json");
      let rawTokens = "";

      if (fs.existsSync(primaryTokensPath)) {
        rawTokens = fs.readFileSync(primaryTokensPath, "utf-8");
      } else {
        const backupPath = path.join(v2Root, "theme-registry", "tokens", `${category}.json`);
        context.debugLog(`Primary tokens.json absent. Falling back to category file: ${backupPath}`);

        if (!fs.existsSync(backupPath)) {
          return {
            content: [{ type: "text", text: `Error: Design token configuration category parameters missing at: ${backupPath}` }],
            isError: true,
          };
        }
        rawTokens = fs.readFileSync(backupPath, "utf-8");
      }

      try {
        const tokensData = JSON.parse(rawTokens);
        const filteredTokens = tokensData[category] || tokensData;

        context.debugLog(`Successfully resolved token primitives for category context.`);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ category, tokens: filteredTokens }, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: `Token dictionary parsing anomaly: ${error instanceof Error ? error.message : String(error)}` }],
          isError: true,
        };
      }
    }
  );
}
