import { useState, useEffect, useCallback, useRef } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { pickVariation, confirmFixtures, workflowActions } from '../fixtures/index';
import { streamFixture } from '../lib/stream';

interface StreamingOutputProps {
  workflow: string;
  seed: number;
}

export function StreamingOutput({ workflow, seed }: StreamingOutputProps) {
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

  // Reset to step 1 when workflow or seed changes.
  useEffect(() => {
    runStream(pickVariation(workflow));
    return () => cancelRef.current();
  }, [workflow, seed, runStream]);

  // Build the actions map: each alias swaps to its confirmation fixture.
  const aliases = workflowActions[workflow] ?? {};
  const actions: Record<string, () => void> = {};
  for (const [alias, confirmKey] of Object.entries(aliases)) {
    actions[alias] = () => {
      const fixture = confirmFixtures[confirmKey];
      if (fixture) runStream(fixture);
    };
  }

  return <AgDynamicRenderer nodes={nodes} actions={actions} />;
}
