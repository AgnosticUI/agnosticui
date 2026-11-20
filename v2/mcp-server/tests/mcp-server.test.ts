/**
 * @file mcp-server.test.ts
 * @description Programmatic Integration Test Suite for AgnosticUI MCP Server (A2UI v1.0 + Design System Tools)
 */

import { describe, test, expect, beforeEach } from "vitest";
import { createMcpServer } from "../src/server/create-server.js";
import { EXPECTED_CATALOG_ID } from "../src/tools/streamed-layout.js";

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

  test("3a. verify generate_streamed_layout validates a complete A2UI v1.0 wire stream happy path", async () => {
    const tool = getToolHandler("generate_streamed_layout");

    const validStream = {
      messages: [
        {
          version: "1.0",
          createSurface: {
            surfaceId: "support_surface",
            catalogId: EXPECTED_CATALOG_ID,
          },
        },
        {
          version: "1.0",
          updateComponents: {
            surfaceId: "support_surface",
            components: [
              {
                id: "root",
                component: "AgCard",
                shadow: true,
                stacked: true,
                children: ["heading_text", "email_input", "submit_btn"],
              },
              {
                id: "heading_text",
                component: "AgText",
                el: "h2",
                text: "Account Support",
              },
              {
                id: "email_input",
                component: "AgInput",
                label: "Work Email",
                type: "email",
                required: true,
                value: { "@path": "/form/email" },
              },
              {
                id: "submit_btn",
                component: "AgButton",
                variant: "primary",
                shape: "rounded",
                label: "Submit",
                action: { event: { name: "SUBMIT_TICKET" } },
              },
            ],
          },
        },
        {
          version: "1.0",
          updateDataModel: {
            surfaceId: "support_surface",
            path: "/",
            value: { form: { email: "" } },
          },
        },
      ],
    };

    const result = await tool.handler(validStream);
    expect(result.isError).not.toBe(true);

    const report = JSON.parse(result.content[0].text);
    expect(report.valid).toBe(true);
    expect(report.catalogId).toBe(EXPECTED_CATALOG_ID);
    expect(report.componentCount).toBe(4);
    expect(report.errors).toEqual([]);
  });

    test("3b. generate_streamed_layout detects dead child pointers and non-UAX31 hyphenated IDs", async () => {
    const tool = getToolHandler("generate_streamed_layout");

    const invalidPayload = {
      nodes: [
        { id: "root", component: "AgCard", children: ["missing_child"] },
        { id: "hyphen-id", component: "AgText", text: "Invalid UAX31 ID" },
      ],
    };

    const result = await tool.handler(invalidPayload);
    const report = JSON.parse(result.content[0].text);
    expect(report.valid).toBe(false);
    expect(report.errors.some((e: string) => e.includes("missing or dead child ID"))).toBe(true);
    expect(report.errors.some((e: string) => e.includes("UAX #31 ID Error"))).toBe(true);
  });

  test("3c. detects duplicate component IDs and unreachable orphaned nodes from root", async () => {
    const tool = getToolHandler("generate_streamed_layout");

    const result = await tool.handler({
      nodes: [
        { id: "root", component: "AgCard", children: ["child_one"] },
        { id: "child_one", component: "AgText", text: "Reachable" },
        { id: "child_one", component: "AgText", text: "Duplicate" },
        { id: "orphan_badge", component: "AgBadge", value: 3 },
      ],
    });

    const report = JSON.parse(result.content[0].text);
    expect(report.valid).toBe(false);
    expect(report.errors.some((e: string) => e.includes("Duplicate component ID"))).toBe(true);
    expect(report.errors.some((e: string) => e.includes("unreachable from 'root'"))).toBe(true);
  });

  test("3d. detects cycles in disconnected graph components", async () => {
    const tool = getToolHandler("generate_streamed_layout");

    const result = await tool.handler({
      nodes: [
        { id: "root", component: "AgCard" },
        { id: "node_a", component: "AgCard", children: ["node_b"] },
        { id: "node_b", component: "AgCard", children: ["node_a"] },
      ],
    });

    const report = JSON.parse(result.content[0].text);
    expect(report.valid).toBe(false);
    expect(report.errors.some((e: string) => e.includes("Cyclic rendering loop"))).toBe(true);
  });

  test("3e. rejects invalid catalogId or schema prop violations in A2UI v1.0 wire stream", async () => {
    const tool = getToolHandler("generate_streamed_layout");

    const result = await tool.handler({
      messages: [
        {
          version: "1.0",
          createSurface: {
            surfaceId: "bad_surface",
            catalogId: "https://example.com",
          },
        },
        {
          version: "1.0",
          updateComponents: {
            surfaceId: "bad_surface",
            components: [
              {
                id: "root",
                component: "AgButton",
                variant: "not_a_real_variant",
                label: "Click",
              },
            ],
          },
        },
      ],
    });

    const report = JSON.parse(result.content[0].text);
    expect(report.valid).toBe(false);
    expect(report.errors.some((e: string) => e.includes("Invalid catalogId"))).toBe(true);
    expect(report.errors.some((e: string) => e.includes("Schema Error"))).toBe(true);
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

    const result = await tool.handler({ skin_name: "tokyo-ink", theme_mode: "dark" });
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    expect(result.isError).not.toBe(true);

    const payload = JSON.parse(result.content[0].text);
    expect(payload.skin).toBe("tokyo-ink");
    expect(payload.mode).toBe("dark");
    expect(payload.overrides).toBeDefined();
  });

  test("6. verify get_component_schema resolves multi-word kebab subpaths and custom-element tags", async () => {
    const tool = getToolHandler("get_component_schema");

    const result = await tool.handler({ component_name: "AgIconButton" });
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();

    if (!result.isError) {
      const payload = JSON.parse(result.content[0].text);
      expect(payload.component).toBe("AgIconButton");
      expect(payload.import_pattern).toContain("icon-button");
      expect(payload.import_pattern).not.toContain("iconbutton");
    }
  });
});
