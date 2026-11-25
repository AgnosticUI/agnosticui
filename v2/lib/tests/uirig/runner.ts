// v2/lib/tests/uirig/runner.ts
import { spawn, spawnSync, type ChildProcess } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ComponentName } from '../shared/component-registry';
import { resolveAuditScope } from './audit-scope';
import { parseAuditCliArgs } from './cli-args';
import {
  assertDistArtifactsExist,
  buildDistPreviewHarness,
  getViteServerArgs,
} from './dist-artifacts';
import { getGitChangedFiles } from './planner';
import { writeCombinedTokenScale } from './token-scale';
import {
  deduplicateViolations,
  type TriagedFinding,
  type UirigRawReport,
} from './triage';
import { getHarnessUrl } from './harness-url';

export interface ComponentAuditSummary {
  component: ComponentName;
  exitCode: number;
  elapsedMs: number;
  rawViolationCount: number;
  findings: TriagedFinding[];
}

export interface FullAuditReport {
  generatedAt: string;
  failed: boolean;
  failureReason: string | null;
  auditedComponents: number;
  totalElapsedMs: number;
  countsByCause: {
    'component-defect': number;
    'upstream-tool-bug': number;
    'harness-artifact': number;
    'false-positive': number;
  };
  results: ComponentAuditSummary[];
}

const CURRENT_FILE = fileURLToPath(import.meta.url);
const CURRENT_DIR = dirname(CURRENT_FILE);
const LIB_ROOT = resolve(CURRENT_DIR, '../..');
const COMBINED_TOKENS_PATH = resolve(LIB_ROOT, '.uirig/ag-tokens-combined.css');
const REPORT_OUTPUT_PATH = resolve(LIB_ROOT, '.uirig/audit-report.json');
const UIRIG_BIN = resolve(LIB_ROOT, 'node_modules/.bin/uirig');
const VITE_BIN = resolve(LIB_ROOT, 'node_modules/.bin/vite');
export const HARNESS_STAGE_SCOPE = '#uirig-stage';

export function buildUirigCheckArgs(
  targetUrl: string,
  tokensPath: string = COMBINED_TOKENS_PATH
): string[] {
  return [
    'check',
    targetUrl,
    `--tokens-path=${tokensPath}`,
    '--themes=light,dark',
    `--scope=${HARNESS_STAGE_SCOPE}`,
    '--json',
  ];
}

function getTokenSourcePaths(useDist: boolean): {
  lightPath: string;
  darkPath: string;
} {
  const dir = useDist ? 'dist/styles' : 'src/styles';
  return {
    lightPath: resolve(LIB_ROOT, dir, 'ag-tokens.css'),
    darkPath: resolve(LIB_ROOT, dir, 'ag-tokens-dark.css'),
  };
}

function summarizeCounts(
  results: readonly ComponentAuditSummary[]
): FullAuditReport['countsByCause'] {
  const countsByCause: FullAuditReport['countsByCause'] = {
    'component-defect': 0,
    'upstream-tool-bug': 0,
    'harness-artifact': 0,
    'false-positive': 0,
  };

  for (const result of results) {
    for (const finding of result.findings) {
      countsByCause[finding.cause] += 1;
    }
  }

  return countsByCause;
}

function writeAuditReport(report: FullAuditReport): void {
  mkdirSync(resolve(LIB_ROOT, '.uirig'), { recursive: true });
  writeFileSync(REPORT_OUTPUT_PATH, JSON.stringify(report, null, 2), 'utf8');
}

async function isServerReady(url: string): Promise<boolean> {
  try {
    const res = await fetch(url);
    return res.ok;
  } catch {
    return false;
  }
}

async function ensureViteServer(
  harnessBaseUrl: string,
  useDist: boolean
): Promise<ChildProcess | null> {
  if (await isServerReady(harnessBaseUrl)) {
    return null;
  }

  const child = spawn(VITE_BIN, getViteServerArgs(useDist), {
    cwd: LIB_ROOT,
    stdio: 'ignore',
  });

  for (let i = 0; i < 30; i += 1) {
    if (await isServerReady(harnessBaseUrl)) {
      return child;
    }
    await new Promise((r) => setTimeout(r, 250));
  }

  child.kill('SIGKILL');
  throw new Error(`Timed out waiting for Vite uirig server at ${harnessBaseUrl}`);
}

