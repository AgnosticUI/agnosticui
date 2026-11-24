// v2/lib/tests/uirig/triage.ts
import type { ComponentName } from '../shared/component-registry';

export type FindingCause =
  | 'component-defect'
  | 'upstream-tool-bug'
  | 'harness-artifact'
  | 'false-positive';

export type UirigEngine =
  | 'tokens'
  | 'contrast'
  | 'dark-mode'
  | 'stress'
  | 'cls'
  | 'dom';

export interface UirigRawViolation {
  engine: UirigEngine;
  violationType: string;
  url: string;
  viewport: string;
  hostComponent: string | null;
  a2ui: unknown;
  selector: string;
  inShadowDom: boolean;
  occurrenceCount: number;
  measuredDelta: string;
  suggestedToken?: string | null;
  remediationAdvice: string;
  sourceFile: string | null;
  lineNumber: number | null;
  columnNumber: number | null;
  unifiedDiff: string | null;
  sampleSelectors?: string[];
}

export interface UirigRawReport {
  tool: 'uirig';
  exitCode: number;
  passed: boolean;
  timestamp: string;
  summary: {
    totalViewportsAudited: number;
    totalTokenViolations: number;
    totalContrastViolations: number;
    totalDarkModeViolations: number;
    totalStressViolations: number;
    totalClsViolations: number;
    totalDomViolations: number;
    totalRuntimeErrors: number;
  };
  violations: UirigRawViolation[];
}

export interface TriagedFinding {
  fingerprint: string;
  component: ComponentName;
  engine: UirigEngine;
  violationType: string;
  selector: string;
  inShadowDom: boolean;
  measuredDelta: string;
  suggestedToken: string | null;
  remediationAdvice: string;
  sourceFile: string | null;
  lineNumber: number | null;
  viewports: string[];
  totalOccurrences: number;
  cause: FindingCause;
  upstreamTrackingId: string | null;
}

const HARNESS_SELECTORS = new Set(['document', 'body', 'main#uirig-stage']);

export function classifyViolationCause(
  violation: UirigRawViolation,
  knownDarkTokenValues: ReadonlySet<string> = new Set()
): { cause: FindingCause; upstreamTrackingId: string | null } {
  const isDarkContext = violation.viewport.includes('[theme: dark]');

  // UTB-001: @rlevin/uirig@0.3.0 single tokensPath ignores ag-tokens-dark.css in dark mode
  if (violation.engine === 'tokens' && isDarkContext) {
    const colorMatch = violation.measuredDelta.match(/rgb\([^)]+\)/);
    if (colorMatch && knownDarkTokenValues.has(colorMatch[0])) {
      return { cause: 'upstream-tool-bug', upstreamTrackingId: 'UTB-001' };
    }
  }

  // UTB-002: Shadow DOM <slot> evaluated against page body background instead of enclosing button surface
  if (
    (violation.engine === 'contrast' || violation.engine === 'dark-mode') &&
    violation.inShadowDom &&
    violation.selector.endsWith('>> slot')
  ) {
    return { cause: 'upstream-tool-bug', upstreamTrackingId: 'UTB-002' };
  }

  // Harness container artifacts
  if (HARNESS_SELECTORS.has(violation.selector)) {
    return { cause: 'harness-artifact', upstreamTrackingId: null };
  }

  return { cause: 'component-defect', upstreamTrackingId: null };
}

export function deduplicateViolations(
  component: ComponentName,
  report: UirigRawReport,
  knownDarkTokenValues: ReadonlySet<string> = new Set()
): TriagedFinding[] {
  const grouped = new Map<string, TriagedFinding>();

  for (const v of report.violations) {
    const fingerprint = [
      component,
      v.engine,
      v.violationType,
      v.selector,
      v.measuredDelta,
    ].join('::');

    const existing = grouped.get(fingerprint);
    if (existing) {
      if (!existing.viewports.includes(v.viewport)) {
        existing.viewports.push(v.viewport);
      }
      existing.totalOccurrences += v.occurrenceCount;
      continue;
    }

    const classification = classifyViolationCause(v, knownDarkTokenValues);
    grouped.set(fingerprint, {
      fingerprint,
      component,
      engine: v.engine,
      violationType: v.violationType,
      selector: v.selector,
      inShadowDom: v.inShadowDom,
      measuredDelta: v.measuredDelta,
      suggestedToken: v.suggestedToken ?? null,
      remediationAdvice: v.remediationAdvice,
      sourceFile: v.sourceFile,
      lineNumber: v.lineNumber,
      viewports: [v.viewport],
      totalOccurrences: v.occurrenceCount,
      cause: classification.cause,
      upstreamTrackingId: classification.upstreamTrackingId,
    });
  }

  return Array.from(grouped.values()).sort((a, b) =>
    a.fingerprint.localeCompare(b.fingerprint)
  );
}
