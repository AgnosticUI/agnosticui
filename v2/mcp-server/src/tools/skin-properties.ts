/**
 * @file skin-properties.ts
 * @description AgnosticUI Theme Skin Override Property Parser Tool
 * 
 * PURPOSE & LLM UTILITY:
 * This tool exposes stylistic variations (e.g. Autumn Slate, Cyberpunk) that sit on top 
 * of core global tokens. When an LLM writes components or custom markup for a specific skin layout, 
 * it queries this tool to discover which design tokens are actively changed by that variant layer.
 * 
 * WHAT IT RETURNS (Happy Path JSON Payload):
 * {
 *   "skin": "autumn-slate",
 *   "mode": "dark",
 *   "overrides": {
 *     "--ag-primary": "#e89148",
 *     "--ag-text-primary": "#d8dfe5",
 *     "--ag-background-primary": "#1a1612"
 *   }
 * }
 * The LLM reads the custom property pairs inside the 'overrides' dictionary to match style rules. 
 * This lets it safely adapt its UI output code blocks to respect custom background shades, distinct 
 * primary colors, and unique thematic shadow parameters.
 */
import { fromJsonSchema } from "@modelcontextprotocol/server";
import * as fs from "node:fs";
import * as path from "node:path";
import { ServerContext } from "../server/create-server.js";
import { SkinPropertiesRequest } from "../types/index.js";

export function registerSkinPropertiesTool(context: ServerContext): void {
  context.server.registerTool(
    "resolve_skin_properties",
    {
      description: "Supplies target theme token variable declarations and overrides found within localized skins workspace definitions.",
      inputSchema: fromJsonSchema<SkinPropertiesRequest>({
        type: "object",
        properties: {
          skin_name: {
            type: "string",
            description: "Target skin folder identity name (e.g., 'autumn-slate')."
          },
          theme_mode: {
            type: "string",
            description: "Target interface appearance layout variance.",
            enum: ["light", "dark"]
          }
        },
        required: ["skin_name", "theme_mode"]
      })
    },
    async ({ skin_name, theme_mode }) => {
      context.debugLog(`Executing resolve_skin_properties tool logic for skin: "${skin_name}" [${theme_mode}]`);

      const v2Root = path.resolve(context.config.paths.components, "../../../");
      const targetSkinDir = path.join(v2Root, "skins", skin_name);
      
      const fileTarget = theme_mode === "dark" ? "skin-dark.css" : "skin.css";
      const targetFilePath = path.join(targetSkinDir, fileTarget);

      context.debugLog(`Targeting skin resource vector path at: ${targetFilePath}`);

      if (!fs.existsSync(targetFilePath)) {
        return {
          content: [{ type: "text", text: `Error: Skin identity style layer or file target cannot be found at: ${targetFilePath}` }],
          isError: true,
        };
      }

      try {
        const rawCss = fs.readFileSync(targetFilePath, "utf-8");
        const variables: Record<string, string> = {};

        const cssVarRegex = /--ag-([^:]+):\s*([^;]+);/g;
        let match;

        while ((match = cssVarRegex.exec(rawCss)) !== null) {
          const propName = match[1].trim();
          const propValue = match[2].trim();
          variables[`--ag-${propName}`] = propValue;
        }

        context.debugLog(`Successfully extracted ${Object.keys(variables).length} skin overrides definitions.`);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  skin: skin_name,
                  mode: theme_mode,
                  overrides: variables
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: `Skin variables compilation anomaly: ${error instanceof Error ? error.message : String(error)}` }],
          isError: true,
        };
      }
    }
  );
}
