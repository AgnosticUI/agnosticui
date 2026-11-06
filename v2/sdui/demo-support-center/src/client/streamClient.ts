/**
 * @file streamClient.ts
 * @description Framework-agnostic streaming client for consuming SDUI Server-Sent Events (SSE).
 * Uses modern for await...of async iterators to safely consume network stream chunks,
 * importing type schemas straight from our dogfooded core package boundary.
 */

import { type AgNode } from '@agnosticui/schema';
import { type NodeCallback, type StatusCallback } from './index.js';

/**
 * Client controller orchestrating real-time SSE stream ingestion and node extraction.
 */
export class SduiStreamClient {
  private gatewayUrl: string;

  /**
   * Initializes the client context targeting your operational gateway configuration router.
   * @param gatewayUrl - The target base URL or complete route path mapping (e.g., '/api/chat').
   */
  constructor(gatewayUrl: string = '/api/chat') {
    this.gatewayUrl = gatewayUrl;
  }

  /**
   * Dispatches a user query to the streaming endpoint and processes events iteratively.
   * @param message - The chat message or intent string submitted by the user.
   * @param onNodeReceived - Callback fired the instant a complete, balanced AgNode is parsed.
   * @param onStatusChange - Callback tracking state transitions of the underlying connection.
   */
  public async fetchUiStream(
    message: string,
    onNodeReceived: NodeCallback,
    onStatusChange: StatusCallback
  ): Promise<void> {
    try {
      console.log(`[STREAM_CLIENT] 🌐 Initializing network stream sequence targeting gateway route: "${this.gatewayUrl}"`);
      onStatusChange('CONNECTED');

      // Dispatch our payload transaction via fetch utilizing modern body stream protocols
      const response = await fetch(this.gatewayUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`[CLIENT_STREAM_ERROR] Server returned failure status code: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('[CLIENT_STREAM_ERROR] Streaming response payload body is completely null or unavailable.');
      }

      const decoder = new TextDecoder();
      let internalLineBuffer = '';

      console.log('[STREAM_CLIENT] ⏳ Processing inbound Uint8Array binary chunks via native async iteration...');

      // Direct asynchronous iteration eliminates old reader locks and manual 'while(true)' bounds
      for await (const chunk of response.body) {
        // Decode binary Uint8Array stream segment into readable text fragments
        const textFragment = decoder.decode(chunk, { stream: true });
        internalLineBuffer += textFragment;

        // Process full lines separated by newline delimiters typical of SSE streams
        let newlineIndex = internalLineBuffer.indexOf('\n');
        while (newlineIndex !== -1) {
          const individualLine = internalLineBuffer.slice(0, newlineIndex).trim();
          // Advance the buffer window forward past the parsed text layout slice boundary
          internalLineBuffer = internalLineBuffer.slice(newlineIndex + 1);

          // Evaluate if the current line matches the standard compliant SSE data block identifier
          if (individualLine.startsWith('data:')) {
            const rawJsonString = individualLine.replace(/^data:\s*/, '').trim();

            if (rawJsonString) {
              try {
                // Verify if it contains a status parameter or forms a layout node object
                const parsedPayload = JSON.parse(rawJsonString);
                
                if (parsedPayload && parsedPayload.status !== 'EMPTY_PROMPT_STREAM') {
                  console.log(`[STREAM_CLIENT] 📥 Successfully isolated chunk package packet node [ID: ${parsedPayload.id}, Component: ${parsedPayload.component}]`);
                  // Forward the clean, structural node up into our reactive render callbacks typed safely against the schema core
                  onNodeReceived(parsedPayload as AgNode);
                }
              } catch (jsonErr) {
                console.error('[CLIENT_STREAM_ERROR] Failed parsing individual line packet payload:', jsonErr);
              }
            }
          }

          // Search subsequent lines contained inside our remaining buffer space
          newlineIndex = internalLineBuffer.indexOf('\n');
        }
      }

      console.log('[STREAM_CLIENT] 🏁 Async iteration stream channel processing successfully completed.');
      onStatusChange('COMPLETED');
    } catch (error) {
      console.error('[CLIENT_STREAM_CRITICAL] Exception caught inside network ingestion channel:', error);
      onStatusChange('FAILED');
    }
  }
}
