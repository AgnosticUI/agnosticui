/**
 * @file test-mcp-local.js
 * @description Local Offline Integration Test Harness for the AgnosticUI MCP Server.
 * 
 * PURPOSE:
 * Connects a local, light-footprint Ollama model (qwen2.5-coder:1.5b) directly 
 * to your MCP server instance without internet dependencies or cloud token bills.
 * 
 * WHY THIS SCRIPT IS CUSTOMIZED:
 * Compact models (under 3B parameters) understand tool schemas but often wrap 
 * their tool-calling decisions inside raw markdown text strings instead of standard 
 * SDK arrays, or pass raw text artifacts like `<nil>`. This script normalizes 
 * those outputs so execution paths flow smoothly.
 */

import { createMcpServer } from "./dist/server/create-server.js";
import ollama from "ollama";
import process from "node:process";

// ============================================================================
// LOCAL CONFIGURATION ANCHOR
// ============================================================================
// Default model to run locally if no system environment overrides are specified.
const DEFAULT_MODEL = "qwen2.5-coder:1.5b";

// Resolves active execution target. Can be dynamically overridden via terminal:
// \$ OLLAMA_MODEL="llama3.2:latest" node test-mcp-local.js
const TARGET_MODEL = process.env.OLLAMA_MODEL || DEFAULT_MODEL;
// ============================================================================

async function runLocalMcpTest() {
  console.log(`🤖 Initializing local AgnosticUI MCP Server Context against target: [${TARGET_MODEL}]...`);

  // 1. Boot up the server engine via its local file-crawling factory wrapper
  const context = createMcpServer();
  const registeredTools = context.server._registeredTools;

  // 2. Format the MCP registry capabilities into standard JSON-Schema objects for Ollama
  // Fix Applied: Access the raw .jsonSchema directly from inputSchema instead of passing the StandardSchemaWithJSON wrapper object
  const ollamaTools = Object.keys(registeredTools).map((toolName) => {
    const tool = registeredTools[toolName];
    const rawSchema = tool.inputSchema?.jsonSchema || { type: "object", properties: {} };
    return {
      type: "function",
      function: {
        name: toolName,
        description: tool.description,
        parameters: rawSchema,
      },
    };
  });

  console.log(`✅ Formatted ${ollamaTools.length} tools for Qwen.`);
  console.log(`🧠 Prompting ${TARGET_MODEL} locally...`);

  // 3. Pose a layout question that requires absolute system file variables
  // Enforce structural coordination guidelines onto lightweight models via explicit system instruction
  // TIP: Swap this prompt string when testing skin configurations or components!
  const messages = [
    {
      role: "system",
      content: "You are a precise frontend assistant with direct access to local workspace tools. If the user asks for specific token categories, schemas, or configurations, you MUST call the appropriate tool. Do not guess hex codes or make up values yourself."
    },
    { 
      role: "user", 
      content: "I want to style a custom container button. Can you look up what the exact Style Dictionary token overrides are for the 'radii' category so I don't guess the pixel sizing?" 
    }
  ];

  // 4. Send the initial request to Ollama with our system capability filters attached
  const response = await ollama.chat({
    model: TARGET_MODEL,
    messages: messages,
    tools: ollamaTools,
  });

  let toolName = null;
  let toolArgs = null;

  // 5. EXTRACT INTENT - PATH A: Check for standard structured SDK tool-call responses
  if (response.message.tool_calls && response.message.tool_calls.length > 0) {
    const call = response.message.tool_calls[0];
    toolName = call.function.name;
    toolArgs = call.function.arguments;
    console.log(`\n🎯 SUCCESS: Model issued a standard tool call structure.`);
  } else {
    // 5. EXTRACT INTENT - PATH B: Fallback string parser to scrub markdown blocks from small models
    try {
      let cleanContent = response.message.content.trim();
      
      // Strip markdown syntax markers (```json ... ```) away from raw text responses
      if (cleanContent.startsWith("```")) {
        cleanContent = cleanContent.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim();
      }

      // Compact-Model Guardrail: Fix literal `<nil>` or `nil` text parameters to valid empty JSON
      if (cleanContent.includes(": <nil>")) {
        cleanContent = cleanContent.replace(/:\s*<nil>/g, ": {}");
      } else if (cleanContent.includes(": nil")) {
        cleanContent = cleanContent.replace(/:\s*nil/g, ": {}");
      }

      const parsedContent = JSON.parse(cleanContent);
      if (parsedContent.name) {
        toolName = parsedContent.name;
        toolArgs = parsedContent.arguments || {};
        console.log(`\n🎯 SUCCESS: Model issued a text fallback tool call.`);
      }
    } catch (e) {
      // No valid tool selection or JSON format found; message is standard conversational text
    }
  }

  // Compact-Model Guardrail: Normalize variations of tool names hallucinated by smaller models
  if (toolName) {
    if (toolName === "get_skin_properties") {
      toolName = "resolve_skin_properties";
    }
    if (toolName === "get_component_schemas" || toolName === "component_schema") {
      toolName = "get_component_schema";
    }
  }

  // 6. EXECUTE & RE-PROMPT: Feed the server data back to the model for conversational code output
  if (toolName && registeredTools[toolName]) {
    console.log(`📥 Tool identified: "${toolName}"`);
    
    // Fix Applied: Normalize nullish, blank, or partial toolArgs down to a safe object before processing guardrails or execution
    if (!toolArgs || typeof toolArgs !== "object") {
      toolArgs = {};
    }
    
    // Guardrail: If Qwen mixed up argument labels (e.g. using 'prop' or 'key' instead of 'category'), align it
    if (toolName === "get_design_tokens") {
      if (!toolArgs.category && (toolArgs.prop || toolArgs.key)) {
        toolArgs.category = toolArgs.prop || toolArgs.key;
      }
      if (!toolArgs.category) {
        toolArgs.category = "radii";
      }
    }

    // Guardrail: If Qwen targeted a skin properties tool but dropped layout objects, hydrate defaults
    if (toolName === "resolve_skin_properties") {
      if (!toolArgs.skin_name) {
        toolArgs.skin_name = "autumn-slate";
      }
      if (!toolArgs.theme_mode) {
        toolArgs.theme_mode = "dark";
      }
    }

    console.log(`📥 Cleaned arguments:`, toolArgs);
    console.log(`⚙️ Executing server code path...`);

    const toolHandler = registeredTools[toolName];
    const result = await toolHandler.handler(toolArgs);
    const serverPayload = result.content[0].text;
    
    console.log(`\n📤 SERVER RESPONSE RECEIVED (Payload length: ${serverPayload.length} chars)`);
    console.log(`\n--- DATA PAYLOAD ---\n${serverPayload}\n--------------------`);
    console.log(`🧠 Feeding data back to ${TARGET_MODEL} to generate your CSS styles...`);

    // Append the assistant's tool call choice and the tool's actual data payload to the chat history
    // Fix Applied: Provide the explicit tool name matching Ollama's native tool-response criteria
    messages.push(response.message);
    messages.push({
      role: "tool",
      name: toolName,
      content: serverPayload
    });

    // Execute the final turnaround chat without tools so the model outputs clean text/code
    const finalResponse = await ollama.chat({
      model: TARGET_MODEL,
      messages: messages
    });

    console.log(`\n✨ FINAL ASSISTANT CODE GENERATION:\n`);
    console.log(finalResponse.message.content);

  } else {
    console.log("\n❌ The model didn't trigger a tool call. Raw response:", response.message.content);
  }
}

// Fire the async testing sequence loop
runLocalMcpTest().catch(console.error);
