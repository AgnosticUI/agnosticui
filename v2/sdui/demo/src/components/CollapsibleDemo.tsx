import { useState, useEffect, useRef, useCallback } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { collapsibleFixture } from '../fixtures/collapsible-demo';
import { streamFixture } from '../lib/stream';

export function CollapsibleDemo() {
  const [nodes, setNodes] = useState<AgNode[]>([]);
  const cancelRef = useRef<() => void>(() => {});

  const runStream = useCallback(async (fixture: AgNode[]) => {
    cancelRef.current();
    let cancelled = false;
    cancelRef.current = () => { cancelled = true; };
    setNodes([]);
    for await (const node of streamFixture(fixture)) {
      if (cancelled) break;
      setNodes(prev => [...prev, node]);
    }
  }, []);

  useEffect(() => {
    runStream(collapsibleFixture);
    return () => cancelRef.current();
  }, [runStream]);

  const actions = {
    // When a collapsible toggles, open it and close all others (accordion behavior).
    COLLAPSIBLE_TOGGLE: (payload: unknown) => {
      const { id, value } = payload as { id: string; value: boolean };
      setNodes(prev =>
        prev.map(n => {
          if (n.component !== 'AgCollapsible') return n;
          const raw = n as unknown as Record<string, unknown>;
          const newOpen = n.id === id ? value : (value ? false : raw['open'] as boolean);
          return { ...n, open: newOpen } as AgNode;
        })
      );
    },
  };

  return <AgDynamicRenderer nodes={nodes} actions={actions} />;
}
