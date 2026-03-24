import { useState, useRef, useCallback, useEffect } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { ReactCollapsible } from 'agnosticui-core/collapsible/react';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import { step1Nodes, getNextNodes } from '../fixtures/adaptive-questionnaire';
import { streamFixture } from '../lib/stream';
import './StreamingOutput.css';

const PANEL_AUTO_CLOSE_MS = 8000;

type ValidationError = { failingId: string; errorText: AgNode; errorAlert: AgNode };

// Checks required fields and date range constraints against accumulated answers.
// Returns error node pairs to inject after each failing node.
function buildValidationErrors(nodes: AgNode[], answers: Record<string, unknown>): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const n of nodes) {
    const raw = n as unknown as Record<string, unknown>;
    const val = answers[n.id];
    const label = String(raw['label'] || raw['legend'] || 'This field');
    let message: string | null = null;

    if (raw['required'] && (val === undefined || val === '')) {
      message = `${label} is required`;
    } else {
      const max = raw['max'] as string | undefined;
      if (max && typeof val === 'string' && val > max) {
        message = `${label} cannot be a future date`;
      }
      const min = raw['min'] as string | undefined;
      if (!message && min && typeof val === 'string' && val < min) {
        message = `${label} cannot be a past date`;
      }
    }

    if (message) {
      errors.push({
        failingId: n.id,
        errorText: { id: `${n.id}-error-text`, component: 'AgText', text: message } as AgNode,
        errorAlert: { id: `${n.id}-error-alert`, component: 'AgAlert', variant: 'danger', bordered: true, rounded: true, children: [`${n.id}-error-text`] } as AgNode,
      });
    }
  }
  return errors;
}

// Injects error node pairs immediately after each failing node in the list.
function injectValidationErrors(nodes: AgNode[], errors: ValidationError[]): AgNode[] {
  const errorMap = new Map(errors.map(e => [e.failingId, e]));
  return nodes.reduce<AgNode[]>((acc, n) => {
    acc.push(n);
    const err = errorMap.get(n.id);
    if (err) {
      acc.push(err.errorText);
      acc.push(err.errorAlert);
    }
    return acc;
  }, []);
}

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
      // Remove any validation alert that was injected for this field, and
      // update selection group nodes to controlled mode so their checked
      // state is driven by the node value (not internal uncontrolled state).
      // Also update child button/card checked props so @lit/react doesn't
      // overwrite the group's internal _syncChildButtons result with undefined.
      setNodes(prev => {
        const groupNode = prev.find(n => n.id === id &&
          (n.component === 'AgSelectionButtonGroup' || n.component === 'AgSelectionCardGroup'));
        const groupChildren = groupNode
          ? ((groupNode as unknown as Record<string, unknown>)['children'] as string[] ?? [])
          : [];
        return prev
          .filter(n => n.id !== `${id}-error-text` && n.id !== `${id}-error-alert`)
          .map(n => {
            if (n.id === id && (n.component === 'AgSelectionButtonGroup' || n.component === 'AgSelectionCardGroup')) {
              return { ...n, value: value as string } as AgNode;
            }
            if (groupChildren.includes(n.id) && (n.component === 'AgSelectionButton' || n.component === 'AgSelectionCard')) {
              const btnRaw = n as unknown as Record<string, unknown>;
              return { ...n, checked: btnRaw['value'] === value } as AgNode;
            }
            return n;
          });
      });
    },

    // Ask the "server" (getNextNodes) what screen comes next given accumulated
    // answers, then display it. No streaming on transitions — they feel instant.
    NEXT_STEP: () => {
      const errors = buildValidationErrors(nodes, answersRef.current);
      if (errors.length > 0) { setNodes(injectValidationErrors(nodes, errors)); return; }
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

    // Final submit — validate required fields then advance to confirmation.
    SUBMIT: () => {
      const errors = buildValidationErrors(nodes, answersRef.current);
      if (errors.length > 0) { setNodes(injectValidationErrors(nodes, errors)); return; }
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
