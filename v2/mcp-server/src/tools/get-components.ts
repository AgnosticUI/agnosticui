/**
 * @file get-components.ts
 * @description AgnosticUI Component Schema Resolution Tool
 * 
 * PURPOSE:
 * Bridges the gap between an AI agent and the codebase by parsing the project's 
 * generated 'custom-elements.json' manifest. It exposes real component structures, 
 * allowed properties, conditional spreads, slots, and attributes.
 * 
 * WHY IT'S USEFUL:
 * Prevents AI assistants from guessing or hallucinating framework wrapper attributes 
 * (e.g., confusing properties between ReactAgInput and VueInput). By serving up exact 
 * API contracts on-demand, it guarantees that code generation steps match your actual 
 * workspace compilation boundaries from day one.
 */

import { fromJsonSchema } from "@modelcontextprotocol/server";
import * as fs from "node:fs";
import * as path from "node:path";
import { ServerContext } from "../server/create-server.js";

export function registerGetComponentsTool(context: ServerContext): void {
  context.server.registerTool(
    "get_component_schema",
    {
      description: "Returns precise public slots, observed attributes, and metadata requirements for any AgnosticUI component using custom-elements.json.",
      inputSchema: fromJsonSchema<{ component_name: string }>({
        type: "object",
        properties: {
          component_name: {
            type: "string",
            description: "The name of the component to lookup (e.g., 'AgButton', 'AgInput', 'AgAccordion')",
          },
        },
        required: ["component_name"],
      }),
    },
    async ({ component_name }) => {
      // 1. Resolve absolute location of the custom element manifest artifact
      const manifestPath = path.join(context.workspaceRoot, "lib", "custom-elements.json");
      
      if (!fs.existsSync(manifestPath)) {
        return {
          content: [{ type: "text", text: `Error: Manifest missing at absolute path: ${manifestPath}` }],
          isError: true,
        };
      }

      try {
        const rawManifest = fs.readFileSync(manifestPath, "utf-8");
        const manifest = JSON.parse(rawManifest);
        
        // 2. Scan manifest modules block to match the target component by name or internal declaration
        const matchedModule = manifest.modules?.find((mod: any) =>
          mod.exports?.some((exp: any) => 
            exp.name.toLowerCase() === component_name.toLowerCase() ||
            exp.declaration?.name.toLowerCase() === component_name.toLowerCase()
          )
        );

        if (!matchedModule) {
          return {
            content: [{ type: "text", text: `Component '${component_name}' not registered inside custom-elements manifest.` }],
            isError: true,
          };
        }

        // 3. Infer active framework targets to map exact wrapper syntax constraints
        const activeFramework = context.config.framework;
        const prefix = activeFramework === "react" ? "React" : activeFramework === "vue" ? "Vue" : "Ag";
        const cleanName = component_name.replace(/^Ag/, "");
        
        // 4. Synthesize structural configuration properties layout payload
        const responsePayload = {
          component: component_name,
          active_framework: activeFramework,
          import_pattern: `import { ${prefix}${cleanName} } from "@agnosticui/${activeFramework}"`,
          module_path: matchedModule.path,
          exports: matchedModule.exports || [],
          declarations: matchedModule.declarations || [],
          noUndefinedProps: activeFramework === "react", // Guard against prop erasure inside React environments
        };

        return {
          content: [{ type: "text", text: JSON.stringify(responsePayload, null, 2) }],
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: `Parse error: ${error instanceof Error ? error.message : String(error)}` }],
          isError: true,
        };
      }
    }
  );
}
