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
  | 'dom'
  | 'states'
  | 'runtime';

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
    totalStateViolations?: number;
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

const HARNESS_SELECTORS = new Set([
  'document',
  'document.documentElement',
  'body',
  'main#uirig-stage',
]);

/**
 * Matches light-DOM elements authored by component-registry.ts preview templates
 * (e.g. `h3`, `div`, `p`, `input.demo-input`) rather than `<ag-*>` custom elements.
 */
function isLightDomHarnessNode(violation: UirigRawViolation): boolean {
  if (HARNESS_SELECTORS.has(violation.selector)) {
    return true;
  }

  if (violation.inShadowDom) {
    return false;
  }

  const rootTag =
    violation.selector.trim().split(/[\s.#[:>]/)[0]?.toLowerCase() ?? '';
  return rootTag.length > 0 && !rootTag.startsWith('ag-');
}

/**
 * Matches touch-target spacing collisions caused by adjacent standalone demo
 * instances inside `component-registry.ts` flex rows (`gap: 16px` -> `+8px` short of `24px`),
 * while preserving genuine overlaps (e.g. `+25px`) as `component-defect`.
 */
function isSiblingDemoCollision(violation: UirigRawViolation): boolean {
  if (
    violation.engine !== 'stress' ||
    violation.violationType !== 'touch_target_collision' ||
    violation.measuredDelta !== '+8px'
  ) {
    return false;
  }

  return (
    violation.selector === 'ag-button >> shadow-root >> button' ||
    violation.selector === 'ag-icon-button >> shadow-root >> button' ||
    violation.selector ===
      'ag-menu-button >> shadow-root >> ag-button >> shadow-root >> button'
  );
}

/**
 * Replaces runtime `generateUniqueId()` 8- or 9-character base36 tokens embedded
 * inside element IDs (e.g. `#accordion-item-0cv3q6j2a-button` -> `#accordion-item-<id>-button`)
 * so repeated component instances collapse into a single deduplicated finding.
 */
export function normalizeSelectorForFingerprint(value: string): string {
  return value.replace(
    /(#[a-z0-9-]+-)[a-z0-9]{8,9}(-[a-z0-9-]+|['"]|$)/gi,
    '$1<id>$2'
  );
}

export function classifyViolationCause(
  violation: UirigRawViolation
): { cause: FindingCause; upstreamTrackingId: string | null } {
  // Runtime JavaScript errors are genuine defects, never harness artifacts
  if (violation.engine === 'runtime') {
    return { cause: 'component-defect', upstreamTrackingId: null };
  }

  // Harness container, light-DOM template wrappers, and multi-instance row spacing
  if (isLightDomHarnessNode(violation) || isSiblingDemoCollision(violation)) {
    return { cause: 'harness-artifact', upstreamTrackingId: null };
  }

  return { cause: 'component-defect', upstreamTrackingId: null };
}

export function deduplicateViolations(
  component: ComponentName,
  report: UirigRawReport,
  _knownDarkTokenValues: ReadonlySet<string> = new Set()
): TriagedFinding[] {
  const grouped = new Map<string, TriagedFinding>();

  for (const v of report.violations) {
    const normalizedSelector = normalizeSelectorForFingerprint(v.selector);
    const normalizedDelta = normalizeSelectorForFingerprint(v.measuredDelta);
    const classification = classifyViolationCause(v);
    const fingerprint = [
      component,
      v.engine,
      v.violationType,
      normalizedSelector,
      normalizedDelta,
      classification.cause,
      classification.upstreamTrackingId ?? '',
    ].join('::');

    const existing = grouped.get(fingerprint);
    if (existing) {
      if (!existing.viewports.includes(v.viewport)) {
        existing.viewports.push(v.viewport);
      }
      existing.totalOccurrences += v.occurrenceCount;
      continue;
    }

    grouped.set(fingerprint, {
      fingerprint,
      component,
      engine: v.engine,
      violationType: v.violationType,
      selector: normalizedSelector,
      inShadowDom: v.inShadowDom,
      measuredDelta: normalizedDelta,
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
