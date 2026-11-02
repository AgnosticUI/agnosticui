import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import process from "node:process";
import { createMcpServer } from "./server/create-server.js";

async function main() {
  try {
    const { server } = createMcpServer();

    // Transport hooks bind over standard input/output channels
    const transport = new StdioServerTransport();
    await server.connect(transport);
    
    // Logging explicitly to stderr to keep the stdio protocol channel uncorrupted
    console.error("AgnosticUI MCP Server successfully initialized over stdio transport.");
  } catch (error) {
    console.error("Critical failure during AgnosticUI MCP Server initialization bootstrap sequence:");
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();
