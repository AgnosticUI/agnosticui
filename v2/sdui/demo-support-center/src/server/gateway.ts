/**
 * @file gateway.ts
 * @description Real-time Hono API Gateway router executing streaming SDUI layout orchestration.
 * Integrates ChunkAccumulator brace-balancing pipelines and secure edge action validation.
 */

import { Hono } from 'hono';
import { streamSSE } from 'hono/streaming';
import { serve } from '@hono/node-server';
import { ChunkAccumulator } from './streamUtils.js';
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

  // Instantiate our workspace token parser wrapper to balance incoming JSON structures
  const accumulator = new ChunkAccumulator();
  const reader = rawBodyStream.getReader();
  const decoder = new TextDecoder();

  return streamSSE(c, async (stream) => {
    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          break;
        }

        // Decode the binary Uint8Array stream segment into readable text fragments
        const textFragment = decoder.decode(value, { stream: true });
        
        // Feed the text segment into our accumulator and immediately receive all fully balanced nodes
        const extractedNodes = accumulator.pushChunk(textFragment);

        // Iteratively handle each individual complete node extracted during this step
        for (const parsedNode of extractedNodes) {
          try {
            // Execute edge-level action sanitization if structural props exist
            if (parsedNode && parsedNode.props) {
              const token = parsedNode.props.actionToken;
              
              if (token !== undefined) {
                // Intercept any malicious patterns or unregistered action string values
                if (typeof token === 'string' && (token.startsWith('javascript:') || !ACTION_DICTIONARY[token])) {
                  console.warn(`[SECURITY_ALERT] 🛡️ Intercepted and scrubbed malicious or unauthorized action: "${token}"`);
                  // Neutralize the malicious vector completely before broadcasting down to client
                  delete parsedNode.props.actionToken;
                }
              }
            }

            // Flush the clean, verified node onto the client channel as a compliant SSE message
            await stream.writeSSE({
              data: JSON.stringify(parsedNode)
            });

          } catch (jsonErr) {
            // Guard against edge exceptions when handling parsed structures
            console.error('[GATEWAY_ERROR] Failed emitting individual node layout string:', jsonErr);
          }
        }
      }
    } catch (streamErr) {
      console.error('[GATEWAY_CRITICAL] Exception encountered inside streaming chat loop:', streamErr);
    } finally {
      // Cleanly release internal handles and close the SSE pipeline down gracefully
      reader.releaseLock();
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
