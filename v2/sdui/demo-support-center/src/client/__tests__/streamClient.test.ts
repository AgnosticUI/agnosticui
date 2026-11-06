// v2/sdui/demo-support-center/src/client/__tests__/streamClient.test.ts

import { describe, it, expect } from 'vitest';
import { SduiStreamClient } from '../streamClient.js';
import { type AgNode } from '@agnosticui/schema';

describe('AgnosticUI SDUI Front-End Stream Client Suite', () => {
  it('should iteratively catch text fragments and trigger callbacks using async iterators', async () => {
    console.log('\n--- START TEST: SduiStreamClient SPECIFICATION ANALYSIS ---');
    
    const client = new SduiStreamClient('/api/mock-chat');
    const capturedNodes: AgNode[] = [];
    const statusTrack: string[] = [];

    // Mock global fetch mechanism utilizing native ReadableStream async operators
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => {
      const textChunks = [
        'data: {"id": "node_card", "component": "AgCard", "props": {"title": "Billing Panel"}}\n',
        'data: {"id": "node_btn", "component": "AgButton", "props": {"label": "Remediate"}}\n'
      ];

      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          for (const chunk of textChunks) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        }
      });

      return {
        ok: true,
        body: stream
      } as Response;
    };

    try {
      await client.fetchUiStream(
        'Verify profile account usr_992',
        (node) => {
          console.log(`[STREAM_CLIENT_TEST] 📥 Captured chunk node [ID: ${node.id}, Component: ${node.component}]`);
          capturedNodes.push(node);
        },
        (status) => {
          statusTrack.push(status);
        }
      );

      console.log(`[STREAM_CLIENT_TEST] [TEST_AUDIT] 📥 Received Nodes: ${capturedNodes.length}`);
      console.log(`[STREAM_CLIENT_TEST] [TEST_AUDIT] 📑 Status Flow: ${statusTrack.join(' -> ')}`);

      expect(capturedNodes.length).toBe(2);
      expect(capturedNodes[0].id).toBe('node_card');
      expect(capturedNodes[1].component).toBe('AgButton');
      expect(statusTrack).toContain('CONNECTED');
      expect(statusTrack).toContain('COMPLETED');
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});
