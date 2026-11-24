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
 * Matches 1px × 1px visually-hidden screen-reader-only nodes and clipped native
 * `<input>` elements inside accessible custom controls (AgnosticUI/uirig#56).
 */
function isVisuallyHiddenControlNode(violation: UirigRawViolation): boolean {
  if (
    /(?:^|[\s>])span\.(?:visually-hidden|[a-z0-9-]+__label-sr)(?:$|[\s.#[:>])/i.test(
      violation.selector
    )
  ) {
    return true;
  }

  if (!violation.inShadowDom) {
    return false;
  }

  return /(?:>>\s*)input(?:#ag-(?:checkbox|radio)-[a-z0-9]+-input|\.(?:selection-button|selection-card)__input)(?:$|[\s.#[:>])/i.test(
    violation.selector
  );
}

/**
 * Matches closed/inactive overlays and tooltips evaluated while visually hidden
 * (`opacity: 0` / `visibility: hidden`) with 1.00:1 contrast (AgnosticUI/uirig#57).
 */
function isHiddenOverlayNode(violation: UirigRawViolation): boolean {
  if (
    (violation.engine !== 'contrast' && violation.engine !== 'dark-mode') ||
    !violation.measuredDelta.includes('contrast 1.00:1')
  ) {
    return false;
  }

  return /(?:>>\s*)div\.(?:ag-combobox__no-results|ag-slider__tooltip)(?:$|[\s.#[:>])/i.test(
    violation.selector
  );
}

/**
 * Replaces runtime `generateUniqueId()` 8- or 9-character base36 tokens embedded
 * inside element IDs (e.g. `#accordion-item-0cv3q6j2a-button` -> `#accordion-item-<id>-button`)
 * so repeated component instances collapse into a single deduplicated finding.
 */
export function normalizeSelectorForFingerprint(selector: string): string {
  return selector.replace(
    /(#[a-z0-9-]+-)[a-z0-9]{8,9}(-[a-z0-9-]+|$)/gi,
    '$1<id>$2'
  );
}

export function classifyViolationCause(
  violation: UirigRawViolation,
  knownDarkTokenValues: ReadonlySet<string> = new Set()
): { cause: FindingCause; upstreamTrackingId: string | null } {
  const isDarkContext = violation.viewport.includes('[theme: dark]');

  // UTB-001 (fixed in @rlevin/uirig@0.3.1, kept for backward compatibility):
  // single tokensPath ignoring ag-tokens-dark.css in dark mode
  if (violation.engine === 'tokens' && isDarkContext) {
    const colorMatch = violation.measuredDelta.match(/rgb\([^)]+\)/);
    if (colorMatch && knownDarkTokenValues.has(colorMatch[0])) {
      return { cause: 'upstream-tool-bug', upstreamTrackingId: 'UTB-001' };
    }
  }

  // UTB-002 (AgnosticUI/uirig#54): Shadow DOM <slot> evaluated against outer body background
  if (
    (violation.engine === 'contrast' || violation.engine === 'dark-mode') &&
    violation.inShadowDom &&
    violation.selector.endsWith('>> slot')
  ) {
    return { cause: 'upstream-tool-bug', upstreamTrackingId: 'UTB-002' };
  }

  // Harness container and light-DOM preview template wrapper artifacts
  if (isLightDomHarnessNode(violation)) {
    return { cause: 'harness-artifact', upstreamTrackingId: null };
  }

  // UTB-004 (AgnosticUI/uirig#56): 1px × 1px visually-hidden SR spans and native inputs
  if (
    (violation.engine === 'contrast' ||
      violation.engine === 'dark-mode' ||
      violation.engine === 'tokens' ||
      (violation.engine === 'stress' &&
        violation.violationType === 'undersized_touch_target')) &&
    isVisuallyHiddenControlNode(violation)
  ) {
    return { cause: 'upstream-tool-bug', upstreamTrackingId: 'UTB-004' };
  }

  // UTB-005 (AgnosticUI/uirig#57): closed/hidden overlays & tooltips at 1.00:1 contrast
  if (isHiddenOverlayNode(violation)) {
    return { cause: 'upstream-tool-bug', upstreamTrackingId: 'UTB-005' };
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
    const normalizedSelector = normalizeSelectorForFingerprint(v.selector);
    const fingerprint = [
      component,
      v.engine,
      v.violationType,
      normalizedSelector,
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
      selector: normalizedSelector,
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
