import { useState, useRef, useCallback, useEffect } from 'react';
import type { AgNode } from '@agnosticui/schema';
import { AgDynamicRenderer } from '@agnosticui/render-react';
import { ReactCollapsible } from 'agnosticui-core/collapsible/react';
import type { CollapsibleToggleEvent } from 'agnosticui-core/collapsible';
import { step1Nodes, getNextNodes } from '../fixtures/adaptive-questionnaire';
import { streamFixture } from '../lib/stream';
import './StreamingOutput.css';

const PANEL_AUTO_CLOSE_MS = 8000;

// Returns an array of AgNodes (error text + alert pairs) to inject after
// failing nodes. Checks required fields and max-date constraints.
function buildValidationErrors(
  nodes: AgNode[],
  answers: Record<string, unknown>
): { failingId: string; errorText: AgNode; errorAlert: AgNode }[] {
  const errors: { failingId: string; errorText: AgNode; errorAlert: AgNode }[] = [];
  for (const n of nodes) {
    const raw = n as unknown as Record<string, unknown>;
    const val = answers[n.id];
    const label = String(raw['label'] || raw['legend'] || 'This field');

    if (raw['required'] && (val === undefined || val === '')) {
      errors.push({
        failingId: n.id,
        errorText: { id: `${n.id}-error-text`, component: 'AgText', text: `${label} is required` } as AgNode,
        errorAlert: { id: `${n.id}-error-alert`, component: 'AgAlert', variant: 'danger', bordered: true, rounded: true, children: [`${n.id}-error-text`] } as AgNode,
      });
      continue;
    }

    const max = raw['max'] as string | undefined;
    if (max && typeof val === 'string' && val > max) {
      errors.push({
        failingId: n.id,
        errorText: { id: `${n.id}-error-text`, component: 'AgText', text: `${label} cannot be a future date` } as AgNode,
        errorAlert: { id: `${n.id}-error-alert`, component: 'AgAlert', variant: 'danger', bordered: true, rounded: true, children: [`${n.id}-error-text`] } as AgNode,
      });
    }
  }
  return errors;
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
      // Validate required fields and max constraints before advancing.
      // For each failing field, inject an AgAlert node immediately after it.
      const validationErrors = buildValidationErrors(nodes, answersRef.current);
      if (validationErrors.length > 0) {
        const failingIds = new Set(validationErrors.map(e => e.failingId));
        const errorMap = new Map(validationErrors.map(e => [e.failingId, e]));
        const withErrors = nodes.reduce<AgNode[]>((acc, n) => {
          acc.push(n);
          if (failingIds.has(n.id)) {
            const err = errorMap.get(n.id)!;
            acc.push(err.errorText);
            acc.push(err.errorAlert);
          }
          return acc;
        }, []);
        setNodes(withErrors);
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

    // Final submit — validate required fields then advance to confirmation.
    SUBMIT: () => {
      const validationErrors = buildValidationErrors(nodes, answersRef.current);
      if (validationErrors.length > 0) {
        const failingIds = new Set(validationErrors.map(e => e.failingId));
        const errorMap = new Map(validationErrors.map(e => [e.failingId, e]));
        const withErrors = nodes.reduce<AgNode[]>((acc, n) => {
          acc.push(n);
          if (failingIds.has(n.id)) {
            const err = errorMap.get(n.id)!;
            acc.push(err.errorText);
            acc.push(err.errorAlert);
          }
          return acc;
        }, []);
        setNodes(withErrors);
        return;
      }
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
