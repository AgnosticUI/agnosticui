import { useState, useEffect, useRef, useCallback } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { ReactCollapsible } from 'agnosticui-core/collapsible/react';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import { collapsibleFixture } from '../fixtures/collapsible-demo';
import { streamFixture } from '../lib/stream';
import './StreamingOutput.css';

const PANEL_AUTO_CLOSE_MS = 8000;

export function CollapsibleDemo() {
  const [nodes, setNodes] = useState<AgNode[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const cancelRef = useRef<() => void>(() => {});
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

  useEffect(() => {
    openPanel();
    runStream(collapsibleFixture);
    return () => cancelRef.current();
  }, [runStream, openPanel]);

  useEffect(() => () => { if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current); }, []);

  const actions = {
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
    SLIDER_CHANGE: (payload: unknown) => {
      const { value } = payload as { id: string; value: number };
      setNodes(prev =>
        prev.map(n => n.id === 'slider-value' ? { ...n, text: `Count: ${value}` } as AgNode : n)
      );
    },
  };

  return (
    <>
      <ReactCollapsible
        className="node-panel"
        open={panelOpen}
        onToggle={handleCollapsibleToggle}
      >
        <span slot="summary">Node array</span>
        <pre className="node-panel-pre">{JSON.stringify(nodes, null, 2)}</pre>
      </ReactCollapsible>
      <AgDynamicRenderer nodes={nodes} actions={actions} />
    </>
  );
}
