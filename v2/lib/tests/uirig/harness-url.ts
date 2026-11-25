export interface HarnessUrlOptions {
  useDist?: boolean;
}

export const UIRIG_SOURCE_HARNESS_URL =
  'http://localhost:4174/tests/uirig/harness/index.html';
export const UIRIG_DIST_HARNESS_URL =
  'http://localhost:4174/tests/uirig/harness/dist.html';

export function getHarnessUrl(options: HarnessUrlOptions = {}): string {
  return options.useDist ? UIRIG_DIST_HARNESS_URL : UIRIG_SOURCE_HARNESS_URL;
}