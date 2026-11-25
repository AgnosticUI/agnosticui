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

  it('classifies document, light-DOM preview wrappers, and sibling demo collisions as harness-artifact', () => {
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
      {
        engine: 'stress',
        violationType: 'touch_target_collision',
        selector: 'ag-button >> shadow-root >> button',
        inShadowDom: true,
        measuredDelta: '+8px',
      },
      {
        engine: 'stress',
        violationType: 'touch_target_collision',
        selector: 'ag-icon-button >> shadow-root >> button',
        inShadowDom: true,
        measuredDelta: '+8px',
      },
      {
        engine: 'stress',
        violationType: 'touch_target_collision',
        selector:
          'ag-menu-button >> shadow-root >> ag-button >> shadow-root >> button',
        inShadowDom: true,
        measuredDelta: '+8px',
      },
    ];

    for (const overrides of cases) {
      expect(classifyViolationCause(makeViolation(overrides))).toEqual({
        cause: 'harness-artifact',
        upstreamTrackingId: null,
      });
    }
  });

  it('classifies genuine component violations (including states engine) as component-defect', () => {
    const stressViolation = makeViolation({
      engine: 'stress',
      violationType: 'horizontal_overflow',
      selector: 'ag-dialog >> shadow-root >> .dialog-panel',
      inShadowDom: true,
      measuredDelta: 'overflow +18px',
    });
    const statesViolation = makeViolation({
      engine: 'states',
      violationType: 'missing_focus_visible',
      selector: 'ag-combobox >> shadow-root >> input#combobox-1bl9i9axm-input',
      inShadowDom: true,
      measuredDelta:
        "Interactive control 'ag-combobox >> shadow-root >> input#combobox-1bl9i9axm-input' produces zero visual style change under :focus-visible (missing focus ring).",
    });

    expect(classifyViolationCause(stressViolation)).toEqual({
      cause: 'component-defect',
      upstreamTrackingId: null,
    });
    expect(classifyViolationCause(statesViolation)).toEqual({
      cause: 'component-defect',
      upstreamTrackingId: null,
    });
  });

  it('normalizes 8- and 9-char generateUniqueId() suffixes in both selector and measuredDelta and collapses repeated instances', () => {
    expect(
      normalizeSelectorForFingerprint(
        'ag-accordion-item >> shadow-root >> button#accordion-item-0cv3q6j2a-button'
      )
    ).toBe('ag-accordion-item >> shadow-root >> button#accordion-item-<id>-button');

    expect(
      normalizeSelectorForFingerprint(
        "Interactive control 'ag-combobox >> shadow-root >> input#combobox-1bl9i9axm-input' produces zero visual style change under :focus-visible (missing focus ring)."
      )
    ).toBe(
      "Interactive control 'ag-combobox >> shadow-root >> input#combobox-<id>-input' produces zero visual style change under :focus-visible (missing focus ring)."
    );

    const report: UirigRawReport = {
      tool: 'uirig',
      exitCode: 1,
      passed: false,
      timestamp: '2026-11-25T20:00:00.000Z',
      summary: {
        totalViewportsAudited: 1,
        totalTokenViolations: 0,
        totalContrastViolations: 0,
        totalDarkModeViolations: 0,
        totalStressViolations: 0,
        totalClsViolations: 0,
        totalDomViolations: 0,
        totalStateViolations: 2,
        totalRuntimeErrors: 0,
      },
      violations: [
        makeViolation({
          engine: 'states',
          violationType: 'missing_focus_visible',
          selector:
            'ag-combobox >> shadow-root >> input#combobox-1bl9i9axm-input',
          measuredDelta:
            "Interactive control 'ag-combobox >> shadow-root >> input#combobox-1bl9i9axm-input' produces zero visual style change under :focus-visible (missing focus ring).",
          occurrenceCount: 1,
        }),
        makeViolation({
          engine: 'states',
          violationType: 'missing_focus_visible',
          selector:
            'ag-combobox >> shadow-root >> input#combobox-43ugbfxto-input',
          measuredDelta:
            "Interactive control 'ag-combobox >> shadow-root >> input#combobox-43ugbfxto-input' produces zero visual style change under :focus-visible (missing focus ring).",
          occurrenceCount: 1,
        }),
      ],
    };

    const triaged = deduplicateViolations('Combobox', report);
    expect(triaged).toHaveLength(1);
    expect(triaged[0].selector).toBe(
      'ag-combobox >> shadow-root >> input#combobox-<id>-input'
    );
    expect(triaged[0].totalOccurrences).toBe(2);
  });

  it('deduplicates identical findings across mobile and desktop viewports while summing occurrences', () => {
    const report: UirigRawReport = {
      tool: 'uirig',
      exitCode: 1,
      passed: false,
      timestamp: '2026-11-25T20:00:00.000Z',
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
