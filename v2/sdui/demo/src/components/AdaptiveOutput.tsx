import { useState, useRef, useCallback, useEffect } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { ReactCollapsible } from 'agnosticui-core/collapsible/react';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import { step1Nodes, getNextNodes } from '../fixtures/adaptive-questionnaire';
import { streamFixture } from '../lib/stream';
import './StreamingOutput.css';

const PANEL_AUTO_CLOSE_MS = 8000;

// AdaptiveOutput implements the questionnaire integration pattern from
// SPECIFICATION.md section 5.4:
//
//   User answers question
//   → on_change fires with { id, value }
//   → consumer accumulates answers[id] = value
//   → on NEXT_STEP, consumer calls getNextNodes(answers) (the "server")
//   → renderer displays the next screen
//
// getNextNodes() is a plain JS function in the fixture file. Swap it for a
// fetch() call and the consumer code here is identical.

export function AdaptiveOutput() {
  const [nodes, setNodes] = useState<AgNode[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const answersRef = useRef<Record<string, unknown>>({});
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const cancelRef = useRef<() => void>(() => {});
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const historyRef = useRef<AgNode[][]>([]);

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

  // Stream the first screen on mount.
  useEffect(() => {
    openPanel();
    runStream(step1Nodes);
    return () => cancelRef.current();
  }, [runStream, openPanel]);

  useEffect(() => () => { if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current); }, []);

  const actions = {
    // Accumulate every field change into the answers object.
    // payload shape: { id: string; value: unknown } (standardized in #461)
    ANSWER_CHANGE: (payload: unknown) => {
      const { id, value } = payload as { id: string; value: unknown };
      answersRef.current = { ...answersRef.current, [id]: value };
      setAnswers({ ...answersRef.current });
      // Clear any validation error on this node once the user starts filling it in.
      setNodes(prev => prev.map(n => {
        const raw = n as unknown as Record<string, unknown>;
        return n.id === id && raw['errorMessage'] ? { ...n, errorMessage: undefined } : n;
      }));
    },

    // Ask the "server" (getNextNodes) what screen comes next given accumulated
    // answers, then display it. No streaming on transitions — they feel instant.
    NEXT_STEP: () => {
      // Validate required fields on the current screen before advancing.
      const invalid = nodes.filter(n => {
        const raw = n as unknown as Record<string, unknown>;
        return raw['required'] && (answersRef.current[n.id] === undefined || answersRef.current[n.id] === '');
      });
      if (invalid.length > 0) {
        setNodes(nodes.map(n => {
          if (!invalid.some(i => i.id === n.id)) return n;
          const raw = n as unknown as Record<string, unknown>;
          return { ...n, errorMessage: `${raw['label'] || 'This field'} is required` };
        }));
        return;
      }
      const next = getNextNodes(answersRef.current);
      historyRef.current = [...historyRef.current, nodes];
      openPanel();
      setNodes(next);
    },

    PREV_STEP: () => {
      const prev = historyRef.current[historyRef.current.length - 1];
      if (!prev) return;
      historyRef.current = historyRef.current.slice(0, -1);
      setNodes(prev);
    },

    // Final submit — getNextNodes returns confirmationNodes when all fields present.
    SUBMIT: () => {
      answersRef.current = { ...answersRef.current, 'aq-name': answersRef.current['aq-name'] ?? '' };
      const next = getNextNodes(answersRef.current);
      openPanel();
      setNodes(next);
    },

    // Reset the entire flow.
    RESTART: () => {
      answersRef.current = {};
      historyRef.current = [];
      setAnswers({});
      openPanel();
      runStream(step1Nodes);
    },
  };

  return (
    <div>
      <ReactCollapsible
        className="node-panel"
        open={panelOpen}
        onToggle={handleCollapsibleToggle}
      >
        <span slot="summary">Accumulated answers</span>
        <pre className="node-panel-pre">{JSON.stringify(answers, null, 2)}</pre>
      </ReactCollapsible>
      <AgDynamicRenderer nodes={nodes} actions={actions} />
    </div>
  );
}
