import { useState, useEffect, useCallback, useRef } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AG_FACE_SELECTOR } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { ReactCollapsible } from 'agnosticui-core/collapsible/react';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible/react';
import { pickVariation, confirmFixtures, workflowActions } from '../fixtures/index';
import { streamFixture } from '../lib/stream';
import './StreamingOutput.css';

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

const PANEL_AUTO_CLOSE_MS = 8000;

export function StreamingOutput({ workflow, seed }: StreamingOutputProps) {
  const [nodes, setNodes] = useState<AgNode[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const cancelRef = useRef<() => void>(() => {});
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openPanel = useCallback(() => {
    setPanelOpen(true);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    fadeTimerRef.current = setTimeout(() => setPanelOpen(false), PANEL_AUTO_CLOSE_MS);
  }, []);

  const handleCollapsibleToggle = useCallback((e: CollapsibleToggleEvent) => {
    const nowOpen = e.detail.open;
    setPanelOpen(nowOpen);
    if (nowOpen) {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = setTimeout(() => setPanelOpen(false), PANEL_AUTO_CLOSE_MS);
    } else {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    }
  }, []);

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

  // Reset to step 1 when workflow or seed changes and open the panel.
  useEffect(() => {
    openPanel();
    runStream(pickVariation(workflow));
    return () => cancelRef.current();
  }, [workflow, seed, runStream, openPanel]);

  // Cleanup timer on unmount.
  useEffect(() => () => { if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current); }, []);

  // Build the actions map: each alias swaps to its confirmation fixture.
  const aliases = workflowActions[workflow] ?? {};
  const actions: Record<string, () => void> = {};
  for (const [alias, confirmKey] of Object.entries(aliases)) {
    actions[alias] = () => {
      if (!validateOutput(wrapperRef.current)) return;
      const fixture = confirmFixtures[confirmKey];
      if (fixture) { openPanel(); runStream(fixture); }
    };
  }

  return (
    <div ref={wrapperRef}>
      <ReactCollapsible
        className="node-panel"
        open={panelOpen}
        onToggle={handleCollapsibleToggle}
      >
        <span slot="summary">Node array</span>
        <pre className="node-panel-pre">{JSON.stringify(nodes, null, 2)}</pre>
      </ReactCollapsible>
      <AgDynamicRenderer nodes={nodes} actions={actions} />
    </div>
  );
}
