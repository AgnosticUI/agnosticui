/**
 * @file gateway.ts
 * @description Real-time Hono API Gateway router executing streaming SDUI layout orchestration.
 * Integrates ChunkAccumulator brace-balancing pipelines and secure edge action validation.
 * Uses modern for await...of async iterators to safely consume incoming web streams.
 */

import { Hono } from 'hono';
import { streamSSE } from 'hono/streaming';
import { serve } from '@hono/node-server';
import { ChunkAccumulator } from './streamUtils.js';
import { validate } from '@agnosticui/schema';
import { ACTION_DICTIONARY } from './actions.js';

// Instantiate our core framework application router layout
const app = new Hono();

/**
 * Health Check Endpoint
 * Verifies that the gateway process sandbox is up and accessible to the environment.
 */
app.get('/api/health', (c) => {
  return c.text('Gateway Sandbox Operational');
});

/**
 * Real-time Streaming SDUI Chat Endpoint
 * Orchestrates incoming streaming request tokens, processes them through the balancer,
 * filters out adversarial actions, and emits compliant Server-Sent Events (SSE).
 */
app.post('/api/chat', async (c) => {
  // Ensure we are explicitly setting proper streaming protocol flags upfront
  c.header('Content-Type', 'text/event-stream');
  c.header('Cache-Control', 'no-cache');
  c.header('Connection', 'keep-alive');

  // Hono wraps the native standard request inside c.req.raw. Extract the body stream from it.
  const rawBodyStream = c.req.raw.body;

  // Handle scenario where request body might be empty or missing streaming structures
  if (!rawBodyStream) {
    return streamSSE(c, async (stream) => {
      await stream.writeSSE({ data: JSON.stringify({ status: 'EMPTY_PROMPT_STREAM' }) });
      await stream.close();
    });
  }

  // Instantiate our local workspace token parser wrapper to balance incoming JSON structures
  const accumulator = new ChunkAccumulator();
  const decoder = new TextDecoder();

  return streamSSE(c, async (stream) => {
    try {
      // Leverage native async iteration directly over the stream chunks to eliminate manual locks
      for await (const value of rawBodyStream) {
        // Decode the binary Uint8Array stream segment into readable text fragments
        const textFragment = decoder.decode(value, { stream: true });
        
        // Feed the text segment into our accumulator and immediately receive all fully balanced nodes
        const extractedNodes = accumulator.pushChunk(textFragment);

        // Iteratively handle each individual complete node extracted during this step
        for (const parsedNode of extractedNodes) {
          try {
            // Guard: Safely skip incoming raw chat messages or user text prompt inputs
            if (parsedNode && 'message' in parsedNode && !('component' in parsedNode)) {
              continue;
            }

            const targetNode = parsedNode as any;

            // SECURITY BOUNDARY: Intercept and sanitize dynamic actions BEFORE passing to strict schemas
            if (targetNode && targetNode.actionToken !== undefined) {
              const token = targetNode.actionToken;
              
              if (typeof token === 'string' && (token.startsWith('javascript:') || !ACTION_DICTIONARY[token])) {
                console.warn(`[SECURITY_ALERT] 🛡️ Intercepted and scrubbed malicious or unauthorized action: "${token}"`);
              }
              
              // Clear the token key completely. Do NOT append metadata keys to avoid breaking strict Zod checks.
              delete targetNode.actionToken;
            }

            console.log(`[GATEWAY_AUDIT] 🔍 Inspecting extracted structural node profile [ID: ${targetNode?.id || '<unknown>'}]`);

            // Execute core package Zod validation check with dev hints enabled
            const validationOutcome = validate(targetNode, { dev: true });

            if (!validationOutcome.success) {
              console.error('\n❌ [GATEWAY_SCHEMA_CRITICAL_FAILURE] Node rejected by Zod core library validator!');
              console.error('❌ Raw input object shape:', JSON.stringify(targetNode, null, 2));
              console.error('❌ Zod Validation Error Array:', validationOutcome.errors);
              console.error('❌ Dev actionable suggestions:', validationOutcome.hints);
              continue; 
            }

            // Extract the cleanly typed node data upon successful parse
            const cleanNode = validationOutcome.data;

            // Flush the clean, verified node onto the client channel as a compliant SSE message
            await stream.writeSSE({
              data: JSON.stringify(cleanNode)
            });

          } catch (jsonErr) {
            console.error('[GATEWAY_ERROR] Failed emitting individual node layout string:', jsonErr);
          }
        }
      }
    } catch (streamErr) {
      console.error('[GATEWAY_CRITICAL] Exception encountered inside streaming chat loop:', streamErr);
    } finally {
      await stream.close();
    }
  });
});

// Avoid local port binding collision loops during execution of automated test runners
if (process.env.NODE_ENV !== 'test') {
  serve({ fetch: app.fetch, port: 3000 }, (info) => {
    console.log(`[GATEWAY_START] 🚀 Gateway live at http://localhost:${info.port}`);
  });
}

export default app;
