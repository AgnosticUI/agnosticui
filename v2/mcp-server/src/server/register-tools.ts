import { registerGetComponentsTool } from "../tools/get-components.js";
import { registerStreamedLayoutTool } from "../tools/streamed-layout.js";
import { ServerContext } from "./create-server.js";

export function registerAllTools(context: ServerContext): void {
  registerGetComponentsTool(context);
  registerStreamedLayoutTool(context);
}
