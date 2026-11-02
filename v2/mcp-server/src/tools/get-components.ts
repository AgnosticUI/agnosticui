/**
 * @file get-components.ts
 * @description Component Schema Resolution Endpoint for the AgnosticUI MCP Server
 * 
 * PURPOSE & LLM UTILITY:
 * This tool prevents prop hallucinations when an LLM scaffolds or refactors an 
 * AgnosticUI component. The LLM invokes this tool to obtain the exact public slots, 
 * observed attributes, and metadata constraints derived from the code manifest.
 * 
 * WHAT IT RETURNS (Happy Path JSON Payload):
 * {
 *   "component": "AgButton",
 *   "active_framework": "react",
 *   "import_pattern": "import { ReactButton } from \"@agnosticui/react\"",
 *   "module_path": "src/components/button.ts",
 *   "exports": [ ... ],
 *   "declarations": [ ... ],
 *   "noUndefinedProps": true
 * }
 * The LLM reads the 'import_pattern' to write correct imports instantly, uses 'exports' 
 * and 'declarations' to match strict attribute parameters, and checks 'noUndefinedProps' 
 * to determine if explicit spread guardrails are required in React environments.
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
      context.debugLog(`Executing get_component_schema lookup for entity: "${component_name}"`);
      
      const v2Root = path.resolve(context.config.paths.components, "../../../");
      const manifestPath = path.join(v2Root, "lib", "custom-elements.json");
      context.debugLog(`Resolving manifest absolute path trace: ${manifestPath}`);
      
      if (!fs.existsSync(manifestPath)) {
        context.debugLog(`CRITICAL: Manifest target file absent from path index.`);
        return {
          content: [{ type: "text", text: `Error: Manifest missing at absolute path: ${manifestPath}` }],
          isError: true,
        };
      }

      try {
        const rawManifest = fs.readFileSync(manifestPath, "utf-8");
        const manifest = JSON.parse(rawManifest);
        
        const matchedModule = manifest.modules?.find((mod: any) =>
          mod.exports?.some((exp: any) => 
            exp.name.toLowerCase() === component_name.toLowerCase() ||
            exp.declaration?.name.toLowerCase() === component_name.toLowerCase()
          )
        );

        if (!matchedModule) {
          context.debugLog(`Lookup Warning: Component signature absent from manifest register modules.`);
          return {
            content: [{ type: "text", text: `Component '${component_name}' not registered inside custom-elements manifest.` }],
            isError: true,
          };
        }

        const activeFramework = context.config.framework;
        const prefix = activeFramework === "react" ? "React" : activeFramework === "vue" ? "Vue" : "Ag";
        const cleanName = component_name.replace(/^Ag/, "");
        
        const responsePayload = {
          component: component_name,
          active_framework: activeFramework,
          import_pattern: `import { ${prefix}${cleanName} } from "@agnosticui/${activeFramework}"`,
          module_path: matchedModule.path,
          exports: matchedModule.exports || [],
          declarations: matchedModule.declarations || [],
          noUndefinedProps: activeFramework === "react",
        };

        context.debugLog(`Schema resolution successful. Dispatching payload metadata frame.`, responsePayload);

        return {
          content: [{ type: "text", text: JSON.stringify(responsePayload, null, 2) }],
        };
      } catch (error) {
        context.debugLog(`Parse error exception caught inside file context engine loop.`);
        return {
          content: [{ type: "text", text: `Parse error: ${error instanceof Error ? error.message : String(error)}` }],
          isError: true,
        };
      }
    }
  );
}