function runSingleComponentAudit(
  component: ComponentName,
  darkRgbValues: ReadonlySet<string>,
  harnessBaseUrl: string
): ComponentAuditSummary {
  const targetUrl =
    `${harnessBaseUrl}?component=${encodeURIComponent(component)}`;
  const start = Date.now();
  const proc = spawnSync(
    UIRIG_BIN,
    buildUirigCheckArgs(targetUrl, COMBINED_TOKENS_PATH),
    {
      cwd: LIB_ROOT,
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
    }
  );
  const elapsedMs = Date.now() - start;

  if (!proc.stdout || !proc.stdout.trim()) {
    throw new Error(
      `uirig produced empty stdout for ${component} (exit=${proc.status}): ${proc.stderr ?? ''}`
    );
  }

  let rawReport: UirigRawReport;
  try {
    rawReport = JSON.parse(proc.stdout) as UirigRawReport;
  } catch (err) {
    throw new Error(
      `uirig produced invalid JSON for ${component} (exit=${proc.status}): ${(err as Error).message}`
    );
  }

  const findings = deduplicateViolations(component, rawReport, darkRgbValues);

  return {
    component,
    exitCode: proc.status ?? 1,
    elapsedMs,
    rawViolationCount: rawReport.violations.length,
    findings,
  };
}

async function main(): Promise<void> {
  const argv = process.argv.slice(2);
  const useDist = argv.includes('--dist');
  const auditArgs = argv.filter((arg) => arg !== '--dist');
  const options = parseAuditCliArgs(auditArgs);

  const changedPaths = options.changed
    ? getGitChangedFiles(options.baseRef ?? 'HEAD')
    : [];
  const scope = resolveAuditScope(options, changedPaths);
  const targets = scope.components;
  const harnessBaseUrl = getHarnessUrl({ useDist });

  if (options.changed) {
    console.log(
      `[uirig:audit] Changed-file scope: ${scope.changedPlan?.relevantPaths.length ?? 0} relevant path(s); ` +
        `${scope.changedPlan?.fullSweep ? 'full registry sweep' : 'targeted sweep'}.`
    );
  }

  console.log(
    `[uirig:audit] Harness: ${useDist ? 'dist (vite preview)' : 'source (vite dev)'} (${harnessBaseUrl})`
  );

  if (targets.length === 0) {
    console.log('[uirig:audit] No components selected; nothing to audit.');
  } else {
    console.log(`[uirig:audit] Components: ${targets.join(', ')}`);
  }

  if (useDist) {
    assertDistArtifactsExist(LIB_ROOT);
    buildDistPreviewHarness(LIB_ROOT, VITE_BIN);
  }

  const { lightPath, darkPath } = getTokenSourcePaths(useDist);
  const { darkRgbValues } = writeCombinedTokenScale(
    lightPath,
    darkPath,
    COMBINED_TOKENS_PATH
  );

  const suiteStart = Date.now();
  const results: ComponentAuditSummary[] = [];

  if (targets.length > 0) {
    const viteProcess = await ensureViteServer(harnessBaseUrl, useDist);

    try {
      for (const component of targets) {
        const summary = runSingleComponentAudit(
          component,
          darkRgbValues,
          harnessBaseUrl
        );
        results.push(summary);

        const defects = summary.findings.filter(
          (finding) => finding.cause === 'component-defect'
        ).length;
        const upstream = summary.findings.filter(
          (finding) => finding.cause === 'upstream-tool-bug'
        ).length;

        console.log(
          `[uirig:audit] ${component}: ${summary.elapsedMs}ms | raw=${summary.rawViolationCount} | defects=${defects} | upstream=${upstream}`
        );
      }
    } catch (error) {
      const failureReason =
        error instanceof Error ? error.message : String(error);
      const countsByCause = summarizeCounts(results);
      writeAuditReport({
        generatedAt: new Date().toISOString(),
        failed: true,
        failureReason,
        auditedComponents: results.length,
        totalElapsedMs: Date.now() - suiteStart,
        countsByCause,
        results,
      });
      throw error;
    } finally {
      if (viteProcess) {
        viteProcess.kill('SIGKILL');
      }
    }
  }

  const countsByCause = summarizeCounts(results);
  const nonzeroWithoutKnownOnly = results.some(
    (r) =>
      r.exitCode !== 0 &&
      r.findings.every(
        (f) => f.cause !== 'upstream-tool-bug' && f.cause !== 'harness-artifact'
      )
  );

  const report: FullAuditReport = {
    generatedAt: new Date().toISOString(),
    failed: countsByCause['component-defect'] > 0 || nonzeroWithoutKnownOnly,
    failureReason:
      countsByCause['component-defect'] > 0
        ? `Detected ${countsByCause['component-defect']} component defect(s).`
        : nonzeroWithoutKnownOnly
          ? 'One or more component audits exited with a non-zero status.'
          : null,
    auditedComponents: results.length,
    totalElapsedMs: Date.now() - suiteStart,
    countsByCause,
    results,
  };

  writeAuditReport(report);

  console.log(
    `[uirig:audit] Complete (${report.auditedComponents} components in ${report.totalElapsedMs}ms). Report: ${REPORT_OUTPUT_PATH}`
  );
  console.log('[uirig:audit] Counts by cause:', JSON.stringify(countsByCause));

  if (report.failed) {
    process.exitCode = 1;
  }
}

const entryArg = process.argv.at(1);
if (entryArg !== undefined && resolve(entryArg) === resolve(CURRENT_FILE)) {
  void main();
}
