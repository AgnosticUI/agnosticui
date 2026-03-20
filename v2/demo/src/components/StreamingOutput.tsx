import { useState, useEffect, useCallback, useRef } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AG_FACE_SELECTOR } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { pickVariation, confirmFixtures, workflowActions } from '../fixtures/index';
import { streamFixture } from '../lib/stream';

function validateOutput(container: Element | null): boolean {
  if (!container) return true;
  const elements = container.querySelectorAll(AG_FACE_SELECTOR);
  let valid = true;
  elements.forEach(el => {
    if (typeof (el as HTMLInputElement).reportValidity === 'function') {
      if (!(el as HTMLInputElement).reportValidity()) valid = false;
    }
  });
  return valid;
}

interface StreamingOutputProps {
  workflow: string;
  seed: number;
}

export function StreamingOutput({ workflow, seed }: StreamingOutputProps) {
  const [nodes, setNodes] = useState<AgNode[]>([]);
  const cancelRef = useRef<() => void>(() => {});
  const wrapperRef = useRef<HTMLDivElement>(null);

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
      if (!validateOutput(wrapperRef.current)) return;
      const fixture = confirmFixtures[confirmKey];
      if (fixture) runStream(fixture);
    };
  }

  return (
    <div ref={wrapperRef}>
      <AgDynamicRenderer nodes={nodes} actions={actions} />
    </div>
  );
}
