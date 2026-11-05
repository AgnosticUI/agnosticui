/**
 * @file streamClient.test.ts
 * @description Unit tests verifying SduiStreamClient extraction, framing, and callbacks.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { SduiStreamClient, AgNode } from '../streamClient.js';

describe('AgnosticUI SDUI Front-End Stream Client Suite', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should iteratively catch text fragments and trigger callbacks with fully formed AgNode layouts using async iterators', async () => {
    console.log('\n--- START TEST: SduiStreamClient SPECIFICATION ANALYSIS ---');

    // Simulate standard chunk events output by our SSE endpoint
    const mockServerChunks = [
      'data: {"id": "node_card", "component": "AgCard", ',
      '"props": {"title": "Mock Card Title"}}\n',
      'data: {"id": "node_btn", "component": "AgButton"}\n'
    ];

    const encoder = new TextEncoder();
    
    // Form standard pre-encoded binary mock arrays to iterate over
    const binaryChunks = mockServerChunks.map(chunk => encoder.encode(chunk));

    // Construct a mock stream companion structure satisfying the async iterator interface specification
    const mockReadableStream = {
      [Symbol.asyncIterator]: async function* () {
        for (const binaryChunk of binaryChunks) {
          yield binaryChunk;
        }
      }
    };

    // Stub out the global fetch broker sandbox explicitly
    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      body: mockReadableStream
    });
    vi.stubGlobal('fetch', fetchSpy);

    const client = new SduiStreamClient('/api/mock-chat');
    const receivedNodes: AgNode[] = [];
    const statusSequence: string[] = [];

    // Exercise the stream client pipeline execution loop
    await client.fetchUiStream(
      'Test message query intent string',
      (node) => {
        receivedNodes.push(node);
      },
      (status) => {
        statusSequence.push(status);
      }
    );

    console.log(`[TEST_AUDIT] 📥 Received Nodes Count: ${receivedNodes.length}`);
    console.log(`[TEST_AUDIT] 📑 Captured Status Flow: ${statusSequence.join(' -> ')}`);

    // Enforce our architectural client processing contracts
    expect(statusSequence).toContain('CONNECTED');
    expect(statusSequence).toContain('COMPLETED');
    expect(receivedNodes.length).toBe(2);
    
    expect(receivedNodes[0].id).toBe('node_card');
    expect(receivedNodes[0].component).toBe('AgCard');
    expect(receivedNodes[0].props?.title).toBe('Mock Card Title');
    
    expect(receivedNodes[1].id).toBe('node_btn');
    expect(receivedNodes[1].component).toBe('AgButton');
  });
});
