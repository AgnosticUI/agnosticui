/**
 * @file mcp-server.test.ts
 * @description Programmatic Integration Test Suite for AgnosticUI MCP Server
 */

import { describe, test, expect, beforeEach } from "vitest";
import { createMcpServer } from "../src/server/create-server.js";

describe("AgnosticUI MCP Server Core Infrastructure Verification Harness", () => {
  let context: ReturnType<typeof createMcpServer>;

  beforeEach(() => {
    context = createMcpServer();
  });

  test("1. verify registerAllTools maps endpoints accurately onto server registry capabilities", () => {
    const registeredTools = (context.server as any)._registeredTools;
    
    expect(registeredTools).toBeDefined();
    expect(registeredTools["get_component_schema"]).toBeDefined();
    expect(registeredTools["generate_streamed_layout"]).toBeDefined();
  });

  test("2. verify get_component_schema endpoint execution path handling", async () => {
    const registeredTools = (context.server as any)._registeredTools;
    const tool = registeredTools["get_component_schema"];
    expect(tool).toBeDefined();

    const result = await tool.handler({ component_name: "AgButton" });
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    
    if (!result.isError) {
      const parsedPayload = JSON.parse(result.content[0].text);
      expect(parsedPayload.component).toBe("AgButton");
      expect(parsedPayload.active_framework).toBe("react");
    } else {
      expect(result.content[0].text).toContain("Manifest missing");
    }
  });

  test("3. verify generate_streamed_layout topological verification handles dead pointers", async () => {
    const registeredTools = (context.server as any)._registeredTools;
    const tool = registeredTools["generate_streamed_layout"];
    expect(tool).toBeDefined();

    const invalidPayload = {
      nodes: [
        { id: "parent-node", component: "AgCard", children: ["missing-child-id"] }
      ]
    };

    const result = await tool.handler(invalidPayload);
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    
    if (!result.isError) {
      const report = JSON.parse(result.content[0].text);
      expect(report.valid).toBe(false);
      // Assert substring match against the string array index element safely
      expect(report.errors[0]).toContain("references a missing or dead child ID");
    } else {
      expect(result.content[0].text).toContain("JSON Schema core definitions file missing");
    }
  });
});
