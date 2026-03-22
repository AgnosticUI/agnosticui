import { useState, useEffect, useCallback, useRef } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AG_FACE_SELECTOR } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { ReactCollapsible } from 'agnosticui-core/collapsible/react';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import { streamLlmNodes } from '../lib/llm-stream';
import './LlmOutput.css';

type Status = 'streaming' | 'done' | 'error';

const PANEL_AUTO_CLOSE_MS = 8000;

interface LlmOutputProps {
  prompt: string;
  systemPrompt: string;
}

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

export function LlmOutput({ prompt, systemPrompt }: LlmOutputProps) {
  const [nodes, setNodes] = useState<AgNode[]>([]);
  const [status, setStatus] = useState<Status>('streaming');
  const [error, setError] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
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

  useEffect(() => {
    setNodes([]);
    setStatus('streaming');
    setError(null);
    openPanel();

    let cancelled = false;

    (async () => {
      try {
        for await (const node of streamLlmNodes(prompt, systemPrompt)) {
          if (cancelled) break;
          setNodes(prev => [...prev, node]);
        }
        if (!cancelled) setStatus('done');
      } catch (err) {
        if (!cancelled) {
          setStatus('error');
          setError(err instanceof Error ? err.message : String(err));
        }
      }
    })();

    return () => { cancelled = true; };
  }, [prompt, systemPrompt, openPanel]);

  useEffect(() => () => { if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current); }, []);

  // For LLM output, actions just log — the user can observe the alias name.
  const actions: Record<string, () => void> = new Proxy({}, {
    get: (_, alias: string) => () => {
      if (!validateOutput(wrapperRef.current)) return;
      // eslint-disable-next-line no-console
      console.info(`[SDUI action] ${alias}`);
      window.alert(`Action triggered: ${alias}\n\nIn a real app, this alias would drive the next step.`);
    },
  });

  return (
    <div ref={wrapperRef}>
      <div className="llm-status">
        {status === 'streaming' && (
          <span className="llm-status-badge llm-status-streaming">Generating…</span>
        )}
        {status === 'done' && (
          <span className="llm-status-badge llm-status-done">{nodes.length} nodes</span>
        )}
        {status === 'error' && (
          <span className="llm-status-badge llm-status-error">Error</span>
        )}
      </div>

      {status === 'error' && error && (
        <div className="llm-error">{error}</div>
      )}

      {nodes.length > 0 && (
        <ReactCollapsible
          className="node-panel"
          open={panelOpen}
          onToggle={handleCollapsibleToggle}
        >
          <span slot="summary">Node array</span>
          <pre className="node-panel-pre">{JSON.stringify(nodes, null, 2)}</pre>
        </ReactCollapsible>
      )}

      <AgDynamicRenderer nodes={nodes} actions={actions} />
    </div>
  );
}
