import { registerGetComponentsTool } from "../tools/get-components.js";
import { registerStreamedLayoutTool } from "../tools/streamed-layout.js";
import { registerDesignTokensTool } from "../tools/design-tokens.js";
import { registerSkinPropertiesTool } from "../tools/skin-properties.js"; // Ingest skin parser tool
import { ServerContext } from "./create-server.js";

export function registerAllTools(context: ServerContext): void {
  registerGetComponentsTool(context);
  registerStreamedLayoutTool(context);
  registerDesignTokensTool(context);
  registerSkinPropertiesTool(context); // Aggregate to unified server loop
}
