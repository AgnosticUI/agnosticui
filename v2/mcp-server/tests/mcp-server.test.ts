/**
 * @file mcp-server.test.ts
 * @description Programmatic Integration Test Suite for AgnosticUI MCP Server
 * 
 * Flow:
 * 1. Boots createMcpServer using the physical workspace configuration files.
 * 2. Accesses SDK v2's private _registeredTools dictionary to test registration parameters.
 * 3. Invocates the underlying tool handlers directly to evaluate real file system returns.
 */

import { describe, test, expect, beforeEach } from "vitest";
import { createMcpServer } from "../src/server/create-server.js";

describe("AgnosticUI MCP Server Core Infrastructure Verification Harness", () => {
  let context: ReturnType<typeof createMcpServer>;

  beforeEach(() => {
    // Dynamically hooks into the physical project configurations via cascading lookup
    context = createMcpServer();
  });

  test("1. verify registerAllTools maps endpoints accurately onto server registry capabilities", () => {
    // Access internal McpServer tools registry mapping in SDK v2
    const registeredTools = (context.server as any)._registeredTools;
    
    expect(registeredTools).toBeDefined();
    expect(registeredTools["get_component_schema"]).toBeDefined();
    expect(registeredTools["generate_streamed_layout"]).toBeDefined();
  });

  test("2. verify get_component_schema endpoint execution path handling", async () => {
    const registeredTools = (context.server as any)._registeredTools;
    const tool = registeredTools["get_component_schema"];
    expect(tool).toBeDefined();

    // Invoke the tool's handler callback block directly
    const result = await tool.handler({ component_name: "AgButton" });
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    
    if (!result.isError) {
      const parsedPayload = JSON.parse(result.content[0].text);
      expect(parsedPayload.component).toBe("AgButton");
      expect(parsedPayload.active_framework).toBe("react");
    } else {
      // Graceful fallback assertion if custom-elements.json has not been built locally yet
      expect(result.content[0].text).toContain("Manifest missing");
    }
  });

  test("3. verify generate_streamed_layout topological verification handles dead pointers", async () => {
    const registeredTools = (context.server as any)._registeredTools;
    const tool = registeredTools["generate_streamed_layout"];
    expect(tool).toBeDefined();

    // Challenge engine with an un-mapped child pointer to assert error capturing
    const invalidPayload = {
      nodes: [
        { id: "parent-node", component: "AgCard", children: ["missing-child-id"] }
      ]
    };

    const result = await tool.handler(invalidPayload);
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    
    const report = JSON.parse(result.content[0].text);
    expect(report.valid).toBe(false);
    expect(report.errors[0]).toContain("references a missing or dead child ID");
  });
});
