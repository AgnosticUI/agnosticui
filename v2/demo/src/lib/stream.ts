import type { AgNode } from '@agnosticui/schema';

export async function* streamFixture(
  nodes: AgNode[],
  delayMs?: number,
): AsyncGenerator<AgNode> {
  const delay = delayMs ?? Math.max(200, 1200 / nodes.length);
  for (const node of nodes) {
    await new Promise(r => setTimeout(r, delay));
    yield node;
  }
}
