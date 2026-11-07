/**
 * @file helpers.ts
 * @description Centralized, reusable frontend testing utility harness for the demo support center.
 * Abstracts noisy DOM factories and binary streaming mocks away from specification assertions.
 */

import { type AgNode } from '@agnosticui/schema';

/**
 * Extended testing type contract mimicking the public interface API 
 * of the canonical <ag-dynamic-renderer> web component.
 */
export interface MockRenderer extends HTMLElement {
  nodes: AgNode[];
  resetCanvasCount: number;
  resetCanvas: () => void;
}

/**
 * Isolated factory constructing the simulated light-DOM dashboard elements required by the panel.
 */
export function createMockDOM() {
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  form.appendChild(input);

  const renderer = document.createElement('ag-dynamic-renderer') as MockRenderer;
  renderer.nodes = [];
  renderer.resetCanvasCount = 0;
  renderer.resetCanvas = function () {
    this.resetCanvasCount++;
    this.nodes = [];
  };

  return { form, input, renderer };
}

/**
 * Intercepts the environment fetch channel and simulates an incoming Server-Sent Events network stream.
 * Automatically handles binary Uint8Array chunk conversions natively under the hood.
 * 
 * @param chunks - String array representing the separate text line packets emitted by the stream emitter.
 * @returns Function - A deterministic cleanup callback that guarantees the environment's fetch is restored.
 */
export function mockFetchStream(chunks: string[]): () => void {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async () => {
    const readableStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for (const chunk of chunks) {
          controller.enqueue(encoder.encode(chunk));
        }
        controller.close();
      }
    });

    return { ok: true, body: readableStream } as Response;
  };

  // Hand back a locked restoration closure handle to guarantee environmental containment
  return () => {
    globalThis.fetch = originalFetch;
  };
}
