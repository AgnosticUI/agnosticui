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
  config: WorkspaceConfig & { paths: { reference?: string } };
  workspaceRoot: string;
  verbose: boolean;
  debugLog: (message: string, data?: any) => void;
}

function findWorkspaceConfig(): { config: WorkspaceConfig & { paths: { reference?: string } }; rootPath: string } {
  let currentDir = process.cwd();
  const rootCheck = path.parse(currentDir).root;

  while (currentDir !== rootCheck) {
    const configPath = path.join(currentDir, "agnosticui.config.json");
    if (fs.existsSync(configPath)) {
      try {
        const rawContent = fs.readFileSync(configPath, "utf-8");
        const rawConfig = JSON.parse(rawContent) as WorkspaceConfig & { paths: { reference?: string } };

        const absoluteConfig = {
          ...rawConfig,
          paths: {
            ...rawConfig.paths,
            components: path.resolve(currentDir, rawConfig.paths.components),
            reference: rawConfig.paths.reference ? path.resolve(currentDir, rawConfig.paths.reference) : undefined
          }
        };

        return { config: absoluteConfig, rootPath: currentDir };
      } catch (error) {
        throw new Error(`Workspace configuration file at ${configPath} is malformed.`);
      }
    }
    currentDir = path.dirname(currentDir);
  }

  // Consistent lookup mapping to mcp-server root directory from src/ or compiled dist/ targets
  const structuralParent = __dirname.includes("dist")
    ? path.resolve(__dirname, "../../")
    : path.resolve(__dirname, "../");
  const parentConfigPath = path.join(structuralParent, "agnosticui.config.json");
  
  if (fs.existsSync(parentConfigPath)) {
    try {
      const rawContent = fs.readFileSync(parentConfigPath, "utf-8");
      const rawConfig = JSON.parse(rawContent) as WorkspaceConfig & { paths: { reference?: string } };
      
      const absoluteConfig = {
        ...rawConfig,
        paths: {
          ...rawConfig.paths,
          components: path.resolve(structuralParent, rawConfig.paths.components),
          reference: rawConfig.paths.reference ? path.resolve(structuralParent, rawConfig.paths.reference) : undefined
        }
      };
      return { config: absoluteConfig, rootPath: structuralParent };
    } catch (error) {
      throw new Error(`Workspace configuration file at ${parentConfigPath} is malformed.`);
    }
  }

  throw new Error(
    "AgnosticUI MCP Server Error (-32603): Structural configuration file 'agnosticui.config.json' could not be found."
  );
}

export function createMcpServer(): ServerContext {
  const { config, rootPath } = findWorkspaceConfig();

  const verbose = 
    process.argv.includes("--verbose") || 
    process.argv.includes("-v") ||
    process.env.AGNOSTICUI_VERBOSE === "true";

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
