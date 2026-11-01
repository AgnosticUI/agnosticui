import { McpServer } from "@modelcontextprotocol/server";
import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { WorkspaceConfig } from "../types/index.js";
import { registerAllTools } from "./register-tools.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export interface ServerContext {
  server: McpServer;
  config: WorkspaceConfig;
  workspaceRoot: string;
  verbose: boolean;
  debugLog: (message: string, data?: any) => void;
}

function findWorkspaceConfig(): { config: WorkspaceConfig; rootPath: string } {
  let currentDir = process.cwd();
  const rootCheck = path.parse(currentDir).root;

  while (currentDir !== rootCheck) {
    const configPath = path.join(currentDir, "agnosticui.config.json");
    if (fs.existsSync(configPath)) {
      try {
        const rawContent = fs.readFileSync(configPath, "utf-8");
        const config = JSON.parse(rawContent) as WorkspaceConfig;
        return { config, rootPath: currentDir };
      } catch (error) {
        throw new Error(`Workspace configuration file at ${configPath} is malformed.`);
      }
    }
    currentDir = path.dirname(currentDir);
  }

  const structuralParent = path.resolve(__dirname, "../../../");
  const parentConfigPath = path.join(structuralParent, "agnosticui.config.json");
  
  if (fs.existsSync(parentConfigPath)) {
    const config = JSON.parse(fs.readFileSync(parentConfigPath, "utf-8")) as WorkspaceConfig;
    return { config, rootPath: structuralParent };
  }

  throw new Error(
    "AgnosticUI MCP Server Error (-32603): Structural configuration file 'agnosticui.config.json' could not be found."
  );
}

export function createMcpServer(): ServerContext {
  const { config, rootPath } = findWorkspaceConfig();

  // Inspect either command-line arguments OR local environment variables for debug flags
  const verbose = 
    process.argv.includes("--verbose") || 
    process.argv.includes("-v") ||
    process.env.AGNOSTICUI_VERBOSE === "true";

  // Diagnostic logging remains safely isolated to stderr
  const debugLog = (message: string, data?: any) => {
    if (verbose) {
      const dump = data ? `\nDATA DUMP: ${JSON.stringify(data, null, 2)}` : "";
      console.error(`[AgnosticUI DEBUG] ${message}${dump}`);
    }
  };

  const server = new McpServer({
    name: "mcp-server-agnosticui",
    version: "1.0.0",
  });

  const context: ServerContext = {
    server,
    config,
    workspaceRoot: rootPath,
    verbose,
    debugLog,
  };

  registerAllTools(context);

  return context;
}

