/**
 * @file design-tokens.ts
 * @description AgnosticUI Global Design Token Dictionary Resolver
 * 
 * PURPOSE:
 * Exposes compiled Style Dictionary design tokens directly to the model's environment
 * by tracking explicit properties categories (colors, sizes, radii, motion, shadows, etc.).
 * 
 * WHY IT'S USEFUL:
 * Guarantees that AI code generation tasks map directly to real, theme-accurate 
 * CSS custom properties (--ag-*) instead of guessing hex codes or pixel widths.
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

      // 1. Resolve Style Dictionary path boundaries relative to absolute components directory coordinates
      const v2Root = path.resolve(context.config.paths.components, "../../../");
      const primaryTokensPath = path.join(v2Root, "theme-registry", "dist", "tokens.json");
      let rawTokens = "";

      if (fs.existsSync(primaryTokensPath)) {
        rawTokens = fs.readFileSync(primaryTokensPath, "utf-8");
      } else {
        // 2. Fallback: Parse the source category file directly if compilation task hasn't run
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
        
        // Style Dictionary structures can wrap tokens inside root arrays or fields matching the category name
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
