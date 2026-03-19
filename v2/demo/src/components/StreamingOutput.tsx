import { useState, useEffect } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { pickVariation } from '../fixtures/index';
import { streamFixture } from '../lib/stream';

interface StreamingOutputProps {
  workflow: string;
  seed: number;
}

export function StreamingOutput({ workflow, seed }: StreamingOutputProps) {
  const [nodes, setNodes] = useState<AgNode[]>([]);

  useEffect(() => {
    setNodes([]);
    const fixture = pickVariation(workflow);
    let cancelled = false;
    (async () => {
      for await (const node of streamFixture(fixture)) {
        if (cancelled) break;
        setNodes(prev => [...prev, node]);
      }
    })();
    return () => { cancelled = true; };
  }, [workflow, seed]);

  return <AgDynamicRenderer nodes={nodes} />;
}
