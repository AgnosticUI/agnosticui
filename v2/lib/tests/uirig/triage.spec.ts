// v2/lib/tests/uirig/triage.spec.ts
import { describe, it, expect } from 'vitest';
import {
  classifyViolationCause,
  deduplicateViolations,
  normalizeSelectorForFingerprint,
  type UirigRawReport,
  type UirigRawViolation,
} from './triage';

function makeViolation(overrides: Partial<UirigRawViolation>): UirigRawViolation {
  return {
    engine: 'contrast',
    violationType: 'contrast_drop',
    url: 'http://localhost:4174/tests/uirig/harness/index.html?component=Button',
    viewport: 'desktop (1440x900) [theme: light]',
    hostComponent: 'ag-button',
    a2ui: null,
    selector: 'ag-button >> shadow-root >> button',
    inShadowDom: true,
    occurrenceCount: 1,
    measuredDelta: 'contrast 3.20:1 (required >= 4.50:1)',
    suggestedToken: null,
    remediationAdvice: 'Adjust contrast',
    sourceFile: null,
    lineNumber: null,
    columnNumber: null,
    unifiedDiff: null,
    ...overrides,
  };
}

describe('uirig/triage', () => {
  it('classifies dark-mode token hits matching known dark tokens as UTB-001 upstream-tool-bug', () => {
    const darkTokens = new Set(['rgb(240, 246, 252)', 'rgb(1, 4, 9)']);
    const violation = makeViolation({
      engine: 'tokens',
      violationType: 'token_drift',
      viewport: 'mobile (375x812) [theme: dark]',
      selector: 'ag-button',
      inShadowDom: false,
      measuredDelta: 'color: rgb(240, 246, 252)',
    });

    expect(classifyViolationCause(violation, darkTokens)).toEqual({
      cause: 'upstream-tool-bug',
      upstreamTrackingId: 'UTB-001',
    });
  });

  it('classifies Shadow DOM >> slot contrast hits as UTB-002 upstream-tool-bug', () => {
    const violation = makeViolation({
      engine: 'dark-mode',
      violationType: 'dark_mode_contrast_drop',
      selector: 'ag-button >> shadow-root >> slot',
      inShadowDom: true,
    });

    expect(classifyViolationCause(violation)).toEqual({
      cause: 'upstream-tool-bug',
      upstreamTrackingId: 'UTB-002',
    });
  });

  it('classifies document, document.documentElement, and light-DOM preview wrappers as harness-artifact', () => {
    const cases: Array<Partial<UirigRawViolation>> = [
      {
        engine: 'dom',
        violationType: 'missing_frame_header',
        selector: 'document',
        inShadowDom: false,
      },
      {
        engine: 'stress',
        violationType: 'horizontal_scrollbar',
        selector: 'document.documentElement',
        inShadowDom: false,
      },
      {
        engine: 'tokens',
        violationType: 'token_drift',
        selector: 'h3',
        inShadowDom: false,
      },
      {
        engine: 'stress',
        violationType: 'container_overflow',
        selector: 'div',
        inShadowDom: false,
      },
    ];

    for (const overrides of cases) {
      expect(classifyViolationCause(makeViolation(overrides))).toEqual({
        cause: 'harness-artifact',
        upstreamTrackingId: null,
      });
    }
  });

  it('classifies visually-hidden screen-reader-only spans as false-positive on contrast engines', () => {
    const srSpan = makeViolation({
      engine: 'dark-mode',
      violationType: 'dark_mode_contrast_drop',
      selector: 'ag-selection-button >> shadow-root >> span.selection-button__label-sr',
      inShadowDom: true,
    });
    const visuallyHiddenSpan = makeViolation({
      engine: 'contrast',
      violationType: 'contrast_drop',
      selector: 'ag-icon-button >> shadow-root >> span.visually-hidden',
      inShadowDom: true,
    });

    expect(classifyViolationCause(srSpan)).toEqual({
      cause: 'false-positive',
      upstreamTrackingId: null,
    });
    expect(classifyViolationCause(visuallyHiddenSpan)).toEqual({
      cause: 'false-positive',
      upstreamTrackingId: null,
    });
  });

  it('classifies genuine component violations as component-defect', () => {
    const violation = makeViolation({
      engine: 'stress',
      violationType: 'horizontal_overflow',
      selector: 'ag-dialog >> shadow-root >> .dialog-panel',
      inShadowDom: true,
      measuredDelta: 'overflow +18px',
    });

    expect(classifyViolationCause(violation)).toEqual({
      cause: 'component-defect',
      upstreamTrackingId: null,
    });
  });

  it('normalizes random generateUniqueId() suffixes and collapses repeated instances', () => {
    expect(
      normalizeSelectorForFingerprint(
        'ag-accordion-item >> shadow-root >> button#accordion-item-0cv3q6j2a-button'
      )
    ).toBe('ag-accordion-item >> shadow-root >> button#accordion-item-<id>-button');

    const report: UirigRawReport = {
      tool: 'uirig',
      exitCode: 1,
      passed: false,
      timestamp: '2026-11-24T02:00:00.000Z',
      summary: {
        totalViewportsAudited: 1,
        totalTokenViolations: 2,
        totalContrastViolations: 0,
        totalDarkModeViolations: 0,
        totalStressViolations: 0,
        totalClsViolations: 0,
        totalDomViolations: 0,
        totalRuntimeErrors: 0,
      },
      violations: [
        makeViolation({
          engine: 'tokens',
          violationType: 'token_drift',
          selector:
            'ag-accordion-item >> shadow-root >> button#accordion-item-0cv3q6j2a-button',
          occurrenceCount: 1,
        }),
        makeViolation({
          engine: 'tokens',
          violationType: 'token_drift',
          selector:
            'ag-accordion-item >> shadow-root >> button#accordion-item-a100zxa3s-button',
          occurrenceCount: 1,
        }),
      ],
    };

    const triaged = deduplicateViolations('Accordion', report);
    expect(triaged).toHaveLength(1);
    expect(triaged[0].selector).toBe(
      'ag-accordion-item >> shadow-root >> button#accordion-item-<id>-button'
    );
    expect(triaged[0].totalOccurrences).toBe(2);
  });

  it('deduplicates identical findings across mobile and desktop viewports while summing occurrences', () => {
    const report: UirigRawReport = {
      tool: 'uirig',
      exitCode: 1,
      passed: false,
      timestamp: '2026-11-24T02:00:00.000Z',
      summary: {
        totalViewportsAudited: 2,
        totalTokenViolations: 0,
        totalContrastViolations: 2,
        totalDarkModeViolations: 0,
        totalStressViolations: 0,
        totalClsViolations: 0,
        totalDomViolations: 0,
        totalRuntimeErrors: 0,
      },
      violations: [
        makeViolation({
          viewport: 'mobile (375x812) [theme: light]',
          occurrenceCount: 2,
        }),
        makeViolation({
          viewport: 'desktop (1440x900) [theme: light]',
          occurrenceCount: 2,
        }),
      ],
    };

    const triaged = deduplicateViolations('Button', report);
    expect(triaged).toHaveLength(1);
    expect(triaged[0].viewports).toEqual([
      'mobile (375x812) [theme: light]',
      'desktop (1440x900) [theme: light]',
    ]);
    expect(triaged[0].totalOccurrences).toBe(4);
    expect(triaged[0].cause).toBe('component-defect');
  });
});
