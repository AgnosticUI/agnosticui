/**
 * @file mcp-server.test.ts
 * @description Programmatic Integration Test Suite for AgnosticUI MCP Server
 */

import { describe, test, expect, beforeEach } from "vitest";
import { createMcpServer } from "../src/server/create-server.js";

describe("AgnosticUI MCP Server Core Infrastructure Verification Harness", () => {
  let context: ReturnType<typeof createMcpServer>;

  // Centralizes access to private registry configurations through a localized helper
  function getToolHandler(name: string) {
    const registeredTools = (context.server as any)._registeredTools;
    expect(registeredTools).toBeDefined();
    const tool = registeredTools[name];
    expect(tool).toBeDefined();
    return tool;
  }

  beforeEach(() => {
    context = createMcpServer();
  });

  test("1. verify registerAllTools maps endpoints accurately onto server registry capabilities", () => {
    // Assert endpoints exist on the server through the centralized lookup helper
    expect(getToolHandler("get_component_schema")).toBeDefined();
    expect(getToolHandler("generate_streamed_layout")).toBeDefined();
    expect(getToolHandler("get_design_tokens")).toBeDefined();
    expect(getToolHandler("resolve_skin_properties")).toBeDefined();
  });

  test("2. verify get_component_schema endpoint execution path handling", async () => {
    const tool = getToolHandler("get_component_schema");

    const result = await tool.handler({ component_name: "AgButton" });
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    expect(result.isError).not.toBe(true);
    
    const parsedPayload = JSON.parse(result.content[0].text);
    expect(parsedPayload.component).toBe("AgButton");
    expect(parsedPayload.active_framework).toBeDefined();
  });

  test("3. verify generate_streamed_layout topological verification handles dead pointers", async () => {
    const tool = getToolHandler("generate_streamed_layout");

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

  test("4. verify get_design_tokens returns structured dictionary details", async () => {
    const tool = getToolHandler("get_design_tokens");

    const result = await tool.handler({ category: "radii" });
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    expect(result.isError).not.toBe(true);

    const payload = JSON.parse(result.content[0].text);
    expect(payload.category).toBe("radii");
    expect(payload.tokens).toBeDefined();
  });

  test("5. verify resolve_skin_properties parses custom styles regex variables correctly", async () => {
    const tool = getToolHandler("resolve_skin_properties");

    const result = await tool.handler({ skin_name: "autumn-slate", theme_mode: "dark" });
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    expect(result.isError).not.toBe(true);

    const payload = JSON.parse(result.content[0].text);
    expect(payload.skin).toBe("autumn-slate");
    expect(payload.mode).toBe("dark");
    expect(payload.overrides).toBeDefined();
  });
});
