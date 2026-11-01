import { McpServer } from "@modelcontextprotocol/server";
import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { WorkspaceConfig } from "../types/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export interface ServerContext {
  server: McpServer;
  config: WorkspaceConfig;
  workspaceRoot: string;
}

/**
 * Traverses upwards to locate agnosticui.config.json and anchor the absolute workspace root
 */
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

  // Fallback structural check for canonical v2 setup if running inside mcp-server package
  const structuralParent = path.resolve(__dirname, "../../../");
  const parentConfigPath = path.join(structuralParent, "agnosticui.config.json");
  
  if (fs.existsSync(parentConfigPath)) {
    const config = JSON.parse(fs.readFileSync(parentConfigPath, "utf-8")) as WorkspaceConfig;
    return { config, rootPath: structuralParent };
  }

  // Graceful Tier-3 Fail-Safe per Specification
  throw new Error(
    "AgnosticUI MCP Server Error (-32603): Structural configuration file 'agnosticui.config.json' could not be found. Please run 'npx agnosticui-cli init' to bootstrap your workspace environment."
  );
}

export function createMcpServer(): ServerContext {
  const { config, rootPath } = findWorkspaceConfig();

  // Instantiate the authentic McpServer instance
  const server = new McpServer({
    name: "mcp-server-agnosticui",
    version: "1.0.0",
  });

  return {
    server,
    config,
    workspaceRoot: rootPath,
  };
}
