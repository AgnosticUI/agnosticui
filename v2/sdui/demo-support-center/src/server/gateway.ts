/**
 * @file gateway.ts
 * @description Real-time Hono API Gateway router executing streaming SDUI layout orchestration.
 * Integrates ChunkAccumulator brace-balancing pipelines and delegates lookups and security
 * to dedicated domain modules.
 */

import { Hono } from 'hono';
import { streamSSE } from 'hono/streaming';
import { serve } from '@hono/node-server';
import { ChunkAccumulator } from './streamUtils.js';
import { runAccountLookupTool } from './nodeFactory.js';
import { sanitizeAndValidateNode } from './nodeGuard.js';

const app = new Hono();

app.get('/api/health', (c) => {
  return c.text('Gateway Sandbox Operational');
});

app.post('/api/chat', async (c) => {
  c.header('Content-Type', 'text/event-stream');
  c.header('Cache-Control', 'no-cache');
  c.header('Connection', 'keep-alive');

  let userQueryMessage = '';
  const contentType = c.req.header('Content-Type') || '';

  if (contentType.includes('application/json')) {
    try {
      const body = await c.req.json();
      userQueryMessage = body.message || '';
    } catch (e) {
      // Graceful capture for streaming request variations
    }
  }

  const rawBodyStream = c.req.raw.body;

  // Ingestion Route 1: Standard immediate non-streaming request handshake
  if (!rawBodyStream || userQueryMessage) {
    console.log(`[GATEWAY_ROUTER] ⚡ Routing immediate synchronous payload for: "${userQueryMessage}"`);
    const toolNodes = runAccountLookupTool(userQueryMessage);

    return streamSSE(c, async (stream) => {
      for (const node of toolNodes) {
        const cleanNode = sanitizeAndValidateNode(node);
        if (cleanNode) {
          await stream.writeSSE({ data: JSON.stringify(cleanNode) });
        }
      }
      await stream.close();
    });
  }

  const accumulator = new ChunkAccumulator();
  const decoder = new TextDecoder();

  // Ingestion Route 2: Real-time asynchronous text fragment streaming channel
  return streamSSE(c, async (stream) => {
    try {
      for await (const value of rawBodyStream) {
        const textFragment = decoder.decode(value, { stream: true });
        const extractedNodes = accumulator.pushChunk(textFragment);

        for (const parsedNode of extractedNodes) {
          try {
            // Intercept incoming prompt message queries hidden in text streams
            if (parsedNode && 'message' in parsedNode && !('component' in parsedNode)) {
              console.log(`[GATEWAY_ROUTER] Extracted prompt intent text from stream: "${parsedNode.message}"`);
              const toolSynthesizedNodes = runAccountLookupTool(parsedNode.message);
              for (const sNode of toolSynthesizedNodes) {
                const cleanNode = sanitizeAndValidateNode(sNode);
                if (cleanNode) await stream.writeSSE({ data: JSON.stringify(cleanNode) });
              }
              continue;
            }

            // Route standard component shapes through our security verification shield
            const cleanNode = sanitizeAndValidateNode(parsedNode);
            if (cleanNode) {
              console.log(`[GATEWAY_ROUTER] ✅ Node [${cleanNode.component}] passed. Emitting SSE token payload...`);
              await stream.writeSSE({ data: JSON.stringify(cleanNode) });
            }

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

if (process.env.NODE_ENV !== 'test') {
  serve({ fetch: app.fetch, port: 3000 }, (info) => {
    console.log(`[GATEWAY_START] 🚀 Gateway live at http://localhost:${info.port}`);
  });
}

export default app;
